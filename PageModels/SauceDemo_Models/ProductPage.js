exports.ProductPage = class ProductPage {

    constructor(page) {
        this.page = page;
        this.shirtName = ".inventory_details_name";
        this.shirtPrice = ".inventory_details_price";
        this.addToCartBtn = "//*[contains(@id,'add-to-cart')]";
        this.goToCartBtn = "//*[@class='shopping_cart_link']";
    }

    async validateProduct() {
        console.log("Product Details on PRODUCT PAGE Is :");
        const prodctName = await this.page.locator(this.shirtName).textContent();
        console.log("Product Name in SPP is : " + prodctName);
        const prodctPrice = await this.page.locator(this.shirtPrice).textContent();
        console.log("Product Price in SPP is : " + prodctPrice);
        await this.page.locator(this.addToCartBtn).click();
    }

    async clickOnCartBtn() {
        await this.page.locator(this.goToCartBtn).click();
    }

}    
