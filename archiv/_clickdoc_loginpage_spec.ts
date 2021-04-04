import { browser, by, element } from "protractor";
import { ClickdocHomepage } from "../pageObjects/clickdoc_home_page";
import { CgmProfil } from "./clickdoc_profil_page";
import { LoginPopup } from "../pageObjects/clickdoc_loginPopup_page";

describe('Clickdoc Homepage', async ()=> {

    beforeAll(function(){
        browser.waitForAngularEnabled(false);
    });


  it('Switch to URL of Application', async () => {

    let clickdocHome = new ClickdocHomepage();
    //Navigation
    browser.waitForAngularEnabled(false);
    //TS_1: Switch to URL of Application
    //Act
    await clickdocHome.urlAufruf();
    await browser.manage().window().maximize();
    // Assert
    //TS_1: CLICKDOC Front-Page is displayed
    let titelVorgabe = "CLICKDOC";
    await expect(browser.getTitle()).toContain(titelVorgabe);
    browser.sleep(3000);

    await clickdocHome.cookiesAkzeptieren();
  });

  it('Click profile-button at the top top right of the page', async () => {

    let clickdocHome = new ClickdocHomepage();
    //Act
    //TS_2: Klick profile-button und switch to LoginPopup 
    clickdocHome.profilIconKlicken();
    browser.sleep(5000);
    browser.switchTo().frame(3);

    // Pageobjekt of loginpopup creat
    let popupPage = new LoginPopup();

    //Assert
    /*TS_2: Elements exist:
        1-Close-Icon, 2- Mail-Input, 3-Password-Input, 4- Forgot-Password Button
        5- Register-Button, 6-Login-button
    */
     expect(popupPage.btnLogin.isPresent()).toBe(true);   




    
  });

});