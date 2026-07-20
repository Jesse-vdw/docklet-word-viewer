import { BRIDGE_CHANNEL } from '../src/constants.ts';
import { buildWordViewerHtml } from '../src/engine/WordViewerHost.ts';

describe('buildWordViewerHtml', () => {
	it('builds a self-contained offline document that speaks the bridge protocol', () => {
		const html = buildWordViewerHtml('host-test');
		expect(html).toContain('<!doctype html>');
		expect(html).toContain(BRIDGE_CHANNEL);
		expect(html).toContain('"host-test"');
		expect(html).toContain('postMessage');
		expect(html).toContain('message.protocolVersion !== PROTOCOL_VERSION');
		expect(html).toContain('message.bridgeId !== BRIDGE_ID');
		expect(html).toContain('loadDocument');
		expect(html).toContain('searchResult');
		expect(html).toContain('word-image');
		expect(html).toContain('CSS.escape');
		expect(html).not.toContain('http://');
		expect(html).not.toContain('https://');
	});
});
