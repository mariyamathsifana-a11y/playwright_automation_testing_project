import { Page } from "@playwright/test";

export class FillTheForm2{

    nameInputField;

    constructor(private page:Page){

        this.nameInputField=this.page.getByPlaceholder('Enter Name');
    }

    async formFill2(){
        await this.nameInputField.fill('sifa');
    }
}