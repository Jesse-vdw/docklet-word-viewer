# Docklet Word Viewer Quality Scorecard

## Scores

- TDD 10/10 means parser, bridge, loader, settings, conversion, and security behavior have direct automated tests.
- OOP 10/10 means each exported class has one clear responsibility, injected dependencies where useful, one production caller, and direct tests.

## Required Coverage Areas

- Parser: body blocks, styles, numbering, metadata, links, notes, comments, images, unsupported features, malformed packages, and ZIP safety.
- Bridge: ready lifecycle, timeout, invalid message rejection, render error/search dispatch, destroy cleanup, and sandboxed host HTML.
- Loader/view flow: local parse, remote preferred conversion, remote fallback, error precedence, reload/settings/theme/search/outline UI behavior.
- Settings/conversion: conservative normalization, bounded values, self-hosted endpoint normalization, and public/non-http rejection.

## Line Budgets

- Source budget: `src/**/*.ts` plus `src/**/*.css` must stay at or below 2300 lines.
- Test budget: `tests/**/*.ts` must stay at or below 700 lines.
- Test growth is allowed only when it maps to a required coverage area above.

## No Useless Code Rules

- No exported class or interface without one production caller and one direct test.
- No duplicated fixture builders; shared helpers must describe document behavior, not implementation plumbing.
- No unresolved work markers in package source, tests, or docs.
- No weakening of local-first defaults, ZIP/media safety limits, iframe sandboxing, or remote conversion opt-in.

## Manual Smoke Checklist

- Open a `.docx`, reload it, switch layout, zoom in/out, search and navigate results.
- Click outline headings, copy document text, open in default app, and verify warning display.
- Verify remote conversion remains opt-in and uses only a configured self-hosted endpoint.
