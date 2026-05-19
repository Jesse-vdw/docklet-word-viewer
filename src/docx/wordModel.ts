export type WordLayoutMode = 'paginated' | 'continuous';
export type WordListFormat = 'bullet' | 'decimal' | 'lowerLetter' | 'upperLetter' | 'lowerRoman' | 'upperRoman' | 'none';
export type WordAlignment = 'left' | 'center' | 'right' | 'justify';
export type WordBlock = WordParagraphBlock | WordTableBlock | WordPageBreakBlock | WordUnsupportedBlock;
export type WordInline = WordTextInline | WordBreakInline | WordPageBreakInline | WordImageInline | WordNoteReferenceInline | WordCommentReferenceInline;

export interface WordDocumentModel {
	title: string;
	metadata: WordDocumentMetadata;
	blocks: WordBlock[];
	headers: WordHeaderFooter[];
	footers: WordHeaderFooter[];
	footnotes: WordDocumentNote[];
	endnotes: WordDocumentNote[];
	comments: WordDocumentComment[];
	outline: WordOutlineItem[];
	stats: WordDocumentStats;
	warnings: string[];
	unsupportedFeatures: string[];
	plainText: string;
}

export interface WordDocumentMetadata { title: string | null; subject: string | null; creator: string | null; description: string | null; created: string | null; modified: string | null; }
export interface WordDocumentStats { paragraphs: number; tables: number; images: number; lists: number; links: number; comments: number; footnotes: number; endnotes: number; unsupported: number; }
export interface WordOutlineItem { id: string; title: string; level: number; }
export interface WordHeaderFooter { id: string; kind: 'header' | 'footer'; blocks: WordBlock[]; }
export interface WordDocumentNote { id: string; blocks: WordBlock[]; plainText: string; }
export interface WordDocumentComment extends WordDocumentNote { author: string | null; date: string | null; }

export interface WordParagraphBlock {
	type: 'paragraph';
	id: string;
	styleName: string | null;
	styleLabel: string | null;
	headingLevel: number | null;
	alignment: WordAlignment | null;
	list: WordListInfo | null;
	format: WordParagraphFormat;
	inlines: WordInline[];
}

export interface WordParagraphFormat { marginBeforePt: number | null; marginAfterPt: number | null; indentLeftPt: number | null; indentHangingPt: number | null; firstLineIndentPt: number | null; }
export interface WordListInfo { numId: string; level: number; format: WordListFormat; label: string; }
export interface WordTableBlock { type: 'table'; id: string; rows: WordTableRow[]; }
export interface WordTableRow { cells: WordTableCell[]; }
export interface WordTableCell { colSpan: number; rowSpan: number; shading: string | null; blocks: WordBlock[]; }
export interface WordPageBreakBlock { type: 'pageBreak'; id: string; }
export interface WordUnsupportedBlock { type: 'unsupported'; id: string; label: string; detail: string; }

export interface WordTextInline {
	type: 'text';
	text: string;
	bold: boolean;
	italic: boolean;
	underline: boolean;
	strikethrough: boolean;
	superscript: boolean;
	subscript: boolean;
	color: string | null;
	highlight: string | null;
	fontSizePt: number | null;
	hyperlink: string | null;
}

export interface WordBreakInline { type: 'break'; }
export interface WordPageBreakInline { type: 'pageBreak'; }
export interface WordImageInline { type: 'image'; src: string; altText: string; widthPx: number | null; heightPx: number | null; }
export interface WordNoteReferenceInline { type: 'noteReference'; noteType: 'footnote' | 'endnote'; noteId: string; }
export interface WordCommentReferenceInline { type: 'commentReference'; commentId: string; }
