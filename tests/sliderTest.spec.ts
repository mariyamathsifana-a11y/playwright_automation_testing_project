import { test, expect } from '@playwright/test';
import { slider } from '../pages/sliderPage';
import { TestData } from '../testData/testData';

test('has title', async ({ page }) => {
  await page.goto(TestData.url);

  const sl=new slider(page);
  await sl.moveSliderToValue('80');

 
});
