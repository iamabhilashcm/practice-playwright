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

test("fluke site", async ({ page }) => {
  await page.goto("https://www.fluke.com/en-us");
  await page.waitForLoadState();
});

//01 june, revising what i know
test("HRM demo site", async ({ page }) => {
  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
  );
  await page.getByPlaceholder("Username").fill("Admin");
  await page.getByPlaceholder("Password").fill("admin123");
  await page.getByRole("button", { name: "login" }).click();
  await page.waitForLoadState();
  await expect(page.getByText("Dashoboard")).toBeVisible();
});

test("demosite", async ({ page }) => {
  await page.goto("https://ultimateqa.com/automation?");

  //clickin on Fake Landing Page hyper link or point
  await page.getByRole("link", { name: "Fake Landing Page" }).click();

  //adding wait here
  await page.waitForLoadState();

  //validating the URL
  await expect(page).toHaveURL("https://ultimateqa.com/fake-landing-page");

  //validating by text
  await expect(
    page.getByText("Learn to Code Websites, Apps & Games"),
  ).toBeVisible();
});
