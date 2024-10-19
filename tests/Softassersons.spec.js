import { test, expect } from '@playwright/test';

test('Assersions', async ({ page }) => {
  await page.goto('https://demoblaze.com/index.html');

  //Hard assersion
//   await expect(page).toHaveTitle('STORE');
//   await expect(page).toHaveURL('https://demoblaze.com/index.html');
//   await expect(page.locator('.navbar-brand')).toBeVisible();


  //Soft assersion
  await expect.soft(page).toHaveTitle('STORE123');
  await expect.soft(page).toHaveURL('https://demoblaze.com/index.html');
  await expect.soft(page.locator('.navbar-brand')).toBeVisible();


});