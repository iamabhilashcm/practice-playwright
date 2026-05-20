import { test, expect } from "@playwright/test";

test("search,select qty and add to cart", async ({ page }) => {
  await page.goto("https://www.amazon.in/");

  await page.getByPlaceholder("Search Amazon.in").fill("Mobile 5g");

  await page.locator("#nav-search-submit-button").click();

  await expect(page.getByText('results for "Mobile 5g"'));

  await page.getByLabel("Apply the filter Redmi to narrow results").click();

  const newTabPromise = page.context().waitForEvent("page");

  await page
    .getByLabel("Sponsored Ad - REDMI A7 Pro 5G (Black, 4GB RAM, 64GB Storage")
    .click();

  const newTab = await newTabPromise;
  await newTab.waitForLoadState();

  await expect(
    newTab.getByRole("heading", { name: "REDMI A7 Pro 5G (Black, 4GB" }),
  ).toBeVisible();

  //  // open dropdown
  await newTab.locator("#a-autoid-0-announce").click();

  const selectQuantity = newTab.getByRole("listbox").locator("option");

  await expect(newTab.getByRole("option")).toHaveCount(3);

  await newTab.getByRole("option", { name: "2" }).click();

  await newTab.getByRole("button", { name: "Add to Cart" }).click();
});
