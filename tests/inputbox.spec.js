const {test,expect} = require('@playwright/test');

test('Handling InputBox', async ({page})=>{

    await page.goto("https://demo.nopcommerce.com/register");

    const firstName = await page.locator("//*[@id='FirstName']");
    
    await expect(firstName).toBeVisible();
    await expect(firstName).toBeEditable();
    await expect(firstName).toBeEmpty();
    await expect(firstName).toBeEnabled();

    await firstName.fill("GaneshA");
    await page.waitForTimeout(5000);
    await page.close();

})