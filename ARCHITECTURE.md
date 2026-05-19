# Architecture - docklet-word-viewer

## Dependency Direction

- UI surface (`views`/`components`) depends on runtime/service abstractions.
- Services/adapters/domain own behavior and orchestrate low-level IO/bridge helpers.
- Cross-plugin integration is runtime-only through plugin access APIs.

## Composition Root

- Composition root: `src/main.ts`.
- Responsibilities: lifecycle registration, dependency wiring, command/view registration, and teardown.

## Allowed Cross-Plugin Touchpoints

- Runtime plugin access helpers and runtime APIs (`getApi()` / `plugin.api`) only.
- Shared packages explicitly allowed by policy (for example `docklet-core`, `corsa-core`, `@docklet/testing`).
- Build-time imports from sibling plugin internals are not allowed.
