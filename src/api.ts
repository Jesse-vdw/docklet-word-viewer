export interface DockletWordViewerApi {
	readonly schemaVersion: 1;
	readonly pluginId: 'docklet-word-viewer';
	openDocument(path: string): Promise<void>;
}

export function isDockletWordViewerApi(value: unknown): value is DockletWordViewerApi {
	const api = value as Partial<DockletWordViewerApi> | null;
	return api?.schemaVersion === 1 && api.pluginId === 'docklet-word-viewer' && typeof api.openDocument === 'function';
}
