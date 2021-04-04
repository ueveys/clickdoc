import { browser, by, element, WebDriver } from "protractor";
import { DriverProvider } from "protractor/built/driverProviders";
import { BASE_URL, CLICKDOC_PASSWORD, CLICKDOC_USERNAME } from "../environment/environment";
import { ProtractorHelper } from "../helpers/protractor.helper";
import { ClickdocHomepage } from "../pageObjects/clickdoc_home_page";
import { LoginPopup } from "../pageObjects/clickdoc_loginPopup_page";

describe('Clickdoc Homepage', function () {

    
    const clickdocHome = new ClickdocHomepage();
    const loginPopupInst = new LoginPopup();

    beforeAll(function() {
        const clickdocHome = new ClickdocHomepage();
        browser.get(BASE_URL);
        const title = ProtractorHelper.getPageTitle();
        expect(title).toContain('CLICKDOC');
        browser.sleep(2000);
        var cookies = element(by.css('button.btn:nth-child(2)')).click();
    });

    it('Login dialog aufrufen: ', function(){
        
        browser.sleep(3000);
        clickdocHome.profilIconKlicken();
    });

    it('Alle Felder in Popup-Login fenster prüfen', function(){

        browser.sleep(3000);
        browser.switchTo().frame(3);
        browser.sleep(3000);
        loginPopupInst.closeIconistVorhanden();
        loginPopupInst.btnRegisteristVorhanden();
        loginPopupInst.inputMailistVorhanden();
        loginPopupInst.inputPasswordistVorhanden();
        loginPopupInst.btnLoginistVorhanden();
        loginPopupInst.btnPasswordForgotistVorhanden();

    });

    it('Schriftfarbe der Inputfelder bei der fehlenden Angabe prüfen.', function(){
        browser.sleep(3000);
        loginPopupInst.btnLogin.click();
        browser.sleep(3000);
        expect(loginPopupInst.inputMail.getCssValue('caret-color')).toBe('rgb(244, 67, 54)');
        expect(loginPopupInst.inputPassword.getCssValue('caret-color')).toBe('rgb(244, 67, 54)');

    });

    it('Abschluss', function(){
        console.log("Test ist abgeschlossen!");
        
    });
  

});



