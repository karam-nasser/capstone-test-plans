const { By } = require("selenium-webdriver");
const BasePage = require("./basePage");

// navigate to yoox //

module.exports = class YooxNewArrivalsPage extends BasePage {
    // selectors //

    clothingItemImageBy = By.xpath('//*[@id="item_47296276LR"]/div[1]/a/img');
    sizeSmallBy = By.xpath('//*[@id="scrollContent"]/div[3]/div/div[2]/div/div/div/div[2]/div/div/span[1]');
    addToCartButtonBy = By.xpath('//*[@id="addToCart"]/button');

    constructor(driver, url) {
        super(driver, url);
        // when we use super we are calling the original element & methods from the base page //
    }

    // methods //


    async clickFirstClothingItem() {
        return await this.click(this.clothingItemImageBy);
    }

    async clickSmallSize() {
        return await this.click(this.sizeSmallBy);
    }
}