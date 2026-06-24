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

The offline viewer runs in a sandboxed iframe. Host and iframe messages are tagged with a per-instance bridge id, and messages for other viewer instances are ignored.

## Optional conversion

When remote conversion is enabled, the plugin resolves the configured self-hosted service URL to a single `.../Import` endpoint, posts the document there, and expects SFDT text in response. By default this is only a fallback after local parsing fails. The "Prefer remote conversion" setting can use the self-hosted converter first.

## Known limitations

The local renderer is intentionally conservative and does not claim Microsoft Word-perfect pagination. Advanced objects are surfaced as warnings when detected, and the optional SFDT fallback is read-only viewer output rather than an editor.

## Development

```bash
pnpm --filter docklet-word-viewer check
pnpm -C plugins check
pnpm -C plugins release:check
```
