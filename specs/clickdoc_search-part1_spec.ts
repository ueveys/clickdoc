import { RerunFormatter } from "@cucumber/cucumber";
import { $$, browser, by, element, promise, WebDriver } from "protractor";
import { DriverProvider } from "protractor/built/driverProviders";
import { BASE_URL, CLICKDOC_PASSWORD, CLICKDOC_USERNAME } from "../environment/environment";
import { ProtractorHelper } from "../helpers/protractor.helper";
import { ClickdocHomepage } from "../pageObjects/clickdoc_home_page";
import { LoginPopup } from "../pageObjects/clickdoc_loginPopup_page";
import { ClickdocSearchpage } from "../pageObjects/clickdoc_search_page";

describe('Clickdoc_SearchPage-Part1:', function () {

    var nB:number;

    it('Call URL and Searchpage:', function () {
        ClickdocHomepage.webseiteStarten();
        ClickdocHomepage.suchseite.click();

    });
    /*
        it('TestCase1: Check areas of option and result in the search page:', function(){
    
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
    */
    it('TestCase8: Check drop-down list of Input Name:', function () {

        browser.sleep(3000);
        ClickdocSearchpage.dropdownItemValidate("Beate");
        ClickdocSearchpage.areaResult.click();
        browser.sleep(1000);
        ClickdocSearchpage.btnSuchen.click();
        browser.sleep(3000);
        expect(ClickdocSearchpage.areaResultContainer.getText()).toContain("Beate");
    });

    it('TestCase9: Check an elements of one result-item:', function () {

        ClickdocSearchpage.areaResultContainerItemHeader.isPresent();
        ClickdocSearchpage.areaResultContainerItemPracticeInfo.isPresent();
        ClickdocSearchpage.areaResultContainerItemAppointment.isPresent();
        expect(ClickdocSearchpage.areaResultContainerItemPracticeInfoTitel.getText()).toContain("Name der Gesundheitseinrichtung");
    });

    it('TestCase10: Scroll to the link Show more in the page:', function () {

        browser.actions().mouseDown(ClickdocSearchpage.areaResultContainerLoadMoreLink).perform();
        browser.sleep(2000);

    });

    it('TestCase11: After Click the „Show more“-Button additional results are loaded:', function () {

        $$('app-contact-card.ng-star-inserted').then(function (numberOfResult: any) {
            let n = numberOfResult.length.toString();
            expect(numberOfResult.length.toString()).toEqual(n);
            ClickdocSearchpage.areaResultContainerLoadMoreLink.click()
            browser.sleep(3000);
            $$('app-contact-card.ng-star-inserted').then(function (nMore: any) {
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

        browser.actions().mouseMove(ClickdocSearchpage.inputLokation).click().perform();  
        browser.sleep(3000);
        ClickdocSearchpage.inputLokation.sendKeys("56567");
        browser.sleep(2000);
        ClickdocSearchpage.inputLokationFirsSuggestion.click();
        browser.sleep(1000);
        ClickdocSearchpage.btnSuchen.click();
    });

    it('TestCase13: Check the inputfield for timeframe:', function(){

        browser.sleep(3000);
        ClickdocSearchpage.checkboxOnlineTermin.click();
        browser.sleep(3000);
        ClickdocSearchpage.checkboxOnlineTerminDay.isPresent();
        ClickdocSearchpage.checkboxOnlineTerminTime.isPresent();

    });

    it('TestCase14: Only the results have been displayed with online appointment.', function(){

        ClickdocSearchpage.btnSuchen.click();
        browser.sleep(3000);
        $$('app-contact-card.ng-star-inserted').then(function(anzahl:any){
            let gesamtAerzte = anzahl.length.toString();
            expect(anzahl.length.toString()).toEqual(gesamtAerzte);
            element.all(by.xpath('//app-contact-card//app-contact-button-container')).then(function(terminBtn: any){
                 let aktivOnlineTermin = terminBtn.length.toString();
                 if(gesamtAerzte==aktivOnlineTermin){
                     console.log("Only the results have been displayed with online appointment.");
                 }else{
                     expect(terminBtn).toBe(false);
                 }


            });
        })



    });

    it('TestCase15: Check Video-Conference-Checkbox, Only the doctors with videoconference displayed:', function(){
        
        //befor test clean input field of name
        ClickdocSearchpage.inputName.clear();
        browser.refresh();
        browser.sleep(1000);
        //for disabling option online termin
        ClickdocSearchpage.checkboxOnlineTermin.click();

        ClickdocSearchpage.checkboxVideoSprechstunde.click()
        browser.sleep(3000);
        ClickdocSearchpage.inputName.clear();
        ClickdocSearchpage.btnSuchen.click();
        browser.sleep(10000);
        $$('app-contact-card.ng-star-inserted').then(function(anzahl: any){
            
            let gesamtAerzte = anzahl.length.toString();
            expect(anzahl.length.toString()).toEqual(gesamtAerzte);
            element.all(by.xpath("//app-profile-field//span[contains(text(),' Videosprechstunde')]")).then(function(videoService:any){
               let anzahlAnbieter = videoService.length.toString();
               if(gesamtAerzte==anzahlAnbieter){
                   console.log("Only doctors with video hour displayed.");
               }else{
                expect(anzahlAnbieter).toBe(false);
               }
            });
        });

    });




});



