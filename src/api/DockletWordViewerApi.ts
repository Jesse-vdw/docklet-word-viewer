import type { DockletApiHeader } from './DockletApiHeader.ts';

export type DockletWordViewerCapability =
	| 'docx-viewing'
	| 'docx-parsing'
	| 'sandboxed-word-runtime'
	| 'optional-document-conversion';

export interface DockletWordViewerApi extends DockletApiHeader<'docklet-word-viewer', DockletWordViewerCapability> {
	openDocument(path: string): Promise<void>;
}

export function isDockletWordViewerApi(value: unknown): value is DockletWordViewerApi {
	const api = value as Partial<DockletWordViewerApi> | null;
	return (
		api?.schemaVersion === 2 &&
		api.pluginId === 'docklet-word-viewer' &&
		typeof api.pluginName === 'string' &&
		typeof api.pluginVersion === 'string' &&
		Array.isArray(api.capabilities) &&
		typeof api.openDocument === 'function'
	);
}
