const {test, expect} = require('@playwright/test');

test('Handle mouse hover', async({page})=>{

    await page.goto("https://demo.opencart.com/");

    const desktops = await page.locator("//*[text()='Desktops']");
    const macbook = await page.locator("//*[text()='Mac (1)']");

    // Mouse Hover
    await desktops.hover();
    await macbook.hover();

    await page.waitForTimeout(4000);

})