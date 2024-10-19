const {test, expect} = require('@playwright/test');

test('Frames', async({page}) => {

    await page.goto('https://ui.vision/demo/webtest/frames/');

    //total frames

    const allframes = await page.frames();
    console.log('Total Number of frames: ',allframes.length);

    // const frame1 = page.frame({ url: 'https://ui.vision/demo/webtest/frames/frame_1.html' })

    // await frame1.fill("//input[@name='mytext1']", 'Hello');

    // await page.waitForTimeout(5000);

    //using framelocator

    const frame_1 = await page.frameLocator('//frame[@src="frame_1.html"]').locator("//input[@name='mytext1']");

    await frame_1.fill("frame1");

    await page.waitForTimeout(5000);


});