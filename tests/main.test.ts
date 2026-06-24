import { signal } from '@preact/signals-core';
import type { TFile, WorkspaceLeaf } from 'obsidian';
import DockletWordViewerPlugin from '../src/main.ts';
import { WORD_VIEW_TYPE } from '../src/constants.ts';
import type { WordFileRepository } from '../src/io/WordFileRepository.ts';
import type { WordDocumentLoader } from '../src/views/WordDocumentLoader.ts';
import { DEFAULT_WORD_VIEWER_SETTINGS } from '../src/settings/settings.ts';
import { WordViewerView } from '../src/views/WordViewerView.ts';

describe('DockletWordViewerPlugin', () => {
	it('reveals a live Word viewer leaf even when its serialized state is stale', async () => {
		const file = makeFile('Docs/Live.docx');
		const plugin = makePlugin();
		const view = new WordViewerView({} as WorkspaceLeaf, {} as WordFileRepository, {} as WordDocumentLoader, signal(DEFAULT_WORD_VIEWER_SETTINGS));
		vi.spyOn(view, 'getDocumentPath').mockReturnValue(file.path);
		const existingLeaf = {
			view,
			getViewState: () => ({ state: { file: 'Docs/Stale.docx' } }),
		} as unknown as WorkspaceLeaf;
		const revealLeaf = vi.fn();
		const setViewState = vi.fn();
		(plugin as unknown as { app: unknown }).app = {
			workspace: {
				getLeavesOfType: vi.fn(() => [existingLeaf]),
				revealLeaf,
				getLeaf: vi.fn(() => ({ setViewState })),
			},
		};
		(plugin as unknown as { repository: WordFileRepository }).repository = {
			resolveWordFile: vi.fn(() => file),
		} as unknown as WordFileRepository;

		await (plugin as unknown as { openWordDocument(path: string): Promise<void> }).openWordDocument(file.path);

		expect(revealLeaf).toHaveBeenCalledWith(existingLeaf);
		expect(setViewState).not.toHaveBeenCalled();
	});

	it('opens a new Word viewer leaf when no live or serialized leaf matches the document', async () => {
		const file = makeFile('Docs/Fresh.docx');
		const plugin = makePlugin();
		const existingLeaf = {
			view: {},
			getViewState: () => ({ state: { file: 'Docs/Other.docx' } }),
		} as unknown as WorkspaceLeaf;
		const setViewState = vi.fn();
		(plugin as unknown as { app: unknown }).app = {
			workspace: {
				getLeavesOfType: vi.fn(() => [existingLeaf]),
				revealLeaf: vi.fn(),
				getLeaf: vi.fn(() => ({ setViewState })),
			},
		};
		(plugin as unknown as { repository: WordFileRepository }).repository = {
			resolveWordFile: vi.fn(() => file),
		} as unknown as WordFileRepository;

		await (plugin as unknown as { openWordDocument(path: string): Promise<void> }).openWordDocument(file.path);

		expect(setViewState).toHaveBeenCalledWith({ type: WORD_VIEW_TYPE, state: { file: file.path }, active: true });
	});
});

function makePlugin(): DockletWordViewerPlugin {
	return new DockletWordViewerPlugin({} as never, {} as never);
}

function makeFile(path: string): TFile {
	const name = path.split('/').pop() ?? path;
	const dot = name.lastIndexOf('.');
	return {
		path,
		name,
		basename: dot >= 0 ? name.slice(0, dot) : name,
		extension: dot >= 0 ? name.slice(dot + 1) : '',
		stat: { ctime: 0, mtime: 0, size: 1 },
	} as TFile;
}
