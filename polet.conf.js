/**
 * Created by Paola Pierola on 10/28/2017.
 */

exports.config = {
    //the address of  Selenium driver
    seleniumAddress: 'http://localhost:4444/wd/hub',

    // Capabilities to be passed to the webdriver instance.
    capabilities: {
        'browserName': 'chrome'
    },

    // Spec patterns are relative to the location of the spec file. They may
    // include glob patterns.
    suites: {
        login: './e2e/launch/launch.js'
        ,

        location:   './e2e/location/location.js'
        ,

        university: [
            './e2e/university/find-university.js',
            './e2e/university/match-university.js']
    },


    framework: 'jasmine2',
    onPrepare: function() {
        var jasmineReporters = require('jasmine-reporters');
        jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
            consolidateAll: true,
            savePath: 'test-results',
            filePrefix: 'xmloutput',
            showColors: true,
            onComplete: null,
            isVerbose: false,
            includeStackTrace: true
            //takeScreenshots: true,
            //takeScreenshotsOnlyOnFailures: true,
            //screenshotsFolder: 'images'
        }));



    },

};






