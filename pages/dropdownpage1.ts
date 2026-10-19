import { Page } from "@playwright/test";

export class DropDownClass{

    constructor(private page:Page){}

    //locators
     standardSelect = '[data-testid="standard-select"]';
     standardResult = '[data-testid="standard-select-result"]';

     multiSelect = '[data-testid="multi-select"]';
     multiResult = '[data-testid="multi-select-result"]';

     customToggle = '[data-testid="custom-dropdown-toggle"]';
     customOptionBeta = '[data-testid="custom-option-beta"]';
     customResult = '[data-testid="custom-dropdown-result"]';

     dynamicSelect = '[data-testid="dynamic-select"]';
     dynamicResult = '[data-testid="dynamic-select-result"]';

     async selectstdDrp(val:string){

        await this.page.locator(this.standardSelect).selectOption(val);

        
     }
     async selectmultiDrp(vals:string[]){

        await this.page.locator(this.multiSelect).selectOption(vals);

        
     }

     async selectToggle(){
        await this.page.locator(this.customToggle).click();
       await this.page.locator(this.customOptionBeta).click();
     }

     async selectpopulated(val:string){
        await this.page.locator(this.dynamicSelect).selectOption(val);
        await this.page.pause();
     }
}