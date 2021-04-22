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
exports.ClickdocSearchpage = void 0;
const protractor_1 = require("protractor");
var helpers = require('protractor-helpers');
class ClickdocSearchpage {
    static dropdownItemDisapp(name) {
        return __awaiter(this, void 0, void 0, function* () {
            //this.inputName.sendKeys(name);
            yield helpers.clearAndSetValue(this.inputName, name);
            yield protractor_1.browser.sleep(3000);
            expect(this.inputNameDropdownItem.getText()).not.toContain(name);
        });
    }
    static checkboxDeaktivieren(checkboxID) {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.element(protractor_1.by.xpath(`${checkboxID}`)).isSelected().then(function (checkbox) {
                return __awaiter(this, void 0, void 0, function* () {
                    if (checkbox === true) {
                        yield protractor_1.element(protractor_1.by.xpath(`${checkboxID}`)).click();
                    }
                });
            });
        });
    }
    static checkboxAktivieren(checkboxID) {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.element(protractor_1.by.xpath(`${checkboxID}`)).isSelected().then(function (checkbox) {
                return __awaiter(this, void 0, void 0, function* () {
                    if (checkbox === false) {
                        yield protractor_1.element(protractor_1.by.xpath(`${checkboxID}`)).click();
                    }
                });
            });
        });
    }
    static btnSuchenKlicken() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.btnSuchen.click();
        });
    }
    static btnLoadMoreKlicken() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.areaResultContainerLoadMoreLink.click();
        });
    }
    static inputLokationEingeben(lokation) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.inputLokation.sendKeys(lokation);
        });
    }
    static checkboxOnlineTerminAktivieren() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.checkboxOnlineTermin.click();
        });
    }
    static checkboxVideoSprechstundeAktivieren() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.checkboxVideoSprechstunde.click();
        });
    }
    static checkboxBarrierefreiheitAktivieren() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.checkboxBarrierefreiheit.click();
        });
    }
    static radiobtnAlphabetischAktivieren() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.radiobtnAlphabetisch.click();
        });
    }
}
exports.ClickdocSearchpage = ClickdocSearchpage;
ClickdocSearchpage.areaOption = protractor_1.element(protractor_1.by.css("div.col-md-4:nth-child(3)"));
ClickdocSearchpage.areaResult = protractor_1.element(protractor_1.by.css("div.col-sm-12:nth-child(4)"));
ClickdocSearchpage.areaResultContainer = protractor_1.element(protractor_1.by.css("app-contact-card.ng-star-inserted"));
ClickdocSearchpage.areaResultContainerItemHeader = protractor_1.element(protractor_1.by.xpath("//app-contact-card[1]//app-contact-header[@class='ng-star-inserted']"));
ClickdocSearchpage.areaResultContainerItemPracticeInfo = protractor_1.element(protractor_1.by.xpath("//app-contact-card[1]//div[@class='about-container']"));
ClickdocSearchpage.areaResultContainerItemPracticeInfoTitel = protractor_1.element(protractor_1.by.xpath("//app-contact-card[1]//div[@class='about-container']//h4[contains(text(),'Name der Gesundheitseinrichtung')]"));
ClickdocSearchpage.areaResultContainerItemServiceVideo = protractor_1.element(protractor_1.by.xpath("//app-profile-field//span[contains(text(),' Videosprechstunde')]"));
ClickdocSearchpage.areaResultContainerItemAppointment = protractor_1.element(protractor_1.by.xpath("//app-contact-card[1]//app-contact-slots-details"));
ClickdocSearchpage.areaResultContainerItemTerminBtn = protractor_1.element(protractor_1.by.xpath("//app-contact-card//app-contact-button-container"));
ClickdocSearchpage.areaResultContainerLoadMoreLink = protractor_1.element(protractor_1.by.xpath("//a[@class='load-more-link']"));
ClickdocSearchpage.inputName = protractor_1.element(protractor_1.by.css('#search-query-typeahead'));
ClickdocSearchpage.inputLokation = protractor_1.element(protractor_1.by.css("#search-location-typeahead"));
ClickdocSearchpage.inputLokationFirsSuggestion = $('button.dropdown-item:nth-child(2)');
ClickdocSearchpage.checkboxOnlineTermin = protractor_1.element(protractor_1.by.xpath("//span[@id='onlineAppointmentsIcon']/following::span[1]"));
ClickdocSearchpage.checkboxOnlineTerminDay = protractor_1.element(protractor_1.by.css(".day > button"));
ClickdocSearchpage.checkboxOnlineTerminTime = protractor_1.element(protractor_1.by.css(".time > button"));
ClickdocSearchpage.checkboxVideoSprechstunde = protractor_1.element(protractor_1.by.xpath("//input[@id='videoCall']/following::label[@for='videoCall']"));
ClickdocSearchpage.checkboxBarrierefreiheit = protractor_1.element(protractor_1.by.xpath("//span[@translate='search.filter.checkbox.accessibility']"));
ClickdocSearchpage.btnSuchen = protractor_1.element(protractor_1.by.xpath("//button[@class='btn btn-primary btn-block']"));
ClickdocSearchpage.radiobtnBesteErgebnisse = protractor_1.element(protractor_1.by.css("#bestHit"));
ClickdocSearchpage.radiobtnBesteErgebnisseLabel = protractor_1.element(protractor_1.by.xpath("//label[contains(.,'Beste Ergebnisse')]"));
ClickdocSearchpage.radiobtnAlphabetisch = protractor_1.element(protractor_1.by.xpath("//div[@class='container sort-container']//div[@class='row sort-section' and position()=2]"));
ClickdocSearchpage.radiobtnAlphabetischAUFsteigend = protractor_1.element(protractor_1.by.css("#ascending"));
ClickdocSearchpage.radiobtnAlphabetischABsteigend = protractor_1.element(protractor_1.by.css("#descending"));
ClickdocSearchpage.radiobtnEntfernung = protractor_1.element(protractor_1.by.css("#noLocation"));
ClickdocSearchpage.radiobtnEnfernungSlider = protractor_1.element(protractor_1.by.css("span.ng5-slider-span:nth-child(3) > span"));
ClickdocSearchpage.radiobtnEntfernung1KM = protractor_1.element(protractor_1.by.css("span.ng5-slider-tick:nth-child(1)"));
ClickdocSearchpage.radiobtnEntfernung20KM = protractor_1.element(protractor_1.by.css("span.ng5-slider-span:nth-child(2)"));
ClickdocSearchpage.radiobtnEntfernung50KM = protractor_1.element(protractor_1.by.css("span.ng5-slider-tick:nth-child(3)"));
ClickdocSearchpage.radiobtnEntfernung100KM = protractor_1.element(protractor_1.by.css("span.ng5-slider-tick:nth-child(4)"));
ClickdocSearchpage.radiobtnEntfernung200KM = protractor_1.element(protractor_1.by.css("span.ng5-slider-tick:nth-child(5)"));
ClickdocSearchpage.radiobtnEntfernung200KMPlus = protractor_1.element(protractor_1.by.css("span.ng5-slider-tick:nth-child(6)"));
ClickdocSearchpage.initialMessageResultArea = protractor_1.element(protractor_1.by.css(".card-title > span"));
ClickdocSearchpage.inputNameDropdownItem = protractor_1.element(protractor_1.by.xpath("//span[@class='dropdown-item-inner']"));
ClickdocSearchpage.nameDoctor = protractor_1.element(protractor_1.by.xpath("//div[@class='contact-header-container']//h2"));
ClickdocSearchpage.nameAA = protractor_1.element(protractor_1.by.xpath("//h2[contains(text(),'A Aa')]"));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpY2tkb2Nfc2VhcmNoX3BhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9wYWdlT2JqZWN0cy9jbGlja2RvY19zZWFyY2hfcGFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBa0Q7QUFDbEQsSUFBSSxPQUFPLEdBQUcsT0FBTyxDQUFDLG9CQUFvQixDQUFDLENBQUM7QUFFNUMsTUFBYSxrQkFBa0I7SUF1QzdCLE1BQU0sQ0FBTyxrQkFBa0IsQ0FBQyxJQUFZOztZQUMxQyxnQ0FBZ0M7WUFDaEMsTUFBTSxPQUFPLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQztZQUNyRCxNQUFNLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzFCLE1BQU0sQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRW5FLENBQUM7S0FBQTtJQUVELE1BQU0sQ0FBTyxvQkFBb0IsQ0FBQyxVQUFlOztZQUMvQyxNQUFNLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLFVBQVUsRUFBRSxDQUFDLENBQUMsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBZ0IsUUFBUTs7b0JBQ2pGLElBQUksUUFBUSxLQUFLLElBQUksRUFBRTt3QkFDckIsTUFBTSxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxVQUFVLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7cUJBQ2xEO2dCQUNILENBQUM7YUFBQSxDQUFDLENBQUM7UUFDTCxDQUFDO0tBQUE7SUFFRCxNQUFNLENBQU8sa0JBQWtCLENBQUMsVUFBZTs7WUFDN0MsTUFBTSxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxVQUFVLEVB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