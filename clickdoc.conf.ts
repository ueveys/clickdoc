import {browser, Config} from "protractor";
import { BASE_URL, CLICKDOC_PASSWORD, CLICKDOC_USERNAME } from "./environment/environment";
var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
var log4js = require('log4js');
var fs = require('fs-extra');

// An example configuration file
export let config: Config = {
    // The address of a running selenium server.
    //seleniumAddress: 'http://localhost:4444/wd/hub',
    directConnect:true,
  
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
    beforeLaunch:function(){
      if (fs.existsSync('./logs/ExecutionLog.log')) {
          fs.unlink('./logs/ExecutionLog.log')
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

    onPrepare: function(){
      console.log('The Base URL is: ' + BASE_URL);
      console.log('The Username is: ' + CLICKDOC_USERNAME);
      console.log('The Password is: ' + CLICKDOC_PASSWORD);
      browser.getCapabilities().then((browserCapabilities: any) => {
      console.log('Browser name is: ' + browserCapabilities.get('browserName'));
      console.log('Browser version is: ' + browserCapabilities.get('version'));
      console.log('Browser OS is: ' + browserCapabilities.get('platform'));
    });

      browser.logger = log4js.getLogger('protractorLog4js');
      
      jasmine.getEnv().addReporter(new Jasmine2HtmlReporter({
        savePath: './reports/html/',
        screenshotsFolder: 'images',
        fileNamePrefix: 'DemoClickdoc',
        takeScreenshots: true,
        cleanDestination: true,
      }));
      
    }
  
  };