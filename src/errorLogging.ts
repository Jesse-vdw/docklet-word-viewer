import { createPrefixedLogger } from '@docklet/obsidian-kit';

const { logError, logWarning, getErrorMessage } = createPrefixedLogger('[docklet-word-viewer]');

export { getErrorMessage, logError, logWarning };
