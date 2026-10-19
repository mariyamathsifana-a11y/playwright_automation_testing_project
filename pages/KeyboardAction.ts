import { Page } from "@playwright/test";

export class keyBoardActions{

    constructor(private page:Page){}

    //locators
    // Keyboard Input
    keyboardInput = '[data-testid="keyboard-input"]';

    // Keyboard Input Expected Result & Counter Result
    keyboardResult = '[data-testid="keyboard-result"]';
    arrowCounter = '[data-testid="arrow-counter"]';

    async TypeAndPress(text:string,delay:number=300){
        await this.page.locator(this.keyboardInput).pressSequentially(text,{delay});

        await this.page.locator(this.keyboardInput).press('ArrowUp');
    }
}