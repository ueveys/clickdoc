import { element, by } from 'protractor';

export class LoginPopup {

  public static closeIcon = element(by.xpath("//span[@class='iframe-dialog-close icon icon-CO_close']"));
  //closeIcon = element(by.css('.iframe-dialog-close'));
  public static inputMail = element(by.css("#mat-input-1"));
  public static inputPassword = element(by.css("#mat-input-2"));
  public static btnPasswordForgot = element(by.xpath("//a[@data-web-test='login_forgot_password']"));
  public static btnRegister = element(by.xpath("//button[@data-web-test='login_register_btn']"));
  public static btnLogin = element(by.xpath("//button[@class='life-primary-btn']"));
  //public static btnLogin = element(by.css(".d-none > .life-primary-btn"));
  public static hinweisFalschePassword = element(by.xpath("//app-error-message//p[@class='mt-0']"));
  public static hinweismeldungEmail = element(by.css(".error-container"));
  public static btnJetztRegistirieren = element(by.xpath("//button[@class='life-primary-btn' and contains(text(),'Jetzt registrieren')]"));
  public static hinweisFehlendePassword = element(by.css("#mat-error-1"));
  
  
  static mailAdresseAngeben(mailadresse: string){
      this.inputMail.sendKeys(mailadresse);
  }

  static passwordEingeben(password: string){
    this.inputPassword.sendKeys(password);
  }

  static anmeldenKlicken(){
      this.btnLogin.click();
  }
  
  static neuIDRegistrieren(){
      this.btnRegister.click();
  }

  static passwordVergessenKlicken(){
      this.btnPasswordForgot.click();
  }

  static loginPopupFensterschliessen(){
    this.closeIcon.click();
  }
 
}
