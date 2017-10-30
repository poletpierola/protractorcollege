/**
 * Created by Paola Pierola on 10/28/2017.
 */


var LocationPage = function() {


    //element(by.css('a[href=/collegesearch/index.jsp]'));
    //element(by.css('img.src="/_img/start_searching.jpg"'));
    //element(by.css('[href="/collegesesarch/index.jsp"]'))


    //this.searchButton  = element(by.xpath(".//*[@id='supermatch']/div[3]/div[10]/div[2]/a/img"));
    this.ohio = element(by.xpath(".//*[@id='locationCriteria']/div[1]/div/div[2]/div[47]/div[1]/span"));
    this.selectohio = element(by.css('.ui-picklist-option regionId3 stateId48'));

    this.location = function() {

        browser.ignoreSynchronization = true;

        browser.get('http://www.collegeview.com/collegesearch/index.jsp?crit=0');

        browser.waitForAngular();

    };

    this.clickOhio = function(){
        this.selectohio.click();
    };


    /*browser.wait(function() {
        browser.executeScript('window.scrollTo(0,-200);').then(function () {
        })
    }, 10000);*/




};

module.exports = LocationPage;