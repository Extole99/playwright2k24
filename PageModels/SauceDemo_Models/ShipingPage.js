exports.ShipingPage = class ShipingPage {

    constructor(page) {
        this.page = page;
        this.firstName = "#first-name";
        this.lastName = "#last-name";
        this.postCode = "#postal-code";
        this.continueBtn = "#continue";
    }

    async enterDetailsOnShipPage(fname, lname, zipcode){
        await this.page.locator(this.firstName).fill(fname);
        await this.page.locator(this.lastName).fill(lname);
        await this.page.locator(this.postCode).fill(zipcode);
    }

    async clickOnCheckoutBttn(){
        await this.page.locator(this.continueBtn).click();
    }
}