import { browser, element, by, protractor, WebDriver } from "protractor";
import { ClickdocHomepage } from "../pageObjects/clickdocHomepage";

describe('Clickdoc Homepage', function () {
  it('Einloggen in der Anwendung', async () => {

    let clickdocHome = new ClickdocHomepage();
    //Navigation
    browser.waitForAngularEnabled(true);
    clickdocHome.urlAufruf();
    //Act
    clickdocHome.cookies.click();
    browser.sleep(3000);
    //Navigation
    clickdocHome.login.click();
    browser.sleep(3000);
    browser.switchTo().frame(3);
    
    browser.sleep(3000);
    clickdocHome.inputEmail("geschaeftlich82@gmail.com");
    browser.sleep(3000);
    clickdocHome.inputPassword("Asterweg45!");
    browser.sleep(3000);
    clickdocHome.anmelden();


  });

});
function alert(alert: any) {
  throw new Error("Function not implemented.");
}

