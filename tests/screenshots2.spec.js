const {test, expect} = require('@playwright/test');

test('Catpure screenshot byDefault', async({page})=>{

    await page.goto("https://demoblaze.com/index.html");
    const loginButton = await page.locator("//*[@id='login2']");
    await loginButton.click();
    await page.fill("//*[@id='loginusername']", "pavanol");
    await page.fill("//*[@id='loginpassword']", "test@123");
    await page.click("//*[@onclick='logIn()']");
    await page.waitForTimeout(2000);
    
})