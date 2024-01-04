exports.LogoutPage = class LogoutPage{

    constructor(page){
        this.page = page;
        this.hamburgerMenu = "#react-burger-menu-btn";
        this.logoutLink ="#logout_sidebar_link";
    }

    async logoutPage(){
        await this.page.locator(this.hamburgerMenu).click();
        await this.page.waitForTimeout(1000);
        await this.page.locator(this.logoutLink).click();
    }
}