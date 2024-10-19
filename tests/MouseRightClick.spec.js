const {test, expect} = require('@playwright/test');

test('Mouse Right Click', async({page}) => {

    await page.goto("https://swisnl.github.io/jQuery-contextMenu/demo.html");

    const rightClickButton = await page.locator("//span[normalize-space()='right click me']");

    await rightClickButton.click({button: "right"});

    await page.waitForTimeout(5000);
})