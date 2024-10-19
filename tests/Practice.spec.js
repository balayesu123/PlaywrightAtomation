import {test,expect} from '@playwright/test';

// ----------------------------******Dropdown******-------------------------

test('Dropdown Select tag', async({page}) => { 

      await page.goto('https://testautomationpractice.blogspot.com/');
   await expect(page).toHaveTitle('Automation Testing Practice');

  const option = await page.locator('#country').selectOption('Japan');

  console.log(option.toString());

  await expect(option.toString()).toEqual('japan');

  await expect(option.toString()).toBe('japan');
});



// ----------------------------************-------------------------

test('Dropdown Select tag amazon page', async({page}) => { 

      await page.goto('https://www.amazon.in/');
   await expect(page).toHaveTitle('Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in');

  const option = await page.locator('#searchDropdownBox').selectOption('Apps & Games');

  console.log(option.toString());  // return the 'value' attribue value (ex: <option value="search-alias=mobile-apps">Apps & Games</option>), not inner text

  await expect(option.toString()).toEqual('search-alias=mobile-apps');
});


  

// ----------------------------************-------------------------

test('Dropdown without Select tag', async({page}) => { 
   await page.goto('https://www.irctc.co.in/nget/train-search');

   await page.waitForTimeout(5000);

   await page.locator("//span[contains(@class,'ng-tns-c65-11 ui-dropdown-label')]").click();

     let ele = await page.$$("//ul[@role='listbox']/p-dropdownitem/li/span");


     console.log("Total count: ", ele.length)

     await expect(ele).toHaveLength(14);


     for(let el of ele)
     {

       const value = await el.textContent();

       if(value.includes('AC First Class (1A)')){

         await el.click();
         console.log(value);
         await expect(value.trim()).toEqual('AC First Class (1A)');
         break;

       }
     }
});

   

// ----------------------------******RadioButton******-------------------------

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
   
  
});



   // ----------------------------******Checkbox******-------------------------

   test('Check box', async({page}) => { 
      
   await page.goto('https://testautomationpractice.blogspot.com/');

  // await page.locator('#sunday').check();

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
    
    
   });

   

    // ----------------------------******Double click******-------------------------

    test('Double click', async({page}) => { 

      await page.goto('https://testautomationpractice.blogspot.com/');

      await page.locator("//button[normalize-space()='Copy Text']").dblclick();

      await page.waitForTimeout(2000);

      await expect(await page.locator('#field2')).toHaveValue('Hello World!');


    });

    // ----------------------------******Alerts******-------------------------

    test.only('Alerts', async({page}) => { 

      await page.goto('https://testautomationpractice.blogspot.com/');

      page.on('dialog', async dialog => {

         await dialog.accept();
      })

      await page.locator("//button[normalize-space()='Alert']").click();

     await page.waitForTimeout(3000);

     await page.locator('#name').fill('sample Alert');

     await page.waitForTimeout(3000);
    })

   
   


     
