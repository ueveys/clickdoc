"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const environment_1 = require("../environment/environment");
const protractor_helper_1 = require("../helpers/protractor.helper");
const clickdoc_home_page_1 = require("../pageObjects/clickdoc_home_page");
const clickdoc_search_page_1 = require("../pageObjects/clickdoc_search_page");
describe('Clickdoc_Search-Part1:', function () {
    it('Call URL:', function () {
        protractor_1.browser.get(environment_1.BASE_URL);
        const title = protractor_helper_1.ProtractorHelper.getPageTitle();
        expect(title).toContain('CLICKDOC');
        protractor_1.browser.sleep(2000);
        clickdoc_home_page_1.ClickdocHomepage.btnCookiesAkzep.click();
        protractor_1.browser.sleep(3000);
    });
    it('TestCase1: Check areas of option and result in the search page:', function () {
        clickdoc_home_page_1.ClickdocHomepage.suchseite.click();
        protractor_1.browser.sleep(1000);
        expect(clickdoc_search_page_1.ClickdocSearchpage.areaOption.getLocation()).toEqual(jasmine.objectContaining({
            x: 350.5,
            y: 120
        }));
        expect(clickdoc_search_page_1.ClickdocSearchpage.areaResult.getLocation()).toEqual(jasmine.objectContaining({
            x: 651,
            y: 120
        }));
    });
    it('TestCase2: Option elements are present:', function () {
        clickdoc_search_page_1.ClickdocSearchpage.inputFachbereich.isDisplayed();
        clickdoc_search_page_1.ClickdocSearchpage.inputLokation.isDisplayed();
        clickdoc_search_page_1.ClickdocSearchpage.checkboxOnlineTermin.isDisplayed();
        clickdoc_search_page_1.ClickdocSearchpage.checkboxVideoSprechstunde.isDisplayed();
        clickdoc_search_page_1.ClickdocSearchpage.checkboxBarrierefreiheit.isDisplayed();
        clickdoc_search_page_1.ClickdocSearchpage.btnSuchen.isDisplayed();
        expect(clickdoc_search_page_1.ClickdocSearchpage.btnSuchen.getText()).toEqual("SUCHEN");
    });
    it('TestCase3: Sorting-Sections are present', function () {
        clickdoc_search_page_1.ClickdocSearchpage.radiobtnBesteErgebnisse.isPresent();
        clickdoc_search_page_1.ClickdocSearchpage.radiobtnAlphabetisch.isPresent();
        clickdoc_search_page_1.ClickdocSearchpage.radiobtnEntfernung.isPresent();
        clickdoc_search_page_1.ClickdocSearchpage.radiobtnEnfernungSlider.isPresent();
        expect(clickdoc_search_page_1.ClickdocSearchpage.radiobtnBesteErgebnisseLabel.getText()).toEqual("Beste Ergebnisse");
    });
    it('TestCase4: Check initial message result area', function () {
        expect(clickdoc_search_page_1.ClickdocSearchpage.initialMessageResultArea.getText()).toContain("AUF DER LINKEN SEITE KANNST DU DIE ARZTSUCHE STARTEN.");
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpY2tkb2Nfc2VhcmNoLXBhcnQxX3NwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcGVjcy9jbGlja2RvY19zZWFyY2gtcGFydDFfc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDJDQUE2RDtBQUU3RCw0REFBNEY7QUFDNUYsb0VBQWdFO0FBQ2hFLDBFQUFxRTtBQUVyRSw4RUFBeUU7QUFFekUsUUFBUSxDQUFDLHdCQUF3QixFQUFFO0lBRS9CLEVBQUUsQ0FBQyxXQUFXLEVBQUU7UUFDWixvQkFBTyxDQUFDLEdBQUcsQ0FBQyxzQkFBUSxDQUFDLENBQUM7UUFDdEIsTUFBTSxLQUFLLEdBQUcsb0NBQWdCLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDOUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNwQyxvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNwQixxQ0FBZ0IsQ0FBQyxlQUFlLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDekMsb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDeEIsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsaUVBQWlFLEVBQUU7UUFFbEUscUNBQWdCLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ25DLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3BCLE1BQU0sQ0FBQyx5Q0FBa0IsQ0FBQyxVQUFVLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDO1lBQ2pGLENBQUMsRUFBRSxLQUFLO1lBQ1IsQ0FBQyxFQUFFLEdBQUc7U0FDVCxDQUFDLENBQUMsQ0FBQztRQUVKLE1BQU0sQ0FBQyx5Q0FBa0IsQ0FBQyxVQUFVLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDO1lBQ2pGLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7U0FDVCxDQUFDLENBQUMsQ0FBQztJQUVSLENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLHlDQUF5QyxFQUFFO1FBRTFDLHlDQUFrQixDQUFDLGdCQUFnQixDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ2xELHlDQUFrQixDQUFDLGFBQWEsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUMvQyx5Q0FBa0IsQ0FBQyxvQkFBb0IsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUN0RCx5Q0FBa0IsQ0FBQyx5QkFBeUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUMzRCx5Q0FBa0IsQ0FBQyx3QkFBd0IsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUMxRCx5Q0FBa0IsQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDM0MsTUFBTSxDQUFDLHlDQUFrQixDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUVyRSxDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyx5Q0FBeUMsRUFBRTtRQUUxQyx5Q0FBa0IsQ0FBQyx1QkFBdUIsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUN2RCx5Q0FBa0IsQ0FBQyxvQkFBb0IsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNwRCx5Q0FBa0IsQ0FBQyxrQkFBa0IsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNsRCx5Q0FBa0IsQ0FBQyx1QkFBdUIsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUN2RCxNQUFNLENBQUMseUNBQWtCLENBQUMsNEJBQTRCLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsa0JBQWtCLENBQUMsQ0FBQztJQUNsRyxDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBRSw4Q0FBOEMsRUFBRTtRQUVoRCxNQUFNLENBQUMseUNBQWtCLENBQUMsd0JBQXdCLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsdURBQXVELENBQUMsQ0FBQztJQUNySSxDQUFDLENBQUMsQ0FBQztBQUNQLENBQUMsQ0FBQyxDQUFDIn0=