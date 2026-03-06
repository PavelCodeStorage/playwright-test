exports.config = {
  output: 'output',
  helpers: {
    Playwright: {
      url: 'https://appfollow.io/',
      browser: 'chromium',
      headless: true,
      waitForNavigation: 'domcontentloaded',

    },
  },
  jest: {},
  bootstrap: null,
  teardown: null,
  gherkin: {
    features: './e2e/features/*.feature',
    steps: './e2e/pages/*.js',
  },
  plugins: {
    screenshotOnFail: {
      enabled: true,
    },
    allure: {
      enabled: false,
    },
  },
  name: 'non-commercial',
};
