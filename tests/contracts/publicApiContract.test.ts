import DockletWordViewerPlugin from '../../src/plugin/DockletWordViewerPlugin.ts';
import { isDockletWordViewerApi } from '../../src/api/DockletWordViewerApi.ts';
import fixture from './plugin-api.json';

describe('public API contract', () => {
	it('publishes one frozen, versioned API owned by the plugin', () => {
		const plugin = new DockletWordViewerPlugin({} as never, {} as never);

		expect(isDockletWordViewerApi(plugin.api)).toBe(true);
		expect(Object.isFrozen(plugin.api)).toBe(true);
		expect(Object.keys(plugin.api)).toEqual(expect.arrayContaining(fixture.requiredMembers));
		expect(plugin.api).toBe(plugin.api);
	});
});
