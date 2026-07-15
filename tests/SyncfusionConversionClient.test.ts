import { SyncfusionConversionClient, canUseRemoteConversion } from '../src/conversion/SyncfusionConversionClient.ts';
import type { WordReadResult } from '../src/io/WordFileRepository.ts';
import type { WordViewerSettings } from '../src/settings/settings.ts';

describe('SyncfusionConversionClient', () => {
	afterEach(() => {
		vi.restoreAllMocks();
	});

	it('guards disabled conversion and detects usable self-hosted settings', async () => {
		expect(canUseRemoteConversion(settings())).toBe(false);
		expect(canUseRemoteConversion(settings({ allowRemoteConversion: true }))).toBe(true);
		await expect(new SyncfusionConversionClient().convertToSfdt(read(), settings())).rejects.toThrow(/disabled/);
	});

	it('posts DOCX bytes to the Import endpoint and rejects failed or empty responses', async () => {
		const fetchSpy = vi
			.spyOn(globalThis, 'fetch')
			.mockResolvedValueOnce(new Response('{"sections":[]}', { status: 200 }));
		await expect(
			new SyncfusionConversionClient().convertToSfdt(read(), settings({ allowRemoteConversion: true })),
		).resolves.toBe('{"sections":[]}');
		expect(fetchSpy).toHaveBeenCalledWith(
			'http://localhost:62869/api/documenteditor/Import',
			expect.objectContaining({ method: 'POST' }),
		);
		fetchSpy.mockResolvedValueOnce(new Response('', { status: 500 }));
		await expect(
			new SyncfusionConversionClient().convertToSfdt(read(), settings({ allowRemoteConversion: true })),
		).rejects.toThrow(/HTTP 500/);
		fetchSpy.mockResolvedValueOnce(new Response('   ', { status: 200 }));
		await expect(
			new SyncfusionConversionClient().convertToSfdt(read(), settings({ allowRemoteConversion: true })),
		).rejects.toThrow(/empty SFDT/);
	});
});

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
	return { file: { name: 'doc.docx' } as never, data: new ArrayBuffer(1), mtime: 1, size: 1 };
}
