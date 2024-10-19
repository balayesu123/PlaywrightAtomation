
//const{test, expect} = require('@playwright/test');
import {test, expect} from '@playwright/test';

test('enter text', async({page}) => {

    await page.goto('https://demoqa.com/');
    await page.locator("//h5[text()='Elements']").click();
    await page.locator("//span[normalize-space()='Text Box']").click();
    await page.locator("#userName").fill("bala");
    await page.locator("#userEmail").fill("bala@gmail.com");
    await page.locator("#currentAddress").fill("HYD");
    await page.locator("#permanentAddress").fill("AP");

    await page.waitForTimeout(3000);

    await expect(page).toHaveTitle('DEMOQA');

})

test('Alert', async({page}) => {

    await page.goto('https://demoqa.com/');
    await page.locator("//h5[text()='Alerts, Frame & Windows']").click();
    await page.locator("//span[text()='Alerts']").click();

    page.on('dialog', async dialog => {

        await expect(dialog.message()).toContain('You clicked a button');
        await dialog.accept();
    })

    await page.locator("#alertButton").click();

    await page.waitForTimeout(3000);

    
})


test('API Get Request', async({request}) => {

    const response = await request.get('https://demoqa.com/BookStore/v1/Books');
    console.log(await response.json());
    expect(response.status()).toBe(200);

    expect(response.statusText()).toBe('OK');
  
})

test.only('post request', async({request}) => {

    const response = await request.post('https://demoqa.com/BookStore/v1/Books', 
        {
            data : {
                      "userId": "PY123",
                      "collectionOfIsbns": [
                                             {
                                               "isbn": "Yes"
                                             }
                                            ]
                   },
            headers : {
                        "Accept": "Application/json"
                      }      

        });

        let resposeBody = await response.json();
        console.log(resposeBody);

        expect(response.status()).toBe(201);

        
        
});
