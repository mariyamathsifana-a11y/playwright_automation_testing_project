import { Page } from "@playwright/test";

export class BasicForm{

    constructor(private page:Page){}

    //Locators
    usernameInput = '[data-testid="text-input"]';
    passwordInput = '[data-testid="password-input"]';
    emailInput = '[data-testid="email-input"]';
    phoneInput = '[data-testid="phone-input"]';
    bioTextarea = '[data-testid="textarea-input"]';

    submitButton = '[data-testid="form-submit"]';
    resetButton = '[data-testid="form-reset"]';

    formResult = '[data-testid="form-result"]';


    async Fillform(name:string,pass:string,email:string,phone:string,bio:string){

       await this.page.locator(this.usernameInput).fill(name);
       await this.page.locator(this.passwordInput).fill(pass);
       await this.page.locator(this.emailInput).fill(email);
       await this.page.locator(this.phoneInput).fill(phone);
       await this.page.locator(this.bioTextarea).fill(bio);

    }

    async submitForm(){
        await this.page.locator(this.submitButton).click();
    }
    async ResetButton(){
        await this.page.locator(this.resetButton).click();
    }
     
}