import { browser } from "protractor";
import { CLICKDOC_USERNAME } from "../environment/environment";
import { ClickdocHomepage } from "../pageObjects/clickdoc_home_page";
import { LoginPopup } from "../pageObjects/clickdoc_loginPopup_page";

describe('Clickdoc_Login-Part1:', function () {
    browser.logger.info("Clickdoc_Login-Part1 startet:");
    beforeAll(function() {
      ClickdocHomepage.webseiteStarten();
    });

    beforeEach(function(){
        ClickdocHomepage.profil.click();
        browser.sleep(3000);
        browser.switchTo().frame(3); 
    });

    afterEach(function(){
        browser.refresh();
        browser.sleep(3000);  
      });

    it('TestCase1: Check all fields in popup login window: ', function(){
        browser.logger.info("TestCase1: Check all fields in popup login window");
        LoginPopup.closeIcon.isPresent();
        LoginPopup.inputMail.isPresent();
        LoginPopup.inputPassword.isPresent();
        LoginPopup.btnPasswordForgot.isPresent();
        LoginPopup.btnLogin.isPresent();
        LoginPopup.btnRegister.isPresent();
        expect(LoginPopup.btnLogin.getText()).toContain("ANMELDEN");

    });

    it('TestCase2: Check font color of the input-fields in the missing information:', function(){
        browser.logger.info("TestCase2: Check font color of the input-fields in the missing information");
        LoginPopup.btnLogin.click();
        expect(LoginPopup.inputMail.getCssValue('caret-color')).toBe('rgb(244, 67, 54)');
        expect(LoginPopup.inputPassword.getCssValue('caret-color')).toBe('rgb(244, 67, 54)');
       
    });

    it('TestCase3: Indication Combination: Check correct email with incorrect password:', function(){
        browser.logger.info("TestCase3: Indication Combination: Check correct email with incorrect password");
        LoginPopup.inputMail.sendKeys(CLICKDOC_USERNAME);
        //Inkoorekte Password
        LoginPopup.inputPassword.sendKeys("abcdefg");
        //Felder werden gültig angeziegt ohne rot markierung!
        expect(LoginPopup.inputMail.getCssValue('caret-color')).toBe('rgb(0, 51, 102)');
        expect(LoginPopup.inputPassword.getCssValue('caret-color')).toBe('rgb(0, 51, 102)');
        browser.sleep(2000);
        //Feld für Inputfeld Mail korrekt aber bei Inputfeld Password inkorrekt angezeigt:
        LoginPopup.btnLogin.click();
        browser.sleep(3000);
        expect(LoginPopup.hinweisFalschePassword.getText()).toContain("Bitte überprüfen Sie Ihre Eingaben")
    });
 

    it('TestCase4: Indication Combination: Check incorrect email without password:', function(){
        browser.logger.info("TestCase4: Indication Combination: Check incorrect email without password");
        LoginPopup.inputMail.sendKeys("testmail.com");
        browser.sleep(1000);
        LoginPopup.btnLogin.click();
        browser.sleep(2000);
        expect(LoginPopup.hinweisFehlendePassword.getText()).toContain("Bitte geben Sie Ihr Passwort ein.");
        expect(LoginPopup.inputPassword.getCssValue('caret-color')).toBe('rgb(244, 67, 54)');
        browser.sleep(2000);
    });

});



