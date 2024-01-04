exports.ProductPage = class ProductPage {

    constructor(page) {
        this.page = page;
        this.productpageLink = "//*[contains(@class,'flex-col w-full')]//a[text()='Advanced Night Repair Serum Duo ']";
        this.addToCartBtn = "//*[@title='Add To Bag']";
        this.productNameSPP = "//h1[@data-test-id='product_name']";
        this.cartPopup = "//*[@class='cart-confirm__content']";
        this.gotoCartBtn = "//*[@class='cart-confirm__content']//*[@data-test-id='form_cart_checkout']";
    }

    async clickOnSingleProduct() {
        await this.page.locator(this.productpageLink).click();
        await this.page.waitForTimeout(2000);
        const printProductName = await this.page.locator(this.productNameSPP).textContent();
        console.log("Product Name in Product Page is : " + printProductName)
    }

    async addProductToCart() {
        await this.page.locator(this.addToCartBtn).click();
    }

    async clickOnCartIcon() {
        await this.page.waitForSelector(this.cartPopup);
        await this.page.locator(this.gotoCartBtn).click();
    }

}
