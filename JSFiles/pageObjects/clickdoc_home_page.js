"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClickdocHomepage = void 0;
const protractor_1 = require("protractor");
const environment_1 = require("../environment/environment");
class ClickdocHomepage {
    constructor() {
        //cookies = $('button.btn:nth-child(2)');
        //profil = element(by.xpath("//li[@class='menu-item fullOpacity ng-tns-c119-0 ng-star-inserted']"));
        this.profil = protractor_1.element(protractor_1.by.css('.menu-item:nth-child(5) .bold-menu-text'));
        //login = element(by.css(".menu-item:nth-child(5) .bold-menu-text"));
        this.btnPatientenkarte = protractor_1.element(protractor_1.by.xpath("/html/body/app-root/div[2]/div/app-header/div/div[2]/div/div[2]/ul/li[2]/a/span[3]"));
    }
    urlAufruf() {
        protractor_1.browser.get(environment_1.BASE_URL);
    }
    profilIconKlicken() {
        this.profil.click();
    }
    patientenKarteKlicken() {
        this.btnPatientenkarte.click();
    }
}
exports.ClickdocHomepage = ClickdocHomepage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpY2tkb2NfaG9tZV9wYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vcGFnZU9iamVjdHMvY2xpY2tkb2NfaG9tZV9wYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDJDQUF5RDtBQUN6RCw0REFBc0Q7QUFFdEQsTUFBYSxnQkFBZ0I7SUFBN0I7UUFJRSx5Q0FBeUM7UUFDekMsb0dBQW9HO1FBQ3BHLFdBQU0sR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMseUNBQXlDLENBQUMsQ0FBQyxDQUFDO1FBQ3BFLHFFQUFxRTtRQUVyRSxzQkFBaUIsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsb0ZBQW9GLENBQUMsQ0FBQyxDQUFDO0lBZTlILENBQUM7SUFiQyxTQUFTO1FBQ1Asb0JBQU8sQ0FBQyxHQUFHLENBQUMsc0JBQVEsQ0FBQyxDQUFDO0lBQ3hCLENBQUM7SUFJRCxpQkFBaUI7UUFDZixJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFFRCxxQkFBcUI7UUFDbkIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2pDLENBQUM7Q0FDRjtBQXhCRCw0Q0F3QkMifQ==