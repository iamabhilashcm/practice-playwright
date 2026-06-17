import { test, expect } from "@playwright/test";
import { LoginPage } from "../../page-Object/LoginPage";

test("SauceDemo Login Tests", () => {
  test("Valid user should login and see Products page", async ({ page }) => {
    const loginPage = new LoginPage(page);

    // Navigate to site
    await loginPage.goto();

    // Perform login
    await loginPage.login("standard_user", "secret_sauce");

    // Assertion: "Products" title should be visible
    const productsTitle = page.locator(".title");

    await expect(productsTitle).toBeVisible();
    await expect(productsTitle).toHaveText("Products");
  });
});
