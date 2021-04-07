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
    protractor_1.browser.logger.info("Clickdoc_Login-Part2 startet");
    it('Loging-Popup call up', function () {
        protractor_1.browser.logger.info("Loging-Popup call up");
        protractor_1.browser.sleep(3000);
        clickdoc_home_page_1.ClickdocHomepage.profil.click();
        protractor_1.browser.sleep(3000);
        protractor_1.browser.switchTo().frame(3);
    });
    it('TestCase5: Indication Combination: Check correct email and password:', function () {
        protractor_1.browser.logger.info("TestCase5: Indication Combination: Check correct email and password");
        clickdoc_loginPopup_page_1.LoginPopup.inputMail.sendKeys(environment_1.CLICKDOC_USERNAME);
        clickdoc_loginPopup_page_1.LoginPopup.inputPassword.sendKeys(environment_1.CLICKDOC_PASSWORD);
        protractor_1.browser.sleep(1000);
        expect(clickdoc_loginPopup_page_1.LoginPopup.btnLogin.getText()).toContain("ANMELDEN");
        clickdoc_loginPopup_page_1.LoginPopup.btnLogin.click();
        protractor_1.browser.sleep(2000);
    });
    it('TestCase6: User icon is visible:', () => __awaiter(this, void 0, void 0, function* () {
        protractor_1.browser.logger.info("TestCase6: User icon is visible");
        //After login, user icon is visible. 
        protractor_1.browser.sleep(3000);
        clickdoc_home_page_1.ClickdocHomepage.userIcon.isPresent();
        protractor_1.browser.sleep(2000);
        clickdoc_home_page_1.ClickdocHomepage.userIcon.click();
        expect(clickdoc_home_page_1.ClickdocHomepage.myprofil.getText()).toContain("Mein Profil");
        expect(clickdoc_home_page_1.ClickdocHomepage.logout.getText()).toContain("Logout");
    }));
    it('TestCase7: Logout and Frontpage shown again:', () => __awaiter(this, void 0, void 0, function* () {
        protractor_1.browser.logger.info("TestCase7: Logout and Frontpage shown again");
        //After logout, user icon is not visible. 
        protractor_1.browser.sleep(3000);
        clickdoc_home_page_1.ClickdocHomepage.logout.click();
        protractor_1.browser.sleep(3000);
        expect(clickdoc_home_page_1.ClickdocHomepage.profil.getText()).toContain("Profil");
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpY2tkb2NfbG9naW4tcGFydDJfc3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NwZWNzL2NsaWNrZG9jX2xvZ2luLXBhcnQyX3NwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBNkQ7QUFFN0QsNERBQTRGO0FBRTVGLDBFQUFxRTtBQUNyRSxzRkFBcUU7QUFFckUsUUFBUSxDQUFDLHVCQUF1QixFQUFFO0lBQzlCLG9CQUFPLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDO0lBQ3BELEVBQUUsQ0FBQyxzQkFBc0IsRUFBQztRQUN0QixvQkFBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsc0JBQXNCLENBQUMsQ0FBQztRQUM1QyxvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNwQixxQ0FBZ0IsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDaEMsb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDcEIsb0JBQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDaEMsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsc0VBQXNFLEVBQUU7UUFFdkUsb0JBQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLHFFQUFxRSxDQUFDLENBQUM7UUFDM0YscUNBQVUsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLCtCQUFpQixDQUFDLENBQUM7UUFDakQscUNBQVUsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLCtCQUFpQixDQUFDLENBQUM7UUFDckQsb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDcEIsTUFBTSxDQUFDLHFDQUFVLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQzVELHFDQUFVLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQzVCLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBRXhCLENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLGtDQUFrQyxFQUFFLEdBQVMsRUFBRTtRQUM5QyxvQkFBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsaUNBQWlDLENBQUMsQ0FBQztRQUN2RCxxQ0FBcUM7UUFDckMsb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDcEIscUNBQWdCLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ3RDLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3BCLHFDQUFnQixDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNsQyxNQUFNLENBQUMscUNBQWdCLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxDQUFBO1FBQ3BFLE1BQU0sQ0FBQyxxQ0FBZ0IsQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUM7SUFFbEUsQ0FBQyxDQUFBLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyw4Q0FBOEMsRUFBRSxHQUFTLEVBQUU7UUFDMUQsb0JBQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLDZDQUE2QyxDQUFDLENBQUM7UUFDbkUsMENBQTBDO1FBQzFDLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3BCLHFDQUFnQixDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNoQyxvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNwQixNQUFNLENBQUMscUNBQWdCLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFBO0lBQ2pFLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFDUCxDQUFDLENBQUMsQ0FBQyJ9