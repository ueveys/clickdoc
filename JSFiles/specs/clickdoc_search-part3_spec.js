"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const environment_1 = require("../environment/environment");
const clickdoc_home_page_1 = require("../pageObjects/clickdoc_home_page");
const clickdoc_search_page_1 = require("../pageObjects/clickdoc_search_page");
var helpers = require('protractor-helpers');
describe('Clickdoc_SearchPage-Part3:', function () {
    it('Call the browser again:', function () {
        protractor_1.browser.get(environment_1.BASE_URL);
    });
    it('Go to the search page:', function () {
        protractor_1.browser.sleep(3000);
        clickdoc_home_page_1.ClickdocHomepage.suchseite.click();
        helpers.waitForElement(clickdoc_search_page_1.ClickdocSearchpage.inputName, 5000);
        clickdoc_search_page_1.ClickdocSearchpage.inputName.clear();
    });
    it('Specifies a location:', function () {
        protractor_1.browser.logger.info("TestCase12: Enter location and check the suggestions:");
        protractor_1.browser.actions().mouseMove(clickdoc_search_page_1.ClickdocSearchpage.inputLokation).click().perform();
        helpers.waitForElement(clickdoc_search_page_1.ClickdocSearchpage.inputLokation, 5000);
        clickdoc_search_page_1.ClickdocSearchpage.inputLokation.sendKeys("56567");
        protractor_1.browser.sleep(2000);
        //Methode Click wird hier gestrichen, weil bei der Notation die Formuliereung "$" verwendet wurde.
        helpers.waitForElement(clickdoc_search_page_1.ClickdocSearchpage.inputLokationFirsSuggestion, 3000);
        clickdoc_search_page_1.ClickdocSearchpage.inputLokationFirsSuggestion.click();
    });
    it('Activate Alphabetic Sorting:', function () {
        helpers.waitForElement(clickdoc_search_page_1.ClickdocSearchpage.radiobtnAlphabetisch, 5000);
        clickdoc_search_page_1.ClickdocSearchpage.radiobtnAlphabetisch.click();
    });
    it('Button Search Click:', function () {
        protractor_1.browser.sleep(3000);
        helpers.waitForElement(clickdoc_search_page_1.ClickdocSearchpage.btnSuchen, 5000);
        clickdoc_search_page_1.ClickdocSearchpage.btnSuchen.click();
    });
    it('TestCase17: Alphabetical-Sort-Option', function () {
        protractor_1.browser.logger.info("TestCase17: Alphabetical-Sort-Option");
        //checkbox clean
        helpers.waitForElement(clickdoc_search_page_1.ClickdocSearchpage.nameAA, 10000);
        clickdoc_search_page_1.ClickdocSearchpage.nameAA.getText().then(function (titel) {
            expect(titel).toContain("A Aa");
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpY2tkb2Nfc2VhcmNoLXBhcnQzX3NwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcGVjcy9jbGlja2RvY19zZWFyY2gtcGFydDNfc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDJDQUFxQztBQUNyQyw0REFBc0Q7QUFDdEQsMEVBQXFFO0FBQ3JFLDhFQUF5RTtBQUN6RSxJQUFJLE9BQU8sR0FBRyxPQUFPLENBQUMsb0JBQW9CLENBQUMsQ0FBQztBQUU1QyxRQUFRLENBQUMsNEJBQTRCLEVBQUU7SUFHbkMsRUFBRSxDQUFDLHlCQUF5QixFQUFDO1FBRXpCLG9CQUFPLENBQUMsR0FBRyxDQUFDLHNCQUFRLENBQUMsQ0FBQztJQUMxQixDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyx3QkFBd0IsRUFBRTtRQUN6QixvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNwQixxQ0FBZ0IsQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDbkMsT0FBTyxDQUFDLGNBQWMsQ0FBQyx5Q0FBa0IsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDM0QseUNBQWtCLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3pDLENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLHVCQUF1QixFQUFFO1FBRXhCLG9CQUFPLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyx1REFBdUQsQ0FBQyxDQUFDO1FBQzdFLG9CQUFPLENBQUMsT0FBTyxFQUFFLENBQUMsU0FBUyxDQUFDLHlDQUFrQixDQUFDLGFBQWEsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ2hGLE9BQU8sQ0FBQyxjQUFjLENBQUMseUNBQWtCLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQy9ELHlDQUFrQixDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDbkQsb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDcEIsa0dBQWtHO1FBQ2xHLE9BQU8sQ0FBQyxjQUFjLENBQUMseUNBQWtCLENBQUMsMkJBQTJCLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDN0UseUNBQWtCLENBQUMsMkJBQTJCLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDM0QsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsOEJBQThCLEVBQUU7UUFDL0IsT0FBTyxDQUFDLGNBQWMsQ0FBQyx5Q0FBa0IsQ0FBQyxvQkFBb0IsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN0RSx5Q0FBa0IsQ0FBQyxvQkFBb0IsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNwRCxDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyxzQkFBc0IsRUFBRTtRQUN2QixvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNwQixPQUFPLENBQUMsY0FBYyxDQUFDLHlDQUFrQixDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUMzRCx5Q0FBa0IsQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUM7SUFFekMsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsc0NBQXNDLEVBQUU7UUFDdkMsb0JBQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLHNDQUFzQyxDQUFDLENBQUM7UUFDNUQsZ0JBQWdCO1FBQ2hCLE9BQU8sQ0FBQyxjQUFjLENBQUMseUNBQWtCLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ3pELHlDQUFrQixDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBUyxLQUFVO1lBQ3hELE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDcEMsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDLENBQUMsQ0FBQztBQUVQLENBQUMsQ0FBQyxDQUFDIn0=