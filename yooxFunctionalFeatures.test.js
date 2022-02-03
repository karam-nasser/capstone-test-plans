const { Builder, Capabilities } = require("selenium-webdriver");
const driver = new Builder().withCapabilities(Capabilities.chrome()).build();
const YooxPage = require("./yooxPage");
const yooxPage = new YooxPage(driver, 'https://www.yoox.com/us/women');

// Clean up driver after test
afterEach(async() => {
    await yooxPage.driver.quit();
});

test('Yoox features', async() => {

    await yooxPage.navigate();

    await yooxPage.dismissChangeCountryPopUp();

    await yooxPage.clickDesigners();

    await yooxPage.clickBurberryDesigner();
}, 30000)