import { Page } from "@playwright/test";

export class Alert{

    constructor(private page:Page){}

    //locators
    // Alert Triggers (selectors for buttons on the page)
    alertBtn = '#alertBtn';
    confirmBtn = '#confirmBtn';
    promptBtn = '#promptBtn';
    // Alert Result Display (selector for the result text on the page)
    alertResult = '#demo';

    async simpleAlert(){
        await this.page.once('dialog',dialog=>dialog.accept());

        await this.page.locator(this.alertBtn).click();
    }

    async confirmAlert(accept:boolean){
        await this.page.once('dialog',dialog=>accept? dialog.accept() : dialog.dismiss());
        await this.page.locator(this.confirmBtn).click();
    }
    async promptAlert(text:string){
        await this.page.once('dialog',dialog=>dialog.accept(text) );
        await this.page.locator(this.promptBtn).click();

}}