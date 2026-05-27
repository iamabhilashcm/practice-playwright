import { expect, test } from "@playwright/test";

test("By user search", async ({ page }) => {
  await page.goto("https://www.amazon.in/");

  await page.getByPlaceholder("Search Amazon.in").fill("mobile 5g");

  await page.keyboard.press("Enter");

  await expect(page.getByText('results for "mobile 5g"')).toBeVisible();

  await page.getByLabel("Apply the filter Samsung to narrow results").click();
});

test("By locator search", async ({ page }) => {
  await page.goto("https://www.amazon.in/");

  await page.getByPlaceholder("Search Amazon.in").fill("mobile 5g");

  await page.locator("#nav-search-submit-button").click();

  //or
  //await page.keyboard.press('Enter')

  await expect(page.getByText('results for "mobile 5g"')).toBeVisible();
});

test("fluke site", async ({page}) => {
  await page.goto("https://www.fluke.com/en-us");
  await page.waitForLoadState();
});
