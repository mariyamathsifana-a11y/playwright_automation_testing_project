import { Page } from "@playwright/test";

export class promptt{
    constructor(private page:Page){}

    //locators
    promptalert='#promptBtn';

    async promptalertt(text:string){
        await this.page.once('dialog',dialog=>dialog.accept(text));
        await this.page.locator(this.promptalert).click();

    }
}