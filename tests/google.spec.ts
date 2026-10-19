import { test, expect } from '@playwright/test';

test('open google test demo', async ({ page }) => {
  await page.goto('https://www.google.com/');

  await expect(page).toHaveTitle(/Google/);

  
});

test('open amazon test demo', async ({ page }) => {
  await page.goto('https://www.amazon.in/');

  await expect(page).toHaveTitle(/Amazon/);

  
});