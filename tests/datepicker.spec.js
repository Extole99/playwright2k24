const { test, expect } = require('@playwright/test');

test('Handling Date picker', async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");

    // Approach 1 : If we have enter the date by Text means we can follow below 
    const insertDate = await page.locator("//*[@id='datepicker']");
    // await insertDate.fill('01/04/1997');
   
    // Approach 2 : 
      const year = "2025";
      const date = "4";
      const month = "January";
     
      await insertDate.click();
  
      while (true) {
          const currentYear = await page.locator(".ui-datepicker-year").textContent();
          const currentMonth = await page.locator(".ui-datepicker-month").textContent();
          if (currentYear == year && currentMonth == month) {
              break;
          }
          await page.click("//*[@title='Next']");
      }
    // select the date by using for loop
    /*  const dates = await page.$$("//a[@class='ui-state-default']");
      for (const dt of dates) {
          if (await dt.textContent() == date) {
              await dt.click();
              break;
          }
      }
  
        */

    // Approach 3 : By Using direct xpath to click date on popup
    await insertDate.click();
    await page.click(`//a[@class='ui-state-default'][text()='${date}']`);
    const selectedDate = await insertDate.textContent();
    console.log("Selected Date is :"+ selectedDate);
    await page.waitForTimeout(5000);
    await page.close();

})