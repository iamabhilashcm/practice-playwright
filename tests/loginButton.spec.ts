import { test, expect } from "@playwright/test";

test("login button color validation", async ({ page }) => {
  await page.goto("https://practice.qabrains.com/");

  //validate Button color
  const loginButton = page.getByRole("button", { name: "login" });
  await expect(loginButton).toHaveCSS("background-color", "rgb(0, 0, 0)");

  //Hover on loginButton
  await loginButton.hover();

  //validating th hover color
  await expect(loginButton).toHaveCSS("background-color", "rgb(8, 30, 190)");

  //filling User name / email
  await page
    .getByPlaceholder("eg. user@user.com")
    .fill("qa_testers@qabrains.com");

  //filling password
  await page.locator("#password").fill("Password123");
  await loginButton.click();

  //getting toaster message(added multiple class)
  const toastMessage = page.locator(".title.text-black.text-md");

  //validating toaster message
  await expect(toastMessage).toHaveText("Login Successful");

  //closing the toaster
  await page.locator("#remove-toaster").click();
  await page.waitForTimeout(2000);
});

test("login button color", async ({ page }) => {
  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
  );
  await page.waitForLoadState();

  const OrangeLoginBtn = page.getByRole("button", { name: "login" });
  await expect(OrangeLoginBtn).toHaveCSS(
    "background-color",
    "rgb(255, 123, 29)",
  );
});
