"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClickdocSearchpage = void 0;
const protractor_1 = require("protractor");
const protractor_helper_1 = require("../helpers/protractor.helper");
class ClickdocSearchpage {
    static dropdownItemValidate(name) {
        //this.inputName.sendKeys(name);
        protractor_helper_1.ProtractorHelper.fillTextAreaTo(this.inputName, name);
        protractor_1.browser.sleep(3000);
        expect(this.inputNameDropdownItem.getText()).toContain(name);
    }
    static dropdownItemDisapp(name) {
        //this.inputName.sendKeys(name);
        protractor_helper_1.ProtractorHelper.fillTextAreaTo(this.inputName, name);
        protractor_1.browser.sleep(3000);
        expect(this.inputNameDropdownItem.getText()).not.toContain(name);
    }
}
exports.ClickdocSearchpage = ClickdocSearchpage;
ClickdocSearchpage.areaOption = protractor_1.element(protractor_1.by.css("div.col-md-4:nth-child(3)"));
//public static areaOption = $('div.col-md-4:nth-child(3)');
ClickdocSearchpage.areaResult = protractor_1.element(protractor_1.by.css("div.col-sm-12:nth-child(4)"));
ClickdocSearchpage.areaResultContainer = protractor_1.element(protractor_1.by.css("app-contact-card.ng-star-inserted"));
//public static areaResultContainer = element(by.css(".panel"));
ClickdocSearchpage.areaResultContainerItemHeader = protractor_1.element(protractor_1.by.xpath("//app-contact-card[1]//app-contact-header[@class='ng-star-inserted']"));
ClickdocSearchpage.areaResultContainerItemPracticeInfo = protractor_1.element(protractor_1.by.xpath("//app-contact-card[1]//div[@class='about-container']"));
ClickdocSearchpage.areaResultContainerItemPracticeInfoTitel = protractor_1.element(protractor_1.by.xpath("//app-contact-card[1]//div[@class='about-container']//h4[contains(text(),'Name der Gesundheitseinrichtung')]"));
ClickdocSearchpage.areaResultContainerItemServiceVideo = protractor_1.element(protractor_1.by.xpath("//app-profile-field//span[contains(text(),' Videosprechstunde')]"));
ClickdocSearchpage.areaResultContainerItemAppointment = protractor_1.element(protractor_1.by.xpath("//app-contact-card[1]//app-contact-slots-details"));
ClickdocSearchpage.areaResultContainerItemTerminBtn = protractor_1.element(protractor_1.by.xpath("//app-contact-card//app-contact-button-container"));
ClickdocSearchpage.areaResultContainerLoadMoreLink = protractor_1.element(protractor_1.by.xpath("//a[@class='load-more-link']"));
ClickdocSearchpage.inputName = protractor_1.element(protractor_1.by.css('#search-query-typeahead'));
ClickdocSearchpage.inputLokation = protractor_1.element(protractor_1.by.css("#search-location-typeahead"));
//public static inputLokationFirsSuggestion = element(by.css("button.dropdown-item:nth-child(2)"));
ClickdocSearchpage.inputLokationFirsSuggestion = $('button.dropdown-item:nth-child(2)');
ClickdocSearchpage.checkboxOnlineTermin = protractor_1.element(protractor_1.by.xpath("//span[@id='onlineAppointmentsIcon']/following::span[1]"));
ClickdocSearchpage.checkboxOnlineTerminDay = protractor_1.element(protractor_1.by.css(".day > button"));
ClickdocSearchpage.checkboxOnlineTerminTime = protractor_1.element(protractor_1.by.css(".time > button"));
ClickdocSearchpage.checkboxVideoSprechstunde = protractor_1.element(protractor_1.by.xpath("//input[@id='videoCall']/following::label[@for='videoCall']"));
ClickdocSearchpage.checkboxBarrierefreiheit = protractor_1.element(protractor_1.by.css("#accessibility"));
ClickdocSearchpage.btnSuchen = protractor_1.element(protractor_1.by.xpath("//button[@class='btn btn-primary btn-block']"));
ClickdocSearchpage.radiobtnBesteErgebnisse = protractor_1.element(protractor_1.by.css("#bestHit"));
ClickdocSearchpage.radiobtnBesteErgebnisseLabel = protractor_1.element(protractor_1.by.xpath("//label[contains(.,'Beste Ergebnisse')]"));
ClickdocSearchpage.radiobtnAlphabetisch = protractor_1.element(protractor_1.by.css("#sortAlphabetically"));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpY2tkb2Nfc2VhcmNoX3BhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9wYWdlT2JqZWN0cy9jbGlja2RvY19zZWFyY2hfcGFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSwyQ0FBNkQ7QUFFN0Qsb0VBQWdFO0FBRWhFLE1BQWEsa0JBQWtCO0lBd0N0QixNQUFNLENBQUMsb0JBQW9CLENBQUMsSUFBWTtRQUM3QyxnQ0FBZ0M7UUFDaEMsb0NBQWdCLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDdEQsb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDcEIsTUFBTSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUUvRCxDQUFDO0lBRU0sTUFBTSxDQUFDLGtCQUFrQixDQUFDLElBQVk7UUFDM0MsZ0NBQWdDO1FBQ2hDLG9DQUFnQixDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3RELG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3BCLE1BQU0sQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBRW5FLENBQUM7O0FBdERILGdEQXVEQztBQXJEZSw2QkFBVSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQywyQkFBMkIsQ0FBQyxDQUFDLENBQUM7QUFDeEUsNERBQTREO0FBQzlDLDZCQUFVLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLDRCQUE0QixDQUFDLENBQUMsQ0FBQztBQUMzRCxzQ0FBbUIsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENB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