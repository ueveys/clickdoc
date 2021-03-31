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
const protractor_1 = require("protractor");
const clickdocHomepage_po_1 = require("../pageObjects/clickdocHomepage_po");
const clickdocProfil_po_1 = require("../pageObjects/clickdocProfil_po");
describe('Clickdoc Homepage', function () {
    it('Einloggen in der Anwendung', () => __awaiter(this, void 0, void 0, function* () {
        let clickdocHome = new clickdocHomepage_po_1.ClickdocHomepage();
        //Navigation
        protractor_1.browser.waitForAngularEnabled(false);
        protractor_1.browser.manage().window().maximize();
        clickdocHome.urlAufruf();
        //Act
        // Assert
        //Assert
        let titelVorgabe = "CLICKDOC";
        expect(protractor_1.browser.getTitle()).toContain(titelVorgabe);
        protractor_1.browser.sleep(2000);
        //Act
        clickdocHome.cookies.click();
        protractor_1.browser.sleep(3000);
        //Navigation
        clickdocHome.login.click();
        protractor_1.browser.sleep(3000);
        protractor_1.browser.switchTo().frame(3);
        protractor_1.browser.sleep(3000);
        clickdocHome.inputEmail("geschaeftlich82@gmail.com");
        protractor_1.browser.sleep(3000);
        clickdocHome.inputPassword("Asterweg45!");
        protractor_1.browser.sleep(3000);
        clickdocHome.anmelden();
        protractor_1.browser.sleep(5000);
    }));
    it('Zum Patientenkarte wechseln:', function () {
        //Auf dem Homepage auf den Link Patientenkarte klicken.
        let clickdocHome2 = new clickdocHomepage_po_1.ClickdocHomepage();
        clickdocHome2.patientenKarteKlicken();
        protractor_1.browser.sleep(7000);
        //Objekt für die Profilseite erstellen
        let profilePage = new clickdocProfil_po_1.CgmProfil();
        protractor_1.browser.sleep(2000);
        //Nach dem öffnen des neuen Tabs zu dem Tab wechseln.
        protractor_1.browser.getAllWindowHandles().then(function (handles) {
            var secondWindowHandle = handles[1];
            var firstWindowHandle = handles[0];
            protractor_1.browser.switchTo().window(secondWindowHandle).then(function () {
                protractor_1.browser.sleep(3000);
                //Neue Gewichtwerte anlegen  
                profilePage.bereichGewichtAuswaehlen();
                protractor_1.browser.sleep(3000);
                profilePage.btnHinzufuegenKlicken();
                protractor_1.browser.switchTo().activeElement();
                protractor_1.browser.sleep(3000);
                profilePage.inputGewichtAngeben("83");
                protractor_1.browser.sleep(3000);
                profilePage.eintragSpeichern();
                protractor_1.browser.sleep(3000);
                //Assert
            });
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpY2tkb2NfbG9naW5fc3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NwZWNzL2NsaWNrZG9jX2xvZ2luX3NwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBcUM7QUFDckMsNEVBQXNFO0FBQ3RFLHdFQUE2RDtBQUU3RCxRQUFRLENBQUMsbUJBQW1CLEVBQUU7SUFDNUIsRUFBRSxDQUFDLDRCQUE0QixFQUFFLEdBQVMsRUFBRTtRQUUxQyxJQUFJLFlBQVksR0FBRyxJQUFJLHNDQUFnQixFQUFFLENBQUM7UUFDMUMsWUFBWTtRQUNaLG9CQUFPLENBQUMscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDckMsb0JBQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNyQyxZQUFZLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDekIsS0FBSztRQUNMLFNBQVM7UUFDVCxRQUFRO1FBQ1IsSUFBSSxZQUFZLEdBQUcsVUFBVSxDQUFDO1FBQzlCLE1BQU0sQ0FBQyxvQkFBTyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ25ELG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3BCLEtBQUs7UUFDTCxZQUFZLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQzdCLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3BCLFlBQVk7UUFDWixZQUFZLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQzNCLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3BCLG9CQUFPLENBQUMsUUFBUSxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRTVCLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3BCLFlBQVksQ0FBQyxVQUFVLENBQUMsMkJBQTJCLENBQUMsQ0FBQztRQUNyRCxvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNwQixZQUFZLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQzFDLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3BCLFlBQVksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUN4QixvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUd0QixDQUFDLENBQUEsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLDhCQUE4QixFQUFFO1FBRWpDLHVEQUF1RDtRQUN2RCxJQUFJLGFBQWEsR0FBRyxJQUFJLHNDQUFnQixFQUFFLENBQUM7UUFDM0MsYUFBYSxDQUFDLHFCQUFxQixFQUFFLENBQUM7UUFDdEMsb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFcEIsc0NBQXNDO1FBQ3RDLElBQUksV0FBVyxHQUFHLElBQUksNkJBQVMsRUFBRSxDQUFDO1FBQ2xDLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRXBCLHFEQUFxRDtRQUNyRCxvQkFBTyxDQUFDLG1CQUFtQixFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsT0FBTztZQUNsRCxJQUFJLGtCQUFrQixHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNwQyxJQUFJLGlCQUFpQixHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNuQyxvQkFBTyxDQUFDLFFBQVEsRUFBRSxDQUFDLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLElBQUksQ0FBQztnQkFDakQsb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3BCLDZCQUE2QjtnQkFDN0IsV0FBVyxDQUFDLHdCQUF3QixFQUFFLENBQUM7Z0JBQ3ZDLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNwQixXQUFXLENBQUMscUJBQXFCLEVBQUUsQ0FBQztnQkFDcEMsb0JBQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxhQUFhLEVBQUUsQ0FBQztnQkFDbkMsb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3BCLFdBQVcsQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDdEMsb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3BCLFdBQVcsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO2dCQUMvQixvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFFcEIsUUFBUTtZQUdWLENBQUMsQ0FBQyxDQUFDO1FBR0wsQ0FBQyxDQUFDLENBQUM7SUFFTCxDQUFDLENBQUMsQ0FBQztBQUVMLENBQUMsQ0FBQyxDQUFDIn0=