import MainPage from "../pages/mainPage.js";

describe("Example test for selenium page", async () => {
  let page;
  beforeEach(async () => {
    page = new MainPage("chrome", "https://www.selenium.dev", 20);
  });
  it("Open browser chrome", async () => {
    await page.basePage.open();
    await page.basePage.webDriverIconShouldVisible();
  });

  afterEach(async () => {
    await page.dispose();
  });
});
