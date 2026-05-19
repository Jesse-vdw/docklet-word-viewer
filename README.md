# Docklet Word Viewer

Docklet Word Viewer opens `.docx` files inside Obsidian with a local-first renderer and an optional self-hosted conversion fallback.

## V1 support

- Opens `.docx` files from the file explorer, command palette, and file context menu.
- Renders paragraphs, headings, links, inline formatting, lists, page breaks, tables, embedded images, headers, footers, comments, footnotes, and endnotes.
- Provides viewer controls for reload, page/continuous layout, zoom, search, outline navigation, copy text, and opening the source file in the default app.
- Detects advanced Word features such as text boxes, charts, SmartArt, equations, tracked changes, and embedded external document parts.
- Guards large local files, ZIP entry count, expanded package size, and oversized embedded media.
- Renders inside a sandboxed iframe so document styling stays isolated from Obsidian.

## Privacy model

The local parser is used by default and does not send document content outside Obsidian. Remote conversion is disabled unless explicitly enabled in settings and must point at a self-hosted Syncfusion-compatible service. Known public Syncfusion demo hosts are blocked by the URL resolver.

## Optional conversion

When remote conversion is enabled, the plugin posts the document to the configured `.../Import` endpoint and expects SFDT text in response. By default this is only a fallback after local parsing fails. The "Prefer remote conversion" setting can use the self-hosted converter first.

## Known limitations

The local renderer is intentionally conservative and does not claim Microsoft Word-perfect pagination. Advanced objects are surfaced as warnings when detected, and the optional SFDT fallback is read-only viewer output rather than an editor.
