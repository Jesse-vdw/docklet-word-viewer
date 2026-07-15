import { createPrefixedLogger } from './shared/logger.ts';

const { logError, logWarning, getErrorMessage } = createPrefixedLogger('[docklet-word-viewer]');

export { getErrorMessage, logError, logWarning };
