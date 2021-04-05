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
const environment_1 = require("../environment/environment");
const clickdoc_home_page_1 = require("../pageObjects/clickdoc_home_page");
const clickdoc_loginPopup_page_1 = require("../pageObjects/clickdoc_loginPopup_page");
describe('Clickdoc_Homepage-Test:', function () {
    /*
      
    */
    it('Loging-Popup call up', function () {
        protractor_1.browser.sleep(3000);
        clickdoc_home_page_1.ClickdocHomepage.profil.click();
        protractor_1.browser.sleep(3000);
        protractor_1.browser.switchTo().frame(3);
    });
    it('TestCase5: Indication Combination: Check correct email and password:', function () {
        // browser.sleep(3000);
        clickdoc_loginPopup_page_1.LoginPopup.inputMail.sendKeys(environment_1.CLICKDOC_USERNAME);
        clickdoc_loginPopup_page_1.LoginPopup.inputPassword.sendKeys(environment_1.CLICKDOC_PASSWORD);
        protractor_1.browser.sleep(1000);
        expect(clickdoc_loginPopup_page_1.LoginPopup.btnLogin.getText()).toContain("ANMELDEN");
        clickdoc_loginPopup_page_1.LoginPopup.btnLogin.click();
        protractor_1.browser.sleep(2000);
    });
    it('TestCase6: User icon is visible .', () => __awaiter(this, void 0, void 0, function* () {
        //After login, user icon is visible. 
        protractor_1.browser.sleep(3000);
        clickdoc_home_page_1.ClickdocHomepage.userIcon.isDisplayed();
        protractor_1.browser.sleep(2000);
        clickdoc_home_page_1.ClickdocHomepage.userIcon.click();
        expect(clickdoc_home_page_1.ClickdocHomepage.myprofil.getText()).toContain("Mein Profil");
        expect(clickdoc_home_page_1.ClickdocHomepage.logout.getText()).toContain("Logout");
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpY2tkb2NfaG9tZXBhZ2Vfc3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NwZWNzL2NsaWNrZG9jX2hvbWVwYWdlX3NwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBNkQ7QUFFN0QsNERBQTRGO0FBRTVGLDBFQUFxRTtBQUNyRSxzRkFBcUU7QUFFckUsUUFBUSxDQUFDLHlCQUF5QixFQUFFO0lBQ2hDOztNQUVFO0lBQ0YsRUFBRSxDQUFDLHNCQUFzQixFQUFDO1FBQ3RCLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3BCLHFDQUFnQixDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNoQyxvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNwQixvQkFBTyxDQUFDLFFBQVEsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNoQyxDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyxzRUFBc0UsRUFBRTtRQUV2RSx1QkFBdUI7UUFDdkIscUNBQVUsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLCtCQUFpQixDQUFDLENBQUM7UUFDakQscUNBQVUsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLCtCQUFpQixDQUFDLENBQUM7UUFDckQsb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDcEIsTUFBTSxDQUFDLHFDQUFVLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQzVELHFDQUFVLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQzVCLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBRXhCLENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLG1DQUFtQyxFQUFFLEdBQVMsRUFBRTtRQUMvQyxxQ0FBcUM7UUFDckMsb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDcEIscUNBQWdCLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3hDLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3BCLHFDQUFnQixDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNsQyxNQUFNLENBQUMscUNBQWdCLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxDQUFBO1FBQ3BFLE1BQU0sQ0FBQyxxQ0FBZ0IsQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUM7SUFFbEUsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUNQLENBQUMsQ0FBQyxDQUFDIn0=