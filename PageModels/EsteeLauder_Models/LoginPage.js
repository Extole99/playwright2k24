exports.LoginPage = class LoginPage {
    constructor(page) {
        this.page = page;
        this.popupCloseBtn = "//*[contains(@class,'gnav-signup')]//*[contains(@class,'overlay__close')]";
        this.loginLink = "//*[contains(@class,'nav__account')]//*[@href='https://www.esteelauder.com/account/signin.tmpl']";
        this.emailId = "//*[@name='EMAIL_ADDRESS']";
        this.passWord = "//*[@id='form--signin--field--PASSWORD']";
        this.signInBtn = "//*[@data-test-id='form_signin_continue']";
    }

    async goToLoginPage() {
        await this.page.goto("https://www.esteelauder.com/");
    }

    async closePopup(){
        await this.page.locator(this.popupCloseBtn).click();
    }

    async login(returnUserEmailId, returnUserPassword) {
        await this.page.locator(this.loginLink).click();
        await this.page.waitForTimeout(5000);
        await this.page.locator(this.emailId).fill(returnUserEmailId);
        await this.page.locator(this.passWord).fill(returnUserPassword);
        await this.page.locator(this.signInBtn).click();
    }


}

