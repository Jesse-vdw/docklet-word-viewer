import { readFile, readdir } from 'node:fs/promises';
import { extname, join, relative } from 'node:path';
import process from 'node:process';

const command = process.argv[2];
const root = process.cwd();
const packageJson = JSON.parse(await readFile(join(root, 'package.json'), 'utf8'));
const prefixById = {
	'docklet-businessplan-tracker': 'dck-bpt',
	'docklet-calendar': 'dck-cal',
	'docklet-core': 'dck-core',
	'docklet-excalidraw': 'dck-exc',
	'docklet-slides': 'dck-sld',
	'docklet-tools': 'dck-tls',
	'docklet-word-viewer': 'dck-word',
};

if (command === 'docs') await checkDocs();
else if (command === 'css') await checkCss();
else if (command === 'security') await checkSecurity();
else throw new Error(`Unknown quality command: ${command}`);

async function checkDocs() {
	const files = await walk(root, new Set(['.git', 'node_modules', 'dist', 'coverage']));
	const markdown = files
		.filter((file) => extname(file).toLowerCase() === '.md')
		.map((file) => relative(root, file))
		.sort();
	const expected = ['AGENTS.md', 'ARCHITECTURE.md', 'README.md'];
	if (JSON.stringify(markdown) !== JSON.stringify(expected))
		throw new Error(`Documentation contract failed. Found: ${markdown.join(', ')}`);
}

async function checkCss() {
	const prefix = prefixById[packageJson.name];
	if (!prefix) throw new Error(`No CSS prefix registered for ${packageJson.name}`);
	const cssFiles = (await walk(join(root, 'src'), new Set())).filter((file) => extname(file).toLowerCase() === '.css');
	if (!cssFiles.length) throw new Error('No source CSS files found.');
	const css = (await Promise.all(cssFiles.map((file) => readFile(file, 'utf8')))).join('\n');
	const cleanCss = css.replace(/\/\*[\s\S]*?\*\//g, '').replace(/@import[^;]+;/g, '');
	if (/#[0-9a-f]{3,8}\b/i.test(css))
		throw new Error('Hardcoded hexadecimal colors are forbidden; use Obsidian semantic variables.');
	if (/#[-_a-z][\w-]*/i.test(cleanCss)) throw new Error('ID selectors are forbidden.');
	if (!/var\(--(?:background|text|interactive|color|dck|radius|shadow|font|size)/.test(cleanCss))
		throw new Error('CSS must use Obsidian semantic variables or plugin token fallbacks.');

	const classes = [...cleanCss.matchAll(/\.([a-z_][\w-]*)/gi)].map((match) => match[1]);
	const commonAllowed =
		/^(?:is-|has-|mod-|theme-|clickable-icon$|setting-item|callout$|button-|align-|docklet-layout$|dck-ui-)/;
	const hostClasses = {
		'docklet-calendar': new Set(['workspace', 'app-container']),
		'docklet-core': new Set([
			'dck-error-boundary',
			'dck-error-icon',
			'dck-error-title',
			'dck-error-message',
			'dck-error-btn',
			'dck-error-btn--primary',
		]),
		'docklet-tools': new Set([
			'tag-pane-tag',
			'docklet-setting-desc-small',
			'tree-item-flair-outer',
			'modal-content',
			'workspace-leaf-content',
			'view-content',
			'pdf-toolbar',
			'pdf-controls',
			'pdfViewer',
			'page',
			'pdf-viewer',
			'markdown-preview-view',
			'internal-embed',
			'pdf',
		]),
	};
	const packageAllowed = hostClasses[packageJson.name] ?? new Set();
	const invalid = [
		...new Set(
			classes.filter((name) => !name.startsWith(prefix) && !commonAllowed.test(name) && !packageAllowed.has(name)),
		),
	];
	if (invalid.length) throw new Error(`Unscoped CSS classes: ${invalid.join(', ')}`);

	const sourceFiles = (await walk(join(root, 'src'), new Set())).filter((file) => /\.[cm]?[jt]sx?$/.test(file));
	const source = (await Promise.all(sourceFiles.map((file) => readFile(file, 'utf8')))).join('\n');
	for (const layer of ['o', 'c', 'u']) {
		const layerClasses = [...new Set(classes.filter((name) => name.startsWith(`${prefix}-${layer}-`)))];
		if (!layerClasses.length) throw new Error(`Missing ${layer.toUpperCase()} OOCSS layer for ${prefix}.`);
		if (!layerClasses.some((name) => source.includes(name) || source.includes(name.slice(prefix.length + 1))))
			throw new Error(`No source reference found for ${prefix}-${layer}-* classes.`);
	}

	const objectPattern = new RegExp(`\\.${escapeRegExp(prefix)}-o-[\\w-]+[^{}]*\\{([^{}]*)\\}`, 'g');
	const visualProperties = /^(?:background|border|box-shadow|color|fill|filter|font|opacity|outline|stroke|text-)/;
	for (const match of cleanCss.matchAll(objectPattern)) {
		const properties = [...match[1].matchAll(/(?:^|;)\s*([\w-]+)\s*:/g)].map((item) => item[1]);
		const invalidProperties = properties.filter((property) => visualProperties.test(property));
		if (invalidProperties.length)
			throw new Error(`OOCSS object contains visual properties: ${invalidProperties.join(', ')}`);
	}

	for (const match of cleanCss.matchAll(/([^{}]+)\{/g)) {
		for (const selector of match[1].split(',')) {
			const specificity = (selector.match(/\.[\w-]+|\[[^\]]+\]|:(?!:)[\w-]+/g) ?? []).length;
			if (specificity > 8) throw new Error(`Selector specificity exceeds the contract: ${selector.trim()}`);
		}
	}
}

function escapeRegExp(value) {
	return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

async function checkSecurity() {
	const manifest = JSON.parse(await readFile(join(root, 'manifest.json'), 'utf8'));
	if (manifest.id !== packageJson.name) throw new Error('manifest.id and package name differ.');
	const ignored = await readFile(join(root, '.gitignore'), 'utf8');
	if (!/(^|\n)data\.json(\n|$)/.test(ignored)) throw new Error('data.json must be ignored.');
	if ((packageJson.files ?? []).includes('data.json')) throw new Error('data.json must not be released.');
	const workflows = (await readdir(join(root, '.github', 'workflows'))).sort();
	if (JSON.stringify(workflows) !== JSON.stringify(['release.yml']))
		throw new Error(`GitHub automation must be release-only. Found: ${workflows.join(', ')}`);
}

async function walk(directory, excluded) {
	const output = [];
	for (const entry of await readdir(directory, { withFileTypes: true })) {
		if (excluded.has(entry.name)) continue;
		const path = join(directory, entry.name);
		if (entry.isDirectory()) output.push(...(await walk(path, excluded)));
		else output.push(path);
	}
	return output;
}
