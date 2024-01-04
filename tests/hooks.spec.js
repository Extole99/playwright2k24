const { test, expect } = require('@playwright/test');

test("Home Page Test", async ({ page }) => {

    await page.goto("https://demoblaze.com/index.html");

    // Login
    const loginButton = await page.locator("//*[@id='login2']");
    await loginButton.click();
    await page.fill("//*[@id='loginusername']", "pavanol");
    await page.fill("//*[@id='loginpassword']", "test@123");
    await page.click("//*[@onclick='logIn()']");
    await page.waitForTimeout(2000);

    // Home Page - Find the total No of Products
    const allProducts = await page.$$("//*[@class='card-title']/a[text()]");
    console.log("Total No of products : " + allProducts.length);

    for (const pdts of allProducts) {
        const pdtName = await pdts.textContent();
        console.log(pdtName);
    }

    // Logout
    await page.locator("//*[@onclick='logOut()']").click();
    await page.waitForTimeout(2000);
    await expect(await page.locator("//*[@id='login2']")).toHaveText('Log in');
    await page.close();
})

test("Add to Cart Test", async ({ page }) => {

    await page.goto("https://demoblaze.com/index.html");

    // Login
    const loginButton = await page.locator("//*[@id='login2']");
    await loginButton.click();
    await page.fill("//*[@id='loginusername']", "pavanol");
    await page.fill("//*[@id='loginpassword']", "test@123");
    await page.click("//*[@onclick='logIn()']");
    await page.waitForTimeout(2000);

    // Add Products to Cart
    const singleProductloc = "//*[@class='card-title']//a[text()='Samsung galaxy s6']";
    await page.locator(singleProductloc).click();
    const productName = await page.locator("//*[@id='tbodyid']/h2[@class='name']").textContent();
    const productInfo = await page.locator("//*[@id='tbodyid']//*[@id='myTabContent']").textContent();
    console.log("Product Details : " + productName + " " + productInfo);
    await page.waitForTimeout(2000);

    page.on('dialog', async dialog => {
        await expect(dialog.message()).toContain('Product added.');
        await dialog.accept();
    })
    await page.click("//*[@onclick='addToCart(1)']");
    await page.waitForTimeout(3000);

    // Logout
    await page.locator("//*[@onclick='logOut()']").click();
    await page.waitForTimeout(2000);
    await expect(await page.locator("//*[@id='login2']")).toHaveText('Log in');
    await page.close();
})