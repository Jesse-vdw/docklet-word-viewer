import { WordDocumentLoader } from '../../src/ui/views/WordDocumentLoader.ts';
import type { DocxParser } from '../../src/services/docx/DocxParser.ts';
import type { SfdtParser } from '../../src/services/docx/SfdtParser.ts';
import type { WordDocumentModel } from '../../src/services/docx/wordModel.ts';
import type { WordReadResult } from '../../src/adapters/io/WordFileRepository.ts';
import type { WordViewerSettings } from '../../src/settings/settings.ts';

describe('WordDocumentLoader', () => {
	it('uses local parsing by default', async () => {
		const local = makeModel('local');
		const loader = makeLoader({ parse: () => local });
		await expect(loader.load(read(), settings())).resolves.toBe(local);
	});

	it('uses preferred remote conversion when it is enabled and configured', async () => {
		const remote = makeModel('remote');
		const loader = makeLoader(
			{ parse: () => makeModel('local') },
			{ parse: () => remote },
			{ convertToSfdt: async () => '{}' },
		);
		await expect(
			loader.load(read(), settings({ allowRemoteConversion: true, preferRemoteConversion: true })),
		).resolves.toBe(remote);
	});

	it('falls back to remote conversion when local parsing fails and preserves local errors when remote also fails', async () => {
		const localError = new Error('local failed');
		const remote = makeModel('remote');
		await expect(
			makeLoader(
				{
					parse: () => {
						throw localError;
					},
				},
				{ parse: () => remote },
				{ convertToSfdt: async () => '{}' },
			).load(read(), settings({ allowRemoteConversion: true })),
		).resolves.toBe(remote);
		await expect(
			makeLoader(
				{
					parse: () => {
						throw localError;
					},
				},
				{ parse: () => remote },
				{
					convertToSfdt: async () => {
						throw new Error('remote failed');
					},
				},
			).load(read(), settings({ allowRemoteConversion: true })),
		).rejects.toBe(localError);
	});
});

function makeLoader(
	parser: Partial<DocxParser>,
	sfdtParser: Partial<SfdtParser> = { parse: () => makeModel('sfdt') },
	conversionClient = { convertToSfdt: async () => '{}' },
): WordDocumentLoader {
	return new WordDocumentLoader(
		parser as DocxParser,
		sfdtParser as SfdtParser,
		conversionClient as never,
		() => undefined,
	);
}

function settings(patch: Partial<WordViewerSettings> = {}): WordViewerSettings {
	return {
		defaultLayout: 'paginated',
		maxFileSizeMb: 25,
		allowRemoteConversion: false,
		preferRemoteConversion: false,
		syncfusionServiceUrl: 'http://localhost:62869/api/documenteditor/',
		remoteConversionTimeoutMs: 15000,
		...patch,
	};
}

function read(): WordReadResult {
	return {
		data: new ArrayBuffer(1),
		file: { path: 'doc.docx' } as never,
		mtime: 0,
		size: 1,
	};
}

function makeModel(title: string): WordDocumentModel {
	return {
		title,
		metadata: { title: null, subject: null, creator: null, description: null, created: null, modified: null },
		blocks: [],
		headers: [],
		footers: [],
		footnotes: [],
		endnotes: [],
		comments: [],
		outline: [],
		stats: {
			paragraphs: 0,
			tables: 0,
			images: 0,
			lists: 0,
			links: 0,
			comments: 0,
			footnotes: 0,
			endnotes: 0,
			unsupported: 0,
		},
		warnings: [],
		unsupportedFeatures: [],
		plainText: '',
	};
}
