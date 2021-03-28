"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
// An example configuration file
exports.config = {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VjdW1iZXIuY29uZi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2N1Y3VtYmVyLmNvbmYudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBRUEsZ0NBQWdDO0FBQ3JCLFFBQUEsTUFBTSxHQUFXO0lBQ3hCLGtEQUFrRDtJQUNsRCxhQUFhLEVBQUUsSUFBSTtJQUNuQixTQUFTLEVBQUUsUUFBUTtJQUNuQiwyQ0FBMkM7SUFDM0MsYUFBYSxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsK0JBQStCLENBQUM7SUFDL0QsdURBQXVEO0lBQ3ZELFlBQVksRUFBRTtRQUNWLFdBQVcsRUFBRSxRQUFRO0tBQ3hCO0lBRUQsS0FBSyxFQUFFLENBQUMsdUJBQXVCLENBQUM7SUFFaEMsd0NBQXdDO0lBQ3hDLFlBQVksRUFBRTtRQUNWLDJCQUEyQjtRQUMzQixPQUFPLEVBQUU7WUFDTCx1QkFBdUIsQ0FBQyxpQkFBaUI7U0FDNUM7S0FDSjtDQUVKLENBQUMifQ==