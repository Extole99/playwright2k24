const {test,expect}=require('@playwright/test');

test('Handling Checkboxes', async ({page})=>{
    
    await page.goto("https://demo.nopcommerce.com/register");
    await expect(page).toHaveTitle("nopCommerce demo store. Register");
    const newsLetterCheckBox = await page.locator("//*[@id='Newsletter']");
    await newsLetterCheckBox.isChecked();

    await newsLetterCheckBox.uncheck();
    await page.waitForTimeout(5000);
    
    await newsLetterCheckBox.check();
    await expect(newsLetterCheckBox.isChecked()).toBeTruthy();
    await page.close();

})
