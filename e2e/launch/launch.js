/**
 * Created by Paola Pierola on 10/28/2017.
 */


var Launch = require('../../page-objects/launch.po.js')

describe('Paola Pierola tests ',

    function() {


        it('should show that I can launch landing page ', function(){

            var page = new Launch();

            page.visit();

            browser.waitForAngular();


            expect((page.searchButton).isDisplayed()).toBe(true);

            expect(page.clickSearchButton());

            browser.waitForAngular();
        });

    });

