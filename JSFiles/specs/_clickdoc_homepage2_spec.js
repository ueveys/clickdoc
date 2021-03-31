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
        clickdocHome.urlAufruf();
        //Act
        clickdocHome.cookies.click();
        //Assert
        let titelVorgabe = "CLICKDOC - Arzttermine online buchen & Gesundheits-Apps";
        expect(protractor_1.browser.getTitle()).toEqual(titelVorgabe);
        protractor_1.browser.getTitle().then(function (titel) {
            console.log(titel + "<-----hier titel anzeigen");
        });
        protractor_1.browser.sleep(2000);
        //Navigation
        clickdocHome.login.click();
        protractor_1.browser.sleep(10000); //This line is important
        var winHandles = protractor_1.browser.getAllWindowHandles();
        winHandles.then(function (handles) {
            console.log("hier meine Log:  " + winHandles);
            var parentWindow = handles[0];
            var popUpWindow = handles[1];
            protractor_1.browser.switchTo().window(popUpWindow).then(function () {
                protractor_1.browser.waitForAngularEnabled(true);
                protractor_1.browser.getTitle().then(function (titel) {
                    console.log("hier Titel veysel " + titel);
                });
                protractor_1.browser.sleep(3000);
                clickdocHome.inputEmail("sadkjahdl");
                clickdocHome.inputPassword("sadkjhsa");
            });
        });
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiX2NsaWNrZG9jX2hvbWVwYWdlMl9zcGVjLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3BlY3MvX2NsaWNrZG9jX2hvbWVwYWdlMl9zcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsMkNBQThEO0FBQzlELHNFQUFtRTtBQUVuRSxRQUFRLENBQUMsbUJBQW1CLEVBQUU7SUFDNUIsRUFBRSxDQUFDLDRCQUE0QixFQUFFLEdBQVMsRUFBRTtRQUUxQyxJQUFJLFlBQVksR0FBRyxJQUFJLG1DQUFnQixFQUFFLENBQUM7UUFDMUMsWUFBWTtRQUNaLFlBQVksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUN6QixLQUFLO1FBQ0wsWUFBWSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUM3QixRQUFRO1FBQ1IsSUFBSSxZQUFZLEdBQUcseURBQXlELENBQUM7UUFDN0UsTUFBTSxDQUFDLG9CQUFPLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDakQsb0JBQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxLQUFLO1lBQ3JDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxHQUFHLDJCQUEyQixDQUFDLENBQUM7UUFDbkQsQ0FBQyxDQUFDLENBQUE7UUFDRixvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUVwQixZQUFZO1FBQ1osWUFBWSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUUzQixvQkFBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLHdCQUF3QjtRQUM5QyxJQUFJLFVBQVUsR0FBRyxvQkFBTyxDQUFDLG1CQUFtQixFQUFFLENBQUM7UUFDL0MsVUFBVSxDQUFDLElBQUksQ0FBQyxVQUFVLE9BQU87WUFDL0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsR0FBRyxVQUFVLENBQUMsQ0FBQztZQUU5QyxJQUFJLFlBQVksR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDOUIsSUFBSSxXQUFXLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzdCLG9CQUFPLENBQUMsUUFBUSxFQUFFLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDLElBQUksQ0FBQztnQkFDMUMsb0JBQU8sQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDcEMsb0JBQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxLQUFLO29CQUNyQyxPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixHQUFHLEtBQUssQ0FBQyxDQUFDO2dCQUU1QyxDQUFDLENBQUMsQ0FBQztnQkFDSCxvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDcEIsWUFBWSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQztnQkFDckMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUN6QyxDQUFDLENBQUMsQ0FBQztRQUVMLENBQUMsQ0FBQyxDQUFBO0lBRUosQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUVMLENBQUMsQ0FBQyxDQUFDIn0=