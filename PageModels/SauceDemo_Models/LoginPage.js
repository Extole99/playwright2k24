exports.LoginPage = class LoginPage {

    constructor(page) {
        this.page = page;
        this.userName = "#user-name";
        this.passWord = "#password";
        this.loginBtn = "#login-button";

    }

    async openUrl() {
        await this.page.goto("https://www.saucedemo.com/");
    }

    async loginInToApplication(username, password) {
        await this.page.locator(this.userName).fill(username);
        await this.page.locator(this.passWord).fill(password);
        await this.page.locator(this.loginBtn).click();
        await this.page.waitForTimeout(2000);
    }

}