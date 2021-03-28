import { Config } from "protractor";

// An example configuration file
export let config: Config = {
    //seleniumAddress: 'http://localhost:4444/wd/hub',
    directConnect: true,
    framework: 'custom',
    // path relative to the current config file
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    // Capabilities to be passed to the webdriver instance.
    capabilities: {
        browserName: 'chrome'
    },

    specs: ['../features/*.feature'],

    // Options to be passed to Jasmine-node.
    cucumberOpts: {
        // require step definitions
        require: [
            '../stepDef/*.steps.ts' // accepts a glob
        ],
    }

};