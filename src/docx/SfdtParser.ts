import type { WordBlock, WordDocumentModel, WordInline, WordParagraphBlock, WordTableBlock, WordTextInline } from './wordModel.ts';

const EMPTY_METADATA = { title: null, subject: null, creator: null, description: null, created: null, modified: null };
const EMPTY_PARAGRAPH_FORMAT = { marginBeforePt: null, marginAfterPt: null, indentLeftPt: null, indentHangingPt: null, firstLineIndentPt: null };

export class SfdtParser {
	private nextId = 1;

	parse(sfdt: string): WordDocumentModel {
		this.nextId = 1;
		const root = JSON.parse(sfdt) as unknown;
		const blocks = asArray(isRecord(root) ? root['sections'] : []).flatMap((section) => isRecord(section) ? this.parseBlocks(asArray(section['blocks'])) : []);
		const plainText = plainTextFromBlocks(blocks);
		return {
			title: firstTextFromBlocks(blocks) ?? 'Converted Word document',
			metadata: EMPTY_METADATA,
			blocks,
			headers: [],
			footers: [],
			footnotes: [],
			endnotes: [],
			comments: [],
			outline: blocks.flatMap((block) => block.type === 'paragraph' && block.headingLevel !== null ? [{ id: block.id, title: plainTextFromInlines(block.inlines), level: block.headingLevel }] : []),
			stats: {
				paragraphs: blocks.filter((block) => block.type === 'paragraph').length,
				tables: blocks.filter((block) => block.type === 'table').length,
				images: 0,
				lists: 0,
				links: 0,
				comments: 0,
				footnotes: 0,
				endnotes: 0,
				unsupported: 0,
			},
			warnings: ['Rendered from self-hosted SFDT conversion; advanced editing metadata is not shown.'],
			unsupportedFeatures: [],
			plainText,
		};
	}

	private parseBlocks(blocks: unknown[]): WordBlock[] {
		return blocks.flatMap((block): WordBlock[] => {
			if (!isRecord(block)) { return []; }
			return Array.isArray(block['rows']) ? [this.parseTable(block)] : [this.parseParagraph(block)];
		});
	}

	private parseParagraph(block: Record<string, unknown>): WordParagraphBlock {
		const styleName = readNestedString(block, ['paragraphFormat', 'styleName']);
		return {
			type: 'paragraph',
			id: this.makeId('sfdt-p'),
			styleName,
			styleLabel: styleName,
			headingLevel: headingLevelFromStyle(styleName),
			alignment: null,
			list: null,
			format: EMPTY_PARAGRAPH_FORMAT,
			inlines: asArray(block['inlines']).flatMap((inline) => this.parseInline(inline)),
		};
	}

	private parseInline(inline: unknown): WordInline[] {
		if (!isRecord(inline) || typeof inline['text'] !== 'string' || inline['text'].length === 0) { return []; }
		const characterFormat = isRecord(inline['characterFormat']) ? inline['characterFormat'] : {};
		const textInline: WordTextInline = {
			type: 'text',
			text: inline['text'],
			bold: characterFormat['bold'] === true,
			italic: characterFormat['italic'] === true,
			underline: characterFormat['underline'] === true,
			strikethrough: characterFormat['strikethrough'] === true,
			superscript: characterFormat['baselineAlignment'] === 'Superscript',
			subscript: characterFormat['baselineAlignment'] === 'Subscript',
			color: typeof characterFormat['fontColor'] === 'string' ? characterFormat['fontColor'] : null,
			highlight: typeof characterFormat['highlightColor'] === 'string' ? characterFormat['highlightColor'] : null,
			fontSizePt: typeof characterFormat['fontSize'] === 'number' ? characterFormat['fontSize'] : null,
			hyperlink: null,
		};
		return [textInline];
	}

	private parseTable(block: Record<string, unknown>): WordTableBlock {
		return {
			type: 'table',
			id: this.makeId('sfdt-table'),
			rows: asArray(block['rows']).map((row) => ({
				cells: isRecord(row) ? asArray(row['cells']).map((cell) => ({ colSpan: 1, rowSpan: 1, shading: null, blocks: isRecord(cell) ? this.parseBlocks(asArray(cell['blocks'])) : [] })) : [],
			})),
		};
	}

	private makeId(prefix: string): string { return `${prefix}-${this.nextId++}`; }
}

function isRecord(value: unknown): value is Record<string, unknown> { return typeof value === 'object' && value !== null; }
function asArray(value: unknown): unknown[] { return Array.isArray(value) ? value : []; }

function readNestedString(record: Record<string, unknown>, path: string[]): string | null {
	let current: unknown = record;
	for (const key of path) {
		if (!isRecord(current)) { return null; }
		current = current[key];
	}
	return typeof current === 'string' ? current : null;
}

function headingLevelFromStyle(styleName: string | null): number | null {
	const match = /^heading([1-6])$/.exec((styleName ?? '').replace(/\s+/g, '').toLowerCase());
	return match ? Number(match[1]) : null;
}

function firstTextFromBlocks(blocks: WordBlock[]): string | null {
	for (const block of blocks) {
		if (block.type !== 'paragraph') { continue; }
		const text = plainTextFromInlines(block.inlines).trim();
		if (text.length > 0) { return text; }
	}
	return null;
}

function plainTextFromBlocks(blocks: WordBlock[]): string {
	return blocks.map((block) => {
		if (block.type === 'paragraph') { return plainTextFromInlines(block.inlines); }
		if (block.type === 'pageBreak') { return ''; }
		if (block.type === 'unsupported') { return block.label; }
		return block.rows.map((row) => row.cells.map((cell) => plainTextFromBlocks(cell.blocks)).join('\t')).join('\n');
	}).filter((text) => text.length > 0).join('\n');
}

function plainTextFromInlines(inlines: WordInline[]): string {
	return inlines.map((inline) => inline.type === 'text' ? inline.text : '').join('');
}
