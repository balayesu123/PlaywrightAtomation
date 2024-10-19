import { test, expect } from '@playwright/test';

test('Assersions', async ({ page }) => {
  await page.goto('https://demo.nopcommerce.com/register?returnUrl=%2F');

// await expect(page).toHaveURL()         page url
  await expect(page).toHaveURL('https://demo.nopcommerce.com/register?returnUrl=%2F');

// await expect(page).toHaveTitle()         page title
  await expect(page).toHaveTitle('nopCommerce demo store. Register');

  // expect(logoElement).toBeVisible()          control is enable
  const logoElement=await page.locator('.header-logo');
  await expect(logoElement).toBeVisible();

  // expect(searchstroreBox).toBeEnabled()
  const searchstroreBox=await page.locator('#small-searchterms');
  await expect(searchstroreBox).toBeEnabled();

  //radio button
  const maleRadioButton=await page.locator('#gender-male');
  await maleRadioButton.click();
  await expect(maleRadioButton).toBeChecked();

  // check box
  const newslettercheckbox=await page.locator('#Newsletter');
  await expect(newslettercheckbox).toBeChecked();

  //element has attribute
  const regButton=await page.locator('#register-button');
  await expect(regButton).toHaveAttribute('type','submit');

  // element matches text
  await expect(await page.locator('.page-title h1')).toHaveText('Register');

  // element contains text (partial text)
  await expect(await page.locator('.page-title h1')).toContainText('Reg');

  // input has avalue
   const emailInput=await page.locator('#Email');
   await emailInput.fill('test@demo.com');
   await expect(emailInput).toHaveValue('test@demo.com');

    //  list of elements have given value
    const options=await page.locator('//select[@name="DateOfBirthMonth"]/option');
    await expect(options).toHaveCount(13);




});