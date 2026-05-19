import { attr, child, children, decodeUtf8, desc, first, parseXml } from './DocxXml.ts';
import { CORE_PROPS_PATH, DOCUMENT_RELS_PATH, NUMBERING_XML_PATH, STYLES_XML_PATH } from './DocxPackageReader.ts';
import type { WordDocumentMetadata, WordListFormat } from './wordModel.ts';

export interface RelationshipInfo { target: string; type: string | null; targetMode: string | null; }
export interface WordStyleDefinition { styleId: string; name: string | null; basedOn: string | null; headingLevel: number | null; }
export interface NumberingDefinitions { numToAbstract: Map<string, string>; abstractLevels: Map<string, Map<number, NumberingLevelDefinition>>; }
export interface NumberingLevelDefinition { format: WordListFormat; text: string; start: number; }

export class DocxPartParser {
	parseRelationships(bytes: Uint8Array | undefined): Map<string, RelationshipInfo> {
		const relationships = new Map<string, RelationshipInfo>();
		if (!bytes) { return relationships; }
		for (const relationship of desc(parseXml(decodeUtf8(bytes), DOCUMENT_RELS_PATH).documentElement, 'Relationship')) {
			const id = relationship.getAttribute('Id'), target = relationship.getAttribute('Target');
			if (id && target) { relationships.set(id, { target, type: relationship.getAttribute('Type'), targetMode: relationship.getAttribute('TargetMode') }); }
		}
		return relationships;
	}

	parseStyles(bytes: Uint8Array | undefined): Map<string, WordStyleDefinition> {
		const styles = new Map<string, WordStyleDefinition>();
		if (!bytes) { return styles; }
		for (const style of children(parseXml(decodeUtf8(bytes), STYLES_XML_PATH).documentElement, 'style')) {
			const styleId = attr(style, 'styleId');
			if (!styleId) { continue; }
			const name = attr(child(style, 'name'), 'val');
			styles.set(styleId, { styleId, name, basedOn: attr(child(style, 'basedOn'), 'val'), headingLevel: parseOutlineLevel(attr(first(style, 'outlineLvl'), 'val')) ?? headingLevelFromName(name ?? styleId) });
		}
		return styles;
	}

	parseNumbering(bytes: Uint8Array | undefined): NumberingDefinitions {
		const definitions: NumberingDefinitions = { numToAbstract: new Map(), abstractLevels: new Map() };
		if (!bytes) { return definitions; }
		const xml = parseXml(decodeUtf8(bytes), NUMBERING_XML_PATH);
		for (const abstractNum of children(xml.documentElement, 'abstractNum')) {
			const abstractId = attr(abstractNum, 'abstractNumId');
			if (!abstractId) { continue; }
			const levels = new Map<number, NumberingLevelDefinition>();
			for (const level of children(abstractNum, 'lvl')) {
				const levelIndex = Number(attr(level, 'ilvl') ?? '0');
				const format = toListFormat(attr(child(level, 'numFmt'), 'val'));
				levels.set(levelIndex, {
					format,
					text: attr(child(level, 'lvlText'), 'val') ?? (format === 'bullet' ? '•' : `%${levelIndex + 1}.`),
					start: parsePositiveInt(attr(child(level, 'start'), 'val')) ?? 1,
				});
			}
			definitions.abstractLevels.set(abstractId, levels);
		}
		for (const num of children(xml.documentElement, 'num')) {
			const numId = attr(num, 'numId'), abstractId = attr(child(num, 'abstractNumId'), 'val');
			if (numId && abstractId) { definitions.numToAbstract.set(numId, abstractId); }
		}
		return definitions;
	}

	parseMetadata(bytes: Uint8Array | undefined): WordDocumentMetadata {
		if (!bytes) { return emptyMetadata(); }
		const root = parseXml(decodeUtf8(bytes), CORE_PROPS_PATH).documentElement;
		return Object.fromEntries(['title', 'subject', 'creator', 'description', 'created', 'modified'].map((key) => [key, textOfFirst(root, key)])) as unknown as WordDocumentMetadata;
	}
}

export function emptyMetadata(): WordDocumentMetadata {
	return { title: null, subject: null, creator: null, description: null, created: null, modified: null };
}

export function parseOutlineLevel(value: string | null): number | null {
	const parsed = Number(value);
	return value && Number.isInteger(parsed) && parsed >= 0 && parsed <= 8 ? parsed + 1 : null;
}

export function headingLevelFromName(name: string): number | null {
	const match = /^heading([1-6])$/.exec(name.replace(/\s+/g, '').toLowerCase());
	if (match) { return Number(match[1]); }
	return name.replace(/\s+/g, '').toLowerCase() === 'title' ? 1 : null;
}

export function parsePositiveInt(value: string | null): number | null {
	const parsed = Number(value);
	return value && Number.isInteger(parsed) && parsed > 0 ? parsed : null;
}

export function toListFormat(value: string | null): WordListFormat {
	return (['bullet', 'lowerLetter', 'upperLetter', 'lowerRoman', 'upperRoman', 'none'] as WordListFormat[]).includes(value as WordListFormat) ? value as WordListFormat : 'decimal';
}

function textOfFirst(element: Element, localName: string): string | null {
	const text = first(element, localName)?.textContent?.trim() ?? '';
	return text.length > 0 ? text : null;
}
