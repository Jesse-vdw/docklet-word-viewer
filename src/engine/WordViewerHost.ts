const WORD_VIEWER_CSS = String.raw`
:root {
	color-scheme: light dark;
	--word-bg: #f4f5f7; --word-page: #fff; --word-text: #1f2328; --word-muted: #687076;
	--word-border: #d8dee4; --word-table-border: #b7bec7; --word-accent: #2563eb;
	--word-mark: #fff59d; --word-mark-active: #f59e0b; --word-zoom: 1;
}
body.is-dark {
	--word-bg: #1e1f22; --word-page: #26282d; --word-text: #e6e8eb; --word-muted: #a7adb5;
	--word-border: #3f444d; --word-table-border: #5a616c; --word-accent: #8ab4ff;
	--word-mark: #6b5f16; --word-mark-active: #b45309;
}
html, body { width: 100%; min-height: 100%; margin: 0; background: var(--word-bg); color: var(--word-text); font: 16px/1.55 ui-serif, Georgia, "Times New Roman", serif; }
body { box-sizing: border-box; padding: 24px; }
body.continuous { padding: 24px 28px; }
.document-shell { zoom: var(--word-zoom); }
.document { max-width: 816px; margin: 0 auto; }
.page { box-sizing: border-box; min-height: 1056px; padding: 72px; background: var(--word-page); border: 1px solid var(--word-border); box-shadow: 0 12px 34px rgba(15, 23, 42, 0.14); }
body.continuous .document { max-width: 920px; }
body.continuous .page { min-height: 0; padding: 34px 40px; box-shadow: none; }
.paragraph { position: relative; margin: 0 0 0.78em; white-space: pre-wrap; tab-size: 4; }
.align-center { text-align: center; } .align-right { text-align: right; } .align-justify { text-align: justify; }
.heading-1, .heading-2, .heading-3, .page-break, .unsupported, .meta-section, .section-title, .note-marker, .comment-marker {
	font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}
.heading-1, .heading-2, .heading-3 { font-weight: 700; }
.heading-1 { margin: 0 0 0.55em; font-size: 1.9rem; line-height: 1.2; }
.heading-2 { margin: 1.2em 0 0.5em; font-size: 1.42rem; line-height: 1.25; font-weight: 650; }
.heading-3 { margin: 1em 0 0.45em; font-size: 1.15rem; line-height: 1.3; font-weight: 650; }
.list-paragraph { display: grid; grid-template-columns: minmax(1.8rem, max-content) 1fr; column-gap: 0.55rem; }
.list-marker { color: var(--word-muted); text-align: right; white-space: nowrap; }
.word-table { width: 100%; margin: 1em 0; border-collapse: collapse; }
.word-table td { min-width: 48px; padding: 7px 9px; border: 1px solid var(--word-table-border); vertical-align: top; }
.word-table .paragraph:last-child { margin-bottom: 0; }
.word-image { display: block; max-width: 100%; height: auto; margin: 0.65em 0; }
.page-break { display: flex; align-items: center; gap: 10px; margin: 30px 0; color: var(--word-muted); font-size: 12px; text-transform: uppercase; letter-spacing: 0; }
.page-break::before, .page-break::after { content: ""; flex: 1; border-top: 1px dashed var(--word-border); }
.unsupported { margin: 1em 0; padding: 10px 12px; border: 1px solid var(--word-border); border-radius: 6px; color: var(--word-muted); font-size: 13px; }
.meta-section { margin: 0 0 20px; padding: 0 0 14px; border-bottom: 1px solid var(--word-border); color: var(--word-muted); font-size: 12px; }
.header-footer, .notes, .comments { margin-top: 28px; padding-top: 18px; border-top: 1px solid var(--word-border); }
.section-title { margin: 0 0 10px; color: var(--word-muted); font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0; }
.note-item, .comment-item { margin: 0 0 12px; font-size: 0.92rem; }
.note-marker, .comment-marker { color: var(--word-accent); font-size: 0.72em; font-weight: 700; vertical-align: super; }
a { color: var(--word-accent); text-decoration: underline; }
mark.search-match { background: var(--word-mark); color: inherit; padding: 0 1px; border-radius: 2px; }
mark.search-match.is-active { background: var(--word-mark-active); color: #111827; }
`;

const WORD_VIEWER_SCRIPT = String.raw`
const CHANNEL = 'docklet-word-viewer-bridge';
const BRIDGE_ID = __WORD_VIEWER_BRIDGE_ID__;
const page = document.getElementById('page');
let currentModel = null, currentQuery = '', activeSearchIndex = 0, currentSearchTotal = 0, renderSearchTotal = 0;
const messageHandlers = {
	loadDocument(message) {
		currentModel = message.document;
		applyTheme(message.isDark);
		applyLayout(message.layout);
		renderDocument();
	},
	themeChanged: (message) => applyTheme(message.isDark),
	layoutChanged: (message) => applyLayout(message.layout),
	zoomChanged: (message) => applyZoom(message.zoom),
	searchChanged(message) {
		currentQuery = String(message.query || '');
		activeSearchIndex = 0;
		renderDocument();
	},
	searchNavigate(message) {
		if (currentSearchTotal > 0) {
			activeSearchIndex = message.direction === 'previous'
				? (activeSearchIndex - 1 + currentSearchTotal) % currentSearchTotal
				: (activeSearchIndex + 1) % currentSearchTotal;
		}
		renderDocument();
	},
	scrollToBlock: (message) => scrollToBlock(message.blockId),
};

window.addEventListener('message', (event) => {
	const message = event.data;
	if (!message || message.channel !== CHANNEL || message.bridgeId !== BRIDGE_ID) return;
	try {
		messageHandlers[message.type]?.(message);
	} catch (error) {
		post('renderError', { message: String(error && error.message ? error.message : error) });
	}
});

function post(type, payload) {
	parent.postMessage({ channel: CHANNEL, bridgeId: BRIDGE_ID, type, ...(payload || {}) }, '*');
}

function el(tag, className, text) {
	const element = document.createElement(tag);
	if (className) element.className = className;
	if (text !== undefined) element.textContent = text;
	return element;
}

function appendBlocks(parent, blocks) {
	for (const block of blocks || []) parent.appendChild(renderBlock(block));
}

function applyTheme(isDark) { document.body.classList.toggle('is-dark', Boolean(isDark)); }
function applyLayout(layout) { document.body.classList.toggle('continuous', layout === 'continuous'); }
function applyZoom(zoom) {
	const value = Number.isFinite(zoom) ? Math.min(2, Math.max(0.5, zoom)) : 1;
	document.documentElement.style.setProperty('--word-zoom', String(value));
}

function renderDocument() {
	page.textContent = '';
	if (!currentModel) {
		postSearchResult(0, -1);
		return;
	}
	const metadata = renderMetadata(currentModel.metadata);
	if (metadata) page.appendChild(metadata);
	renderHeaderFooter(currentModel.headers, 'Headers');
	appendBlocks(page, currentModel.blocks);
	renderHeaderFooter(currentModel.footers, 'Footers');
	renderEntries(currentModel.footnotes, 'Footnotes', 'notes', 'note-item', (note) => [note.id + ' ', 'note-marker']);
	renderEntries(currentModel.endnotes, 'Endnotes', 'notes', 'note-item', (note) => [note.id + ' ', 'note-marker']);
	renderEntries(currentModel.comments, 'Comments', 'comments', 'comment-item', (comment) => [(comment.author || 'Comment') + ' #' + comment.id + ' ', 'comment-marker']);
	finalizeSearch();
}

function renderMetadata(metadata) {
	if (!metadata) return null;
	const items = [metadata.title, metadata.creator && 'Author: ' + metadata.creator, metadata.modified && 'Modified: ' + metadata.modified].filter(Boolean);
	if (!items.length) return null;
	return el('section', 'meta-section', items.join(' · '));
}

function titledSection(className, title) {
	const section = el('section', className);
	section.appendChild(el('h2', 'section-title', title));
	return section;
}

function renderHeaderFooter(parts, title) {
	if (!parts?.length) return;
	const section = titledSection('header-footer', title);
	for (const part of parts) appendBlocks(section, part.blocks);
	page.appendChild(section);
}

function renderEntries(entries, title, sectionClass, itemClass, markerFor) {
	if (!entries?.length) return;
	const section = titledSection(sectionClass, title);
	for (const entry of entries) {
		const item = el('div', itemClass);
		const [markerText, markerClass] = markerFor(entry);
		item.appendChild(el('span', markerClass, markerText));
		appendBlocks(item, entry.blocks);
		section.appendChild(item);
	}
	page.appendChild(section);
}

function renderBlock(block) {
	if (block.type === 'table') return renderTable(block);
	if (block.type === 'pageBreak') return renderPageBreak(block);
	if (block.type === 'unsupported') return renderUnsupported(block);
	return renderParagraph(block);
}

function renderParagraph(block) {
	const paragraph = el('p', paragraphClass(block));
	paragraph.dataset.blockId = block.id;
	applyParagraphStyle(paragraph, block);
	if (block.list) {
		paragraph.appendChild(el('span', 'list-marker', block.list.label));
		const content = el('span', 'list-content');
		appendInlines(content, block.inlines);
		paragraph.appendChild(content);
	} else {
		appendInlines(paragraph, block.inlines);
	}
	if (!paragraph.hasChildNodes()) paragraph.appendChild(el('br'));
	return paragraph;
}

function appendInlines(parent, inlines) {
	for (const inline of inlines || []) parent.appendChild(renderInline(inline));
}

function renderInline(inline) {
	if (inline.type === 'break') return el('br');
	if (inline.type === 'pageBreak') return renderPageBreak({ id: '' });
	if (inline.type === 'image') return renderImage(inline);
	if (inline.type === 'noteReference') return el('sup', 'note-marker', inline.noteType === 'footnote' ? '[' + inline.noteId + ']' : '[e' + inline.noteId + ']');
	if (inline.type === 'commentReference') return el('sup', 'comment-marker', '[c' + inline.commentId + ']');
	return renderTextInline(inline);
}

function renderTextInline(inline) {
	const element = inline.hyperlink ? el('a') : el('span');
	if (inline.hyperlink) {
		element.href = inline.hyperlink;
		element.target = '_blank';
		element.rel = 'noopener noreferrer';
	}
	const style = element.style;
	if (inline.bold) style.fontWeight = '700';
	if (inline.italic) style.fontStyle = 'italic';
	if (inline.underline) style.textDecoration = 'underline';
	if (inline.strikethrough) style.textDecoration = appendDecoration(style.textDecoration, 'line-through');
	if (inline.superscript || inline.subscript) {
		style.verticalAlign = inline.superscript ? 'super' : 'sub';
		style.fontSize = '0.75em';
	}
	if (inline.color) style.color = inline.color;
	if (inline.highlight) style.backgroundColor = inline.highlight;
	if (inline.fontSizePt) style.fontSize = inline.fontSizePt + 'pt';
	appendSearchText(element, inline.text || '');
	return element;
}

function appendSearchText(parent, text) {
	if (!currentQuery) {
		parent.appendChild(document.createTextNode(text));
		return;
	}
	const lowerText = text.toLocaleLowerCase(), lowerQuery = currentQuery.toLocaleLowerCase();
	let offset = 0;
	while (offset < text.length) {
		const index = lowerText.indexOf(lowerQuery, offset);
		if (index === -1) {
			parent.appendChild(document.createTextNode(text.slice(offset)));
			break;
		}
		if (index > offset) parent.appendChild(document.createTextNode(text.slice(offset, index)));
		const mark = el('mark', 'search-match', text.slice(index, index + currentQuery.length));
		mark.dataset.searchIndex = String(renderSearchTotal);
		if (renderSearchTotal === activeSearchIndex) mark.classList.add('is-active');
		parent.appendChild(mark);
		renderSearchTotal++;
		offset = index + currentQuery.length;
	}
}

function appendDecoration(current, decoration) {
	return current && current !== 'none' ? current + ' ' + decoration : decoration;
}

function paragraphClass(block) {
	const classes = ['paragraph'];
	if (block.list) classes.push('list-paragraph', 'list-level-' + block.list.level);
	const level = block.headingLevel || headingLevelFromStyle(block.styleName || block.styleLabel || '');
	if (level >= 1 && level <= 3) classes.push('heading-' + level);
	if (block.alignment) classes.push('align-' + block.alignment);
	return classes.join(' ');
}

function applyParagraphStyle(paragraph, block) {
	const format = block.format || {};
	setPointStyle(paragraph, 'marginTop', format.marginBeforePt);
	setPointStyle(paragraph, 'marginBottom', format.marginAfterPt);
	if (!block.list) setPointStyle(paragraph, 'marginLeft', format.indentLeftPt);
	setPointStyle(paragraph, 'textIndent', format.firstLineIndentPt);
	if (format.indentHangingPt !== null && format.indentHangingPt !== undefined) paragraph.style.textIndent = '-' + format.indentHangingPt + 'pt';
}

function setPointStyle(element, property, value) {
	if (value !== null && value !== undefined) element.style[property] = value + 'pt';
}

function headingLevelFromStyle(styleName) {
	const match = /^heading([1-6])$/.exec(String(styleName || '').replace(/\s+/g, '').toLowerCase());
	return match ? Number(match[1]) : null;
}

function renderImage(inline) {
	const image = el('img', 'word-image');
	image.src = inline.src;
	image.alt = inline.altText || 'Embedded image';
	if (inline.widthPx) image.style.width = inline.widthPx + 'px';
	if (inline.heightPx) image.style.height = inline.heightPx + 'px';
	return image;
}

function renderTable(block) {
	const table = el('table', 'word-table');
	table.dataset.blockId = block.id;
	const body = el('tbody');
	for (const row of block.rows || []) {
		const tr = el('tr');
		for (const cell of row.cells || []) {
			const td = el('td');
			if (cell.colSpan > 1) td.colSpan = cell.colSpan;
			if (cell.rowSpan > 1) td.rowSpan = cell.rowSpan;
			if (cell.shading) td.style.backgroundColor = cell.shading;
			if (cell.widthPt) td.style.width = cell.widthPt + 'pt';
			appendBlocks(td, cell.blocks);
			tr.appendChild(td);
		}
		body.appendChild(tr);
	}
	table.appendChild(body);
	return table;
}

function renderPageBreak(block) {
	const element = el('div', 'page-break', 'Page break');
	if (block.id) element.dataset.blockId = block.id;
	return element;
}

function renderUnsupported(block) {
	const element = el('div', 'unsupported', block.label + ': ' + block.detail);
	element.dataset.blockId = block.id;
	return element;
}

function finalizeSearch() {
	currentSearchTotal = renderSearchTotal;
	if (currentSearchTotal === 0) {
		activeSearchIndex = 0;
		postSearchResult(0, -1);
		renderSearchTotal = 0;
		return;
	}
	if (activeSearchIndex >= currentSearchTotal) activeSearchIndex = currentSearchTotal - 1;
	const active = document.querySelector('mark.search-match.is-active');
	if (active) active.scrollIntoView({ block: 'center', inline: 'nearest' });
	postSearchResult(currentSearchTotal, activeSearchIndex);
	renderSearchTotal = 0;
}

	function postSearchResult(total, active) { post('searchResult', { total, active }); }
	function scrollToBlock(blockId) {
		const id = String(blockId || '');
		const escaped = window.CSS && typeof window.CSS.escape === 'function'
			? window.CSS.escape(id)
			: id.replace(/[^a-zA-Z0-9_-]/g, '\\$&');
		const target = page.querySelector('[data-block-id="' + escaped + '"]');
		if (target) target.scrollIntoView({ block: 'start', inline: 'nearest', behavior: 'smooth' });
	}

post('ready');
`;

export function buildWordViewerHtml(bridgeId = ''): string {
	const script = WORD_VIEWER_SCRIPT.replace('__WORD_VIEWER_BRIDGE_ID__', JSON.stringify(bridgeId));
	return `<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><style>${WORD_VIEWER_CSS}</style></head><body><div class="document-shell"><main class="document"><article id="page" class="page"></article></main></div><script>${script}</script></body></html>`;
}
