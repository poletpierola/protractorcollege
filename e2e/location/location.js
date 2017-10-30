/**
 * Created by Paola Pierola on 10/28/2017.
 */

var Launch = require('../../page-objects/launch.po.js')
var Location = require('../../page-objects/location.po.js')

describe('Paola Pierola  Location tests ',

    function() {


        it('should show that I can launch landing page ', function(){

            //var page = new Launch();
            var locate = new Location();

            //page.visit();

            locate.location();

            browser.waitForAngular();


           /* browser.wait(function() {
                browser.executeScript('window.scrollTo(0,-200);').then(function () {
                })
            }, 10000);*/



            element.all(by.css('ui-picklist')).then(function(arr) {
                /*var row = arr[48];

                browser.executeScript(scrollIntoView,row.getWebElement()).then(function(){
                    row.click();
                })*/

                var scrollIntoView = function () {
                    arguments[0].scrollIntoView();
                }

            });



            //.//*[@id='locationCriteria']/div[1]/div/div[2]/div[47]/div[1]/span

            //expect((page.searchButton).isDisplayed()).toBe(true);
            expect((locate.selectohio).isDisplayed()).toBe(true);

            expect(locate.clickOhio());

            //browser.waitForAngular();
        });

    });
