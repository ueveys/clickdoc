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
exports.LoginPopup = void 0;
const protractor_1 = require("protractor");
class LoginPopup {
    static mailAdresseAngeben(mailadresse) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.inputMail.sendKeys(mailadresse);
        });
    }
    static passwordEingeben(password) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.inputPassword.sendKeys(password);
        });
    }
    static anmeldenKlicken() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.btnLogin.click();
        });
    }
    static neuIDRegistrieren() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.btnRegister.click();
        });
    }
    static passwordVergessenKlicken() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.btnPasswordForgot.click();
        });
    }
    static loginPopupFensterschliessen() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.closeIcon.click();
        });
    }
}
exports.LoginPopup = LoginPopup;
LoginPopup.closeIcon = protractor_1.element(protractor_1.by.xpath("//span[@class='iframe-dialog-close icon icon-CO_close']"));
//closeIcon = element(by.css('.iframe-dialog-close'));
LoginPopup.inputMail = protractor_1.element(protractor_1.by.xpath("//input[@id='mat-input-1']"));
LoginPopup.inputPassword = protractor_1.element(protractor_1.by.xpath("//input[@id='mat-input-2']"));
LoginPopup.btnPasswordForgot = protractor_1.element(protractor_1.by.xpath("//a[@data-web-test='login_forgot_password']"));
LoginPopup.btnRegister = protractor_1.element(protractor_1.by.xpath("//button[@data-web-test='login_register_btn']"));
LoginPopup.btnLogin = protractor_1.element(protractor_1.by.xpath("//button[@class='life-primary-btn']"));
// static btnLogin = element(by.css(".d-none > .life-primary-btn"));
LoginPopup.hinweisFalschePassword = protractor_1.element(protractor_1.by.xpath("//app-error-message//p[@class='mt-0']"));
LoginPopup.hinweismeldungEmail = protractor_1.element(protractor_1.by.css(".error-container"));
LoginPopup.btnJetztRegistirieren = protractor_1.element(protractor_1.by.xpath("//button[@class='life-primary-btn' and contains(text(),'Jetzt registrieren')]"));
LoginPopup.hinweisFehlendePassword = protractor_1.element(protractor_1.by.css("#mat-error-1"));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpY2tkb2NfbG9naW5Qb3B1cF9wYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vcGFnZU9iamVjdHMvY2xpY2tkb2NfbG9naW5Qb3B1cF9wYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLDJDQUF5QztBQUV6QyxNQUFhLFVBQVU7SUFnQnJCLE1BQU0sQ0FBTyxrQkFBa0IsQ0FBQyxXQUFtQjs7WUFDL0MsTUFBTSxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUMvQyxDQUFDO0tBQUE7SUFFRCxNQUFNLENBQU8sZ0JBQWdCLENBQUMsUUFBZ0I7O1lBQzVDLE1BQU0sSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDOUMsQ0FBQztLQUFBO0lBRUQsTUFBTSxDQUFPLGVBQWU7O1lBQ3hCLE1BQU0sSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNoQyxDQUFDO0tBQUE7SUFFRCxNQUFNLENBQU8saUJBQWlCOztZQUMzQixNQUFNLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDbEMsQ0FBQztLQUFBO0lBRUQsTUFBTSxDQUFPLHdCQUF3Qjs7WUFDbEMsTUFBTSxJQUFJLENBQUMsaUJBQWlCLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDeEMsQ0FBQztLQUFBO0lBRUQsTUFBTSxDQUFPLDJCQUEyQjs7WUFDdkMsTUFBTSxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQzlCLENBQUM7S0FBQTs7QUF0Q0gsZ0NBd0NDO0FBdENTLG9CQUFTLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLHlEQUF5RCxDQUFDLENBQUMsQ0FBQztBQUNqRyxzREFBc0Q7QUFDOUMsb0JBQVMsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsNEJBQTRCLENBQUMsQ0FBQyxDQUFDO0FBQzVELHdCQUFhLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLDRCQUE0QixDQUFDLENBQUMsQ0FBQztBQUNoRSw0QkFBaUIsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsNkNBQTZDLENBQUMsQ0FBQyxDQUFDO0FBQ3JGLHNCQUFXLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLCtDQUErQyxDQUFDLENBQUMsQ0FBQztBQUNqRixtQkFBUSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxxQ0FBcUMsQ0FBQyxDQUFDLENBQUM7QUFDNUUsb0VBQW9FO0FBQzVELGlDQUFzQixHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyx1Q0FBdUMsQ0FBQyxDQUFDLENBQUM7QUFDcEYsOEJBQW1CLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQztBQUMxRCxnQ0FBcUIsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsK0VBQStFLENBQUMsQ0FBQyxDQUFDO0FBQzNILGtDQUF1QixHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDIn0=