import { Page } from "@playwright/test";

export class CheckBoxRadio{

    constructor(private page:Page){}

    //Locators

    selectAllCheckbox = '[data-testid="select-all"]';

    radio2 = '[data-testid="radio-2"]';

    revealCheckbox = '[data-testid="reveal-checkbox"]';


    async CheckBox(){
        await this .page.locator(this.selectAllCheckbox).check();


    }
    async RadioButton(){
        await this.page.locator(this.radio2).check();
    }

    async revealBox(){
        await this.page.locator(this.revealCheckbox).check();
        await this.page.pause();
    }


}