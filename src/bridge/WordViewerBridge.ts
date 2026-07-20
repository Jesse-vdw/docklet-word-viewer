import { createBridgeId, formatSandbox } from '../shared/iframeBridge.ts';
import { BRIDGE_CHANNEL, BRIDGE_READY_TIMEOUT_MS, CSS_IFRAME } from '../constants.ts';
import { WordViewerDomainError } from '../domainErrors.ts';
import type { WordDocumentModel, WordLayoutMode } from '../docx/wordModel.ts';
import { buildWordViewerHtml } from '../engine/WordViewerHost.ts';
import { isWordToHostMessage, type HostToWordMessage, type WordToHostMessage } from './bridgeMessages.ts';

export interface WordViewerBridgeCallbacks {
	onError(message: string): void;
	onSearchResult(result: { total: number; active: number }): void;
}

export class WordViewerBridge {
	private iframe: HTMLIFrameElement | null = null;
	private ready = false;
	private readyResolve: (() => void) | null = null;
	private readyReject: ((error: Error) => void) | null = null;
	private readyTimer: ReturnType<typeof setTimeout> | null = null;
	private readonly onMessage = (event: MessageEvent<unknown>) => this.handleMessage(event);

	constructor(
		private readonly container: HTMLElement,
		private readonly callbacks: WordViewerBridgeCallbacks,
		private readonly bridgeId: string = createBridgeId('word-viewer'),
	) {}

	mount(): Promise<void> {
		this.destroy();
		this.iframe = document.createElement('iframe');
		this.iframe.className = CSS_IFRAME;
		this.iframe.setAttribute('sandbox', formatSandbox(['allow-scripts']));
		window.addEventListener('message', this.onMessage);
		this.iframe.srcdoc = buildWordViewerHtml(this.bridgeId);
		this.container.appendChild(this.iframe);
		return new Promise((resolve, reject) => {
			this.readyResolve = resolve;
			this.readyReject = reject;
			this.readyTimer = setTimeout(() => {
				this.readyTimer = null;
				this.readyResolve = null;
				this.readyReject = null;
				reject(new WordViewerDomainError('BRIDGE_TIMEOUT', 'Word viewer iframe did not become ready.'));
			}, BRIDGE_READY_TIMEOUT_MS);
		});
	}

	loadDocument(documentModel: WordDocumentModel, isDark: boolean, layout: WordLayoutMode): void {
		this.post({
			protocolVersion: 1,
			channel: BRIDGE_CHANNEL,
			bridgeId: this.bridgeId,
			type: 'loadDocument',
			document: documentModel,
			isDark,
			layout,
		});
	}

	setTheme(isDark: boolean): void {
		this.post({ protocolVersion: 1, channel: BRIDGE_CHANNEL, bridgeId: this.bridgeId, type: 'themeChanged', isDark });
	}

	setLayout(layout: WordLayoutMode): void {
		this.post({ protocolVersion: 1, channel: BRIDGE_CHANNEL, bridgeId: this.bridgeId, type: 'layoutChanged', layout });
	}

	setZoom(zoom: number): void {
		this.post({ protocolVersion: 1, channel: BRIDGE_CHANNEL, bridgeId: this.bridgeId, type: 'zoomChanged', zoom });
	}

	setSearch(query: string): void {
		this.post({ protocolVersion: 1, channel: BRIDGE_CHANNEL, bridgeId: this.bridgeId, type: 'searchChanged', query });
	}

	navigateSearch(direction: 'next' | 'previous'): void {
		this.post({
			protocolVersion: 1,
			channel: BRIDGE_CHANNEL,
			bridgeId: this.bridgeId,
			type: 'searchNavigate',
			direction,
		});
	}

	scrollToBlock(blockId: string): void {
		this.post({ protocolVersion: 1, channel: BRIDGE_CHANNEL, bridgeId: this.bridgeId, type: 'scrollToBlock', blockId });
	}

	destroy(): void {
		window.removeEventListener('message', this.onMessage);
		this.clearReadyTimer();
		this.readyReject?.(
			new WordViewerDomainError('BRIDGE_DESTROYED', 'Word viewer iframe was destroyed before it became ready.'),
		);
		if (this.iframe?.parentElement) {
			this.iframe.parentElement.removeChild(this.iframe);
		}
		this.iframe = null;
		this.ready = false;
		this.readyResolve = null;
		this.readyReject = null;
	}

	private handleMessage(event: MessageEvent<unknown>): void {
		if (!this.iframe || event.source !== this.iframe.contentWindow) {
			return;
		}
		if (!isWordToHostMessage(event.data)) {
			return;
		}
		if (event.data.bridgeId !== this.bridgeId) {
			return;
		}
		this.dispatch(event.data);
	}

	private dispatch(message: WordToHostMessage): void {
		if (message.type === 'ready') {
			this.ready = true;
			this.clearReadyTimer();
			this.readyResolve?.();
			this.readyResolve = null;
			this.readyReject = null;
			return;
		}
		if (message.type === 'renderError') {
			this.callbacks.onError(message.message);
		}
		if (message.type === 'searchResult') {
			this.callbacks.onSearchResult({ total: message.total, active: message.active });
		}
	}

	private post(message: HostToWordMessage): void {
		if (!this.iframe?.contentWindow || !this.ready) {
			return;
		}
		// The sandboxed srcdoc iframe has an opaque origin, so commands must use "*".
		// Source-window and bridge-id checks still keep the local protocol scoped.
		this.iframe.contentWindow.postMessage(message, '*');
	}

	private clearReadyTimer(): void {
		if (this.readyTimer !== null) {
			clearTimeout(this.readyTimer);
			this.readyTimer = null;
		}
	}
}
