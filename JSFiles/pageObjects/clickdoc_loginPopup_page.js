"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginPopup = void 0;
const protractor_1 = require("protractor");
class LoginPopup {
    constructor() {
        this.closeIcon = protractor_1.element(protractor_1.by.xpath("//span[@class='iframe-dialog-close icon icon-CO_close']"));
        this.inputMail = protractor_1.element(protractor_1.by.css("#mat-input-1"));
        this.inputPassword = protractor_1.element(protractor_1.by.css("#mat-input-2"));
        this.btnPasswordForgot = protractor_1.element(protractor_1.by.xpath("//a[@data-web-test='login_forgot_password']"));
        this.btnRegister = protractor_1.element(protractor_1.by.xpath("//button[@data-web-test='login_register_btn']"));
        //btnLogin = element(by.xpath("//button[@class='life-primary-btn']"));
        this.btnLogin = protractor_1.element(protractor_1.by.css(".d-none > .life-primary-btn"));
    }
    mailAdresseAngeben(mailadresse) {
        this.inputMail.sendKeys(mailadresse);
    }
    passwordEingeben(password) {
        this.inputPassword.sendKeys(password);
    }
    anmeldenKlicken() {
        this.btnLogin.click();
    }
    neuIDRegistrieren() {
        this.btnRegister.click();
    }
    passwordVergessenKlicken() {
        this.btnPasswordForgot.click();
    }
    closeIconistVorhanden() {
        return this.closeIcon.isPresent();
    }
    inputMailistVorhanden() {
        return this.inputMail.isPresent();
    }
    inputPasswordistVorhanden() {
        return this.inputPassword.isPresent();
    }
    btnPasswordForgotistVorhanden() {
        return this.btnPasswordForgot.isPresent();
    }
    btnRegisteristVorhanden() {
        return this.btnRegister.isPresent();
    }
    btnLoginistVorhanden() {
        return this.btnLogin.isPresent();
    }
}
exports.LoginPopup = LoginPopup;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpY2tkb2NfbG9naW5Qb3B1cF9wYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vcGFnZU9iamVjdHMvY2xpY2tkb2NfbG9naW5Qb3B1cF9wYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDJDQUF5RDtBQUV6RCxNQUFhLFVBQVU7SUFBdkI7UUFFRSxjQUFTLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLHlEQUF5RCxDQUFDLENBQUMsQ0FBQTtRQUN4RixjQUFTLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7UUFDNUMsa0JBQWEsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztRQUNoRCxzQkFBaUIsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsNkNBQTZDLENBQUMsQ0FBQyxDQUFDO1FBQ3JGLGdCQUFXLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLCtDQUErQyxDQUFDLENBQUMsQ0FBQztRQUNqRixzRUFBc0U7UUFDdEUsYUFBUSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDLENBQUM7SUErQzVELENBQUM7SUE1Q0Msa0JBQWtCLENBQUMsV0FBbUI7UUFDbEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUVELGdCQUFnQixDQUFDLFFBQWdCO1FBQy9CLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFFRCxlQUFlO1FBQ1gsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBRUQsaUJBQWlCO1FBQ2IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUM3QixDQUFDO0lBRUQsd0JBQXdCO1FBQ3BCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNuQyxDQUFDO0lBRUQscUJBQXFCO1FBQ25CLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNwQyxDQUFDO0lBRUQscUJBQXFCO1FBQ25CLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNwQyxDQUFDO0lBRUQseUJBQXlCO1FBQ3ZCLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUN4QyxDQUFDO0lBRUQsNkJBQTZCO1FBQzNCLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQzVDLENBQUM7SUFFRCx1QkFBdUI7UUFDckIsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ3RDLENBQUM7SUFFRCxvQkFBb0I7UUFDbEIsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ25DLENBQUM7Q0FFRjtBQXZERCxnQ0F1REMifQ==