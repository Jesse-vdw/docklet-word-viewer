import type { DocxParser } from '../docx/DocxParser.ts';
import type { SfdtParser } from '../docx/SfdtParser.ts';
import type { WordDocumentModel } from '../docx/wordModel.ts';
import { logError } from '../errorLogging.ts';
import type { WordViewerSettings } from '../settings/settings.ts';
import { canUseRemoteConversion, SyncfusionConversionClient } from '../conversion/SyncfusionConversionClient.ts';
import type { WordReadResult } from './WordRepositoryService.ts';

export class WordDocumentLoadService {
	constructor(
		private readonly parser: DocxParser,
		private readonly sfdtParser: SfdtParser,
		private readonly conversionClient: SyncfusionConversionClient,
		private readonly logger: (context: string, error: unknown) => void = logError,
	) {}

	async load(read: WordReadResult, settings: WordViewerSettings): Promise<WordDocumentModel> {
		if (settings.preferRemoteConversion && canUseRemoteConversion(settings)) {
			try {
				return this.sfdtParser.parse(await this.conversionClient.convertToSfdt(read, settings));
			} catch (error) {
				this.logger('WordDocumentLoadService.remotePreferredConversion', error);
			}
		}
		try {
			return this.parser.parse(read.data);
		} catch (localError) {
			if (!canUseRemoteConversion(settings)) { throw localError; }
			try {
				return this.sfdtParser.parse(await this.conversionClient.convertToSfdt(read, settings));
			} catch (remoteError) {
				this.logger('WordDocumentLoadService.remoteFallbackConversion', remoteError);
				throw localError;
			}
		}
	}
}
