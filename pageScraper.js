const scraperObject = {
  url: "http://192.168.33.13:4646",
  async scraper(browser) {
    let page = await browser.newPage();
    console.log(`Navigating to ${this.url}...`);
    const scrap = await page.goto(this.url);
    // Wait for the required DOM to be rendered
    await page.waitForSelector("#root main");

    const [loginPage] = await page.$x("//span[contains(., 'ورود به سامانه')]");
    if (loginPage) {
      await loginPage.click();
    }

    await page.waitForSelector("#root button");

    await page.type("input[name=email]", "m.parastar@udb.ir", { delay: 100 });
    await page.type("input[name=password]", "123456789", { delay: 100 });
    const [loginButton] = await page.$x("//button[contains(., 'ورود')]");
    if (loginButton) {
      await loginButton.click();
    }

    await page.waitFor(5 * 1000);

    const [radioApp] = await page.$x("//div[contains(., 'سامانه رادیویی')]");
    if (radioApp) {
      await radioApp.click();
    }

    await page.waitForSelector("#customized-menu");

    await page.type("input[id=ostans]", "شهرداري عجب شير", { delay: 100 });
    await page.keyboard.press('Enter')

    console.log(login);
  },
};

module.exports = scraperObject;
