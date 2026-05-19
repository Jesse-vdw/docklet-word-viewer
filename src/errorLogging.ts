export function getErrorMessage(error: unknown): string {
	if (error instanceof Error) { return error.message; }
	if (typeof error === 'string') { return error; }
	try {
		return JSON.stringify(error);
	} catch {
		return String(error);
	}
}

export function logError(context: string, error: unknown): void {
	console.error(`[docklet-word-viewer] ${context}: ${getErrorMessage(error)}`, error);
}

export function logWarning(context: string, message: string, details?: unknown): void {
	if (details === undefined) {
		console.warn(`[docklet-word-viewer] ${context}: ${message}`);
		return;
	}
	console.warn(`[docklet-word-viewer] ${context}: ${message}`, details);
}
