import { createHash } from 'node:crypto';
import { mkdir, mkdtemp, readFile, rename, rm, stat, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { basename, join } from 'node:path';
import { spawnSync } from 'node:child_process';
import process from 'node:process';
import { unzipSync, zipSync } from 'fflate';

const RELEASE_FILES = ['manifest.json', 'main.js', 'styles.css', 'versions.json'];
const command = process.argv[2];
const root = process.cwd();
const packagePath = join(root, 'package.json');
const manifestPath = join(root, 'manifest.json');
const versionsPath = join(root, 'versions.json');

if (command === 'version') await setVersion(process.argv[3]);
else if (command === 'tag-check') await checkTag();
else if (command === 'check') await checkArtifacts();
else if (command === 'package') await packageRelease();
else if (command === 'publish') await publishRelease();
else throw new Error(`Unknown release command: ${command}`);

async function metadata() {
	const pkg = JSON.parse(await readFile(packagePath, 'utf8'));
	const manifest = JSON.parse(await readFile(manifestPath, 'utf8'));
	const versions = JSON.parse(await readFile(versionsPath, 'utf8'));
	if (pkg.name !== manifest.id) throw new Error('Package name and manifest id differ.');
	if (pkg.version !== manifest.version) throw new Error('Package and manifest versions differ.');
	if (versions[pkg.version] !== manifest.minAppVersion)
		throw new Error('versions.json does not map the release version to minAppVersion.');
	await verifyApiVersionSource();
	return { pkg, manifest, versions, tag: `v${pkg.version}` };
}

async function verifyApiVersionSource() {
	const candidates = ['src/plugin/DockletWordViewerPlugin.ts'];
	let found = false;
	for (const candidate of candidates) {
		let source;
		try {
			source = await readFile(join(root, candidate), 'utf8');
		} catch (error) {
			if (error?.code === 'ENOENT') continue;
			throw error;
		}
		if (!/\bpluginVersion:\s*this\.manifest\.version\b/.test(source)) continue;
		found = true;
	}
	if (!found) throw new Error('No schema-v2 API pluginVersion contract found in the plugin entry source.');
}

async function setVersion(version) {
	if (!/^\d+\.\d+\.\d+$/.test(version ?? '')) throw new Error('Usage: pnpm version:set -- X.Y.Z');
	const { pkg, manifest, versions } = await metadata().catch(async () => ({
		pkg: JSON.parse(await readFile(packagePath, 'utf8')),
		manifest: JSON.parse(await readFile(manifestPath, 'utf8')),
		versions: JSON.parse(await readFile(versionsPath, 'utf8')),
	}));
	pkg.version = version;
	manifest.version = version;
	versions[version] = manifest.minAppVersion;
	await writeJson(packagePath, pkg);
	await writeJson(manifestPath, manifest);
	await writeJson(versionsPath, versions);
}

async function checkTag() {
	const { tag } = await metadata();
	const actual = process.env.GITHUB_REF_NAME || run('git', ['describe', '--tags', '--exact-match']).trim();
	if (actual !== tag) throw new Error(`Expected tag ${tag}, received ${actual || '(none)'}.`);
}

async function checkArtifacts() {
	await metadata();
	for (const file of RELEASE_FILES) {
		const info = await stat(join(root, file));
		if (!info.isFile() || info.size === 0) throw new Error(`Missing release artifact: ${file}`);
	}
}

async function packageRelease() {
	const { pkg } = await metadata();
	await checkArtifacts();
	const entries = {};
	for (const file of RELEASE_FILES)
		entries[file] = [new Uint8Array(await readFile(join(root, file))), { mtime: new Date('2020-01-01T00:00:00Z') }];
	const archive = zipSync(entries, { level: 9 });
	const repeatedArchive = zipSync(entries, { level: 9 });
	if (!Buffer.from(archive).equals(Buffer.from(repeatedArchive))) throw new Error('Release ZIP is not deterministic.');
	const dist = join(root, 'dist');
	await mkdir(dist, { recursive: true });
	const zipPath = join(dist, `${pkg.name}-${pkg.version}.zip`);
	await writeFile(zipPath, archive);
	const unpacked = unzipSync(archive);
	if (JSON.stringify(Object.keys(unpacked).sort()) !== JSON.stringify([...RELEASE_FILES].sort()))
		throw new Error('ZIP file set mismatch.');
	for (const file of RELEASE_FILES) {
		const disk = new Uint8Array(await readFile(join(root, file)));
		if (!Buffer.from(disk).equals(Buffer.from(unpacked[file]))) throw new Error(`ZIP byte mismatch: ${file}`);
	}
	const checksumTargets = [zipPath, ...RELEASE_FILES.map((file) => join(root, file))];
	const sums = [];
	for (const file of checksumTargets) sums.push(`${sha256(await readFile(file))}  ${basename(file)}`);
	await writeFile(join(dist, 'SHA256SUMS.txt'), `${sums.join('\n')}\n`);
}

async function publishRelease() {
	const { pkg, tag } = await metadata();
	if (run('git', ['status', '--porcelain']).trim()) throw new Error('Release requires a clean worktree.');
	run('pnpm', ['check']);
	if (run('git', ['status', '--porcelain']).trim())
		throw new Error('The production gate changed tracked files; commit the deterministic artifacts before publishing.');
	if (runOptional('git', ['rev-parse', '-q', '--verify', `refs/tags/${tag}`]).status === 0)
		throw new Error(`Tag already exists: ${tag}`);
	run('git', ['push', 'origin', 'HEAD:main']);
	run('git', ['tag', '-a', tag, '-m', `${pkg.name} ${pkg.version}`]);
	run('git', ['push', 'origin', tag]);
	for (let attempt = 0; attempt < 90; attempt++) {
		const view = runOptional('gh', ['release', 'view', tag, '--json', 'isDraft']);
		if (view.status === 0 && JSON.parse(view.stdout).isDraft === false) break;
		await new Promise((resolve) => setTimeout(resolve, 5000));
		if (attempt === 89) throw new Error(`Timed out waiting for GitHub Release ${tag}.`);
	}
	const temporary = await mkdtemp(join(tmpdir(), `${pkg.name}-release-`));
	const dataPath = join(root, 'data.json');
	const dataBefore = await optionalSha256(dataPath);
	try {
		run('gh', [
			'release',
			'download',
			tag,
			'--pattern',
			`${pkg.name}-${pkg.version}.zip`,
			'--pattern',
			'SHA256SUMS.txt',
			'--dir',
			temporary,
		]);
		const zipPath = join(temporary, `${pkg.name}-${pkg.version}.zip`);
		const sums = await readFile(join(temporary, 'SHA256SUMS.txt'), 'utf8');
		const checksumMap = new Map(
			sums
				.split('\n')
				.map((line) => line.match(/^([a-f0-9]{64})[ ]{2}(.+)$/i))
				.filter(Boolean)
				.map((match) => [match[2], match[1].toLowerCase()]),
		);
		const expected = checksumMap.get(basename(zipPath));
		if (!expected || expected !== sha256(await readFile(zipPath))) throw new Error('Downloaded ZIP checksum mismatch.');
		const files = unzipSync(new Uint8Array(await readFile(zipPath)));
		const names = Object.keys(files);
		if (names.some((name) => name !== basename(name) || name.includes('..') || /[\\/\0]/.test(name)))
			throw new Error('ZIP path traversal or nested entries are forbidden.');
		if (JSON.stringify(names.sort()) !== JSON.stringify([...RELEASE_FILES].sort()))
			throw new Error('Unsafe or unexpected ZIP file set.');
		const manifest = JSON.parse(Buffer.from(files['manifest.json']).toString('utf8'));
		if (manifest.id !== pkg.name || manifest.version !== pkg.version)
			throw new Error('Downloaded manifest identity/version mismatch.');
		for (const file of RELEASE_FILES) {
			const expectedFileHash = checksumMap.get(file);
			if (!expectedFileHash || expectedFileHash !== sha256(files[file]))
				throw new Error(`Downloaded artifact checksum mismatch: ${file}`);
		}

		const transaction = await mkdtemp(join(root, '.release-sync-'));
		const moved = [];
		try {
			for (const file of RELEASE_FILES) await writeFile(join(transaction, `${file}.staged`), files[file]);
			for (const file of RELEASE_FILES) {
				const destination = join(root, file);
				const backup = join(transaction, `${file}.backup`);
				await rename(destination, backup);
				const record = { destination, backup, installed: false };
				moved.push(record);
				await rename(join(transaction, `${file}.staged`), destination);
				record.installed = true;
			}
			if ((await optionalSha256(dataPath)) !== dataBefore) throw new Error('data.json changed during release sync.');
		} catch (error) {
			const rollbackErrors = [];
			for (const record of moved.reverse()) {
				try {
					if (record.installed) await rm(record.destination, { force: true });
					await rename(record.backup, record.destination);
				} catch (rollbackError) {
					rollbackErrors.push(rollbackError);
				}
			}
			if (rollbackErrors.length) throw new AggregateError([error, ...rollbackErrors], 'Release sync rollback failed.');
			throw error;
		} finally {
			await rm(transaction, { recursive: true, force: true });
		}
	} finally {
		await rm(temporary, { recursive: true, force: true });
	}
}

function sha256(value) {
	return createHash('sha256').update(value).digest('hex');
}
async function optionalSha256(path) {
	try {
		return sha256(await readFile(path));
	} catch (error) {
		if (error?.code === 'ENOENT') return null;
		throw error;
	}
}
function run(file, args) {
	const result = runOptional(file, args);
	if (result.status !== 0) throw new Error(`${file} ${args.join(' ')} failed:\n${result.stderr || result.stdout}`);
	return result.stdout;
}
function runOptional(file, args) {
	const result = spawnSync(file, args, { cwd: root, encoding: 'utf8', env: process.env });
	return { status: result.status ?? 1, stdout: result.stdout ?? '', stderr: result.stderr ?? '' };
}
async function writeJson(path, value) {
	await writeFile(path, `${JSON.stringify(value, null, '\t')}\n`);
}
