import {browser, Config} from "protractor";
var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');

// An example configuration file
export let config: Config = {
    // The address of a running selenium server.
    //seleniumAddress: 'http://localhost:4444/wd/hub',
    directConnect:true,
  
    // Capabilities to be passed to the webdriver instance.
    capabilities: {
      browserName: 'chrome'
    },
    
    framework: 'jasmine',
    // Spec patterns are relative to the configuration file location passed
    // to protractor (in this example conf.js).
    // They may include glob patterns.
    specs: [
      './specs/clickdoc_login_spec.js',
      './specs/clickdoc_homepage_spec.js'
    ],
    //specs: ['./specs/jsonprobe.js'],
  
    // Options to be passed to Jasmine-node.
    jasmineNodeOpts: {
      showColors: true, // Use colors in the command line report.
    },

    onPrepare: function(){
      browser.waitForAngularEnabled(false);
      browser.manage().window().maximize();
      jasmine.getEnv().addReporter(new Jasmine2HtmlReporter({
        savePath: './reports/html/',
        screenshotsFolder: 'images',
        fileNamePrefix: 'DemoClickdoc_e2e_Testreport',
        takeScreenshots: true,
        cleanDestination: true,
      }));
      
    }
  
  };