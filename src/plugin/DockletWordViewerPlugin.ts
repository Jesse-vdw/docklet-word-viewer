import '../styles/index.css';
/**
 * Plugin entrypoint: docklet-word-viewer.
 *
 * Purpose: provide local-first DOCX viewing and conversion orchestration in Obsidian.
 * Runtime: Obsidian loads root main.js, and Vite builds it from src/main.ts.
 * Developer notes: keep view lifecycle, settings persistence, and conversion safety behavior contract-tested.
 */

import { Notice, Plugin, TFile, type Menu, type TAbstractFile, type WorkspaceLeaf } from 'obsidian';
import { createSignalSettingsStore } from '../services/shared/settingsStore.ts';
import type { Signal } from '@preact/signals-core';
import * as C from '../domain/constants.ts';
import { logError } from '../services/errorLogging.ts';
import {
	DockletWordViewerSettingTab,
	renderSettingsSection,
	type WordViewerSettingsHost,
} from '../settings/SettingsTab.ts';
import {
	DEFAULT_WORD_VIEWER_SETTINGS,
	normalizeWordViewerSettings,
	type WordViewerSettings,
} from '../settings/settings.ts';
import { WordViewerView } from '../ui/views/WordViewerView.ts';
import { DockletWordViewerRuntime } from '../runtime/DockletWordViewerRuntime.ts';
import type { DockletWordViewerApi } from '../api/DockletWordViewerApi.ts';
import { isAppDarkMode } from '../services/shared/obsidianCompat.ts';
import { LatestValueWriter } from '../services/shared/LatestValueWriter.ts';

export default class DockletWordViewerPlugin extends Plugin implements WordViewerSettingsHost {
	readonly api: DockletWordViewerApi = Object.freeze({
		schemaVersion: 2,
		pluginId: C.PLUGIN_ID,
		pluginName: C.PLUGIN_NAME,
		pluginVersion: this.manifest.version,
		capabilities: Object.freeze([
			'docx-viewing',
			'docx-parsing',
			'sandboxed-word-runtime',
			'optional-document-conversion',
		] as const),
		openDocument: (path: string) => this.openWordDocument(path),
	});
	private readonly store = createSignalSettingsStore<WordViewerSettings>(DEFAULT_WORD_VIEWER_SETTINGS);
	private runtime: DockletWordViewerRuntime | null = null;
	private settingsWriter: LatestValueWriter<WordViewerSettings> | null = null;
	private active = false;

	get settingsPlugin(): Plugin {
		return this;
	}
	get settingsSignal(): Signal<WordViewerSettings> {
		return this.store.settingsSignal;
	}
	patchSettings(patch: Partial<WordViewerSettings>): void {
		this.store.patchSettings(patch);
	}
	renderSettingsSection(containerEl: HTMLElement): void {
		const refresh = (): void => {
			containerEl.empty();
			renderSettingsSection(containerEl, this, refresh);
		};
		refresh();
	}

	override async onload(): Promise<void> {
		await this.loadSettings();
		this.active = true;
		try {
			this.settingsWriter = new LatestValueWriter((settings) => this.saveData(settings), {
				onError: (error) => logError('DockletWordViewerPlugin.saveData', error),
			});
			this.runtime = new DockletWordViewerRuntime(this.app, this.settingsSignal);
			this.runtime.load();
			this.registerSettingsPersistence();
			this.registerView(C.WORD_VIEW_TYPE, (leaf: WorkspaceLeaf) => this.requireRuntime().createView(leaf));
			this.registerExtensions([...C.SUPPORTED_WORD_EXTENSIONS], C.WORD_VIEW_TYPE);
			this.registerCommands();
			this.registerEvents();
			this.addSettingTab(new DockletWordViewerSettingTab(this.app, this));
		} catch (error) {
			this.active = false;
			this.runtime?.unload();
			this.runtime = null;
			void this.settingsWriter?.dispose();
			this.settingsWriter = null;
			throw error;
		}
	}

	override onunload(): void {
		this.active = false;
		const settingsWriter = this.settingsWriter;
		this.settingsWriter = null;
		void settingsWriter?.dispose();
		this.app.workspace.detachLeavesOfType(C.WORD_VIEW_TYPE);
		this.runtime?.unload();
		this.runtime = null;
	}

	private async loadSettings(): Promise<void> {
		const raw = (await this.loadData()) as Partial<WordViewerSettings> | null | undefined;
		const normalized = normalizeWordViewerSettings(raw);
		this.store.setSettings(normalized);
		if (JSON.stringify(raw ?? {}) !== JSON.stringify(normalized)) {
			await this.saveData(normalized);
		}
	}

	private registerSettingsPersistence(): void {
		let initialised = false;
		this.register(
			this.store.onSettingsChange(() => {
				if (!initialised) {
					initialised = true;
					return;
				}
				this.refreshSettingsInAllViews();
				this.settingsWriter?.schedule(structuredClone(this.settingsSignal.value));
			}),
		);
	}

	private registerCommands(): void {
		this.addCommand({
			id: C.CMD_OPEN_ACTIVE,
			name: 'Docklet Word Viewer: Open active Word document',
			checkCallback: (checking) => {
				const path = this.getActiveWordDocumentPath();
				if (!path) {
					return false;
				}
				if (!checking) {
					void this.openWordDocument(path);
				}
				return true;
			},
		});
		this.addCommand({
			id: C.CMD_RELOAD_ACTIVE,
			name: 'Docklet Word Viewer: Reload active document',
			checkCallback: (checking) => {
				const view = this.getActiveWordView();
				if (!view) {
					return false;
				}
				if (!checking) {
					void view.reloadDocument();
				}
				return true;
			},
		});
	}

	private registerEvents(): void {
		this.registerEvent(this.app.workspace.on('file-menu', (menu, file) => this.handleFileMenu(menu, file)));
		this.registerEvent(this.app.workspace.on('css-change', () => this.updateThemeInAllViews()));
	}

	private handleFileMenu(menu: Menu, file: TAbstractFile): void {
		if (!(file instanceof TFile) || !C.isSupportedWordExtension(file.extension)) {
			return;
		}
		menu.addItem((item) =>
			item
				.setTitle('Open in Docklet Word Viewer')
				.setIcon(C.ICON_WORD_VIEWER)
				.onClick(() => {
					void this.openWordDocument(file.path);
				}),
		);
	}

	private async openWordDocument(path: string): Promise<void> {
		const file = this.requireRuntime().repository.resolveWordFile(path);
		if (!file) {
			new Notice(`${C.PLUGIN_NAME}: document not found: ${path}`);
			return;
		}
		if (!C.isSupportedWordExtension(file.extension)) {
			new Notice(`${C.PLUGIN_NAME}: unsupported Word document type: ${file.extension}`);
			return;
		}
		const existing = this.app.workspace
			.getLeavesOfType(C.WORD_VIEW_TYPE)
			.find((leaf) => this.leafHasDocumentPath(leaf, path));
		if (existing) {
			this.app.workspace.revealLeaf(existing);
			return;
		}
		await this.app.workspace
			.getLeaf(false)
			.setViewState({ type: C.WORD_VIEW_TYPE, state: { file: file.path }, active: true });
	}

	private updateThemeInAllViews(): void {
		const isDark = isAppDarkMode(this.app);
		for (const leaf of this.app.workspace.getLeavesOfType(C.WORD_VIEW_TYPE)) {
			if (leaf.view instanceof WordViewerView) {
				leaf.view.updateTheme(isDark);
			}
		}
	}

	private refreshSettingsInAllViews(): void {
		for (const leaf of this.app.workspace.getLeavesOfType(C.WORD_VIEW_TYPE)) {
			if (leaf.view instanceof WordViewerView) {
				leaf.view.refreshSettings();
			}
		}
	}

	private getActiveWordView(): WordViewerView | null {
		const view = this.app.workspace.getActiveViewOfType(WordViewerView);
		return view instanceof WordViewerView ? view : null;
	}

	private getActiveWordDocumentPath(): string | null {
		const viewPath = this.getActiveWordView()?.getDocumentPath();
		if (viewPath) {
			return viewPath;
		}
		const file = this.app.workspace.getActiveFile();
		return file instanceof TFile && C.isSupportedWordExtension(file.extension) ? file.path : null;
	}

	private leafHasDocumentPath(leaf: WorkspaceLeaf, path: string): boolean {
		if (leaf.view instanceof WordViewerView) {
			return leaf.view.getDocumentPath() === path;
		}
		return leaf.getViewState().state?.['file'] === path;
	}

	private requireRuntime(): DockletWordViewerRuntime {
		if (!this.active || !this.runtime) throw new Error(`${C.PLUGIN_NAME}: runtime is not active.`);
		return this.runtime;
	}
}
