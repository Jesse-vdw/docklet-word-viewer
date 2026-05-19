export const PLUGIN_ID = 'docklet-word-viewer';
export const PLUGIN_NAME = 'Docklet Word Viewer';
export const WORD_VIEW_TYPE = 'docklet-word-viewer-view';
export const CSS_PREFIX = 'dck-word';

export const EXT_DOCX = 'docx';
export const SUPPORTED_WORD_EXTENSIONS = [EXT_DOCX] as const;
export type SupportedWordExtension = typeof SUPPORTED_WORD_EXTENSIONS[number];

export function isSupportedWordExtension(extension: string): extension is SupportedWordExtension {
	return SUPPORTED_WORD_EXTENSIONS.includes(extension.toLowerCase() as SupportedWordExtension);
}

export const ICON_WORD_VIEWER = 'file-text';
export const BRIDGE_CHANNEL = 'docklet-word-viewer-bridge';
export const BRIDGE_READY_TIMEOUT_MS = 5000;
export const DEFAULT_MAX_FILE_SIZE_MB = 25;
export const DEFAULT_ZOOM = 1;
export const MIN_ZOOM = 0.5;
export const MAX_ZOOM = 2;
export const ZOOM_STEP = 0.1;

export const CMD_OPEN_ACTIVE = 'docklet-word-viewer-open-active-word-file';
export const CMD_RELOAD_ACTIVE = 'docklet-word-viewer-reload-active-word-file';

export const NOTICE_OPEN_FAILED = `${PLUGIN_NAME}: could not open Word document`;
export const NOTICE_UNSUPPORTED_FORMAT = `${PLUGIN_NAME}: only .docx documents are supported in the local viewer.`;
export const NOTICE_REMOTE_CONVERSION_DISABLED = `${PLUGIN_NAME}: remote conversion is disabled.`;

export const CSS_ROOT = `${CSS_PREFIX}-root`;
export const CSS_BODY = `${CSS_PREFIX}-body`;
export const CSS_IFRAME = `${CSS_PREFIX}-iframe`;
export const CSS_OUTLINE = `${CSS_PREFIX}-outline`;
export const CSS_OUTLINE_HEADER = `${CSS_PREFIX}-outline-header`;
export const CSS_OUTLINE_LIST = `${CSS_PREFIX}-outline-list`;
export const CSS_OUTLINE_BUTTON = `${CSS_PREFIX}-outline-button`;
export const CSS_OUTLINE_EMPTY = `${CSS_PREFIX}-outline-empty`;
export const CSS_SEARCH = `${CSS_PREFIX}-search`;
export const CSS_SEARCH_INPUT = `${CSS_PREFIX}-search-input`;
export const CSS_SEARCH_STATUS = `${CSS_PREFIX}-search-status`;
export const CSS_STATE = `${CSS_PREFIX}-state`;
export const CSS_STATE_TITLE = `${CSS_PREFIX}-state-title`;
export const CSS_STATE_MSG = `${CSS_PREFIX}-state-msg`;
export const CSS_STATE_BUTTON = `${CSS_PREFIX}-state-button`;
export const CSS_STATUS = `${CSS_PREFIX}-status`;
export const CSS_TOOLBAR = `${CSS_PREFIX}-toolbar`;
export const CSS_TOOLBAR_BUTTON = `${CSS_PREFIX}-toolbar-button`;
export const CSS_VIEWPORT = `${CSS_PREFIX}-viewport`;
export const CSS_WARNING = `${CSS_PREFIX}-warning`;
