
const {test,expect}=require('@playwright/test');

test('input box',async({page}) => {

    await page.goto('https://testautomationpractice.blogspot.com/');
/*
   const element = await page.locator('#country');

  //  single selection matching the value or label
   await element.selectOption('India');

  // single selection matching the label
   await element.selectOption({ label: 'Japan' });

   // multiple selection for red, green and blue options
   await element.selectOption(['Canada', 'Japan', 'India']);

   await page.waitForTimeout(2000);
*/

const options = await page.$$('#country option');

let status = false;

for(const option of options)
{
   const value = await option.textContent();

   if(value.includes('Japan'))
   {
    status = true;
    break;
   }
}

expect(status).toBeTruthy();


// ----------------------------************-------------------------
/*
await page.goto('https://www.amazon.in/');
await expect(page).toHaveTitle('Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in');

const option = await page.locator('#searchDropdownBox').selectOption('Apps & Games');

console.log(option.toString());  // return the 'value' attribue value (ex: <option value="search-alias=mobile-apps">Apps & Games</option>), not inner text

await expect(option.toString()).toEqual('search-alias=mobile-apps');

*/
// ----------------------------************-------------------------

    
}) 