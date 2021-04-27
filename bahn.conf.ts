import {browser, Config} from "protractor";
import { BAHN_URL } from "./environment/environment";
var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
var log4js = require('log4js');
var fs = require('fs-extra');
require('babel-core/register');

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
      './specs/bahn/bahn_homepage_spec.js',
    ],
    
    //Um Asyc/Wait zu nutzen!
    SELENIUM_PROMISE_MANAGER: false,

    beforeLaunch:function(){
      if (fs.existsSync('./logs/bahn/ExecutionLog.log')) {
          fs.unlink('./logs/bahn/ExecutionLog.log')
      }
     log4js.configure({
         appenders: {
             fileLog: { type: 'file', filename: './logs/bahn/ExecutionLog.log' },
             console: { type: 'log4js-protractor-appender' }
         },
             categories: {
             file: { appenders: ['fileLog'], level: 'info' },
             another: { appenders: ['console'], level: 'trace' },
             default: { appenders: ['console', 'fileLog'], level: 'trace' }
             
           }
     });
 },

    onPrepare: async()=> {
      console.log('The Base URL is: ' + BAHN_URL);
      browser.getCapabilities().then((browserCapabilities: any) => {
      console.log('Browser name is: ' + browserCapabilities.get('browserName'));
      console.log('Browser version is: ' + browserCapabilities.get('version'));
      console.log('Browser OS is: ' + browserCapabilities.get('platform'));
    });

    await browser.waitForAngularEnabled(false);
    await browser.manage().window().maximize();
    

    //Beim Fehler Test abbrechen!
    var failFast = require('jasmine-fail-fast');
    jasmine.getEnv().addReporter(failFast.init());

      browser.logger = log4js.getLogger('protractorLog4js');
     
      
      
      jasmine.getEnv().addReporter(new Jasmine2HtmlReporter({
        savePath: './reports/html/bahn/',
        screenshotsFolder: 'images',
        fileNamePrefix: 'Bahn',
        takeScreenshots: true,
        cleanDestination: true,
      }));
      
    }
  
  
  };