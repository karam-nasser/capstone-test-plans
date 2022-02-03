const { By, until, WebDriver } = require("selenium-webdriver");

module.exports = class BasePage {

    constructor(myDriver, myUrl) {
        this.driver = myDriver
        this.url = myUrl
    }

    // Methods for any page that we might use or use enough to use in majority of tests //

    async navigate() {
        return await this.driver.get(this.url)
    }

    /* waits for the indentified element to be located and visible before returning it,
    @param {By} elementBy - the locator for the element to return */

    async getElement(elementBy) {
        await this.driver.wait(until.elementLocated(elementBy));
        let element = await this.driver.findElement(elementBy);
        await this.driver.wait(until.elementIsVisible(element));
        return element;
    }

    /* clicks the given element after waiting for it and then sends the provided keys
    @param {By} elementBy - the locator for the element to clear
    @param {any} key - string or list of keys to send to the cleared input */

    async setInput(elementBy, keys) {
        let input = await this.driver.findElement(elementBy);
        await input.clear();
        await input.sendKeys(keys);
    }

    // clicks given element after waiting (elementBy) //
    async click(elementBy) {
        const element = await this.getElement(elementBy)
        return element.click()
    }

    /* returns an element's text after waiting for it to be visible
    @param {By} elementBy - the locator of the element to get text from */

    async getText(elementBy) {
        return (await this.getElement(elementBy)).getText();
    }

}