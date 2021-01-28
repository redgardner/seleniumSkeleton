const webdriver = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

let options = new chrome.Options();
let chromeCapabilities = webdriver.Capabilities.chrome();

options.addArguments('--no-sandbox')
// options.addArguments('--disable-dev-shm-usage')
// options.addArguments('--disable-blink-features');
// options.addArguments('--disable-blink-features=AutomationControlled');
// options.addArguments("start-maximized")
// options.addArguments("disable-infobars")
// options.addArguments("--disable-extensions")
// options.addArguments("user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.169 Safari/537.36");
// options.setChromeBinaryPath("./node_modules/chromedriver/lib/chromedriver/chromedriver")
// const chromeOptions = {
//   'excludeSwitches': ['enable-automation'],
//   'useAutomationExtension': false
// };
// chromeCapabilities.set('chromeOptions', chromeOptions);
/** Builds WebDriver object */
// all browser config stuff should happen here
// Just using straight chrome for now
const buildDriver = function() {
    return new webdriver.Builder()
    .setChromeOptions(options)
    .withCapabilities(chromeCapabilities)
    .forBrowser('chrome')
    .build();
  };

module.exports = buildDriver;
