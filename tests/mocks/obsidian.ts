export class Notice {
	constructor(_message: string) {}
}

export class Plugin {
	app = {} as unknown;
	manifest = { id: 'docklet-word-viewer', name: 'Docklet Word Viewer', version: '2.0.0' };
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

export class PluginSettingTab {
	containerEl = document.createElement('div');

	constructor(_app: unknown, _plugin: unknown) {}
}

export class Setting {
	readonly settingEl: HTMLElement;
	readonly nameEl: HTMLElement;
	readonly descEl: HTMLElement;
	readonly controlEl: HTMLElement;

	constructor(containerEl: HTMLElement) {
		this.settingEl = document.createElement('div');
		this.settingEl.className = 'setting-item';
		this.nameEl = document.createElement('div');
		this.nameEl.className = 'setting-item-name';
		this.descEl = document.createElement('div');
		this.descEl.className = 'setting-item-description';
		this.controlEl = document.createElement('div');
		this.controlEl.className = 'setting-item-control';
		this.settingEl.append(this.nameEl, this.descEl, this.controlEl);
		containerEl.appendChild(this.settingEl);
	}

	setName(name: string): this {
		this.nameEl.textContent = name;
		return this;
	}

	setDesc(description: string): this {
		this.descEl.textContent = description;
		return this;
	}

	addDropdown(callback: (dropdown: DropdownComponent) => unknown): this {
		const component = new DropdownComponent();
		component.selectEl.setAttribute('aria-label', this.nameEl.textContent || 'Select');
		this.controlEl.appendChild(component.selectEl);
		callback(component);
		return this;
	}

	addText(callback: (text: TextComponent) => unknown): this {
		const component = new TextComponent();
		component.inputEl.setAttribute('aria-label', this.nameEl.textContent || 'Text');
		this.controlEl.appendChild(component.inputEl);
		callback(component);
		return this;
	}

	addToggle(callback: (toggle: ToggleComponent) => unknown): this {
		const component = new ToggleComponent();
		component.toggleEl.setAttribute('aria-label', this.nameEl.textContent || 'Toggle');
		this.controlEl.appendChild(component.toggleEl);
		callback(component);
		return this;
	}
}

export class ItemView {
	app = { isDarkMode: () => false, vault: { adapter: {} } };
	containerEl = createItemViewContainer();

	constructor(_leaf?: unknown) {}

	async setState(_state: Record<string, unknown>, _result: { history: boolean }): Promise<void> {}
	getState(): Record<string, unknown> {
		return {};
	}
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

class DropdownComponent {
	readonly selectEl = document.createElement('select');
	private changeHandler: ((value: string) => void) | undefined;

	constructor() {
		this.selectEl.addEventListener('change', () => this.changeHandler?.(this.selectEl.value));
	}

	addOption(value: string, label: string): this {
		const option = document.createElement('option');
		option.value = value;
		option.textContent = label;
		this.selectEl.appendChild(option);
		return this;
	}

	setValue(value: string): this {
		this.selectEl.value = value;
		return this;
	}

	onChange(handler: (value: string) => void): this {
		this.changeHandler = handler;
		return this;
	}
}

class TextComponent {
	readonly inputEl = document.createElement('input');
	private changeHandler: ((value: string) => void) | undefined;

	constructor() {
		this.inputEl.type = 'text';
		this.inputEl.addEventListener('input', () => this.changeHandler?.(this.inputEl.value));
	}

	setPlaceholder(placeholder: string): this {
		this.inputEl.placeholder = placeholder;
		return this;
	}

	setValue(value: string): this {
		this.inputEl.value = value;
		return this;
	}

	setDisabled(disabled: boolean): this {
		this.inputEl.disabled = disabled;
		return this;
	}

	onChange(handler: (value: string) => void): this {
		this.changeHandler = handler;
		return this;
	}
}

class ToggleComponent {
	readonly toggleEl = document.createElement('input');
	private changeHandler: ((value: boolean) => void) | undefined;

	constructor() {
		this.toggleEl.type = 'checkbox';
		this.toggleEl.addEventListener('change', () => this.changeHandler?.(this.toggleEl.checked));
	}

	setValue(value: boolean): this {
		this.toggleEl.checked = value;
		return this;
	}

	setDisabled(disabled: boolean): this {
		this.toggleEl.disabled = disabled;
		return this;
	}

	onChange(handler: (value: boolean) => void): this {
		this.changeHandler = handler;
		return this;
	}
}

function createItemViewContainer(): HTMLElement {
	const container = document.createElement('div');
	container.appendChild(document.createElement('div'));
	container.appendChild(document.createElement('div'));
	return container;
}
