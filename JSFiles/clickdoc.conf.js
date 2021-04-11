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
        browserName: 'chrome',
        //shardTestFiles: true,
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
        jasmine.getEnv().addReporter(new Jasmine2HtmlReporter({
            savePath: './reports/html/',
            screenshotsFolder: 'images',
            fileNamePrefix: 'DemoClickdoc',
            takeScreenshots: true,
            cleanDestination: true,
        }));
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpY2tkb2MuY29uZi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2NsaWNrZG9jLmNvbmYudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsMkNBQTJDO0FBQzNDLDJEQUEyRjtBQUMzRixJQUFJLG9CQUFvQixHQUFHLE9BQU8sQ0FBQyxtQ0FBbUMsQ0FBQyxDQUFDO0FBQ3hFLElBQUksTUFBTSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUMvQixJQUFJLEVBQUUsR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7QUFFN0IsZ0NBQWdDO0FBQ3JCLFFBQUEsTUFBTSxHQUFXO0lBQ3hCLDRDQUE0QztJQUM1QyxrREFBa0Q7SUFDbEQsYUFBYSxFQUFDLElBQUk7SUFFbEIsdURBQXVEO0lBQ3ZELFlBQVksRUFBRTtRQUNaLFdBQVcsRUFBRSxRQUFRO1FBQ3JCLHVCQUF1QjtLQUN4QjtJQUVELFNBQVMsRUFBRSxTQUFTO0lBQ3BCLGlCQUFpQixFQUFFLEtBQUs7SUFDeEIsY0FBYyxFQUFFLEtBQUs7SUFDckIsa0JBQWtCLEVBQUUsS0FBSztJQUN6QixlQUFlLEVBQUU7UUFDYixVQUFVLEVBQUUsSUFBSTtRQUNoQixVQUFVLEVBQUUsSUFBSTtRQUNoQixpQkFBaUIsRUFBRSxJQUFJO1FBQ3ZCLFNBQVMsRUFBRSxJQUFJO1FBQ2Ysc0JBQXNCLEVBQUUsTUFBTTtLQUNqQztJQUNELHVFQUF1RTtJQUN2RSwyQ0FBMkM7SUFDM0Msa0NBQWtDO0lBQ2xDLEtBQUssRUFBRTtRQUNMLHNDQUFzQztRQUN0QyxzQ0FBc0M7UUFDdEMsdUNBQXVDO1FBQ3ZDLHVDQUF1QztRQUN2Qyx1Q0FBdUM7S0FDeEM7SUFDRCxZQUFZLEVBQUM7UUFDWCxJQUFJLEVBQUUsQ0FBQyxVQUFVLENBQUMseUJBQXlCLENBQUMsRUFBRTtZQUMxQyxFQUFFLENBQUMsTUFBTSxDQUFDLHlCQUF5QixDQUFDLENBQUE7U0FDdkM7UUFDRixNQUFNLENBQUMsU0FBUyxDQUFDO1lBQ2IsU0FBUyxFQUFFO2dCQUNQLE9BQU8sRUFBRSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLHlCQUF5QixFQUFFO2dCQUM5RCxPQUFPLEVBQUUsRUFBRSxJQUFJLEVBQUUsNEJBQTRCLEVBQUU7YUFDbEQ7WUFDRyxVQUFVLEVBQUU7Z0JBQ1osSUFBSSxFQUFFLEVBQUUsU0FBUyxFQUFFLENBQUMsU0FBUyxDQUFDLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRTtnQkFDL0MsT0FBTyxFQUFFLEVBQUUsU0FBUyxFQUFFLENBQUMsU0FBUyxDQUFDLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRTtnQkFDbkQsT0FBTyxFQUFFLEVBQUUsU0FBUyxFQUFFLENBQUMsU0FBUyxFQUFFLFNBQVMsQ0FBQyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUU7YUFFL0Q7U0FDTixDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUUsU0FBUyxFQUFFO1FBQ1QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsR0FBRyxzQkFBUSxDQUFDLENBQUM7UUFDNUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsR0FBRywrQkFBaUIsQ0FBQyxDQUFDO1FBQ3JELE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLEdBQUcsK0JBQWlCLENBQUMsQ0FBQztRQUNyRCxvQkFBTyxDQUFDLGVBQWUsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLG1CQUF3QixFQUFFLEVBQUU7WUFDNUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsR0FBRyxtQkFBbUIsQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztZQUMxRSxPQUFPLENBQUMsR0FBRyxDQUFDLHNCQUFzQixHQUFHLG1CQUFtQixDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQ3pFLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLEdBQUcsbUJBQW1CLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7UUFDdkUsQ0FBQyxDQUFDLENBQUM7UUFFRCxvQkFBTyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFFdEQsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLG9CQUFvQixDQUFDO1lBQ3BELFFBQVEsRUFBRSxpQkFBaUI7WUFDM0IsaUJBQWlCLEVBQUUsUUFBUTtZQUMzQixjQUFjLEVBQUUsY0FBYztZQUM5QixlQUFlLEVBQUUsSUFBSTtZQUNyQixnQkFBZ0IsRUFBRSxJQUFJO1NBQ3ZCLENBQUMsQ0FBQyxDQUFDO0lBRU4sQ0FBQztDQUVGLENBQUMifQ==