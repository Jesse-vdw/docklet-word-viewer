import { WordViewerDomainError } from '../../domain/WordViewerDomainError.ts';
import type { WordReadResult } from '../io/WordFileRepository.ts';
import type { WordViewerSettings } from '../../settings/settings.ts';

const BLOCKED_PUBLIC_HOSTS = new Set(['services.syncfusion.com', 'ej2.syncfusion.com', 'document.syncfusion.com']);

export class SyncfusionConversionClient {
	async convertToSfdt(read: WordReadResult, settings: WordViewerSettings): Promise<string> {
		const endpoint = resolveImportEndpoint(settings.syncfusionServiceUrl);
		if (!settings.allowRemoteConversion || !endpoint) {
			throw new WordViewerDomainError(
				'REMOTE_CONVERSION_DISABLED',
				getImportEndpointValidationMessage(settings.syncfusionServiceUrl) ?? 'Remote conversion is disabled.',
			);
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
	return validateImportEndpoint(serviceUrl).endpoint;
}

export function getImportEndpointValidationMessage(serviceUrl: string): string | null {
	return validateImportEndpoint(serviceUrl).error;
}

function validateImportEndpoint(serviceUrl: string): { endpoint: string | null; error: string | null } {
	const trimmed = serviceUrl.trim();
	if (!trimmed) {
		return { endpoint: null, error: 'A conversion service URL is required.' };
	}
	let parsed: URL;
	try {
		parsed = new URL(trimmed);
	} catch {
		return { endpoint: null, error: 'Enter a valid HTTP or HTTPS conversion URL.' };
	}
	if (parsed.protocol !== 'http:' && parsed.protocol !== 'https:') {
		return {
			endpoint: null,
			error: 'Conversion URLs must use HTTPS, or HTTP only for a loopback development service.',
		};
	}
	if (parsed.username || parsed.password) {
		return { endpoint: null, error: 'Conversion URLs must not contain embedded credentials.' };
	}
	if (BLOCKED_PUBLIC_HOSTS.has(parsed.hostname.toLowerCase())) {
		return { endpoint: null, error: 'Known public Syncfusion service hosts are not permitted.' };
	}
	if (parsed.protocol === 'http:' && !isLoopbackHost(parsed.hostname)) {
		return { endpoint: null, error: 'HTTPS is required unless the conversion service is running on localhost.' };
	}
	const pathSegments = parsed.pathname.split('/').filter(Boolean);
	if (pathSegments.at(-1)?.toLowerCase() === 'import') {
		parsed.search = '';
		parsed.hash = '';
		return { endpoint: parsed.toString(), error: null };
	}
	if (!parsed.pathname.endsWith('/')) {
		parsed.pathname = `${parsed.pathname}/`;
	}
	return { endpoint: new URL('Import', parsed).toString(), error: null };
}

function isLoopbackHost(hostname: string): boolean {
	const normalized = hostname.toLowerCase().replace(/^\[|\]$/g, '');
	return normalized === 'localhost' || normalized === '::1' || /^127(?:\.\d{1,3}){3}$/u.test(normalized);
}
