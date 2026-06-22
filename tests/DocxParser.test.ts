import { DocxParser } from '../src/docx/DocxParser.ts';
import { isWordViewerDomainError } from '../src/domainErrors.ts';
import { makeDocxPackage, paragraphXml, simpleDocumentXml } from './docxTestUtils.ts';

describe('DocxParser', () => {
	it('parses paragraphs, formatting, and tables from a minimal docx package', () => {
		const parser = new DocxParser();
		const data = makeDocxPackage({
			'word/document.xml': `<?xml version="1.0" encoding="UTF-8"?>
				<w:document xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main">
					<w:body>
						<w:p>
							<w:pPr><w:pStyle w:val="Heading1" /></w:pPr>
							<w:r><w:t>Quarterly Update</w:t></w:r>
						</w:p>
						<w:p>
							<w:r><w:rPr><w:b /><w:i /></w:rPr><w:t>Bold italic</w:t></w:r>
							<w:r><w:br /></w:r>
							<w:r><w:t>Next line</w:t></w:r>
						</w:p>
						<w:tbl>
							<w:tr>
								<w:tc><w:tcPr><w:tcW w:w="1440" w:type="dxa" /></w:tcPr><w:p><w:r><w:t>Cell A</w:t></w:r></w:p></w:tc>
								<w:tc><w:p><w:r><w:t>Cell B</w:t></w:r></w:p></w:tc>
							</w:tr>
						</w:tbl>
					</w:body>
				</w:document>`,
		});
		const model = parser.parse(data);

		expect(model.title).toBe('Quarterly Update');
		expect(model.stats.paragraphs).toBe(4);
		expect(model.stats.tables).toBe(1);
		expect(model.blocks[0]).toMatchObject({ type: 'paragraph', styleName: 'Heading1' });
		expect(model.blocks[1]).toMatchObject({
			type: 'paragraph',
			inlines: [
				{ type: 'text', text: 'Bold italic', bold: true, italic: true },
				{ type: 'break' },
				{ type: 'text', text: 'Next line' },
			],
		});
		expect(model.blocks[2]).toMatchObject({
			type: 'table',
			rows: [{ cells: [{ widthPt: 72, blocks: [{ type: 'paragraph' }] }, { widthPt: null, blocks: [{ type: 'paragraph' }] }] }],
		});
	});

	it('renders headers, comments, and notes instead of only warning about them', () => {
		const parser = new DocxParser();
		const model = parser.parse(makeDocxPackage({
			'word/document.xml': makeSimpleDocumentXml('Body'),
			'word/header1.xml': '<w:hdr xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main"><w:p><w:r><w:t>Header</w:t></w:r></w:p></w:hdr>',
			'word/footer1.xml': '<w:ftr xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main"><w:p><w:r><w:t>Footer</w:t></w:r></w:p></w:ftr>',
			'word/comments.xml': '<w:comments xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main"><w:comment w:id="0" w:author="Alex"><w:p><w:r><w:t>Comment text</w:t></w:r></w:p></w:comment></w:comments>',
			'word/footnotes.xml': '<w:footnotes xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main"><w:footnote w:id="1"><w:p><w:r><w:t>Footnote text</w:t></w:r></w:p></w:footnote></w:footnotes>',
		}));

		expect(model.headers[0]?.blocks[0]).toMatchObject({ type: 'paragraph' });
		expect(model.footers[0]?.blocks[0]).toMatchObject({ type: 'paragraph' });
		expect(model.comments[0]).toMatchObject({ id: '0', author: 'Alex', plainText: 'Comment text' });
		expect(model.footnotes[0]).toMatchObject({ id: '1', plainText: 'Footnote text' });
		expect(model.warnings).toEqual(['Document styles are missing; common Word style names will be inferred where possible.']);
	});

	it('throws a domain error for invalid packages', () => {
		const parser = new DocxParser();

		expect(() => parser.parse(new ArrayBuffer(4))).toThrow();
		try {
			parser.parse(new ArrayBuffer(4));
		} catch (error) {
			expect(isWordViewerDomainError(error)).toBe(true);
		}
	});

	it('parses styles, outline, numbering, links, metadata, and note references', () => {
		const parser = new DocxParser();
		const model = parser.parse(makeDocxPackage({
			'docProps/core.xml': `<?xml version="1.0" encoding="UTF-8"?>
				<cp:coreProperties xmlns:cp="http://schemas.openxmlformats.org/package/2006/metadata/core-properties" xmlns:dc="http://purl.org/dc/elements/1.1/">
					<dc:title>Metadata Title</dc:title>
					<dc:creator>Jane</dc:creator>
				</cp:coreProperties>`,
			'word/styles.xml': `<?xml version="1.0" encoding="UTF-8"?>
				<w:styles xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main">
					<w:style w:type="paragraph" w:styleId="Heading1"><w:name w:val="Heading 1" /><w:pPr><w:outlineLvl w:val="0" /></w:pPr></w:style>
				</w:styles>`,
			'word/numbering.xml': `<?xml version="1.0" encoding="UTF-8"?>
				<w:numbering xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main">
					<w:abstractNum w:abstractNumId="7"><w:lvl w:ilvl="0"><w:start w:val="1" /><w:numFmt w:val="decimal" /><w:lvlText w:val="%1." /></w:lvl></w:abstractNum>
					<w:num w:numId="3"><w:abstractNumId w:val="7" /></w:num>
				</w:numbering>`,
			'word/_rels/document.xml.rels': `<?xml version="1.0" encoding="UTF-8"?>
				<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
					<Relationship Id="rLink" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/hyperlink" Target="https://example.com" TargetMode="External" />
				</Relationships>`,
			'word/footnotes.xml': '<w:footnotes xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main"><w:footnote w:id="2"><w:p><w:r><w:t>Note</w:t></w:r></w:p></w:footnote></w:footnotes>',
			'word/comments.xml': '<w:comments xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main"><w:comment w:id="4" w:author="Reviewer"><w:p><w:r><w:t>Looks good</w:t></w:r></w:p></w:comment></w:comments>',
			'word/document.xml': `<?xml version="1.0" encoding="UTF-8"?>
				<w:document xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
					<w:body>
						<w:p><w:pPr><w:pStyle w:val="Heading1" /></w:pPr><w:r><w:t>Heading</w:t></w:r></w:p>
						<w:p><w:pPr><w:numPr><w:ilvl w:val="0" /><w:numId w:val="3" /></w:numPr></w:pPr><w:r><w:t>First item</w:t></w:r></w:p>
						<w:p><w:hyperlink r:id="rLink"><w:r><w:t>Example link</w:t></w:r></w:hyperlink></w:p>
						<w:p><w:r><w:t>With note</w:t></w:r><w:r><w:footnoteReference w:id="2" /></w:r><w:r><w:commentReference w:id="4" /></w:r></w:p>
					</w:body>
				</w:document>`,
		}));

		expect(model.title).toBe('Metadata Title');
		expect(model.metadata).toMatchObject({ title: 'Metadata Title', creator: 'Jane' });
		expect(model.outline).toEqual([{ id: expect.any(String), title: 'Heading', level: 1 }]);
		expect(model.blocks[1]).toMatchObject({ type: 'paragraph', list: { label: '1.', level: 0 } });
		expect(model.blocks[2]).toMatchObject({ type: 'paragraph', inlines: [{ type: 'text', hyperlink: 'https://example.com' }] });
		expect(model.blocks[3]).toMatchObject({
			type: 'paragraph',
			inlines: [
				{ type: 'text', text: 'With note' },
				{ type: 'noteReference', noteType: 'footnote', noteId: '2' },
				{ type: 'commentReference', commentId: '4' },
			],
		});
		expect(model.stats).toMatchObject({ lists: 1, links: 1, footnotes: 1, comments: 1 });
	});

	it('rejects packages with too many entries before rendering', () => {
		const parser = new DocxParser();
		const manyParts: Record<string, string> = {
			'word/document.xml': makeSimpleDocumentXml('Body'),
		};
		for (let index = 0; index < 1502; index++) {
			manyParts[`custom/item-${index}.xml`] = '<x />';
		}

		expect(() => parser.parse(makeDocxPackage(manyParts))).toThrow(/too many ZIP entries/);
	});

	it('parses page breaks, unsupported features, and embedded local images while blocking external images', () => {
		const parser = new DocxParser();
		const model = parser.parse(makeDocxPackage({
			'word/_rels/document.xml.rels': '<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rImage" Target="media/image1.png" /><Relationship Id="rExternal" Target="https://example.com/x.png" TargetMode="External" /></Relationships>',
			'word/media/image1.png': new Uint8Array([137, 80, 78, 71]),
			'word/document.xml': simpleDocumentXml(`
				${paragraphXml('Before')}
				<w:p><w:r><w:br w:type="page" /></w:r></w:p>
				<w:p><w:r><w:drawing><a:blip xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" r:embed="rImage" /><wp:extent xmlns:wp="http://schemas.openxmlformats.org/drawingml/2006/wordprocessingDrawing" cx="95250" cy="19050" /><wp:docPr xmlns:wp="http://schemas.openxmlformats.org/drawingml/2006/wordprocessingDrawing" descr="Logo" /></w:drawing></w:r></w:p>
				<w:p><w:r><w:drawing><a:blip xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" r:embed="rExternal" /></w:drawing></w:r></w:p>
				<w:altChunk />
				<w:p><w:r><w:txbxContent /></w:r></w:p>
			`),
		}));

		expect(model.blocks.map((block) => block.type)).toContain('pageBreak');
		expect(model.blocks).toContainEqual(expect.objectContaining({ type: 'unsupported', label: 'Embedded external document' }));
		expect(model.stats.images).toBe(1);
		expect(JSON.stringify(model.blocks)).toContain('"altText":"Logo"');
		expect(JSON.stringify(model.blocks)).not.toContain('https://example.com/x.png');
		expect(model.unsupportedFeatures).toContain('text boxes');
	});

	it('formats supported list styles consistently', () => {
		const levels = ['bullet', 'lowerLetter', 'upperLetter', 'lowerRoman', 'upperRoman']
			.map((format, index) => `<w:abstractNum w:abstractNumId="${index}"><w:lvl w:ilvl="0"><w:numFmt w:val="${format}" /><w:lvlText w:val="${format === 'bullet' ? '&#8226;' : '%1.'}" /></w:lvl></w:abstractNum><w:num w:numId="${index + 1}"><w:abstractNumId w:val="${index}" /></w:num>`)
			.join('');
		const body = [1, 2, 3, 4, 5].map((numId) => `<w:p><w:pPr><w:numPr><w:ilvl w:val="0" /><w:numId w:val="${numId}" /></w:numPr></w:pPr><w:r><w:t>Item</w:t></w:r></w:p>`).join('');
		const model = new DocxParser().parse(makeDocxPackage({
			'word/numbering.xml': `<w:numbering xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main">${levels}</w:numbering>`,
			'word/document.xml': simpleDocumentXml(body),
		}));

		expect(model.blocks.filter((block) => block.type === 'paragraph').map((block) => block.list?.label)).toEqual(['•', 'a.', 'A.', 'i.', 'I.']);
	});

	it('rejects malformed XML and missing required parts', () => {
		const parser = new DocxParser();
		expect(() => parser.parse(makeDocxPackage({ 'word/document.xml': '<w:document>' }))).toThrow(/Could not parse/);
		expect(() => parser.parse(makeDocxPackage({ 'custom.xml': '<x />' }))).toThrow(/missing required/);
	});
});

function makeSimpleDocumentXml(text: string): string {
	return simpleDocumentXml(paragraphXml(text));
}
