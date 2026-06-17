import { expect, Page } from "@playwright/test";

export class NavigationPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async formlayoutPage() {
    await this.page.getByText("Forms").click();
    await this.page.getByText("Form Layouts").click();
    await this.page.waitForLoadState();
    await expect(this.page).toHaveURL(
      "http://localhost:4200/pages/forms/layouts",
    );
  }
}
