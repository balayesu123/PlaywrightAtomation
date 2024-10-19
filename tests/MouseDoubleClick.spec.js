const {test, expect} = require('@playwright/test');

test('Mouse Double Click', async({page}) => {

    await page.goto("https://testautomationpractice.blogspot.com/");

    const btnCopyText = await page.locator('//button[normalize-space()="Copy Text"]');

    // Double Click
    await btnCopyText.dblclick();

    const text = await page.locator('#field2');

    await expect(text).toHaveValue('Hello World!')

    await page.waitForTimeout(5000);


})