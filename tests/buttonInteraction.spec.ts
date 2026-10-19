import { test, expect } from '@playwright/test';
import { ButtonClick } from '../pages/btnInteractionpage';

test('Button clicking', async ({ page }) => {
  await page.goto('https://www.sreenidhirajakrishnan.com/practice');

  let objBtn=new ButtonClick(page);
  await objBtn.singleClick();
  await expect(page.locator(objBtn.singleClickResult)).toContainText('Single clicked!');

  await objBtn.Doubleclick();
  await expect(page.locator(objBtn.doubleClickResult)).toContainText('Double clicked!');

  await objBtn.Rightclick();
  await expect(page.locator(objBtn.rightClickResult)).toContainText('Right click captured ')


 
});
