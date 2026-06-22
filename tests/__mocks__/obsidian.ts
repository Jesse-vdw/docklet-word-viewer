export class Notice {
	constructor(_message: string) {}
}

export class Plugin {
	app = {} as unknown;
	register() {}
	registerEvent() {}
	registerInterval() {}
	registerDomEvent() {}
	addCommand() {}
	addSettingTab() {}
	registerExtensions() {}
	registerView() {}
	loadData = async () => null;
	saveData = async (_data: unknown) => {};
}

export class ItemView {
	app = { isDarkMode: () => false, vault: { adapter: {} } };
	containerEl = createItemViewContainer();

	constructor(_leaf?: unknown) {}

	async setState(_state: Record<string, unknown>, _result: { history: boolean }): Promise<void> {}
	getState(): Record<string, unknown> { return {}; }
}

export class TFile {
	path: string;
	name: string;
	basename: string;
	extension: string;
	stat = { mtime: 0, size: 0 };

	constructor(path = 'document.docx') {
		this.path = path;
		this.name = path.split('/').pop() ?? path;
		const dot = this.name.lastIndexOf('.');
		this.basename = dot >= 0 ? this.name.slice(0, dot) : this.name;
		this.extension = dot >= 0 ? this.name.slice(dot + 1) : '';
	}
}
export class Modal {}

export function setIcon(button: HTMLElement, icon: string): void {
	button.dataset['icon'] = icon;
}

function createItemViewContainer(): HTMLElement {
	const container = document.createElement('div');
	container.appendChild(document.createElement('div'));
	container.appendChild(document.createElement('div'));
	return container;
}
