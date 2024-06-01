const config = {
  base_url: process.env.BASE_URL || "https://www.selenium.dev",
  browser: process.env.BROWSER || "chrome",
  timeout: process.env.TIMEOUT ? parseInt(process.env.TIMEOUT) : 20,
};

export { config };
