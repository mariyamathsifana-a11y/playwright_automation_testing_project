import { test, expect } from '@playwright/test';
import { keyBoardActions } from '../pages/KeyboardAction';

test('KeyBoard Action', async ({ page }) => {
  await page.goto('https://www.sreenidhirajakrishnan.com/practice');

  let kbA=new keyBoardActions(page);
  await kbA.TypeAndPress("hello 123");


});
