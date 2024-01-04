const { test, expect } = require('@playwright/test');

test('Handling Nested frames', async ({ page }) => {

    await page.goto("https://ui.vision/demo/webtest/frames/");

    // Navigate to Main Frame or Parent Frame
    const mainFrame = await page.frameLocator("//*[@src='frame_3.html']");
    await mainFrame.locator("//*[@name='mytext3']").fill("Eshwaraya");
    await page.waitForTimeout(4000);
    
    // Navigate to child frames or Inner Frames
    const innerFrames = await mainFrame.childFrames();
    await innerFrames[0].locator("//*[@id='i5']/div[3]/div").check();

})