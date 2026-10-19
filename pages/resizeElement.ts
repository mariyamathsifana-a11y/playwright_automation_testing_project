import { Page } from "@playwright/test";

export class ResizeElementPage{

    constructor(private page:Page){}

    //locators
    // Locator for the resizable box element
    resizableBox = '[data-testid="resizable-box"]';

    async getBoxDimentions(){

        return await this.page.locator(this.resizableBox).boundingBox();

    }
    async resizeBox(increasewidth:number,increaseHeight:number){
        const box=await this.getBoxDimentions();

        if(box){
            
            const handlex=box.x+box.width-2;
            const handley=box.y+box.height-2;

            await this.page.mouse.move(handlex,handley);

            await this.page.mouse.down();

            await this.page.mouse.move(handlex+increasewidth,handley+increaseHeight);

            await this.page.mouse.up();

            await this.page.pause();
        }
        
    }
}