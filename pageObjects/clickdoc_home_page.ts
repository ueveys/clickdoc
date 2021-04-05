import {browser, element, by, promise} from 'protractor';
import { BASE_URL } from '../environment/environment';

export class ClickdocHomepage {

  
  
  public static profil = element(by.css('.menu-item:nth-child(5) .bold-menu-text'));
  public static favoriten = element(by.css('.menu-item:nth-child(5) .bolder-menu'));
  //public static userIcon = element(by.css(".user-profile-dropdown-toggle > app-avatar:nth-child(1) > div:nth-child(1) > img")); 
  public static userIcon = element(by.css(".menu-item:nth-child(6) .avatar-image"));
  public static myprofil = element(by.css(".dropdown-item:nth-child(1) .menu-text"));
  public static logout = element(by.css(".dropdown-item:nth-child(2) .menu-text"));
  public static btnCookiesAkzep = element(by.css('button.btn:nth-child(2)'));
  
  
  urlAufruf() {
    browser.get(BASE_URL);
  }

}