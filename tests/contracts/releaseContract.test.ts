import { readFileSync, readdirSync } from 'node:fs';

describe('release contract', () => {
	it('keeps the API header and release metadata on one version', () => {
		const packageJson = JSON.parse(readFileSync('package.json', 'utf8')) as { version: string };
		const manifest = JSON.parse(readFileSync('manifest.json', 'utf8')) as {
			version: string;
			minAppVersion: string;
		};
		const versions = JSON.parse(readFileSync('versions.json', 'utf8')) as Record<string, string>;
		const source = readFileSync('src/plugin/DockletWordViewerPlugin.ts', 'utf8');

		expect(manifest.version).toBe(packageJson.version);
		expect(versions[packageJson.version]).toBe(manifest.minAppVersion);
		expect(source).toMatch(/pluginVersion:\s*this\.manifest\.version/);
	});

	it('keeps GitHub automation release-only', () => {
		expect(readdirSync('.github/workflows').sort()).toEqual(['release.yml']);
		const workflow = readFileSync('.github/workflows/release.yml', 'utf8');
		expect(workflow).toContain("- 'v*.*.*'");
		expect(workflow).not.toMatch(/pull_request:|branches:/);
	});

	it('packages, verifies, and transactionally installs the exact artifact set', () => {
		const release = readFileSync('scripts/release.mjs', 'utf8');
		expect(release).toContain("['manifest.json', 'main.js', 'styles.css', 'versions.json']");
		expect(release).toContain('Release ZIP is not deterministic.');
		expect(release).toContain('ZIP path traversal or nested entries are forbidden.');
		expect(release).toContain('moved.reverse()');
		expect(release).toContain("join(root, 'data.json')");
		expect(release).toContain('Downloaded artifact checksum mismatch');
	});
});
