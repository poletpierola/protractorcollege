/**
 * Created by Paola Pierola on 10/28/2017.
 */


var LaunchPage = function() {


        //element(by.css('a[href=/collegesearch/index.jsp]'));
        //element(by.css('img.src="/_img/start_searching.jpg"'));
        //element(by.css('[href="/collegesesarch/index.jsp"]'))


    this.searchButton  = element(by.xpath(".//*[@id='supermatch']/div[3]/div[10]/div[2]/a/img"));

    this.visit = function() {

        browser.ignoreSynchronization = true;

        browser.get('http://www.collegeview.com/');

        browser.waitForAngular();

    };

   this.clickSearchButton = function(){
        this.searchButton.click();
    };

};

module.exports = LaunchPage;