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


  /*let suchfeld = element(by.xpath("//input[@data-web-test='lp-search-input']"));
  let ohneErgebnis = element(by.xpath("//span[@class='dropdown-header no-results ng-star-inserted']"));
  let email = element(by.xpath("//iframe[@data-web-test='login_email']"));
  let password = element(by.xpath("//iframe[@data-web-test='login_password']"));
  let btnAnmelden = element(by.buttonText("Anmelden"));
*/
  urlAufruf() {
    browser.manage().window().maximize();
    browser.waitForAngularEnabled(false);
    browser.get('https://clickdoc.de/cd-de/');
    browser.sleep(2000);
  }

}