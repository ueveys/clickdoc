import { browser } from "protractor";
import { CLICKDOC_URL, CLICKDOC_USERNAME } from "../../environment/environment";
import { ClickdocHomepage } from "../../pageObjects/clickdoc/clickdoc_home_page";
import { LoginPopup } from "../../pageObjects/clickdoc/clickdoc_loginPopup_page";
var helpers = require('protractor-helpers');

describe('Clickdoc_Login-Part1:', async () => {
    
    beforeAll(async () => {
        await browser.logger.info("Clickdoc_Login-Part1 startet:");
        await browser.get(CLICKDOC_URL);
        await helpers.waitForElement(ClickdocHomepage.btnCookiesAkzep, 10000);
        await ClickdocHomepage.akzeptBtnKlicken();
    });

    beforeEach(async () => {
        await helpers.waitForElement(ClickdocHomepage.iconProfil, 10000);
        await ClickdocHomepage.iconProfilKlicken();
        await browser.sleep(3000);
       // await helpers.waitForElement(browser., 10000);
        await browser.switchTo().frame(3);
        await browser.sleep(3000);
    });

    afterEach(async () => {
        await browser.refresh();
        await browser.sleep(3000);
    });

    it('TestCase1: Check all fields in popup login window: ', async () => {
       await browser.logger.info("TestCase1: Check all fields in popup login window");
       //await helpers.waitForElement(LoginPopup.closeIcon, 10000);
        await LoginPopup.iconClose.isPresent();
        await LoginPopup.inputMail.isPresent();
        await LoginPopup.inputPassword.isPresent();
        await LoginPopup.btnPasswordForgot.isPresent();
        await LoginPopup.btnLogin.isPresent();
        await LoginPopup.btnRegister.isPresent();
        await expect(LoginPopup.btnLogin.getText()).toContain("ANMELDEN");

    });

    it('TestCase2: Check font color of the input-fields in the missing information:', async () => {
       await browser.logger.info("TestCase2: Check font color of the input-fields in the missing information");
       await helpers.waitForElement(LoginPopup.btnLogin, 10000); 
       await LoginPopup.btnLoginKlicken();
        expect(await LoginPopup.inputMail.getCssValue('caret-color')).toBe('rgb(244, 67, 54)');
        expect(await LoginPopup.inputPassword.getCssValue('caret-color')).toBe('rgb(244, 67, 54)');

    });

    it('TestCase3: Indication Combination: Check correct email with incorrect password:', async () => {
       await browser.logger.info("TestCase3: Indication Combination: Check correct email with incorrect password");
       await helpers.waitForElement(LoginPopup.inputMail, 10000);  
       await LoginPopup.inputMailAngeben(CLICKDOC_USERNAME);
        //Inkoorekte Password
        await LoginPopup.inputPasswordEingeben("abcdefg");
        //Felder werden gültig angeziegt ohne rot markierung!
        expect(await LoginPopup.inputMail.getCssValue('caret-color')).toBe('rgb(0, 51, 102)');
        expect(await LoginPopup.inputPassword.getCssValue('caret-color')).toBe('rgb(0, 51, 102)');
        //Feld für Inputfeld Mail korrekt aber bei Inputfeld Password inkorrekt angezeigt:
        await helpers.waitForElement(LoginPopup.btnLogin, 10000); 
        await LoginPopup.btnLoginKlicken();
        await helpers.waitForElement(LoginPopup.hinweisFalschePassword, 10000); 
        expect(await LoginPopup.hinweisFalschePassword.getText()).toContain("Bitte überprüfen Sie Ihre Eingaben")
    });


    it('TestCase4: Indication Combination: Check incorrect email without password:', async () => {
       await browser.logger.info("TestCase4: Indication Combination: Check incorrect email without password");
       await helpers.waitForElement(LoginPopup.inputMail, 10000); 
       await LoginPopup.inputMailAngeben("testmail.com");
        await helpers.waitForElement(LoginPopup.btnLogin, 10000); 
        await LoginPopup.btnLoginKlicken();
        await helpers.waitForElement(LoginPopup.hinweisFehlendePassword, 10000);
        expect(await LoginPopup.hinweisFehlendePassword.getText()).toContain("Bitte geben Sie Ihr Passwort ein.");
        expect(await LoginPopup.inputPassword.getCssValue('caret-color')).toBe('rgb(244, 67, 54)');
    });

});



