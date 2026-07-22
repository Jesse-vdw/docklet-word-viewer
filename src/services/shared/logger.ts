export function createPrefixedLogger(prefix: string): {
	getErrorMessage(error: unknown): string;
	logError(context: string, error: unknown): void;
	logWarning(context: string, message: string, details?: unknown): void;
} {
	const getErrorMessage = (error: unknown): string => {
		if (error instanceof Error) return error.message;
		if (typeof error === 'object' && error !== null) {
			try {
				return JSON.stringify(error);
			} catch {
				return String(error);
			}
		}
		return String(error);
	};
	return {
		getErrorMessage,
		logError: (context, error) => console.error(`${prefix} ${context}: ${getErrorMessage(error)}`, error),
		logWarning: (context, message, details) => {
			if (details === undefined) console.warn(`${prefix} ${context}: ${message}`);
			else console.warn(`${prefix} ${context}: ${message}`, details);
		},
	};
}
