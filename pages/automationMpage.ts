import { Page } from "@playwright/test";

export class MultiFileUpload {

    constructor(private page: Page) {}

    // Locator
    fileInput = '#multipleFilesInput';

    async uploadMultipleFiles(filepaths: string[]) {
        await this.page.locator(this.fileInput).setInputFiles(filepaths);
    }
}