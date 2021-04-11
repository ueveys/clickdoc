"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClickdocHomepage = void 0;
const protractor_1 = require("protractor");
const environment_1 = require("../environment/environment");
class ClickdocHomepage {
    static webseiteStarten() {
        protractor_1.browser.waitForAngularEnabled(false);
        protractor_1.browser.manage().window().maximize();
        protractor_1.browser.get(environment_1.BASE_URL);
        const title = protractor_1.browser.getTitle();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpY2tkb2NfaG9tZV9wYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vcGFnZU9iamVjdHMvY2xpY2tkb2NfaG9tZV9wYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDJDQUFpRDtBQUNqRCw0REFBc0Q7QUFFdEQsTUFBYSxnQkFBZ0I7SUFhcEIsTUFBTSxDQUFDLGVBQWU7UUFFdkIsb0JBQU8sQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNyQyxvQkFBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ3JDLG9CQUFPLENBQUMsR0FBRyxDQUFDLHNCQUFRLENBQUMsQ0FBQztRQUN0QixNQUFNLEtBQUssR0FBRyxvQkFBTyxDQUFDLFFBQVEsRUFBRSxDQUFBO1FBQ2hDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDcEMsb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDcEIsZ0JBQWdCLENBQUMsZUFBZSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3pDLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFCLENBQUM7O0FBdkJILDRDQXdCQztBQXBCZSxnQ0FBZSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDLENBQUM7QUFDN0QsdUJBQU0sR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMseUNBQXlDLENBQUMsQ0FBQyxDQUFDO0FBQ3BFLDBCQUFTLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLHNDQUFzQyxDQUFDLENBQUMsQ0FBQztBQUNsRixnSUFBZ0k7QUFDbEgseUJBQVEsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsdUNBQXVDLENBQUMsQ0FBQyxDQUFDO0FBQ3BFLHlCQUFRLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLHdDQUF3QyxDQUFDLENBQUMsQ0FBQztBQUNyRSx1QkFBTSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyx3Q0FBd0MsQ0FBQyxDQUFDLENBQUM7QUFDbkUsMEJBQVMsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsc0NBQXNDLENBQUMsQ0FBQyxDQUFDIn0=