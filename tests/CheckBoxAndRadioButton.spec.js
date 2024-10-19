import {test, expect} from '@playwright/test';

// ----------------------------*******RadioButton*****-------------------------

test('Radio button', async({page}) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

   await page.locator('#male').check();
   await expect(await page.locator('#male')).toBeChecked();
    let status = await page.locator('#male').isChecked();
    console.log("status: ",status);

   // await expect(await page.locator('#female').isChecked()).toBeFalsy();

   if(status === true)
   {
      await page.locator('#female').check();
   }
   
   await page.waitForTimeout(3000);

})

   

   // ----------------------------*******CheckBox*****-------------------------

   test('Checkbox', async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');

    let chkdays = await page.$$("//input[@class='form-check-input' and @type='checkbox']/following-sibling::label");

   //select required check box
   for(let day of chkdays)
   {
     let  days = await day.textContent();
      if((days.includes('Monday'))||(days.includes('Wednesday'))||(days.includes('Friday')))
         {
            await day.check();
         }
   }

   await page.waitForTimeout(3000);
   //Unselect selected  check boxs

   for(let day of chkdays)
   {
      if(await day.isChecked())
      {
         await day.uncheck();
      }
      else{
         await day.check();
      }
          
   }

    await page.waitForTimeout(3000);


   })


   