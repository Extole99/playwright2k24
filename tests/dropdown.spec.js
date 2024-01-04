const { test, expect } = require('@playwright/test');


test('Handling dropdown', async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");

    await expect(page).toHaveURL("https://testautomationpractice.blogspot.com/");

    // Mutliple ways to handle dropdown

    const countrySelect = await page.locator("//*[@id='country']");

    // 1) select the option by using label
    // await countrySelect.selectOption({label : 'India'});

    // 2) select the option by using visible text
    // await countrySelect.selectOption('India');

    // 3) select the option by using value
    // await countrySelect.selectOption({value : 'uk'});


    // 4) select the option by using index
    // await countrySelect.selectOption({index :2});

    // 5) select the option by text or direct method
    // await page.selectOption("//*[@id='country']",'India');


    // ASSERTIONS to NUMBER OF OPTIONS IN DROPDOWN
    // const totaloptions = await page.locator("//*[@id='country']/option");
    // await expect(totaloptions).toHaveCount(10);

    // 2nd approach
    // const options = await page.$$("//*[@id='country']/option");
    //  await expect(options.length).toBe(10);


    // Assert presence of value on dropdown

    // const content = await page.locator("#country").textContent();
    // await expect(content.includes('India')).toBeTruthy();

    // await page.waitForTimeout(5000);


    // 2nd approach to find presence value on dropdown
    const optiondata = await page.$$("#country option");
    let status = false;
    for (const data of optiondata) {
        //  console.log(await data.textContent());
        let values = await data.textContent();
        console.log(values);
        if (values.includes('Germany')) {
            status = true;
            break;
        }  
    }
    await expect(status).toBeTruthy();


    // Mutli Select dropdown
    const mutliSelect = await page.locator("//*[@id='colors']");
    await mutliSelect.selectOption(['Blue','Red','Yellow']);
    await page.waitForTimeout(5000);
    await page.close();





})
