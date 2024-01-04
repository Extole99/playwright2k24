const { test, expect } = require('@playwright/test');

test('Handle Frames', async ({ page }) => {

    await page.goto('https://ui.vision/demo/webtest/frames/');

    // find the no of frames in webpage

    const framesno = await page.frames();
    console.log("Total No's of frames: " + framesno.length);

    /* approach 1
    Get frame using the frame's name attribute
    const frame = page.frame('frame-login');

    // Get frame using frame's URL
    const frame = page.frame({ url: /.*domain.});
    */

    const frame1 = await page.frame({ url: "https://ui.vision/demo/webtest/frames/frame_1.html" });
    await frame1.locator("[name='mytext1']").fill("Balaji");
    // await frame1.fill("[name='mytext1']", "Balaji");

    await page.waitForTimeout(5000);

    /* approach 2

    // Locate element inside frame
    const username = await page.frameLocator('.frame-class').getByLabel('User Name');
    await username.fill('John');
    */

    const frame2 = await page.frameLocator("//*[@src='frame_2.html']"); 
    await frame2.locator("//*[@name='mytext2']").fill("Ommm");
    await page.waitForTimeout(5000);


})