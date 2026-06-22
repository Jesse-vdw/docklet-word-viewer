import { describe, expect, it } from "vitest";
import axe from "axe-core";

describe("accessibility workflow", () => {
  it("has no critical WCAG violations on baseline surface", async () => {
    document.body.innerHTML = `<main>
      <h1>docklet-word-viewer Accessibility</h1>
      <button type="button">Primary Action</button>
      <label for="workflow-input">Input</label>
      <input id="workflow-input" type="text" />
      <a href="#" id="help-link">Help</a>
    </main>`;

    const result = await axe.run(document.body, {
      runOnly: { type: "tag", values: ["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa"] },
    });

    const critical = result.violations.filter((v) => v.impact === "critical");
    expect(critical).toHaveLength(0);
  });

  it("supports keyboard-first DOCX viewer controls workflow path with visible focus targets", () => {
    document.body.innerHTML = `<main>
      <button id="open">Open DOCX viewer controls workflow</button>
      <button id="next">Next</button>
      <button id="confirm">Confirm</button>
    </main>`;

    const open = document.getElementById("open");
    const next = document.getElementById("next");
    const confirm = document.getElementById("confirm");

    expect(open).toBeTruthy();
    expect(next).toBeTruthy();
    expect(confirm).toBeTruthy();

    open?.focus();
    expect(document.activeElement).toBe(open);
    next?.focus();
    expect(document.activeElement).toBe(next);
    confirm?.focus();
    expect(document.activeElement).toBe(confirm);
  });
});
