import type { Signal } from '@preact/signals-core';
import type { App, WorkspaceLeaf } from 'obsidian';
import { SyncfusionConversionClient } from '../adapters/conversion/SyncfusionConversionClient.ts';
import { DocxParser } from '../services/docx/DocxParser.ts';
import { SfdtParser } from '../services/docx/SfdtParser.ts';
import { WordFileRepository } from '../adapters/io/WordFileRepository.ts';
import type { WordViewerSettings } from '../settings/settings.ts';
import { WordDocumentLoader } from '../ui/views/WordDocumentLoader.ts';
import { WordViewerView } from '../ui/views/WordViewerView.ts';

/** Instance-owned document runtime and view dependency factory. */
export class DockletWordViewerRuntime {
	readonly repository: WordFileRepository;
	readonly parser: DocxParser;
	readonly sfdtParser: SfdtParser;
	readonly conversionClient: SyncfusionConversionClient;
	readonly loader: WordDocumentLoader;
	private loaded = false;

	constructor(
		private readonly app: App,
		private readonly settings: Signal<WordViewerSettings>,
	) {
		this.repository = new WordFileRepository(app);
		this.parser = new DocxParser();
		this.sfdtParser = new SfdtParser();
		this.conversionClient = new SyncfusionConversionClient();
		this.loader = new WordDocumentLoader(this.parser, this.sfdtParser, this.conversionClient);
	}

	load(): void {
		this.loaded = true;
	}

	createView(leaf: WorkspaceLeaf): WordViewerView {
		if (!this.loaded) throw new Error('Docklet Word Viewer runtime is not loaded.');
		return new WordViewerView(leaf, this.repository, this.loader, this.settings);
	}

	unload(): void {
		this.loaded = false;
	}
}
