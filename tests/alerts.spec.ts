import { test, expect } from '@playwright/test';
import { Alert } from '../pages/automation';
import { Alerts } from '../pages/alertsPage';

test('Alert page', async ({ page }) => {
  await page.goto('https://www.sreenidhirajakrishnan.com/practice');

  

let alr=new Alerts(page);
 await alr.showAlert();

 await alr.confirmAlert(true);
 await expect(page.locator( alr.alertResult )).toContainText('Confirm result: OK');
  
 await alr.promptAlert('nusra');
 await expect(page.locator(alr.alertResult)).toContainText('Prompt value: nusra');
 });