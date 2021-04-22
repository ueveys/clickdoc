"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const protractor_1 = require("protractor");
const environment_1 = require("./environment/environment");
var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
var log4js = require('log4js');
var fs = require('fs-extra');
require('babel-core/register');
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
    allScriptsTimeout: 10000,
    getPageTimeout: 10000,
    ScriptTimeoutError: 10000,
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
        /*'./specs/clickdoc_login-part0_spec.js',*/
    ],
    //Um Asyc/Wait zu nutzen!
    SELENIUM_PROMISE_MANAGER: false,
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
    onPrepare: () => __awaiter(void 0, void 0, void 0, function* () {
        console.log('The Base URL is: ' + environment_1.BASE_URL);
        console.log('The Username is: ' + environment_1.CLICKDOC_USERNAME);
        console.log('The Password is: ' + environment_1.CLICKDOC_PASSWORD);
        protractor_1.browser.getCapabilities().then((browserCapabilities) => {
            console.log('Browser name is: ' + browserCapabilities.get('browserName'));
            console.log('Browser version is: ' + browserCapabilities.get('version'));
            console.log('Browser OS is: ' + browserCapabilities.get('platform'));
        });
        protractor_1.browser.waitForAngularEnabled(false);
        yield protractor_1.browser.manage().window().maximize();
        yield protractor_1.browser.get(environment_1.BASE_URL);
        //Beim Fehler Test abbrechen!
        var failFast = require('jasmine-fail-fast');
        //jasmine.getEnv().addReporter(failFast.init());
        protractor_1.browser.logger = log4js.getLogger('protractorLog4js');
        jasmine.getEnv().addReporter(new Jasmine2HtmlReporter({
            savePath: './reports/html/',
            screenshotsFolder: 'images',
            fileNamePrefix: 'DemoClickdoc',
            takeScreenshots: true,
            cleanDestination: true,
        }));
    })
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpY2tkb2MuY29uZi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2NsaWNrZG9jLmNvbmYudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsMkNBQTJDO0FBQzNDLDJEQUEyRjtBQUMzRixJQUFJLG9CQUFvQixHQUFHLE9BQU8sQ0FBQyxtQ0FBbUMsQ0FBQyxDQUFDO0FBQ3hFLElBQUksTUFBTSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUMvQixJQUFJLEVBQUUsR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7QUFDN0IsT0FBTyxDQUFDLHFCQUFxQixDQUFDLENBQUM7QUFFL0IsZ0NBQWdDO0FBQ3JCLFFBQUEsTUFBTSxHQUFXO0lBQ3hCLDRDQUE0QztJQUM1QyxrREFBa0Q7SUFDbEQsYUFBYSxFQUFDLElBQUk7SUFFbEIsdURBQXVEO0lBQ3ZELFlBQVksRUFBRTtRQUNaLFdBQVcsRUFBRSxRQUFRO1FBQ3JCLHVCQUF1QjtLQUN4QjtJQUVELFNBQVMsRUFBRSxTQUFTO0lBQ3BCLGlCQUFpQixFQUFFLEtBQUs7SUFDeEIsY0FBYyxFQUFFLEtBQUs7SUFDckIsa0JBQWtCLEVBQUUsS0FBSztJQUN6QixlQUFlLEVBQUU7UUFDYixVQUFVLEVBQUUsSUFBSTtRQUNoQixVQUFVLEVBQUUsSUFBSTtRQUNoQixpQkFBaUIsRUFBRSxJQUFJO1FBQ3ZCLFNBQVMsRUFBRSxJQUFJO1FBQ2Ysc0JBQXNCLEVBQUUsTUFBTTtLQUNqQztJQUNELHVFQUF1RTtJQUN2RSwyQ0FBMkM7SUFDM0Msa0NBQWtDO0lBQ2xDLEtBQUssRUFBRTtRQUNMLHNDQUFzQztRQUN0QyxzQ0FBc0M7UUFDdEMsdUNBQXVDO1FBQ3ZDLHVDQUF1QztRQUN2Qyx1Q0FBdUM7UUFDdkMsMkNBQTJDO0tBQzVDO0lBRUQseUJBQXlCO0lBQ3pCLHdCQUF3QixFQUFFLEtBQUs7SUFFL0IsWUFBWSxFQUFDO1FBQ1gsSUFBSSxFQUFFLENBQUMsVUFB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