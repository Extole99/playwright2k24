const {test, expect} = require('@playwright/test');

test.skip('Upload single File', async({page})=>{
    
    await page.goto("https://www.foundit.in/");
    await page.waitForSelector("//*[@class='mqfihd-upload']");
    const uploadResume = await page.locator("//*[@class='mqfihd-upload']");
    await uploadResume.click();
    await page.locator("//*[@id='file-upload']").setInputFiles("C:\Users\Mune9\Downloads\SurgeGst.pdf");
    const uploadedFileName = await page.locator("[data-default-text='Drag & Drop file here']").textContent();
    console.log("Uploaded File Name is : "+ uploadedFileName);
    await page.waitForTimeout(5000);
})

test('Upload Mutliple Files', async({page})=>{
  
    // Uploading Multiple files and Assert those files
    await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php");
    await page.locator("//*[@id='filesToUpload']").setInputFiles(["C:\Users\Mune9\Downloads\Ganesh_N_Resume.docx","C:\Users\Mune9\Downloads\SurgeGst.pdf"]);
    const fileName1 = page.locator("//*[@id='fileList']/li[text()][1]").textContent();
    const fileName2 = page.locator("//*[@id='fileList']/li[text()][2]").textContent();
    await page.waitForTimeout(2000);
    console.log("Uploaded FileName_1 is : "+ fileName1);
    console.log("Uploaded FileName_2 is : "+ fileName2);
    await page.waitForTimeout(3000);

    // Uploaded Nothing into Choose Files and Assert Empty files
    await page.locator("//*[@id='filesToUpload']").setInputFiles([]);
    const emptyFileName = page.locator("//*[@id='fileList']/li[text()]").textContent();
    console.log("Empty file name is :"+ emptyFileName);
    await page.waitForTimeout(3000);
})

