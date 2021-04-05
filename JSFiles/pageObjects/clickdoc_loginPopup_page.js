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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpY2tkb2NfbG9naW5Qb3B1cF9wYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vcGFnZU9iamVjdHMvY2xpY2tkb2NfbG9naW5Qb3B1cF9wYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDJDQUF5RDtBQUV6RCxNQUFhLFVBQVU7SUFlckIsTUFBTSxDQUFDLGtCQUFrQixDQUFDLFdBQW1CO1FBQ3pDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFFRCxNQUFNLENBQUMsZ0JBQWdCLENBQUMsUUFBZ0I7UUFDdEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUVELE1BQU0sQ0FBQyxlQUFlO1FBQ2xCLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUVELE1BQU0sQ0FBQyxpQkFBaUI7UUFDcEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUM3QixDQUFDO0lBRUQsTUFBTSxDQUFDLHdCQUF3QjtRQUMzQixJQUFJLENBQUMsaUJBQWlCLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDbkMsQ0FBQztJQUVELE1BQU0sQ0FBQywyQkFBMkI7UUFDaEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUN6QixDQUFDOztBQXJDSCxnQ0F1Q0M7QUFyQ2Usb0JBQVMsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMseURBQXlELENBQUMsQ0FBQyxDQUFDO0FBQ3ZHLHNEQUFzRDtBQUN4QyxvQkFBUyxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO0FBQzVDLHdCQUFhLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7QUFDaEQsNEJBQWlCLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLDZDQUE2QyxDQUFDLENBQUMsQ0FBQztBQUNyRixzQkFBVyxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQywrQ0FBK0MsQ0FBQyxDQUFDLENBQUM7QUFDL0Ysc0VBQXNFO0FBQ3hELG1CQUFRLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLDZCQUE2QixDQUFDLENBQUMsQ0FBQztBQUMxRCxpQ0FBc0IsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsaUNBQWlDLENBQUMsQ0FBQyxDQUFDO0FBQzVFLDhCQUFtQixHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUM7QUFDMUQsZ0NBQXFCLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLCtFQUErRSxDQUFDLENBQUMsQ0FBQyJ9