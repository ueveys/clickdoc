"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const environment_1 = require("../environment/environment");
const clickdoc_home_page_1 = require("../pageObjects/clickdoc_home_page");
const clickdoc_loginPopup_page_1 = require("../pageObjects/clickdoc_loginPopup_page");
describe('Clickdoc_Login-Part1:', function () {
    protractor_1.browser.logger.info("Clickdoc_Login-Part1 startet:");
    beforeAll(function () {
        clickdoc_home_page_1.ClickdocHomepage.webseiteStarten();
    });
    beforeEach(function () {
        clickdoc_home_page_1.ClickdocHomepage.profil.click();
        protractor_1.browser.sleep(3000);
        protractor_1.browser.switchTo().frame(3);
    });
    afterEach(function () {
        protractor_1.browser.refresh();
        protractor_1.browser.sleep(3000);
    });
    it('TestCase1: Check all fields in popup login window: ', function () {
        protractor_1.browser.logger.info("TestCase1: Check all fields in popup login window");
        clickdoc_loginPopup_page_1.LoginPopup.closeIcon.isPresent();
        clickdoc_loginPopup_page_1.LoginPopup.inputMail.isPresent();
        clickdoc_loginPopup_page_1.LoginPopup.inputPassword.isPresent();
        clickdoc_loginPopup_page_1.LoginPopup.btnPasswordForgot.isPresent();
        clickdoc_loginPopup_page_1.LoginPopup.btnLogin.isPresent();
        clickdoc_loginPopup_page_1.LoginPopup.btnRegister.isPresent();
        expect(clickdoc_loginPopup_page_1.LoginPopup.btnLogin.getText()).toContain("ANMELDEN");
    });
    it('TestCase2: Check font color of the input-fields in the missing information:', function () {
        protractor_1.browser.logger.info("TestCase2: Check font color of the input-fields in the missing information");
        clickdoc_loginPopup_page_1.LoginPopup.btnLogin.click();
        expect(clickdoc_loginPopup_page_1.LoginPopup.inputMail.getCssValue('caret-color')).toBe('rgb(244, 67, 54)');
        expect(clickdoc_loginPopup_page_1.LoginPopup.inputPassword.getCssValue('caret-color')).toBe('rgb(244, 67, 54)');
    });
    it('TestCase3: Indication Combination: Check correct email with incorrect password:', function () {
        protractor_1.browser.logger.info("TestCase3: Indication Combination: Check correct email with incorrect password");
        clickdoc_loginPopup_page_1.LoginPopup.inputMail.sendKeys(environment_1.CLICKDOC_USERNAME);
        //Inkoorekte Password
        clickdoc_loginPopup_page_1.LoginPopup.inputPassword.sendKeys("abcdefg");
        //Felder werden gültig angeziegt ohne rot markierung!
        expect(clickdoc_loginPopup_page_1.LoginPopup.inputMail.getCssValue('caret-color')).toBe('rgb(0, 51, 102)');
        expect(clickdoc_loginPopup_page_1.LoginPopup.inputPassword.getCssValue('caret-color')).toBe('rgb(0, 51, 102)');
        protractor_1.browser.sleep(2000);
        //Feld für Inputfeld Mail korrekt aber bei Inputfeld Password inkorrekt angezeigt:
        clickdoc_loginPopup_page_1.LoginPopup.btnLogin.click();
        protractor_1.browser.sleep(3000);
        expect(clickdoc_loginPopup_page_1.LoginPopup.hinweisFalschePassword.getText()).toContain("Bitte überprüfen Sie Ihre Eingaben");
    });
    it('TestCase4: Indication Combination: Check incorrect email without password:', function () {
        protractor_1.browser.logger.info("TestCase4: Indication Combination: Check incorrect email without password");
        clickdoc_loginPopup_page_1.LoginPopup.inputMail.sendKeys("testmail.com");
        protractor_1.browser.sleep(1000);
        clickdoc_loginPopup_page_1.LoginPopup.btnLogin.click();
        protractor_1.browser.sleep(2000);
        expect(clickdoc_loginPopup_page_1.LoginPopup.hinweisFehlendePassword.getText()).toContain("Bitte geben Sie Ihr Passwort ein.");
        expect(clickdoc_loginPopup_page_1.LoginPopup.inputPassword.getCssValue('caret-color')).toBe('rgb(244, 67, 54)');
        protractor_1.browser.sleep(2000);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpY2tkb2NfbG9naW4tcGFydDFfc3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NwZWNzL2NsaWNrZG9jX2xvZ2luLXBhcnQxX3NwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwyQ0FBNkQ7QUFFN0QsNERBQTRGO0FBRTVGLDBFQUFxRTtBQUNyRSxzRkFBcUU7QUFFckUsUUFBUSxDQUFDLHVCQUF1QixFQUFFO0lBQzlCLG9CQUFPLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQywrQkFBK0IsQ0FBQyxDQUFDO0lBQ3JELFNBQVMsQ0FBQztRQUNSLHFDQUFnQixDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQ3JDLENBQUMsQ0FBQyxDQUFDO0lBRUgsVUFBVSxDQUFDO1FBQ1AscUNBQWdCLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2hDLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3BCLG9CQUFPLENBQUMsUUFBUSxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2hDLENBQUMsQ0FBQyxDQUFDO0lBRUgsU0FBUyxDQUFDO1FBQ04sb0JBQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNsQixvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN0QixDQUFDLENBQUMsQ0FBQztJQUVMLEVBQUUsQ0FBQyxxREFBcUQsRUFBRTtRQUN0RCxvQkFBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsbURBQW1ELENBQUMsQ0FBQztRQUN6RSxxQ0FBVSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNqQyxxQ0FBVSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNqQyxxQ0FBVSxDQUFDLGFBQWEsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNyQyxxQ0FBVSxDQUFDLGlCQUFpQixDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ3pDLHFDQUFVLENB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