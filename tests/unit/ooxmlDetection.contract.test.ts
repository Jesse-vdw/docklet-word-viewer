import { describe, expect, it } from 'vitest';
import type { TFile } from 'obsidian';
import { getOfficeExtension } from '../../src/services/shared/ooxml.ts';
import { WordViewerDomainError } from '../../src/domain/WordViewerDomainError.ts';
import { WordFileRepository } from '../../src/adapters/io/WordFileRepository.ts';

describe('OOXML Word detection contract', () => {
	it('accepts only paths classified as DOCX', () => {
		const repo = new WordFileRepository({} as never);
		const file = makeFile('Docs/Plan.DOCX', 'DOCX');

		expect(getOfficeExtension(file.path)).toBe('docx');
		expect(() => repo.assertWordFile(file)).not.toThrow();
	});

	it('rejects mismatched Obsidian extensions and OOXML path extensions', () => {
		const repo = new WordFileRepository({} as never);
		const file = makeFile('Docs/Plan.docx.md', 'docx');

		expect(getOfficeExtension(file.path)).toBeNull();
		expect(() => repo.assertWordFile(file)).toThrow(WordViewerDomainError);
	});
});

function makeFile(path: string, extension: string): TFile {
	return {
		path,
		name: path.split('/').pop() ?? path,
		basename:
			path
				.split('/')
				.pop()
				?.replace(/\.[^.]+$/, '') ?? path,
		extension,
		stat: { ctime: 1, mtime: 1, size: 1 },
		parent: null,
	} as TFile;
}
