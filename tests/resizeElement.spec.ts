import { test, expect } from '@playwright/test';
import { ResizeElementPage } from '../pages/resizeElement';

test('Resize element', async ({ page }) => {
  await page.goto('https://www.sreenidhirajakrishnan.com/practice');

  const obj=new ResizeElementPage(page);
  await obj.resizeBox(50,50);



 });
