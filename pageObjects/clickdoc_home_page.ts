import { resolve } from 'node:path';
import {browser, element, by } from 'protractor';
import { BASE_URL } from '../environment/environment';

export class ClickdocHomepage {
  
  static btnCookiesAkzep = element(by.css('button.btn:nth-child(2)'));
  static profil = element(by.xpath("//ul[contains(@class, 'menu-desktop')]//li[position()=5]"));
  static favoriten = element(by.css('.menu-item:nth-child(5) .bolder-menu'));
  static userIcon = element(by.css(".menu-item:nth-child(6) .avatar-image"));
  static myprofil = element(by.css(".dropdown-item:nth-child(1) .menu-text"));
  static logout = element(by.css(".dropdown-item:nth-child(2) .menu-text"));
  static suchseite = element(by.css(".menu-item:nth-child(3) .bolder-menu"));

  static async akzeptBtnKlicken(){
    await this.btnCookiesAkzep.click();
  }

  static async iconProfilKlicken(){
    await this.profil.click();
  }

  static async suchseiteKlicken(){
    await this.suchseite.click();
  }

  static async iconUserKlicken(){
    await this.userIcon.click();
  }

  static async iconLogoutKlicken(){
    await this.logout.click();
  }
 
}