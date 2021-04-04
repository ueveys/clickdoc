import {browser, element, by, promise} from 'protractor';
import { BASE_URL } from '../environment/environment';

export class ClickdocHomepage {

  
  
  //cookies = $('button.btn:nth-child(2)');
  //profil = element(by.xpath("//li[@class='menu-item fullOpacity ng-tns-c119-0 ng-star-inserted']"));
  profil = element(by.css('.menu-item:nth-child(5) .bold-menu-text'));
  //login = element(by.css(".menu-item:nth-child(5) .bold-menu-text"));
 
  btnPatientenkarte = element(by.xpath("/html/body/app-root/div[2]/div/app-header/div/div[2]/div/div[2]/ul/li[2]/a/span[3]"));
  
  urlAufruf() {
    browser.get(BASE_URL);
  }

  

  profilIconKlicken(){
    this.profil.click();
  }

  patientenKarteKlicken(){
    this.btnPatientenkarte.click();
  }
}