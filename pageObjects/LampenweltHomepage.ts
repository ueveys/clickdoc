import {browser, element, by} from 'protractor';

export class LampenweltHomepage {
  nav1 = element(by.xpath("//li[@class='level0 nav-2 parent' and position()=1]"));
  //aussenleuchten = browser.driver.findElement(by.xpath("//li[@class='level0 nav-2 parent' and position()=2]"));
  //smartHome = browser.driver.findElement(by.xpath("//li[@class='level0 nav-2 parent' and position()=3]"));

  kategorieTitel = browser.driver.findElement(by.xpath("//h1[@class='category-title__headline']"));

  urlAufruf() {
    browser.get('https://www.lampenwelt.de/');
  }

}