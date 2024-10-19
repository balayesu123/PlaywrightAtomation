// "const" is avariable
// "{test, expect}"  are packages from "@playwright/test" module

// Importing the Playwright testing library
const {test,expect}=require('@playwright/test');

// Define a test suite
test('verify title', async({page}) =>{
    
// Navigate to the homepage
await page.goto('https://demoblaze.com/index.html');

// print title of the page
const pageTitle = await page.title();
console.log("Page Title is : "+pageTitle);

// Check that the title of the page is correct
await expect(page).toHaveTitle('STORE');

// print page url
const pageURL = page.url();
console.log("page URL: ", pageURL)

// Check that the page URL is correct
await expect(page).toHaveURL('https://demoblaze.com/index.html');

// close the browser
await page.close();

})