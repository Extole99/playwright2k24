import {test, expect} from '@playwright/test';
import { LoginPage } from '../../PageModels/EsteeLauder_Models/LoginPage';
import { ProductsPage } from '../../PageModels/EsteeLauder_Models/ProductsPage';
import { ProductPage } from '../../PageModels/EsteeLauder_Models/ProductPage';
import { CartPage } from '../../PageModels/EsteeLauder_Models/CartPage';

test('EsteeLauder US Site Test', async({page})=>{
    // await page.setDefaultTimeout(90000);
    // Login Page
    const login = new LoginPage(page);
    await login.goToLoginPage();
    await login.closePopup();
    await login.login("ganitest21+33@gmail.com","Test@123");
    await page.waitForTimeout(1000);
    await login.goToLoginPage();
    
    // Go To Best Sellers Page & Select One Product
    const productsPage = new ProductsPage(page);
    await productsPage.clickOnBestSellersLink();
    await expect(page).toHaveTitle("Best Selling Skincare, Makeup, Perfume & More | Estée Lauder");

    // Go To Single Product Page & Add the Product To Cart
    const productPage = new ProductPage(page);
    await productPage.clickOnSingleProduct();
    await productPage.addProductToCart();
    await productPage.clickOnCartIcon();

    // Go to Cart Page & Validate product Details
    const cartPage = new CartPage(page);
    await cartPage.validateProductOnCart();
    await cartPage.clickOnCheckoutButton();
    
})
