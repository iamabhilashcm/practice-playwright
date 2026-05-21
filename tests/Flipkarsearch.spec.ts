import { test, expect } from "@playwright/test";

test("search in KB website", async ({ page }) => {
  await page.goto("http://javainsimpleway.com/");

  await page.getByRole("searchbox").fill("Core Java");

  await page.keyboard.press("Enter");

  await expect(page.getByText("Search Results for: Core Java")).toBeVisible();
});

test("search and select Lenovo ", async ({ page }) => {
  await page.goto("https://www.amazon.in/");

  //in amazon getbyrole won't work, bcz role is not mentioned in the DOM

  await page.getByPlaceholder("Search Amazon.in").fill("laptop");

  await page.keyboard.press("Enter");

  await expect(page.getByText('results for "laptop"')).toBeVisible();

  // click on lenovo

  await page.getByLabel("Apply the filter Lenovo to narrow results").click();
});

test("Flipkar search and filter", async ({ page }) => {
  // going to the flipkar website
  await page.goto("https://www.flipkart.com/");

  await page.getByRole("button", { name: "✕" }).click();

  // search valuke mobile 5g
  await page
    .getByRole("textbox", { name: "Search for Products, Brands and More" })
    .fill("mobile 5g");

  // hiting Enter key
  await page.keyboard.press("Enter");

  // wait for page to load completely
  await page.waitForLoadState();

  //verifying the search value or string
  await expect(page.getByText('results for "mobile 5g"')).toBeVisible();

  // applying the filter "Apple"
  await page.locator('label:has-text("Apple")').click();
});
