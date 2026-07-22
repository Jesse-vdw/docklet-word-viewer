# AGENTS.md — Docklet Word Viewer

## Identity

- Package and plugin ID: `docklet-word-viewer`
- Version: `2.0.0`
- Entry/plugin/runtime: `src/main.ts`, `src/plugin/DockletWordViewerPlugin.ts`, `src/runtime/DockletWordViewerRuntime.ts`
- Bridge: `src/adapters/bridge/WordViewerBridge.ts`
- CSS prefix: `dck-word`

## Engineering rules

- Keep parser, repository, loader, conversion client, bridge, and view ownership in injected classes.
- Validate ZIP paths and size limits before extraction; keep viewing local unless the user explicitly enables a configured conversion service.
- The iframe uses the minimum sandbox, validates protocol version/source/channel/bridge/payload, propagates theme/layout/reload explicitly, and tears down symmetrically.
- Publish document opening through the frozen schema-v2 `plugin.api`.
- Preserve DOCX behavior, commands, settings, and view state; legacy CSS aliases are forbidden in v2.
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
