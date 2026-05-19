import { WordViewerDomainError } from '../domainErrors.ts';
import { DocxPackageReader, COMMENTS_XML_PATH, CORE_PROPS_PATH, DOCUMENT_RELS_PATH, ENDNOTES_XML_PATH, FOOTNOTES_XML_PATH, NUMBERING_XML_PATH, STYLES_XML_PATH } from './DocxPackageReader.ts';
import { DocxPartParser, emptyMetadata, headingLevelFromName, parseOutlineLevel, parsePositiveInt, type NumberingDefinitions, type NumberingLevelDefinition, type RelationshipInfo, type WordStyleDefinition } from './DocxPartParser.ts';
import { attr, child, children, decodeUtf8, first, parseXml } from './DocxXml.ts';
import type { WordAlignment, WordBlock, WordCommentReferenceInline, WordDocumentComment, WordDocumentMetadata, WordDocumentModel, WordDocumentNote, WordDocumentStats, WordHeaderFooter, WordImageInline, WordInline, WordListFormat, WordListInfo, WordNoteReferenceInline, WordOutlineItem, WordParagraphBlock, WordParagraphFormat, WordTableBlock, WordTableCell } from './wordModel.ts';

const RELATIONSHIP_NAMESPACE = 'http://schemas.openxmlformats.org/officeDocument/2006/relationships';
const EMU_PER_PIXEL = 9525, TWIPS_PER_POINT = 20;

interface ParsedPackage {
	files: Record<string, Uint8Array>;
	documentXml: XMLDocument;
	relationships: Map<string, RelationshipInfo>;
	styles: Map<string, WordStyleDefinition>;
	numbering: NumberingDefinitions;
	metadata: WordDocumentMetadata;
	footnotes: Map<string, WordDocumentNote>;
	endnotes: Map<string, WordDocumentNote>;
	comments: Map<string, WordDocumentComment>;
	warnings: string[];
	unsupportedFeatures: string[];
}

interface RunFormat { bold: boolean; italic: boolean; underline: boolean; strikethrough: boolean; superscript: boolean; subscript: boolean; color: string | null; highlight: string | null; fontSizePt: number | null; }
interface ParagraphStyleInfo { styleName: string | null; styleLabel: string | null; headingLevel: number | null; }

export class DocxParser {
	private nextId = 1;
	private listCounters = new Map<string, number[]>();

	constructor(
		private readonly packageReader = new DocxPackageReader(),
		private readonly partParser = new DocxPartParser(),
	) {}

	parse(data: ArrayBuffer): WordDocumentModel {
		this.nextId = 1;
		this.listCounters.clear();
		const docx = this.readPackage(data);
		const body = first(docx.documentXml.documentElement, 'body');
		if (!body) { throw new WordViewerDomainError('INVALID_PACKAGE', 'DOCX package does not contain a Word document body.'); }
		const stats = createEmptyStats();
		stats.comments = docx.comments.size;
		stats.footnotes = docx.footnotes.size;
		stats.endnotes = docx.endnotes.size;
		const blocks = this.parseBlocks(body, docx, stats);
		const headers = this.parseHeaderFooterParts(docx, 'header', stats);
		const footers = this.parseHeaderFooterParts(docx, 'footer', stats);
		const unsupportedFeatures = uniqueStrings(docx.unsupportedFeatures);
		stats.unsupported = unsupportedFeatures.length;
		return {
			title: docx.metadata.title ?? firstTextFromBlocks(blocks) ?? 'Word document',
			metadata: docx.metadata,
			blocks,
			headers,
			footers,
			footnotes: [...docx.footnotes.values()],
			endnotes: [...docx.endnotes.values()],
			comments: [...docx.comments.values()],
			outline: buildOutline(blocks),
			stats,
			warnings: uniqueStrings(docx.warnings),
			unsupportedFeatures,
			plainText: plainTextFromBlocks(blocks),
		};
	}

	private readPackage(data: ArrayBuffer): ParsedPackage {
		const docx = this.packageReader.read(data);
		return {
			...docx,
			relationships: this.partParser.parseRelationships(docx.files[DOCUMENT_RELS_PATH]),
			styles: this.partParser.parseStyles(docx.files[STYLES_XML_PATH]),
			numbering: this.partParser.parseNumbering(docx.files[NUMBERING_XML_PATH]),
			metadata: this.partParser.parseMetadata(docx.files[CORE_PROPS_PATH]),
			footnotes: this.parseNotes(docx.files[FOOTNOTES_XML_PATH], 'footnote'),
			endnotes: this.parseNotes(docx.files[ENDNOTES_XML_PATH], 'endnote'),
			comments: this.parseComments(docx.files[COMMENTS_XML_PATH]),
		};
	}

	private parseBlocks(container: Element, docx: ParsedPackage, stats: WordDocumentStats): WordBlock[] {
		const blocks: WordBlock[] = [];
		for (const childElement of children(container)) {
			if (childElement.localName === 'p') { blocks.push(...this.splitParagraphOnPageBreaks(this.parseParagraph(childElement, docx, stats))); }
			if (childElement.localName === 'tbl') { blocks.push(this.parseTable(childElement, docx, stats)); }
			if (childElement.localName === 'sdt') {
				const content = child(childElement, 'sdtContent');
				if (content) { blocks.push(...this.parseBlocks(content, docx, stats)); }
			}
			if (childElement.localName === 'altChunk') {
				blocks.push({ type: 'unsupported', id: this.makeId('unsupported'), label: 'Embedded external document', detail: 'This Word altChunk content cannot be rendered locally yet.' });
			}
		}
		return blocks;
	}

	private parseParagraph(element: Element, docx: ParsedPackage, stats: WordDocumentStats): WordParagraphBlock {
		stats.paragraphs++;
		const style = this.parseParagraphStyle(element, docx);
		const list = this.parseListInfo(element, docx);
		if (list) { stats.lists++; }
		return {
			type: 'paragraph',
			id: this.makeId('p'),
			styleName: style.styleName,
			styleLabel: style.styleLabel,
			headingLevel: style.headingLevel,
			alignment: this.parseParagraphAlignment(element),
			list,
			format: this.parseParagraphFormat(element),
			inlines: children(element).filter((node) => node.localName === 'r' || node.localName === 'hyperlink').flatMap((node) => this.parseInlineContainer(node, docx, stats)),
		};
	}

	private splitParagraphOnPageBreaks(paragraph: WordParagraphBlock): WordBlock[] {
		if (!paragraph.inlines.some((inline) => inline.type === 'pageBreak')) { return [paragraph]; }
		const blocks: WordBlock[] = [];
		let inlines: WordInline[] = [];
		for (const inline of paragraph.inlines) {
			if (inline.type !== 'pageBreak') {
				inlines.push(inline);
				continue;
			}
			if (inlines.length > 0) { blocks.push({ ...paragraph, id: this.makeId('p'), inlines }); }
			blocks.push({ type: 'pageBreak', id: this.makeId('page') });
			inlines = [];
		}
		if (inlines.length > 0) { blocks.push({ ...paragraph, id: this.makeId('p'), inlines }); }
		return blocks.length > 0 ? blocks : [{ type: 'pageBreak', id: this.makeId('page') }];
	}

	private parseParagraphStyle(element: Element, docx: ParsedPackage): ParagraphStyleInfo {
		const paragraphProperties = child(element, 'pPr');
		const styleName = attr(child(paragraphProperties, 'pStyle'), 'val');
		const styleDefinition = styleName ? docx.styles.get(styleName) ?? null : null;
		return {
			styleName,
			styleLabel: styleDefinition?.name ?? styleName,
			headingLevel: this.parseParagraphHeadingLevel(paragraphProperties, styleName, styleDefinition),
		};
	}

	private parseParagraphHeadingLevel(paragraphProperties: Element | null, styleName: string | null, styleDefinition: WordStyleDefinition | null): number | null {
		const outline = parseOutlineLevel(attr(child(paragraphProperties, 'outlineLvl'), 'val'));
		return outline ?? styleDefinition?.headingLevel ?? headingLevelFromName(styleDefinition?.name ?? styleName ?? '');
	}

	private parseParagraphAlignment(element: Element): WordAlignment | null {
		const value = attr(child(child(element, 'pPr'), 'jc'), 'val');
		if (value === 'center' || value === 'right') { return value; }
		if (value === 'both') { return 'justify'; }
		return value === 'left' ? 'left' : null;
	}

	private parseParagraphFormat(element: Element): WordParagraphFormat {
		const paragraphProperties = child(element, 'pPr');
		const spacing = child(paragraphProperties, 'spacing'), indentation = child(paragraphProperties, 'ind');
		return {
			marginBeforePt: twipsToPoints(attr(spacing, 'before')),
			marginAfterPt: twipsToPoints(attr(spacing, 'after')),
			indentLeftPt: twipsToPoints(attr(indentation, 'left')),
			indentHangingPt: twipsToPoints(attr(indentation, 'hanging')),
			firstLineIndentPt: twipsToPoints(attr(indentation, 'firstLine')),
		};
	}

	private parseListInfo(element: Element, docx: ParsedPackage): WordListInfo | null {
		const numProperties = child(child(element, 'pPr'), 'numPr');
		if (!numProperties) { return null; }
		const numId = attr(child(numProperties, 'numId'), 'val');
		if (!numId) { return null; }
		const level = Number(attr(child(numProperties, 'ilvl'), 'val') ?? '0');
		const abstractId = docx.numbering.numToAbstract.get(numId);
		const definition = abstractId ? docx.numbering.abstractLevels.get(abstractId)?.get(level) : undefined;
		const format = definition?.format ?? 'decimal';
		return { numId, level, format, label: this.nextListLabel(numId, level, definition) };
	}

	private nextListLabel(numId: string, level: number, definition: NumberingLevelDefinition | undefined): string {
		const counters = this.listCounters.get(numId) ?? [];
		const start = definition?.start ?? 1;
		counters[level] = counters[level] === undefined ? start : counters[level] + 1;
		counters.length = level + 1;
		this.listCounters.set(numId, counters);
		const format = definition?.format ?? 'decimal';
		const fallback = format === 'bullet' ? (definition?.text ?? '•') : `${formatCounter(counters[level] ?? start, format)}.`;
		return (definition?.text ?? fallback).replace(/%([1-9])/g, (_match, index: string) => formatCounter(counters[Number(index) - 1] ?? start, format));
	}

	private parseInlineContainer(element: Element, docx: ParsedPackage, stats: WordDocumentStats): WordInline[] {
		if (element.localName !== 'hyperlink') { return this.parseRun(element, docx, stats, null); }
		const href = this.resolveHyperlink(element, docx);
		if (href) { stats.links++; }
		return children(element, 'r').flatMap((run) => this.parseRun(run, docx, stats, href));
	}

	private resolveHyperlink(element: Element, docx: ParsedPackage): string | null {
		const relationshipId = element.getAttributeNS(RELATIONSHIP_NAMESPACE, 'id') ?? element.getAttribute('r:id');
		if (relationshipId) {
			const relationship = docx.relationships.get(relationshipId);
			if (relationship?.target) { return relationship.target; }
		}
		const anchor = attr(element, 'anchor');
		return anchor ? `#${anchor}` : null;
	}

	private parseRun(element: Element, docx: ParsedPackage, stats: WordDocumentStats, hyperlink: string | null): WordInline[] {
		const format = this.parseRunFormat(element);
		const inlines: WordInline[] = [];
		for (const node of children(element)) {
			if (node.localName === 't' || node.localName === 'instrText') {
				const text = node.textContent ?? '';
				if (text.length > 0) { inlines.push({ type: 'text', text, hyperlink, ...format }); }
			} else if (node.localName === 'tab') {
				inlines.push({ type: 'text', text: '\t', hyperlink, ...format });
			} else if (node.localName === 'br' || node.localName === 'cr') {
				inlines.push(attr(node, 'type') === 'page' ? { type: 'pageBreak' } : { type: 'break' });
			} else if (node.localName === 'drawing' || node.localName === 'pict') {
				const image = this.parseImage(node, docx);
				if (image) {
					stats.images++;
					inlines.push(image);
				}
			} else if (node.localName === 'footnoteReference') {
				inlines.push({ type: 'noteReference', noteType: 'footnote', noteId: attr(node, 'id') ?? '' } satisfies WordNoteReferenceInline);
			} else if (node.localName === 'endnoteReference') {
				inlines.push({ type: 'noteReference', noteType: 'endnote', noteId: attr(node, 'id') ?? '' } satisfies WordNoteReferenceInline);
			} else if (node.localName === 'commentReference') {
				inlines.push({ type: 'commentReference', commentId: attr(node, 'id') ?? '' } satisfies WordCommentReferenceInline);
			}
		}
		return inlines;
	}

	private parseRunFormat(element: Element): RunFormat {
		const runProperties = child(element, 'rPr');
		const vertAlign = attr(child(runProperties, 'vertAlign'), 'val');
		return {
			bold: boolProperty(runProperties, 'b'),
			italic: boolProperty(runProperties, 'i'),
			underline: boolProperty(runProperties, 'u'),
			strikethrough: boolProperty(runProperties, 'strike') || boolProperty(runProperties, 'dstrike'),
			superscript: vertAlign === 'superscript',
			subscript: vertAlign === 'subscript',
			color: parseHexColor(attr(child(runProperties, 'color'), 'val')),
			highlight: parseHighlight(attr(child(runProperties, 'highlight'), 'val')),
			fontSizePt: halfPointsToPoints(attr(child(runProperties, 'sz'), 'val')),
		};
	}

	private parseImage(element: Element, docx: ParsedPackage): WordImageInline | null {
		const blip = first(element, 'blip');
		const relationshipId = blip?.getAttributeNS(RELATIONSHIP_NAMESPACE, 'embed') ?? blip?.getAttribute('r:embed') ?? null;
		if (!relationshipId) { return null; }
		const relationship = docx.relationships.get(relationshipId);
		if (!relationship?.target || relationship.targetMode === 'External') { return null; }
		const mediaPath = normalizeTargetPath('word', relationship.target);
		const bytes = docx.files[mediaPath];
		if (!bytes) { return null; }
		const extent = first(element, 'extent'), docProperties = first(element, 'docPr');
		return {
			type: 'image',
			src: `data:${mimeTypeForPath(mediaPath)};base64,${bytesToBase64(bytes)}`,
			altText: docProperties?.getAttribute('descr') ?? docProperties?.getAttribute('title') ?? 'Embedded image',
			widthPx: parseEmuAsPixels(extent?.getAttribute('cx')),
			heightPx: parseEmuAsPixels(extent?.getAttribute('cy')),
		};
	}

	private parseTable(element: Element, docx: ParsedPackage, stats: WordDocumentStats): WordTableBlock {
		stats.tables++;
		return {
			type: 'table',
			id: this.makeId('table'),
			rows: children(element, 'tr').map((row) => ({
				cells: children(row, 'tc').map((cell): WordTableCell => {
					const props = child(cell, 'tcPr') ?? cell;
					return {
						colSpan: parsePositiveInt(attr(child(props, 'gridSpan'), 'val')) ?? 1,
						rowSpan: child(props, 'vMerge') ? 1 : 1,
						shading: parseHexColor(attr(child(props, 'shd'), 'fill')),
						blocks: this.parseBlocks(cell, docx, stats),
					};
				}),
			})),
		};
	}

	private parseHeaderFooterParts(docx: ParsedPackage, kind: 'header' | 'footer', stats: WordDocumentStats): WordHeaderFooter[] {
		const prefix = `word/${kind}`;
		return Object.keys(docx.files)
			.filter((path) => path.startsWith(prefix) && path.endsWith('.xml'))
			.sort()
			.map((path): WordHeaderFooter => ({
				id: this.makeId(kind),
				kind,
				blocks: this.parseBlocks(parseXml(decodeUtf8(docx.files[path]), path).documentElement, docx, stats),
			}));
	}

	private parseNotes(bytes: Uint8Array | undefined, localName: 'footnote' | 'endnote'): Map<string, WordDocumentNote> {
		const notes = new Map<string, WordDocumentNote>();
		if (!bytes) { return notes; }
		const xml = parseXml(decodeUtf8(bytes), localName === 'footnote' ? FOOTNOTES_XML_PATH : ENDNOTES_XML_PATH);
		const docx = this.createPartPackage(xml), stats = createEmptyStats();
		for (const note of children(xml.documentElement, localName)) {
			const id = attr(note, 'id');
			if (!id || id.startsWith('-')) { continue; }
			const blocks = this.parseBlocks(note, docx, stats);
			notes.set(id, { id, blocks, plainText: plainTextFromBlocks(blocks) });
		}
		return notes;
	}

	private parseComments(bytes: Uint8Array | undefined): Map<string, WordDocumentComment> {
		const comments = new Map<string, WordDocumentComment>();
		if (!bytes) { return comments; }
		const xml = parseXml(decodeUtf8(bytes), COMMENTS_XML_PATH);
		const docx = this.createPartPackage(xml), stats = createEmptyStats();
		for (const comment of children(xml.documentElement, 'comment')) {
			const id = attr(comment, 'id');
			if (!id) { continue; }
			const blocks = this.parseBlocks(comment, docx, stats);
			comments.set(id, { id, blocks, plainText: plainTextFromBlocks(blocks), author: attr(comment, 'author'), date: attr(comment, 'date') });
		}
		return comments;
	}

	private createPartPackage(xml: XMLDocument): ParsedPackage {
		return {
			files: {},
			documentXml: xml,
			relationships: new Map(),
			styles: new Map(),
			numbering: { numToAbstract: new Map(), abstractLevels: new Map() },
			metadata: emptyMetadata(),
			footnotes: new Map(),
			endnotes: new Map(),
			comments: new Map(),
			warnings: [],
			unsupportedFeatures: [],
		};
	}

	private makeId(prefix: string): string { return `${prefix}-${this.nextId++}`; }
}

function createEmptyStats(): WordDocumentStats {
	return { paragraphs: 0, tables: 0, images: 0, lists: 0, links: 0, comments: 0, footnotes: 0, endnotes: 0, unsupported: 0 };
}

function firstTextFromBlocks(blocks: WordBlock[]): string | null {
	for (const block of blocks) {
		if (block.type === 'paragraph') {
			const text = textFromInlines(block.inlines).trim();
			if (text.length > 0) { return text; }
		}
	}
	return null;
}

function buildOutline(blocks: WordBlock[]): WordOutlineItem[] {
	return blocks.flatMap((block) => {
		if (block.type !== 'paragraph' || !block.headingLevel) { return []; }
		const title = textFromInlines(block.inlines).trim();
		return title.length > 0 ? [{ id: block.id, title, level: block.headingLevel }] : [];
	});
}

function plainTextFromBlocks(blocks: WordBlock[]): string {
	return blocks.map((block) => {
		if (block.type === 'paragraph') { return textFromInlines(block.inlines); }
		if (block.type === 'pageBreak') { return '\n--- Page break ---\n'; }
		if (block.type === 'unsupported') { return `[${block.label}]`; }
		return block.rows.map((row) => row.cells.map((cell) => plainTextFromBlocks(cell.blocks)).join('\t')).join('\n');
	}).filter((text) => text.length > 0).join('\n');
}

function textFromInlines(inlines: WordInline[]): string {
	return inlines.map((inline) => {
		if (inline.type === 'text') { return inline.text; }
		if (inline.type === 'break' || inline.type === 'pageBreak') { return '\n'; }
		if (inline.type === 'image') { return `[Image: ${inline.altText}]`; }
		return inline.type === 'noteReference' ? `[${inline.noteType} ${inline.noteId}]` : `[comment ${inline.commentId}]`;
	}).join('');
}

function boolProperty(parent: Element | null, localName: string): boolean {
	const element = child(parent, localName), value = attr(element, 'val');
	return Boolean(element) && value !== 'false' && value !== '0' && value !== 'off';
}

function normalizeTargetPath(baseDirectory: string, target: string): string {
	return normalizeZipPath(target.startsWith('/') ? target.slice(1) : `${baseDirectory}/${target}`);
}

function normalizeZipPath(path: string): string {
	const parts: string[] = [];
	for (const part of path.split('/')) {
		if (!part || part === '.') { continue; }
		if (part === '..') {
			parts.pop();
			continue;
		}
		parts.push(part);
	}
	return parts.join('/');
}

function parseEmuAsPixels(value: string | null | undefined): number | null {
	const parsed = Number(value);
	return value && Number.isFinite(parsed) ? Math.round(parsed / EMU_PER_PIXEL) : null;
}

function bytesToBase64(bytes: Uint8Array): string {
	let binary = '';
	for (let offset = 0; offset < bytes.length; offset += 0x8000) {
		binary += String.fromCharCode(...bytes.subarray(offset, offset + 0x8000));
	}
	return btoa(binary);
}

function mimeTypeForPath(path: string): string {
	const extension = path.split('.').pop()?.toLowerCase();
	return ({ jpg: 'image/jpeg', jpeg: 'image/jpeg', gif: 'image/gif', svg: 'image/svg+xml', webp: 'image/webp' } as Record<string, string>)[extension ?? ''] ?? 'image/png';
}

function twipsToPoints(value: string | null): number | null {
	const parsed = Number(value);
	return value && Number.isFinite(parsed) ? parsed / TWIPS_PER_POINT : null;
}

function halfPointsToPoints(value: string | null): number | null {
	const parsed = Number(value);
	return value && Number.isFinite(parsed) ? parsed / 2 : null;
}

function parseHexColor(value: string | null): string | null {
	return value && value !== 'auto' && /^[0-9a-fA-F]{6}$/.test(value) ? `#${value}` : null;
}

function parseHighlight(value: string | null): string | null {
	const colors: Record<string, string> = {
		yellow: '#fff59d', green: '#c8e6c9', cyan: '#b2ebf2', magenta: '#f8bbd0', blue: '#bbdefb', red: '#ffcdd2', darkBlue: '#90caf9', darkCyan: '#80deea', darkGreen: '#a5d6a7',
		darkMagenta: '#ce93d8', darkRed: '#ef9a9a', darkYellow: '#ffe082', darkGray: '#b0bec5', lightGray: '#eceff1', black: '#424242',
	};
	return value && value !== 'none' ? colors[value] ?? null : null;
}

function formatCounter(value: number, format: WordListFormat): string {
	if (format === 'lowerLetter' || format === 'upperLetter') {
		const letter = formatLetter(value);
		return format === 'upperLetter' ? letter.toUpperCase() : letter;
	}
	if (format === 'lowerRoman' || format === 'upperRoman') {
		const roman = formatRoman(value);
		return format === 'upperRoman' ? roman.toUpperCase() : roman;
	}
	return format === 'bullet' || format === 'none' ? '' : String(value);
}

function formatLetter(value: number): string {
	let current = Math.max(1, value), label = '';
	while (current > 0) {
		current--;
		label = String.fromCharCode(97 + (current % 26)) + label;
		current = Math.floor(current / 26);
	}
	return label;
}

function formatRoman(value: number): string {
	const numerals: Array<[number, string]> = [[1000, 'm'], [900, 'cm'], [500, 'd'], [400, 'cd'], [100, 'c'], [90, 'xc'], [50, 'l'], [40, 'xl'], [10, 'x'], [9, 'ix'], [5, 'v'], [4, 'iv'], [1, 'i']];
	let remaining = Math.max(1, Math.min(3999, value)), result = '';
	for (const [number, numeral] of numerals) {
		while (remaining >= number) {
			result += numeral;
			remaining -= number;
		}
	}
	return result;
}

function uniqueStrings(values: string[]): string[] { return [...new Set(values)]; }
