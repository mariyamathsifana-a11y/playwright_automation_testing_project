import { test, expect } from '@playwright/test';
import { FlaskyTest } from '../pages/flaskyPage';

test('Random Fail', async ({ page }) => {
  await page.goto('https://www.sreenidhirajakrishnan.com/practice');

  let obj=new FlaskyTest(page);
  await obj.clickFlakyBtn();

  const resultTestPresent=await page.locator(obj.flakyResult).textContent();

  await expect(resultTestPresent).toMatch(/success|failure|error|Failed/i);

  
});
