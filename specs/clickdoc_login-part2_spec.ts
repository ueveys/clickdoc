import { browser } from "protractor";
import { CLICKDOC_PASSWORD, CLICKDOC_USERNAME } from "../environment/environment";
import { ClickdocHomepage } from "../pageObjects/clickdoc_home_page";
import { LoginPopup } from "../pageObjects/clickdoc_loginPopup_page";

describe('Clickdoc_Login-Part2:', function () {
    it('Loging-Popup call up',function(){
        browser.logger.info("Clickdoc_Login-Part2 startet");
        browser.logger.info("Loging-Popup call up");
        browser.sleep(3000);
        ClickdocHomepage.profil.click();
        browser.sleep(3000);
        browser.switchTo().frame(3); 
    });

    it('TestCase5: Indication Combination: Check correct email and password:', function () {

        browser.logger.info("TestCase5: Indication Combination: Check correct email and password");
        LoginPopup.inputMail.sendKeys(CLICKDOC_USERNAME);
        LoginPopup.inputPassword.sendKeys(CLICKDOC_PASSWORD);
        browser.sleep(1000);
        expect(LoginPopup.btnLogin.getText()).toContain("ANMELDEN");
        LoginPopup.btnLogin.click();
        browser.sleep(2000);

    });

    it('TestCase6: User icon is visible:', async () => {
        browser.logger.info("TestCase6: User icon is visible");
        //After login, user icon is visible. 
        browser.sleep(3000);
        ClickdocHomepage.userIcon.isPresent();
        browser.sleep(2000);
        ClickdocHomepage.userIcon.click();
        expect(ClickdocHomepage.myprofil.getText()).toContain("Mein Profil")
        expect(ClickdocHomepage.logout.getText()).toContain("Logout");

    });

    it('TestCase7: Logout and Frontpage shown again:', async () => {
        browser.logger.info("TestCase7: Logout and Frontpage shown again");
        //After logout, user icon is not visible. 
        browser.sleep(3000);
        ClickdocHomepage.logout.click();
        browser.sleep(3000);
        expect(ClickdocHomepage.profil.getText()).toContain("Profil")
    });
});



