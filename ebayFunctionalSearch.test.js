const { Builder, Capabilities } = require("selenium-webdriver")
const driver = new Builder().withCapabilities(Capabilities.chrome()).build();
const EbayPage = require("./ebayPage");
const ebayPage = new EbayPage(driver, 'https://www.ebay.com/');

// Clean up driver after test
afterEach(async() => {
    await ebayPage.driver.quit();
});

/* navigate to ebay 
    in search bar, enter puppies, after successful, quit */

test('Searching eBay', async() => {
    await ebayPage.navigate();
    await ebayPage.doSearch('puppies');
}, 30000)