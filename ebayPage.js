const { By } = require("selenium-webdriver");
const BasePage = require("./basePage");

// navigate to ebay //

module.exports = class EbayPage extends BasePage {
    // selectors //
    searchBar = By.id("gh-ac");
    myEbay = By.xpath('//*[@id="gh-eb-My"]/div/a[1]');
    conditionNew = By.xpath('//*[@id="x-refine__group__2"]/ul/li[1]/div/a/div/span/input');
    freeShipping = By.xpath('//*[@id="x-refine__group__6"]/ul/li/div/a');
    showOnlyFreeReturns = By.xpath('//*[@id="x-refine__group__8"]/ul/li[1]/div/a');


    constructor(driver, url) {
        super(driver, url);
        // when we use super we are calling the original element & methods from the base page //
    }

    // methods //

    async clickMyEbay() {
        await this.click(this.myEbay);
    }

    async doSearch(term) {
        await this.setInput(this.searchBar, term + '\n');
    }

    async getResults() {
        return await this.getText(this.results);
    }
    async filterConditionNew() {
        await this.click(this.conditionNew);
    }
    async filterShipping() {
        await this.click(this.freeShipping);
    }
    async filterShowOnlyFreeReturns() {
        await this.click(this.showOnlyFree);
    }

}