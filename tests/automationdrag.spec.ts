import { test, expect } from '@playwright/test';

import { DragAndDropp } from '../pages/automationdrag';

test('Automation drag', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');

  const dd=new DragAndDropp(page);
  await  dd.dragdrop();
  
});
