import { resolveImportEndpoint } from '../src/conversion/SyncfusionConversionClient.ts';

describe('resolveImportEndpoint', () => {
	it('normalizes self-hosted Syncfusion service URLs to Import endpoints', () => {
		expect(resolveImportEndpoint('http://localhost:62869/api/documenteditor/')).toBe(
			'http://localhost:62869/api/documenteditor/Import',
		);
		expect(resolveImportEndpoint('https://example.internal/api/documenteditor')).toBe(
			'https://example.internal/api/documenteditor/Import',
		);
		expect(resolveImportEndpoint(' https://example.internal/api/documenteditor/Import?debug=true#frag ')).toBe(
			'https://example.internal/api/documenteditor/Import',
		);
		expect(resolveImportEndpoint('https://example.internal/api/documenteditor/import')).toBe(
			'https://example.internal/api/documenteditor/import',
		);
	});

	it('rejects empty, invalid, non-http, and public demo service URLs', () => {
		expect(resolveImportEndpoint('')).toBeNull();
		expect(resolveImportEndpoint('not a url')).toBeNull();
		expect(resolveImportEndpoint('file:///tmp/service')).toBeNull();
		expect(resolveImportEndpoint('https://services.syncfusion.com/js/production/api/documenteditor/')).toBeNull();
	});

	it('permits plaintext HTTP only for loopback development endpoints', () => {
		expect(resolveImportEndpoint('http://127.0.0.1:8080/converter')).toBe('http://127.0.0.1:8080/converter/Import');
		expect(resolveImportEndpoint('http://[::1]:8080/converter')).toBe('http://[::1]:8080/converter/Import');
		expect(resolveImportEndpoint('http://192.168.1.8/converter')).toBeNull();
		expect(resolveImportEndpoint('http://converter.example.com/converter')).toBeNull();
		expect(resolveImportEndpoint('https://user:secret@example.com/converter')).toBeNull();
	});
});
