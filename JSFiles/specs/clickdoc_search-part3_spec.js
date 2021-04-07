"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const clickdoc_search_page_1 = require("../pageObjects/clickdoc_search_page");
var helpers = require('protractor-helpers');
describe('Clickdoc_SearchPage-Part3:', function () {
    it('TestCase17: Vorbereitung 0', function () {
        clickdoc_search_page_1.ClickdocSearchpage.inputName.clear();
    });
    it('TestCase17: Vorbereitung 1', function () {
        protractor_1.element(protractor_1.by.css('#videoCall')).isSelected().then(function (checkbox) {
            if (checkbox === true) {
                clickdoc_search_page_1.ClickdocSearchpage.checkboxVideoSprechstunde.click();
            }
        });
    });
    it('TestCase17: Vorbereitung 2', function () {
        helpers.waitForElement(clickdoc_search_page_1.ClickdocSearchpage.radiobtnAlphabetisch, 5000);
        clickdoc_search_page_1.ClickdocSearchpage.radiobtnAlphabetisch.click();
    });
    it('TestCase17: Vorbereitung 3', function () {
        clickdoc_search_page_1.ClickdocSearchpage.btnSuchen.click();
        protractor_1.browser.refresh();
        protractor_1.browser.sleep(3000);
    });
    it('TestCase17: Alphabetical-Sort-Option', function () {
        protractor_1.browser.logger.info("TestCase17: Alphabetical-Sort-Option");
        //checkbox clean
        helpers.waitForElement(clickdoc_search_page_1.ClickdocSearchpage.nameAA, 10000);
        protractor_1.browser.sleep(5000);
        clickdoc_search_page_1.ClickdocSearchpage.nameAA.getText().then(function (titel) {
            expect(titel).toContain("A Aa");
        });
        protractor_1.browser.sleep(3000);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpY2tkb2Nfc2VhcmNoLXBhcnQzX3NwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcGVjcy9jbGlja2RvY19zZWFyY2gtcGFydDNfc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDJDQUErRTtBQUMvRSw4RUFBeUU7QUFDekUsSUFBSSxPQUFPLEdBQUcsT0FBTyxDQUFDLG9CQUFvQixDQUFDLENBQUM7QUFFNUMsUUFBUSxDQUFDLDRCQUE0QixFQUFFO0lBRW5DLEVBQUUsQ0FBQyw0QkFBNEIsRUFBRTtRQUM3Qix5Q0FBa0IsQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDekMsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsNEJBQTRCLEVBQUU7UUFDN0Isb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsVUFBVSxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVMsUUFBUTtZQUM3RCxJQUFHLFFBQVEsS0FBRyxJQUFJLEVBQUM7Z0JBQ2YseUNBQWtCLENBQUMseUJBQXlCLENBQUMsS0FBSyxFQUFFLENBQUM7YUFDeEQ7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUVQLENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLDRCQUE0QixFQUFFO1FBQzdCLE9BQU8sQ0FBQyxjQUFjLENBQUMseUNBQWtCLENBQUMsb0JBQW9CLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDdEUseUNBQWtCLENBQUMsb0JBQW9CLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDcEQsQ0FBQyxDQUFDLENBQUM7SUFHSCxFQUFFLENBQUMsNEJBQTRCLEVBQUU7UUFDN0IseUNBQWtCLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3JDLG9CQUFPLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDbEIsb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDeEIsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsc0NBQXNDLEVBQUU7UUFDdkMsb0JBQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLHNDQUFzQyxDQUFDLENBQUM7UUFDNUQsZ0JBQWdCO1FBQ2hCLE9BQU8sQ0FBQyxjQUFjLENBQUMseUNBQWtCLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ3pELG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3BCLHlDQUFrQixDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBUyxLQUFVO1lBQ3hELE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDcEMsQ0FBQyxDQUFDLENBQUM7UUFDSCxvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN4QixDQUFDLENBQUMsQ0FBQztBQUVQLENBQUMsQ0FBQyxDQUFDIn0=