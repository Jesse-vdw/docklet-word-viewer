import { PluginSettingTab, Setting, type App, type Plugin } from 'obsidian';
import type { Signal } from '@preact/signals-core';
import type { WordViewerSettings } from './settings.ts';

export interface WordViewerSettingsHost {
	settingsPlugin: Plugin;
	settingsSignal: Signal<WordViewerSettings>;
	patchSettings(patch: Partial<WordViewerSettings>): void;
}

export class DockletWordViewerSettingTab extends PluginSettingTab {
	constructor(app: App, private readonly host: WordViewerSettingsHost) {
		super(app, host.settingsPlugin);
	}

	display(): void {
		const { containerEl } = this;
		containerEl.empty();
		containerEl.createEl('p', {
			text: 'Configure Docklet Word Viewer rendering, file-size safety, and optional remote conversion for future high-fidelity engines.',
			cls: 'setting-item-description',
		});
		renderSettingsSection(containerEl, this.host, () => this.display());
	}
}

export function renderSettingsSection(containerEl: HTMLElement, host: WordViewerSettingsHost, refresh?: () => void): void {
	const settings = host.settingsSignal.value;
	new Setting(containerEl)
		.setName('Default layout')
		.setDesc('Use paginated pages for Word-like reading, or continuous for a denser Obsidian pane.')
		.addDropdown((dropdown) => dropdown
			.addOption('paginated', 'Paginated')
			.addOption('continuous', 'Continuous')
			.setValue(settings.defaultLayout)
			.onChange((value) => patch(host, { defaultLayout: value === 'continuous' ? 'continuous' : 'paginated' }, refresh)));
	textSetting(containerEl, 'Maximum local file size', 'Block very large documents before parsing them in the Obsidian renderer process.', '25', String(settings.maxFileSizeMb), (value) => {
		const parsed = Number(value);
		if (Number.isFinite(parsed)) { host.patchSettings({ maxFileSizeMb: parsed }); }
	});
	toggleSetting(containerEl, 'Allow remote conversion', 'Reserved for a self-hosted Syncfusion-compatible conversion service. Leave off to keep documents local.', settings.allowRemoteConversion, (value) => patch(host, { allowRemoteConversion: value }, refresh));
	toggleSetting(containerEl, 'Prefer remote conversion', 'When enabled, use the configured self-hosted converter before the local parser. Otherwise it is only used as a fallback.', settings.preferRemoteConversion, (value) => patch(host, { preferRemoteConversion: value }, refresh));
	textSetting(containerEl, 'Syncfusion service URL', 'Optional self-hosted endpoint such as http://localhost:62869/api/documenteditor/. The public demo service should not be used for private vault files.', 'http://localhost:62869/api/documenteditor/', settings.syncfusionServiceUrl, (value) => host.patchSettings({ syncfusionServiceUrl: value }));
	textSetting(containerEl, 'Remote conversion timeout', 'Abort self-hosted conversion requests after this many milliseconds.', '15000', String(settings.remoteConversionTimeoutMs), (value) => {
		const parsed = Number(value);
		if (Number.isFinite(parsed)) { host.patchSettings({ remoteConversionTimeoutMs: parsed }); }
	});
}

function patch(host: WordViewerSettingsHost, patchValue: Partial<WordViewerSettings>, refresh?: () => void): void {
	host.patchSettings(patchValue);
	refresh?.();
}

function toggleSetting(containerEl: HTMLElement, name: string, desc: string, value: boolean, onChange: (value: boolean) => void): void {
	new Setting(containerEl).setName(name).setDesc(desc).addToggle((toggle) => toggle.setValue(value).onChange(onChange));
}

function textSetting(containerEl: HTMLElement, name: string, desc: string, placeholder: string, value: string, onChange: (value: string) => void): void {
	new Setting(containerEl)
		.setName(name)
		.setDesc(desc)
		.addText((text) => text.setPlaceholder(placeholder).setValue(value).onChange(onChange));
}
