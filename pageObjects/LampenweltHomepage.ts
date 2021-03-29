import {browser, element, by} from 'protractor';

export class LampenweltHomepage {
  nav1 = element(by.xpath("//li[@class='level0 nav-2 parent' and position()=1]/*/span"));
  kateTitel = element(by.xpath("//h1[@class='category-title__headline']"));

  urlAufruf() {
    browser.get('https://www.lampenwelt.de/');
  }

}