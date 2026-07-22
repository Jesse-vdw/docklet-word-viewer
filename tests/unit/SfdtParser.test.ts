import { SfdtParser } from '../../src/services/docx/SfdtParser.ts';

describe('SfdtParser', () => {
	it('converts basic SFDT blocks into the viewer model', () => {
		const parser = new SfdtParser();
		const model = parser.parse(
			JSON.stringify({
				sections: [
					{
						blocks: [
							{
								paragraphFormat: { styleName: 'Heading 1' },
								inlines: [{ text: 'Converted title', characterFormat: { bold: true } }],
							},
							{
								inlines: [{ text: 'Body text', characterFormat: { italic: true, fontSize: 12 } }],
							},
						],
					},
				],
			}),
		);

		expect(model.title).toBe('Converted title');
		expect(model.outline).toEqual([{ id: expect.any(String), title: 'Converted title', level: 1 }]);
		expect(model.blocks[1]).toMatchObject({
			type: 'paragraph',
			inlines: [{ type: 'text', text: 'Body text', italic: true, fontSizePt: 12 }],
		});
		expect(model.warnings).toEqual([
			'Rendered from self-hosted SFDT conversion; advanced editing metadata is not shown.',
		]);
	});
});
