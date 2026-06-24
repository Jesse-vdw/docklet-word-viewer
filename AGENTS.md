# AGENTS.md - docklet-word-viewer

Package-level guide for `docklet-word-viewer`.
Read the workspace-level `../AGENTS.md` first for shared conventions.

---

## Identity

| Field | Value |
|---|---|
| Package name | `docklet-word-viewer` |
| Plugin ID | `docklet-word-viewer` |
| Manifest name | `Docklet Word Viewer` |
| Entry surface | `src/main.ts` |
| Version | `1.0.0` |
| Min Obsidian | `1.7.0` |
| Desktop only | `true` |

---

## What this package does

Docklet Word Viewer opens `.docx` files in Obsidian through a local-first OOXML parser and sandboxed iframe renderer. It keeps Syncfusion-style server conversion behind explicit settings so private vault files never leave the device by default.

---

## Architecture notes

- `src/main.ts` wires plugin lifecycle, commands, settings, and view registration.
- `src/views/WordViewerView.ts` is the thin Obsidian `ItemView` shell.
- `src/io/WordFileRepository.ts` owns vault binary reads and file-size safety.
- `src/docx/DocxParser.ts` owns local DOCX OOXML parsing.
- `src/docx/SfdtParser.ts` owns read-only SFDT fallback model conversion.
- `src/conversion/SyncfusionConversionClient.ts` owns explicit self-hosted conversion calls.
- `src/bridge/WordViewerBridge.ts` owns the iframe lifecycle and message protocol.
- `src/engine/WordViewerHost.ts` builds the offline iframe viewer document.
- `src/settings/` owns settings normalization and UI rendering.

---

## Commands

```bash
pnpm --filter docklet-word-viewer check
pnpm -C plugins check
pnpm -C plugins release:check
```

---

## Release rules

- Root release artifacts must remain:
  - `manifest.json`
  - `main.js`
  - `styles.css`
- Do not commit or ship vault-local `data.json`.
Use `check` as the package production gate.

---

## Required AGENTS Sections

Every plugin AGENTS.md MUST include these sections:
- `## Identity`
- `## Commands`
- `## TDD Contract`
- `## Release rules`

## TDD Contract

- Workspace policy in `../AGENTS.md` is the only authoritative testing vision for this package.
- Do not introduce plugin-local testing philosophies that conflict with workspace policy.
- Tests are part of the package contract; update matching coverage when public behavior, persistence, or release flows change.
- Required test boundary isolation file: `tests/__mocks__/obsidian.ts`.
- If the package exposes a public API (`getApi`/`api`), it MUST include API/contract tests.
- If the package owns runtime lifecycle under `src/runtime`, it MUST include runtime ownership tests.
- Package `check` runs the workspace-level test gates.
- Required suite validation command: `pnpm -C plugins check`.

## Workspace Vision Alignment

- The workspace policy in `../AGENTS.md` is the single authoritative engineering vision for this plugin.
- Package-level notes may refine implementation details only and must not introduce conflicting philosophy.

## Public API policy

- If the plugin exposes `getApi()` or `plugin.api`, compatibility is contract-bound and must be preserved.
- API changes require contract-test updates and explicit release-note documentation.
