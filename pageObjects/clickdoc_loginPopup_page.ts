import {browser, element, by, promise} from 'protractor';

export class LoginPopup {

  closeIcon = element(by.xpath("//span[@class='iframe-dialog-close icon icon-CO_close']"))
  inputMail = element(by.css("#mat-input-1"));
  inputPassword = element(by.css("#mat-input-2"));
  btnPasswordForgot = element(by.xpath("//a[@data-web-test='login_forgot_password']"));
  btnRegister = element(by.xpath("//button[@data-web-test='login_register_btn']"));
  //btnLogin = element(by.xpath("//button[@class='life-primary-btn']"));
  btnLogin = element(by.css(".d-none > .life-primary-btn"));
  
  
  mailAdresseAngeben(mailadresse: string){
      this.inputMail.sendKeys(mailadresse);
  }

  passwordEingeben(password: string){
    this.inputPassword.sendKeys(password);
  }

  anmeldenKlicken(){
      this.btnLogin.click();
  }
  
  neuIDRegistrieren(){
      this.btnRegister.click();
  }

  passwordVergessenKlicken(){
      this.btnPasswordForgot.click();
  }

  closeIconistVorhanden(){
    return this.closeIcon.isPresent();
  }

  inputMailistVorhanden(){
    return this.inputMail.isPresent();
  }

  inputPasswordistVorhanden(){
    return this.inputPassword.isPresent();
  }

  btnPasswordForgotistVorhanden(){
    return this.btnPasswordForgot.isPresent();
  }

  btnRegisteristVorhanden(){
    return this.btnRegister.isPresent();
  }

  btnLoginistVorhanden(){
    return this.btnLogin.isPresent();
  }
 
}