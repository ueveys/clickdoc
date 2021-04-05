"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const environment_1 = require("../environment/environment");
const protractor_helper_1 = require("../helpers/protractor.helper");
const clickdoc_home_page_1 = require("../pageObjects/clickdoc_home_page");
const clickdoc_loginPopup_page_1 = require("../pageObjects/clickdoc_loginPopup_page");
describe('Clickdoc_Login-Part1:', function () {
    beforeAll(function () {
        protractor_1.browser.get(environment_1.BASE_URL);
        const title = protractor_helper_1.ProtractorHelper.getPageTitle();
        expect(title).toContain('CLICKDOC');
        protractor_1.browser.sleep(2000);
        clickdoc_home_page_1.ClickdocHomepage.btnCookiesAkzep.click();
        protractor_1.browser.sleep(3000);
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
        clickdoc_loginPopup_page_1.LoginPopup.closeIcon.isPresent();
        clickdoc_loginPopup_page_1.LoginPopup.inputMail.isDisplayed();
        clickdoc_loginPopup_page_1.LoginPopup.inputPassword.isDisplayed();
        clickdoc_loginPopup_page_1.LoginPopup.btnPasswordForgot.isDisplayed();
        clickdoc_loginPopup_page_1.LoginPopup.btnLogin.isDisplayed();
        clickdoc_loginPopup_page_1.LoginPopup.btnRegister.isDisplayed();
        expect(clickdoc_loginPopup_page_1.LoginPopup.btnLogin.getText()).toContain("ANMELDEN");
    });
    it('TestCase2: Check font color of the input-fields in the missing information:', function () {
        clickdoc_loginPopup_page_1.LoginPopup.btnLogin.click();
        expect(clickdoc_loginPopup_page_1.LoginPopup.inputMail.getCssValue('caret-color')).toBe('rgb(244, 67, 54)');
        expect(clickdoc_loginPopup_page_1.LoginPopup.inputPassword.getCssValue('caret-color')).toBe('rgb(244, 67, 54)');
    });
    it('TestCase3: Indication Combination: Check correct email with incorrect password:', function () {
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
        clickdoc_loginPopup_page_1.LoginPopup.inputMail.sendKeys("testmail.com");
        protractor_1.browser.sleep(1000);
        clickdoc_loginPopup_page_1.LoginPopup.btnLogin.click();
        protractor_1.browser.sleep(2000);
        expect(clickdoc_loginPopup_page_1.LoginPopup.hinweisFehlendePassword.getText()).toContain("Bitte geben Sie Ihr Passwort ein.");
        expect(clickdoc_loginPopup_page_1.LoginPopup.inputPassword.getCssValue('caret-color')).toBe('rgb(244, 67, 54)');
        protractor_1.browser.sleep(2000);
    });
    it('leer ', function () {
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpY2tkb2NfbG9naW4tcGFydDFfc3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NwZWNzL2NsaWNrZG9jX2xvZ2luLXBhcnQxX3NwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwyQ0FBNkQ7QUFFN0QsNERBQTRGO0FBQzVGLG9FQUFnRTtBQUNoRSwwRUFBcUU7QUFDckUsc0ZBQXFFO0FBRXJFLFFBQVEsQ0FBQyx1QkFBdUIsRUFBRTtJQUU5QixTQUFTLENBQUM7UUFDTixvQkFBTyxDQUFDLEdBQUcsQ0FBQyxzQkFBUSxDQUFDLENBQUM7UUFDdEIsTUFBTSxLQUFLLEdBQUcsb0NBQWdCLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDOUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNwQyxvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNwQixxQ0FBZ0IsQ0FBQyxlQUFlLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDekMsb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDeEIsQ0FBQyxDQUFDLENBQUM7SUFFSCxVQUFVLENBQUM7UUFDUCxxQ0FBZ0IsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDaEMsb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDcEIsb0JBQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDaEMsQ0FBQyxDQUFDLENBQUM7SUFFSCxTQUFTLENBQUM7UUFDTixvQkFBTyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ2xCLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3RCLENBQUMsQ0FBQyxDQUFDO0lBRUwsRUFBRSxDQUFDLHFEQUFxRCxFQUFFO1FBRXRELHFDQUFVLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxD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