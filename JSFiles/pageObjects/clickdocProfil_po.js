"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CgmProfil = void 0;
const protractor_1 = require("protractor");
class CgmProfil {
    constructor() {
        this.bereichGewicht = protractor_1.element(protractor_1.by.xpath("//div[@data-automation='Health value - Gewicht label']"));
        this.hinzufuegen = protractor_1.element(protractor_1.by.xpath("//span[@class='add-button-text']"));
        this.gewicht = protractor_1.element(protractor_1.by.xpath("//div[@class='cdk-overlay-container']//input[@data-automation='Weight creation - Value input']"));
        this.speichern = protractor_1.element(protractor_1.by.xpath("//button[@data-automation='Common mdo creation - Save button']"));
    }
    bereichGewichtAuswaehlen() {
        this.bereichGewicht.click();
    }
    btnHinzufuegenKlicken() {
        this.hinzufuegen.click();
    }
    inputGewichtAngeben(zahl) {
        this.gewicht.sendKeys(zahl);
    }
    eintragSpeichern() {
        this.speichern.click();
    }
}
exports.CgmProfil = CgmProfil;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpY2tkb2NQcm9maWxfcG8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9wYWdlT2JqZWN0cy9jbGlja2RvY1Byb2ZpbF9wby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwyQ0FBeUQ7QUFFekQsTUFBYSxTQUFTO0lBQXRCO1FBRUksbUJBQWMsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsd0RBQXdELENBQUMsQ0FBQyxDQUFDO1FBQzdGLGdCQUFXLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLGtDQUFrQyxDQUFDLENBQUMsQ0FBQztRQUNwRSxZQUFPLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLGdHQUFnRyxDQUFDLENBQUMsQ0FBQztRQUM5SCxjQUFTLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLGdFQUFnRSxDQUFDLENBQUMsQ0FBQztJQW1CcEcsQ0FBQztJQWpCRyx3QkFBd0I7UUFDcEIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNoQyxDQUFDO0lBRUQscUJBQXFCO1FBQ2pCLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDN0IsQ0FBQztJQUVELG1CQUFtQixDQUFDLElBQVc7UUFDM0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUVELGdCQUFnQjtRQUNaLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDM0IsQ0FBQztDQUdKO0FBeEJELDhCQXdCQyJ9