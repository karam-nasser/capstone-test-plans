const { Builder, Capabilities } = require("selenium-webdriver");
const driver = new Builder().withCapabilities(Capabilities.chrome()).build();
const YooxPage = require("./yooxPage");
const yooxPage = new YooxPage(driver, 'https://www.yoox.com/us/women');

// Clean up driver after test
afterEach(async() => {
    await yooxPage.driver.quit();
});

test('Yoox home page loads', async() => {

    await yooxPage.navigate();

    const actualHeaderText = await yooxPage.getYooxHomeHeaderText();

    expect(actualHeaderText).toBe('YOOX');

}, 30000)