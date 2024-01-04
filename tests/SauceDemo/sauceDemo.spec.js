import {test,expect} from '@playwright/test';
import { LoginPage } from '../../PageModels/SauceDemo_Models/LoginPage';
import { ProductsPage } from '../../PageModels/SauceDemo_Models/ProductsPage';
import { ProductPage } from '../../PageModels/SauceDemo_Models/ProductPage';
import { CartPage } from '../../PageModels/SauceDemo_Models/CartPage';
import { ShipingPage } from '../../PageModels/SauceDemo_Models/ShipingPage';
import { OrderConfirmationPage } from '../../PageModels/SauceDemo_Models/OrderConfirmationPage';
import { LogoutPage } from '../../PageModels/SauceDemo_Models/LogoutPage';


test('Sauce Demo App Test', async ({page})=>{

    // Login 
    const loginpage = new LoginPage(page);
    await loginpage.openUrl();
    await expect(page).toHaveURL("https://www.saucedemo.com/");
    await loginpage.loginInToApplication("standard_user","secret_sauce");

    // Mutli Products Page
    const pdtspage = new ProductsPage(page);
    await pdtspage.validateProducts("Test.allTheThings() T-Shirt (Red)");
    await page.waitForTimeout(1000);

    // Single Product Page
    const pdtpage = new ProductPage(page);
    await pdtpage.validateProduct();
    await pdtpage.clickOnCartBtn();

    // Cart Page
    const cartpage = new CartPage(page);
    await cartpage.validateProductDetailsCart();
    await cartpage.clickOnCheckoutBtn();

    // Shipping Page
    const shippage = new ShipingPage(page);
    await shippage.enterDetailsOnShipPage("ganesha","gani","560760");
    await shippage.clickOnCheckoutBttn();

    // Order Confirmation Page
    const orderconfopage = new OrderConfirmationPage(page);
    await orderconfopage.validateOrderDetails();
    await orderconfopage.clickOnFinishBtn();
    await orderconfopage.validateOrderConfirm();

    // Logout Page
    const logoutpage = new LogoutPage(page);
    await logoutpage.logoutPage();
    await expect(page).toHaveURL("https://www.saucedemo.com/");

})
