const { Builder, Capabilities, By } = require("selenium-webdriver");
const driver = new Builder().withCapabilities(Capabilities.chrome()).build();
const YooxPage = require("./yooxPage");
var yooxPage = new YooxPage(driver, 'https://www.yoox.com/us/women');

// Clean up driver after test
afterEach(async() => {
    await yooxPage.driver.quit();
});

test('Yoox search womens items', async() => {
    await yooxPage.navigate();

    await yooxPage.clickWomen();
    await yooxPage.clickSearchIcon();
    await yooxPage.searchOn("plein");
    // assert results 

    const numberOfResults = await yooxPage.GetNumberOfSearchResults();
    expect(numberOfResults).toBeGreaterThan(0);

}, 30000)