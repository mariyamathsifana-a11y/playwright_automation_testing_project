import { test, expect } from '@playwright/test';
import { datepicking } from '../pages/datePickerPage';

test('Date picking Test', async ({ page }) => {
  await page.goto('https://www.sreenidhirajakrishnan.com/practice');

  let datepick=new datepicking(page);
  await datepick.selectDate('2025-05-23');
  await expect(page.locator(datepick.dateResult)).toContainText('2025-05-23');
});
