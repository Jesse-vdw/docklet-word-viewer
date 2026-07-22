import { existsSync } from 'node:fs';
import { resolve } from 'node:path';
import { defineConfig } from 'vitest/config';

const obsidianMock = resolve(import.meta.dirname, 'tests/mocks/obsidian.ts');
const setup = resolve(import.meta.dirname, 'tests/setup.ts');

export default defineConfig({
	resolve: { alias: existsSync(obsidianMock) ? { obsidian: obsidianMock } : {} },
	test: {
		globals: true,
		environment: 'jsdom',
		setupFiles: existsSync(setup) ? [setup] : [],
		clearMocks: true,
		restoreMocks: true,
	},
});
