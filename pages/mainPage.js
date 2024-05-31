import { BasePage } from "./basePage.js";
import { Builder } from "selenium-webdriver";

export class MainPage {
  constructor(browser = browser, url = url, timeout = timeout) {
    this.driver = new Builder().forBrowser(browser).build();
    this.basePage = new BasePage(this.driver, url, timeout);
  }

  async dispose() {
    await this.driver.quit();
  }
}

export default MainPage;
