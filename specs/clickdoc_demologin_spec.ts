import { browser, by, element, WebDriver } from "protractor";
import { DriverProvider } from "protractor/built/driverProviders";
import { BASE_URL, CLICKDOC_PASSWORD, CLICKDOC_USERNAME } from "../environment/environment";
import { ProtractorHelper } from "../helpers/protractor.helper";
import { ClickdocHomepage } from "../pageObjects/clickdoc_home_page";
import { LoginPopup } from "../pageObjects/clickdoc_loginPopup_page";

describe('Clickdoc_Login-Popup:', function () {

    
    const clickdocHome = new ClickdocHomepage();
    //const loginPopupInst = new LoginPopup();

    beforeAll(function() {
        const clickdocHome = new ClickdocHomepage();
        browser.get(BASE_URL);
        const title = ProtractorHelper.getPageTitle();
        expect(title).toContain('CLICKDOC');
        browser.sleep(2000);
        var cookies = element(by.css('button.btn:nth-child(2)')).click();
    });

    beforeEach(function(){
        browser.sleep(3000);
        clickdocHome.profilIconKlicken();
        browser.sleep(3000);
        browser.switchTo().frame(3); 
    });

    it('Alle Felder in Popup-Login Fenster prüfen', function(){

        browser.sleep(3000);
        LoginPopup.closeIcon.isPresent();
        LoginPopup.inputMail.isDisplayed();
        LoginPopup.inputPassword.isDisplayed();
        LoginPopup.btnPasswordForgot.isDisplayed();
        LoginPopup.btnLogin.isDisplayed();
        LoginPopup.btnRegister.isDisplayed();

    });

    it('Schriftfarbe der Inputfelder bei den fehlenden Angaben prüfen.', function(){
        browser.sleep(3000);
        LoginPopup.btnLogin.click();
        expect(LoginPopup.inputMail.getCssValue('caret-color')).toBe('rgb(244, 67, 54)');
        expect(LoginPopup.inputPassword.getCssValue('caret-color')).toBe('rgb(244, 67, 54)');
        browser.sleep(3000);
       
    });

    it('Angabekombination: korrekte Email und inkorrekte Password prüfen', function(){

        LoginPopup.inputMail.sendKeys(CLICKDOC_USERNAME);
        //Inkoorekte Password
        LoginPopup.inputPassword.sendKeys("abcdefg");
        //Felder werden gültig angeziegt ohne rot markierung!
        expect(LoginPopup.inputMail.getCssValue('caret-color')).toBe('rgb(0, 51, 102)');
        expect(LoginPopup.inputPassword.getCssValue('caret-color')).toBe('rgb(0, 51, 102)');
        browser.sleep(2000);
        //Feld für Inputfeld Mail korrekt aber bei Inputfeld Password inkorrekt angezeigt:
        LoginPopup.btnLogin.click();
        browser.sleep(2000);
        expect(LoginPopup.hinweismeldungPassword.getText()).toContain("Passwort wurde nicht auf Korrektheit geprüft")
    });
 

    it('Angabekombination: inkorrekte Email und Password prüfen', function(){

        LoginPopup.inputMail.sendKeys("testmail.com");
        LoginPopup.inputPassword.sendKeys("asdadadf");
        browser.sleep(1000);
        LoginPopup.btnLogin.click();
        browser.sleep(4000);
        expect(LoginPopup.hinweismeldungEmail.getText()).toContain("Bitte überprüfen Sie Ihre Eingaben und probieren Sie es erneut. Haben Sie noch keine CGM LIFE ID?");
        browser.sleep(2000);
        LoginPopup.btnJetztRegistirieren.isDisplayed();
    });


   afterEach(function(){
       browser.refresh();

    });

});



