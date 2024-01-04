const {test, expect} = require('@playwright/test');

test('Handling drag and drop action', async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");
    const dragItem = await page.locator("//*[@id='draggable']");
    const dropItem = await page.locator("//*[@id='droppable']");

    // Approach 1 : Drag & Drop Action 
    /* 
    await dragItem.hover();
    await page.mouse.down();
    
    await dropItem.hover();
    await page.mouse.up();
    */

    // Approach 2 :

    await dragItem.dragTo(dropItem);
    await page.waitForTimeout(5000);

})