import { Page } from "@playwright/test";

export class FileUploadd{

    constructor(private page:Page){}

    //locators

    fileInput = '#singleFileInput'
    

    async uploadFile(filepath:string){
        await this.page.locator(this.fileInput).setInputFiles(filepath);
    }
}