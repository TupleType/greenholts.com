import { expect, test } from "@playwright/test";

const pages = [
  { name: "home", path: "/" },
  { name: "blog", path: "/blog" },
  { name: "not-found", path: "/this-page-does-not-exist" },
];

for (const { name, path } of pages) {
  test(`${name} page`, async ({ page }) => {
    // The home page's Talks section embeds YouTube videos via
    // @next/third-parties/google, which loads the lite-youtube-embed
    // script/styles from cdn.jsdelivr.net at runtime and then fetches a
    // thumbnail from i.ytimg.com. Whether those external hosts are
    // reachable varies by environment (e.g. sandboxed vs CI runners),
    // which was silently producing a different (styled vs. unstyled)
    // embed and a consistent screenshot mismatch. Block them so the
    // embed always renders in its unstyled placeholder state,
    // independent of network access.
    await page.route(
      /^https:\/\/(cdn\.jsdelivr\.net|i\.ytimg\.com|img\.youtube\.com)\//,
      (route) => route.abort(),
    );
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
