const {test, expect, chromium} = require('@playwright/test')

test.only('Open New Pages seperatly', async() => {

    // this will help to lanch the chromium browser
    const browser=await chromium.launch();

    // creating  browser new context, which will help to create new pages
    const context=await browser.newContext();

    // creating new pages with help of contex reference variable we can create multiple incognoto pages 
    //(incognito means there is no relation or not share any cookies/chache to another page)

    // page1 / window1 / tab1
    const page1=await context.newPage();
    await page1.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await expect(page1).toHaveTitle('OrangeHRM');

    // page2 / window2 / tab2
    const page2=await context.newPage();
    await page2.goto('https://www.orangehrm.com/')
    await expect(page2).toHaveTitle('Human Resources Management Software | OrangeHRM');

    // Get pages of a browser context
    const allPages = context.pages();
    console.log("Number of page created: ",allPages.length);

    await context.close();
    await browser.close();

})

test('Open Multiple pages and Interact', async() => {

    // this will help to lanch the chromium browser
    const browser=await chromium.launch();

    // creating  browser new context, which will help to create new pages
    const context=await browser.newContext();

    // creating new pages with help of contex reference variable we can create multiple incognoto pages 
    //(incognito means there is no relation or not share any cookies/chache to another page)

    // page1 / window1 / tab1
    const page1=await context.newPage();
    await page1.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await expect(page1).toHaveTitle('OrangeHRM');

    // Start waiting for new page before clicking. Note no await.
    const pagePromise = context.waitForEvent('page')
    await page1.locator("//a[normalize-space()='OrangeHRM, Inc']").click();

    //providing relation between current page and  newly opened page
    const  newPage = await pagePromise;

    // Interact with the new page normally.
    await expect(newPage).toHaveTitle('Human Resources Management Software | OrangeHRM');

    await context.close();
    await browser.close();

})