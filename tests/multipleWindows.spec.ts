import { test, expect } from '@playwright/test';
import { windowHandle } from '../pages/multipleWindow';

test('multiple window', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');

  const mw=new windowHandle(page);
 await  mw.handlewindow();



  
});
