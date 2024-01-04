exports.CartPage = class CartPage {
    constructor(page) {
        this.page = page;
        this.productCount = "//*[contains(@class,'viewcart-panel__header--title')]";
        this.productNameInCart = "//*[contains(@class,'product_name')]";
        this.productPriceCart = "//*[contains(@class,'cart-item__total')]";
        this.checkoutBtn = "(//*[@id='checkout-sidebar']//*[contains(@class,'continue-checkout')])[last()-1]";
    }

    async validateProductOnCart() {
        const shoppingbagCount = await this.page.locator(this.productCount).textContent();
        console.log("Cart Title is :" + shoppingbagCount);

        const productNameInViewCart = await this.page.locator(this.productNameInCart).textContent();
        console.log("Product Title in Cart Page is :" + productNameInViewCart);

        const price = await this.page.locator(this.productPriceCart).textContent();
        console.log("Product Price is :" + price);
    }

    async clickOnCheckoutButton() {
        await this.page.locator(this.checkoutBtn).click();
    }

}