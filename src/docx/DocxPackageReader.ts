import { unzipSync, type UnzipFileInfo } from 'fflate';
import { WordViewerDomainError } from '../domainErrors.ts';
import { decodeUtf8, desc, parseXml } from './DocxXml.ts';

export const DOCUMENT_XML_PATH = 'word/document.xml';
export const DOCUMENT_RELS_PATH = 'word/_rels/document.xml.rels';
export const CONTENT_TYPES_PATH = '[Content_Types].xml';
export const CORE_PROPS_PATH = 'docProps/core.xml';
export const STYLES_XML_PATH = 'word/styles.xml';
export const NUMBERING_XML_PATH = 'word/numbering.xml';
export const COMMENTS_XML_PATH = 'word/comments.xml';
export const FOOTNOTES_XML_PATH = 'word/footnotes.xml';
export const ENDNOTES_XML_PATH = 'word/endnotes.xml';

const MAX_ZIP_ENTRIES = 1500;
const MAX_UNCOMPRESSED_BYTES = 150 * 1024 * 1024;
const MAX_SINGLE_MEDIA_BYTES = 25 * 1024 * 1024;
const RELEVANT_PARTS = new Set([CONTENT_TYPES_PATH, DOCUMENT_XML_PATH, DOCUMENT_RELS_PATH, CORE_PROPS_PATH, STYLES_XML_PATH, NUMBERING_XML_PATH, COMMENTS_XML_PATH, FOOTNOTES_XML_PATH, ENDNOTES_XML_PATH]);

export interface DocxPackageData {
	files: Record<string, Uint8Array>;
	documentXml: XMLDocument;
	warnings: string[];
	unsupportedFeatures: string[];
}

type DocxUnzip = (data: Uint8Array, options: { filter(file: UnzipFileInfo): boolean }) => Record<string, Uint8Array>;

export class DocxPackageReader {
	constructor(private readonly unzip: DocxUnzip = unzipSync) {}

	read(data: ArrayBuffer): DocxPackageData {
		const warnings: string[] = [];
		const stats = { entries: 0, uncompressedBytes: 0 };
		let files: Record<string, Uint8Array>;
		try {
			files = this.unzip(new Uint8Array(data), { filter: (file) => this.shouldExtract(file, stats, warnings) });
		} catch (error) {
			if (error instanceof WordViewerDomainError) { throw error; }
			throw new WordViewerDomainError('INVALID_PACKAGE', `Could not unzip DOCX package: ${String(error)}`);
		}
		if (!files[CONTENT_TYPES_PATH] || !files[DOCUMENT_XML_PATH]) {
			throw new WordViewerDomainError('INVALID_PACKAGE', 'DOCX package is missing required Word document parts.');
		}
		const documentXml = parseXml(decodeUtf8(files[DOCUMENT_XML_PATH]), DOCUMENT_XML_PATH);
		const unsupportedFeatures = collectUnsupportedFeatures(files, documentXml);
		if (!files[STYLES_XML_PATH]) { warnings.push('Document styles are missing; common Word style names will be inferred where possible.'); }
		if (unsupportedFeatures.length > 0) { warnings.push(`Unsupported Word features detected: ${unsupportedFeatures.join(', ')}.`); }
		return { files, documentXml, warnings, unsupportedFeatures };
	}

	private shouldExtract(file: UnzipFileInfo, stats: { entries: number; uncompressedBytes: number }, warnings: string[]): boolean {
		stats.entries++;
		stats.uncompressedBytes += file.originalSize;
		if (stats.entries > MAX_ZIP_ENTRIES) { throw new WordViewerDomainError('INVALID_PACKAGE', `DOCX package has too many ZIP entries (${stats.entries}).`); }
		if (stats.uncompressedBytes > MAX_UNCOMPRESSED_BYTES) { throw new WordViewerDomainError('INVALID_PACKAGE', 'DOCX package expands beyond the local safety limit.'); }
		if (!isRelevantZipPath(file.name)) { return false; }
		if (file.name.startsWith('word/media/') && file.originalSize > MAX_SINGLE_MEDIA_BYTES) {
			warnings.push(`Skipped oversized embedded media: ${file.name}.`);
			return false;
		}
		return true;
	}
}

function isRelevantZipPath(path: string): boolean {
	return RELEVANT_PARTS.has(path) || /^word\/(?:header|footer)\d+\.xml$/.test(path) || /^word\/_rels\/(?:header|footer)\d+\.xml\.rels$/.test(path) || path.startsWith('word/media/');
}

function collectUnsupportedFeatures(files: Record<string, Uint8Array>, documentXml: XMLDocument): string[] {
	const root = documentXml.documentElement;
	const checks: Array<[string, boolean]> = [
		['text boxes', desc(root, 'txbxContent').length > 0],
		['charts', desc(root, 'chart').length > 0],
		['SmartArt diagrams', desc(root, 'diagram').length > 0],
		['equations', desc(root, 'oMath').length > 0 || desc(root, 'oMathPara').length > 0],
		['tracked changes', desc(root, 'ins').length > 0 || desc(root, 'del').length > 0],
		['embedded external document parts', desc(root, 'altChunk').length > 0],
		['chart parts', Object.keys(files).some((path) => path.startsWith('word/charts/'))],
	];
	return checks.filter(([, present]) => present).map(([label]) => label);
}
