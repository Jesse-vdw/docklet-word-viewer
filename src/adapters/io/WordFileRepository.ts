import { TFile, type App } from 'obsidian';
import { getOfficeExtension } from '../../services/shared/ooxml.ts';
import { NOTICE_UNSUPPORTED_FORMAT, isSupportedWordExtension } from '../../domain/constants.ts';
import { WordViewerDomainError } from '../../domain/WordViewerDomainError.ts';

export interface WordReadResult {
	file: TFile;
	data: ArrayBuffer;
	mtime: number;
	size: number;
}

export class WordFileRepository {
	constructor(private readonly app: App) {}

	resolveWordFile(path: string): TFile | null {
		const file = this.app.vault.getFileByPath(path);
		return file instanceof TFile ? file : null;
	}

	async readWordFile(file: TFile, maxFileSizeMb: number): Promise<WordReadResult> {
		this.assertWordFile(file);
		const maxBytes = maxFileSizeMb * 1024 * 1024;
		if (file.stat.size > maxBytes) {
			throw new WordViewerDomainError(
				'FILE_TOO_LARGE',
				`Document is ${formatBytes(file.stat.size)}; limit is ${maxFileSizeMb} MB.`,
			);
		}
		return {
			file,
			data: await this.app.vault.readBinary(file),
			mtime: file.stat.mtime,
			size: file.stat.size,
		};
	}

	assertWordFile(file: TFile): void {
		if (!isSupportedWordExtension(file.extension) || getOfficeExtension(file.path) !== 'docx') {
			throw new WordViewerDomainError('INVALID_FORMAT', NOTICE_UNSUPPORTED_FORMAT);
		}
	}
}

function formatBytes(bytes: number): string {
	if (bytes < 1024 * 1024) {
		return `${Math.max(1, Math.round(bytes / 1024))} KB`;
	}
	return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}
