const {test, expect} = require('@playwright/test');

test('Table', async({page}) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    const table = await page.locator('#productTable');

   // total number of rows and columns

   const coulmns = await table.locator('thead tr th');
   console.log("Total number of Columns: ", await coulmns.count());  // 4

   const rows = await table.locator('tbody tr');
   console.log("Total number of Rows: ", await rows.count());  // 5

   // selecting  the check box of product 4

//    const machecRow = rows.filter({has: page.locator('td'), hasText: 'Product 4'});
          
//    await machecRow.locator('input').check();

   // select multiple check box using reusable function

//    await selectProduct(rows, page, "Product 1");
//    await selectProduct(rows, page, "Product 3");
//    await selectProduct(rows, page, "Product 5");

await page.waitForTimeout(5000);

// print all product details using loop

/*

for(let i=0; i<await rows.count(); i++)
{
    const row = rows.nth(i);
    const tds = row.locator('td');

    for(let j=0 ; j<await coulmns.count() ; j++)
    {
           console.log((await tds.nth(j).textContent()));
    }
}

*/

// print all product details fron all pages using loop

const pages = await page.locator('#pagination li a');
console.log("Numbers of Pages: ", await pages.count());

for(let p=0; p<await pages.count() ; p++)
{
    if(p>0)
    {
        await pages.nth(p).click();
    }

    for(let i=0; i<await rows.count(); i++)
        {
            const row = rows.nth(i);
            const tds = row.locator('td');
        
            for(let j=0 ; j<await coulmns.count() ; j++)
            {
                   console.log((await tds.nth(j).textContent()));
            }
        }


}
  

});

async function selectProduct(rows, page, name)
{
    const machecRow = rows.filter({has: page.locator('td'), hasText: name});
          
   await machecRow.locator('input').check();

}
