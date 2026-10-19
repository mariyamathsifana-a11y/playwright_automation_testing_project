import { test,expect} from '@playwright/test';
import { DropDownClass } from '../pages/dropdownpage1';

test('DropDownstd', async ({ page }) => {
  await page.goto('https://www.sreenidhirajakrishnan.com/practice');

  let drp=new DropDownClass(page);

  await drp.selectstdDrp('green');
  await expect(page.locator(drp.standardResult)).toContainText('green');

  await drp.selectmultiDrp(['java','python']);
  await expect(page.locator(drp.multiResult)).toContainText('java');

  await drp.selectToggle();
  await expect(page.locator(drp.customResult)).toContainText('Beta');
  
  await drp.selectpopulated('Playwright');
  await expect(page.locator(drp.dynamicResult)).toContainText("Playwright");


 
});
