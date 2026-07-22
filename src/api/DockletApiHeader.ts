/** Generated from the Docklet Suite canonical contract. Do not edit package-local copies. */
export interface DockletApiHeader<
	PluginId extends `docklet-${string}` = `docklet-${string}`,
	Capability extends string = string,
> {
	readonly schemaVersion: 2;
	readonly pluginId: PluginId;
	readonly pluginName: string;
	readonly pluginVersion: string;
	readonly capabilities: readonly Capability[];
}

export function hasDockletApiHeader(value: unknown): value is DockletApiHeader {
	if (typeof value !== 'object' || value === null) return false;
	const header = value as Partial<DockletApiHeader>;
	return (
		header.schemaVersion === 2 &&
		typeof header.pluginId === 'string' &&
		header.pluginId.startsWith('docklet-') &&
		typeof header.pluginName === 'string' &&
		typeof header.pluginVersion === 'string' &&
		Array.isArray(header.capabilities) &&
		header.capabilities.every((capability) => typeof capability === 'string')
	);
}
