const { Builder, Capabilities } = require("selenium-webdriver");
const driver = new Builder().withCapabilities(Capabilities.chrome()).build();
const EbayPage = require("./ebayPage");
var ebayPage = new EbayPage(driver, 'https://www.ebay.com/');

// Clean up driver after test
afterEach(async() => {
    await ebayPage.driver.quit();
});

test('Filter eBay', async() => {

    await ebayPage.navigate();
    // click into search bar, type in search request, click search button //
    await ebayPage.doSearch('puppies');
    // scroll down left column to "condition", click "new" //
    ebayPage = new EbayPage(driver, 'https://www.ebay.com/');
    await ebayPage.filterConditionNew();

    ebayPage = new EbayPage(driver, 'https://www.ebay.com/')
        // continue scrolling down left column to "shipping options", click "free" //
    await ebayPage.filterFreeShipping();
    ebayPage = new EbayPage(driver, 'https://www.ebay.com/');
    // continue scrolling down left column to "return options", click "free" //
    await ebayPage.filterShowOnlyFreeReturns();
    // scroll further down left column to "see all", click //
    ebayPage = new EbayPage(driver, 'https://www.ebay.com/');
}, 30000);