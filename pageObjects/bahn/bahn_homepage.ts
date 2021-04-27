import { element, by } from 'protractor';
var helpers = require('protractor-helpers');

export class BahnHomepage {
  
  static inputFrom = element(by.xpath("//input[@id='js-auskunft-autocomplete-from']"));
  static inputTo = element(by.xpath("//input[@id='js-auskunft-autocomplete-to']"));
  static inputDay = element(by.xpath("//div[@id='js-tab-auskunft']//input[@placeholder='Hinfahrt hinzufügen']"));
  static inputTime = element(by.xpath("//input[@placeholder='Uhrzeit' and @name='time']"));

  static async inputFromSendkeys(name:string){
    await helpers.clearAndSetValue(this.inputFrom, name);
  }

  static async inputToSendkeys(name:string){
    await helpers.clearAndSetValue(this.inputTo, name);
  }

  static async inputDaySendkeys(name:string){
    await helpers.clearAndSetValue(this.inputDay, name);
  }

  static async inputTimeSendkeys(name:string){
    await helpers.clearAndSetValue(this.inputTime, name);
  }
 
}