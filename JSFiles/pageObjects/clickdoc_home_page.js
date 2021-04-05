"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClickdocHomepage = void 0;
const protractor_1 = require("protractor");
const environment_1 = require("../environment/environment");
class ClickdocHomepage {
    urlAufruf() {
        protractor_1.browser.get(environment_1.BASE_URL);
    }
}
exports.ClickdocHomepage = ClickdocHomepage;
ClickdocHomepage.profil = protractor_1.element(protractor_1.by.css('.menu-item:nth-child(5) .bold-menu-text'));
ClickdocHomepage.favoriten = protractor_1.element(protractor_1.by.css('.menu-item:nth-child(5) .bolder-menu'));
//public static userIcon = element(by.css(".user-profile-dropdown-toggle > app-avatar:nth-child(1) > div:nth-child(1) > img")); 
ClickdocHomepage.userIcon = protractor_1.element(protractor_1.by.css(".menu-item:nth-child(6) .avatar-image"));
ClickdocHomepage.myprofil = protractor_1.element(protractor_1.by.css(".dropdown-item:nth-child(1) .menu-text"));
ClickdocHomepage.logout = protractor_1.element(protractor_1.by.css(".dropdown-item:nth-child(2) .menu-text"));
ClickdocHomepage.btnCookiesAkzep = protractor_1.element(protractor_1.by.css('button.btn:nth-child(2)'));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpY2tkb2NfaG9tZV9wYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vcGFnZU9iamVjdHMvY2xpY2tkb2NfaG9tZV9wYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDJDQUF5RDtBQUN6RCw0REFBc0Q7QUFFdEQsTUFBYSxnQkFBZ0I7SUFhM0IsU0FBUztRQUNQLG9CQUFPLENBQUMsR0FBRyxDQUFDLHNCQUFRLENBQUMsQ0FBQztJQUN4QixDQUFDOztBQWZILDRDQWlCQztBQWJlLHVCQUFNLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLHlDQUF5QyxDQUFDLENBQUMsQ0FBQztBQUNwRSwwQkFBUyxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxzQ0FBc0MsQ0FBQyxDQUFDLENBQUM7QUFDbEYsZ0lBQWdJO0FBQ2xILHlCQUFRLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLHVDQUF1QyxDQUFDLENBQUMsQ0FBQztBQUNwRSx5QkFBUSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyx3Q0FBd0MsQ0FBQyxDQUFDLENBQUM7QUFDckUsdUJBQU0sR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsd0NBQXdDLENBQUMsQ0FBQyxDQUFDO0FBQ25FLGdDQUFlLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLHlCQUF5QixDQUFDLENBQUMsQ0FBQyJ9