import {Page} from "@playwright/test"
import { TestData } from "../testData/testData";

export class FillTheForm{

    
    constructor(private page:Page){}

    //Locators
     nameInputField='#name';
     emailInputField='#email';
     phoneInputField='#phone';
     addressInputField='#textarea';

     async FormEnterAction(){

        await this.page.locator(this.nameInputField).fill(TestData.name);
        await this.page.locator(this.emailInputField).fill(TestData.email);
        await this .page.locator(this.phoneInputField).fill(TestData.phone);
        await this .page.locator(this.addressInputField).fill(TestData.address);


     }
}

