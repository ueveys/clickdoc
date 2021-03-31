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
        this.btnPatientenkarte = protractor_1.element(protractor_1.by.xpath("/html/body/app-root/div[2]/div/app-header/div/div[2]/div/div[2]/ul/li[2]/a/span[3]"));
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
    urlAufruf() {
        protractor_1.browser.get('https://clickdoc.de/cd-de/');
    }
    patientenKarteKlicken() {
        this.btnPatientenkarte.click();
    }
}
exports.ClickdocHomepage = ClickdocHomepage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpY2tkb2NIb21lcGFnZV9wby5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3BhZ2VPYmplY3RzL2NsaWNrZG9jSG9tZXBhZ2VfcG8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsMkNBQXlEO0FBRXpELE1BQWEsZ0JBQWdCO0lBQTdCO1FBR0UsWUFBTyxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLFVBQVUsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUM7UUFDckQsV0FBTSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxxRUFBcUUsQ0FBQyxDQUFDLENBQUM7UUFDbEcsVUFBSyxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxxSEFBcUgsQ0FBQyxDQUFDLENBQUM7UUFDakosVUFBSyxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDLENBQUM7UUFDeEQsYUFBUSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDLENBQUM7UUFDM0QsZ0JBQVcsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMscUNBQXFDLENBQUMsQ0FBQyxDQUFDO1FBQ3ZFLHNCQUFpQixHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxvRkFBb0YsQ0FBQyxDQUFDLENBQUM7SUF5QjlILENBQUM7SUFuQkMsVUFBVSxDQUFDLFlBQW9CO1FBQzdCLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFFRCxhQUFhLENBQUMsWUFBb0I7UUFDaEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFFRCxTQUFTO1FBQ1Asb0JBQU8sQ0FBQyxHQUFHLENBQUMsNEJBQTRCLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBRUQscUJBQXFCO1FBQ25CLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNqQyxDQUFDO0NBQ0Y7QUFsQ0QsNENBa0NDIn0=