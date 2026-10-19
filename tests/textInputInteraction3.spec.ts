import { test, expect } from '@playwright/test';
import { BasicForm } from '../pages/textInput3page';


test('Basic element Filling', async ({ page }) => {
  await page.goto('https://www.sreenidhirajakrishnan.com/practice');

 let objfill=new BasicForm(page);
  await objfill.Fillform('sifa','sifa123','sifa@gmail.com','1234567890','Automation tester');

  await objfill.submitForm();
  await expect(page.locator(objfill.formResult)).toContainText('Form submitted successfully');

  await objfill.ResetButton();
  await expect(page.locator(objfill.formResult)).toContainText('Form was reset');
});
