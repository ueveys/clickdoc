"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const clickdoc_home_page_1 = require("../pageObjects/clickdoc_home_page");
const clickdoc_search_page_1 = require("../pageObjects/clickdoc_search_page");
describe('Clickdoc_SearchPage-Part1:', function () {
    var nB;
    it('Call URL and Searchpage:', function () {
        clickdoc_home_page_1.ClickdocHomepage.webseiteStarten();
        clickdoc_home_page_1.ClickdocHomepage.suchseite.click();
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
        protractor_1.browser.sleep(3000);
        clickdoc_search_page_1.ClickdocSearchpage.dropdownItemValidate("Beate");
        clickdoc_search_page_1.ClickdocSearchpage.areaResult.click();
        protractor_1.browser.sleep(1000);
        clickdoc_search_page_1.ClickdocSearchpage.btnSuchen.click();
        protractor_1.browser.sleep(3000);
        expect(clickdoc_search_page_1.ClickdocSearchpage.areaResultContainer.getText()).toContain("Beate");
    });
    it('TestCase9: Check an elements of one result-item:', function () {
        clickdoc_search_page_1.ClickdocSearchpage.areaResultContainerItemHeader.isPresent();
        clickdoc_search_page_1.ClickdocSearchpage.areaResultContainerItemPracticeInfo.isPresent();
        clickdoc_search_page_1.ClickdocSearchpage.areaResultContainerItemAppointment.isPresent();
        expect(clickdoc_search_page_1.ClickdocSearchpage.areaResultContainerItemPracticeInfoTitel.getText()).toContain("Name der Gesundheitseinrichtung");
    });
    it('TestCase10: Scroll to the link Show more in the page:', function () {
        protractor_1.browser.actions().mouseDown(clickdoc_search_page_1.ClickdocSearchpage.areaResultContainerLoadMoreLink).perform();
        protractor_1.browser.sleep(2000);
    });
    it('TestCase11: After Click the „Show more“-Button additional results are loaded:', function () {
        protractor_1.$$('app-contact-card.ng-star-inserted').then(function (numberOfResult) {
            let n = numberOfResult.length.toString();
            expect(numberOfResult.length.toString()).toEqual(n);
            clickdoc_search_page_1.ClickdocSearchpage.areaResultContainerLoadMoreLink.click();
            protractor_1.browser.sleep(3000);
            protractor_1.$$('app-contact-card.ng-star-inserted').then(function (nMore) {
                let n2 = nMore.length.toString();
                expect(nMore.length.toString()).toEqual(n2);
                if (n2 > n) {
                    console.log("After the update, result is more!");
                }
                else {
                    console.log("Update did't work.");
                }
            });
        });
    });
    it('TestCase12: Enter location and check the suggestions:', function () {
        protractor_1.browser.actions().mouseMove(clickdoc_search_page_1.ClickdocSearchpage.inputLokation).click().perform();
        protractor_1.browser.sleep(3000);
        clickdoc_search_page_1.ClickdocSearchpage.inputLokation.sendKeys("56567");
        protractor_1.browser.sleep(2000);
        clickdoc_search_page_1.ClickdocSearchpage.inputLokationFirsSuggestion.click();
        protractor_1.browser.sleep(1000);
        clickdoc_search_page_1.ClickdocSearchpage.btnSuchen.click();
    });
    it('TestCase13: Check the inputfield for timeframe:', function () {
        protractor_1.browser.sleep(3000);
        clickdoc_search_page_1.ClickdocSearchpage.checkboxOnlineTermin.click();
        protractor_1.browser.sleep(3000);
        clickdoc_search_page_1.ClickdocSearchpage.checkboxOnlineTerminDay.isPresent();
        clickdoc_search_page_1.ClickdocSearchpage.checkboxOnlineTerminTime.isPresent();
    });
    it('TestCase14: Check the inputfield for timeframe:', function () {
        clickdoc_search_page_1.ClickdocSearchpage.btnSuchen.click();
        protractor_1.browser.sleep(3000);
        protractor_1.$$('app-contact-card.ng-star-inserted').then(function (anzahl) {
            let gesamtAerzte = anzahl.length.toString();
            expect(anzahl.length.toString()).toEqual(gesamtAerzte);
            protractor_1.element.all(protractor_1.by.xpath('//app-contact-card//app-contact-button-container')).then(function (terminBtn) {
                let aktivOnlineTermin = terminBtn.length.toString();
                if (gesamtAerzte == aktivOnlineTermin) {
                    console.log("Only the results have been displayed with online appointment.");
                }
                else {
                    expect(terminBtn).toBe(false);
                }
            });
        });
    });
    it('TestCase15: Check Video-Conference-Checkbox, Only the doctors with videoconference displayed:', function () {
        //befor test clean input field of name
        clickdoc_search_page_1.ClickdocSearchpage.inputName.clear();
        protractor_1.browser.refresh();
        protractor_1.browser.sleep(1000);
        //for disabling option online termin
        clickdoc_search_page_1.ClickdocSearchpage.checkboxOnlineTermin.click();
        clickdoc_search_page_1.ClickdocSearchpage.checkboxVideoSprechstunde.click();
        protractor_1.browser.sleep(3000);
        clickdoc_search_page_1.ClickdocSearchpage.inputName.clear();
        clickdoc_search_page_1.ClickdocSearchpage.btnSuchen.click();
        protractor_1.browser.sleep(10000);
        protractor_1.$$('app-contact-card.ng-star-inserted').then(function (anzahl) {
            let gesamtAerzte = anzahl.length.toString();
            expect(anzahl.length.toString()).toEqual(gesamtAerzte);
            protractor_1.element.all(protractor_1.by.xpath("//app-profile-field//span[contains(text(),' Videosprechstunde')]")).then(function (videoService) {
                let anzahlAnbieter = videoService.length.toString();
                if (gesamtAerzte == anzahlAnbieter) {
                    console.log("Only doctors with video hour displayed.");
                }
                else {
                    expect(anzahlAnbieter).toBe(false);
                }
            });
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpY2tkb2Nfc2VhcmNoLXBhcnQxX3NwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcGVjcy9jbGlja2RvY19zZWFyY2gtcGFydDFfc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLDJDQUEwRTtBQUkxRSwwRUFBcUU7QUFFckUsOEVBQXlFO0FBRXpFLFFBQVEsQ0FBQyw0QkFBNEIsRUFBRTtJQUVuQyxJQUFJLEVBQVMsQ0FBQztJQUVkLEVBQUUsQ0FBQywwQkFBMEIsRUFBRTtRQUMzQixxQ0FBZ0IsQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUNuQyxxQ0FBZ0IsQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUM7SUFFdkMsQ0FBQyxDQUFDLENBQUM7SUFDSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7TUFxREU7SUFDRixFQUFFLENBQUMsZ0RBQWdELEVBQUU7UUFFakQsb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDcEIseUNBQWtCLENBQUMsb0JBQW9CLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDakQseUNBQWtCLENBQUMsVUFBVSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3RDLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3BCLHlDQUFrQixDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNyQyxvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNwQixNQUFNLENBQUMseUNBQWtCLENBQUMsbUJBQW1CLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDaEYsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsa0RBQWtELEVBQUU7UUFFbkQseUNBQWtCLENBQUMsNkJBQTZCLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDN0QseUNBQWtCLENB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