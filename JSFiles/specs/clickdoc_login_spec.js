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
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpY2tkb2NfbG9naW5fc3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NwZWNzL2NsaWNrZG9jX2xvZ2luX3NwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBcUM7QUFDckMsc0VBQW1FO0FBRW5FLFFBQVEsQ0FBQyxtQkFBbUIsRUFBRTtJQUM1QixFQUFFLENBQUMsNEJBQTRCLEVBQUUsR0FBUyxFQUFFO1FBRTFDLElBQUksWUFBWSxHQUFHLElBQUksbUNBQWdCLEVBQUUsQ0FBQztRQUMxQyxZQUFZO1FBQ1osb0JBQU8sQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNyQyxvQkFBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ3JDLFlBQVksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUN6QixLQUFLO1FBQ0wsU0FBUztRQUNULFFBQVE7UUFDUixJQUFJLFlBQVksR0FBRyxVQUFVLENBQUM7UUFDOUIsTUFBTSxDQUFDLG9CQUFPLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDbkQsb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDcEIsS0FBSztRQUNMLFlBQVksQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDN0Isb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDcEIsWUFBWTtRQUNaLFlBQVksQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDM0Isb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDcEIsb0JBQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFNUIsb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDcEIsWUFBWSxDQUFDLFVBQVUsQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO1FBQ3JELG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3BCLFlBQVksQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDMUMsb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDcEIsWUFBWSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ3hCLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBR3RCLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFFTCxDQUFDLENBQUMsQ0FBQyJ9