"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const LampenweltHomepage_1 = require("../pageObjects/LampenweltHomepage");
// The jasmine typings are brought in via DefinitelyTyped ambient typings.
describe('lampenwelt homepage', function () {
    protractor_1.browser.waitForAngularEnabled(false);
    let lampenweltHomepage = new LampenweltHomepage_1.LampenweltHomepage();
    beforeEach(function () {
    });
    it('Seite aufrufen', function () {
        protractor_1.browser.manage().window().maximize();
        lampenweltHomepage.urlAufruf();
    });
    it('Erste Navigationselement klicken:', function () {
        lampenweltHomepage.nav1.click();
        let nav1text = lampenweltHomepage.nav1.getText();
        console.log(nav1text);
        //const kati = lampenweltHomepage.kategorieTitel.getText();
        //console.log(kati);
        //Screenshot nach dem Test erstellen
        /**/
    });
    it('Kapiteltitel pruefen', function () {
        const kati = lampenweltHomepage.kategorieTitel.getText();
    });
    afterEach(function () {
        console.log("Test ist abgeschlossen!");
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFtcGVud2VsdF9Ib21wYWdlX3NwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcGVjcy9sYW1wZW53ZWx0X0hvbXBhZ2Vfc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDJDQUFvRTtBQUNwRSwwRUFBdUU7QUFFdkUsMEVBQTBFO0FBQzFFLFFBQVEsQ0FBQyxxQkFBcUIsRUFBRTtJQUM5QixvQkFBTyxDQUFDLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3JDLElBQUksa0JBQWtCLEdBQUcsSUFBSSx1Q0FBa0IsRUFBRSxDQUFDO0lBQ2xELFVBQVUsQ0FBQztJQUdYLENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLGdCQUFnQixFQUFFO1FBQ25CLG9CQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDckMsa0JBQWtCLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDakMsQ0FBQyxDQUFFLENBQUM7SUFFSixFQUFFLENBQUMsbUNBQW1DLEVBQUU7UUFFdEMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2hDLElBQUksUUFBUSxHQUFHLGtCQUFrQixDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNqRCxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3RCLDJEQUEyRDtRQUMzRCxvQkFBb0I7UUFFcEIsb0NBQW9DO1FBQ3BDLElBQUk7SUFDTixDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyxzQkFBc0IsRUFBRTtRQUN6QixNQUFNLElBQUksR0FBRyxrQkFBa0IsQ0FBQyxjQUFjLENBQUMsT0FBTyxFQUFFLENBQUM7SUFFM0QsQ0FBQyxDQUFDLENBQUM7SUFHSCxTQUFTLENBQUM7UUFDUixPQUFPLENBQUMsR0FBRyxDQUFDLHlCQUF5QixDQUFDLENBQUM7SUFFekMsQ0FBQyxDQUFDLENBQUM7QUFFTCxDQUFDLENBQUMsQ0FBQyJ9