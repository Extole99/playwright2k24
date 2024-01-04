const {test, expect} = require('@playwright/test');

/* Capturing ScreenShot
  
    await page.screenshot({ path: 'screenshot.png' });
    If we want to save perticular folder means we need to pass that folder path with date & name
    Ex :
    await page.screenshot({ path: 'tests/screenshots/'+Date.now()+'Name.png'});

    Full Page Screenshot :
    await page.screenshot({ path: 'FolderPath'+Date.now()+'Name.png',fullPage:true});

    Element Screenshots of Page :
    await page.locator(locator).screenshot({ path: 'FolderPath'+Date.now()+'Name.png'});

    If we want to Execute any test from project, and by default want to catpure 
    that test screenshot and it should store in report as well means
    1. go to playwright.config.js file
    2. go to use: block
    3. write screenshot : 'on' or 'off' inside use block
    4. Save and Try to execute any test and check the screenshot

    If we want to take screenshots only when test got failed that time
    1. go to playwright.config.js file
    2. go to use: block
    3. write screenshot : 'only-on-failure' inside use block
    4. Save and Try to execute any test and check the screenshot
    

*/

test('Page Screenshot', async({page})=>{
    await page.goto("https://demoblaze.com/index.html");
    await page.screenshot({path:'tests/screenshots/'+Date.now()+'_Mobilepage.png'});
});

test('Full Page Screenshot', async({page})=>{
    await page.goto("https://www.phonepe.com/");
    await page.screenshot({path:'tests/screenshots/'+Date.now()+'_FullPage.png', fullPage:true});
});

test.only('Element Screenshot', async({page})=>{
    await page.goto("https://demoblaze.com/index.html");await page.goto("https://demoblaze.com/index.html");
    await page.waitForTimeout(2000);
    await page.locator("(//*[@class='card h-100'])[1]").screenshot({path:'tests/screenshots/'+Date.now()+'_SamSung.png'});
});

