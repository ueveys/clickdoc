import {browser, element, by} from 'protractor';
var helpers = require('protractor-helpers');

export class ClickdocSearchpage {

  public static areaOption = element(by.css("div.col-md-4:nth-child(3)"));
  //public static areaOption = $('div.col-md-4:nth-child(3)');
  public static areaResult = element(by.css("div.col-sm-12:nth-child(4)"));
  public static areaResultContainer = element(by.css("app-contact-card.ng-star-inserted"));
 //public static areaResultContainer = element(by.css(".panel"));
  public static areaResultContainerItemHeader = element(by.xpath("//app-contact-card[1]//app-contact-header[@class='ng-star-inserted']"));
  public static areaResultContainerItemPracticeInfo = element(by.xpath("//app-contact-card[1]//div[@class='about-container']"));
  public static areaResultContainerItemPracticeInfoTitel = element(by.xpath("//app-contact-card[1]//div[@class='about-container']//h4[contains(text(),'Name der Gesundheitseinrichtung')]"));
  public static areaResultContainerItemServiceVideo = element(by.xpath("//app-profile-field//span[contains(text(),' Videosprechstunde')]"));
  public static areaResultContainerItemAppointment = element(by.xpath("//app-contact-card[1]//app-contact-slots-details"));
  public static areaResultContainerItemTerminBtn = element(by.xpath("//app-contact-card//app-contact-button-container"));
  public static areaResultContainerLoadMoreLink = element(by.xpath("//a[@class='load-more-link']"));
  public static inputName = element(by.css('#search-query-typeahead'));
  public static inputLokation = element(by.css("#search-location-typeahead"));
  //public static inputLokationFirsSuggestion = element(by.css("button.dropdown-item:nth-child(2)"));
  public static inputLokationFirsSuggestion = $('button.dropdown-item:nth-child(2)');
  public static checkboxOnlineTermin = element(by.xpath("//span[@id='onlineAppointmentsIcon']/following::span[1]"));
  public static checkboxOnlineTerminDay = element(by.css(".day > button"));
  public static checkboxOnlineTerminTime = element(by.css(".time > button"));
  public static checkboxVideoSprechstunde = element(by.xpath("//input[@id='videoCall']/following::label[@for='videoCall']"));
  public static checkboxBarrierefreiheit = element(by.xpath("//span[@translate='search.filter.checkbox.accessibility']"));
  public static btnSuchen = element(by.xpath("//button[@class='btn btn-primary btn-block']"));
  public static radiobtnBesteErgebnisse = element(by.css("#bestHit"));
  public static radiobtnBesteErgebnisseLabel = element(by.xpath("//label[contains(.,'Beste Ergebnisse')]"));
  public static radiobtnAlphabetisch = element(by.xpath("//div[@class='container sort-container']//div[@class='row sort-section' and position()=2]"));
  public static radiobtnAlphabetischAUFsteigend = element(by.css("#ascending"));
  public static radiobtnAlphabetischABsteigend = element(by.css("#descending"));
  public static radiobtnEntfernung = element(by.css("#noLocation"));
  public static radiobtnEnfernungSlider = element(by.css("span.ng5-slider-span:nth-child(3) > span"));
  public static radiobtnEntfernung1KM = element(by.css("span.ng5-slider-tick:nth-child(1)"));
  public static radiobtnEntfernung20KM = element(by.css("span.ng5-slider-span:nth-child(2)"));
  public static radiobtnEntfernung50KM = element(by.css("span.ng5-slider-tick:nth-child(3)"));
  public static radiobtnEntfernung100KM = element(by.css("span.ng5-slider-tick:nth-child(4)"));
  public static radiobtnEntfernung200KM = element(by.css("span.ng5-slider-tick:nth-child(5)"));
  public static radiobtnEntfernung200KMPlus = element(by.css("span.ng5-slider-tick:nth-child(6)"));
  public static initialMessageResultArea = element(by.css(".card-title > span"));
  public static inputNameDropdownItem = element(by.xpath("//span[@class='dropdown-item-inner']"));
  public static nameDoctor = element(by.xpath("//div[@class='contact-header-container']//h2")); 
  public static nameAA = element(by.xpath("//h2[contains(text(),'A Aa')]"));

  public static dropdownItemDisapp(name: string){
    //this.inputName.sendKeys(name);
    helpers.clearAndSetValue(this.inputName, name);
    browser.sleep(3000);
    expect(this.inputNameDropdownItem.getText()).not.toContain(name);

  }

  public static checkboxDeaktivieren(checkboxID:any){
    element(by.xpath(`${checkboxID}`)).isSelected().then(function(checkbox){
      if(checkbox===true){
        element(by.xpath(`${checkboxID}`)).click();
      }
  });
}

public static checkboxAktivieren(checkboxID:any){
  element(by.xpath(`${checkboxID}`)).isSelected().then(function(checkbox){
    if(checkbox===false){
        element(by.xpath(`${checkboxID}`)).click();
    }
});
}


  
}