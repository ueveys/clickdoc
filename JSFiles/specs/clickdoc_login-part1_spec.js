"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const environment_1 = require("../environment/environment");
const clickdoc_home_page_1 = require("../pageObjects/clickdoc_home_page");
const clickdoc_loginPopup_page_1 = require("../pageObjects/clickdoc_loginPopup_page");
describe('Clickdoc_Login-Part1:', () => {
    protractor_1.browser.logger.info("Clickdoc_Login-Part1 startet:");
    beforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
        yield clickdoc_home_page_1.ClickdocHomepage.akzeptBtnKlicken();
    }));
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        yield clickdoc_home_page_1.ClickdocHomepage.iconProfilKlicken();
        yield protractor_1.browser.sleep(3000);
        yield protractor_1.browser.switchTo().frame(3);
        yield protractor_1.browser.sleep(3000);
    }));
    afterEach(() => __awaiter(void 0, void 0, void 0, function* () {
        yield protractor_1.browser.refresh();
        yield protractor_1.browser.sleep(3000);
    }));
    it('TestCase1: Check all fields in popup login window: ', () => __awaiter(void 0, void 0, void 0, function* () {
        yield protractor_1.browser.logger.info("TestCase1: Check all fields in popup login window");
        yield clickdoc_loginPopup_page_1.LoginPopup.closeIcon.isPresent();
        yield clickdoc_loginPopup_page_1.LoginPopup.inputMail.isPresent();
        yield clickdoc_loginPopup_page_1.LoginPopup.inputPassword.isPresent();
        yield clickdoc_loginPopup_page_1.LoginPopup.btnPasswordForgot.isPresent();
        yield clickdoc_loginPopup_page_1.LoginPopup.btnLogin.isPresent();
        yield clickdoc_loginPopup_page_1.LoginPopup.btnRegister.isPresent();
        yield expect(clickdoc_loginPopup_page_1.LoginPopup.btnLogin.getText()).toContain("ANMELDEN");
    }));
    it('TestCase2: Check font color of the input-fields in the missing information:', () => __awaiter(void 0, void 0, void 0, function* () {
        yield protractor_1.browser.logger.info("TestCase2: Check font color of the input-fields in the missing information");
        yield clickdoc_loginPopup_page_1.LoginPopup.anmeldenKlicken();
        expect(yield clickdoc_loginPopup_page_1.LoginPopup.inputMail.getCssValue('caret-color')).toBe('rgb(244, 67, 54)');
        expect(yield clickdoc_loginPopup_page_1.LoginPopup.inputPassword.getCssValue('caret-color')).toBe('rgb(244, 67, 54)');
    }));
    it('TestCase3: Indication Combination: Check correct email with incorrect password:', () => __awaiter(void 0, void 0, void 0, function* () {
        yield protractor_1.browser.logger.info("TestCase3: Indication Combination: Check correct email with incorrect password");
        yield clickdoc_loginPopup_page_1.LoginPopup.mailAdresseAngeben(environment_1.CLICKDOC_USERNAME);
        //Inkoorekte Password
        yield clickdoc_loginPopup_page_1.LoginPopup.passwordEingeben("abcdefg");
        //Felder werden gültig angeziegt ohne rot markierung!
        expect(yield clickdoc_loginPopup_page_1.LoginPopup.inputMail.getCssValue('caret-color')).toBe('rgb(0, 51, 102)');
        expect(yield clickdoc_loginPopup_page_1.LoginPopup.inputPassword.getCssValue('caret-color')).toBe('rgb(0, 51, 102)');
        yield protractor_1.browser.sleep(2000);
        //Feld für Inputfeld Mail korrekt aber bei Inputfeld Password inkorrekt angezeigt:
        yield clickdoc_loginPopup_page_1.LoginPopup.anmeldenKlicken();
        yield protractor_1.browser.sleep(8000);
        expect(yield clickdoc_loginPopup_page_1.LoginPopup.hinweisFalschePassword.getText()).toContain("Bitte überprüfen Sie Ihre Eingaben");
    }));
    it('TestCase4: Indication Combination: Check incorrect email without password:', () => __awaiter(void 0, void 0, void 0, function* () {
        yield protractor_1.browser.logger.info("TestCase4: Indication Combination: Check incorrect email without password");
        yield clickdoc_loginPopup_page_1.LoginPopup.mailAdresseAngeben("testmail.com");
        yield protractor_1.browser.sleep(1000);
        yield clickdoc_loginPopup_page_1.LoginPopup.anmeldenKlicken();
        yield protractor_1.browser.sleep(8000);
        expect(yield clickdoc_loginPopup_page_1.LoginPopup.hinweisFehlendePassword.getText()).toContain("Bitte geben Sie Ihr Passwort ein.");
        expect(yield clickdoc_loginPopup_page_1.LoginPopup.inputPassword.getCssValue('caret-color')).toBe('rgb(244, 67, 54)');
        yield protractor_1.browser.sleep(2000);
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpY2tkb2NfbG9naW4tcGFydDFfc3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NwZWNzL2NsaWNrZG9jX2xvZ2luLXBhcnQxX3NwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBcUM7QUFDckMsNERBQStEO0FBQy9ELDBFQUFxRTtBQUNyRSxzRkFBcUU7QUFFckUsUUFBUSxDQUFDLHVCQUF1QixFQUFFLEdBQUcsRUFBRTtJQUNuQyxvQkFBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsK0JBQStCLENBQUMsQ0FBQztJQUNyRCxTQUFTLENBQUMsR0FBUyxFQUFFO1FBQ2pCLE1BQU0scUNBQWdCLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztJQUM5QyxDQUFDLENBQUEsQ0FBQyxDQUFDO0lBRUgsVUFBVSxDQUFDLEdBQVMsRUFBRTtRQUNsQixNQUFNLHFDQUFnQixDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFDM0MsTUFBTSxvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMxQixNQUFNLG9CQUFPLENBQUMsUUFBUSxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2xDLE1BQU0sb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDOUIsQ0FBQyxDQUFBLENBQUMsQ0FBQztJQUVILFNBQVMsQ0FBQyxHQUFTLEVBQUU7UUFDakIsTUFBTSxvQkFBTyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ3hCLE1BQU0sb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDOUIsQ0FBQyxDQUFBLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyxxREFBcUQsRUFBRSxHQUFTLEVBQUU7UUFDbEUsTUFBTSxvQkFBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsbURBQW1ELENBQUMsQ0FBQztRQUM5RSxNQUFNLHFDQUFVLENBQUMsU0FBUyxDQUFD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