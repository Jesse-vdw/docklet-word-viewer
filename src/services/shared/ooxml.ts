export interface PackageSafetyLimits {
	maxEntries: number;
	maxExpandedBytes: number;
	maxEntryBytes: number;
}

export interface PackageSafetyState {
	entries: number;
	expandedBytes: number;
}

export type PackageEntrySafety = 'ok' | 'too-many-entries' | 'too-many-expanded-bytes' | 'entry-too-large';

export function getOfficeExtension(path: string): 'docx' | null {
	const normalized = path.trim().toLowerCase();
	return normalized.endsWith('.docx') ? 'docx' : null;
}

export function createPackageSafetyState(): PackageSafetyState {
	return { entries: 0, expandedBytes: 0 };
}

export function recordPackageEntry(
	state: PackageSafetyState,
	originalSize: number,
	limits: PackageSafetyLimits,
): PackageEntrySafety {
	const size = Number.isFinite(originalSize) && originalSize > 0 ? originalSize : 0;
	state.entries += 1;
	state.expandedBytes += size;
	if (state.entries > limits.maxEntries) return 'too-many-entries';
	if (state.expandedBytes > limits.maxExpandedBytes) return 'too-many-expanded-bytes';
	if (size > limits.maxEntryBytes) return 'entry-too-large';
	return 'ok';
}

export function normalizePackagePath(path: string): string | null {
	const normalized = path.replace(/\\/gu, '/').replace(/^\.\//u, '');
	if (!normalized || normalized.startsWith('/') || normalized.includes('\0')) return null;
	const segments = normalized.split('/');
	if (segments.some((segment) => segment === '..' || segment === '')) return null;
	return segments.filter((segment) => segment !== '.').join('/');
}
