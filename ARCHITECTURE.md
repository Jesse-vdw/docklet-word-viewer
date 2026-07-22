# Architecture — Docklet Word Viewer

## Ownership and flow

`DockletWordViewerPlugin` owns Obsidian registration and a normalized signal settings store. Repository, DOCX/SFDT parsers, optional conversion client, loader, view, and iframe bridge are separate classes. The flow is `vault binary → package safety/parts → document model → bridge → sandboxed renderer`.

The repository validates extension and size before reads. `DocxPackageReader` rejects unsafe paths/expansion and extracts only relevant parts. Parsers are deterministic and independent from Obsidian UI.

## Bridge lifecycle

Each `WordViewerView` owns one `WordViewerBridge`. Mount creates a sandboxed opaque-origin iframe and ready timeout. Every message carries protocol version 1 and requires the expected content window, channel, bridge ID, and discriminated payload. Theme/layout/zoom/search are explicit commands. Destroy clears timeout/listener/DOM ownership; reload replaces the prior bridge cleanly.

## Compatibility and release

View type/state, commands, settings, schema-v2 `plugin.api`, DOCX model behavior, and optional conversion semantics are compatibility boundaries. Production output is a single self-contained `main.js` plus CSS and metadata.
