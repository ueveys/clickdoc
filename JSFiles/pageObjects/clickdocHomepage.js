"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClickdocHomepage = void 0;
const protractor_1 = require("protractor");
class ClickdocHomepage {
    constructor() {
        this.cookies = protractor_1.element(protractor_1.by.buttonText("Alle akzeptieren"));
        this.profil = protractor_1.element(protractor_1.by.xpath("//li[@class='menu-item fullOpacity ng-tns-c119-0 ng-star-inserted']"));
        this.login = protractor_1.element(protractor_1.by.xpath("//ul[@class='menu-desktop d-lg-block d-md-none d-sm-none ng-tns-c117-0']//a[@angularticsaction='Open login iframe']"));
        this.email = protractor_1.element(protractor_1.by.xpath("//input[@id='mat-input-1']"));
        this.password = protractor_1.element(protractor_1.by.xpath("//input[@id='mat-input-2']"));
        this.btnAnmelden = protractor_1.element(protractor_1.by.xpath("//button[@class='life-primary-btn']"));
    }
    inputEmail(emailadresse) {
        this.email.sendKeys(emailadresse);
    }
    inputPassword(passwordtext) {
        this.password.sendKeys(passwordtext);
    }
    anmelden() {
        this.btnAnmelden.click();
    }
    /*let suchfeld = element(by.xpath("//input[@data-web-test='lp-search-input']"));
    let ohneErgebnis = element(by.xpath("//span[@class='dropdown-header no-results ng-star-inserted']"));
    let email = element(by.xpath("//iframe[@data-web-test='login_email']"));
    let password = element(by.xpath("//iframe[@data-web-test='login_password']"));
    let btnAnmelden = element(by.buttonText("Anmelden"));
  */
    urlAufruf() {
        protractor_1.browser.manage().window().maximize();
        protractor_1.browser.waitForAngularEnabled(false);
        protractor_1.browser.get('https://clickdoc.de/cd-de/');
        protractor_1.browser.sleep(2000);
    }
}
exports.ClickdocHomepage = ClickdocHomepage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpY2tkb2NIb21lcGFnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3BhZ2VPYmplY3RzL2NsaWNrZG9jSG9tZXBhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsMkNBQXlEO0FBRXpELE1BQWEsZ0JBQWdCO0lBQTdCO1FBR0UsWUFBTyxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLFVBQVUsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUM7UUFDckQsV0FBTSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxxRUFBcUUsQ0FBQyxDQUFDLENBQUM7UUFDbEcsVUFBSyxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxxSEFBcUgsQ0FBQyxDQUFDLENBQUM7UUFDakosVUFBSyxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDLENBQUM7UUFDeEQsYUFBUSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDLENBQUM7UUFDM0QsZ0JBQVcsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMscUNBQXFDLENBQUMsQ0FBQyxDQUFDO0lBK0J6RSxDQUFDO0lBMUJDLFVBQVUsQ0FBQyxZQUFvQjtRQUM3QixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBRUQsYUFBYSxDQUFDLFlBQW9CO1FBQ2hDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBR0Q7Ozs7O0lBS0E7SUFDQSxTQUFTO1FBQ1Asb0JBQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNyQyxvQkFBTyxDQUFDLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3JDLG9CQUFPLENBQUMsR0FBRyxDQUFDLDRCQUE0QixDQUFDLENBQUM7UUFDMUMsb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdEIsQ0FBQztDQUVGO0FBdkNELDRDQXVDQyJ9