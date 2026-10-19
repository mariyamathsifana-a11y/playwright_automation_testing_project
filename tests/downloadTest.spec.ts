import { test, expect } from '@playwright/test';
import { Download } from '../pages/DownloadPage';

test('Download Testing', async ({ page }) => {
  await page.goto('https://www.sreenidhirajakrishnan.com/practice');


  const downloadpage=new Download(page);

  const d=await downloadpage.triggerDownload();

  await expect(d.suggestedFilename()).toBe('practice.txt');

  
});
