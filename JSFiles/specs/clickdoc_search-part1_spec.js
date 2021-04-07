"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const clickdoc_home_page_1 = require("../pageObjects/clickdoc_home_page");
const clickdoc_search_page_1 = require("../pageObjects/clickdoc_search_page");
var helpers = require('protractor-helpers');
describe('Clickdoc_SearchPage-Part1:', function () {
    /*it('Call URL and Searchpage:', function () {
        
        browser.logger.info("Call URL and Searchpage");
        ClickdocHomepage.webseiteStarten();
        ClickdocHomepage.suchseite.click();
        browser.sleep(1000);
        browser.getCurrentUrl().then(function(text){
            expect(text).toContain("search");
        });
    });
    */
    protractor_1.browser.logger.info("Clickdoc_SearchPage-Part1 startet");
    beforeAll(function () {
        clickdoc_home_page_1.ClickdocHomepage.suchseite.click();
        protractor_1.browser.sleep(1000);
        protractor_1.browser.getCurrentUrl().then(function (text) {
            expect(text).toContain("search");
        });
    });
    it('TestCase1: Check areas of option and result in the search page:', function () {
        protractor_1.browser.logger.info("TestCase1: Check areas of option and result in the search page");
        protractor_1.browser.sleep(1000);
        expect(clickdoc_search_page_1.ClickdocSearchpage.areaOption.getLocation()).toEqual(jasmine.objectContaining({
            x: 350.5,
            y: 120
        }));
        expect(clickdoc_search_page_1.ClickdocSearchpage.areaResult.getLocation()).toEqual(jasmine.objectContaining({
            x: 651,
            y: 120
        }));
    });
    it('TestCase2: Option elements are present:', function () {
        protractor_1.browser.logger.info("TestCase2: Option elements are present");
        clickdoc_search_page_1.ClickdocSearchpage.inputName.isPresent();
        clickdoc_search_page_1.ClickdocSearchpage.inputLokation.isPresent();
        clickdoc_search_page_1.ClickdocSearchpage.checkboxOnlineTermin.isPresent();
        clickdoc_search_page_1.ClickdocSearchpage.checkboxVideoSprechstunde.isPresent();
        clickdoc_search_page_1.ClickdocSearchpage.checkboxBarrierefreiheit.isPresent();
        clickdoc_search_page_1.ClickdocSearchpage.btnSuchen.isPresent();
        expect(clickdoc_search_page_1.ClickdocSearchpage.btnSuchen.getText()).toEqual("SUCHEN");
    });
    it('TestCase3: Sorting-Sections are present:', function () {
        protractor_1.browser.logger.info("TestCase3: Sorting-Sections are present");
        clickdoc_search_page_1.ClickdocSearchpage.radiobtnBesteErgebnisse.isPresent();
        clickdoc_search_page_1.ClickdocSearchpage.radiobtnAlphabetisch.isPresent();
        clickdoc_search_page_1.ClickdocSearchpage.radiobtnEntfernung.isPresent();
        clickdoc_search_page_1.ClickdocSearchpage.radiobtnEnfernungSlider.isPresent();
        expect(clickdoc_search_page_1.ClickdocSearchpage.radiobtnBesteErgebnisseLabel.getText()).toEqual("Beste Ergebnisse");
    });
    it('TestCase4: Check initial message result area:', function () {
        protractor_1.browser.logger.info("TestCase4: Check initial message result area");
        expect(clickdoc_search_page_1.ClickdocSearchpage.initialMessageResultArea.getText()).toContain("AUF DER LINKEN SEITE KANNST DU DIE ARZTSUCHE STARTEN.");
    });
    it('TestCase5: Check drop-down list of Input Name:', function () {
        protractor_1.browser.logger.info("TestCase5: Check drop-down list of Input Name");
        helpers.clearAndSetValue(clickdoc_search_page_1.ClickdocSearchpage.inputName, 'Beate');
        helpers.waitForElement(clickdoc_search_page_1.ClickdocSearchpage.inputNameDropdownItem, 5000);
        expect(clickdoc_search_page_1.ClickdocSearchpage.inputNameDropdownItem.getText()).toContain('Beate');
    });
    it('TestCase6: Check drop-down list of Input Name further specified:', function () {
        protractor_1.browser.logger.info("TestCase6: Check drop-down list of Input Name further specified");
        helpers.clearAndSetValue(clickdoc_search_page_1.ClickdocSearchpage.inputName, 'Beate Edel');
        helpers.waitForElement(clickdoc_search_page_1.ClickdocSearchpage.inputNameDropdownItem, 5000);
        expect(clickdoc_search_page_1.ClickdocSearchpage.inputNameDropdownItem.getText()).toContain('Beate Edel');
    });
    it('TestCase7: Check drop-down list of Input Name which no results exist:', function () {
        protractor_1.browser.logger.info("TestCase7: Check drop-down list of Input Name which no results exist");
        helpers.clearAndSetValue(clickdoc_search_page_1.ClickdocSearchpage.inputName, 'Beate Edelse');
        helpers.waitForElement(clickdoc_search_page_1.ClickdocSearchpage.inputNameDropdownItem, 5000);
        expect(clickdoc_search_page_1.ClickdocSearchpage.inputNameDropdownItem.getText()).not.toContain('Beate Edelse');
    });
    it('TestCase8: Check drop-down list of Input Name:', function () {
        protractor_1.browser.logger.info("TestCase8: Check drop-down list of Input Name");
        helpers.clearAndSetValue(clickdoc_search_page_1.ClickdocSearchpage.inputName, 'Beate');
        helpers.waitForElement(clickdoc_search_page_1.ClickdocSearchpage.inputNameDropdownItem, 5000);
        expect(clickdoc_search_page_1.ClickdocSearchpage.inputNameDropdownItem.getText()).toContain('Beate');
        clickdoc_search_page_1.ClickdocSearchpage.areaResult.click();
        helpers.waitForElement(clickdoc_search_page_1.ClickdocSearchpage.btnSuchen, 5000);
        clickdoc_search_page_1.ClickdocSearchpage.btnSuchen.click();
        helpers.waitForElement(clickdoc_search_page_1.ClickdocSearchpage.areaResultContainer, 5000);
        expect(clickdoc_search_page_1.ClickdocSearchpage.areaResultContainer.getText()).toContain("Beate");
    });
    it('After TestCase 8 input field clean', function () {
        protractor_1.browser.logger.info("After TestCase 8 input field clean");
        clickdoc_search_page_1.ClickdocSearchpage.inputName.clear();
    });
    it('TestCase9: Check an elements of one result-item:', function () {
        protractor_1.browser.logger.info("TestCase9: Check an elements of one result-item");
        clickdoc_search_page_1.ClickdocSearchpage.areaResultContainerItemHeader.isPresent();
        clickdoc_search_page_1.ClickdocSearchpage.areaResultContainerItemPracticeInfo.isPresent();
        clickdoc_search_page_1.ClickdocSearchpage.areaResultContainerItemAppointment.isPresent();
        expect(clickdoc_search_page_1.ClickdocSearchpage.areaResultContainerItemPracticeInfoTitel.getText()).toContain("Name der Gesundheitseinrichtung");
    });
    it('TestCase10: Scroll to the link Show more in the page:', function () {
        protractor_1.browser.logger.info("TestCase10: Scroll to the link Show more in the page");
        protractor_1.browser.actions().mouseDown(clickdoc_search_page_1.ClickdocSearchpage.areaResultContainerLoadMoreLink).perform();
        protractor_1.browser.sleep(2000);
    });
    it('TestCase11: After Click the „Show more“-Button additional results are loaded:', function () {
        protractor_1.browser.logger.info("TestCase11: After Click the „Show more“-Button additional results are loaded:");
        protractor_1.$$('app-contact-card.ng-star-inserted').then(function (numberOfResult) {
            //die Objekte werden zu einem String umgewandelt.
            let n = numberOfResult.length.toString();
            expect(numberOfResult.length.toString()).toEqual(n);
            clickdoc_search_page_1.ClickdocSearchpage.areaResultContainerLoadMoreLink.click();
            protractor_1.browser.sleep(3000);
            protractor_1.$$('app-contact-card.ng-star-inserted').then(function (nMore) {
                //Nach dem 'mehr anzeigen'-Klick wird die Liste noch mal gelesen.
                let n2 = nMore.length.toString();
                expect(nMore.length.toString()).toEqual(n2);
                if (n2 > n) {
                    console.log("After the update, result is more!");
                }
                else {
                    console.log("Update did't work.");
                }
            });
        });
    });
    it('TestCase12: Enter location and check the suggestions:', function () {
        protractor_1.browser.logger.info("TestCase12: Enter location and check the suggestions:");
        protractor_1.browser.actions().mouseMove(clickdoc_search_page_1.ClickdocSearchpage.inputLokation).click().perform();
        helpers.waitForElement(clickdoc_search_page_1.ClickdocSearchpage.inputLokation, 5000);
        clickdoc_search_page_1.ClickdocSearchpage.inputLokation.sendKeys("56567");
        protractor_1.browser.sleep(2000);
        //Methode Click wird hier gestrichen, weil bei der Notation die Formuliereung "$" verwendet wurde.
        helpers.waitForElement(clickdoc_search_page_1.ClickdocSearchpage.inputLokationFirsSuggestion, 3000);
        clickdoc_search_page_1.ClickdocSearchpage.inputLokationFirsSuggestion.click();
        helpers.waitForElement(clickdoc_search_page_1.ClickdocSearchpage.btnSuchen, 5000);
        clickdoc_search_page_1.ClickdocSearchpage.btnSuchen.click();
    });
    it('TestCase13: Check the inputfield for timeframe:', function () {
        protractor_1.browser.logger.info("TestCase13: Check the inputfield for timeframe:");
        protractor_1.browser.sleep(3000);
        clickdoc_search_page_1.ClickdocSearchpage.checkboxOnlineTermin.click();
        protractor_1.browser.sleep(3000);
        clickdoc_search_page_1.ClickdocSearchpage.checkboxOnlineTerminDay.isPresent();
        clickdoc_search_page_1.ClickdocSearchpage.checkboxOnlineTerminTime.isPresent();
    });
    it('TestCase14: Only the results have been displayed with online appointment.', function () {
        protractor_1.browser.logger.info("TestCase14: Only the results have been displayed with online appointment.");
        clickdoc_search_page_1.ClickdocSearchpage.btnSuchen.click();
        protractor_1.browser.sleep(5000);
        protractor_1.$$('app-contact-card.ng-star-inserted').then(function (anzahl) {
            let gesamtAerzte = anzahl.length.toString();
            expect(anzahl.length.toString()).toEqual(gesamtAerzte);
            protractor_1.element.all(protractor_1.by.xpath('//app-contact-card//app-contact-button-container')).then(function (terminBtn) {
                let aktivOnlineTermin = terminBtn.length.toString();
                if (gesamtAerzte === aktivOnlineTermin) {
                    console.log("Only the results have been displayed with online appointment.");
                }
                else {
                    expect(terminBtn).toBe(false);
                }
            });
        });
    });
    it('TestCase15: Check Barrier-Free-Checkbox, Only the doctors with barrier-free state displayed:', function () {
        protractor_1.browser.logger.info("TestCase15: Check Barrier-Free-Checkbox, Only the doctors with barrier-free state displayed");
        //Uncheck „Video-Conference“ Checkbox
        protractor_1.element(protractor_1.by.css('#videoCall')).isSelected().then(function (checkbox) {
            if (checkbox === true) {
                clickdoc_search_page_1.ClickdocSearchpage.checkboxVideoSprechstunde.click();
            }
        });
        protractor_1.element(protractor_1.by.css('#onlineBooking')).isSelected().then(function (checkbox) {
            if (checkbox === true) {
                clickdoc_search_page_1.ClickdocSearchpage.checkboxOnlineTermin.click();
            }
        });
        protractor_1.element(protractor_1.by.css('#accessibility')).isSelected().then(function (checkbox) {
            if (checkbox === false) {
                clickdoc_search_page_1.ClickdocSearchpage.checkboxBarrierefreiheit.click();
            }
        });
    });
    it('TestCase15: part 2', function () {
        protractor_1.browser.logger.info("TestCase15: part 2");
        clickdoc_search_page_1.ClickdocSearchpage.btnSuchen.click();
        protractor_1.browser.sleep(5000);
        protractor_1.$$('app-contact-card.ng-star-inserted').then(function (anzahl) {
            let gesamtAerzte = anzahl.length.toString();
            expect(anzahl.length.toString()).toEqual(gesamtAerzte);
            protractor_1.element.all(protractor_1.by.xpath("//app-profile-field//span[contains(text(),'Barrierefrei')]")).then(function (barriereFrei) {
                let anzahlAnbieter = barriereFrei.length.toString();
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
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpY2tkb2Nfc2VhcmNoLXBhcnQxX3NwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcGVjcy9jbGlja2RvY19zZWFyY2gtcGFydDFfc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDJDQUErRTtBQUMvRSwwRUFBcUU7QUFDckUsOEVBQXlFO0FBQ3pFLElBQUksT0FBTyxHQUFHLE9BQU8sQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0FBRTVDLFFBQVEsQ0FBQyw0QkFBNEIsRUFBRTtJQUNuQzs7Ozs7Ozs7OztNQVVFO0lBQ0Ysb0JBQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLG1DQUFtQyxDQUFDLENBQUM7SUFDekQsU0FBUyxDQUFDO1FBQ04scUNBQWdCLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ25DLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3BCLG9CQUFPLENBQUMsYUFBYSxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVMsSUFBSTtZQUN0QyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3JDLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQyxDQUFDLENBQUM7SUFFRCxFQUFFLENBQUMsaUVBQWlFLEVBQUU7UUFFbEUsb0JBQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGdFQUFnRSxDQUFDLENBQUM7UUFDdEYsb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDcEIsTUFBTSxDQUFDLHlDQUFrQixDQUFDLFVBQVUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUM7WUFDakYsQ0FBQyxFQUFFLEtBQUs7WUFDUixDQUFDLEVBQUUsR0FBRztTQUNULENBQUMsQ0FBQyxDQUFDO1FBRUosTUFBTSxDQUFDLHlDQUFrQixDQUFDLFVBQVUsQ0FBQyxXQUFX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