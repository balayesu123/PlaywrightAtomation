const {test, expect} = require('@playwright/test')

test('screenshot of visible page', async({page}) => {

    await page.goto('https://demo.opencart.com/')
    await page.screenshot({path:'tests/Screenshots/'+Date.now()+'Opencart.png'})

})

test('Full page screenshot', async({page}) => {

    await page.goto('https://demo.opencart.com/')
    await page.waitForTimeout(5000)
    await page.screenshot({path:'tests/Screenshots/'+Date.now()+'FullPageOpencart.png', fullPage:true})

})

test.only('Element screenshot', async({page}) => {

    await page.goto('https://demo.opencart.com/')
    await page.waitForTimeout(5000)
    await page.locator('//*[@id="content"]/div[2]/div[1]/div').screenshot({path:'tests/Screenshots/'+Date.now()+'MackBook.png'})

})