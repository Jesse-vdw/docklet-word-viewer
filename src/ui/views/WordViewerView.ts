import type { TFile } from 'obsidian';
import { ItemView, Notice, setIcon, type WorkspaceLeaf } from 'obsidian';
import type { Signal } from '@preact/signals-core';
import { WordViewerBridgeService } from '../../services/WordViewerBridgeService.ts';
import * as C from '../../domain/constants.ts';
import type { WordDocumentModel, WordLayoutMode } from '../../services/docx/wordModel.ts';
import { getErrorMessage, logError } from '../../services/errorLogging.ts';
import type { WordFileRepository } from '../../services/WordRepositoryService.ts';
import type { WordViewerSettings } from '../../settings/settings.ts';
import { isAppDarkMode } from '../../services/shared/obsidianCompat.ts';
import type { WordDocumentLoader } from './WordDocumentLoader.ts';

interface ToolbarAction {
	icon: string;
	label: string;
	onClick(): void;
}
interface StateAction {
	label: string;
	onClick(): void;
}

export class WordViewerView extends ItemView {
	private currentFile: TFile | null = null;
	private readonly bridge = new WordViewerBridgeService();
	private model: WordDocumentModel | null = null;
	private statusEl: HTMLElement | null = null;
	private warningEl: HTMLElement | null = null;
	private outlineEl: HTMLElement | null = null;
	private iframeHostEl: HTMLElement | null = null;
	private layoutButtonEl: HTMLButtonElement | null = null;
	private searchInputEl: HTMLInputElement | null = null;
	private searchStatusEl: HTMLElement | null = null;
	private layout: WordLayoutMode;
	private zoom = C.DEFAULT_ZOOM;
	private outlineVisible = true;
	private loadSequence = 0;

	constructor(
		leaf: WorkspaceLeaf,
		private readonly repository: WordFileRepository,
		private readonly loader: WordDocumentLoader,
		private readonly settingsSignal: Signal<WordViewerSettings>,
	) {
		super(leaf);
		this.layout = settingsSignal.value.defaultLayout;
	}

	override getViewType(): string {
		return C.WORD_VIEW_TYPE;
	}
	override getDisplayText(): string {
		return this.currentFile ? this.currentFile.basename : C.PLUGIN_NAME;
	}
	override getIcon(): string {
		return C.ICON_WORD_VIEWER;
	}
	getDocumentPath(): string | null {
		return this.currentFile?.path ?? null;
	}
	override async onClose(): Promise<void> {
		this.invalidateCurrentLoad();
		this.destroyBridge();
	}
	async reloadDocument(): Promise<void> {
		await this.loadCurrentDocument();
	}
	updateTheme(isDark: boolean): void {
		this.bridge.setTheme(isDark);
	}

	override async onOpen(): Promise<void> {
		this.buildDom();
		if (this.currentFile) {
			await this.loadCurrentDocument();
		} else {
			this.showEmpty();
		}
	}

	override async setState(state: Record<string, unknown>, result: { history: boolean }): Promise<void> {
		await super.setState(state, result);
		const nextLayout = normalizeLayoutState(state[C.VIEW_STATE_LAYOUT], this.settingsSignal.value.defaultLayout);
		const nextZoom = normalizeZoomState(state[C.VIEW_STATE_ZOOM]);
		const layoutChanged = this.layout !== nextLayout;
		const zoomChanged = this.zoom !== nextZoom;
		this.layout = nextLayout;
		this.zoom = nextZoom;
		this.updateLayoutButton();
		const path = state['file'];
		if (typeof path !== 'string') {
			this.invalidateCurrentLoad();
			this.currentFile = null;
			this.model = null;
			this.showEmpty();
			return;
		}
		if (this.currentFile?.path === path && this.model) {
			if (layoutChanged) {
				this.bridge.setLayout(this.layout);
			}
			if (zoomChanged) {
				this.bridge.setZoom(this.zoom);
			}
			this.showDocumentStatus(this.model);
			return;
		}
		const file = this.repository.resolveWordFile(path);
		if (!file) {
			this.invalidateCurrentLoad();
			this.currentFile = null;
			this.model = null;
			this.showError('Word document was not found.', () => void this.setState(state, result));
			return;
		}
		if (this.currentFile?.path !== file.path) {
			this.model = null;
		}
		this.currentFile = file;
		await this.loadCurrentDocument();
	}

	override getState(): Record<string, unknown> {
		const base = super.getState();
		return {
			...base,
			...(this.currentFile ? { file: this.currentFile.path } : {}),
			[C.VIEW_STATE_LAYOUT]: this.layout,
			[C.VIEW_STATE_ZOOM]: this.zoom,
		};
	}

	refreshSettings(): void {
		if (this.model) {
			this.showDocumentStatus(this.model);
		}
	}

	private async loadCurrentDocument(): Promise<void> {
		if (!this.currentFile) {
			this.invalidateCurrentLoad();
			this.showEmpty();
			return;
		}
		const file = this.currentFile;
		const loadId = ++this.loadSequence;
		try {
			this.showLoading();
			const settings = this.settingsSignal.value;
			const read = await this.repository.readWordFile(file, settings.maxFileSizeMb);
			if (!this.isCurrentLoad(loadId, file)) {
				return;
			}
			const model = await this.loader.load(read, settings);
			if (!this.isCurrentLoad(loadId, file)) {
				return;
			}
			this.model = model;
			await this.mountBridge(this.model);
			if (!this.isCurrentLoad(loadId, file)) {
				return;
			}
			this.showDocumentStatus(this.model);
		} catch (error) {
			if (!this.isCurrentLoad(loadId, file)) {
				return;
			}
			logError('WordViewerView.loadCurrentDocument', error);
			new Notice(`${C.NOTICE_OPEN_FAILED} - ${getErrorMessage(error)}`);
			this.showError(getErrorMessage(error), () => void this.loadCurrentDocument());
		}
	}

	private async mountBridge(model: WordDocumentModel): Promise<void> {
		if (!this.iframeHostEl) {
			return;
		}
		this.destroyBridge();
		await this.bridge.mount(
			this.iframeHostEl,
			{
				onError: (message) => this.showError(message, () => void this.loadCurrentDocument()),
				onSearchResult: (result) => this.showSearchResult(result),
			},
			model,
			isAppDarkMode(this.app),
			this.layout,
			this.zoom,
			this.searchInputEl?.value ?? '',
		);
	}

	private buildDom(): void {
		const container = this.containerEl.children[1];
		if (!(container instanceof HTMLElement)) {
			return;
		}
		container.empty();
		container.addClass(C.CSS_ROOT);
		container.addClass(C.CSS_OBJECT_SHELL, C.CSS_COMPONENT_VIEW);
		const toolbar = container.createDiv({ cls: C.CSS_TOOLBAR });
		this.buildToolbar(toolbar);
		this.statusEl = toolbar.createDiv({ cls: C.CSS_STATUS });
		this.warningEl = container.createDiv({ cls: C.CSS_WARNING });
		const body = container.createDiv({ cls: C.CSS_BODY });
		this.outlineEl = body.createDiv({ cls: C.CSS_OUTLINE });
		this.iframeHostEl = body.createDiv({ cls: C.CSS_VIEWPORT });
	}

	private buildToolbar(toolbar: HTMLElement): void {
		for (const action of this.toolbarActions()) {
			const button = this.createToolbarButton(toolbar, action);
			if (action.label === this.layoutButtonLabel()) {
				this.layoutButtonEl = button;
			}
		}
		const search = toolbar.createDiv({ cls: C.CSS_SEARCH });
		this.searchInputEl = search.createEl('input', {
			cls: C.CSS_SEARCH_INPUT,
			attr: { type: 'search', placeholder: 'Search' },
		});
		this.searchInputEl.addEventListener('input', () => this.bridge.setSearch(this.searchInputEl?.value ?? ''));
		this.searchInputEl.addEventListener('keydown', (event) => {
			if (event.key === 'Enter') {
				this.bridge.navigateSearch(event.shiftKey ? 'previous' : 'next');
			}
		});
		this.createToolbarButton(search, {
			icon: 'chevron-up',
			label: 'Previous search result',
			onClick: () => this.bridge.navigateSearch('previous'),
		});
		this.createToolbarButton(search, {
			icon: 'chevron-down',
			label: 'Next search result',
			onClick: () => this.bridge.navigateSearch('next'),
		});
		this.searchStatusEl = search.createDiv({ cls: C.CSS_SEARCH_STATUS, text: '0/0' });
	}

	private toolbarActions(): ToolbarAction[] {
		return [
			{
				icon: 'refresh-cw',
				label: 'Reload document',
				onClick: () => {
					void this.reloadDocument();
				},
			},
			{ icon: this.layoutButtonIcon(), label: this.layoutButtonLabel(), onClick: () => this.toggleLayout() },
			{ icon: 'zoom-out', label: 'Zoom out', onClick: () => this.changeZoom(-C.ZOOM_STEP) },
			{ icon: 'zoom-in', label: 'Zoom in', onClick: () => this.changeZoom(C.ZOOM_STEP) },
			{ icon: 'list-tree', label: 'Toggle document outline', onClick: () => this.toggleOutline() },
			{
				icon: 'copy',
				label: 'Copy document text',
				onClick: () => {
					void this.copyDocumentText();
				},
			},
			{
				icon: 'external-link',
				label: 'Open in default app',
				onClick: () => {
					void this.openExternally();
				},
			},
		];
	}

	private toggleLayout(): void {
		this.layout = this.layout === 'paginated' ? 'continuous' : 'paginated';
		this.bridge.setLayout(this.layout);
		this.updateLayoutButton();
		if (this.model) {
			this.showDocumentStatus(this.model);
		}
	}

	private changeZoom(delta: number): void {
		this.zoom = Math.round(Math.min(C.MAX_ZOOM, Math.max(C.MIN_ZOOM, this.zoom + delta)) * 100) / 100;
		this.bridge.setZoom(this.zoom);
		if (this.model) {
			this.showDocumentStatus(this.model);
		}
	}

	private toggleOutline(): void {
		this.outlineVisible = !this.outlineVisible;
		this.outlineEl?.toggle(this.outlineVisible);
	}

	private createToolbarButton(parent: HTMLElement, action: ToolbarAction): HTMLButtonElement {
		const button = parent.createEl('button', { cls: C.CSS_TOOLBAR_BUTTON });
		button.type = 'button';
		setToolbarButtonIcon(button, action.icon, action.label);
		button.addEventListener('click', action.onClick);
		return button;
	}

	private updateLayoutButton(): void {
		if (this.layoutButtonEl) {
			setToolbarButtonIcon(this.layoutButtonEl, this.layoutButtonIcon(), this.layoutButtonLabel());
		}
	}

	private layoutButtonIcon(): string {
		return this.layout === 'paginated' ? 'rows-3' : 'files';
	}
	private layoutButtonLabel(): string {
		return this.layout === 'paginated' ? 'Switch to continuous layout' : 'Switch to paginated layout';
	}

	private showDocumentStatus(model: WordDocumentModel): void {
		this.statusEl?.setText(
			`${model.stats.paragraphs} paragraphs · ${model.stats.tables} tables · ${model.stats.images} images · ${model.stats.links} links · ${Math.round(this.zoom * 100)}%`,
		);
		if (this.warningEl) {
			const warnings = [...model.warnings, ...model.unsupportedFeatures.map((feature) => `Unsupported: ${feature}.`)];
			this.warningEl.empty();
			if (warnings.length > 0) {
				this.warningEl.setText(warnings.join(' '));
				this.warningEl.show();
			} else {
				this.warningEl.hide();
			}
		}
		this.renderOutline(model);
	}

	private renderOutline(model: WordDocumentModel): void {
		if (!this.outlineEl) {
			return;
		}
		this.outlineEl.empty();
		this.outlineEl.toggle(this.outlineVisible);
		this.outlineEl.createDiv({ cls: C.CSS_OUTLINE_HEADER, text: 'Outline' });
		if (model.outline.length === 0) {
			this.outlineEl.createDiv({ cls: C.CSS_OUTLINE_EMPTY, text: 'No headings found.' });
			return;
		}
		const list = this.outlineEl.createDiv({ cls: C.CSS_OUTLINE_LIST });
		for (const item of model.outline) {
			const button = list.createEl('button', { cls: C.CSS_OUTLINE_BUTTON, text: item.title });
			button.type = 'button';
			button.dataset['level'] = String(item.level);
			button.addEventListener('click', () => this.bridge.scrollToBlock(item.id));
		}
	}

	private showSearchResult(result: { total: number; active: number }): void {
		this.searchStatusEl?.setText(result.total > 0 ? `${result.active + 1}/${result.total}` : '0/0');
	}

	private async copyDocumentText(): Promise<void> {
		if (!this.model) {
			new Notice(`${C.PLUGIN_NAME}: no document text to copy.`);
			return;
		}
		try {
			await navigator.clipboard.writeText(this.model.plainText);
			new Notice(`${C.PLUGIN_NAME}: copied document text.`);
		} catch (error) {
			logError('WordViewerView.copyDocumentText', error);
			new Notice(`${C.PLUGIN_NAME}: could not copy document text.`);
		}
	}

	private async openExternally(): Promise<void> {
		if (!this.currentFile) {
			new Notice(`${C.PLUGIN_NAME}: no Word document open.`);
			return;
		}
		try {
			const fullPath = (this.app.vault.adapter as { getFullPath?: (path: string) => string }).getFullPath?.(
				this.currentFile.path,
			);
			if (!fullPath) {
				new Notice(`${C.PLUGIN_NAME}: cannot resolve local file path.`);
				return;
			}
			const electron = require('electron') as { shell?: { openPath: (path: string) => Promise<string> | string } };
			const result = await electron.shell?.openPath(fullPath);
			if (typeof result === 'string' && result.length > 0) {
				new Notice(`${C.PLUGIN_NAME}: ${result}`);
			}
		} catch (error) {
			logError('WordViewerView.openExternally', error);
			new Notice(`${C.PLUGIN_NAME}: could not open document externally.`);
		}
	}

	private showEmpty(): void {
		this.destroyBridge();
		this.showState('No Word document open', 'Open a .docx file from the file explorer or command palette.');
	}
	private showLoading(): void {
		this.showState('Loading Word document', 'Reading and rendering local DOCX content.');
	}
	private showError(message: string, retry: () => void): void {
		this.destroyBridge();
		const actions: StateAction[] = [{ label: 'Try again', onClick: retry }];
		if (this.model) {
			actions.push({
				label: 'Copy document text',
				onClick: () => {
					void this.copyDocumentText();
				},
			});
		}
		if (this.currentFile) {
			actions.push({
				label: 'Open in default app',
				onClick: () => {
					void this.openExternally();
				},
			});
		}
		this.showState('Could not render Word document', message, actions);
	}

	private showState(title: string, message: string, actions: StateAction[] = []): void {
		this.statusEl?.setText('');
		this.warningEl?.hide();
		this.outlineEl?.empty();
		if (!this.iframeHostEl) {
			return;
		}
		this.iframeHostEl.empty();
		const state = this.iframeHostEl.createDiv({ cls: C.CSS_STATE });
		state.createDiv({ cls: C.CSS_STATE_TITLE, text: title });
		state.createDiv({ cls: C.CSS_STATE_MSG, text: message });
		for (const action of actions) {
			state
				.createEl('button', { cls: C.CSS_STATE_BUTTON, text: action.label })
				.addEventListener('click', action.onClick);
		}
	}

	private destroyBridge(): void {
		this.bridge.destroy();
	}
	private invalidateCurrentLoad(): void {
		this.loadSequence++;
	}
	private isCurrentLoad(loadId: number, file: TFile): boolean {
		return loadId === this.loadSequence && this.currentFile?.path === file.path;
	}
}

function setToolbarButtonIcon(button: HTMLButtonElement, icon: string, label: string): void {
	button.empty();
	setIcon(button, icon);
	button.setAttribute('aria-label', label);
	button.setAttribute('title', label);
}

function normalizeLayoutState(value: unknown, fallback: WordLayoutMode): WordLayoutMode {
	return value === 'continuous' || value === 'paginated' ? value : fallback;
}

function normalizeZoomState(value: unknown): number {
	if (typeof value !== 'number' || !Number.isFinite(value)) {
		return C.DEFAULT_ZOOM;
	}
	return Math.round(Math.min(C.MAX_ZOOM, Math.max(C.MIN_ZOOM, value)) * 100) / 100;
}
