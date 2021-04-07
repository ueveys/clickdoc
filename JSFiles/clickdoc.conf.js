"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const protractor_1 = require("protractor");
const environment_1 = require("./environment/environment");
var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
var log4js = require('log4js');
var fs = require('fs-extra');
// An example configuration file
exports.config = {
    // The address of a running selenium server.
    //seleniumAddress: 'http://localhost:4444/wd/hub',
    directConnect: true,
    // Capabilities to be passed to the webdriver instance.
    capabilities: {
        browserName: 'chrome'
    },
    framework: 'jasmine',
    allScriptsTimeout: 60000,
    getPageTimeout: 60000,
    ScriptTimeoutError: 60000,
    jasmineNodeOpts: {
        onComplete: null,
        showColors: true,
        includeStackTrace: true,
        isVerbose: true,
        defaultTimeoutInterval: 120000
    },
    // Spec patterns are relative to the configuration file location passed
    // to protractor (in this example conf.js).
    // They may include glob patterns.
    specs: [
        './specs/clickdoc_login-part1_spec.js',
        './specs/clickdoc_login-part2_spec.js',
        './specs/clickdoc_search-part1_spec.js',
        './specs/clickdoc_search-part2_spec.js',
        './specs/clickdoc_search-part3_spec.js',
    ],
    beforeLaunch: function () {
        if (fs.existsSync('./logs/ExecutionLog.log')) {
            fs.unlink('./logs/ExecutionLog.log');
        }
        log4js.configure({
            appenders: {
                fileLog: { type: 'file', filename: './logs/ExecutionLog.log' },
                console: { type: 'log4js-protractor-appender' }
            },
            categories: {
                file: { appenders: ['fileLog'], level: 'info' },
                another: { appenders: ['console'], level: 'trace' },
                default: { appenders: ['console', 'fileLog'], level: 'trace' }
            }
        });
    },
    onPrepare: function () {
        console.log('The Base URL is: ' + environment_1.BASE_URL);
        console.log('The Username is: ' + environment_1.CLICKDOC_USERNAME);
        console.log('The Password is: ' + environment_1.CLICKDOC_PASSWORD);
        protractor_1.browser.getCapabilities().then((browserCapabilities) => {
            console.log('Browser name is: ' + browserCapabilities.get('browserName'));
            console.log('Browser version is: ' + browserCapabilities.get('version'));
            console.log('Browser OS is: ' + browserCapabilities.get('platform'));
        });
        protractor_1.browser.logger = log4js.getLogger('protractorLog4js');
        protractor_1.browser.waitForAngularEnabled(false);
        protractor_1.browser.manage().window().maximize();
        jasmine.getEnv().addReporter(new Jasmine2HtmlReporter({
            savePath: './reports/html/',
            screenshotsFolder: 'images',
            fileNamePrefix: 'DemoClickdoc',
            takeScreenshots: true,
            cleanDestination: true,
        }));
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpY2tkb2MuY29uZi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2NsaWNrZG9jLmNvbmYudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsMkNBQTJDO0FBQzNDLDJEQUEyRjtBQUMzRixJQUFJLG9CQUFvQixHQUFHLE9BQU8sQ0FBQyxtQ0FBbUMsQ0FBQyxDQUFDO0FBQ3hFLElBQUksTUFBTSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUMvQixJQUFJLEVBQUUsR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7QUFFN0IsZ0NBQWdDO0FBQ3JCLFFBQUEsTUFBTSxHQUFXO0lBQ3hCLDRDQUE0QztJQUM1QyxrREFBa0Q7SUFDbEQsYUFBYSxFQUFDLElBQUk7SUFFbEIsdURBQXVEO0lBQ3ZELFlBQVksRUFBRTtRQUNaLFdBQVcsRUFBRSxRQUFRO0tBQ3RCO0lBRUQsU0FBUyxFQUFFLFNBQVM7SUFDcEIsaUJBQWlCLEVBQUUsS0FBSztJQUN4QixjQUFjLEVBQUUsS0FBSztJQUNyQixrQkFBa0IsRUFBRSxLQUFLO0lBQ3pCLGVBQWUsRUFBRTtRQUNiLFVBQVUsRUFBRSxJQUFJO1FBQ2hCLFVBQVUsRUFBRSxJQUFJO1FBQ2hCLGlCQUFpQixFQUFFLElBQUk7UUFDdkIsU0FBUyxFQUFFLElBQUk7UUFDZixzQkFBc0IsRUFBRSxNQUFNO0tBQ2pDO0lBQ0QsdUVBQXVFO0lBQ3ZFLDJDQUEyQztJQUMzQyxrQ0FBa0M7SUFDbEMsS0FBSyxFQUFFO1FBQ0wsc0NBQXNDO1FBQ3RDLHNDQUFzQztRQUN0Qyx1Q0FBdUM7UUFDdkMsdUNBQXVDO1FBQ3ZDLHVDQUF1QztLQUN4QztJQUNELFlBQVksRUFBQztRQUNYLElBQUksRUFBRSxDQUFDLFVBQVUsQ0FBQyx5QkFBeUIsQ0FBQyxFQUFFO1lBQzFDLEVBQUUsQ0FBQyxNQUFNLENBQUMseUJBQXlCLENBQUMsQ0FBQTtTQUN2QztRQUNGLE1BQU0sQ0FBQyxTQUFTLENBQUM7WUFDYixTQUFTLEVBQUU7Z0JBQ1AsT0FBTyxFQUFFLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUseUJBQXlCLEVBQUU7Z0JBQzlELE9BQU8sRUFBRSxFQUFFLElBQUksRUFBRSw0QkFBNEIsRUFBRTthQUNsRDtZQUNHLFVBQVUsRUFBRTtnQkFDWixJQUFJLEVBQUUsRUFBRSxTQUFTLEVBQUUsQ0FBQyxTQUFTLENBQUMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFO2dCQUMvQyxPQUFPLEVBQUUsRUFBRSxTQUFTLEVBQUUsQ0FBQyxTQUFTLENBQUMsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFO2dCQUNuRCxPQUFPLEVBQUUsRUFBRSxTQUFTLEVBQUUsQ0FBQyxTQUFTLEVBQUUsU0FBUyxDQUFDLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRTthQUUvRDtTQUNOLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRSxTQUFTLEVBQUU7UUFDVCxPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixHQUFHLHNCQUFRLENBQUMsQ0FBQztRQUM1QyxPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixHQUFHLCtCQUFpQixDQUFDLENBQUM7UUFDckQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsR0FBRywrQkFBaUIsQ0FBQyxDQUFDO1FBQ3JELG9CQUFPLENBQUMsZUFBZSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsbUJBQXdCLEVBQUUsRUFBRTtZQUM1RCxPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixHQUFHLG1CQUFtQixDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO1lBQzFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsc0JBQXNCLEdBQUcsbUJBQW1CLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDekUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsR0FBRyxtQkFBbUIsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztRQUN2RSxDQUFDLENBQUMsQ0FBQztRQUVELG9CQUFPLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUN0RCxvQkFBTyxDQUFDLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3JDLG9CQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDckMsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLG9CQUFvQixDQUFDO1lBQ3BELFFBQVEsRUFBRSxpQkFBaUI7WUFDM0IsaUJBQWlCLEVBQUUsUUFBUTtZQUMzQixjQUFjLEVBQUUsY0FBYztZQUM5QixlQUFlLEVBQUUsSUFBSTtZQUNyQixnQkFBZ0IsRUFBRSxJQUFJO1NBQ3ZCLENBQUMsQ0FBQyxDQUFDO0lBRU4sQ0FBQztDQUVGLENBQUMifQ==