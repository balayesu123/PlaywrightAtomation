import {test, expect} from '@playwright/test';


// to open trace file use command "npx playwright show-trace path/to/trace.zip"
test('video record',async ({page}) => {
    
    await page.goto('https://demoblaze.com/');
    //login
    await page.locator('#login2').click();
    await page.locator('#loginusername').fill('pavanol');
    await page.locator('#loginpassword').fill('test@123');
    await page.locator("//button[normalize-space()='Log in']").click();

    //validation
    await expect(page.locator('#logout2')).toBeVisible();

})