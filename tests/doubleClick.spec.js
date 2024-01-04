const { test, expect } = require('@playwright/test');

test('Double Click Action', async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");
    const doubleClickButton = await page.locator("//*[@ondblclick='myFunction1()']");
    
    // Double Click Action

    await doubleClickButton.dblclick();
    const printText = await page.locator("//*[@id='field2']");
    console.log("After double click text is : " + printText.textContent());
    await expect(printText).toHaveValue("Hello World!");
    await page.waitForTimeout(4000);
    await page.close();
    
})