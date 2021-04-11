import { $$, browser, by, element, Key, promise, WebDriver } from "protractor";
import { BASE_URL } from "../environment/environment";
import { ProtractorHelper } from "../helpers/protractor.helper";
import { ClickdocHomepage } from "../pageObjects/clickdoc_home_page";
import { ClickdocSearchpage } from "../pageObjects/clickdoc_search_page";
var helpers = require('protractor-helpers');

describe('Clickdoc_SearchPage-Part3:', function () {

   
    it('Call the browser again:',function(){

        browser.get(BASE_URL);
    });

    it('Go to the search page:', function(){
        browser.sleep(3000);
        ClickdocHomepage.suchseite.click();
        helpers.waitForElement(ClickdocSearchpage.inputName, 5000);
        ClickdocSearchpage.inputName.clear();
    });

    it('Specifies a location:', function(){

        browser.logger.info("TestCase12: Enter location and check the suggestions:");
        browser.actions().mouseMove(ClickdocSearchpage.inputLokation).click().perform();  
        helpers.waitForElement(ClickdocSearchpage.inputLokation, 5000);
        ClickdocSearchpage.inputLokation.sendKeys("56567");
        browser.sleep(2000);
        //Methode Click wird hier gestrichen, weil bei der Notation die Formuliereung "$" verwendet wurde.
        helpers.waitForElement(ClickdocSearchpage.inputLokationFirsSuggestion, 3000);
        ClickdocSearchpage.inputLokationFirsSuggestion.click();
    });

    it('Activate Alphabetic Sorting:', function(){
        helpers.waitForElement(ClickdocSearchpage.radiobtnAlphabetisch, 5000);
        ClickdocSearchpage.radiobtnAlphabetisch.click();
    });

    it('Button Search Click:', function(){
        browser.sleep(3000);
        helpers.waitForElement(ClickdocSearchpage.btnSuchen, 5000);
        ClickdocSearchpage.btnSuchen.click();

    });

    it('TestCase17: Alphabetical-Sort-Option', function(){
        browser.logger.info("TestCase17: Alphabetical-Sort-Option");
        //checkbox clean
        helpers.waitForElement(ClickdocSearchpage.nameAA, 10000);
        ClickdocSearchpage.nameAA.getText().then(function(titel: any){
            expect(titel).toContain("A Aa");
        });
    });

});    