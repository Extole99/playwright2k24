const { test, expect } = require('@playwright/test');

/*
To record vedio means ,
1. go to playwright.config.js file
2. go to use: block
3. Check Trace option 
--> We have below options for tracer 
trace : on, off, on-first-retry, retain-on-failure
*/


test('Trace the Vedio', async ({ page }) => {
    await page.goto("https://demoblaze.com/index.html");
    const loginButton = await page.locator("//*[@id='login2']");
    await loginButton.click();
    await page.fill("//*[@id='loginusername']", "pavanol");
    await page.fill("//*[@id='loginpassword']", "test@123");
    await page.click("//*[@onclick='logIn()']");
    await page.waitForTimeout(2000);
    await page.locator("//*[@onclick='logOut()']").click();
    await page.waitForTimeout(2000);
    await expect(await page.locator("//*[@id='login2']")).toHaveText('Log in');
    await page.close();
})