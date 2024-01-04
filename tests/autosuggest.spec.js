const {test, expect} = require('@playwright/test');

test('Auto suggestions Test', async ({page})=>{
    await page.goto("https://www.redbus.in/");
    await expect(page).toHaveURL("https://www.redbus.in/");

    const searchItem = await page.locator("#src");
    await searchItem.fill("Bengaluru");

    await page.waitForSelector("//*[@class='sc-dnqmqq eFEVtU']//*[contains(@class,'sc-iwsKbI')]//div//text[last()-1]");
    const cities = await page.$$("//*[@class='sc-dnqmqq eFEVtU']//*[contains(@class,'sc-iwsKbI')]//div//text[last()-1]");

    for(const searchCiti of cities){
        const values = searchCiti.textContent();
        console.log(values);
    }
    
})