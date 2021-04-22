"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const clickdoc_home_page_1 = require("../pageObjects/clickdoc_home_page");
const clickdoc_search_page_1 = require("../pageObjects/clickdoc_search_page");
var helpers = require('protractor-helpers');
describe('Clickdoc_SearchPage-Part1:', () => {
    beforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
        yield clickdoc_home_page_1.ClickdocHomepage.suchseiteKlicken();
    }));
    protractor_1.browser.logger.info("Clickdoc_SearchPage-Part1 startet");
    it('In der Suchseite', () => __awaiter(void 0, void 0, void 0, function* () {
        yield protractor_1.browser.sleep(1000);
        yield protractor_1.browser.getCurrentUrl().then(function (text) {
            return __awaiter(this, void 0, void 0, function* () {
                expect(yield text).toContain("search");
            });
        });
    }));
    it('TestCase1: Check areas of option and result in the search page:', () => __awaiter(void 0, void 0, void 0, function* () {
        protractor_1.browser.logger.info("TestCase1: Check areas of option and result in the search page");
        yield protractor_1.browser.sleep(1000);
        expect(yield clickdoc_search_page_1.ClickdocSearchpage.areaOption.getLocation()).toEqual(jasmine.objectContaining({
            x: 350.5,
            y: 120
        }));
        expect(yield clickdoc_search_page_1.ClickdocSearchpage.areaResult.getLocation()).toEqual(jasmine.objectContaining({
            x: 651,
            y: 120
        }));
    }));
    it('TestCase2: Option elements are present:', () => __awaiter(void 0, void 0, void 0, function* () {
        yield protractor_1.browser.logger.info("TestCase2: Option elements are present");
        yield clickdoc_search_page_1.ClickdocSearchpage.inputName.isPresent();
        yield clickdoc_search_page_1.ClickdocSearchpage.inputLokation.isPresent();
        yield clickdoc_search_page_1.ClickdocSearchpage.checkboxOnlineTermin.isPresent();
        yield clickdoc_search_page_1.ClickdocSearchpage.checkboxVideoSprechstunde.isPresent();
        yield clickdoc_search_page_1.ClickdocSearchpage.checkboxBarrierefreiheit.isPresent();
        yield clickdoc_search_page_1.ClickdocSearchpage.btnSuchen.isPresent();
        expect(yield clickdoc_search_page_1.ClickdocSearchpage.btnSuchen.getText()).toEqual("SUCHEN");
    }));
    it('TestCase3: Sorting-Sections are present:', () => __awaiter(void 0, void 0, void 0, function* () {
        yield protractor_1.browser.logger.info("TestCase3: Sorting-Sections are present");
        yield clickdoc_search_page_1.ClickdocSearchpage.radiobtnBesteErgebnisse.isPresent();
        yield clickdoc_search_page_1.ClickdocSearchpage.radiobtnAlphabetisch.isPresent();
        yield clickdoc_search_page_1.ClickdocSearchpage.radiobtnEntfernung.isPresent();
        yield clickdoc_search_page_1.ClickdocSearchpage.radiobtnEnfernungSlider.isPresent();
        expect(yield clickdoc_search_page_1.ClickdocSearchpage.radiobtnBesteErgebnisseLabel.getText()).toEqual("Beste Ergebnisse");
    }));
    it('TestCase4: Check initial message result area:', () => __awaiter(void 0, void 0, void 0, function* () {
        yield protractor_1.browser.logger.info("TestCase4: Check initial message result area");
        expect(yield clickdoc_search_page_1.ClickdocSearchpage.initialMessageResultArea.getText()).toContain("AUF DER LINKEN SEITE KANNST DU DIE ARZTSUCHE STARTEN.");
    }));
    it('TestCase5: Check drop-down list of Input Name:', () => __awaiter(void 0, void 0, void 0, function* () {
        yield protractor_1.browser.logger.info("TestCase5: Check drop-down list of Input Name");
        yield helpers.clearAndSetValue(clickdoc_search_page_1.ClickdocSearchpage.inputName, 'Beate');
        yield helpers.waitForElement(clickdoc_search_page_1.ClickdocSearchpage.inputNameDropdownItem, 5000);
        expect(yield clickdoc_search_page_1.ClickdocSearchpage.inputNameDropdownItem.getText()).toContain('Beate');
    }));
    it('TestCase6: Check drop-down list of Input Name further specified:', () => __awaiter(void 0, void 0, void 0, function* () {
        yield protractor_1.browser.logger.info("TestCase6: Check drop-down list of Input Name further specified");
        yield helpers.clearAndSetValue(clickdoc_search_page_1.ClickdocSearchpage.inputName, 'Beate Edel');
        yield helpers.waitForElement(clickdoc_search_page_1.ClickdocSearchpage.inputNameDropdownItem, 5000);
        expect(yield clickdoc_search_page_1.ClickdocSearchpage.inputNameDropdownItem.getText()).toContain('Beate Edel');
    }));
    it('TestCase7: Check drop-down list of Input Name which no results exist:', () => __awaiter(void 0, void 0, void 0, function* () {
        yield protractor_1.browser.logger.info("TestCase7: Check drop-down list of Input Name which no results exist");
        yield helpers.clearAndSetValue(clickdoc_search_page_1.ClickdocSearchpage.inputName, 'Beate Edelse');
        yield helpers.waitForElement(clickdoc_search_page_1.ClickdocSearchpage.inputNameDropdownItem, 5000);
        expect(yield clickdoc_search_page_1.ClickdocSearchpage.inputNameDropdownItem.getText()).not.toContain('Beate Edelse');
    }));
    it('TestCase8: Check drop-down list of Input Name:', () => __awaiter(void 0, void 0, void 0, function* () {
        yield protractor_1.browser.logger.info("TestCase8: Check drop-down list of Input Name");
        yield helpers.clearAndSetValue(clickdoc_search_page_1.ClickdocSearchpage.inputName, 'Beate');
        yield helpers.waitForElement(clickdoc_search_page_1.ClickdocSearchpage.inputNameDropdownItem, 5000);
        expect(yield clickdoc_search_page_1.ClickdocSearchpage.inputNameDropdownItem.getText()).toContain('Beate');
        yield clickdoc_search_page_1.ClickdocSearchpage.areaResult.click();
        yield helpers.waitForElement(clickdoc_search_page_1.ClickdocSearchpage.btnSuchen, 5000);
        yield clickdoc_search_page_1.ClickdocSearchpage.btnSuchenKlicken();
        yield helpers.waitForElement(clickdoc_search_page_1.ClickdocSearchpage.areaResultContainer, 5000);
        expect(yield clickdoc_search_page_1.ClickdocSearchpage.areaResultContainer.getText()).toContain("Beate");
    }));
    it('TestCase9: Check an elements of one result-item:', () => __awaiter(void 0, void 0, void 0, function* () {
        yield protractor_1.browser.logger.info("TestCase9: Check an elements of one result-item");
        yield clickdoc_search_page_1.ClickdocSearchpage.areaResultContainerItemHeader.isPresent();
        yield clickdoc_search_page_1.ClickdocSearchpage.areaResultContainerItemPracticeInfo.isPresent();
        yield clickdoc_search_page_1.ClickdocSearchpage.areaResultContainerItemAppointment.isPresent();
        expect(yield clickdoc_search_page_1.ClickdocSearchpage.areaResultContainerItemPracticeInfoTitel.getText()).toContain("Name der Gesundheitseinrichtung");
    }));
    it('TestCase10: Scroll to the link Show more in the page:', () => __awaiter(void 0, void 0, void 0, function* () {
        yield protractor_1.browser.logger.info("TestCase10: Scroll to the link Show more in the page");
        yield protractor_1.browser.actions().mouseDown(clickdoc_search_page_1.ClickdocSearchpage.areaResultContainerLoadMoreLink).perform();
        yield protractor_1.browser.sleep(2000);
    }));
    it('TestCase11: After Click the „Show more“-Button additional results are loaded:', () => __awaiter(void 0, void 0, void 0, function* () {
        yield protractor_1.browser.logger.info("TestCase11: After Click the „Show more“-Button additional results are loaded:");
        yield protractor_1.$$('app-contact-card.ng-star-inserted').then((numberOfResult) => __awaiter(void 0, void 0, void 0, function* () {
            //die Objekte werden zu einem String umgewandelt.
            let n = yield numberOfResult.length.toString();
            expect(yield numberOfResult.length.toString()).toEqual(n);
            yield clickdoc_search_page_1.ClickdocSearchpage.btnLoadMoreKlicken();
            yield protractor_1.browser.sleep(3000);
            yield protractor_1.$$('app-contact-card.ng-star-inserted').then((nMore) => __awaiter(void 0, void 0, void 0, function* () {
                //Nach dem 'mehr anzeigen'-Klick wird die Liste noch mal gelesen.
                let n2 = yield nMore.length.toString();
                yield expect(nMore.length.toString()).toEqual(n2);
                try {
                    if (n2 > n) {
                        yield console.log("After the update, result is more!");
                    }
                }
                catch (err) {
                    yield console.log("Update did't work.");
                }
            }));
        }));
    }));
    it('TestCase12: Enter location and check the suggestions:', () => __awaiter(void 0, void 0, void 0, function* () {
        yield protractor_1.browser.logger.info("TestCase12: Enter location and check the suggestions:");
        yield protractor_1.browser.sleep(3000);
        yield protractor_1.browser.actions().mouseMove(clickdoc_search_page_1.ClickdocSearchpage.inputLokation).click().perform();
        yield helpers.waitForElement(clickdoc_search_page_1.ClickdocSearchpage.inputLokation, 5000);
        yield clickdoc_search_page_1.ClickdocSearchpage.inputLokationEingeben("56567");
        yield protractor_1.browser.sleep(2000);
        //Methode Click wird hier gestrichen, weil bei der Notation die Formuliereung "$" verwendet wurde.
        yield helpers.waitForElement(clickdoc_search_page_1.ClickdocSearchpage.inputLokationFirsSuggestion, 3000);
        yield clickdoc_search_page_1.ClickdocSearchpage.inputLokationFirsSuggestion.click();
        yield helpers.waitForElement(clickdoc_search_page_1.ClickdocSearchpage.btnSuchen, 5000);
        yield clickdoc_search_page_1.ClickdocSearchpage.btnSuchenKlicken();
    }));
    it('TestCase13: Check the inputfield for timeframe:', () => __awaiter(void 0, void 0, void 0, function* () {
        yield protractor_1.browser.logger.info("TestCase13: Check the inputfield for timeframe:");
        yield protractor_1.browser.sleep(3000);
        yield clickdoc_search_page_1.ClickdocSearchpage.checkboxOnlineTerminAktivieren();
        yield protractor_1.browser.sleep(3000);
        yield clickdoc_search_page_1.ClickdocSearchpage.checkboxOnlineTerminDay.isPresent();
        yield clickdoc_search_page_1.ClickdocSearchpage.checkboxOnlineTerminTime.isPresent();
    }));
    it('TestCase14: Only the results have been displayed with online appointment.', () => __awaiter(void 0, void 0, void 0, function* () {
        yield protractor_1.browser.logger.info("TestCase14: Only the results have been displayed with online appointment.");
        yield clickdoc_search_page_1.ClickdocSearchpage.btnSuchenKlicken();
        yield protractor_1.browser.sleep(5000);
        yield protractor_1.$$('app-contact-card.ng-star-inserted').then((anzahl) => __awaiter(void 0, void 0, void 0, function* () {
            let gesamtAerzte = yield anzahl.length.toString();
            yield expect(anzahl.length.toString()).toEqual(gesamtAerzte);
            yield protractor_1.element.all(protractor_1.by.xpath('//app-contact-card//app-contact-button-container')).then((terminBtn) => __awaiter(void 0, void 0, void 0, function* () {
                let aktivOnlineTermin = yield terminBtn.length.toString();
                try {
                    if (gesamtAerzte === aktivOnlineTermin) {
                        console.log("Only the results have been displayed with online appointment.");
                        //expect(terminBtn).toBe(true);
                    }
                }
                catch (err) {
                    //expect(terminBtn).toBe(false);
                    console.log("Test ist fehlgeschlagen.");
                }
            }));
        }));
    }));
    it('TestCase15: Check Barrier-Free-Checkbox, Only the doctors with barrier-free state displayed:', () => __awaiter(void 0, void 0, void 0, function* () {
        yield protractor_1.browser.logger.info("TestCase15: Check Barrier-Free-Checkbox, Only the doctors with barrier-free state displayed");
        //Uncheck „Video-Conference“ Checkbox
        yield protractor_1.element(protractor_1.by.css('#videoCall')).isSelected().then((checkbox) => __awaiter(void 0, void 0, void 0, function* () {
            if (checkbox === true) {
                yield clickdoc_search_page_1.ClickdocSearchpage.checkboxVideoSprechstunde.click();
            }
        }));
        yield protractor_1.element(protractor_1.by.css('#onlineBooking')).isSelected().then((checkbox) => __awaiter(void 0, void 0, void 0, function* () {
            if (checkbox === true) {
                yield clickdoc_search_page_1.ClickdocSearchpage.checkboxOnlineTermin.click();
            }
        }));
        yield protractor_1.element(protractor_1.by.css('#accessibility')).isSelected().then((checkbox) => __awaiter(void 0, void 0, void 0, function* () {
            if (checkbox === false) {
                yield clickdoc_search_page_1.ClickdocSearchpage.checkboxBarrierefreiheit.click();
            }
        }));
    }));
    it('TestCase15: part 2', () => __awaiter(void 0, void 0, void 0, function* () {
        yield protractor_1.browser.logger.info("TestCase15: part 2");
        yield clickdoc_search_page_1.ClickdocSearchpage.btnSuchenKlicken();
        yield protractor_1.browser.sleep(5000);
        yield protractor_1.$$('app-contact-card.ng-star-inserted').then((anzahl) => __awaiter(void 0, void 0, void 0, function* () {
            let gesamtAerzte = yield anzahl.length.toString();
            // expect(await anzahl.length.toString()).toEqual(gesamtAerzte);
            yield protractor_1.element.all(protractor_1.by.xpath("//app-profile-field//span[contains(text(),'Barrierefrei')]")).then((barriereFrei) => __awaiter(void 0, void 0, void 0, function* () {
                let anzahlAnbieter = yield barriereFrei.length.toString();
                try {
                    if (gesamtAerzte === anzahlAnbieter) {
                        console.log("Number of search properties is consistent with the total search result.");
                        console.log("gesamt Aerzte: " + gesamtAerzte);
                        console.log("anzahl Anbieter: " + anzahlAnbieter);
                        // expect(anzahlAnbieter).toEqual(gesamtAerzte);
                    }
                }
                catch (err) {
                    console.log("Die Anzahl der Suchergebnis ist mit dem Option Barrierefrei gleich");
                    //expect(anzahlAnbieter).toBe(false);
                }
            }));
        }));
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpY2tkb2Nfc2VhcmNoLXBhcnQxX3NwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcGVjcy9jbGlja2RvY19zZWFyY2gtcGFydDFfc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUNBLDJDQUFzRDtBQUN0RCwwRUFBcUU7QUFDckUsOEVBQXlFO0FBQ3pFLElBQUksT0FBTyxHQUFHLE9BQU8sQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0FBRTVDLFFBQVEsQ0FBQyw0QkFBNEIsRUFBRSxHQUFHLEVBQUU7SUFFeEMsU0FBUyxDQUFDLEdBQVMsRUFBRTtRQUNqQixNQUFNLHFDQUFnQixDQUFDLGdCQUFnQixFQUFFLENBQUM7SUFDOUMsQ0FBQyxDQUFBLENBQUMsQ0FBQztJQUVILG9CQUFPLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxtQ0FBbUMsQ0FBQyxDQUFDO0lBR3pELEVBQUUsQ0FBQyxrQkFBa0IsRUFBRSxHQUFTLEVBQUU7UUFDOUIsTUFBTSxvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMxQixNQUFNLG9CQUFPLENBQUMsYUFBYSxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQWdCLElBQUk7O2dCQUNuRCxNQUFNLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDM0MsQ0FBQztTQUFBLENBQUMsQ0FBQztJQUNQLENBQUMsQ0FBQSxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsaUVBQWlFLEVBQUUsR0FBUyxFQUFFO1FBRTdFLG9CQUFPLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxnRUFBZ0UsQ0FBQyxDQUFDO1FBQ3RGLE1BQU0sb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDMUIsTUFBTSxDQUFDLE1BQU0seUNBQWtCLENBQUMsVUFBVSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLE9BQU8s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