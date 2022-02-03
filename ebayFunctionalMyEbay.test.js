const { Builder, Capabilities } = require("selenium-webdriver");
const driver = new Builder().withCapabilities(Capabilities.chrome()).build();
const EbayPage = require("./ebayPage");
const MyEbayPage = require("./myEbayPage");
const EbayUserNamePage = require("./ebayUserNamePage");
const EbayPasswordPage = require("./ebayPasswordPage");
var ebayPage = new EbayPage(driver, 'https://www.ebay.com/');

// Clean up driver after test
afterEach(async() => {
    await ebayPage.driver.quit();
});

test('My eBay', async() => {
    await ebayPage.navigate();
    await ebayPage.clickMyEbay();
    var ebayUserNamePage = new EbayUserNamePage(driver, null);
    await ebayUserNamePage.userNameInput("decadentmobile@gmail.com");
    await ebayUserNamePage.clickContinue();
    var ebayPasswordPage = new EbayPasswordPage(driver, null);
    await ebayPasswordPage.InputPassword("nasseka15@");
    await ebayPasswordPage.clickSignIn();
    var myEbayPage = new MyEbayPage(driver);
    await myEbayPage.clickFindDeals();
    expect(driver.getCurrentUrl()).toBe('https://www.ebay.com/help/buying/search-tips/search-tips?id=4006');
}, 30000)