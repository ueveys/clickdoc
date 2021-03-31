import {browser, element, by, promise} from 'protractor';

export class ClickdocHomepage {

  
  cookies = element(by.buttonText("Alle akzeptieren"));	
  profil = element(by.xpath("//li[@class='menu-item fullOpacity ng-tns-c119-0 ng-star-inserted']"));
  login = element(by.xpath("//ul[@class='menu-desktop d-lg-block d-md-none d-sm-none ng-tns-c117-0']//a[@angularticsaction='Open login iframe']"));
  email = element(by.xpath("//input[@id='mat-input-1']"));
  password = element(by.xpath("//input[@id='mat-input-2']"));
  btnAnmelden = element(by.xpath("//button[@class='life-primary-btn']"));

  
  

  inputEmail(emailadresse: string){
    this.email.sendKeys(emailadresse);
  }

  inputPassword(passwordtext: string){
    this.password.sendKeys(passwordtext);
  }
  
  anmelden(){
    this.btnAnmelden.click();
  }
 
  urlAufruf() {
    browser.waitForAngularEnabled(false);
    browser.manage().window().maximize();
    browser.get('https://clickdoc.de/cd-de/');
    browser.sleep(2000);
  }

}