import { Page } from "@playwright/test";

export class DragAndDropp{

    constructor(private page:Page){}

    //locators
    draggablee = '#draggable';
    dropSpott = '#droppable';
    

    async dragdrop(){
        await this.page.locator(this.draggablee).dragTo(this.page.locator(this.dropSpott));
    }
}