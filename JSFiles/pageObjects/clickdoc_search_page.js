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
ClickdocSearchpage.areaResult = protractor_1.element(protractor_1.by.css("div.col-sm-12:nth-child(4)"));
ClickdocSearchpage.areaResultContainer = protractor_1.element(protractor_1.by.css("app-contact-card.ng-star-inserted:nth-child(1)"));
ClickdocSearchpage.areaResultContainerItemHeader = protractor_1.element(protractor_1.by.xpath("//app-contact-card[1]//app-contact-header[@class='ng-star-inserted']"));
ClickdocSearchpage.areaResultContainerItemPracticeInfo = protractor_1.element(protractor_1.by.xpath("//app-contact-card[1]//div[@class='about-container']"));
ClickdocSearchpage.areaResultContainerItemPracticeInfoTitel = protractor_1.element(protractor_1.by.xpath("//app-contact-card[1]//div[@class='about-container']//h4[contains(text(),'Name der Gesundheitseinrichtung')]"));
ClickdocSearchpage.areaResultContainerItemAppointment = protractor_1.element(protractor_1.by.xpath("//app-contact-card[1]//app-contact-slots-details"));
ClickdocSearchpage.areaResultContainerLoadMoreLink = protractor_1.element(protractor_1.by.xpath("//a[@class='load-more-link']"));
ClickdocSearchpage.inputName = protractor_1.element(protractor_1.by.css('#search-query-typeahead'));
ClickdocSearchpage.inputLokation = protractor_1.element(protractor_1.by.css("#search-location-typeahead"));
ClickdocSearchpage.checkboxOnlineTermin = protractor_1.element(protractor_1.by.css("#onlineBooking"));
ClickdocSearchpage.checkboxVideoSprechstunde = protractor_1.element(protractor_1.by.css("#videoCall"));
ClickdocSearchpage.checkboxBarrierefreiheit = protractor_1.element(protractor_1.by.css("#accessibility"));
ClickdocSearchpage.btnSuchen = protractor_1.element(protractor_1.by.css(".btn-block"));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpY2tkb2Nfc2VhcmNoX3BhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9wYWdlT2JqZWN0cy9jbGlja2RvY19zZWFyY2hfcGFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwyQ0FBeUQ7QUFFekQsb0VBQWdFO0FBRWhFLE1BQWEsa0JBQWtCO0lBZ0N0QixNQUFNLENBQUMsb0JBQW9CLENBQUMsSUFBWTtRQUM3QyxnQ0FBZ0M7UUFDaEMsb0NBQWdCLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDdEQsb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDcEIsTUFBTSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUUvRCxDQUFDO0lBRU0sTUFBTSxDQUFDLGtCQUFrQixDQUFDLElBQVk7UUFDM0MsZ0NBQWdDO1FBQ2hDLG9DQUFnQixDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3RELG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3BCLE1BQU0sQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBRW5FLENBQUM7O0FBOUNILGdEQStDQztBQTdDZSw2QkFBVSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQywyQkFBMkIsQ0FBQyxDQUFDLENBQUM7QUFDMUQsNkJBQVUsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsNEJBQTRCLENBQUMsQ0FBQyxDQUFDO0FBQzNELHNDQUFtQixHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxnREFBZ0QsQ0FB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