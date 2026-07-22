export type WordViewerDomainErrorCode =
	| 'INVALID_FORMAT'
	| 'INVALID_PACKAGE'
	| 'FILE_TOO_LARGE'
	| 'BRIDGE_TIMEOUT'
	| 'BRIDGE_DESTROYED'
	| 'REMOTE_CONVERSION_DISABLED'
	| 'REMOTE_CONVERSION_FAILED';

export class WordViewerDomainError extends Error {
	constructor(
		readonly code: WordViewerDomainErrorCode,
		message: string,
	) {
		super(message);
		this.name = 'WordViewerDomainError';
	}
}

export function isWordViewerDomainError(error: unknown): error is WordViewerDomainError {
	return error instanceof WordViewerDomainError;
}
