import { getErrorMessage, logError, logWarning } from '../../src/services/errorLogging.ts';

describe('errorLogging', () => {
	it('extracts useful messages and logs warning/error contexts', () => {
		expect(getErrorMessage(new Error('boom'))).toBe('boom');
		expect(getErrorMessage('plain')).toBe('plain');
		expect(getErrorMessage({ code: 1 })).toBe('{"code":1}');
		const errorSpy = vi.spyOn(console, 'error').mockImplementation(() => undefined);
		const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => undefined);

		logError('ctx', new Error('bad'));
		logWarning('ctx', 'careful');
		logWarning('ctx', 'careful', { detail: true });

		expect(errorSpy).toHaveBeenCalledWith(expect.stringContaining('[docklet-word-viewer] ctx: bad'), expect.any(Error));
		expect(warnSpy).toHaveBeenCalledTimes(2);
		errorSpy.mockRestore();
		warnSpy.mockRestore();
	});
});
