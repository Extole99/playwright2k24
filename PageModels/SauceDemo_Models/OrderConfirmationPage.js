exports.OrderConfirmationPage = class OrderConfirmationPage {

    constructor(page) {
        this.page = page;
        this.productNameOrderConfoPage = ".inventory_item_name";
        this.productPriceOrderConfoPage = ".inventory_item_price";
        this.paymentInfo = "//*[@class='summary_info']//*[contains(.,'#31337')]";
        this.deliveryInfo = "//*[@class='summary_info']//*[contains(.,'Delivery!')]";
        this.totalPrice = "//*[@class='summary_info']//*[contains(.,'Total:')]";
        this.finishBtn = "//*[@id='finish']";
        this.orderConfirmationText = ".complete-header";
        this.orderConfoDes = ".complete-text";
    }

    async validateOrderDetails() {
        console.log("Order Details :");
        const productNameOrderConfoPage1 = await this.page.locator(this.productNameOrderConfoPage).textContent();
        const productPriceOrderConfoPage1 = await this.page.locator(this.productPriceOrderConfoPage).textContent();
        const paymentInfo1 = await this.page.locator(this.paymentInfo).textContent();
        const deliveryInfo1 = await this.page.locator(this.deliveryInfo).textContent();
        const totalPrice1 = await this.page.locator(this.totalPrice).textContent();
        console.log("Name is : " + productNameOrderConfoPage1
            + " & Product price is : " + productPriceOrderConfoPage1
            + " & Payment Method is : " + paymentInfo1
            + " & Delivery Method is : " + deliveryInfo1
            + " & Total Price with tax is : " + totalPrice1);
    }

    async clickOnFinishBtn() {
        await this.page.locator(this.finishBtn).click();
    }

    async validateOrderConfirm() {
        const thanksOrderText = await this.page.locator(this.orderConfirmationText).textContent();
        const orderConfoDes1 = await this.page.locator(this.orderConfoDes).textContent();
        console.log(thanksOrderText + " " + orderConfoDes1);
    }

}