import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  timeout: 30 * 1000,

  use: {
    headless: false,

    // Use installed Google Chrome
    channel: 'chrome',


    viewport: { width: 1600, height: 700 },

    ignoreHTTPSErrors: true,

    video: 'on-first-retry',
    screenshot: 'only-on-failure',
    trace: 'on-first-retry',
  },

  projects: [
    {
      name: 'Desktop Chrome',
      use: {
        ...devices['Desktop Chrome'],
      },
    },
  ],
});