import { WordViewerDomainError } from '../domainErrors.ts';
import type { WordReadResult } from '../io/WordFileRepository.ts';
import type { WordViewerSettings } from '../settings/settings.ts';

const BLOCKED_PUBLIC_HOSTS = new Set(['services.syncfusion.com', 'ej2.syncfusion.com', 'document.syncfusion.com']);

export class SyncfusionConversionClient {
	async convertToSfdt(read: WordReadResult, settings: WordViewerSettings): Promise<string> {
		const endpoint = resolveImportEndpoint(settings.syncfusionServiceUrl);
		if (!settings.allowRemoteConversion || !endpoint) {
			throw new WordViewerDomainError('REMOTE_CONVERSION_DISABLED', 'Remote conversion is disabled or not configured.');
		}
		const formData = new FormData();
		formData.append(
			'files',
			new Blob([read.data], { type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' }),
			read.file.name,
		);
		const controller = new AbortController();
		const timeout = window.setTimeout(() => controller.abort(), settings.remoteConversionTimeoutMs);
		try {
			const response = await fetch(endpoint, {
				method: 'POST',
				body: formData,
				signal: controller.signal,
			});
			if (!response.ok) {
				throw new WordViewerDomainError(
					'REMOTE_CONVERSION_FAILED',
					`Remote conversion failed with HTTP ${response.status}.`,
				);
			}
			const sfdt = await response.text();
			if (!sfdt.trim()) {
				throw new WordViewerDomainError(
					'REMOTE_CONVERSION_FAILED',
					'Remote conversion returned an empty SFDT document.',
				);
			}
			return sfdt;
		} catch (error) {
			if (error instanceof WordViewerDomainError) {
				throw error;
			}
			throw new WordViewerDomainError('REMOTE_CONVERSION_FAILED', `Remote conversion failed: ${String(error)}`);
		} finally {
			window.clearTimeout(timeout);
		}
	}
}

export function canUseRemoteConversion(settings: WordViewerSettings): boolean {
	return settings.allowRemoteConversion && resolveImportEndpoint(settings.syncfusionServiceUrl) !== null;
}

export function resolveImportEndpoint(serviceUrl: string): string | null {
	const trimmed = serviceUrl.trim();
	if (!trimmed) {
		return null;
	}
	let parsed: URL;
	try {
		parsed = new URL(trimmed);
	} catch {
		return null;
	}
	if (parsed.protocol !== 'http:' && parsed.protocol !== 'https:') {
		return null;
	}
	if (BLOCKED_PUBLIC_HOSTS.has(parsed.hostname.toLowerCase())) {
		return null;
	}
	const pathSegments = parsed.pathname.split('/').filter(Boolean);
	if (pathSegments.at(-1)?.toLowerCase() === 'import') {
		parsed.search = '';
		parsed.hash = '';
		return parsed.toString();
	}
	if (!parsed.pathname.endsWith('/')) {
		parsed.pathname = `${parsed.pathname}/`;
	}
	return new URL('Import', parsed).toString();
}
