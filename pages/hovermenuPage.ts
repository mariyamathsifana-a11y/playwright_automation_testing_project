import { Page } from "@playwright/test";

export class HoverMenu{

    constructor(private page:Page){}

    //locators
    //hoverTrigger

    hoverTrigger='[data-testid="hover-menu-trigger"]';

    //submenu and submenu Items/Expected Result
    hoverSubmenu='[data-testid="hover-submenu"]';


    async hoverOnBtn(){
        await this.page.locator(this.hoverTrigger).hover();

    }
}