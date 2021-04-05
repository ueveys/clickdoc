import {browser, element, by, promise} from 'protractor';
import { BASE_URL } from '../environment/environment';

export class ClickdocSearchpage {

  public static areaOption = element(by.css("div.col-md-4:nth-child(3)"));
  public static areaResult = element(by.css("div.col-sm-12:nth-child(4)"));
  public static inputFachbereich = element(by.css('#search-query-typeahead'));
  public static inputLokation = element(by.css("#search-location-typeahead"));
  public static checkboxOnlineTermin = element(by.css("#onlineBooking"));
  public static checkboxVideoSprechstunde = element(by.css("#videoCall"));
  public static checkboxBarrierefreiheit = element(by.css("#accessibility"));
  public static btnSuchen = element(by.css(".btn-block"));
  public static radiobtnBesteErgebnisse = element(by.css("#bestHit"));
  public static radiobtnBesteErgebnisseLabel = element(by.xpath("//label[contains(.,'Beste Ergebnisse')]"));
  public static radiobtnAlphabetisch = element(by.css("#sortAlphabetically"));
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
  
}