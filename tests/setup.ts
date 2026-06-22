type CreateElOptions = {
	cls?: string;
	text?: string;
	attr?: Record<string, string>;
};

HTMLElement.prototype.createEl = function <K extends keyof HTMLElementTagNameMap>(
	tag: K,
	opts: CreateElOptions = {},
): HTMLElementTagNameMap[K] {
	const element = document.createElement(tag) as HTMLElementTagNameMap[K];
	if (opts.cls) {
		for (const className of opts.cls.split(' ').filter(Boolean)) {
			element.classList.add(className);
		}
	}
	if (opts.text !== undefined) { element.textContent = opts.text; }
	if (opts.attr) {
		for (const [key, value] of Object.entries(opts.attr)) {
			element.setAttribute(key, value);
		}
	}
	this.appendChild(element);
	return element;
};

HTMLElement.prototype.createDiv = function (opts: CreateElOptions | string = {}): HTMLDivElement {
	return this.createEl('div', typeof opts === 'string' ? { cls: opts } : opts);
};

HTMLElement.prototype.empty = function (): void {
	while (this.firstChild) {
		this.removeChild(this.firstChild);
	}
};

HTMLElement.prototype.addClass = function (...classes: string[]): void {
	this.classList.add(...classes);
};

HTMLElement.prototype.removeClass = function (...classes: string[]): void {
	this.classList.remove(...classes);
};

HTMLElement.prototype.setText = function (text: string): void {
	this.textContent = text;
};

HTMLElement.prototype.show = function (): void {
	this.style.display = '';
};

HTMLElement.prototype.hide = function (): void {
	this.style.display = 'none';
};

HTMLElement.prototype.toggle = function (show: boolean): void {
	this.style.display = show ? '' : 'none';
};

declare global {
	interface HTMLElement {
		createEl<K extends keyof HTMLElementTagNameMap>(tag: K, opts?: CreateElOptions): HTMLElementTagNameMap[K];
		createDiv(opts?: CreateElOptions | string): HTMLDivElement;
		empty(): void;
		addClass(...classes: string[]): void;
		removeClass(...classes: string[]): void;
		setText(text: string): void;
		show(): void;
		hide(): void;
		toggle(show: boolean): void;
	}
}

export {};
