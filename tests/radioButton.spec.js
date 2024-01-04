const { test, expect } = require('@playwright/test');

test('Handling RadioButton', async ({ page }) => {

    await page.goto("https://demo.nopcommerce.com/register");

    await expect(page).toHaveURL("https://demo.nopcommerce.com/register");

    const maleRadioButton = await page.locator("//*[@id='gender-male']");
    const femaleRadioButton = await page.locator("//*[@id='gender-female']");

    await expect(maleRadioButton).toBeVisible();
    await expect(femaleRadioButton).toBeVisible();

    await maleRadioButton.check();
    await maleRadioButton.isChecked();
    await expect(maleRadioButton.isChecked()).toBeTruthy();
    await page.waitForTimeout(3000);

    await femaleRadioButton.check();
    await femaleRadioButton.isChecked();
    await expect(femaleRadioButton.isChecked()).toBeTruthy();
    await page.waitForTimeout(3000);

    console.log("Test Passed");
    await page.close();

})