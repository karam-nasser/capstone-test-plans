const { By } = require("selenium-webdriver");
const BasePage = require("./basePage");

module.exports = class EbayPasswordPage extends BasePage {

    passwordInput = By.id("pass");
    passwordButton = By.id("sgnBt");

    constructor(driver, url) {
        super(driver, url);
        // when we use super we are calling the original element & methods from the base page //
    }

    async InputPassword(password) {
        await this.setInput(this.passwordInput, password);
    }

    async clickSignIn() {
        await this.click(this.passwordButton);
    }
};