import { DocxPartParser } from '../src/docx/DocxPartParser.ts';

describe('DocxPartParser', () => {
	it('parses relationships, metadata, styles, and numbering parts', () => {
		const parser = new DocxPartParser();
		expect(
			parser
				.parseRelationships(
					bytes(
						'<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="r1" Target="https://example.com" TargetMode="External" Type="hyperlink" /></Relationships>',
					),
				)
				.get('r1'),
		).toMatchObject({ target: 'https://example.com', targetMode: 'External' });
		expect(
			parser.parseMetadata(
				bytes(
					'<cp:coreProperties xmlns:cp="x" xmlns:dc="x"><dc:title>Title</dc:title><dc:creator>Ada</dc:creator></cp:coreProperties>',
				),
			),
		).toMatchObject({ title: 'Title', creator: 'Ada' });
		expect(
			parser
				.parseStyles(
					bytes(
						'<w:styles xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main"><w:style w:styleId="Heading2"><w:name w:val="Heading 2" /><w:pPr><w:outlineLvl w:val="1" /></w:pPr></w:style></w:styles>',
					),
				)
				.get('Heading2'),
		).toMatchObject({ name: 'Heading 2', headingLevel: 2 });
		const numbering = parser.parseNumbering(
			bytes(
				'<w:numbering xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main"><w:abstractNum w:abstractNumId="7"><w:lvl w:ilvl="0"><w:numFmt w:val="upperRoman" /><w:start w:val="3" /></w:lvl></w:abstractNum><w:num w:numId="2"><w:abstractNumId w:val="7" /></w:num></w:numbering>',
			),
		);
		expect(numbering.numToAbstract.get('2')).toBe('7');
		expect(numbering.abstractLevels.get('7')?.get(0)).toMatchObject({ format: 'upperRoman', start: 3 });
	});
});

function bytes(text: string): Uint8Array {
	return new TextEncoder().encode(text);
}
