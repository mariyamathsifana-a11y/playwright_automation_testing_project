import { Page } from "@playwright/test";

export class windowHandle {

    constructor(private page: Page) {}

    // Locators
    link = '//*[@id="Attribution1"]/div[1]/a[1]';
    dropdown = "//button[contains(., 'Age')]";

    async handlewindow() {

        // Wait for a new page
        const newPagePromise =
            this.page.context().waitForEvent('page');

        // Click the link
        await this.page.locator(this.link).click();

        // Get the new page
        const newPage = await newPagePromise;

        // Wait for the new page to load
        await newPage.waitForLoadState('domcontentloaded');

        // Find the Age dropdown in the new page
        const dropdown = newPage.locator(this.dropdown);

        // Click the Age dropdown
        await dropdown.click();
    }
}