const {test, expect} = require('@playwright/test');

test('Keyboard Actions', async({page}) => {

    await page.goto('https://gotranscript.com/text-compare')

    await page.locator('[name="text1"]').fill('Welcome to Automation')


    // contro + A
    await page.keyboard.press('Control+A')

    // contro + C
    await page.keyboard.press('Control+C')

    // Tab press
    await page.keyboard.down('Tab')

    // Tab release
    await page.keyboard.up('Tab')

    // contro + V
    await page.keyboard.press('Control+V')


    await page.waitForTimeout(5000)


 

})