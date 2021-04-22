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
describe('Clickdoc_Login-Part2:', () => {
    it('Loging-Popup call up', () => __awaiter(void 0, void 0, void 0, function* () {
        yield protractor_1.browser.logger.info("Clickdoc_Login-Part2 startet");
        yield protractor_1.browser.logger.info("Loging-Popup call up");
        yield protractor_1.browser.sleep(3000);
        yield clickdoc_home_page_1.ClickdocHomepage.iconProfilKlicken();
        yield protractor_1.browser.sleep(3000);
        yield protractor_1.browser.switchTo().frame(3);
    }));
    it('TestCase5: Indication Combination: Check correct email and password:', () => __awaiter(void 0, void 0, void 0, function* () {
        yield protractor_1.browser.logger.info("TestCase5: Indication Combination: Check correct email and password");
        yield clickdoc_loginPopup_page_1.LoginPopup.mailAdresseAngeben(environment_1.CLICKDOC_USERNAME);
        yield clickdoc_loginPopup_page_1.LoginPopup.passwordEingeben(environment_1.CLICKDOC_PASSWORD);
        yield protractor_1.browser.sleep(1000);
        expect(yield clickdoc_loginPopup_page_1.LoginPopup.btnLogin.getText()).toContain("ANMELDEN");
        yield clickdoc_loginPopup_page_1.LoginPopup.anmeldenKlicken();
        yield protractor_1.browser.sleep(2000);
    }));
    it('TestCase6: User icon is visible:', () => __awaiter(void 0, void 0, void 0, function* () {
        yield protractor_1.browser.logger.info("TestCase6: User icon is visible");
        //After login, user icon is visible. 
        yield protractor_1.browser.sleep(3000);
        yield clickdoc_home_page_1.ClickdocHomepage.userIcon.isPresent();
        yield protractor_1.browser.sleep(2000);
        yield clickdoc_home_page_1.ClickdocHomepage.iconUserKlicken();
        expect(yield clickdoc_home_page_1.ClickdocHomepage.myprofil.getText()).toContain("Mein Profil");
        expect(yield clickdoc_home_page_1.ClickdocHomepage.logout.getText()).toContain("Logout");
    }));
    it('TestCase7: Logout and Frontpage shown again:', () => __awaiter(void 0, void 0, void 0, function* () {
        yield protractor_1.browser.logger.info("TestCase7: Logout and Frontpage shown again");
        //After logout, user icon is not visible. 
        yield protractor_1.browser.sleep(3000);
        yield clickdoc_home_page_1.ClickdocHomepage.iconLogoutKlicken();
        yield protractor_1.browser.sleep(3000);
        expect(yield clickdoc_home_page_1.ClickdocHomepage.profil.getText()).toContain("Profil");
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpY2tkb2NfbG9naW4tcGFydDJfc3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NwZWNzL2NsaWNrZG9jX2xvZ2luLXBhcnQyX3NwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBcUM7QUFDckMsNERBQWtGO0FBQ2xGLDBFQUFxRTtBQUNyRSxzRkFBcUU7QUFFckUsUUFBUSxDQUFDLHVCQUF1QixFQUFFLEdBQUcsRUFBRTtJQUNuQyxFQUFFLENBQUMsc0JBQXNCLEVBQUUsR0FBUyxFQUFFO1FBQ25DLE1BQU0sb0JBQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLDhCQUE4QixDQUFDLENBQUM7UUFDM0QsTUFBTyxvQkFBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsc0JBQXNCLENBQUMsQ0FBQztRQUNqRCxNQUFNLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzFCLE1BQU0scUNBQWdCLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUMzQyxNQUFNLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzFCLE1BQU0sb0JBQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdEMsQ0FBQyxDQUFBLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyxzRUFBc0UsRUFBRSxHQUFTLEVBQUU7UUFFbkYsTUFBTSxvQkFBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMscUVBQXFFLENBQUMsQ0FBQztRQUNoRyxNQUFNLHFDQUFVLENBQUMsa0JBQWtCLENBQUMsK0JBQWlCLENBQUMsQ0FBQztRQUN2RCxNQUFNLHFDQUFVLENBQUMsZ0JBQWdCLENBQUMsK0JBQWlCLENBQUMsQ0FBQztRQUNyRCxNQUFNLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzFCLE1BQU0sQ0FBQyxNQUFNLHFDQUFVLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ2xFLE1BQU0scUNBQVUsQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUNuQyxNQUFNLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBRTlCLENBQUMsQ0FBQSxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsa0NBQWtDLEVBQUUsR0FBUyxFQUFFO1FBQy9DLE1BQU0sb0JBQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGlDQUFpQyxDQUFDLENBQUM7UUFDNUQscUNBQXFDO1FBQ3JDLE1BQU0sb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDMUIsTUFBTSxxQ0FBZ0IsQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDNUMsTUFBTSxvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMxQixNQUFNLHFDQUFnQixDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3pDLE1BQU0sQ0FBQyxNQUFNLHFDQUFnQixDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsQ0FBQTtRQUMxRSxNQUFNLENBQUMsTUFBTSxxQ0FBZ0IsQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUM7SUFFeEUsQ0FBQyxDQUFBLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyw4Q0FBOEMsRUFBRSxHQUFTLEVBQUU7UUFDM0QsTUFBTSxvQkFBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsNkNBQTZDLENBQUMsQ0FBQztRQUN4RSwwQ0FBMEM7UUFDMUMsTUFBTSxvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMxQixNQUFNLHFDQUFnQixDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFDM0MsTUFBTSxvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMxQixNQUFNLENBQUMsTUFBTSxxQ0FBZ0IsQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUE7SUFDdkUsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUNQLENBQUMsQ0FBQyxDQUFDIn0=