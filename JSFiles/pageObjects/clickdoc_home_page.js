"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClickdocHomepage = void 0;
const protractor_1 = require("protractor");
const environment_1 = require("../environment/environment");
const protractor_helper_1 = require("../helpers/protractor.helper");
class ClickdocHomepage {
    static webseiteStarten() {
        protractor_1.browser.waitForAngularEnabled(false);
        protractor_1.browser.manage().window().maximize();
        protractor_1.browser.get(environment_1.BASE_URL);
        const title = protractor_helper_1.ProtractorHelper.getPageTitle();
        expect(title).toContain('CLICKDOC');
        protractor_1.browser.sleep(2000);
        ClickdocHomepage.btnCookiesAkzep.click();
        protractor_1.browser.sleep(3000);
    }
}
exports.ClickdocHomepage = ClickdocHomepage;
ClickdocHomepage.btnCookiesAkzep = protractor_1.element(protractor_1.by.css('button.btn:nth-child(2)'));
ClickdocHomepage.profil = protractor_1.element(protractor_1.by.css('.menu-item:nth-child(5) .bold-menu-text'));
ClickdocHomepage.favoriten = protractor_1.element(protractor_1.by.css('.menu-item:nth-child(5) .bolder-menu'));
//public static userIcon = element(by.css(".user-profile-dropdown-toggle > app-avatar:nth-child(1) > div:nth-child(1) > img")); 
ClickdocHomepage.userIcon = protractor_1.element(protractor_1.by.css(".menu-item:nth-child(6) .avatar-image"));
ClickdocHomepage.myprofil = protractor_1.element(protractor_1.by.css(".dropdown-item:nth-child(1) .menu-text"));
ClickdocHomepage.logout = protractor_1.element(protractor_1.by.css(".dropdown-item:nth-child(2) .menu-text"));
ClickdocHomepage.suchseite = protractor_1.element(protractor_1.by.css(".menu-item:nth-child(3) .bolder-menu"));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpY2tkb2NfaG9tZV9wYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vcGFnZU9iamVjdHMvY2xpY2tkb2NfaG9tZV9wYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDJDQUF5RDtBQUN6RCw0REFBc0Q7QUFDdEQsb0VBQWdFO0FBRWhFLE1BQWEsZ0JBQWdCO0lBYXBCLE1BQU0sQ0FBQyxlQUFlO1FBRXZCLG9CQUFPLENBQUMscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDckMsb0JBQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNyQyxvQkFBTyxDQUFDLEdBQUcsQ0FBQyxzQkFBUSxDQUFDLENBQUM7UUFDdEIsTUFBTSxLQUFLLEdBQUcsb0NBQWdCLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDOUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNwQyxvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNwQixnQkFBZ0IsQ0FBQyxlQUFlLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDekMsb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUIsQ0FBQzs7QUF2QkgsNENBd0JDO0FBcEJlLGdDQUFlLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLHlCQUF5QixDQUFDLENBQUMsQ0FBQztBQUM3RCx1QkFBTSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyx5Q0FBeUMsQ0FBQyxDQUFDLENBQUM7QUFDcEUsMEJBQVMsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsc0NBQXNDLENBQUMsQ0FBQyxDQUFDO0FBQ2xGLGdJQUFnSTtBQUNsSCx5QkFBUSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyx1Q0FBdUMsQ0FBQyxDQUFDLENBQUM7QUFDcEUseUJBQVEsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsd0NBQXdDLENBQUMsQ0FBQyxDQUFDO0FBQ3JFLHVCQUFNLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLHdDQUF3QyxDQUFDLENBQUMsQ0FBQztBQUNuRSwwQkFBUyxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxzQ0FBc0MsQ0FBQyxDQUFDLENBQUMifQ==