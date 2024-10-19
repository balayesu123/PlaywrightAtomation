
import {test, expect} from '@playwright/test';
import { LoginPage } from '../pomPages/LoginPage';
import { HomePage } from '../pomPages/HomePage';
import { CartPage } from '../pomPages/CartPage';


test('Home page Test', async({page}) => { 

    // login

    const login = new LoginPage(page);
    await login.gotoLoginPage();
    await login.login('pavanol', 'test@123');
    await page.waitForTimeout(3000);

    // Home page

    const home = new HomePage(page);
    await home.addProductToCart("Nexus 6");
    await page.waitForTimeout(3000);
    await home.goToCart();

    // Cart

    const cart = new CartPage(page);
    await page.waitForTimeout(3000);
    const status = await cart.checkProductInCart("Nexus 6");
    await expect(status).toBe(true);


})





