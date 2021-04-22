"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const environment_1 = require("../environment/environment");
const clickdoc_home_page_1 = require("../pageObjects/clickdoc_home_page");
const clickdoc_search_page_1 = require("../pageObjects/clickdoc_search_page");
var helpers = require('protractor-helpers');
describe('Clickdoc_SearchPage-Part3:', () => {
    it('Call the browser again:', () => __awaiter(void 0, void 0, void 0, function* () {
        yield protractor_1.browser.get(environment_1.BASE_URL);
    }));
    it('Go to the search page:', () => __awaiter(void 0, void 0, void 0, function* () {
        // await  helpers.waitForElement(ClickdocHomepage.suchseite, 10000);
        yield protractor_1.browser.sleep(5000);
        yield clickdoc_home_page_1.ClickdocHomepage.suchseiteKlicken();
        yield helpers.waitForElement(clickdoc_search_page_1.ClickdocSearchpage.inputName, 10000);
        yield clickdoc_search_page_1.ClickdocSearchpage.inputName.clear();
    }));
    it('Specifies a location:', () => __awaiter(void 0, void 0, void 0, function* () {
        yield protractor_1.browser.logger.info("Enter location and check the suggestions:");
        yield protractor_1.browser.actions().mouseMove(clickdoc_search_page_1.ClickdocSearchpage.inputLokation).click().perform();
        yield helpers.waitForElement(clickdoc_search_page_1.ClickdocSearchpage.inputLokation, 10000);
        yield clickdoc_search_page_1.ClickdocSearchpage.inputLokationEingeben("56567");
        // browser.sleep(2000);
        //Methode Click wird hier gestrichen, weil bei der Notation die Formuliereung "$" verwendet wurde.
        yield helpers.waitForElement(clickdoc_search_page_1.ClickdocSearchpage.inputLokationFirsSuggestion, 10000);
        yield clickdoc_search_page_1.ClickdocSearchpage.inputLokationFirsSuggestion.click();
    }));
    it('Activate Alphabetic Sorting:', () => __awaiter(void 0, void 0, void 0, function* () {
        yield helpers.waitForElement(clickdoc_search_page_1.ClickdocSearchpage.radiobtnAlphabetisch, 10000);
        yield clickdoc_search_page_1.ClickdocSearchpage.radiobtnAlphabetischAktivieren();
    }));
    it('Button Search Click:', () => __awaiter(void 0, void 0, void 0, function* () {
        // browser.sleep(3000);
        yield helpers.waitForElement(clickdoc_search_page_1.ClickdocSearchpage.btnSuchen, 10000);
        yield clickdoc_search_page_1.ClickdocSearchpage.btnSuchenKlicken();
    }));
    it('TestCase17: Alphabetical-Sort-Option', () => __awaiter(void 0, void 0, void 0, function* () {
        yield protractor_1.browser.logger.info("TestCase17: Alphabetical-Sort-Option");
        //checkbox clean
        yield helpers.waitForElement(clickdoc_search_page_1.ClickdocSearchpage.nameAA, 10000);
        yield clickdoc_search_page_1.ClickdocSearchpage.nameAA.getText().then(function (titel) {
            expect(titel).toContain("A Aa");
        });
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpY2tkb2Nfc2VhcmNoLXBhcnQzX3NwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcGVjcy9jbGlja2RvY19zZWFyY2gtcGFydDNfc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLDJDQUFxQztBQUNyQyw0REFBc0Q7QUFDdEQsMEVBQXFFO0FBQ3JFLDhFQUF5RTtBQUN6RSxJQUFJLE9BQU8sR0FBRyxPQUFPLENBQUMsb0JBQW9CLENBQUMsQ0FBQztBQUU1QyxRQUFRLENBQUMsNEJBQTRCLEVBQUUsR0FBRyxFQUFFO0lBRXhDLEVBQUUsQ0FBQyx5QkFBeUIsRUFBRSxHQUFTLEVBQUU7UUFDckMsTUFBTSxvQkFBTyxDQUFDLEdBQUcsQ0FBQyxzQkFBUSxDQUFDLENBQUM7SUFDaEMsQ0FBQyxDQUFBLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyx3QkFBd0IsRUFBRSxHQUFTLEVBQUU7UUFDcEMsb0VBQW9FO1FBQ3BFLE1BQU0sb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDMUIsTUFBTSxxQ0FBZ0IsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBQzFDLE1BQU0sT0FBTyxDQUFDLGNBQWMsQ0FBQyx5Q0FBa0IsQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDbEUsTUFBTSx5Q0FBa0IsQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDL0MsQ0FBQyxDQUFBLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyx1QkFBdUIsRUFBRSxHQUFTLEVBQUU7UUFFbkMsTUFBTSxvQkFBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsMkNBQTJDLENBQUMsQ0FBQztRQUN2RSxNQUFNLG9CQUFPLENBQUMsT0FBTyxFQUFFLENBQUMsU0FBUyxDQUFDLHlDQUFrQixDQUFDLGFBQWEsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ3RGLE1BQU0sT0FBTyxDQUFDLGNBQWMsQ0FBQyx5Q0FBa0IsQ0FBQyxhQUFhLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDdEUsTUFBTSx5Q0FBa0IsQ0FBQyxxQkFBcUIsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN4RCx1QkFBdUI7UUFDdkIsa0dBQWtHO1FBQ2xHLE1BQU0sT0FBTyxDQUFDLGNBQWMsQ0FBQyx5Q0FBa0IsQ0FBQywyQkFBMkIsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUNwRixNQUFNLHlDQUFrQixDQUFDLDJCQUEyQixDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2pFLENBQUMsQ0FBQSxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsOEJBQThCLEVBQUUsR0FBUyxFQUFFO1FBQzFDLE1BQU0sT0FBTyxDQUFDLGNBQWMsQ0FBQyx5Q0FBa0IsQ0FBQyxvQkFBb0IsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUM3RSxNQUFNLHlDQUFrQixDQUFDLDhCQUE4QixFQUFFLENBQUM7SUFDOUQsQ0FBQyxDQUFBLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyxzQkFBc0IsRUFBRSxHQUFTLEVBQUU7UUFDbEMsdUJBQXVCO1FBQ3ZCLE1BQU0sT0FBTyxDQUFDLGNBQWMsQ0FBQyx5Q0FBa0IsQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDbEUsTUFBTSx5Q0FBa0IsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0lBRWhELENBQUMsQ0FBQSxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsc0NBQXNDLEVBQUUsR0FBUyxFQUFFO1FBQ2xELE1BQU0sb0JBQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLHNDQUFzQyxDQUFDLENBQUM7UUFDbEUsZ0JBQWdCO1FBQ2hCLE1BQU0sT0FBTyxDQUFDLGNBQWMsQ0FBQyx5Q0FBa0IsQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDL0QsTUFBTSx5Q0FBa0IsQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsS0FBVTtZQUMvRCxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3BDLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUVQLENBQUMsQ0FBQyxDQUFDIn0=