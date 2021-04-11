import { $$, browser, by, element } from "protractor";
import { BASE_URL } from "../environment/environment";
import { ClickdocHomepage } from "../pageObjects/clickdoc_home_page";
import { ClickdocSearchpage } from "../pageObjects/clickdoc_search_page";
var helpers = require('protractor-helpers');

describe('Clickdoc_SearchPage-Part1:', function () {
        
    it('Call the browser again:',function(){
        browser.get(BASE_URL);
    });
    
    it('Go to the search page:', function(){
        browser.sleep(3000);
        ClickdocHomepage.suchseite.click();
        helpers.waitForElement(ClickdocSearchpage.inputName, 5000);
        ClickdocSearchpage.inputName.clear();
    });
    
    it('TestCase16: Check Video-Conference-Checkbox, Only the doctors with videoconference displayed:', function(){
        
        browser.logger.info("TestCase16: Check Video-Conference-Checkbox, Only the doctors with videoconference displayed:");
        //befor test clean input field of name
        ClickdocSearchpage.inputLokation.clear();
        helpers.clearAndSetValue(ClickdocSearchpage.inputLokation, '56567');
        helpers.waitForElement(ClickdocSearchpage.inputLokationFirsSuggestion, 3000);
        ClickdocSearchpage.inputLokationFirsSuggestion.click();
        helpers.waitForElement(ClickdocSearchpage.checkboxVideoSprechstunde, 5000);
        ClickdocSearchpage.checkboxVideoSprechstunde.click();
    });

    it('TestCase16: part 2 Checkbox validieren',function(){
        browser.logger.info("TestCase16: part 2 Checkbox validieren");
        element(by.css('#videoCall')).isSelected().then(function(checkbox){
            if(checkbox===false){
                ClickdocSearchpage.checkboxVideoSprechstunde.click();
            }
        });
        
         element(by.css('#onlineBooking')).isSelected().then(function(checkbox){
            if(checkbox===true){
                ClickdocSearchpage.checkboxOnlineTermin.click();
            }
        });

        element(by.css('#accessibility')).isSelected().then(function(checkbox){
            if(checkbox===true){
                ClickdocSearchpage.checkboxBarrierefreiheit.click();
            }
        });

    });

    it('TestCase16: part3', function(){

        browser.logger.info("TestCase16: part3");
        helpers.waitForElement(ClickdocSearchpage.btnSuchen, 5000);
        ClickdocSearchpage.btnSuchen.click();
        helpers.waitForElement($('app-contact-card.ng-star-inserted'), 5000);
        browser.sleep(3000);
        $$('app-contact-card.ng-star-inserted').then(function(anzahl: any){
            let gesamtAerzte = anzahl.length.toString();
            expect(anzahl.length.toString()).toEqual(gesamtAerzte);
            element.all(by.xpath("//app-profile-field//span[contains(text(),' Videosprechstunde')]")).then(function(videoService:any){
               let anzahlAnbieter = videoService.length.toString();
               if(gesamtAerzte===anzahlAnbieter){
                   console.log("Number of search properties is consistent with the total search result.");
                   console.log("gesamt Aerzte: "+gesamtAerzte);
                   console.log("anzahl Anbieter: "+anzahlAnbieter);
               }else{
                expect(anzahlAnbieter).toBe(false);
               }
            });
        });

        //TODO:
        //Beim automtisierten Ablauf wird im Umkreis 200km keinen einzigen Arzt in der Suche angezeigt, manuell werden aber die Ärzte angezeigt. 
        //Sehr merkwürdig. muss noch rechechiert werden!!!
    });
    
  
});    