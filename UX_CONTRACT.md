# UX Contract — docklet-word-viewer

## Plugin UX Goals
- This plugin follows the **workspace UX vision** defined in `docs/ux/UX_CHARTER.md`.
- No plugin-specific UX philosophy overrides workspace UX governance.
- Vision statements for this plugin are constrained to the workspace standards below.

## Shared Standards Mapping
- CHARTER-1 Obsidian-native interaction: ✅ Required and enforced.
- CHARTER-2 Accessibility minimums: ✅ Required and enforced.
- CHARTER-3 Tokens and CSS_PREFIX: ✅ Required and enforced.
- CHARTER-4 Required UI states: ✅ Required and enforced.
- CHARTER-5 Privacy and safety defaults: ✅ Required and enforced.

## Component and State Requirements
| Journey | Entry Point | Loading | Empty | Error | Success |
|---|---|---|---|---|---|
| Primary plugin workflow | Command, view, or modal | Required | Required | Required | Required |

## Accessibility Obligations
- Keyboard flow requirements: required for primary workflows.
- Focus visibility requirements: required on interactive controls.
- Contrast and readability notes: must remain acceptable in light and dark mode.
- Reduced motion / large text / RTL notes: no critical breakage allowed.
- Package test:a11y scope: workflow-centric coverage for DOCX viewer controls workflow plus baseline WCAG smoke checks.

## Exceptions and Risk Acceptance
| ID | Exception | Rationale | Owner | Expiry | Remediation Plan |
|---|---|---|---|---|---|
| EX-001 | None | N/A | @jvwbct | N/A | N/A |
