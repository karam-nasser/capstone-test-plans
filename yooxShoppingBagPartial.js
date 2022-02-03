const { By } = require("selenium-webdriver");
const BasePage = require("./basePage");

module.exports = class YooxShoppingBagPatial extends BasePage {

    // selectors //

    goToShoppingBagBy = By.id('goToCheckOut');

    constructor(driver, url) {
        super(driver, url);
        // when we use super we are calling the original element & methods from the base page //
    }

    // methods //

    async clickGoToShoppingBag() {
        return await this.click(this.goToShoppingBagBy);
    }
}