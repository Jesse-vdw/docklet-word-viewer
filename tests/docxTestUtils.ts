import { strToU8, zipSync } from 'fflate';

export type DocxPart = string | Uint8Array;

export function makeDocxPackage(parts: Record<string, DocxPart>): ArrayBuffer {
	const files: Record<string, Uint8Array> = {
		'[Content_Types].xml': strToU8('<?xml version="1.0" encoding="UTF-8"?><Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types" />', true),
		'word/_rels/document.xml.rels': strToU8('<?xml version="1.0" encoding="UTF-8"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships" />', true),
	};
	for (const [path, content] of Object.entries(parts)) {
		files[path] = typeof content === 'string' ? strToU8(content, true) : content;
	}
	return new Uint8Array(zipSync(files, { level: 0 })).buffer;
}

export function simpleDocumentXml(body: string): string {
	return `<?xml version="1.0" encoding="UTF-8"?><w:document xmlns:w="${WORD_NS}" xmlns:r="${REL_NS}"><w:body>${body}</w:body></w:document>`;
}

export function paragraphXml(text: string): string {
	return `<w:p><w:r><w:t>${text}</w:t></w:r></w:p>`;
}

export const WORD_NS = 'http://schemas.openxmlformats.org/wordprocessingml/2006/main';
export const REL_NS = 'http://schemas.openxmlformats.org/officeDocument/2006/relationships';
