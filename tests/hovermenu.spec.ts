import { test, expect } from '@playwright/test';
import { HoverMenu } from '../pages/hovermenuPage';

test('Hover menu Test', async ({ page }) => {
  await page.goto('https://www.sreenidhirajakrishnan.com/practice');

  let hvr=new HoverMenu(page);
  hvr.hoverOnBtn();
  await expect(page.locator(hvr.hoverSubmenu)).toBeVisible();

  
});
