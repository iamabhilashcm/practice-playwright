import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: "html",

  use: {
    trace: "on-first-retry",
  },

  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },

    {
      name: "firefox",
      use: { ...devices["Desktop Firefox"] },
    },

    {
      name: "webkit",
      use: { ...devices["Desktop Safari"] },
    },
  ],
});

//We can refer to the Basic Configuration documentation to understand what this code does:

//testDir: Top-level directory to scan recursively for test files.
//fullyParallel: Decide if all tests in all files should run in parallel.
//forbidOnly: Exit with error if test.only is used (for example, useful on CI).
//retries: Max number of retries per test (useful for web-first assertions).
//workers: Max number of concurrent worker processes (for parallelizing tests).
//reporter: Select from available reporter options (built-in and custom).
//use: Set global options for all tests (can be overridden at project or test scope).
//projects: Run tests in multiple configurations (browsers, emulators, options).
