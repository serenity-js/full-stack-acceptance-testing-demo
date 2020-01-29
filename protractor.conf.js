// Import the Serenity/JS reporting services, a.k.a. the "Stage Crew Members"
const
    { ArtifactArchiver } = require('@serenity-js/core'),
    { ConsoleReporter } = require('@serenity-js/console-reporter'),
    { Photographer, TakePhotosOfFailures, TakePhotosOfInteractions } = require('@serenity-js/protractor'),
    { SerenityBDDReporter } = require('@serenity-js/serenity-bdd');

exports.config = {
    baseUrl: 'http://localhost:8080',

    // Use the Chrome browser directly to avoid having to use the Selenium WebDriver server
    chromeDriver: require(`chromedriver/lib/chromedriver`).path,
    directConnect: true,

    SELENIUM_PROMISE_MANAGER: false,

    // https://github.com/angular/protractor/blob/master/docs/timeouts.md
    allScriptsTimeout: 110000,

    // Tell Protractor to use the Serenity/JS framework Protractor Adapter
    framework:      'custom',
    frameworkPath:  require.resolve('@serenity-js/protractor/adapter'),

    // We want Protractor to run the UI tests only,
    // since the API tests located under ./spec/api will be executed by Jasmine
    specs: [ './spec/ui/*.spec.ts', ],

    // Configure Serenity/JS to use the Protractor/Jasmine test runner
    // and the Stage Crew Members we've imported at the top of this file
    serenity: {
        runner: 'jasmine',
        crew: [
            ArtifactArchiver.storingArtifactsAt('./target/site/serenity'),
            ConsoleReporter.forDarkTerminals(),
            Photographer.whoWill(TakePhotosOfFailures),     // or Photographer.whoWill(TakePhotosOfInteractions),
            new SerenityBDDReporter(),
        ]
    },

    onPrepare: function() {
        // Since we're interacting with a non-Angular web app,
        // we can disable the Angular-specific synchronisation in Protractor.
        browser.waitForAngularEnabled(false);
    },

    // Tell Jasmine to use the ts-node module to transpile TypeScript code in-memory.
    // This way we can avoid the additional transpilation step when we run the tests.
    jasmineNodeOpts: {
        requires: [ 'ts-node/register' ],
    },

    capabilities: {
        // Use Chrome to run the UI tests.
        browserName: 'chrome',

        // see https://github.com/SeleniumHQ/selenium/wiki/DesiredCapabilities#loggingpreferences-json-object
        loggingPrefs: {
            browser: 'SEVERE' // "OFF", "SEVERE", "WARNING", "INFO", "CONFIG", "FINE", "FINER", "FINEST", "ALL".
        },

        chromeOptions: {
            args: [
                '--no-sandbox',
                '--disable-infobars',
                '--disable-dev-shm-usage',
                '--disable-extensions',
                '--log-level=3',
                '--disable-gpu',
                '--window-size=1920,1080',
                '--headless',               // Run in headless mode. Comment this line out to see the browser.
            ],
        }
    }
};
