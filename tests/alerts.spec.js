const { test, expect } = require('@playwright/test');

test.skip('Handle alert', async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");

    // Handling the alerts , here we need to validate any thing on alert before perform action
    page.on('dialog', async dialog => {
        await expect(dialog.type()).toContain('alert');
        await expect(dialog.message()).toContain('I am an alert box!');
        await dialog.accept();
    })
    await page.click("//*[@onclick='myFunctionAlert()']");
    await page.waitForTimeout(5000);

})

test.skip('Handle alert with Confirmation', async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");

    // Handling the alerts , here we need to validate any thing on alert before perform action
    page.on('dialog', async dialog => {
        await expect(dialog.type()).toContain('confirm');
        await expect(dialog.message()).toContain('Press a button!');
        await dialog.accept(); // for ok button we can use accept
        // await dialog.dismiss(); // for cancel button we can use dismiss
    })
    await page.click("//*[@onclick='myFunctionConfirm()']");
    await page.waitForTimeout(5000);
    const message = await page.locator("//*[@id='demo']").textContent();
    console.log(message);
})

test('Handle alert with PromtBox', async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");

    // Handling the alerts , here we need to validate any thing on alert before perform action

    page.on('dialog', async dialog => {
        await expect(dialog.type()).toContain('prompt');
        await expect(dialog.message()).toContain('Please enter your name:');
        await expect(dialog.defaultValue()).toContain('Harry Potter');
        await dialog.accept('Ganesh');
        // await dialog.dismiss(); 
    })
    await page.click("//*[@onclick='myFunctionPrompt()']");
    await page.waitForTimeout(2000);
    await expect(await page.locator("//*[@id='demo']")).toHaveText("Hello Ganesh! How are you today?");
    await page.waitForTimeout(5000);
})





