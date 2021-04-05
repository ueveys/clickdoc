"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const environment_1 = require("../environment/environment");
const protractor_helper_1 = require("../helpers/protractor.helper");
const clickdoc_home_page_1 = require("../pageObjects/clickdoc_home_page");
const clickdoc_loginPopup_page_1 = require("../pageObjects/clickdoc_loginPopup_page");
describe('Clickdoc_Login-Popup:', function () {
    const clickdocHome = new clickdoc_home_page_1.ClickdocHomepage();
    //const loginPopupInst = new LoginPopup();
    beforeAll(function () {
        const clickdocHome = new clickdoc_home_page_1.ClickdocHomepage();
        protractor_1.browser.get(environment_1.BASE_URL);
        const title = protractor_helper_1.ProtractorHelper.getPageTitle();
        expect(title).toContain('CLICKDOC');
        protractor_1.browser.sleep(2000);
        var cookies = protractor_1.element(protractor_1.by.css('button.btn:nth-child(2)')).click();
    });
    beforeEach(function () {
        protractor_1.browser.sleep(3000);
        clickdocHome.profilIconKlicken();
        protractor_1.browser.sleep(3000);
        protractor_1.browser.switchTo().frame(3);
    });
    it('Alle Felder in Popup-Login Fenster prüfen', function () {
        protractor_1.browser.sleep(3000);
        clickdoc_loginPopup_page_1.LoginPopup.closeIcon.isPresent();
        clickdoc_loginPopup_page_1.LoginPopup.inputMail.isDisplayed();
        clickdoc_loginPopup_page_1.LoginPopup.inputPassword.isDisplayed();
        clickdoc_loginPopup_page_1.LoginPopup.btnPasswordForgot.isDisplayed();
        clickdoc_loginPopup_page_1.LoginPopup.btnLogin.isDisplayed();
        clickdoc_loginPopup_page_1.LoginPopup.btnRegister.isDisplayed();
    });
    it('Schriftfarbe der Inputfelder bei den fehlenden Angaben prüfen.', function () {
        protractor_1.browser.sleep(3000);
        clickdoc_loginPopup_page_1.LoginPopup.btnLogin.click();
        expect(clickdoc_loginPopup_page_1.LoginPopup.inputMail.getCssValue('caret-color')).toBe('rgb(244, 67, 54)');
        expect(clickdoc_loginPopup_page_1.LoginPopup.inputPassword.getCssValue('caret-color')).toBe('rgb(244, 67, 54)');
        protractor_1.browser.sleep(3000);
    });
    it('Angabekombination: korrekte Email und inkorrekte Password prüfen', function () {
        clickdoc_loginPopup_page_1.LoginPopup.inputMail.sendKeys(environment_1.CLICKDOC_USERNAME);
        //Inkoorekte Password
        clickdoc_loginPopup_page_1.LoginPopup.inputPassword.sendKeys("abcdefg");
        //Felder werden gültig angeziegt ohne rot markierung!
        expect(clickdoc_loginPopup_page_1.LoginPopup.inputMail.getCssValue('caret-color')).toBe('rgb(0, 51, 102)');
        expect(clickdoc_loginPopup_page_1.LoginPopup.inputPassword.getCssValue('caret-color')).toBe('rgb(0, 51, 102)');
        protractor_1.browser.sleep(2000);
        //Feld für Inputfeld Mail korrekt aber bei Inputfeld Password inkorrekt angezeigt:
        clickdoc_loginPopup_page_1.LoginPopup.btnLogin.click();
        protractor_1.browser.sleep(2000);
        expect(clickdoc_loginPopup_page_1.LoginPopup.hinweismeldungPassword.getText()).toContain("Passwort wurde nicht auf Korrektheit geprüft");
    });
    it('Angabekombination: inkorrekte Email und Password prüfen', function () {
        clickdoc_loginPopup_page_1.LoginPopup.inputMail.sendKeys("testmail.com");
        clickdoc_loginPopup_page_1.LoginPopup.inputPassword.sendKeys("asdadadf");
        protractor_1.browser.sleep(1000);
        clickdoc_loginPopup_page_1.LoginPopup.btnLogin.click();
        protractor_1.browser.sleep(4000);
        expect(clickdoc_loginPopup_page_1.LoginPopup.hinweismeldungEmail.getText()).toContain("Bitte überprüfen Sie Ihre Eingaben und probieren Sie es erneut. Haben Sie noch keine CGM LIFE ID?");
        protractor_1.browser.sleep(2000);
        clickdoc_loginPopup_page_1.LoginPopup.btnJetztRegistirieren.isDisplayed();
    });
    afterEach(function () {
        protractor_1.browser.refresh();
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpY2tkb2NfZGVtb2xvZ2luX3NwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcGVjcy9jbGlja2RvY19kZW1vbG9naW5fc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDJDQUE2RDtBQUU3RCw0REFBNEY7QUFDNUYsb0VBQWdFO0FBQ2hFLDBFQUFxRTtBQUNyRSxzRkFBcUU7QUFFckUsUUFBUSxDQUFDLHVCQUF1QixFQUFFO0lBRzlCLE1BQU0sWUFBWSxHQUFHLElBQUkscUNBQWdCLEVBQUUsQ0FBQztJQUM1QywwQ0FBMEM7SUFFMUMsU0FBUyxDQUFDO1FBQ04sTUFBTSxZQUFZLEdBQUcsSUFBSSxxQ0FBZ0IsRUFBRSxDQUFDO1FBQzVDLG9CQUFPLENBQUMsR0FBRyxDQUFDLHNCQUFRLENBQUMsQ0FBQztRQUN0QixNQUFNLEtBQUssR0FBRyxvQ0FBZ0IsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUM5QyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3BDLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3BCLElBQUksT0FBTyxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDckUsQ0FBQyxDQUFDLENBQUM7SUFFSCxVQUFVLENBQUM7UUFDUCxvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNwQixZQUFZLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUNqQyxvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNwQixvQkFBTyxDQUFDLFFBQVEsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNoQyxDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQywyQ0FBMkMsRUFBRTtRQUU1QyxvQkFBTyxDQUFD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