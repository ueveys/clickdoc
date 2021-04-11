"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClickdocSearchpage = void 0;
const protractor_1 = require("protractor");
var helpers = require('protractor-helpers');
class ClickdocSearchpage {
    static dropdownItemDisapp(name) {
        //this.inputName.sendKeys(name);
        helpers.clearAndSetValue(this.inputName, name);
        protractor_1.browser.sleep(3000);
        expect(this.inputNameDropdownItem.getText()).not.toContain(name);
    }
    static checkboxDeaktivieren(checkboxID) {
        protractor_1.element(protractor_1.by.xpath(`${checkboxID}`)).isSelected().then(function (checkbox) {
            if (checkbox === true) {
                protractor_1.element(protractor_1.by.xpath(`${checkboxID}`)).click();
            }
        });
    }
    static checkboxAktivieren(checkboxID) {
        protractor_1.element(protractor_1.by.xpath(`${checkboxID}`)).isSelected().then(function (checkbox) {
            if (checkbox === false) {
                protractor_1.element(protractor_1.by.xpath(`${checkboxID}`)).click();
            }
        });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpY2tkb2Nfc2VhcmNoX3BhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9wYWdlT2JqZWN0cy9jbGlja2RvY19zZWFyY2hfcGFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwyQ0FBZ0Q7QUFDaEQsSUFBSSxPQUFPLEdBQUcsT0FBTyxDQUFDLG9CQUFvQixDQUFDLENBQUM7QUFFNUMsTUFBYSxrQkFBa0I7SUEwQ3RCLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxJQUFZO1FBQzNDLGdDQUFnQztRQUNoQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUMvQyxvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNwQixNQUFNLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUVuRSxDQUFDO0lBRU0sTUFBTSxDQUFDLG9CQUFvQixDQUFDLFVBQWM7UUFDL0Msb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsVUFBVSxFQUFFLENBQUMsQ0FBQyxDQUFDLFVBQVUsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFTLFFBQVE7WUFDcEUsSUFBRyxRQUFRLEtBQUcsSUFBSSxFQUFDO2dCQUNqQixvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxVQUFVLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7YUFDNUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFTSxNQUFNLENBQUMsa0JBQWtCLENBQUMsVUFBYztRQUM3QyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxVQUFVLEVBQUUsQ0FBQyxDQUFDLENBQUMsVUFBVSxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVMsUUFBUTtZQUNw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