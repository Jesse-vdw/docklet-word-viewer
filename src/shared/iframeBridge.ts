const SANDBOX_TOKENS = new Set([
	'allow-downloads',
	'allow-forms',
	'allow-modals',
	'allow-popups',
	'allow-popups-to-escape-sandbox',
	'allow-presentation',
	'allow-same-origin',
	'allow-scripts',
]);

export interface BridgeChannelEnvelope<C extends string, T extends string> {
	channel: C;
	bridgeId: string;
	type: T;
}

export function createBridgeId(prefix: string): string {
	const suffix = globalThis.crypto?.randomUUID?.() ?? `${Date.now()}-${Math.random().toString(36).slice(2)}`;
	return `${prefix}-${suffix}`;
}

export function formatSandbox(tokens: readonly string[]): string {
	const normalized = [...new Set(tokens.map((token) => token.trim()).filter(Boolean))];
	for (const token of normalized) {
		if (!SANDBOX_TOKENS.has(token)) throw new Error(`Unsupported iframe sandbox token: ${token}`);
	}
	return normalized.sort().join(' ');
}

export function isBridgeChannelEnvelope<C extends string>(
	value: unknown,
	channel: C,
): value is BridgeChannelEnvelope<C, string> {
	if (typeof value !== 'object' || value === null) return false;
	const record = value as Record<string, unknown>;
	return (
		record['channel'] === channel &&
		typeof record['bridgeId'] === 'string' &&
		record['bridgeId'].length > 0 &&
		typeof record['type'] === 'string'
	);
}
