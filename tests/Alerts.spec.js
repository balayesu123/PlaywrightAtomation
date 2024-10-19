const {test, expect} = require('@playwright/test');

test.skip('Alert windows', async({page}) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    // Enabling Alert window Handler
    page.on('dialog', async dialog => {
        expect(dialog.type()).toContain('alert');
        expect(dialog.message()).toContain('I am an alert box!');
        await dialog.accept();
      });

      await page.locator("//button[text()='Alert']").click();
      await page.waitForTimeout(5000);

});

test.skip('Confirm Box windows', async({page}) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    // Enabling Alert window Handler
    page.on('dialog', async dialog => {
        expect(dialog.type()).toContain('confirm');
        expect(dialog.message()).toContain('Press a button!');
        await dialog.accept();
      });

      await page.locator("//button[text()='Confirm Box']").click();
      await expect(page.locator('#demo')).toHaveText('You pressed OK!');
      await page.waitForTimeout(5000);

});

test('Prompt windows', async({page}) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    // Enabling Alert window Handler
    page.on('dialog', async dialog => {
        expect(dialog.type()).toContain('prompt');
        expect(dialog.message()).toContain('Please enter your name:');
        expect(dialog.defaultValue()).toContain('Harry Potter');
        await dialog.accept('Bala');
      });

      await page.locator("//button[text()='Prompt']").click();
      await page.waitForTimeout(5000);
      await expect(page.locator('#demo')).toHaveText('Hello Bala! How are you today?');
      

});