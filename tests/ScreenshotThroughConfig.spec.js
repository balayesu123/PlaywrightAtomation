const {test, expect} = require('@playwright/test')

// set the screenshot 'on' in playwright.config.js file

test('screenshot of visible page', async({page}) => {

    await page.goto('https://testautomationpractice.blogspot.com/')
    await page.locator('#name').fill('Balayesu')
    

})
