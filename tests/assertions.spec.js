const {test,expect}= require('@playwright/test');

test('Assertions Test',async ({page})=>{

    await page.goto("https://demo.nopcommerce.com/register");

    await expect(page).toHaveURL("https://demo.nopcommerce.com/register");

    await expect(page).toHaveTitle("nopCommerce demo store. Register");

    const brandLogo = await page.locator("//*[@alt='nopCommerce demo store']");
    await expect(brandLogo).toBeVisible();

    const inputBox = await page.locator("//*[@id='small-searchterms']");
    await expect(inputBox).toBeEnabled();
    await inputBox.fill("ganesh");

    const maleRadioBtn = await page.locator("//*[@id='gender-male']");
    await maleRadioBtn.click();
    await expect(maleRadioBtn).toBeChecked();

    const newsCheckBox = await page.locator("//*[@id='Newsletter']");
    await expect(newsCheckBox).toBeChecked();

    const regButn = await page.locator("//*[@id='register-button']");
    await expect.soft(regButn).toHaveText('Reg');

    await expect(regButn).toContainText('Reg');

})