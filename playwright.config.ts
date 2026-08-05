import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./src/test/pages",
  testMatch: "*.screenshot.spec.ts",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  reporter: process.env.CI ? "github" : "list",
  expect: {
    // Allow a tiny fraction of pixels to differ so sub-pixel font
    // anti-aliasing between environments doesn't fail the whole run.
    // Baselines are still generated in a CI-matching container (see
    // `test:e2e:update`) so real visual regressions are caught.
    toHaveScreenshot: { maxDiffPixelRatio: 0.01 },
  },
  use: {
    baseURL: "http://localhost:3000",
  },
  projects: [
    {
      name: "desktop",
      use: { viewport: { width: 1024, height: 768 } },
    },
    {
      name: "tablet",
      use: { viewport: { width: 768, height: 1024 } },
    },
    {
      name: "mobile",
      use: { viewport: { width: 360, height: 740 } },
    },
  ],
  webServer: {
    command: "pnpm run dev",
    url: "http://localhost:3000",
    reuseExistingServer: !process.env.CI,
    timeout: 60_000,
  },
});
