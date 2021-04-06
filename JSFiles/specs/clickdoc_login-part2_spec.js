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
describe('Clickdoc_Login-Part2:', function () {
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
    it('TestCase6: User icon is visible:', () => __awaiter(this, void 0, void 0, function* () {
        //After login, user icon is visible. 
        protractor_1.browser.sleep(3000);
        clickdoc_home_page_1.ClickdocHomepage.userIcon.isPresent();
        protractor_1.browser.sleep(2000);
        clickdoc_home_page_1.ClickdocHomepage.userIcon.click();
        expect(clickdoc_home_page_1.ClickdocHomepage.myprofil.getText()).toContain("Mein Profil");
        expect(clickdoc_home_page_1.ClickdocHomepage.logout.getText()).toContain("Logout");
    }));
    it('TestCase7: Logout and Frontpage shown again:', () => __awaiter(this, void 0, void 0, function* () {
        //After logout, user icon is not visible. 
        protractor_1.browser.sleep(3000);
        clickdoc_home_page_1.ClickdocHomepage.logout.click();
        protractor_1.browser.sleep(3000);
        expect(clickdoc_home_page_1.ClickdocHomepage.profil.getText()).toContain("Profil");
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpY2tkb2NfbG9naW4tcGFydDJfc3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NwZWNzL2NsaWNrZG9jX2xvZ2luLXBhcnQyX3NwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBNkQ7QUFFN0QsNERBQTRGO0FBRTVGLDBFQUFxRTtBQUNyRSxzRkFBcUU7QUFFckUsUUFBUSxDQUFDLHVCQUF1QixFQUFFO0lBRTlCLEVBQUUsQ0FBQyxzQkFBc0IsRUFBQztRQUN0QixvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNwQixxQ0FBZ0IsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDaEMsb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDcEIsb0JBQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDaEMsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsc0VBQXNFLEVBQUU7UUFFdkUsdUJBQXVCO1FBQ3ZCLHFDQUFVLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQywrQkFBaUIsQ0FBQyxDQUFDO1FBQ2pELHFDQUFVLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQywrQkFBaUIsQ0FBQyxDQUFDO1FBQ3JELG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3BCLE1BQU0sQ0FBQyxxQ0FBVSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUM1RCxxQ0FBVSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUM1QixvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUV4QixDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyxrQ0FBa0MsRUFBRSxHQUFTLEVBQUU7UUFDOUMscUNBQXFDO1FBQ3JDLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3BCLHFDQUFnQixDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUN0QyxvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNwQixxQ0FBZ0IsQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDbEMsTUFBTSxDQUFDLHFDQUFnQixDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsQ0FBQTtRQUNwRSxNQUFNLENBQUMscUNBQWdCLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBRWxFLENBQUMsQ0FBQSxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsOENBQThDLEVBQUUsR0FBUyxFQUFFO1FBQzFELDBDQUEwQztRQUMxQyxvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNwQixxQ0FBZ0IsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDaEMsb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDcEIsTUFBTSxDQUFDLHFDQUFnQixDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQTtJQUNqRSxDQUFDLENBQUEsQ0FBQyxDQUFDO0FBQ1AsQ0FBQyxDQUFDLENBQUMifQ==