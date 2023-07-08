const { defineConfig } = require("cypress");
const synpressPlugins = require("@synthetixio/synpress/plugins");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://develop.buidler.etherspot.io/",
    specPattern: "cypress/e2e",
    supportFile: "cypress/support/index.js",
    videosFolder: "cypress/videos",
    screenshotsFolder: "cypress/screenshots",
    video: false,
    screenshotOnRunFailure: false,
    setupNodeEvents(on, config) {
      synpressPlugins(on, config);
      return config;
    },

    userAgent: "synpress",
    chromeWebSecurity: true,
    component: {
      componentFolder: ".",
      testFiles: "**/*spec.{js,jsx,ts,tsx}",
    },
    env: {
      coverage: false,
    },
    defaultCommandTimeout: 30000,
    pageLoadTimeout: 30000,
    requestTimeout: 30000,
  },
});
