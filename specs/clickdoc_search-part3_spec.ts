import { browser } from "protractor";
import { BASE_URL } from "../environment/environment";
import { ClickdocHomepage } from "../pageObjects/clickdoc_home_page";
import { ClickdocSearchpage } from "../pageObjects/clickdoc_search_page";
var helpers = require('protractor-helpers');

describe('Clickdoc_SearchPage-Part3:', () => {

    it('Call the browser again:', async () => {
        await browser.get(BASE_URL);
    });

    it('Go to the search page:', async () => {
        // await  helpers.waitForElement(ClickdocHomepage.suchseite, 10000);
        await browser.sleep(5000);
        await ClickdocHomepage.iconSuchseiteKlicken();
        await helpers.waitForElement(ClickdocSearchpage.inputName, 10000);
        await ClickdocSearchpage.inputName.clear();
    });

    it('Specifies a location:', async () => {

        await browser.logger.info("Enter location and check the suggestions:");
        await browser.actions().mouseMove(ClickdocSearchpage.inputLokation).click().perform();
        await helpers.waitForElement(ClickdocSearchpage.inputLokation, 10000);
        await ClickdocSearchpage.inputLokationEingeben("56567");
        // browser.sleep(2000);
        //Methode Click wird hier gestrichen, weil bei der Notation die Formuliereung "$" verwendet wurde.
        await helpers.waitForElement(ClickdocSearchpage.inputLokationFirsSuggestion, 10000);
        await ClickdocSearchpage.inputLokationFirsSuggestion.click();
    });

    it('Activate Alphabetic Sorting:', async () => {
        await helpers.waitForElement(ClickdocSearchpage.radiobtnAlphabetisch, 10000);
        await ClickdocSearchpage.radiobtnAlphabetischAktivieren();
    });

    it('Button Search Click:', async () => {
        // browser.sleep(3000);
        await helpers.waitForElement(ClickdocSearchpage.btnSuchen, 10000);
        await ClickdocSearchpage.btnSuchenKlicken();

    });

    it('TestCase17: Alphabetical-Sort-Option', async () => {
        await browser.logger.info("TestCase17: Alphabetical-Sort-Option");
        //checkbox clean
        await helpers.waitForElement(ClickdocSearchpage.nameAA, 10000);
        await ClickdocSearchpage.nameAA.getText().then(function (titel: any) {
            expect(titel).toContain("A Aa");
        });
    });

});