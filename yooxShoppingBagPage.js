const { By } = require("selenium-webdriver");
const BasePage = require("./basePage");

// navigate to yoox //

module.exports = class YooxShoppingBagPage extends BasePage {
    // selectors //

    // select "goto shopping bag" //
    proceedWithOrderBy = By.id('trkNextTop');

    constructor(driver, url) {
        super(driver, url);
        // when we use super we are calling the original element & methods from the base page //
    }

    // methods //

    async clickProceedWithYourOrder() {
        return await this.click(this.proceedWithOrderBy);
    }
}