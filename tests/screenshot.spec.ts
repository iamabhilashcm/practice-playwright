import { test, expect } from "@playwright/test";

test("goto Amazon", async ({ page }) => {
  await page.goto("https://www.amazon.in/");

  await page.waitForTimeout(7000);

  //Full page screenshot
  await page.screenshot({
    path: "screenshots/full-page.png",
    fullPage: true,
  });

  const searchBox = page.getByPlaceholder("Search Amazon.in");

  await searchBox.fill("samsung mobile");

  //element screenshot
  await searchBox.screenshot({ path: "screenshots/search-box.png" });

  //screenshot with search value, only by viewport size
  await page.screenshot({
    path: "screenshots/searchValue.png",
    fullPage: false,
  });
  await searchBox.press("Enter");

  await expect(page.getByText('results for "samsung mobile"')).toBeVisible();
});
