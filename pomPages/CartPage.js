exports.CartPage = class CartPage
{
    constructor(page){
        this.page=page;
        this.allProductTitles='//*[@id="tbodyid"]/tr/td[2]';
    }

    async checkProductInCart(productName)
    {
       const productsInCart = await this.page.$$(this.allProductTitles);
       for(const product of productsInCart)
       {
        if(productName === await product.textContent())
        {
            console.log(await product.textContent()," is present in Cart");
            return true;
            break;
        }
       }
    }
}