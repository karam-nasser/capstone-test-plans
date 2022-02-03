const { By } = require("selenium-webdriver");
const BasePage = require("./basePage");

module.exports = class YooxPage extends BasePage {

    // selectors //

    searchIconBy = By.xpath('//*[@id="fayt-controls"]/svg/use');
    searchInputBy = By.id('js-text-search-input');
    newArrivalsBy = By.xpath('//*[@id="sections-menu"]/li[1]/span');
    headerBy = By.xpath('//*[@id="logo"]/h1/a');
    popUpBy = By.xpath('//*[@id="firstVisitChangeCountryLayer"]/div[1]/button');
    clothingBy = By.xpath('//*[@id="js-newarrivalswomen"]/div[1]/div/div[1]/div/div[1]/a');
    designersBy = By.xpath('//*[@id="sections-menu"]/li[2]/span');
    burberryDesignerBy = By.xpath('//*[@id="js-designerswomen"]/div[1]/div/div[1]/div[2]/div[5]/a');

    constructor(driver, url) {
        super(driver, url);
        // when we use super we are calling the original element & methods from the base page //
    }

    // methods //

    async getYooxHomeHeaderText() {
        return await this.getText(this.headerBy);
    }

    async clickNewArrivals() {
        await this.click(this.newArrivalsBy);
    }

    async dismissChangeCountryPopUp() {
        await this.click(this.popUpBy);
    }

    async clickSearchIcon() {
        await this.click(this.searchIconBy);
    }

    async searchOn(term) {
        await this.setInput(this.searchInputBy, term + '\n');
    }

    async clickClothing() {
        return await this.click(this.clothingBy);
    }

    async clickDesigners() {
        return await this.click(this.designersBy);
    }

    async clickBurberryDesigner() {
        return await this.click(this.burberryDesignerBy);
    }
}