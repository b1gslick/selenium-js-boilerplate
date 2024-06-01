import MainPage from "../pages/mainPage.js";
import { config } from "../config.js";

describe("Example test for selenium page", async () => {
  let page;
  beforeEach(async () => {
    page = new MainPage(config.browser, config.base_url, config.timeout);
  });
  it("Open browser chrome", async () => {
    await page.basePage.open();
    await page.basePage.webDriverIconShouldVisible();
  });

  afterEach(async () => {
    await page.dispose();
  });
});
