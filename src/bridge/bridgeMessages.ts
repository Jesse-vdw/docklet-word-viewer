import { BRIDGE_CHANNEL } from '../constants.ts';
import type { WordDocumentModel, WordLayoutMode } from '../docx/wordModel.ts';

interface BridgeMessage<T extends string> { channel: typeof BRIDGE_CHANNEL; type: T; }
export interface LoadDocumentMessage extends BridgeMessage<'loadDocument'> { document: WordDocumentModel; isDark: boolean; layout: WordLayoutMode; }
export interface ThemeChangedMessage extends BridgeMessage<'themeChanged'> { isDark: boolean; }
export interface LayoutChangedMessage extends BridgeMessage<'layoutChanged'> { layout: WordLayoutMode; }
export interface ZoomChangedMessage extends BridgeMessage<'zoomChanged'> { zoom: number; }
export interface SearchChangedMessage extends BridgeMessage<'searchChanged'> { query: string; }
export interface SearchNavigateMessage extends BridgeMessage<'searchNavigate'> { direction: 'next' | 'previous'; }
export interface ScrollToBlockMessage extends BridgeMessage<'scrollToBlock'> { blockId: string; }
export type HostToWordMessage = LoadDocumentMessage | ThemeChangedMessage | LayoutChangedMessage | ZoomChangedMessage | SearchChangedMessage | SearchNavigateMessage | ScrollToBlockMessage;

export type ReadyMessage = BridgeMessage<'ready'>;
export interface RenderErrorMessage extends BridgeMessage<'renderError'> { message: string; }
export interface SearchResultMessage extends BridgeMessage<'searchResult'> { total: number; active: number; }
export type WordToHostMessage = ReadyMessage | RenderErrorMessage | SearchResultMessage;

export function isWordToHostMessage(value: unknown): value is WordToHostMessage {
	if (!isRecord(value) || value['channel'] !== BRIDGE_CHANNEL || typeof value['type'] !== 'string') { return false; }
	return value['type'] === 'ready'
		|| (value['type'] === 'renderError' && typeof value['message'] === 'string')
		|| (value['type'] === 'searchResult' && typeof value['total'] === 'number' && typeof value['active'] === 'number');
}

function isRecord(value: unknown): value is Record<string, unknown> {
	return typeof value === 'object' && value !== null;
}
