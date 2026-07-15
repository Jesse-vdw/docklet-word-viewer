import {
	DEFAULT_MAX_FILE_SIZE_MB,
	DEFAULT_REMOTE_CONVERSION_TIMEOUT_MS,
	MAX_LOCAL_FILE_SIZE_MB,
	MAX_REMOTE_CONVERSION_TIMEOUT_MS,
	MIN_LOCAL_FILE_SIZE_MB,
	MIN_REMOTE_CONVERSION_TIMEOUT_MS,
} from '../constants.ts';
import type { WordLayoutMode } from '../docx/wordModel.ts';

export interface WordViewerSettings {
	defaultLayout: WordLayoutMode;
	maxFileSizeMb: number;
	allowRemoteConversion: boolean;
	preferRemoteConversion: boolean;
	syncfusionServiceUrl: string;
	remoteConversionTimeoutMs: number;
}

export const DEFAULT_WORD_VIEWER_SETTINGS: WordViewerSettings = {
	defaultLayout: 'paginated',
	maxFileSizeMb: DEFAULT_MAX_FILE_SIZE_MB,
	allowRemoteConversion: false,
	preferRemoteConversion: false,
	syncfusionServiceUrl: '',
	remoteConversionTimeoutMs: DEFAULT_REMOTE_CONVERSION_TIMEOUT_MS,
};

export function normalizeWordViewerSettings(raw: Partial<WordViewerSettings> | null | undefined): WordViewerSettings {
	return {
		defaultLayout: layoutOrDefault(raw?.defaultLayout, DEFAULT_WORD_VIEWER_SETTINGS.defaultLayout),
		maxFileSizeMb: numberInRangeOrDefault(
			raw?.maxFileSizeMb,
			MIN_LOCAL_FILE_SIZE_MB,
			MAX_LOCAL_FILE_SIZE_MB,
			DEFAULT_WORD_VIEWER_SETTINGS.maxFileSizeMb,
		),
		allowRemoteConversion: boolOrDefault(
			raw?.allowRemoteConversion,
			DEFAULT_WORD_VIEWER_SETTINGS.allowRemoteConversion,
		),
		preferRemoteConversion: boolOrDefault(
			raw?.preferRemoteConversion,
			DEFAULT_WORD_VIEWER_SETTINGS.preferRemoteConversion,
		),
		syncfusionServiceUrl: stringOrDefault(raw?.syncfusionServiceUrl, DEFAULT_WORD_VIEWER_SETTINGS.syncfusionServiceUrl),
		remoteConversionTimeoutMs: numberInRangeOrDefault(
			raw?.remoteConversionTimeoutMs,
			MIN_REMOTE_CONVERSION_TIMEOUT_MS,
			MAX_REMOTE_CONVERSION_TIMEOUT_MS,
			DEFAULT_WORD_VIEWER_SETTINGS.remoteConversionTimeoutMs,
		),
	};
}

function boolOrDefault(value: unknown, default_path: boolean): boolean {
	return typeof value === 'boolean' ? value : default_path;
}

function stringOrDefault(value: unknown, default_path: string): string {
	return typeof value === 'string' ? value.trim() : default_path;
}

function layoutOrDefault(value: unknown, default_path: WordLayoutMode): WordLayoutMode {
	return value === 'paginated' || value === 'continuous' ? value : default_path;
}

function numberInRangeOrDefault(value: unknown, min: number, max: number, default_path: number): number {
	if (typeof value !== 'number' || !Number.isFinite(value)) {
		return default_path;
	}
	return Math.min(max, Math.max(min, Math.round(value)));
}
