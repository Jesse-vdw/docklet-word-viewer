import { LatestValueWriter } from '../src/shared/latestValueWriter.ts';

describe('LatestValueWriter', () => {
	beforeEach(() => vi.useFakeTimers());
	afterEach(() => vi.useRealTimers());

	it('persists only the latest snapshot in a burst', async () => {
		const write = vi.fn(async (_value: number) => undefined);
		const writer = new LatestValueWriter(write, { delayMs: 20 });
		writer.schedule(1);
		writer.schedule(2);
		await vi.advanceTimersByTimeAsync(20);
		expect(write).toHaveBeenCalledOnce();
		expect(write).toHaveBeenCalledWith(2);
	});

	it('flushes pending data during disposal', async () => {
		const write = vi.fn(async (_value: number) => undefined);
		const writer = new LatestValueWriter(write);
		writer.schedule(3);
		await writer.dispose();
		expect(write).toHaveBeenCalledWith(3);
	});
});
