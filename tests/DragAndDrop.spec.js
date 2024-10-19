const {test, expect} = require('@playwright/test');

test('Drag and Drop',async({page}) => {

    await page.goto('http://dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html')

    const dragRome = await page.locator('#box6');
    const dropItaly = await page.locator('#box106');

    await dragRome.dragTo(dropItaly);

    await page.waitForTimeout(5000);

})