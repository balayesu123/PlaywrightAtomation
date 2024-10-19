import {test, expect} from '@playwright/test';

// to record the video set config file //video: 'retain-on-failure',

test('video record',async ({page}) => {
    
    await page.goto('https://demoblaze.com/');
    //login
    await page.locator('#login2').click();
    await page.locator('#loginusername').fill('pavanol');
    await page.locator('#loginpassword').fill('test@123');
    await page.locator("//button[normalize-space()='Log in']").click();

    //validation
    await expect(page.locator('#logout')).toBeVisible();

})
