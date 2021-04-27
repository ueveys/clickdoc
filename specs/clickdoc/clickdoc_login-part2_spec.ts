import { browser } from "protractor";
import { CLICKDOC_PASSWORD, CLICKDOC_USERNAME } from "../../environment/environment";
import { ClickdocHomepage } from "../../pageObjects/clickdoc/clickdoc_home_page";
import { LoginPopup } from "../../pageObjects/clickdoc/clickdoc_loginPopup_page";
var helpers = require('protractor-helpers');

describe('Clickdoc_Login-Part2:', () => {
    it('Loging-Popup call up', async () => {
        await browser.logger.info("Clickdoc_Login-Part2 startet");
        await browser.logger.info("Loging-Popup call up");
        await helpers.waitForElement(ClickdocHomepage.iconProfil, 10000);
        await ClickdocHomepage.iconProfilKlicken();
        await browser.sleep(3000);
        await browser.switchTo().frame(3);
    });

    it('TestCase5: Indication Combination: Check correct email and password:', async () => {

       await browser.logger.info("TestCase5: Indication Combination: Check correct email and password");
        await LoginPopup.inputMailAngeben(CLICKDOC_USERNAME);
        await LoginPopup.inputPasswordEingeben(CLICKDOC_PASSWORD);
        await helpers.waitForElement(LoginPopup.btnLogin, 10000);
        expect(await LoginPopup.btnLogin.getText()).toContain("ANMELDEN");
        await LoginPopup.btnLoginKlicken();

    });

    it('TestCase6: User icon is visible:', async () => {
       await browser.logger.info("TestCase6: User icon is visible");
        //After login, user icon is visible. 
        await helpers.waitForElement(ClickdocHomepage.iconUser, 10000);
        await ClickdocHomepage.iconUser.isPresent();
        await ClickdocHomepage.iconUserKlicken();
        expect(await ClickdocHomepage.myprofil.getText()).toContain("Mein Profil")
        expect(await ClickdocHomepage.iconLogout.getText()).toContain("Logout");

    });

    it('TestCase7: Logout and Frontpage shown again:', async () => {
       await browser.logger.info("TestCase7: Logout and Frontpage shown again");
        //After logout, user icon is not visible. 
        await helpers.waitForElement(ClickdocHomepage.iconLogout, 10000);
        await ClickdocHomepage.iconLogoutKlicken();
        await helpers.waitForElement(ClickdocHomepage.iconProfil, 10000);
        var text1 = await ClickdocHomepage.iconProfil.getText();
        expect(await ClickdocHomepage.iconProfil.getText()).toContain("Profil")
    });
});



