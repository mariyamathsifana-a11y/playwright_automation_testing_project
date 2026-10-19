import { test, expect } from '@playwright/test';
import { ScrollTesting } from '../pages/scrollTesting';

test('Scroll Testing', async ({ page }) => {
  await page.goto('https://www.sreenidhirajakrishnan.com/practice');

  const obj=new ScrollTesting(page);
  await obj.scrollElement();

  await expect(page.locator(obj.scrollTarget)).toBeVisible();

  
});
