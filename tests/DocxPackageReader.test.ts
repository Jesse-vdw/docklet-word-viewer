import type { UnzipFileInfo } from 'fflate';
import { DocxPackageReader, CONTENT_TYPES_PATH, DOCUMENT_XML_PATH } from '../src/docx/DocxPackageReader.ts';
import { paragraphXml, simpleDocumentXml } from './docxTestUtils.ts';

describe('DocxPackageReader', () => {
	it('validates required parts and reports unsupported features', () => {
		const reader = new DocxPackageReader((_data, options) => {
			expect(options.filter(info(CONTENT_TYPES_PATH, 1))).toBe(true);
			expect(options.filter(info(DOCUMENT_XML_PATH, 1))).toBe(true);
			return {
				[CONTENT_TYPES_PATH]: bytes('<Types />'),
				[DOCUMENT_XML_PATH]: bytes(simpleDocumentXml(`${paragraphXml('Body')}<w:altChunk />`)),
			};
		});

		const docx = reader.read(new ArrayBuffer(1));
		expect(docx.unsupportedFeatures).toContain('embedded external document parts');
		expect(docx.warnings.join(' ')).toContain('Document styles are missing');
	});

	it('enforces entry, expansion, and single-media safety limits before parsing', () => {
		expect(() => readWith(Array.from({ length: 1501 }, (_value, index) => info(`custom/${index}.xml`, 1)))).toThrow(
			/too many ZIP entries/,
		);
		expect(() =>
			readWith([info(CONTENT_TYPES_PATH, 100 * 1024 * 1024), info(DOCUMENT_XML_PATH, 60 * 1024 * 1024)]),
		).toThrow(/safety limit/);
		expect(
			readWith([info(CONTENT_TYPES_PATH, 1), info(DOCUMENT_XML_PATH, 1), info('word/media/huge.png', 26 * 1024 * 1024)])
				.warnings[0],
		).toContain('Skipped oversized embedded media');
	});
});

function readWith(files: UnzipFileInfo[]) {
	return new DocxPackageReader((_data, options) => {
		for (const file of files) {
			options.filter(file);
		}
		return {
			[CONTENT_TYPES_PATH]: bytes('<Types />'),
			[DOCUMENT_XML_PATH]: bytes(simpleDocumentXml(paragraphXml('Body'))),
		};
	}).read(new ArrayBuffer(1));
}

function info(name: string, originalSize: number): UnzipFileInfo {
	return { name, originalSize } as UnzipFileInfo;
}

function bytes(text: string): Uint8Array {
	return new TextEncoder().encode(text);
}
