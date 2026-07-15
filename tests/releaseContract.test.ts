import { readFileSync, readdirSync } from 'node:fs';

describe('release contract', () => {
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
