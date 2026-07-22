import { signal } from '@preact/signals-core';
import { DEFAULT_MAX_FILE_SIZE_MB } from '../../src/domain/constants.ts';
import { renderSettingsSection, type WordViewerSettingsHost } from '../../src/settings/SettingsTab.ts';
import {
	DEFAULT_WORD_VIEWER_SETTINGS,
	normalizeWordViewerSettings,
	type WordViewerSettings,
} from '../../src/settings/settings.ts';

describe('normalizeWordViewerSettings', () => {
	it('fills defaults for missing settings', () => {
		expect(normalizeWordViewerSettings(null)).toEqual({
			defaultLayout: 'paginated',
			maxFileSizeMb: DEFAULT_MAX_FILE_SIZE_MB,
			allowRemoteConversion: false,
			preferRemoteConversion: false,
			syncfusionServiceUrl: '',
			remoteConversionTimeoutMs: 15000,
		});
	});

	it('normalizes persisted values conservatively', () => {
		expect(
			normalizeWordViewerSettings({
				defaultLayout: 'continuous',
				maxFileSizeMb: 500,
				allowRemoteConversion: true,
				preferRemoteConversion: true,
				syncfusionServiceUrl: '  http://localhost:62869/api/documenteditor/  ',
				remoteConversionTimeoutMs: 500,
			}),
		).toEqual({
			defaultLayout: 'continuous',
			maxFileSizeMb: 200,
			allowRemoteConversion: true,
			preferRemoteConversion: true,
			syncfusionServiceUrl: 'http://localhost:62869/api/documenteditor/',
			remoteConversionTimeoutMs: 1000,
		});
	});
});

describe('renderSettingsSection', () => {
	afterEach(() => {
		document.body.textContent = '';
	});

	it('clamps numeric inputs before saving live settings', () => {
		const container = document.createElement('section');
		const host = makeHost();
		renderSettingsSection(container, host);

		const maxFileSizeInput = getInput(container, 'Maximum local file size');
		maxFileSizeInput.value = '500';
		maxFileSizeInput.dispatchEvent(new Event('input', { bubbles: true }));
		expect(host.settingsSignal.value.maxFileSizeMb).toBe(200);
		expect(maxFileSizeInput.value).toBe('200');

		maxFileSizeInput.value = '';
		maxFileSizeInput.dispatchEvent(new Event('input', { bubbles: true }));
		expect(host.settingsSignal.value.maxFileSizeMb).toBe(200);

		const allowRemoteInput = getInput(container, 'Allow remote conversion');
		allowRemoteInput.checked = true;
		allowRemoteInput.dispatchEvent(new Event('change', { bubbles: true }));
		expect(host.settingsSignal.value.allowRemoteConversion).toBe(true);
		expect(host.settingsSignal.value.syncfusionServiceUrl).toBe('http://localhost:62869/api/documenteditor/');

		const timeoutInput = getInput(container, 'Remote conversion timeout');
		timeoutInput.value = '500';
		timeoutInput.dispatchEvent(new Event('input', { bubbles: true }));
		expect(host.settingsSignal.value.remoteConversionTimeoutMs).toBe(1000);
		expect(timeoutInput.value).toBe('1000');
	});

	it('communicates remote prerequisites and disables dependent controls until usable', () => {
		const container = document.createElement('section');
		const host = makeHost();
		renderSettingsSection(container, host);

		expect(container.textContent).not.toContain('default_path');
		expect(container.textContent).not.toContain('future high-fidelity engines');

		const serviceUrlInput = getInput(container, 'Syncfusion service URL');
		const preferRemoteInput = getInput(container, 'Prefer remote conversion');
		const timeoutInput = getInput(container, 'Remote conversion timeout');
		expect(preferRemoteInput.disabled).toBe(true);
		expect(timeoutInput.disabled).toBe(true);

		const allowRemoteInput = getInput(container, 'Allow remote conversion');
		allowRemoteInput.checked = true;
		allowRemoteInput.dispatchEvent(new Event('change', { bubbles: true }));

		expect(serviceUrlInput.value).toBe('http://localhost:62869/api/documenteditor/');
		expect(preferRemoteInput.disabled).toBe(false);
		expect(timeoutInput.disabled).toBe(false);
	});
});

function makeHost(settings: WordViewerSettings = DEFAULT_WORD_VIEWER_SETTINGS): WordViewerSettingsHost {
	const settingsSignal = signal(settings);
	return {
		settingsPlugin: {} as WordViewerSettingsHost['settingsPlugin'],
		settingsSignal,
		patchSettings: (patch) => {
			settingsSignal.value = { ...settingsSignal.value, ...patch };
		},
	};
}

function getInput(root: ParentNode, label: string): HTMLInputElement {
	const input = root.querySelector(`input[aria-label="${label}"]`);
	if (!(input instanceof HTMLInputElement)) {
		throw new Error(`Missing input: ${label}`);
	}
	return input;
}
