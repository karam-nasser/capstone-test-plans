const { By } = require("selenium-webdriver");
const BasePage = require("./basePage");

module.exports = class EbayUserNamePage extends BasePage {

    userNameInput = By.id("userid");
    signInButton = By.id("signin-continue-btn");

    constructor(driver, url) {
        super(driver, url);
        // when we use super we are calling the original element & methods from the base page //
    }

    async InputUserName(userName) {
        await this.setInput(this.userNameInput, userName);
    }

    async clickContinue() {
        await this.click(this.signInButton);
    }
};