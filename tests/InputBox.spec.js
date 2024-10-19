const {test,expect}=require('@playwright/test');

test('input box',async({page}) => {

    await page.waitForTimeout(2000);

    await page.waitForSelector('locator');

    await page.waitForURL('http://url');

}) 