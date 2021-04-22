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
exports.ClickdocHomepage = void 0;
const protractor_1 = require("protractor");
class ClickdocHomepage {
    static akzeptBtnKlicken() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.btnCookiesAkzep.click();
        });
    }
    static iconProfilKlicken() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.profil.click();
        });
    }
    static suchseiteKlicken() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.suchseite.click();
        });
    }
    static iconUserKlicken() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.userIcon.click();
        });
    }
    static iconLogoutKlicken() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.logout.click();
        });
    }
}
exports.ClickdocHomepage = ClickdocHomepage;
ClickdocHomepage.btnCookiesAkzep = protractor_1.element(protractor_1.by.css('button.btn:nth-child(2)'));
ClickdocHomepage.profil = protractor_1.element(protractor_1.by.xpath("//ul[contains(@class, 'menu-desktop')]//li[position()=5]"));
ClickdocHomepage.favoriten = protractor_1.element(protractor_1.by.css('.menu-item:nth-child(5) .bolder-menu'));
ClickdocHomepage.userIcon = protractor_1.element(protractor_1.by.css(".menu-item:nth-child(6) .avatar-image"));
ClickdocHomepage.myprofil = protractor_1.element(protractor_1.by.css(".dropdown-item:nth-child(1) .menu-text"));
ClickdocHomepage.logout = protractor_1.element(protractor_1.by.css(".dropdown-item:nth-child(2) .menu-text"));
ClickdocHomepage.suchseite = protractor_1.element(protractor_1.by.css(".menu-item:nth-child(3) .bolder-menu"));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpY2tkb2NfaG9tZV9wYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vcGFnZU9iamVjdHMvY2xpY2tkb2NfaG9tZV9wYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUNBLDJDQUFpRDtBQUdqRCxNQUFhLGdCQUFnQjtJQVUzQixNQUFNLENBQU8sZ0JBQWdCOztZQUMzQixNQUFNLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDckMsQ0FBQztLQUFBO0lBRUQsTUFBTSxDQUFPLGlCQUFpQjs7WUFDNUIsTUFBTSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQzVCLENBQUM7S0FBQTtJQUVELE1BQU0sQ0FBTyxnQkFBZ0I7O1lBQzNCLE1BQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUMvQixDQUFDO0tBQUE7SUFFRCxNQUFNLENBQU8sZUFBZTs7WUFDMUIsTUFBTSxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQzlCLENBQUM7S0FBQTtJQUVELE1BQU0sQ0FBTyxpQkFBaUI7O1lBQzVCLE1BQU0sSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUM1QixDQUFDO0tBQUE7O0FBNUJILDRDQThCQztBQTVCUSxnQ0FBZSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDLENBQUM7QUFDN0QsdUJBQU0sR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsMERBQTBELENBQUMsQ0FBQyxDQUFDO0FBQ3ZGLDBCQUFTLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLHNDQUFzQyxDQUFDLENBQUMsQ0FBQztBQUNwRSx5QkFBUSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyx1Q0FBdUMsQ0FBQyxDQUFDLENBQUM7QUFDcEUseUJBQVEsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsd0NBQXdDLENBQUMsQ0FBQyxDQUFDO0FBQ3JFLHVCQUFNLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLHdDQUF3QyxDQUFDLENBQUMsQ0FBQztBQUNuRSwwQkFBUyxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxzQ0FBc0MsQ0FBQyxDQUFDLENBQUMifQ==