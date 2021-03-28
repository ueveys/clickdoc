"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const LampenweltHomepage_1 = require("../pageObjects/LampenweltHomepage");
// The jasmine typings are brought in via DefinitelyTyped ambient typings.
describe('lampenwelt homepage testautomatisierung', function () {
    protractor_1.browser.waitForAngularEnabled(false);
    var lampenweltHomepage = new LampenweltHomepage_1.LampenweltHomepage();
    beforeEach(function () {
    });
    it('Seite aufrufen', function () {
        protractor_1.browser.manage().window().maximize();
        lampenweltHomepage.urlAufruf();
    });
    it('Erste Navigationselement klicken:', function () {
        lampenweltHomepage.nav1.click();
        let nav1text = lampenweltHomepage.nav1.getText();
        console.log("das ist gettext " + nav1text);
    });
    /*it('Kapiteltitel pruefen', function () {
      const kati = lampenweltHomepage.kategorieTitel.getText();
      browser.sleep(3000);
      console.log(kati);
  
    });*/
    afterEach(function () {
        console.log("Test ist abgeschlossen!");
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFtcGVud2VsdF9Ib21wYWdlX3NwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcGVjcy9sYW1wZW53ZWx0X0hvbXBhZ2Vfc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDJDQUFxQztBQUNyQywwRUFBdUU7QUFFdkUsMEVBQTBFO0FBQzFFLFFBQVEsQ0FBQyx5Q0FBeUMsRUFBRTtJQUVsRCxvQkFBTyxDQUFDLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3JDLElBQUksa0JBQWtCLEdBQUcsSUFBSSx1Q0FBa0IsRUFBRSxDQUFDO0lBRWxELFVBQVUsQ0FBQztJQUNYLENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLGdCQUFnQixFQUFFO1FBQ25CLG9CQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDckMsa0JBQWtCLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDakMsQ0FBQyxDQUFFLENBQUM7SUFFSixFQUFFLENBQUMsbUNBQW1DLEVBQUU7UUFFdEMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2hDLElBQUksUUFBUSxHQUFHLGtCQUFrQixDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNqRCxPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixHQUFHLFFBQVEsQ0FBQyxDQUFDO0lBQzdDLENBQUMsQ0FBQyxDQUFDO0lBRUg7Ozs7O1NBS0s7SUFHTCxTQUFTLENBQUM7UUFDUixPQUFPLENBQUMsR0FBRyxDQUFDLHlCQUF5QixDQUFDLENBQUM7SUFFekMsQ0FBQyxDQUFDLENBQUM7QUFFTCxDQUFDLENBQUMsQ0FBQyJ9