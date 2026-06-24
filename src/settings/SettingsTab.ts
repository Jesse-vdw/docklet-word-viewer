import { PluginSettingTab, Setting, type App, type Plugin, type TextComponent, type ToggleComponent } from 'obsidian';
import type { Signal } from '@preact/signals-core';
import { canUseRemoteConversion } from '../conversion/SyncfusionConversionClient.ts';
import {
	DEFAULT_SYNCFUSION_SERVICE_URL,
	MAX_LOCAL_FILE_SIZE_MB,
	MAX_REMOTE_CONVERSION_TIMEOUT_MS,
	MIN_LOCAL_FILE_SIZE_MB,
	MIN_REMOTE_CONVERSION_TIMEOUT_MS,
} from '../constants.ts';
import { normalizeWordViewerSettings, type WordViewerSettings } from './settings.ts';

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
			text: 'Configure Docklet Word Viewer rendering, file-size safety, and optional self-hosted remote conversion.',
			cls: 'setting-item-description',
		});
		renderSettingsSection(containerEl, this.host, () => this.display());
	}
}

export function renderSettingsSection(containerEl: HTMLElement, host: WordViewerSettingsHost, refresh?: () => void): void {
	const settings = host.settingsSignal.value;
	let serviceUrlInput: TextComponent | null = null;
	let preferRemoteToggle: ToggleComponent | null = null;
	let timeoutInput: TextComponent | null = null;
	const updateRemoteDependentControls = (): void => {
		const disabled = !canUseRemoteConversion(host.settingsSignal.value);
		preferRemoteToggle?.setDisabled(disabled);
		timeoutInput?.setDisabled(disabled);
	};

	new Setting(containerEl)
		.setName('Default layout')
		.setDesc('Use paginated pages for Word-like reading, or continuous for a denser Obsidian pane.')
		.addDropdown((dropdown) => dropdown
			.addOption('paginated', 'Paginated')
			.addOption('continuous', 'Continuous')
			.setValue(settings.defaultLayout)
			.onChange((value) => patch(host, { defaultLayout: value === 'continuous' ? 'continuous' : 'paginated' }, refresh)));
	numberSetting(containerEl, 'Maximum local file size', 'Block very large documents before parsing them in the Obsidian renderer process.', String(MIN_LOCAL_FILE_SIZE_MB), String(settings.maxFileSizeMb), MIN_LOCAL_FILE_SIZE_MB, MAX_LOCAL_FILE_SIZE_MB, (value) => patchNumber(host, 'maxFileSizeMb', value));
	toggleSetting(containerEl, 'Allow remote conversion', 'Enable posting documents to a configured self-hosted Syncfusion-compatible conversion service. Leave off to keep documents local.', settings.allowRemoteConversion, (value) => {
		const patchValue: Partial<WordViewerSettings> = { allowRemoteConversion: value };
		if (value && !host.settingsSignal.value.syncfusionServiceUrl.trim()) {
			patchValue.syncfusionServiceUrl = DEFAULT_SYNCFUSION_SERVICE_URL;
		}
		patch(host, patchValue);
		if (patchValue.syncfusionServiceUrl) { serviceUrlInput?.setValue(patchValue.syncfusionServiceUrl); }
		updateRemoteDependentControls();
	});
	serviceUrlInput = textSetting(containerEl, 'Syncfusion service URL', 'Required for remote conversion. Use a self-hosted endpoint; known public Syncfusion demo hosts are blocked.', DEFAULT_SYNCFUSION_SERVICE_URL, settings.syncfusionServiceUrl, (value) => {
		patch(host, { syncfusionServiceUrl: value });
		updateRemoteDependentControls();
	});
	preferRemoteToggle = toggleSetting(containerEl, 'Prefer remote conversion', 'Use the configured self-hosted converter before the local parser. Otherwise it is only used as a fallback after local parsing fails.', settings.preferRemoteConversion, (value) => patch(host, { preferRemoteConversion: value }, refresh));
	timeoutInput = numberSetting(containerEl, 'Remote conversion timeout', 'Abort self-hosted conversion requests after this many milliseconds.', '15000', String(settings.remoteConversionTimeoutMs), MIN_REMOTE_CONVERSION_TIMEOUT_MS, MAX_REMOTE_CONVERSION_TIMEOUT_MS, (value) => patchNumber(host, 'remoteConversionTimeoutMs', value));
	updateRemoteDependentControls();
}

function patch(host: WordViewerSettingsHost, patchValue: Partial<WordViewerSettings>, refresh?: () => void): void {
	host.patchSettings(normalizeWordViewerSettings({ ...host.settingsSignal.value, ...patchValue }));
	refresh?.();
}

function patchNumber(host: WordViewerSettingsHost, key: 'maxFileSizeMb' | 'remoteConversionTimeoutMs', value: string): number | null {
	if (value.trim() === '') { return null; }
	const parsed = Number(value);
	if (!Number.isFinite(parsed)) { return null; }
	const normalized = normalizeWordViewerSettings({ ...host.settingsSignal.value, [key]: parsed });
	host.patchSettings(normalized);
	return normalized[key];
}

function toggleSetting(containerEl: HTMLElement, name: string, desc: string, value: boolean, onChange: (value: boolean) => void): ToggleComponent | null {
	let component: ToggleComponent | null = null;
	new Setting(containerEl).setName(name).setDesc(desc).addToggle((toggle) => {
		component = toggle;
		return toggle.setValue(value).onChange(onChange);
	});
	return component;
}

function textSetting(containerEl: HTMLElement, name: string, desc: string, placeholder: string, value: string, onChange: (value: string) => void): TextComponent | null {
	let component: TextComponent | null = null;
	new Setting(containerEl)
		.setName(name)
		.setDesc(desc)
		.addText((text) => {
			component = text;
			return text.setPlaceholder(placeholder).setValue(value).onChange(onChange);
		});
	return component;
}

function numberSetting(containerEl: HTMLElement, name: string, desc: string, placeholder: string, value: string, min: number, max: number, onChange: (value: string) => number | null): TextComponent | null {
	let component: TextComponent | null = null;
	new Setting(containerEl)
		.setName(name)
		.setDesc(desc)
		.addText((text) => {
			component = text;
			text.inputEl.type = 'number';
			text.inputEl.min = String(min);
			text.inputEl.max = String(max);
			text.inputEl.step = '1';
			return text.setPlaceholder(placeholder).setValue(value).onChange((nextValue) => {
				const normalized = onChange(nextValue);
				if (normalized !== null && String(normalized) !== nextValue.trim()) {
					text.setValue(String(normalized));
				}
			});
		});
	return component;
}
