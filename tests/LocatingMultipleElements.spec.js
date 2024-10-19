// Importing the Playwright testing library
const {test,expect}=require('@playwright/test');

// Define a test suite
test('locate multiple elements', async({page}) =>{

    await page.goto('https://demoblaze.com/index.html');

    // to get multiple elements use $$
    /*
    const links = await page.$$('a');

    for(const link of links)
    {
        const linktext = await link.textContent();
        console.log(linktext);
    }
        */


    //wait for element
    await page.waitForSelector("//div[@id='tbodyid']//div/div/div/h4/a");
    const products = await page.$$("//div[@id='tbodyid']//div/div/div/h4/a");

    for(const product of products)
        {
            const producName = await product.textContent();
            console.log(producName);
        }
})