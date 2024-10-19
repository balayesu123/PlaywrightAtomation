// Hooks

/* beforeEach: This hook is executed before each individual test.
   afterEach: This hook is executed after each individual test.

   beforeAll: This hook is executed once before any of the tests start running.
   afterAll: This hook is executed once after all the tests have been run.
*/

import {test, expect} from '@playwright/test';

test('Home page Test', async({page}) => {

    await page.goto('https://demoblaze.com/');

    //login
    await page.locator('#login2').click();
    await page.locator('#loginusername').fill('pavanol');
    await page.locator('#loginpassword').fill('test@123');
    await page.locator("//button[normalize-space()='Log in']").click();

    //home page product varification
    const products = await page.$$('.hrefch');
    await expect(products).toHaveLength(9);

    //logout
    await page.locator('#logout2').click();

})

test('Add Product to cart', async({page}) => {

    await page.goto('https://demoblaze.com/');

    //login
    await page.locator('#login2').click();
    await page.locator('#loginusername').fill('pavanol');
    await page.locator('#loginpassword').fill('test@123');
    await page.locator("//button[normalize-space()='Log in']").click();

    //Add Product to cart
    await page.locator('//*[@id="tbodyid"]/div[1]/div/div/h4/a').click();
    await page.locator("//a[text()='Add to cart']").click();

    page.on('dialog', async dialog => {
        await expect(dialog.message()).toContain('Product added.')
        await dialog.accept();
    })


    //logout
    await page.locator('#logout2').click();

})