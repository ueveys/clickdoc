import { browser, element, by } from 'protractor';
var helpers = require('protractor-helpers');

export class ClickdocSearchpage {

  static areaOption = element(by.css("div.col-md-4:nth-child(3)"));
  static areaResult = element(by.css("div.col-sm-12:nth-child(4)"));
  static areaResultContainer = element(by.css("app-contact-card.ng-star-inserted"));
  static areaResultContainerItemHeader = element(by.xpath("//app-contact-card[1]//app-contact-header[@class='ng-star-inserted']"));
  static areaResultContainerItemPracticeInfo = element(by.xpath("//app-contact-card[1]//div[@class='about-container']"));
  static areaResultContainerItemPracticeInfoTitel = element(by.xpath("//app-contact-card[1]//div[@class='about-container']//h4[contains(text(),'Name der Gesundheitseinrichtung')]"));
  static areaResultContainerItemServiceVideo = element(by.xpath("//app-profile-field//span[contains(text(),' Videosprechstunde')]"));
  static areaResultContainerItemAppointment = element(by.xpath("//app-contact-card[1]//app-contact-slots-details"));
  static areaResultContainerItemTerminBtn = element(by.xpath("//app-contact-card//app-contact-button-container"));
  static areaResultContainerLoadMoreLink = element(by.xpath("//a[@class='load-more-link']"));
  static inputName = element(by.css('#search-query-typeahead'));
  static inputLokation = element(by.css("#search-location-typeahead"));
  static inputLokationFirsSuggestion = $('button.dropdown-item:nth-child(2)');
  static checkboxOnlineTermin = element(by.xpath("//span[@id='onlineAppointmentsIcon']/following::span[1]"));
  static checkboxOnlineTerminDay = element(by.css(".day > button"));
  static checkboxOnlineTerminTime = element(by.css(".time > button"));
  static checkboxVideoSprechstunde = element(by.xpath("//input[@id='videoCall']/following::label[@for='videoCall']"));
  static checkboxBarrierefreiheit = element(by.xpath("//span[@translate='search.filter.checkbox.accessibility']"));
  static btnSuchen = element(by.xpath("//button[@class='btn btn-primary btn-block']"));
  static radiobtnBesteErgebnisse = element(by.css("#bestHit"));
  static radiobtnBesteErgebnisseLabel = element(by.xpath("//label[contains(.,'Beste Ergebnisse')]"));
  static radiobtnAlphabetisch = element(by.xpath("//div[@class='container sort-container']//div[@class='row sort-section' and position()=2]"));
  static radiobtnAlphabetischAUFsteigend = element(by.css("#ascending"));
  static radiobtnAlphabetischABsteigend = element(by.css("#descending"));
  static radiobtnEntfernung = element(by.css("#noLocation"));
  static radiobtnEnfernungSlider = element(by.css("span.ng5-slider-span:nth-child(3) > span"));
  static radiobtnEntfernung1KM = element(by.css("span.ng5-slider-tick:nth-child(1)"));
  static radiobtnEntfernung20KM = element(by.css("span.ng5-slider-span:nth-child(2)"));
  static radiobtnEntfernung50KM = element(by.css("span.ng5-slider-tick:nth-child(3)"));
  static radiobtnEntfernung100KM = element(by.css("span.ng5-slider-tick:nth-child(4)"));
  static radiobtnEntfernung200KM = element(by.css("span.ng5-slider-tick:nth-child(5)"));
  static radiobtnEntfernung200KMPlus = element(by.css("span.ng5-slider-tick:nth-child(6)"));
  static initialMessageResultArea = element(by.css(".card-title > span"));
  static inputNameDropdownItem = element(by.xpath("//span[@class='dropdown-item-inner']"));
  static nameDoctor = element(by.xpath("//div[@class='contact-header-container']//h2"));
  static nameAA = element(by.xpath("//h2[contains(text(),'A Aa')]"));

  static async btnSuchenKlicken() {
    await this.btnSuchen.click();
  }

  static async btnLoadMoreKlicken() {
    await this.areaResultContainerLoadMoreLink.click();
  }

  static async inputLokationEingeben(lokation: string) {
    await this.inputLokation.sendKeys(lokation);
  }

  static async checkboxOnlineTerminAktivieren() {
    await this.checkboxOnlineTermin.click();
  }

  static async checkboxVideoSprechstundeAktivieren() {
    await this.checkboxVideoSprechstunde.click();
  }

  static async checkboxBarrierefreiheitAktivieren() {
    await this.checkboxBarrierefreiheit.click();
  }

  
  static async radiobtnAlphabetischAktivieren() {
    await this.radiobtnAlphabetisch.click();
  }

}