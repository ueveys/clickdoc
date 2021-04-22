import { element, by } from 'protractor';

export class LoginPopup {

   static closeIcon = element(by.xpath("//span[@class='iframe-dialog-close icon icon-CO_close']"));
  //closeIcon = element(by.css('.iframe-dialog-close'));
   static inputMail = element(by.xpath("//input[@id='mat-input-1']"));
   static inputPassword = element(by.xpath("//input[@id='mat-input-2']"));
   static btnPasswordForgot = element(by.xpath("//a[@data-web-test='login_forgot_password']"));
   static btnRegister = element(by.xpath("//button[@data-web-test='login_register_btn']"));
   static btnLogin = element(by.xpath("//button[@class='life-primary-btn']"));
  // static btnLogin = element(by.css(".d-none > .life-primary-btn"));
   static hinweisFalschePassword = element(by.xpath("//app-error-message//p[@class='mt-0']"));
   static hinweismeldungEmail = element(by.css(".error-container"));
   static btnJetztRegistirieren = element(by.xpath("//button[@class='life-primary-btn' and contains(text(),'Jetzt registrieren')]"));
   static hinweisFehlendePassword = element(by.css("#mat-error-1"));
  
  
  static async mailAdresseAngeben(mailadresse: string){
      await this.inputMail.sendKeys(mailadresse);
  }

  static async passwordEingeben(password: string){
    await this.inputPassword.sendKeys(password);
  }

  static async anmeldenKlicken(){
      await this.btnLogin.click();
  }
  
  static async neuIDRegistrieren(){
     await this.btnRegister.click();
  }

  static async passwordVergessenKlicken(){
     await this.btnPasswordForgot.click();
  }

  static async loginPopupFensterschliessen(){
   await this.closeIcon.click();
  }
 
}
