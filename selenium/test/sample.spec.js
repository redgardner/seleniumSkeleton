const buildDriver = require('../lib/drivers/driver');

let driver;

//TO DO: Figure out linting.
describe("Login Test", async function () {
  this.timeout(60000);

  before(async function () {
    driver = new buildDriver();
    driver.executeScript("Object.defineProperty(navigator, 'webdriver', {get: () => undefined})");
    let test = await driver.executeScript("return navigator.userAgent;")
    console.log(test);
  });


  it('load page', async () => {
    driver.get('http://www.google.com')
  });

  after(async function (done) {
    // await driver.quit();
    done();
  });
});
