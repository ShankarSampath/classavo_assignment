const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://your-classavo-like-site.com",
    video: false,
    viewportWidth: 1280,
    viewportHeight: 800,
  },
});
