const {test, expect}= require('@playwright/test');

test('Right click Action', async ({page})=>{

    await page.goto("http://swisnl.github.io/jQuery-contextMenu/demo.html");
    const button = await page.locator("//*[@class='context-menu-one btn btn-neutral']");

    // right click action
    await button.click({button : "right"});
    await page.waitForTimeout(3000);

    const copyOption = await page.locator("//*[contains(@class,'context-menu-list')]//*[text()='Copy']");
    const copyOptionText = copyOption.textContent();
    console.log(copyOptionText);
    await page.close();

})