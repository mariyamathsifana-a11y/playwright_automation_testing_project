import { test, expect } from '@playwright/test';
import { FillTheForm } from '../pages/textInputPage';
import { FillTheForm2 } from '../pages/textInputPage2';

test('Filling the Form2', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');

  let objf2=new FillTheForm2(page);
  await objf2.formFill2();


  
  
});
