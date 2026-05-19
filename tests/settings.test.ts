import { DEFAULT_MAX_FILE_SIZE_MB } from '../src/constants.ts';
import { normalizeWordViewerSettings } from '../src/settings/settings.ts';

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
		expect(normalizeWordViewerSettings({
			defaultLayout: 'continuous',
			maxFileSizeMb: 500,
			allowRemoteConversion: true,
			preferRemoteConversion: true,
			syncfusionServiceUrl: '  http://localhost:62869/api/documenteditor/  ',
			remoteConversionTimeoutMs: 500,
		})).toEqual({
			defaultLayout: 'continuous',
			maxFileSizeMb: 200,
			allowRemoteConversion: true,
			preferRemoteConversion: true,
			syncfusionServiceUrl: 'http://localhost:62869/api/documenteditor/',
			remoteConversionTimeoutMs: 1000,
		});
	});
});
