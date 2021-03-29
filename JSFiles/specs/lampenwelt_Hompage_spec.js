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
        // Klicken auf Navigationsbereich
        lampenweltHomepage.nav1.click();
        var nav1text = lampenweltHomepage.nav1.getText().then(function (textNavi) {
            console.log("Navigationstitel ist " + textNavi);
        });
        lampenweltHomepage.kateTitel.getText().then(function (kapitelText) {
            console.log("Kapiteltitel ist " + kapitelText);
            expect(lampenweltHomepage.nav1.getText()).toEqual(kapitelText);
        });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFtcGVud2VsdF9Ib21wYWdlX3NwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcGVjcy9sYW1wZW53ZWx0X0hvbXBhZ2Vfc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDJDQUFxQztBQUNyQywwRUFBdUU7QUFFdkUsMEVBQTBFO0FBQzFFLFFBQVEsQ0FBQyx5Q0FBeUMsRUFBRTtJQUVsRCxvQkFBTyxDQUFDLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3JDLElBQUksa0JBQWtCLEdBQUcsSUFBSSx1Q0FBa0IsRUFBRSxDQUFDO0lBRWxELFVBQVUsQ0FBQztJQUNYLENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLGdCQUFnQixFQUFFO1FBQ25CLG9CQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDckMsa0JBQWtCLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDakMsQ0FBQyxDQUFFLENBQUM7SUFFSixFQUFFLENBQUMsbUNBQW1DLEVBQUU7UUFFdEMsaUNBQWlDO1FBQ2pDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUVoQyxJQUFJLFFBQVEsR0FBRyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVMsUUFBUTtZQUNyRSxPQUFPLENBQUMsR0FBRyxDQUFDLHVCQUF1QixHQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQ2pELENBQUMsQ0FBQyxDQUFDO1FBRUgsa0JBQWtCLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFTLFdBQVc7WUFDOUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsR0FBRyxXQUFXLENBQUMsQ0FBQztZQUMvQyxNQUFNLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ2pFLENBQUMsQ0FBQyxDQUFDO0lBR0wsQ0FBQyxDQUFDLENBQUM7SUFFSDs7Ozs7U0FLSztJQUdMLFNBQVMsQ0FBQztRQUNSLE9BQU8sQ0FBQyxHQUFHLENBQUMseUJBQXlCLENBQUMsQ0FBQztJQUV6QyxDQUFDLENBQUMsQ0FBQztBQUVMLENBQUMsQ0FBQyxDQUFDIn0=