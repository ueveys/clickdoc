"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const clickdoc_search_page_1 = require("../pageObjects/clickdoc_search_page");
var helpers = require('protractor-helpers');
describe('Clickdoc_SearchPage-Part1:', function () {
    /*  it('Call URL and Searchpage:', function () {
          
          browser.logger.info("Call URL and Searchpage");
          ClickdocHomepage.webseiteStarten();
          ClickdocHomepage.suchseite.click();
          browser.sleep(1000);
          browser.getCurrentUrl().then(function(text){
              expect(text).toContain("search");
          });
      });
      */
    it('TestCase16: Check Video-Conference-Checkbox, Only the doctors with videoconference displayed:', function () {
        protractor_1.browser.logger.info("TestCase16: Check Video-Conference-Checkbox, Only the doctors with videoconference displayed:");
        //befor test clean input field of name
        clickdoc_search_page_1.ClickdocSearchpage.inputLokation.clear();
        helpers.clearAndSetValue(clickdoc_search_page_1.ClickdocSearchpage.inputLokation, '56567');
        helpers.waitForElement(clickdoc_search_page_1.ClickdocSearchpage.inputLokationFirsSuggestion, 3000);
        clickdoc_search_page_1.ClickdocSearchpage.inputLokationFirsSuggestion.click();
        helpers.waitForElement(clickdoc_search_page_1.ClickdocSearchpage.checkboxVideoSprechstunde, 5000);
        clickdoc_search_page_1.ClickdocSearchpage.checkboxVideoSprechstunde.click();
    });
    it('TestCase16: part 2 Checkbox validieren', function () {
        protractor_1.browser.logger.info("TestCase16: part 2 Checkbox validieren");
        protractor_1.element(protractor_1.by.css('#videoCall')).isSelected().then(function (checkbox) {
            if (checkbox === false) {
                clickdoc_search_page_1.ClickdocSearchpage.checkboxVideoSprechstunde.click();
            }
        });
        protractor_1.element(protractor_1.by.css('#onlineBooking')).isSelected().then(function (checkbox) {
            if (checkbox === true) {
                clickdoc_search_page_1.ClickdocSearchpage.checkboxOnlineTermin.click();
            }
        });
        protractor_1.element(protractor_1.by.css('#accessibility')).isSelected().then(function (checkbox) {
            if (checkbox === true) {
                clickdoc_search_page_1.ClickdocSearchpage.checkboxBarrierefreiheit.click();
            }
        });
    });
    it('TestCase16: part3', function () {
        protractor_1.browser.logger.info("TestCase16: part3");
        helpers.waitForElement(clickdoc_search_page_1.ClickdocSearchpage.btnSuchen, 5000);
        clickdoc_search_page_1.ClickdocSearchpage.btnSuchen.click();
        helpers.waitForElement($('app-contact-card.ng-star-inserted'), 5000);
        protractor_1.browser.sleep(3000);
        protractor_1.$$('app-contact-card.ng-star-inserted').then(function (anzahl) {
            let gesamtAerzte = anzahl.length.toString();
            expect(anzahl.length.toString()).toEqual(gesamtAerzte);
            protractor_1.element.all(protractor_1.by.xpath("//app-profile-field//span[contains(text(),' Videosprechstunde')]")).then(function (videoService) {
                let anzahlAnbieter = videoService.length.toString();
                if (gesamtAerzte === anzahlAnbieter) {
                    console.log("Number of search properties is consistent with the total search result.");
                    console.log("gesamt Aerzte: " + gesamtAerzte);
                    console.log("anzahl Anbieter: " + anzahlAnbieter);
                }
                else {
                    expect(anzahlAnbieter).toBe(false);
                }
            });
        });
        //TODO:
        //Beim automtisierten Ablauf wird im Umkreis 200km keinen einzigen Arzt in der Suche angezeigt, manuell werden aber die Ärzte angezeigt. 
        //Sehr merkwürdig. muss noch rechechiert werden!!!
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpY2tkb2Nfc2VhcmNoLXBhcnQyX3NwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcGVjcy9jbGlja2RvY19zZWFyY2gtcGFydDJfc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDJDQUErRTtBQUcvRSw4RUFBeUU7QUFDekUsSUFBSSxPQUFPLEdBQUcsT0FBTyxDQUFDLG9CQUFvQixDQUFDLENBQUM7QUFFNUMsUUFBUSxDQUFDLDRCQUE0QixFQUFFO0lBRXJDOzs7Ozs7Ozs7O1FBVUk7SUFDRixFQUFFLENBQUMsK0ZBQStGLEVBQUU7UUFFaEcsb0JBQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLCtGQUErRixDQUFDLENBQUM7UUFDckgsc0NBQXNDO1FBQ3RDLHlDQUFrQixDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUN6QyxPQUFPLENBQUMsZ0JBQWdCLENBQUMseUNBQWtCLENBQUMsYUFBYSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ3BFLE9BQU8sQ0FBQyxjQUFjLENBQUMseUNBQWtCLENBQUMsMkJBQTJCLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDN0UseUNBQWtCLENBQUMsMkJBQTJCLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDdkQsT0FBTyxDQUFDLGNBQWMsQ0FBQyx5Q0FBa0IsQ0FBQyx5QkFBeUIsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUMzRSx5Q0FBa0IsQ0FBQyx5QkFBeUIsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUN6RCxDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyx3Q0FBd0MsRUFBQztRQUN4QyxvQkFBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsd0NBQXdDLENBQUMsQ0FBQztRQUM5RCxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBUyxRQUFRO1lBQzdELElBQUcsUUFB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