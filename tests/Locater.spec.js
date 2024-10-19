// first way to import
// const {test, expect} = require('@playwright/test');

// 2nd way import

import {test, expect} from '@playwright/test';

test('locater', async ({page}) => {

    await page.goto('https://demoblaze.com/index.html');

    // click on login button using property

    // we can identify the elements by locator usig two ways

   // await page.locator('id=login2').click();  // 1st way
    await page.click('id=login2');           // 2nd way

    // provide username - CSS
    await page.fill('#loginusername', 'pavanol');   // 1st way
   // await page.type('#loginusername', 'pavanol');  // 2nd way

   // provide password - CSS
   await page.fill('input[id="loginpassword"]','test@123')

   //clicl login button using xpath
   await page.click("//button[normalize-space()='Log in']");

   //verify the log out link present or not
   const logoutlink = await page.locator("//a[@id='logout2']");
   await expect(logoutlink).toBeVisible();

   //close browser
 await page.close();


})


