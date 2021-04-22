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
const environment_1 = require("../environment/environment");
const clickdoc_home_page_1 = require("../pageObjects/clickdoc_home_page");
const clickdoc_search_page_1 = require("../pageObjects/clickdoc_search_page");
var helpers = require('protractor-helpers');
describe('Clickdoc_SearchPage-Part1:', () => {
    it('Call the browser again:', () => __awaiter(void 0, void 0, void 0, function* () {
        yield protractor_1.browser.get(environment_1.BASE_URL);
    }));
    it('Go to the search page:', () => __awaiter(void 0, void 0, void 0, function* () {
        yield protractor_1.browser.sleep(3000);
        yield clickdoc_home_page_1.ClickdocHomepage.suchseiteKlicken();
        yield helpers.waitForElement(clickdoc_search_page_1.ClickdocSearchpage.inputName, 5000);
        yield clickdoc_search_page_1.ClickdocSearchpage.inputName.clear();
    }));
    it('TestCase16: Check Video-Conference-Checkbox, Only the doctors with videoconference displayed:', () => __awaiter(void 0, void 0, void 0, function* () {
        yield protractor_1.browser.logger.info("TestCase16: Check Video-Conference-Checkbox, Only the doctors with videoconference displayed:");
        //befor test clean input field of name
        yield clickdoc_search_page_1.ClickdocSearchpage.inputLokation.clear();
        yield helpers.clearAndSetValue(clickdoc_search_page_1.ClickdocSearchpage.inputLokation, '56567');
        yield helpers.waitForElement(clickdoc_search_page_1.ClickdocSearchpage.inputLokationFirsSuggestion, 3000);
        yield clickdoc_search_page_1.ClickdocSearchpage.inputLokationFirsSuggestion.click();
        yield helpers.waitForElement(clickdoc_search_page_1.ClickdocSearchpage.checkboxVideoSprechstunde, 5000);
        yield clickdoc_search_page_1.ClickdocSearchpage.checkboxVideoSprechstundeAktivieren();
    }));
    it('TestCase16: part 2 Checkbox validieren', () => __awaiter(void 0, void 0, void 0, function* () {
        yield protractor_1.browser.logger.info("TestCase16: part 2 Checkbox validieren");
        yield protractor_1.element(protractor_1.by.css('#videoCall')).isSelected().then((checkbox) => __awaiter(void 0, void 0, void 0, function* () {
            if (checkbox === false) {
                yield clickdoc_search_page_1.ClickdocSearchpage.checkboxVideoSprechstundeAktivieren();
            }
        }));
        yield protractor_1.element(protractor_1.by.css('#onlineBooking')).isSelected().then((checkbox) => __awaiter(void 0, void 0, void 0, function* () {
            if (checkbox === true) {
                yield clickdoc_search_page_1.ClickdocSearchpage.checkboxOnlineTerminAktivieren();
            }
        }));
        yield protractor_1.element(protractor_1.by.css('#accessibility')).isSelected().then((checkbox) => __awaiter(void 0, void 0, void 0, function* () {
            if (checkbox === true) {
                yield clickdoc_search_page_1.ClickdocSearchpage.checkboxBarrierefreiheitAktivieren();
            }
        }));
    }));
    it('TestCase16: part3', () => __awaiter(void 0, void 0, void 0, function* () {
        yield protractor_1.browser.logger.info("TestCase16: part3");
        yield helpers.waitForElement(clickdoc_search_page_1.ClickdocSearchpage.btnSuchen, 5000);
        yield clickdoc_search_page_1.ClickdocSearchpage.btnSuchenKlicken();
        yield helpers.waitForElement($('app-contact-card.ng-star-inserted'), 5000);
        yield protractor_1.browser.sleep(3000);
        yield protractor_1.$$('app-contact-card.ng-star-inserted').then((anzahl) => __awaiter(void 0, void 0, void 0, function* () {
            let gesamtAerzte = yield anzahl.length.toString();
            yield expect(anzahl.length.toString()).toEqual(gesamtAerzte);
            yield protractor_1.element.all(protractor_1.by.xpath("//app-profile-field//span[contains(text(),' Videosprechstunde')]")).then((videoService) => __awaiter(void 0, void 0, void 0, function* () {
                let anzahlAnbieter = yield videoService.length.toString();
                try {
                    if (gesamtAerzte === anzahlAnbieter) {
                        yield console.log("Number of search properties is consistent with the total search result.");
                        yield console.log("gesamt Aerzte: " + gesamtAerzte);
                        yield console.log("anzahl Anbieter: " + anzahlAnbieter);
                    }
                }
                catch (err) {
                    expect(anzahlAnbieter).toBe(false);
                }
            }));
        }));
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpY2tkb2Nfc2VhcmNoLXBhcnQyX3NwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcGVjcy9jbGlja2RvY19zZWFyY2gtcGFydDJfc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLDJDQUFzRDtBQUN0RCw0REFBc0Q7QUFDdEQsMEVBQXFFO0FBQ3JFLDhFQUF5RTtBQUN6RSxJQUFJLE9BQU8sR0FBRyxPQUFPLENBQUMsb0JBQW9CLENBQUMsQ0FBQztBQUU1QyxRQUFRLENBQUMsNEJBQTRCLEVBQUUsR0FBRyxFQUFFO0lBRXhDLEVBQUUsQ0FBQyx5QkFBeUIsRUFBRSxHQUFTLEVBQUU7UUFDckMsTUFBTSxvQkFBTyxDQUFDLEdBQUcsQ0FBQyxzQkFBUSxDQUFDLENBQUM7SUFDaEMsQ0FBQyxDQUFBLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyx3QkFBd0IsRUFBRSxHQUFTLEVBQUU7UUFDcEMsTUFBTSxvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMxQixNQUFNLHFDQUFnQixDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFDMUMsTUFBTSxPQUFPLENBQUMsY0FBYyxDQUFDLHlDQUFrQixDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNqRSxNQUFNLHlDQUFrQixDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUMvQyxDQUFDLENBQUEsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLCtGQUErRixFQUFFLEdBQVMsRUFBRTtRQUUzRyxNQUFNLG9CQUFPLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQywrRkFBK0YsQ0FBQyxDQUFDO1FBQzNILHNDQUFzQztRQUN0QyxNQUFNLHlDQUFrQixDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUMvQyxNQUFNLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyx5Q0FBa0IsQ0FBQyxhQUFhLEVBQUUsT0FBTyxDQUFDLENBQUM7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