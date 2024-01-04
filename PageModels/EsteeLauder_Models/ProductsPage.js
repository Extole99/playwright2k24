exports.ProductsPage = class ProductsPage {
    constructor(page) {
        this.page = page;
        this.pdpLink = "//*[contains(@class,'desktop-header')]//*[text()='Best Sellers' and @class='basic-menu__link']";
    }

    async clickOnBestSellersLink() {
        await this.page.locator(this.pdpLink).click();
      //  const productName = await this.page.locator(this.productpageLink).textContent();
     //   console.log("Selected Product Name in MPP page is : " + productName);
    }
    

}