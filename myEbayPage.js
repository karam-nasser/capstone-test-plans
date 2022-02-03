const { By } = require("selenium-webdriver");
const BasePage = require("./basePage.js");

module.exports = class MyEbayPage extends BasePage {
    // selectors //
    searchBar = By.id("gh-ac");
    emptySummaryActions = By.xpath('//*[@id="summary-empty-container"]/div/ul');
    findDeals = By.xpath('//*[@id="summary-empty-container"]/div/ul/li[1]/a');

    constructor(driver) {
        super(driver, null);
    }

    // methods //

    async clickFindDeals() {
        await this.click(this.searchBar, '${term}\n');
    }

    async getResults() {
        return await this.getText(this.results);
    }
};