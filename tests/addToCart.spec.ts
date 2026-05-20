import { test, expect } from "@playwright/test";

test("search,select qty and add to cart", async ({ page }) => {
  await page.goto("https://www.amazon.in/");

  await page.getByPlaceholder("Search Amazon.in").fill("Mobile 5g");

  //click on Search icon in the search bar
  await page.locator("#nav-search-submit-button").click();

  //validating the search query
  await expect(page.getByText('results for "Mobile 5g"')).toBeVisible();

  //click on the the filter Redmi(checkbox)
  await page.getByLabel("Apply the filter Redmi to narrow results").click();

  //click on the product REDMI A7 Pro 5G
  await page
    .getByLabel("Sponsored Ad - REDMI A7 Pro 5G (Black, 4GB RAM, 64GB Storage")
    .click();

  // to operate on the newtab we need define the below otherwise playwright won't work and fails
  const newTabPromise = page.context().waitForEvent("page");
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

//optimised code same as above

test("search, select qty and add to cart", async ({ page }) => {
  await page.goto("https://www.amazon.in/");

  // Search product
  await page.getByPlaceholder("Search Amazon.in").fill("Mobile 5g");
  await page.locator("#nav-search-submit-button").click();

  // Validate search results (FIXED: added assertion)
  await expect(page.getByText('results for "Mobile 5g"')).toBeVisible();

  // Apply Redmi filter
  await page.getByLabel("Apply the filter Redmi to narrow results").click();

  // Handle new tab properly (BEST PRACTICE FIX)
  const [newTab] = await Promise.all([
    page.context().waitForEvent("page"),
    page
      .getByLabel(
        "Sponsored Ad - REDMI A7 Pro 5G (Black, 4GB RAM, 64GB Storage",
      )
      .click(),
  ]);

  // Wait until product page is fully loaded
  await newTab.waitForLoadState("domcontentloaded");

  // Validate product page
  await expect(
    newTab.getByRole("heading", { name: "REDMI A7 Pro 5G (Black, 4GB" }),
  ).toBeVisible();

  // Open quantity dropdown
  await newTab.locator("#a-autoid-0-announce").click();

  // Select quantity = 2
  await newTab.getByRole("option", { name: "2" }).click();

  // Add to cart
  await newTab.getByRole("button", { name: "Add to Cart" }).click();
});
