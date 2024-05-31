import { By } from "selenium-webdriver";
import { equal } from "assert";

export class BasePage {
  webDriverInon = By.css("#selenium_webdriver");

  constructor(driver, url, timeout) {
    this.driver = driver;
    this.url = url;
    this.timeout = timeout;
  }

  async open() {
    await this.driver.get(this.url);
  }

  async isElementPresent(locator) {
    try {
      await this.driver.findElement(locator);
    } catch (e) {
      return false;
    }
    return true;
  }

  async webDriverIconShouldVisible() {
    equal(await this.isElementPresent(this.webDriverInon), true);
  }
}
