import { test, expect } from '@playwright/test';
import { DragAndDrop } from '../pages/dragAnddropPage';

test('Drag and Drop test', async ({ page }) => {
  await page.goto('https://www.sreenidhirajakrishnan.com/practice');

  const dd=new DragAndDrop(page);
await  dd.dragdrop();
await expect(page.locator(dd.dropResult)).toContainText('Item dropped successfully');

  
});
