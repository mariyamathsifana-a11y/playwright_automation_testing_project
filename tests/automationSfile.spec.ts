
import { test, expect } from '@playwright/test';
import { FileUploadd } from '../pages/automationSfile';

test('single file', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');

  const fi=new FileUploadd(page);
    
     const filepath='C:\\Users\\Siraj\\Downloads\\Sifa\\helo.txt';
    
    await fi.uploadFile(filepath);
    

  
});
