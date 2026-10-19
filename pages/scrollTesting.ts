import { Page } from "@playwright/test";

export class ScrollTesting{

    constructor(private page:Page){}

    //locators
    scrollTarget = '[data-testid="scroll-target"]';

    async scrollElement(){
      await this.page.locator(this.scrollTarget).scrollIntoViewIfNeeded();

      await this.page.pause();
    }
}