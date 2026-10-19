import { test, expect } from '@playwright/test';
import { MultiFileUpload } from '../pages/automationMpage';

test('Multiple file', async ({ page }) => {
  await page.goto('https://www.sreenidhirajakrishnan.com/practice');

 await page.goto('https://testautomationpractice.blogspot.com/');

    const fi = new MultiFileUpload(page);

    const filepaths = [
        'C:\\Users\\Siraj\\Downloads\\Sifa\\helo.txt',
        'C:\\Users\\Siraj\\Downloads\\Sifa\\hello1.txt'
    ];

    await fi.uploadMultipleFiles(filepaths);
});

