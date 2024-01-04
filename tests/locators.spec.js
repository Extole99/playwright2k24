const {test, expect} = require('@playwright/test');
const exp = require('constants');

test('Differnt type of Locators Execution',async ({page})=>{

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    // Catpure Brand logo and it should be visible

    const logo= await page.getByAltText("company-branding");
    await expect(logo).toBeVisible();

    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').fill('admin123');

    await page.getByRole('button', {type:'submit'}).click();

    await page.waitForTimeout(5000);

    const userName = await page.locator("//*[@class='oxd-userdropdown-name']").textContent();
    console.log(userName);
  //  await expect(await page.getByText(userName)).toBeVisible();
    await page.close();

})
