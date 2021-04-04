import { browser, by, element } from "protractor";
import { ClickdocHomepage } from "../pageObjects/clickdoc_home_page";
import { LoginPopup } from "../pageObjects/clickdoc_loginPopup_page";
import { CgmProfil } from "./clickdoc_profil_page";

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
    browser.sleep(5000);
    browser.switchTo().frame(3);

    browser.sleep(3000);
    const loginPopupInst = new LoginPopup();
    loginPopupInst.mailAdresseAngeben("dirk.nonn@cgm.com#1111");
    browser.sleep(3000);
    loginPopupInst.passwordEingeben("recruitingTest1!");
    browser.sleep(3000);
    loginPopupInst.anmeldenKlicken();
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
        let gewichtangabe = "95";
        profilePage.inputGewichtAngeben(gewichtangabe);
        browser.sleep(3000);
        profilePage.eintragSpeichern();
        browser.sleep(3000);

        //Assert
        browser.sleep(3000);
        //expect(profilePage.gewichtSpeicherWertLesen()).toEqual(gewichtangabe);
        //browser.sleep(3000);

      });


    });

  });

});