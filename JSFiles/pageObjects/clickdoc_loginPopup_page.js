"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginPopup = void 0;
const protractor_1 = require("protractor");
class LoginPopup {
    static mailAdresseAngeben(mailadresse) {
        this.inputMail.sendKeys(mailadresse);
    }
    static passwordEingeben(password) {
        this.inputPassword.sendKeys(password);
    }
    static anmeldenKlicken() {
        this.btnLogin.click();
    }
    static neuIDRegistrieren() {
        this.btnRegister.click();
    }
    static passwordVergessenKlicken() {
        this.btnPasswordForgot.click();
    }
    static loginPopupFensterschliessen() {
        this.closeIcon.click();
    }
}
exports.LoginPopup = LoginPopup;
LoginPopup.closeIcon = protractor_1.element(protractor_1.by.xpath("//span[@class='iframe-dialog-close icon icon-CO_close']"));
//closeIcon = element(by.css('.iframe-dialog-close'));
LoginPopup.inputMail = protractor_1.element(protractor_1.by.css("#mat-input-1"));
LoginPopup.inputPassword = protractor_1.element(protractor_1.by.css("#mat-input-2"));
LoginPopup.btnPasswordForgot = protractor_1.element(protractor_1.by.xpath("//a[@data-web-test='login_forgot_password']"));
LoginPopup.btnRegister = protractor_1.element(protractor_1.by.xpath("//button[@data-web-test='login_register_btn']"));
//btnLogin = element(by.xpath("//button[@class='life-primary-btn']"));
LoginPopup.btnLogin = protractor_1.element(protractor_1.by.css(".d-none > .life-primary-btn"));
LoginPopup.hinweismeldungPassword = protractor_1.element(protractor_1.by.css("p.ng-star-inserted:nth-child(4)"));
LoginPopup.hinweismeldungEmail = protractor_1.element(protractor_1.by.css(".error-container"));
LoginPopup.btnJetztRegistirieren = protractor_1.element(protractor_1.by.xpath("//button[@class='life-primary-btn' and contains(text(),'Jetzt registrieren')]"));
LoginPopup.hinweisFehlendePassword = protractor_1.element(protractor_1.by.css("#mat-error-1"));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpY2tkb2NfbG9naW5Qb3B1cF9wYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vcGFnZU9iamVjdHMvY2xpY2tkb2NfbG9naW5Qb3B1cF9wYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDJDQUF5RDtBQUV6RCxNQUFhLFVBQVU7SUFnQnJCLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxXQUFtQjtRQUN6QyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBRUQsTUFBTSxDQUFDLGdCQUFnQixDQUFDLFFBQWdCO1FBQ3RDLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFFRCxNQUFNLENBQUMsZUFBZTtRQUNsQixJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFFRCxNQUFNLENBQUMsaUJBQWlCO1FBQ3BCLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDN0IsQ0FBQztJQUVELE1BQU0sQ0FBQyx3QkFBd0I7UUFDM0IsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ25DLENBQUM7SUFFRCxNQUFNLENBQUMsMkJBQTJCO1FBQ2hDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDekIsQ0FBQzs7QUF0Q0gsZ0NBd0NDO0FBdENlLG9CQUFTLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLHlEQUF5RCxDQUFDLENBQUMsQ0FBQztBQUN2RyxzREFBc0Q7QUFDeEMsb0JBQVMsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztBQUM1Qyx3QkFBYSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO0FBQ2hELDRCQUFpQixHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyw2Q0FBNkMsQ0FBQyxDQUFDLENBQUM7QUFDckYsc0JBQVcsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsK0NBQStDLENBQUMsQ0FBQyxDQUFDO0FBQy9GLHNFQUFzRTtBQUN4RCxtQkFBUSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDLENBQUM7QUFDMUQsaUNBQXNCLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLGlDQUFpQyxDQUFDLENBQUMsQ0FBQztBQUM1RSw4QkFBbUIsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDO0FBQzFELGdDQUFxQixHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQywrRUFBK0UsQ0FBQyxDQUFDLENBQUM7QUFDM0gsa0NBQXVCLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMifQ==