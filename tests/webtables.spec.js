const { test, expect } = require('@playwright/test');


test('Handling WebTables', async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");

    // Navigate to Web Table and fetch the data

    const tableName = await page.locator("//*[text()='Web Table']").textContent();
    console.log("Name of the Table is : " + tableName);
    const sub = await page.$$("//*[@name='BookTable']/tbody/tr[*]/td[3]");
    console.log("Total no of subjects " + sub.length);
    for (const res of sub) {
        const subjects = await res.textContent();
        console.log(subjects)
    }

    // Navigate to 2nd Table and Select the all checkboxes
    const tableName2 = await page.locator("//*[text()='Pagination Table']").textContent();
    console.log("Name of the 2nd Table is : " + tableName2);
    const tableCheckBox = await page.$$("//table[@id='productTable']/tbody/tr/td[last()]/input[@type='checkbox']");
    console.log("Total no of checkboxes: " + tableCheckBox.length);

    for (const chec of tableCheckBox) {
        await chec.check();
        await page.waitForTimeout(2000);
    }
    await page.close();
})