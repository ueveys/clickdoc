"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const protractor_1 = require("protractor");
var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
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
    // Spec patterns are relative to the configuration file location passed
    // to protractor (in this example conf.js).
    // They may include glob patterns.
    specs: [
        './specs/clickdoc_login-part1_spec.js',
        './specs/clickdoc_login-part2_spec.js'
    ],
    //specs: ['./specs/jsonprobe.js'],
    // Options to be passed to Jasmine-node.
    jasmineNodeOpts: {
        showColors: true, // Use colors in the command line report.
    },
    onPrepare: function () {
        protractor_1.browser.waitForAngularEnabled(false);
        protractor_1.browser.manage().window().maximize();
        jasmine.getEnv().addReporter(new Jasmine2HtmlReporter({
            savePath: './reports/html/',
            screenshotsFolder: 'images',
            fileNamePrefix: 'DemoClickdoc_e2e_Testreport',
            takeScreenshots: true,
            cleanDestination: true,
        }));
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpY2tkb2MuY29uZi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2NsaWNrZG9jLmNvbmYudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsMkNBQTJDO0FBQzNDLElBQUksb0JBQW9CLEdBQUcsT0FBTyxDQUFDLG1DQUFtQyxDQUFDLENBQUM7QUFFeEUsZ0NBQWdDO0FBQ3JCLFFBQUEsTUFBTSxHQUFXO0lBQ3hCLDRDQUE0QztJQUM1QyxrREFBa0Q7SUFDbEQsYUFBYSxFQUFDLElBQUk7SUFFbEIsdURBQXVEO0lBQ3ZELFlBQVksRUFBRTtRQUNaLFdBQVcsRUFBRSxRQUFRO0tBQ3RCO0lBRUQsU0FBUyxFQUFFLFNBQVM7SUFDcEIsdUVBQXVFO0lBQ3ZFLDJDQUEyQztJQUMzQyxrQ0FBa0M7SUFDbEMsS0FBSyxFQUFFO1FBQ0wsc0NBQXNDO1FBQ3RDLHNDQUFzQztLQUN2QztJQUNELGtDQUFrQztJQUVsQyx3Q0FBd0M7SUFDeEMsZUFBZSxFQUFFO1FBQ2YsVUFBVSxFQUFFLElBQUksRUFBRSx5Q0FBeUM7S0FDNUQ7SUFFRCxTQUFTLEVBQUU7UUFDVCxvQkFBTyxDQUFDLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3JDLG9CQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDckMsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLG9CQUFvQixDQUFDO1lBQ3BELFFBQVEsRUFBRSxpQkFBaUI7WUFDM0IsaUJBQWlCLEVBQUUsUUFBUTtZQUMzQixjQUFjLEVBQUUsNkJBQTZCO1lBQzdDLGVBQWUsRUFBRSxJQUFJO1lBQ3JCLGdCQUFnQixFQUFFLElBQUk7U0FDdkIsQ0FBQyxDQUFDLENBQUM7SUFFTixDQUFDO0NBRUYsQ0FBQyJ9