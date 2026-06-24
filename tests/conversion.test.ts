import { resolveImportEndpoint } from '../src/conversion/SyncfusionConversionClient.ts';

describe('resolveImportEndpoint', () => {
	it('normalizes self-hosted Syncfusion service URLs to Import endpoints', () => {
		expect(resolveImportEndpoint('http://localhost:62869/api/documenteditor/')).toBe('http://localhost:62869/api/documenteditor/Import');
		expect(resolveImportEndpoint('https://example.internal/api/documenteditor')).toBe('https://example.internal/api/documenteditor/Import');
		expect(resolveImportEndpoint(' https://example.internal/api/documenteditor/Import?debug=true#frag ')).toBe('https://example.internal/api/documenteditor/Import');
		expect(resolveImportEndpoint('https://example.internal/api/documenteditor/import')).toBe('https://example.internal/api/documenteditor/import');
	});

	it('rejects empty, invalid, non-http, and public demo service URLs', () => {
		expect(resolveImportEndpoint('')).toBeNull();
		expect(resolveImportEndpoint('not a url')).toBeNull();
		expect(resolveImportEndpoint('file:///tmp/service')).toBeNull();
		expect(resolveImportEndpoint('https://services.syncfusion.com/js/production/api/documenteditor/')).toBeNull();
	});
});
