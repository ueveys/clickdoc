import { browser } from "protractor";
import { CLICKDOC_USERNAME } from "../environment/environment";
import { ClickdocHomepage } from "../pageObjects/clickdoc_home_page";
import { LoginPopup } from "../pageObjects/clickdoc_loginPopup_page";

describe('Clickdoc_Login-Part1:', () => {
    browser.logger.info("Clickdoc_Login-Part1 startet:");
    beforeAll(async () => {
        await ClickdocHomepage.akzeptBtnKlicken();
    });

    beforeEach(async () => {
        await ClickdocHomepage.iconProfilKlicken();
        await browser.sleep(3000);
        await browser.switchTo().frame(3);
        await browser.sleep(3000);
    });

    afterEach(async () => {
        await browser.refresh();
        await browser.sleep(3000);
    });

    it('TestCase1: Check all fields in popup login window: ', async () => {
       await browser.logger.info("TestCase1: Check all fields in popup login window");
        await LoginPopup.closeIcon.isPresent();
        await LoginPopup.inputMail.isPresent();
        await LoginPopup.inputPassword.isPresent();
        await LoginPopup.btnPasswordForgot.isPresent();
        await LoginPopup.btnLogin.isPresent();
        await LoginPopup.btnRegister.isPresent();
        await expect(LoginPopup.btnLogin.getText()).toContain("ANMELDEN");

    });

    it('TestCase2: Check font color of the input-fields in the missing information:', async () => {
       await browser.logger.info("TestCase2: Check font color of the input-fields in the missing information");
        await LoginPopup.anmeldenKlicken();
        expect(await LoginPopup.inputMail.getCssValue('caret-color')).toBe('rgb(244, 67, 54)');
        expect(await LoginPopup.inputPassword.getCssValue('caret-color')).toBe('rgb(244, 67, 54)');

    });

    it('TestCase3: Indication Combination: Check correct email with incorrect password:', async () => {
       await browser.logger.info("TestCase3: Indication Combination: Check correct email with incorrect password");
        await LoginPopup.mailAdresseAngeben(CLICKDOC_USERNAME);
        //Inkoorekte Password
        await LoginPopup.passwordEingeben("abcdefg");
        //Felder werden gültig angeziegt ohne rot markierung!
        expect(await LoginPopup.inputMail.getCssValue('caret-color')).toBe('rgb(0, 51, 102)');
        expect(await LoginPopup.inputPassword.getCssValue('caret-color')).toBe('rgb(0, 51, 102)');
        await browser.sleep(2000);
        //Feld für Inputfeld Mail korrekt aber bei Inputfeld Password inkorrekt angezeigt:
        await LoginPopup.anmeldenKlicken();
        await browser.sleep(8000);
        expect(await LoginPopup.hinweisFalschePassword.getText()).toContain("Bitte überprüfen Sie Ihre Eingaben")
    });


    it('TestCase4: Indication Combination: Check incorrect email without password:', async () => {
       await browser.logger.info("TestCase4: Indication Combination: Check incorrect email without password");
        await LoginPopup.mailAdresseAngeben("testmail.com");
        await browser.sleep(1000);
        await LoginPopup.anmeldenKlicken();
        await browser.sleep(8000);
        expect(await LoginPopup.hinweisFehlendePassword.getText()).toContain("Bitte geben Sie Ihr Passwort ein.");
        expect(await LoginPopup.inputPassword.getCssValue('caret-color')).toBe('rgb(244, 67, 54)');
        await browser.sleep(2000);
    });

});



