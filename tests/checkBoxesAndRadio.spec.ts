import { test, expect } from '@playwright/test';
import { CheckBoxRadio } from '../pages/checkBoxRadioPage';

test('CheckBox & Radio', async ({ page }) => {
  await page.goto('https://www.sreenidhirajakrishnan.com/practice');

  let objbox=new CheckBoxRadio(page);
  await objbox.CheckBox();
  await objbox.RadioButton();
  await objbox.revealBox();

  
});
