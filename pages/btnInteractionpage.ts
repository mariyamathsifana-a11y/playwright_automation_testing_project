import { Page } from "@playwright/test";

export class ButtonClick{

    constructor(private page:Page){}

    //locators
    //Locator of the single click button and expected
 singleClickBtn = '[data-testid="single-click-btn"]';
 singleClickResult = '[data-testid="single-click-result"]';


 //Locator of the db button and expected
 doubleClickBtn = '[data-testid="double-click-btn"]';
 doubleClickResult = '[data-testid="double-click-result"]';

 //Locator of the right click and expected
 rightClickBtn = '[data-testid="right-click-btn"]';
 rightClickResult = '[data-testid="right-click-result"]';


 async singleClick(){
    await this.page.locator(this.singleClickBtn).click();

 
}

async Doubleclick(){
    await this.page.locator(this.doubleClickBtn).dblclick();
    
}

async Rightclick(){
    await this.page.locator(this.rightClickBtn).click({button:'right'});
    await this.page.pause();
}
}