import { $$, browser, by, element, Key, promise, WebDriver } from "protractor";
import { ClickdocHomepage } from "../pageObjects/clickdoc_home_page";
import { ClickdocSearchpage } from "../pageObjects/clickdoc_search_page";
var helpers = require('protractor-helpers');

describe('Clickdoc_SearchPage-Part1:', function () {
    /*it('Call URL and Searchpage:', function () {
        
        browser.logger.info("Call URL and Searchpage");
        ClickdocHomepage.webseiteStarten();
        ClickdocHomepage.suchseite.click();
        browser.sleep(1000);
        browser.getCurrentUrl().then(function(text){
            expect(text).toContain("search");
        });
    });
    */
    browser.logger.info("Clickdoc_SearchPage-Part1 startet");
    beforeAll(function() {
        ClickdocHomepage.suchseite.click();
        browser.sleep(1000);
        browser.getCurrentUrl().then(function(text){
            expect(text).toContain("search");
        });
      });

        it('TestCase1: Check areas of option and result in the search page:', function(){

            browser.logger.info("TestCase1: Check areas of option and result in the search page");
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
    
            browser.logger.info("TestCase2: Option elements are present");
            ClickdocSearchpage.inputName.isPresent();
            ClickdocSearchpage.inputLokation.isPresent();
            ClickdocSearchpage.checkboxOnlineTermin.isPresent();
            ClickdocSearchpage.checkboxVideoSprechstunde.isPresent();
            ClickdocSearchpage.checkboxBarrierefreiheit.isPresent();
            ClickdocSearchpage.btnSuchen.isPresent();
            expect(ClickdocSearchpage.btnSuchen.getText()).toEqual("SUCHEN");
    
        });
    
        it('TestCase3: Sorting-Sections are present:', function(){
    
            browser.logger.info("TestCase3: Sorting-Sections are present");
            ClickdocSearchpage.radiobtnBesteErgebnisse.isPresent();
            ClickdocSearchpage.radiobtnAlphabetisch.isPresent();
            ClickdocSearchpage.radiobtnEntfernung.isPresent();
            ClickdocSearchpage.radiobtnEnfernungSlider.isPresent();
            expect(ClickdocSearchpage.radiobtnBesteErgebnisseLabel.getText()).toEqual("Beste Ergebnisse");
        });
       
        it('TestCase4: Check initial message result area:', function(){
    
            browser.logger.info("TestCase4: Check initial message result area");
            expect(ClickdocSearchpage.initialMessageResultArea.getText()).toContain("AUF DER LINKEN SEITE KANNST DU DIE ARZTSUCHE STARTEN.");
        });
    
        it('TestCase5: Check drop-down list of Input Name:',function(){
            browser.logger.info("TestCase5: Check drop-down list of Input Name");   
            helpers.clearAndSetValue(ClickdocSearchpage.inputName, 'Beate');
            helpers.waitForElement(ClickdocSearchpage.inputNameDropdownItem, 5000);
            expect(ClickdocSearchpage.inputNameDropdownItem.getText()).toContain('Beate');
        });
    
        it('TestCase6: Check drop-down list of Input Name further specified:',function(){
            browser.logger.info("TestCase6: Check drop-down list of Input Name further specified");
            helpers.clearAndSetValue(ClickdocSearchpage.inputName, 'Beate Edel');
            helpers.waitForElement(ClickdocSearchpage.inputNameDropdownItem, 5000);
            expect(ClickdocSearchpage.inputNameDropdownItem.getText()).toContain('Beate Edel');
        });
    
        it('TestCase7: Check drop-down list of Input Name which no results exist:',function(){
            
            browser.logger.info("TestCase7: Check drop-down list of Input Name which no results exist");
            helpers.clearAndSetValue(ClickdocSearchpage.inputName, 'Beate Edelse');
            helpers.waitForElement(ClickdocSearchpage.inputNameDropdownItem, 5000);
            expect(ClickdocSearchpage.inputNameDropdownItem.getText()).not.toContain('Beate Edelse');
        });
    
    it('TestCase8: Check drop-down list of Input Name:', function () {

        browser.logger.info("TestCase8: Check drop-down list of Input Name");
        helpers.clearAndSetValue(ClickdocSearchpage.inputName, 'Beate');
        helpers.waitForElement(ClickdocSearchpage.inputNameDropdownItem, 5000);
        expect(ClickdocSearchpage.inputNameDropdownItem.getText()).toContain('Beate');
        ClickdocSearchpage.areaResult.click();
        helpers.waitForElement(ClickdocSearchpage.btnSuchen, 5000);
        ClickdocSearchpage.btnSuchen.click();
        helpers.waitForElement(ClickdocSearchpage.areaResultContainer, 5000);
        expect(ClickdocSearchpage.areaResultContainer.getText()).toContain("Beate");
    });

    it('After TestCase 8 input field clean', function(){
        browser.logger.info("After TestCase 8 input field clean");
        ClickdocSearchpage.inputName.clear();
    });

    it('TestCase9: Check an elements of one result-item:', function () {

        browser.logger.info("TestCase9: Check an elements of one result-item");
        ClickdocSearchpage.areaResultContainerItemHeader.isPresent();
        ClickdocSearchpage.areaResultContainerItemPracticeInfo.isPresent();
        ClickdocSearchpage.areaResultContainerItemAppointment.isPresent();
        expect(ClickdocSearchpage.areaResultContainerItemPracticeInfoTitel.getText()).toContain("Name der Gesundheitseinrichtung");
    });

    it('TestCase10: Scroll to the link Show more in the page:', function () {

        browser.logger.info("TestCase10: Scroll to the link Show more in the page");
        browser.actions().mouseDown(ClickdocSearchpage.areaResultContainerLoadMoreLink).perform();
        browser.sleep(2000);

    });

    it('TestCase11: After Click the „Show more“-Button additional results are loaded:', function () {

        browser.logger.info("TestCase11: After Click the „Show more“-Button additional results are loaded:");
        $$('app-contact-card.ng-star-inserted').then(function (numberOfResult: any) {
            //die Objekte werden zu einem String umgewandelt.
            let n = numberOfResult.length.toString();
            expect(numberOfResult.length.toString()).toEqual(n);
            ClickdocSearchpage.areaResultContainerLoadMoreLink.click()
            browser.sleep(3000);
            $$('app-contact-card.ng-star-inserted').then(function (nMore: any) {
                //Nach dem 'mehr anzeigen'-Klick wird die Liste noch mal gelesen.
                let n2 = nMore.length.toString();
                expect(nMore.length.toString()).toEqual(n2);
                if (n2 > n) {
                    console.log("After the update, result is more!");
                } else {
                    console.log("Update did't work.");
                }
            });
        });
    });

    it('TestCase12: Enter location and check the suggestions:', function(){

        browser.logger.info("TestCase12: Enter location and check the suggestions:");
        browser.actions().mouseMove(ClickdocSearchpage.inputLokation).click().perform();  
        helpers.waitForElement(ClickdocSearchpage.inputLokation, 5000);
        ClickdocSearchpage.inputLokation.sendKeys("56567");
        browser.sleep(2000);
        //Methode Click wird hier gestrichen, weil bei der Notation die Formuliereung "$" verwendet wurde.
        helpers.waitForElement(ClickdocSearchpage.inputLokationFirsSuggestion, 3000);
        ClickdocSearchpage.inputLokationFirsSuggestion.click();
        helpers.waitForElement(ClickdocSearchpage.btnSuchen, 5000);
        ClickdocSearchpage.btnSuchen.click();
    });

    it('TestCase13: Check the inputfield for timeframe:', function(){
        
        browser.logger.info("TestCase13: Check the inputfield for timeframe:");
        browser.sleep(3000);
        ClickdocSearchpage.checkboxOnlineTermin.click();
        browser.sleep(3000);
        ClickdocSearchpage.checkboxOnlineTerminDay.isPresent();
        ClickdocSearchpage.checkboxOnlineTerminTime.isPresent();

    });

    it('TestCase14: Only the results have been displayed with online appointment.', function(){
        browser.logger.info("TestCase14: Only the results have been displayed with online appointment.");
        ClickdocSearchpage.btnSuchen.click();
        browser.sleep(5000);
        $$('app-contact-card.ng-star-inserted').then(function(anzahl:any){
            let gesamtAerzte = anzahl.length.toString();
            expect(anzahl.length.toString()).toEqual(gesamtAerzte);
            element.all(by.xpath('//app-contact-card//app-contact-button-container')).then(function(terminBtn: any){
                 let aktivOnlineTermin = terminBtn.length.toString();
                 if(gesamtAerzte===aktivOnlineTermin){
                     console.log("Only the results have been displayed with online appointment.");
                 }else{
                     expect(terminBtn).toBe(false);
                 }


            });
        })
    });

    it('TestCase15: Check Barrier-Free-Checkbox, Only the doctors with barrier-free state displayed:', function(){
        browser.logger.info("TestCase15: Check Barrier-Free-Checkbox, Only the doctors with barrier-free state displayed");
        //Uncheck „Video-Conference“ Checkbox
        element(by.css('#videoCall')).isSelected().then(function(checkbox){
            if(checkbox===true){
                ClickdocSearchpage.checkboxVideoSprechstunde.click();
            }
        });
        
         element(by.css('#onlineBooking')).isSelected().then(function(checkbox){
            if(checkbox===true){
                ClickdocSearchpage.checkboxOnlineTermin.click();
            }
        });

        element(by.css('#accessibility')).isSelected().then(function(checkbox){
            if(checkbox===false){
                ClickdocSearchpage.checkboxBarrierefreiheit.click();
            }
        });
    
    });

    it('TestCase15: part 2', function(){
        browser.logger.info("TestCase15: part 2");
        ClickdocSearchpage.btnSuchen.click();
        browser.sleep(5000);
        $$('app-contact-card.ng-star-inserted').then(function(anzahl: any){
            let gesamtAerzte = anzahl.length.toString();
            expect(anzahl.length.toString()).toEqual(gesamtAerzte);
            element.all(by.xpath("//app-profile-field//span[contains(text(),'Barrierefrei')]")).then(function(barriereFrei:any){
               let anzahlAnbieter = barriereFrei.length.toString();
               if(gesamtAerzte===anzahlAnbieter){
                   console.log("Number of search properties is consistent with the total search result.");
                   console.log("gesamt Aerzte: "+gesamtAerzte);
                   console.log("anzahl Anbieter: "+anzahlAnbieter);
               }else{
                expect(anzahlAnbieter).toBe(false);
               }
            });
        });

    });
});



