#!/usr/bin/env node
/**
 * Package script: docklet-word-viewer/scripts/check-architecture.mjs.
 * Purpose: Workspace/package utility script for this plugin.
 * Run from: `pnpm -C plugins/<package> <script>` or from repository root package scripts.
 * Developer notes: Keep this header at the top so docs checks pass.
 */
/**
 * STANDARD_WRAPPER (managed)
 * Delegates check-architecture.mjs through shared runtime + plugin capabilities.
 */
import { runStandardWrapper, wrapperNameFromMeta } from '../../scripts/framework/run-plugin-script.mjs';

await runStandardWrapper(wrapperNameFromMeta(import.meta.url));
