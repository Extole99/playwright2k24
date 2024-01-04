const {test, expect} = require('@playwright/test');


test('KeyBoard Actions', async({page})=>{

    await page.goto("https://gotranscript.com/text-compare");

    // Enter some data on first Box - approach 1 - by using fill method
    //await page.locator("//*[@name='text1']").fill("welcome to govinda");

    // approach 2 : by using type method
    await expect(await page.locator("//*[@name='text1']")).toBeEmpty(); 
    await page.type("//*[@name='text1']","welcome to TTD");
    

    // Here if we are using combination of 2 keys means - Use press method
    // If we are using single keyboard action - Use down & up method

    // CTRL + A
    await page.keyboard.press('Control+A');

    // CTRL + C
    await page.keyboard.press('Control+C');

    // TAB
    await page.keyboard.down('Tab');
    await page.keyboard.up('Tab');

    // CTRL + V
    await page.keyboard.press('Control+V');

    await page.waitForTimeout(5000);
    await page.close();

})