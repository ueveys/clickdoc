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
const clickdocHomepage_1 = require("../pageObjects/clickdocHomepage");
describe('Clickdoc Homepage', function () {
    it('Einloggen in der Anwendung', () => __awaiter(this, void 0, void 0, function* () {
        let clickdocHome = new clickdocHomepage_1.ClickdocHomepage();
        //Navigation
        protractor_1.browser.waitForAngularEnabled(true);
        clickdocHome.urlAufruf();
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
    }));
});
function alert(alert) {
    throw new Error("Function not implemented.");
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpY2tkb2NfbG9naW5fc3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NwZWNzL2NsaWNrZG9jX2xvZ2luX3NwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBeUU7QUFDekUsc0VBQW1FO0FBRW5FLFFBQVEsQ0FBQyxtQkFBbUIsRUFBRTtJQUM1QixFQUFFLENBQUMsNEJBQTRCLEVBQUUsR0FBUyxFQUFFO1FBRTFDLElBQUksWUFBWSxHQUFHLElBQUksbUNBQWdCLEVBQUUsQ0FBQztRQUMxQyxZQUFZO1FBQ1osb0JBQU8sQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNwQyxZQUFZLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDekIsS0FBSztRQUNMLFlBQVksQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDN0Isb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDcEIsWUFBWTtRQUNaLFlBQVksQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDM0Isb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDcEIsb0JBQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFNUIsb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDcEIsWUFBWSxDQUFDLFVBQVUsQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO1FBQ3JELG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3BCLFlBQVksQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDMUMsb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDcEIsWUFBWSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBRzFCLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFFTCxDQUFDLENBQUMsQ0FBQztBQUNILFNBQVMsS0FBSyxDQUFDLEtBQVU7SUFDdkIsTUFBTSxJQUFJLEtBQUssQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO0FBQy9DLENBQUMifQ==