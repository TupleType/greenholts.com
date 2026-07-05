import { expect, test } from "@playwright/test";

const pages = [
  { name: "home", path: "/" },
  { name: "blog", path: "/blog" },
  { name: "not-found", path: "/this-page-does-not-exist" },
];

for (const { name, path } of pages) {
  test(`${name} page`, async ({ page }) => {
    await page.goto(path);
    await page.waitForLoadState("networkidle");
    // BlurFade entrance animations are JS-driven (Framer Motion), so they
    // aren't paused by Playwright's CSS-animation disabling. A fixed sleep
    // here is flaky across machines of different speeds (e.g. CI runners
    // vs local), so instead poll until every animated element has reached
    // its final, fully-visible state before taking the screenshot.
    await page.waitForFunction(
      () => {
        const isSettled = (el: Element) => {
          const style = getComputedStyle(el);
          return (
            parseFloat(style.opacity) >= 0.99 &&
            (style.filter === "none" || style.filter === "blur(0px)")
          );
        };
        return Array.from(
          document.querySelectorAll('[style*="opacity"]'),
        ).every(isSettled);
      },
      { timeout: 10_000 },
    );
    await expect(page).toHaveScreenshot(`${name}.png`, {
      fullPage: true,
      // The FlickeringGrid in the layout is a canvas-based rAF animation that
      // never produces identical consecutive frames. Mask it so screenshots
      // are stable without hiding any meaningful UI.
      mask: [page.locator("canvas")],
    });
  });
}
