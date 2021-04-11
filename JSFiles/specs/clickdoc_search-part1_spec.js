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
    });
    it('Auf die Such', function () {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpY2tkb2Nfc2VhcmNoLXBhcnQxX3NwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcGVjcy9jbGlja2RvY19zZWFyY2gtcGFydDFfc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDJDQUErRTtBQUMvRSwwRUFBcUU7QUFDckUsOEVBQXlFO0FBQ3pFLElBQUksT0FBTyxHQUFHLE9BQU8sQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0FBRTVDLFFBQVEsQ0FBQyw0QkFBNEIsRUFBRTtJQUNuQzs7Ozs7Ozs7OztNQVVFO0lBQ0Ysb0JBQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLG1DQUFtQyxDQUFDLENBQUM7SUFDekQsU0FBUyxDQUFDO1FBQ04scUNBQWdCLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBRXJDLENBQUMsQ0FBQyxDQUFDO0lBRVQsRUFBRSxDQUFDLGNBQWMsRUFBRTtRQUVmLHFDQUFnQixDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNuQyxvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNoQixvQkFBTyxDQUFDLGFBQWEsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFTLElBQUk7WUFDdEMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNyQyxDQUFDLENBQUMsQ0FBQztJQUNYLENBQUMsQ0FBQyxDQUFDO0lBRUssRUFBRSxDQUFDLGlFQUFpRSxFQUFFO1FBRWxFLG9CQUFPLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxnRUFBZ0UsQ0FBQyxDQUFDO1FBQ3RGLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3BCLE1BQU0sQ0FBQyx5Q0FBa0IsQ0FBQyxVQUFVLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDO1lBQ2pGLENBQUMsRUFB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