import {test, expect} from '@playwright/test';
import { LoginPage } from '../pomPages/LoginPage';
import { HomePage } from '../pomPages/HomePage';
import { CartPage } from '../pomPages/CartPage';

// to re run the failed test through commandline have to use, npx playwright test tests/Retries.spec.js --headed --retries=1 
// to add this reties to all the tets, we have to add the retries = 'no.of reruns' (ex: retries=2 ) in playwright config file
// all retried test results are showed reports in flaky 

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