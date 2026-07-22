export interface LatestValueWriterOptions {
	delayMs?: number;
	onError?: (error: unknown) => void;
}

/** Debounces snapshots and serializes writes so an older save can never win. */
export class LatestValueWriter<T> {
	private readonly delayMs: number;
	private readonly onError: (error: unknown) => void;
	private timer: ReturnType<typeof setTimeout> | null = null;
	private pending: T | null = null;
	private hasPending = false;
	private tail: Promise<void> = Promise.resolve();
	private disposed = false;

	constructor(
		private readonly write: (value: T) => Promise<void>,
		options: LatestValueWriterOptions = {},
	) {
		this.delayMs = options.delayMs ?? 150;
		this.onError = options.onError ?? (() => undefined);
	}

	schedule(value: T): void {
		if (this.disposed) return;
		this.pending = value;
		this.hasPending = true;
		if (this.timer) clearTimeout(this.timer);
		this.timer = setTimeout(() => {
			this.timer = null;
			void this.flush();
		}, this.delayMs);
	}

	flush(): Promise<void> {
		if (this.timer) clearTimeout(this.timer);
		this.timer = null;
		if (!this.hasPending) return this.tail;
		const value = this.pending as T;
		this.pending = null;
		this.hasPending = false;
		const operation = this.tail.then(() => this.write(value));
		this.tail = operation.catch((error: unknown) => this.onError(error));
		return this.tail;
	}

	dispose(): Promise<void> {
		this.disposed = true;
		return this.flush();
	}
}
