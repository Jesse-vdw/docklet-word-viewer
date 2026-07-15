/**
 * Plugin entrypoint: docklet-word-viewer.
 *
 * Purpose: provide local-first DOCX viewing and conversion orchestration in Obsidian.
 * Runtime: Obsidian loads root main.js, and Vite builds it from src/main.ts.
 * Developer notes: keep view lifecycle, settings persistence, and conversion safety behavior contract-tested.
 */
import './styles.css';
import { Notice, Plugin, TFile, type Menu, type TAbstractFile, type WorkspaceLeaf } from 'obsidian';
import { createSignalSettingsStore } from './shared/settingsStore.ts';
import type { Signal } from '@preact/signals-core';
import * as C from './constants.ts';
import { logError } from './errorLogging.ts';
import { DockletWordViewerSettingTab, type WordViewerSettingsHost } from './settings/SettingsTab.ts';
import {
	DEFAULT_WORD_VIEWER_SETTINGS,
	normalizeWordViewerSettings,
	type WordViewerSettings,
} from './settings/settings.ts';
import { WordViewerView } from './views/WordViewerView.ts';
import { DockletWordViewerRuntime } from './runtime/DockletWordViewerRuntime.ts';

export default class DockletWordViewerPlugin extends Plugin implements WordViewerSettingsHost {
	private readonly store = createSignalSettingsStore<WordViewerSettings>(DEFAULT_WORD_VIEWER_SETTINGS);
	readonly dockletDescriptor = {
		schemaVersion: 1,
		pluginId: C.PLUGIN_ID,
		name: C.PLUGIN_NAME,
		version: '1.0.1',
		capabilities: ['docx-viewing', 'docx-parsing', 'sandboxed-word-runtime', 'optional-document-conversion'],
	} as const;
	private runtime: DockletWordViewerRuntime | null = null;

	get settingsPlugin(): Plugin {
		return this;
	}
	get settingsSignal(): Signal<WordViewerSettings> {
		return this.store.settingsSignal;
	}
	patchSettings(patch: Partial<WordViewerSettings>): void {
		this.store.patchSettings(patch);
	}

	override async onload(): Promise<void> {
		await this.loadSettings();
		this.runtime = new DockletWordViewerRuntime(this.app, this.settingsSignal);
		this.runtime.load();
		this.registerSettingsPersistence();
		this.registerView(C.WORD_VIEW_TYPE, (leaf: WorkspaceLeaf) => this.requireRuntime().createView(leaf));
		this.registerExtensions([...C.SUPPORTED_WORD_EXTENSIONS], C.WORD_VIEW_TYPE);
		this.registerCommands();
		this.registerEvents();
		this.addSettingTab(new DockletWordViewerSettingTab(this.app, this));
	}

	override onunload(): void {
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
				void this.saveData(this.settingsSignal.value).catch((error: unknown) =>
					logError('DockletWordViewerPlugin.saveData', error),
				);
			}),
		);
	}

	private registerCommands(): void {
		this.addCommand({
			id: C.CMD_OPEN_ACTIVE,
			name: 'Docklet Word Viewer: Open active Word document',
			checkCallback: (checking) => {
				const file = this.app.workspace.getActiveFile();
				if (!(file instanceof TFile) || !C.isSupportedWordExtension(file.extension)) {
					return false;
				}
				if (!checking) {
					void this.openWordDocument(file.path);
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
		const isDark = this.app.isDarkMode();
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

	private leafHasDocumentPath(leaf: WorkspaceLeaf, path: string): boolean {
		if (leaf.view instanceof WordViewerView) {
			return leaf.view.getDocumentPath() === path;
		}
		return leaf.getViewState().state?.['file'] === path;
	}

	private requireRuntime(): DockletWordViewerRuntime {
		if (!this.runtime) {
			this.runtime = new DockletWordViewerRuntime(this.app, this.settingsSignal);
			this.runtime.load();
		}
		return this.runtime;
	}
}
