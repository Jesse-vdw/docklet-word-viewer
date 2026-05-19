import { BRIDGE_CHANNEL } from '../src/constants.ts';
import { buildWordViewerHtml } from '../src/engine/WordViewerHost.ts';

describe('buildWordViewerHtml', () => {
	it('builds a self-contained offline document that speaks the bridge protocol', () => {
		const html = buildWordViewerHtml();
		expect(html).toContain('<!doctype html>');
		expect(html).toContain(BRIDGE_CHANNEL);
		expect(html).toContain('postMessage');
		expect(html).toContain('loadDocument');
		expect(html).toContain('searchResult');
		expect(html).toContain('word-image');
		expect(html).not.toContain('http://');
		expect(html).not.toContain('https://');
	});
});
