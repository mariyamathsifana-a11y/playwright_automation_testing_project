import { test, expect } from '@playwright/test';
import { FillTheForm } from '../pages/textInputPage';
import { TestData } from '../testData/testData';

test('Filling the Form', async ({ page }) => {
  await page.goto(TestData.url);


  let objFillForm=new FillTheForm(page);
  await objFillForm.FormEnterAction();


  
});
