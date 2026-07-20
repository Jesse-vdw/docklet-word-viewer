import { BRIDGE_CHANNEL, BRIDGE_READY_TIMEOUT_MS } from '../src/constants.ts';
import { WordViewerBridge } from '../src/bridge/WordViewerBridge.ts';
import type { WordDocumentModel } from '../src/docx/wordModel.ts';

describe('WordViewerBridge', () => {
	afterEach(() => {
		vi.useRealTimers();
		document.body.textContent = '';
	});

	it('mounts a sandboxed iframe, resolves ready, posts commands, and dispatches callbacks', async () => {
		const container = document.body.appendChild(document.createElement('div'));
		const onError = vi.fn(),
			onSearchResult = vi.fn();
		const bridge = new WordViewerBridge(container, { onError, onSearchResult }, 'test-bridge');
		const ready = bridge.mount();
		const iframe = container.querySelector('iframe');
		expect(iframe?.getAttribute('sandbox')).toBe('allow-scripts');
		expect(iframe?.srcdoc).toContain(BRIDGE_CHANNEL);
		expect(iframe?.srcdoc).toContain('"test-bridge"');
		dispatchFrom(iframe, { protocolVersion: 1, channel: BRIDGE_CHANNEL, bridgeId: 'test-bridge', type: 'ready' });
		await ready;

		const post = vi.spyOn(iframe!.contentWindow!, 'postMessage');
		bridge.loadDocument(makeModel(), true, 'paginated');
		bridge.setSearch('word');
		expect(post).toHaveBeenCalledWith(expect.objectContaining({ bridgeId: 'test-bridge', type: 'loadDocument' }), '*');
		expect(post).toHaveBeenCalledWith(
			expect.objectContaining({ bridgeId: 'test-bridge', type: 'searchChanged', query: 'word' }),
			'*',
		);

		dispatchFrom(iframe, {
			protocolVersion: 1,
			channel: BRIDGE_CHANNEL,
			bridgeId: 'test-bridge',
			type: 'renderError',
			message: 'bad render',
		});
		dispatchFrom(iframe, {
			protocolVersion: 1,
			channel: BRIDGE_CHANNEL,
			bridgeId: 'test-bridge',
			type: 'searchResult',
			total: 4,
			active: 2,
		});
		expect(onError).toHaveBeenCalledWith('bad render');
		expect(onSearchResult).toHaveBeenCalledWith({ total: 4, active: 2 });
		bridge.destroy();
		expect(container.querySelector('iframe')).toBeNull();
	});

	it('ignores messages that do not match the mounted bridge id', async () => {
		const container = document.body.appendChild(document.createElement('div'));
		const onError = vi.fn(),
			onSearchResult = vi.fn();
		const bridge = new WordViewerBridge(container, { onError, onSearchResult }, 'expected-bridge');
		const ready = bridge.mount();
		const iframe = container.querySelector('iframe');

		dispatchFrom(iframe, { protocolVersion: 1, channel: BRIDGE_CHANNEL, bridgeId: 'wrong-bridge', type: 'ready' });
		dispatchFrom(iframe, {
			protocolVersion: 1,
			channel: BRIDGE_CHANNEL,
			type: 'renderError',
			message: 'missing bridge id',
		});
		dispatchFrom(iframe, {
			protocolVersion: 1,
			channel: BRIDGE_CHANNEL,
			bridgeId: 'wrong-bridge',
			type: 'searchResult',
			total: 2,
			active: 0,
		});
		dispatchFrom(iframe, { protocolVersion: 1, channel: BRIDGE_CHANNEL, bridgeId: 'expected-bridge', type: 'ready' });
		await ready;

		expect(onError).not.toHaveBeenCalled();
		expect(onSearchResult).not.toHaveBeenCalled();
		bridge.destroy();
	});

	it('rejects mount when the iframe never reports ready and ignores invalid messages', async () => {
		vi.useFakeTimers();
		const onError = vi.fn();
		const bridge = new WordViewerBridge(
			document.body.appendChild(document.createElement('div')),
			{ onError, onSearchResult: vi.fn() },
			'test-bridge',
		);
		const ready = bridge.mount();
		window.dispatchEvent(
			new MessageEvent('message', {
				data: {
					protocolVersion: 1,
					channel: BRIDGE_CHANNEL,
					bridgeId: 'test-bridge',
					type: 'renderError',
					message: 'wrong source',
				},
			}),
		);
		expect(onError).not.toHaveBeenCalled();
		vi.advanceTimersByTime(BRIDGE_READY_TIMEOUT_MS);
		await expect(ready).rejects.toThrow(/did not become ready/);
	});

	it('rejects a pending mount when the iframe is destroyed before ready', async () => {
		const bridge = new WordViewerBridge(document.body.appendChild(document.createElement('div')), {
			onError: vi.fn(),
			onSearchResult: vi.fn(),
		});
		const ready = bridge.mount();

		bridge.destroy();

		await expect(ready).rejects.toMatchObject({ code: 'BRIDGE_DESTROYED' });
	});
});

function dispatchFrom(iframe: HTMLIFrameElement | null, data: unknown): void {
	window.dispatchEvent(new MessageEvent('message', { data, source: iframe?.contentWindow ?? null }));
}

function makeModel(): WordDocumentModel {
	return {
		title: 'Doc',
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
