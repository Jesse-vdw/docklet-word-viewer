import { signal } from '@preact/signals-core';
import type { TFile, WorkspaceLeaf } from 'obsidian';
import { BRIDGE_CHANNEL, CSS_IFRAME, CSS_OUTLINE, CSS_OUTLINE_BUTTON, CSS_SEARCH_INPUT, CSS_SEARCH_STATUS, CSS_STATE_BUTTON, CSS_STATE_MSG, CSS_STATE_TITLE, CSS_STATUS, CSS_VIEWPORT, CSS_WARNING, VIEW_STATE_LAYOUT, VIEW_STATE_ZOOM } from '../src/constants.ts';
import type { WordDocumentModel } from '../src/docx/wordModel.ts';
import type { WordReadResult } from '../src/io/WordFileRepository.ts';
import type { WordFileRepository } from '../src/services/WordRepositoryService.ts';
import type { WordViewerSettings } from '../src/settings/settings.ts';
import { WordViewerView } from '../src/views/WordViewerView.ts';
import type { WordDocumentLoader } from '../src/views/WordDocumentLoader.ts';

interface TestableWordViewerView {
	buildDom(): void;
	showDocumentStatus(model: WordDocumentModel): void;
}

describe('WordViewerView', () => {
	afterEach(() => {
		document.body.textContent = '';
	});

	it('updates document chrome without removing the mounted iframe', () => {
		const view = makeView();
		const testView = view as unknown as TestableWordViewerView;
		testView.buildDom();
		const viewport = getRequiredElement(view.containerEl, `.${CSS_VIEWPORT}`);
		const iframe = viewport.appendChild(document.createElement('iframe'));
		iframe.className = CSS_IFRAME;

		testView.showDocumentStatus(makeModel());

		expect(getRequiredElement(view.containerEl, `.${CSS_STATUS}`).textContent).toBe('2 paragraphs · 1 tables · 0 images · 1 links · 100%');
		expect(getRequiredElement(view.containerEl, `.${CSS_WARNING}`).textContent).toBe('Limited fidelity. Unsupported: charts.');
		expect(getRequiredElement(view.containerEl, `.${CSS_OUTLINE_BUTTON}`).textContent).toBe('Heading');
		expect(viewport.querySelector(`.${CSS_IFRAME}`)).toBe(iframe);
	});

	it('keeps the iframe mounted through the full document load flow', async () => {
		const { file, iframe, loader, repository, view } = await loadViewWithDocument();

		expect(repository.readWordFile).toHaveBeenCalledWith(file, 25);
		expect(loader.load).toHaveBeenCalledWith(expect.objectContaining({ file }), settings());
		expect(getRequiredElement(view.containerEl, `.${CSS_STATUS}`).textContent).toBe('2 paragraphs · 1 tables · 0 images · 1 links · 100%');
		expect(getRequiredElement(view.containerEl, `.${CSS_OUTLINE_BUTTON}`).textContent).toBe('Heading');
		expect(getRequiredElement(view.containerEl, `.${CSS_VIEWPORT}`).querySelector(`.${CSS_IFRAME}`)).toBe(iframe);
	});

	it('shows recovery actions when the iframe reports a render error', async () => {
		const { iframe, view } = await loadViewWithDocument();

		dispatchFrom(iframe, { channel: BRIDGE_CHANNEL, type: 'renderError', message: 'Renderer failed' });

		expect(getRequiredElement(view.containerEl, `.${CSS_STATE_TITLE}`).textContent).toBe('Could not render Word document');
		expect(getRequiredElement(view.containerEl, `.${CSS_STATE_MSG}`).textContent).toBe('Renderer failed');
		expect([...view.containerEl.querySelectorAll(`.${CSS_STATE_BUTTON}`)].map((button) => button.textContent)).toEqual([
			'Try again',
			'Copy document text',
			'Open in default app',
		]);
		expect(view.containerEl.querySelector(`.${CSS_IFRAME}`)).toBeNull();
	});

	it('drives reload, layout, zoom, search, and outline controls through the bridge', async () => {
		const { iframe, repository, view } = await loadViewWithDocument();
		const post = vi.spyOn(iframe.contentWindow!, 'postMessage');

		getButtonByTitle(view.containerEl, 'Switch to continuous layout').click();
		expect(post).toHaveBeenCalledWith(expect.objectContaining({ type: 'layoutChanged', layout: 'continuous' }), '*');

		getButtonByTitle(view.containerEl, 'Zoom in').click();
		expect(post).toHaveBeenCalledWith(expect.objectContaining({ type: 'zoomChanged', zoom: 1.1 }), '*');
		expect(getRequiredElement(view.containerEl, `.${CSS_STATUS}`).textContent).toBe('2 paragraphs · 1 tables · 0 images · 1 links · 110%');

		getButtonByTitle(view.containerEl, 'Zoom out').click();
		expect(post).toHaveBeenCalledWith(expect.objectContaining({ type: 'zoomChanged', zoom: 1 }), '*');
		expect(getRequiredElement(view.containerEl, `.${CSS_STATUS}`).textContent).toBe('2 paragraphs · 1 tables · 0 images · 1 links · 100%');

		const searchInput = getRequiredElement(view.containerEl, `.${CSS_SEARCH_INPUT}`) as HTMLInputElement;
		searchInput.value = 'Heading';
		searchInput.dispatchEvent(new Event('input', { bubbles: true }));
		expect(post).toHaveBeenCalledWith(expect.objectContaining({ type: 'searchChanged', query: 'Heading' }), '*');
		dispatchFrom(iframe, { channel: BRIDGE_CHANNEL, type: 'searchResult', total: 3, active: 1 });
		expect(getRequiredElement(view.containerEl, `.${CSS_SEARCH_STATUS}`).textContent).toBe('2/3');

		searchInput.dispatchEvent(new KeyboardEvent('keydown', { bubbles: true, key: 'Enter' }));
		searchInput.dispatchEvent(new KeyboardEvent('keydown', { bubbles: true, key: 'Enter', shiftKey: true }));
		expect(post).toHaveBeenCalledWith(expect.objectContaining({ type: 'searchNavigate', direction: 'next' }), '*');
		expect(post).toHaveBeenCalledWith(expect.objectContaining({ type: 'searchNavigate', direction: 'previous' }), '*');

		getRequiredElement(view.containerEl, `.${CSS_OUTLINE_BUTTON}`).click();
		expect(post).toHaveBeenCalledWith(expect.objectContaining({ type: 'scrollToBlock', blockId: 'p1' }), '*');

		getButtonByTitle(view.containerEl, 'Toggle document outline').click();
		expect(getRequiredElement(view.containerEl, `.${CSS_OUTLINE}`).style.display).toBe('none');

		const reloadPromise = waitForReadCount(repository, 2);
		getButtonByTitle(view.containerEl, 'Reload document').click();
		await reloadPromise;
		const reloadedIframe = await waitForNewIframe(view.containerEl, iframe);
		dispatchFrom(reloadedIframe, { channel: BRIDGE_CHANNEL, type: 'ready' });
		await waitForStatus(view, '2 paragraphs · 1 tables · 0 images · 1 links · 100%');
		expect(reloadedIframe).not.toBe(iframe);
	});

	it('restores layout and zoom from view state', async () => {
		const file = makeFile('Restored.docx');
		const repository = makeRepository(file);
		const loader = { load: vi.fn(async () => makeModel()) } as unknown as WordDocumentLoader;
		const view = makeView(repository, loader);
		const testView = view as unknown as TestableWordViewerView;
		testView.buildDom();

		const statePromise = view.setState({ file: file.path, [VIEW_STATE_LAYOUT]: 'continuous', [VIEW_STATE_ZOOM]: 1.4 }, { history: false });
		const iframe = await waitForIframe(view.containerEl);
		const post = vi.spyOn(iframe.contentWindow!, 'postMessage');
		dispatchFrom(iframe, { channel: BRIDGE_CHANNEL, type: 'ready' });
		await statePromise;

		expect(post).toHaveBeenCalledWith(expect.objectContaining({ type: 'loadDocument', layout: 'continuous' }), '*');
		expect(post).toHaveBeenCalledWith(expect.objectContaining({ type: 'zoomChanged', zoom: 1.4 }), '*');
		expect(getRequiredElement(view.containerEl, `.${CSS_STATUS}`).textContent).toBe('2 paragraphs · 1 tables · 0 images · 1 links · 140%');
		expect(view.getState()).toMatchObject({ file: file.path, [VIEW_STATE_LAYOUT]: 'continuous', [VIEW_STATE_ZOOM]: 1.4 });
	});
});

function makeView(
	repository: WordFileRepository = {} as WordFileRepository,
	loader: WordDocumentLoader = {} as WordDocumentLoader,
): WordViewerView {
	const view = new WordViewerView(
		{} as WorkspaceLeaf,
		repository,
		loader,
		signal(settings()),
	);
	document.body.appendChild(view.containerEl);
	return view;
}

function settings(): WordViewerSettings {
	return {
		defaultLayout: 'paginated',
		maxFileSizeMb: 25,
		allowRemoteConversion: false,
		preferRemoteConversion: false,
		syncfusionServiceUrl: '',
		remoteConversionTimeoutMs: 15000,
	};
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
		outline: [{ id: 'p1', title: 'Heading', level: 1 }],
		stats: { paragraphs: 2, tables: 1, images: 0, lists: 0, links: 1, comments: 0, footnotes: 0, endnotes: 0, unsupported: 1 },
		warnings: ['Limited fidelity.'],
		unsupportedFeatures: ['charts'],
		plainText: 'Heading',
	};
}

async function loadViewWithDocument(): Promise<{
	file: TFile;
	iframe: HTMLIFrameElement;
	loader: WordDocumentLoader & { load: ReturnType<typeof vi.fn> };
	repository: WordFileRepository & { readWordFile: ReturnType<typeof vi.fn> };
	view: WordViewerView;
}> {
	const file = makeFile('Project plan.docx');
	const model = makeModel();
	const repository = makeRepository(file);
	const loader = { load: vi.fn(async () => model) } as unknown as WordDocumentLoader & { load: ReturnType<typeof vi.fn> };
	const view = makeView(repository, loader);
	const testView = view as unknown as TestableWordViewerView;
	testView.buildDom();

	const statePromise = view.setState({ file: file.path }, { history: false });
	const iframe = await waitForIframe(view.containerEl);
	dispatchFrom(iframe, { channel: BRIDGE_CHANNEL, type: 'ready' });
	await statePromise;
	return { file, iframe, loader, repository, view };
}

function makeRepository(file: TFile): WordFileRepository & {
	readWordFile: ReturnType<typeof vi.fn>;
} {
	return {
		resolveWordFile: vi.fn(() => file),
		readWordFile: vi.fn(async (): Promise<WordReadResult> => ({
			file,
			data: new ArrayBuffer(1),
			mtime: file.stat.mtime,
			size: file.stat.size,
		})),
		assertWordFile: vi.fn(),
	} as unknown as WordFileRepository & { readWordFile: ReturnType<typeof vi.fn> };
}

function getRequiredElement(root: ParentNode, selector: string): HTMLElement {
	const element = root.querySelector(selector);
	if (!(element instanceof HTMLElement)) { throw new Error(`Missing element: ${selector}`); }
	return element;
}

async function waitForIframe(root: ParentNode): Promise<HTMLIFrameElement> {
	for (let index = 0; index < 20; index++) {
		const iframe = root.querySelector(`.${CSS_IFRAME}`);
		if (iframe instanceof HTMLIFrameElement) { return iframe; }
		await new Promise((resolve) => setTimeout(resolve, 0));
	}
	throw new Error('Timed out waiting for Word viewer iframe.');
}

async function waitForNewIframe(root: ParentNode, previous: HTMLIFrameElement): Promise<HTMLIFrameElement> {
	for (let index = 0; index < 20; index++) {
		const iframe = root.querySelector(`.${CSS_IFRAME}`);
		if (iframe instanceof HTMLIFrameElement && iframe !== previous) { return iframe; }
		await new Promise((resolve) => setTimeout(resolve, 0));
	}
	throw new Error('Timed out waiting for reloaded Word viewer iframe.');
}

async function waitForReadCount(
	repository: WordFileRepository & { readWordFile: ReturnType<typeof vi.fn> },
	count: number,
): Promise<void> {
	for (let index = 0; index < 20; index++) {
		if (repository.readWordFile.mock.calls.length >= count) { return; }
		await new Promise((resolve) => setTimeout(resolve, 0));
	}
	throw new Error(`Timed out waiting for ${count} file reads.`);
}

async function waitForStatus(view: WordViewerView, text: string): Promise<void> {
	for (let index = 0; index < 20; index++) {
		if (getRequiredElement(view.containerEl, `.${CSS_STATUS}`).textContent === text) { return; }
		await new Promise((resolve) => setTimeout(resolve, 0));
	}
	throw new Error(`Timed out waiting for status: ${text}`);
}

function dispatchFrom(iframe: HTMLIFrameElement, data: unknown): void {
	window.dispatchEvent(new MessageEvent('message', { data, source: iframe.contentWindow }));
}

function getButtonByTitle(root: ParentNode, title: string): HTMLButtonElement {
	const button = root.querySelector(`button[title="${title}"]`);
	if (!(button instanceof HTMLButtonElement)) { throw new Error(`Missing button: ${title}`); }
	return button;
}
