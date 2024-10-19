const {test,expect}=require('@playwright/test');

test('input box',async({page}) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

   const element = await page.locator('#colors');

   // multiple selection for red, green and blue options
   await element.selectOption(['Red', 'Green', 'Blue']);

   await page.waitForTimeout(2000);

    
}) 