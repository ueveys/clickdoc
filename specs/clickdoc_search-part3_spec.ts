import { $$, browser, by, element, Key, promise, WebDriver } from "protractor";
import { ClickdocSearchpage } from "../pageObjects/clickdoc_search_page";
var helpers = require('protractor-helpers');

describe('Clickdoc_SearchPage-Part3:', function () {

    it('TestCase17: Vorbereitung 0', function(){
        ClickdocSearchpage.inputName.clear();
    });

    it('TestCase17: Vorbereitung 1', function(){
        element(by.css('#videoCall')).isSelected().then(function(checkbox){
            if(checkbox===true){
                ClickdocSearchpage.checkboxVideoSprechstunde.click();
            }
        });

    });

    it('TestCase17: Vorbereitung 2', function(){
        helpers.waitForElement(ClickdocSearchpage.radiobtnAlphabetisch, 5000);
        ClickdocSearchpage.radiobtnAlphabetisch.click();
    });

   
    it('TestCase17: Vorbereitung 3', function(){
        ClickdocSearchpage.btnSuchen.click();
        browser.refresh();
        browser.sleep(3000);
    });

    it('TestCase17: Alphabetical-Sort-Option', function(){
        browser.logger.info("TestCase17: Alphabetical-Sort-Option");
        //checkbox clean
        helpers.waitForElement(ClickdocSearchpage.nameAA, 10000);
        browser.sleep(5000);
        ClickdocSearchpage.nameAA.getText().then(function(titel: any){
            expect(titel).toContain("A Aa");
        });
        browser.sleep(3000);
    });

});    