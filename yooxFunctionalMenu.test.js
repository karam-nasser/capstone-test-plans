const { Builder, Capabilities } = require("selenium-webdriver");
const driver = new Builder().withCapabilities(Capabilities.chrome()).build();
const YooxPage = require("./yooxPage");
const YooxNewArrivalsPage = require("./yooxNewArrivalsPage");
var yooxPage = new YooxPage(driver, 'https://www.yoox.com/us/women');

// Clean up driver after test
afterEach(async() => {
    await homePage.driver.quit();
});

test('Yoox menu', async() => {

    await yooxPage.navigate();

    await yooxPage.clickNewArrivals();
    await yooxPage.clickClothing();

    const newArrivalsPage = new YooxNewArrivalsPage(driver, null);
    await newArrivalsPage.clickFirstClothingItem();

}, 30000)