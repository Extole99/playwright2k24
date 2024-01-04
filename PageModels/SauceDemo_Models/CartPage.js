exports.CartPage = class CartPage {

    constructor(page) {
        this.page = page;
        this.cartQty = "//*[@class='cart_item']//div[@class='cart_quantity']";
        this.pdtNameCart  = "//*[@class='cart_item']//div[@class='inventory_item_name']";
        this.pdtPriceCart = "//*[@class='cart_item']//div[@class='inventory_item_price']";
        this.checkoutBtn = "#checkout";
    }

    async validateProductDetailsCart(){

        const prodctQty = await this.page.locator(this.cartQty).textContent();
        console.log("Product Quantity in CartPage is : " + prodctQty);

        const prodctNameCart = await this.page.locator(this.pdtNameCart).textContent();
        console.log("Product Name in CartPage is : " + prodctNameCart);

        const prodctPriceCart = await this.page.locator(this.pdtPriceCart).textContent();
        console.log("Product Price in CartPage is : " + prodctPriceCart);
    }

    async clickOnCheckoutBtn(){
        await this.page.locator(this.checkoutBtn).click();
    }

}    