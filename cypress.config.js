const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://dev.visionstrust.com/registration/login",
    specPattern: "**/*.feature",
    supportFile: "cypress/support/e2e.js",
  },
});
