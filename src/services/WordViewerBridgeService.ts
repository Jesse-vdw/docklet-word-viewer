import type { WordDocumentModel, WordLayoutMode } from '../docx/wordModel.ts';
import { WordViewerBridge } from '../bridge/WordViewerBridge.ts';

interface BridgeHooks {
	onError(message: string): void;
	onSearchResult(result: { total: number; active: number }): void;
}

export class WordViewerBridgeService {
	private bridge: WordViewerBridge | null = null;

	async mount(
		hostEl: HTMLElement,
		hooks: BridgeHooks,
		model: WordDocumentModel,
		isDarkMode: boolean,
		layout: WordLayoutMode,
		zoom: number,
		search: string,
	): Promise<void> {
		this.destroy();
		hostEl.empty();
		this.bridge = new WordViewerBridge(hostEl, hooks);
		await this.bridge.mount();
		this.bridge.loadDocument(model, isDarkMode, layout);
		this.bridge.setZoom(zoom);
		this.bridge.setSearch(search);
	}

	setTheme(isDark: boolean): void {
		this.bridge?.setTheme(isDark);
	}
	setLayout(layout: WordLayoutMode): void {
		this.bridge?.setLayout(layout);
	}
	setZoom(zoom: number): void {
		this.bridge?.setZoom(zoom);
	}
	setSearch(value: string): void {
		this.bridge?.setSearch(value);
	}
	navigateSearch(direction: 'next' | 'previous'): void {
		this.bridge?.navigateSearch(direction);
	}
	scrollToBlock(id: string): void {
		this.bridge?.scrollToBlock(id);
	}
	destroy(): void {
		this.bridge?.destroy();
		this.bridge = null;
	}
}
