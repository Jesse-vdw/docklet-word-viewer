import { effect, signal, type Signal } from '@preact/signals-core';

export interface SignalSettingsStore<T extends object> {
	settingsSignal: Signal<T>;
	setSettings(next: T): void;
	patchSettings(patch: Partial<T>): void;
	onSettingsChange(callback: () => void): () => void;
}

export function createSignalSettingsStore<T extends object>(defaults: T): SignalSettingsStore<T> {
	const settingsSignal = signal<T>(structuredClone(defaults));
	return {
		settingsSignal,
		setSettings: (next) => {
			settingsSignal.value = next;
		},
		patchSettings: (patch) => {
			settingsSignal.value = { ...settingsSignal.value, ...patch };
		},
		onSettingsChange: (callback) => effect(callback),
	};
}
