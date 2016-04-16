// features/support/world.js
var webdriver = require('selenium-webdriver');
var browser = new webdriver.Builder().usingServer().withCapabilities({
    'browserName': 'chrome'
}).build();

function World() {
    var defaultTimeout = 20000;
    var screenshotPath = "screenshots";

    this.webdriver = webdriver;
    this.driver = browser;

    this.visit = function(url, callback) {
        this.browser.get(url, callback);
    };

    this.waitFor = function(cssLocator, timeout) {
        var waitTimeout = timeout || defaultTimeout;
        return browser.wait(function() {
            return browser.isElementPresent({
                css: cssLocator
            });
        }, waitTimeout);
    };
}

module.exports = function() {
    this.World = World;
};