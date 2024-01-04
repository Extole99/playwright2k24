const { test, expect } = require('@playwright/test');


// Before Each - It will execute no of times for each Before Test Execution
// After Each - It will execute no of times for each After Test Execution
// Before All - It will execute only once before all tests 
// After All - It will execute only once after all tests

/*
Here we need to create Fixture for Hooks Execution
Because Hooks are browser level execution so 
we need to create own Fixtures
Ex:
let page;
test.beforeEach(async ({browser})=>{
page = await browser.newPage();
await page.goto("https://demoblaze.com/index.html");
}   
*/

let page;

test.beforeEach(async ({ browser }) => {
    page = await browser.newPage();
    await page.goto("https://demoblaze.com/index.html");
    // Login
    const loginButton = await page.locator("//*[@id='login2']");
    await loginButton.click();
    await page.fill("//*[@id='loginusername']", "pavanol");
    await page.fill("//*[@id='loginpassword']", "test@123");
    await page.click("//*[@onclick='logIn()']");
    await page.waitForTimeout(2000);
});

test.afterEach(async () => {
    // Logout
    await page.locator("//*[@onclick='logOut()']").click();
    await page.waitForTimeout(2000);
    await expect(await page.locator("//*[@id='login2']")).toHaveText('Log in');
    await page.close();
});

test("Home Page Test", async () => {
    // Home Page - Find the total No of Products
    const allProducts = await page.$$("//*[@class='card-title']/a[text()]");
    console.log("Total No of products : " + allProducts.length);
    for (const pdts of allProducts) {
        const pdtName = await pdts.textContent();
        console.log(pdtName);
    }
})

test("Add to Cart Test", async () => {
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
})