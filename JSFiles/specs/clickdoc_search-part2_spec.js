"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const environment_1 = require("../environment/environment");
const clickdoc_home_page_1 = require("../pageObjects/clickdoc_home_page");
const clickdoc_search_page_1 = require("../pageObjects/clickdoc_search_page");
var helpers = require('protractor-helpers');
describe('Clickdoc_SearchPage-Part1:', function () {
    it('Call the browser again:', function () {
        protractor_1.browser.get(environment_1.BASE_URL);
    });
    it('Go to the search page:', function () {
        protractor_1.browser.sleep(3000);
        clickdoc_home_page_1.ClickdocHomepage.suchseite.click();
        helpers.waitForElement(clickdoc_search_page_1.ClickdocSearchpage.inputName, 5000);
        clickdoc_search_page_1.ClickdocSearchpage.inputName.clear();
    });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpY2tkb2Nfc2VhcmNoLXBhcnQyX3NwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcGVjcy9jbGlja2RvY19zZWFyY2gtcGFydDJfc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDJDQUFzRDtBQUN0RCw0REFBc0Q7QUFDdEQsMEVBQXFFO0FBQ3JFLDhFQUF5RTtBQUN6RSxJQUFJLE9BQU8sR0FBRyxPQUFPLENBQUMsb0JBQW9CLENBQUMsQ0FBQztBQUU1QyxRQUFRLENBQUMsNEJBQTRCLEVBQUU7SUFFbkMsRUFBRSxDQUFDLHlCQUF5QixFQUFDO1FBQ3pCLG9CQUFPLENBQUMsR0FBRyxDQUFDLHNCQUFRLENBQUMsQ0FBQztJQUMxQixDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyx3QkFBd0IsRUFBRTtRQUN6QixvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNwQixxQ0FBZ0IsQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDbkMsT0FBTyxDQUFDLGNBQWMsQ0FBQyx5Q0FBa0IsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDM0QseUNBQWtCLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3pDLENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLCtGQUErRixFQUFFO1FBRWhHLG9CQUFPLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQywrRkFBK0YsQ0FBQyxDQUFDO1FBQ3JILHNDQUFzQztRQUN0Qyx5Q0FBa0IsQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDekMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLHlDQUFrQixDQUFDLGFBQWEsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUNwRSxPQUFPLENBQUMsY0FBYyxDQUFDLHlDQUFrQixDQUFDLDJCQUEyQixFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzdFLHlDQUFrQixDQUFDLDJCQUEyQixD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