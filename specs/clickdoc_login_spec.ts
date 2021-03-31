import { browser } from "protractor";
import { ClickdocHomepage } from "../pageObjects/clickdocHomepage";

describe('Clickdoc Homepage', function () {
  it('Einloggen in der Anwendung', async () => {

    let clickdocHome = new ClickdocHomepage();
    //Navigation
    browser.waitForAngularEnabled(false);
    browser.manage().window().setSize(1280, 1024);
    clickdocHome.urlAufruf();
    //Act
    // Assert
    //Assert
    let titelVorgabe = "CLICKDOC";
    expect(browser.getTitle()).toContain(titelVorgabe);
    browser.sleep(2000);
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
    browser.sleep(5000);


  });

});

