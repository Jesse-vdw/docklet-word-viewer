# Docklet Word Viewer

Docklet Word Viewer `1.0.1` provides local-first DOCX parsing and viewing in Obsidian, with search, outline, layout, zoom, theme updates, reload, and an optional explicitly enabled self-hosted conversion endpoint.

DOCX ZIP input is normalized, traversal-safe, and bounded by entry, expanded-size, and per-entry limits. The viewer runs in a local `srcdoc` iframe with `allow-scripts` only. Because that sandbox has an opaque origin, host posts use `*` while source-window, channel, bridge ID, and message-shape checks scope the protocol. Destroy removes listeners, timers, and the iframe.

## Development and smoke checks

```bash
pnpm install --frozen-lockfile
pnpm check
pnpm release:package
```

Smoke-test DOCX open/reload, outline/search/zoom/layout, malformed and oversized files, missing media/styles, both themes, view teardown, settings cleanup, and remote conversion disabled/enabled. Only exact version tags run releases; publish-and-sync verifies checksums and preserves `data.json`.
