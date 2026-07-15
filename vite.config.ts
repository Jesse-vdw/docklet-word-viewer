import { builtinModules } from 'node:module';
import { defineConfig } from 'vite';

const external = [
	'obsidian',
	'electron',
	...builtinModules,
	...builtinModules.map((name) => `node:${name}`),
	/^@codemirror\//,
	/^@lezer\//,
];

export default defineConfig(({ mode }) => ({
	build: {
		lib: {
			entry: 'src/main.ts',
			formats: ['cjs'],
			fileName: () => 'main.js',
			cssFileName: 'styles',
		},
		outDir: '.',
		emptyOutDir: false,
		minify: mode === 'production',
		sourcemap: mode !== 'production' ? 'inline' : false,
		target: 'es2022',
		rollupOptions: {
			external,
			output: {
				exports: 'auto',
				inlineDynamicImports: true,
				entryFileNames: 'main.js',
				assetFileNames: (asset) => (asset.name === 'style.css' ? 'styles.css' : '[name][extname]'),
			},
		},
	},
}));
