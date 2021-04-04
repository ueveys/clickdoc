"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const environment_1 = require("../environment/environment");
const protractor_helper_1 = require("../helpers/protractor.helper");
const clickdoc_home_page_1 = require("../pageObjects/clickdoc_home_page");
const clickdoc_loginPopup_page_1 = require("../pageObjects/clickdoc_loginPopup_page");
describe('Clickdoc Homepage', function () {
    const clickdocHome = new clickdoc_home_page_1.ClickdocHomepage();
    const loginPopupInst = new clickdoc_loginPopup_page_1.LoginPopup();
    beforeAll(function () {
        const clickdocHome = new clickdoc_home_page_1.ClickdocHomepage();
        protractor_1.browser.get(environment_1.BASE_URL);
        const title = protractor_helper_1.ProtractorHelper.getPageTitle();
        expect(title).toContain('CLICKDOC');
        protractor_1.browser.sleep(2000);
        var cookies = protractor_1.element(protractor_1.by.css('button.btn:nth-child(2)')).click();
    });
    it('Login dialog aufrufen: ', function () {
        protractor_1.browser.sleep(3000);
        clickdocHome.profilIconKlicken();
    });
    it('Alle Felder in Popup-Login fenster prüfen', function () {
        protractor_1.browser.sleep(3000);
        protractor_1.browser.switchTo().frame(3);
        protractor_1.browser.sleep(3000);
        loginPopupInst.closeIconistVorhanden();
        loginPopupInst.btnRegisteristVorhanden();
        loginPopupInst.inputMailistVorhanden();
        loginPopupInst.inputPasswordistVorhanden();
        loginPopupInst.btnLoginistVorhanden();
        loginPopupInst.btnPasswordForgotistVorhanden();
    });
    it('Schriftfarbe der Inputfelder bei der fehlenden Angabe prüfen.', function () {
        protractor_1.browser.sleep(3000);
        loginPopupInst.btnLogin.click();
        protractor_1.browser.sleep(3000);
        expect(loginPopupInst.inputMail.getCssValue('caret-color')).toBe('rgb(244, 67, 54)');
        expect(loginPopupInst.inputPassword.getCssValue('caret-color')).toBe('rgb(244, 67, 54)');
    });
    it('Abschluss', function () {
        console.log("Test ist abgeschlossen!");
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpY2tkb2NfZGVtb2xvZ2luX3NwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcGVjcy9jbGlja2RvY19kZW1vbG9naW5fc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDJDQUE2RDtBQUU3RCw0REFBNEY7QUFDNUYsb0VBQWdFO0FBQ2hFLDBFQUFxRTtBQUNyRSxzRkFBcUU7QUFFckUsUUFBUSxDQUFDLG1CQUFtQixFQUFFO0lBRzFCLE1BQU0sWUFBWSxHQUFHLElBQUkscUNBQWdCLEVBQUUsQ0FBQztJQUM1QyxNQUFNLGNBQWMsR0FBRyxJQUFJLHFDQUFVLEVBQUUsQ0FBQztJQUV4QyxTQUFTLENBQUM7UUFDTixNQUFNLFlBQVksR0FBRyxJQUFJLHFDQUFnQixFQUFFLENBQUM7UUFDNUMsb0JBQU8sQ0FBQyxHQUFHLENBQUMsc0JBQVEsQ0FBQyxDQUFDO1FBQ3RCLE1BQU0sS0FBSyxHQUFHLG9DQUFnQixDQUFDLFlBQVksRUFBRSxDQUFDO1FBQzlDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDcEMsb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDcEIsSUFBSSxPQUFPLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLHlCQUF5QixDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNyRSxDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyx5QkFBeUIsRUFBRTtRQUUxQixvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNwQixZQUFZLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztJQUNyQyxDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQywyQ0FBMkMsRUFBRTtRQUU1QyxvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNwQixvQkFBTyxDQUFDLFFBQVEsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM1QixvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNwQixjQUFjLENBQUMscUJBQXFCLEVBQUUsQ0FBQztRQUN2QyxjQUFjLENBQUMsdUJBQXVCLEVBQUUsQ0FBQztRQUN6QyxjQUFjLENBQUMscUJBQXFCLEVBQUUsQ0FBQztRQUN2QyxjQUFjLENBQUMseUJBQXlCLEVBQUUsQ0FBQztRQUMzQyxjQUFjLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztRQUN0QyxjQUFjLENBQUMsNkJBQTZCLEVBQUUsQ0FBQztJQUVuRCxDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQywrREFBK0QsRUFBRTtRQUNoRSxvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNwQixjQUFjLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2hDLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3BCLE1BQU0sQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBQ3JGLE1BQU0sQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0lBRTdGLENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLFdBQVcsRUFBRTtRQUNaLE9BQU8sQ0FBQyxHQUFHLENBQUMseUJBQXlCLENBQUMsQ0FBQztJQUUzQyxDQUFDLENBQUMsQ0FBQztBQUdQLENBQUMsQ0FBQyxDQUFDIn0=