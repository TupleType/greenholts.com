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
    await expect(page).toHaveScreenshot(`${name}.png`, {
      fullPage: true,
      // The FlickeringGrid in the layout is a canvas-based rAF animation that
      // never produces identical consecutive frames. Mask it so screenshots
      // are stable without hiding any meaningful UI.
      mask: [page.locator("canvas")],
    });
  });
}
