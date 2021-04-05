import { browser, by, element, WebDriver } from "protractor";
import { DriverProvider } from "protractor/built/driverProviders";
import { BASE_URL, CLICKDOC_PASSWORD, CLICKDOC_USERNAME } from "../environment/environment";
import { ProtractorHelper } from "../helpers/protractor.helper";
import { ClickdocHomepage } from "../pageObjects/clickdoc_home_page";
import { LoginPopup } from "../pageObjects/clickdoc_loginPopup_page";
import { ClickdocSearchpage } from "../pageObjects/clickdoc_search_page";

describe('Clickdoc_Search-Part1:', function () {

    it('Call URL:', function() {
        browser.get(BASE_URL);
        const title = ProtractorHelper.getPageTitle();
        expect(title).toContain('CLICKDOC');
        browser.sleep(2000);
        ClickdocHomepage.btnCookiesAkzep.click();
        browser.sleep(3000);
    });

    it('TestCase1: Check areas of option and result in the search page:', function(){

        ClickdocHomepage.suchseite.click();
        browser.sleep(1000);
        expect(ClickdocSearchpage.areaOption.getLocation()).toEqual(jasmine.objectContaining({
            x: 350.5,
            y: 120
        }));

        expect(ClickdocSearchpage.areaResult.getLocation()).toEqual(jasmine.objectContaining({
            x: 651,
            y: 120
        }));
    
    });

    it('TestCase2: Option elements are present:', function(){

        ClickdocSearchpage.inputFachbereich.isDisplayed();
        ClickdocSearchpage.inputLokation.isDisplayed();
        ClickdocSearchpage.checkboxOnlineTermin.isDisplayed();
        ClickdocSearchpage.checkboxVideoSprechstunde.isDisplayed();
        ClickdocSearchpage.checkboxBarrierefreiheit.isDisplayed();
        ClickdocSearchpage.btnSuchen.isDisplayed();
        expect(ClickdocSearchpage.btnSuchen.getText()).toEqual("SUCHEN");

    });

    it('TestCase3: Sorting-Sections are present', function(){

        ClickdocSearchpage.radiobtnBesteErgebnisse.isPresent();
        ClickdocSearchpage.radiobtnAlphabetisch.isPresent();
        ClickdocSearchpage.radiobtnEntfernung.isPresent();
        ClickdocSearchpage.radiobtnEnfernungSlider.isPresent();
        expect(ClickdocSearchpage.radiobtnBesteErgebnisseLabel.getText()).toEqual("Beste Ergebnisse");
    });
   
    it ('TestCase4: Check initial message result area', function(){

        expect(ClickdocSearchpage.initialMessageResultArea.getText()).toContain("AUF DER LINKEN SEITE KANNST DU DIE ARZTSUCHE STARTEN.");
    });
});



