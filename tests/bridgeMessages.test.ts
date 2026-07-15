import { BRIDGE_CHANNEL } from '../src/constants.ts';
import { isWordToHostMessage } from '../src/bridge/bridgeMessages.ts';

describe('isWordToHostMessage', () => {
	it('accepts ready and render error messages for the viewer channel', () => {
		expect(isWordToHostMessage({ channel: BRIDGE_CHANNEL, bridgeId: 'bridge-1', type: 'ready' })).toBe(true);
		expect(
			isWordToHostMessage({ channel: BRIDGE_CHANNEL, bridgeId: 'bridge-1', type: 'renderError', message: 'Nope' }),
		).toBe(true);
		expect(
			isWordToHostMessage({ channel: BRIDGE_CHANNEL, bridgeId: 'bridge-1', type: 'searchResult', total: 3, active: 1 }),
		).toBe(true);
	});

	it('rejects messages from other channels or malformed payloads', () => {
		expect(isWordToHostMessage({ channel: 'other', bridgeId: 'bridge-1', type: 'ready' })).toBe(false);
		expect(isWordToHostMessage({ channel: BRIDGE_CHANNEL, type: 'ready' })).toBe(false);
		expect(isWordToHostMessage({ channel: BRIDGE_CHANNEL, bridgeId: 'bridge-1', type: 'renderError' })).toBe(false);
		expect(
			isWordToHostMessage({
				channel: BRIDGE_CHANNEL,
				bridgeId: 'bridge-1',
				type: 'searchResult',
				total: '3',
				active: 1,
			}),
		).toBe(false);
		expect(isWordToHostMessage(null)).toBe(false);
	});
});
