const {test, expect} = require('@playwright/test');

test('Mouse Hover', async({page}) => {

    await page.goto("https://demo.opencart.com/");

    const desktops = await page.locator("//a[normalize-space()='Desktops']");
    const mac = await page.locator("//a[normalize-space()='Mac (1)']");

    await desktops.hover();
    await mac.hover();
    
    await page.waitForTimeout(3000);



});