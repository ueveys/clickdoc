"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const environment_1 = require("../environment/environment");
const protractor_helper_1 = require("../helpers/protractor.helper");
const clickdoc_home_page_1 = require("../pageObjects/clickdoc_home_page");
describe('Clickdoc_Login-Test:', function () {
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
    /*
        it('TestCase1: Check all fields in popup login window: ', function(){
    
           // browser.sleep(3000);
            LoginPopup.closeIcon.isPresent();
            LoginPopup.inputMail.isDisplayed();
            LoginPopup.inputPassword.isDisplayed();
            LoginPopup.btnPasswordForgot.isDisplayed();
            LoginPopup.btnLogin.isDisplayed();
            LoginPopup.btnRegister.isDisplayed();
    
        });
    
        it('TestCase2: Check font color of the input-fields in the missing information:', function(){
           // browser.sleep(3000);
            LoginPopup.btnLogin.click();
            expect(LoginPopup.inputMail.getCssValue('caret-color')).toBe('rgb(244, 67, 54)');
            expect(LoginPopup.inputPassword.getCssValue('caret-color')).toBe('rgb(244, 67, 54)');
            browser.sleep(3000);
           
        });
    
        it('TestCase3: Indication Combination: Check correct email with incorrect password:', function(){
    
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
     
    
        it('TestCase4: Indication Combination: Check incorrect email without password:', function(){
    
            LoginPopup.inputMail.sendKeys("testmail.com");
            browser.sleep(1000);
            LoginPopup.btnLogin.click();
            browser.sleep(2000);
            expect(LoginPopup.hinweisFehlendePassword.getText()).toContain("Bitte geben Sie Ihr Passwort ein.");
            expect(LoginPopup.inputPassword.getCssValue('caret-color')).toBe('rgb(244, 67, 54)');
            browser.sleep(2000);
        });
        */
    it('leer', function () {
    });
    afterEach(function () {
        protractor_1.browser.refresh();
        protractor_1.browser.sleep(3000);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpY2tkb2NfbG9naW5fc3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NwZWNzL2NsaWNrZG9jX2xvZ2luX3NwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwyQ0FBNkQ7QUFFN0QsNERBQTRGO0FBQzVGLG9FQUFnRTtBQUNoRSwwRUFBcUU7QUFHckUsUUFBUSxDQUFDLHNCQUFzQixFQUFFO0lBRTdCLFNBQVMsQ0FBQztRQUNOLG9CQUFPLENBQUMsR0FBRyxDQUFDLHNCQUFRLENBQUMsQ0FBQztRQUN0QixNQUFNLEtBQUssR0FBRyxvQ0FBZ0IsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUM5QyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3BDLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3BCLHFDQUFnQixDQUFDLGVBQWUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUN6QyxvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN4QixDQUFDLENBQUMsQ0FBQztJQUVILFVBQVUsQ0FBQztRQUNQLHFDQUFnQixDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNoQyxvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNwQixvQkFBTyxDQUFDLFFBQVEsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNoQyxDQUFDLENBQUMsQ0FBQztJQUNQOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFnRE07SUFFSCxFQUFFLENBQUMsTUFBTSxFQUFDO0lBRVYsQ0FBQyxDQUFDLENBQUM7SUFFSCxTQUFTLENBQUM7UUFDUCxvQkFBTyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ2xCLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3RCLENBQUMsQ0FBQyxDQUFDO0FBRVAsQ0FBQyxDQUFDLENBQUMifQ==