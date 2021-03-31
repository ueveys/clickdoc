import { browser } from "protractor";
import { ClickdocHomepage } from "../pageObjects/clickdocHomepage_po";
import { CgmProfil } from "../pageObjects/clickdocProfil_po";

describe('Clickdoc Homepage', function () {
  it('Einloggen in der Anwendung', async () => {

    let clickdocHome = new ClickdocHomepage();
    //Navigation
    browser.waitForAngularEnabled(false);
    browser.manage().window().maximize();
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

  it('Zum Patientenkarte wechseln:', function () {

    //Auf dem Homepage auf den Link Patientenkarte klicken.
    let clickdocHome2 = new ClickdocHomepage();
    clickdocHome2.patientenKarteKlicken();
    browser.sleep(7000);

    //Objekt für die Profilseite erstellen
    let profilePage = new CgmProfil();
    browser.sleep(2000);

    //Nach dem öffnen des neuen Tabs zu dem Tab wechseln.
    browser.getAllWindowHandles().then(function (handles) {
      var secondWindowHandle = handles[1];
      var firstWindowHandle = handles[0];
      browser.switchTo().window(secondWindowHandle).then(function () { //zwichen zu neuem Tab
        browser.sleep(3000);
        //Neue Gewichtwerte anlegen  
        profilePage.bereichGewichtAuswaehlen();
        browser.sleep(3000);
        profilePage.btnHinzufuegenKlicken();
        browser.switchTo().activeElement();
        browser.sleep(3000);
        profilePage.inputGewichtAngeben("83");
        browser.sleep(3000);
        profilePage.eintragSpeichern();
        browser.sleep(3000);

        //Assert


      });


    });

  });

});