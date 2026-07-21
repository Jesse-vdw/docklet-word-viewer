import DockletWordViewerPlugin from '../src/main.ts';
import { isDockletWordViewerApi } from '../src/api.ts';
import fixture from './contracts/plugin-api.json';

describe('public API contract', () => {
	it('publishes one frozen, versioned API owned by the plugin', () => {
		const plugin = new DockletWordViewerPlugin({} as never, {} as never);

		expect(isDockletWordViewerApi(plugin.api)).toBe(true);
		expect(Object.isFrozen(plugin.api)).toBe(true);
		expect(Object.keys(plugin.api)).toEqual(expect.arrayContaining(fixture.requiredMembers));
		expect(plugin.api).toBe(plugin.api);
	});
});
