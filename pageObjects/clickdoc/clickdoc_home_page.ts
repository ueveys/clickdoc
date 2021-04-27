import { resolve } from 'node:path';
import {browser, element, by } from 'protractor';
import { CLICKDOC_URL } from '../../environment/environment';

export class ClickdocHomepage {
  
  static btnCookiesAkzep = element(by.css('button.btn:nth-child(2)'));
  static iconProfil = element(by.xpath("//ul[contains(@class,'menu-desktop')]//a[@angularticsaction='Open login iframe']"));
  static favoriten = element(by.css('.menu-item:nth-child(5) .bolder-menu'));
  static iconUser = element(by.css(".menu-item:nth-child(6) .avatar-image"));
  static myprofil = element(by.css(".dropdown-item:nth-child(1) .menu-text"));
  static iconLogout = element(by.css(".dropdown-item:nth-child(2) .menu-text"));
  static iconSuchseite = element(by.css(".menu-item:nth-child(3) .bolder-menu"));

  static async akzeptBtnKlicken(){
    await this.btnCookiesAkzep.click();
  }

  static async iconProfilKlicken(){
    await this.iconProfil.click();
  }

  static async iconSuchseiteKlicken(){
    await this.iconSuchseite.click();
  }

  static async iconUserKlicken(){
    await this.iconUser.click();
  }

  static async iconLogoutKlicken(){
    await this.iconLogout.click();
  }
 
}