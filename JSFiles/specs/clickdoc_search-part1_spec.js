"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const clickdoc_home_page_1 = require("../pageObjects/clickdoc_home_page");
const clickdoc_search_page_1 = require("../pageObjects/clickdoc_search_page");
describe('Clickdoc_SearchPage-Part1:', function () {
    it('Call URL:', function () {
        //ClickdocHomepage.webseiteStarten();
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
        clickdoc_search_page_1.ClickdocSearchpage.inputName.isPresent();
        clickdoc_search_page_1.ClickdocSearchpage.inputLokation.isPresent();
        clickdoc_search_page_1.ClickdocSearchpage.checkboxOnlineTermin.isPresent();
        clickdoc_search_page_1.ClickdocSearchpage.checkboxVideoSprechstunde.isPresent();
        clickdoc_search_page_1.ClickdocSearchpage.checkboxBarrierefreiheit.isPresent();
        clickdoc_search_page_1.ClickdocSearchpage.btnSuchen.isPresent();
        expect(clickdoc_search_page_1.ClickdocSearchpage.btnSuchen.getText()).toEqual("SUCHEN");
    });
    it('TestCase3: Sorting-Sections are present:', function () {
        clickdoc_search_page_1.ClickdocSearchpage.radiobtnBesteErgebnisse.isPresent();
        clickdoc_search_page_1.ClickdocSearchpage.radiobtnAlphabetisch.isPresent();
        clickdoc_search_page_1.ClickdocSearchpage.radiobtnEntfernung.isPresent();
        clickdoc_search_page_1.ClickdocSearchpage.radiobtnEnfernungSlider.isPresent();
        expect(clickdoc_search_page_1.ClickdocSearchpage.radiobtnBesteErgebnisseLabel.getText()).toEqual("Beste Ergebnisse");
    });
    it('TestCase4: Check initial message result area:', function () {
        expect(clickdoc_search_page_1.ClickdocSearchpage.initialMessageResultArea.getText()).toContain("AUF DER LINKEN SEITE KANNST DU DIE ARZTSUCHE STARTEN.");
    });
    it('TestCase5: Check drop-down list of Input Name:', function () {
        clickdoc_search_page_1.ClickdocSearchpage.dropdownItemValidate("Beate");
    });
    it('TestCase6: Check drop-down list of Input Name further specified:', function () {
        clickdoc_search_page_1.ClickdocSearchpage.dropdownItemValidate("Beate Edel");
    });
    it('TestCase7: Check drop-down list of Input Name which no results exist:', function () {
        clickdoc_search_page_1.ClickdocSearchpage.dropdownItemDisapp("Beate Edelse");
    });
    it('TestCase8: Check drop-down list of Input Name:', function () {
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
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpY2tkb2Nfc2VhcmNoLXBhcnQxX3NwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcGVjcy9jbGlja2RvY19zZWFyY2gtcGFydDFfc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDJDQUE2RDtBQUk3RCwwRUFBcUU7QUFFckUsOEVBQXlFO0FBRXpFLFFBQVEsQ0FBQyw0QkFBNEIsRUFBRTtJQUVuQyxFQUFFLENBQUMsV0FBVyxFQUFFO1FBQ2IscUNBQXFDO0lBQ3hDLENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLGlFQUFpRSxFQUFFO1FBRWxFLHFDQUFnQixDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNuQyxvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNwQixNQUFNLENBQUMseUNBQWtCLENBQUMsVUFBVSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQztZQUNqRixDQUFDLEVBQUUsS0FBSztZQUNSLENBQUMsRUFBRSxHQUFHO1NBQ1QsQ0FBQyxDQUFDLENBQUM7UUFFSixNQUFNLENBQUMseUNBQWtCLENBQUMsVUFBVSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQztZQUNqRixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1NBQ1QsQ0FBQyxDQUFDLENBQUM7SUFFUixDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyx5Q0FBeUMsRUFBRTtRQUUxQyx5Q0FBa0IsQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDekMseUNBQWtCLENBQUMsYUFBYSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQzdDLHlDQUFrQixDQUFDLG9CQUFvQixDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ3BELHlDQUFrQixDQUFDLHlCQUF5QixDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ3pELHlDQUFrQixDQUFDLHdCQUF3QixDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ3hELHlDQUFrQixDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUN6QyxNQUFNLENBQUMseUNBQWtCLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBRXJFLENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLDBDQUEwQyxFQUFFO1FBRTNDLHlDQUFrQixDQUFDLHVCQUF1QixDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ3ZELHlDQUFrQixDQUFDLG9CQUFvQixDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ3BELHlDQUFrQixDQUFDLGtCQUFrQixDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ2xELHlDQUFrQixDQUFDLHVCQUF1QixDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ3ZELE1BQU0sQ0FBQyx5Q0FBa0IsQ0FBQyw0QkFBNEIsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0lBQ2xHLENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLCtDQUErQyxFQUFFO1FBRWhELE1BQU0sQ0FBQyx5Q0FBa0IsQ0FBQyx3QkFBd0IsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyx1REFBdUQsQ0FBQyxDQUFDO0lBQ3JJLENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLGdEQUFnRCxFQUFDO1FBQzdDLHlDQUFrQixDQUFDLG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3hELENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLGtFQUFrRSxFQUFDO1FBQ2xFLHlDQUFrQixDQUFDLG9CQUFvQixDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQzFELENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLHVFQUF1RSxFQUFDO1FBQ3ZFLHlDQUFrQixDQUFDLGtCQUFrQixDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQzFELENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLGdEQUFnRCxFQUFDO1FBQ2hELHlDQUFrQixDQUFDLG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2pELHlDQUFrQixDQUFDLFVBQVUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUN0QyxvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNwQix5Q0FBa0IsQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDckMsb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDcEIsTUFBTSxDQUFDLHlDQUFrQixDQUFDLG1CQUFtQixDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ2hGLENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLGtEQUFrRCxFQUFDO1FBRWxELHlDQUFrQixDQUFDLDZCQUE2QixDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQzdELHlDQUFrQixDQUFDLG1DQUFtQyxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ25FLHlDQUFrQixDQUFDLGtDQUFrQyxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ2xFLE1BQU0sQ0FBQyx5Q0FBa0IsQ0FBQyx3Q0FBd0MsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDO0lBQy9ILENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLHVEQUF1RCxFQUFFO1FBRXhELG9CQUFPLENBQUMsT0FBTyxFQUFFLENBQUMsU0FBUyxDQUFDLHlDQUFrQixDQUFDLCtCQUErQixDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDMUYsb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7SUFFeEIsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDLENBQUMsQ0FBQyJ9