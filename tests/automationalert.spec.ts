import { test, expect } from '@playwright/test';
import { Alert } from '../pages/automation';

test('Alert page', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');

  let alr=new Alert(page);
 await alr.simpleAlert();

 await alr.confirmAlert(true);
 await expect(page.locator( alr.alertResult )).toContainText('You pressed OK!');
  
 await alr.promptAlert('nusra');
 await expect(page.locator(alr.alertResult)).toContainText('Hello nusra! How are you today?');
 });
