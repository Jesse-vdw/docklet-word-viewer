import { readFileSync } from 'node:fs';

describe('DockletWordViewerRuntime ownership', () => {
	it('owns document services and has symmetric lifecycle methods', () => {
		const runtime = readFileSync('src/runtime/DockletWordViewerRuntime.ts', 'utf8');
		const entry = readFileSync('src/main.ts', 'utf8');
		expect(runtime).toContain('export class DockletWordViewerRuntime');
		expect(runtime).toContain('readonly repository');
		expect(runtime).toContain('readonly loader');
		expect(runtime).toContain('load(): void');
		expect(runtime).toContain('unload(): void');
		expect(entry).toContain('this.runtime?.unload()');
	});
});
