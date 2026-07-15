# AGENTS.md — Docklet Word Viewer

## Identity

- Package and plugin ID: `docklet-word-viewer`
- Version: `1.0.1`
- Entry: `src/main.ts`
- Bridge: `src/bridge/WordViewerBridge.ts`
- CSS prefix: `dck-word`

## Engineering rules

- Keep parser, repository, loader, conversion client, bridge, and view ownership in injected classes.
- Validate ZIP paths and size limits before extraction; keep viewing local unless the user explicitly enables a configured conversion service.
- The iframe uses the minimum sandbox, validates source/channel/bridge/payload, propagates theme/layout/reload explicitly, and tears down symmetrically.
- Preserve DOCX behavior, commands, settings, view state, and legacy CSS hooks.
- OOCSS uses `dck-word-o-*`, `dck-word-c-*`, `dck-word-u-*`, scoped state, and semantic variables.

## Commands and TDD contract

```bash
pnpm install --frozen-lockfile
pnpm check
pnpm release:package
```

Cover package safety, parser compatibility, bridge protocols, target/source checks, theme/reload/teardown, settings migration, accessibility, and deterministic releases.

## Release rules

Keep only the three documentation files and release workflow. Package exactly the four approved artifacts and preserve/exclude `data.json`.
