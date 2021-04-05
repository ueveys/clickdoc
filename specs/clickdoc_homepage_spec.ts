import { browser, by, element, WebDriver } from "protractor";
import { DriverProvider } from "protractor/built/driverProviders";
import { BASE_URL, CLICKDOC_PASSWORD, CLICKDOC_USERNAME } from "../environment/environment";
import { ProtractorHelper } from "../helpers/protractor.helper";
import { ClickdocHomepage } from "../pageObjects/clickdoc_home_page";
import { LoginPopup } from "../pageObjects/clickdoc_loginPopup_page";

describe('Clickdoc_Homepage-Test:', function () {
    
    it('Loging-Popup call up',function(){
        browser.sleep(3000);
        ClickdocHomepage.profil.click();
        browser.sleep(3000);
        browser.switchTo().frame(3); 
    });

    it('TestCase5: Indication Combination: Check correct email and password:', function () {

        // browser.sleep(3000);
        LoginPopup.inputMail.sendKeys(CLICKDOC_USERNAME);
        LoginPopup.inputPassword.sendKeys(CLICKDOC_PASSWORD);
        browser.sleep(1000);
        expect(LoginPopup.btnLogin.getText()).toContain("ANMELDEN");
        LoginPopup.btnLogin.click();
        browser.sleep(2000);

    });

    it('TestCase6: User icon is visible:', async () => {
        //After login, user icon is visible. 
        browser.sleep(3000);
        ClickdocHomepage.userIcon.isDisplayed();
        browser.sleep(2000);
        ClickdocHomepage.userIcon.click();
        expect(ClickdocHomepage.myprofil.getText()).toContain("Mein Profil")
        expect(ClickdocHomepage.logout.getText()).toContain("Logout");

    });

    it('TestCase7: Logout and Frontpage shown again:', async () => {
        //After logout, user icon is not visible. 
        browser.sleep(3000);
        ClickdocHomepage.logout.click();
        browser.sleep(3000);
        expect(ClickdocHomepage.profil.getText()).toContain("Profil")
    });
});



