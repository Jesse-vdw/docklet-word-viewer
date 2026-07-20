import DockletWordViewerPlugin from '../src/main.ts';
import { isDockletWordViewerApi } from '../src/api.ts';

describe('public API contract', () => {
	it('publishes one frozen, versioned API owned by the plugin', () => {
		const plugin = new DockletWordViewerPlugin({} as never, {} as never);

		expect(isDockletWordViewerApi(plugin.api)).toBe(true);
		expect(Object.isFrozen(plugin.api)).toBe(true);
		expect(plugin.api).toBe(plugin.api);
	});
});
