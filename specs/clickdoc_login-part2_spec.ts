import { browser } from "protractor";
import { CLICKDOC_PASSWORD, CLICKDOC_USERNAME } from "../environment/environment";
import { ClickdocHomepage } from "../pageObjects/clickdoc_home_page";
import { LoginPopup } from "../pageObjects/clickdoc_loginPopup_page";

describe('Clickdoc_Login-Part2:', () => {
    it('Loging-Popup call up', async () => {
       await browser.logger.info("Clickdoc_Login-Part2 startet");
      await  browser.logger.info("Loging-Popup call up");
        await browser.sleep(3000);
        await ClickdocHomepage.iconProfilKlicken();
        await browser.sleep(3000);
        await browser.switchTo().frame(3);
    });

    it('TestCase5: Indication Combination: Check correct email and password:', async () => {

       await browser.logger.info("TestCase5: Indication Combination: Check correct email and password");
        await LoginPopup.mailAdresseAngeben(CLICKDOC_USERNAME);
        await LoginPopup.passwordEingeben(CLICKDOC_PASSWORD);
        await browser.sleep(1000);
        expect(await LoginPopup.btnLogin.getText()).toContain("ANMELDEN");
        await LoginPopup.anmeldenKlicken();
        await browser.sleep(2000);

    });

    it('TestCase6: User icon is visible:', async () => {
       await browser.logger.info("TestCase6: User icon is visible");
        //After login, user icon is visible. 
        await browser.sleep(3000);
        await ClickdocHomepage.userIcon.isPresent();
        await browser.sleep(2000);
        await ClickdocHomepage.iconUserKlicken();
        expect(await ClickdocHomepage.myprofil.getText()).toContain("Mein Profil")
        expect(await ClickdocHomepage.logout.getText()).toContain("Logout");

    });

    it('TestCase7: Logout and Frontpage shown again:', async () => {
       await browser.logger.info("TestCase7: Logout and Frontpage shown again");
        //After logout, user icon is not visible. 
        await browser.sleep(3000);
        await ClickdocHomepage.iconLogoutKlicken();
        await browser.sleep(3000);
        expect(await ClickdocHomepage.profil.getText()).toContain("Profil")
    });
});



