import { browser, by, element, WebDriver } from "protractor";
import { DriverProvider } from "protractor/built/driverProviders";
import { BASE_URL, CLICKDOC_PASSWORD, CLICKDOC_USERNAME } from "../environment/environment";
import { ProtractorHelper } from "../helpers/protractor.helper";
import { ClickdocHomepage } from "../pageObjects/clickdoc_home_page";
import { LoginPopup } from "../pageObjects/clickdoc_loginPopup_page";
import { ClickdocSearchpage } from "../pageObjects/clickdoc_search_page";

describe('Clickdoc_SearchPage-Part1:', function () {

    it('Call URL:', function() {
       //ClickdocHomepage.webseiteStarten();
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

        ClickdocSearchpage.inputName.isPresent();
        ClickdocSearchpage.inputLokation.isPresent();
        ClickdocSearchpage.checkboxOnlineTermin.isPresent();
        ClickdocSearchpage.checkboxVideoSprechstunde.isPresent();
        ClickdocSearchpage.checkboxBarrierefreiheit.isPresent();
        ClickdocSearchpage.btnSuchen.isPresent();
        expect(ClickdocSearchpage.btnSuchen.getText()).toEqual("SUCHEN");

    });

    it('TestCase3: Sorting-Sections are present:', function(){

        ClickdocSearchpage.radiobtnBesteErgebnisse.isPresent();
        ClickdocSearchpage.radiobtnAlphabetisch.isPresent();
        ClickdocSearchpage.radiobtnEntfernung.isPresent();
        ClickdocSearchpage.radiobtnEnfernungSlider.isPresent();
        expect(ClickdocSearchpage.radiobtnBesteErgebnisseLabel.getText()).toEqual("Beste Ergebnisse");
    });
   
    it('TestCase4: Check initial message result area:', function(){

        expect(ClickdocSearchpage.initialMessageResultArea.getText()).toContain("AUF DER LINKEN SEITE KANNST DU DIE ARZTSUCHE STARTEN.");
    });

    it('TestCase5: Check drop-down list of Input Name:',function(){
           ClickdocSearchpage.dropdownItemValidate("Beate");
    });

    it('TestCase6: Check drop-down list of Input Name further specified:',function(){
        ClickdocSearchpage.dropdownItemValidate("Beate Edel");
    });

    it('TestCase7: Check drop-down list of Input Name which no results exist:',function(){
        ClickdocSearchpage.dropdownItemDisapp("Beate Edelse");
    });

    it('TestCase8: Check drop-down list of Input Name:',function(){
        ClickdocSearchpage.dropdownItemValidate("Beate");
        ClickdocSearchpage.areaResult.click();
        browser.sleep(1000);
        ClickdocSearchpage.btnSuchen.click();
        browser.sleep(3000);
        expect(ClickdocSearchpage.areaResultContainer.getText()).toContain("Beate");
    });

    it('TestCase9: Check an elements of one result-item:',function(){
       
        ClickdocSearchpage.areaResultContainerItemHeader.isPresent();
        ClickdocSearchpage.areaResultContainerItemPracticeInfo.isPresent();
        ClickdocSearchpage.areaResultContainerItemAppointment.isPresent();
        expect(ClickdocSearchpage.areaResultContainerItemPracticeInfoTitel.getText()).toContain("Name der Gesundheitseinrichtung");
    });

    it('TestCase10: Scroll to the link Show more in the page:', function(){
        
        browser.actions().mouseDown(ClickdocSearchpage.areaResultContainerLoadMoreLink).perform();
        browser.sleep(2000);

    });
});



