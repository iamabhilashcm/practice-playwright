import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
  );
});

test("HRM demo site", async ({ page }) => {
  //Filling the user name and password
  await page.getByPlaceholder("Username").fill("Admin");
  await page.getByPlaceholder("Password").fill("admin123");

  //added wait here to avoid flakyness due to load the image
  await page.waitForLoadState();

  //click on the login button
  await page.getByRole("button", { name: "login" }).click();

  await page.waitForLoadState();

  //validating the partial url
  await expect(page).toHaveURL(/dashboard/);
  await page.waitForLoadState();

  // cliking on the lef nave admin menu
  await page.getByRole("link", { name: "Admin" }).click();

  // Validating bedcrumb
  await expect(
    page.getByRole("heading", { name: "/ User Management" }),
  ).toBeVisible();

  //validating the redirected full URL
  await expect(page).toHaveURL(
    "https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers",
  );
});
