import { test, expect } from '@playwright/test';
import { FileUpload } from '../pages/FileUploadpage';

test('File Upload Test', async ({ page }) => {
  await page.goto('https://www.sreenidhirajakrishnan.com/practice');

  const fi=new FileUpload(page);
  
   const filepath='C:\\Users\\Siraj\\Downloads\\Sifa\\helo.txt';
  
  await fi.uploadFile(filepath);
  await expect(page.locator(fi.uploadResult)).toContainText('helo.txt');



  
});
