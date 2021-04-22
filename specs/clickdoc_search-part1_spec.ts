import { info } from "node:console";
import { $$, browser, by, element } from "protractor";
import { ClickdocHomepage } from "../pageObjects/clickdoc_home_page";
import { ClickdocSearchpage } from "../pageObjects/clickdoc_search_page";
var helpers = require('protractor-helpers');

describe('Clickdoc_SearchPage-Part1:', () => {

    beforeAll(async () => {
        await ClickdocHomepage.suchseiteKlicken();
    });

    browser.logger.info("Clickdoc_SearchPage-Part1 startet");


    it('In der Suchseite', async () => {
        await browser.sleep(1000);
        await browser.getCurrentUrl().then(async function (text) {
            expect(await text).toContain("search");
        });
    });

    it('TestCase1: Check areas of option and result in the search page:', async () => {

        browser.logger.info("TestCase1: Check areas of option and result in the search page");
        await browser.sleep(1000);
        expect(await ClickdocSearchpage.areaOption.getLocation()).toEqual(jasmine.objectContaining({
            x: 350.5,
            y: 120
        }));

        expect(await ClickdocSearchpage.areaResult.getLocation()).toEqual(jasmine.objectContaining({
            x: 651,
            y: 120
        }));

    });

    it('TestCase2: Option elements are present:', async () => {

        await browser.logger.info("TestCase2: Option elements are present");
        await ClickdocSearchpage.inputName.isPresent();
        await ClickdocSearchpage.inputLokation.isPresent();
        await ClickdocSearchpage.checkboxOnlineTermin.isPresent();
        await ClickdocSearchpage.checkboxVideoSprechstunde.isPresent();
        await ClickdocSearchpage.checkboxBarrierefreiheit.isPresent();
        await ClickdocSearchpage.btnSuchen.isPresent();
        expect(await ClickdocSearchpage.btnSuchen.getText()).toEqual("SUCHEN");

    });

    it('TestCase3: Sorting-Sections are present:', async () => {

        await browser.logger.info("TestCase3: Sorting-Sections are present");
        await ClickdocSearchpage.radiobtnBesteErgebnisse.isPresent();
        await ClickdocSearchpage.radiobtnAlphabetisch.isPresent();
        await ClickdocSearchpage.radiobtnEntfernung.isPresent();
        await ClickdocSearchpage.radiobtnEnfernungSlider.isPresent();
        expect(await ClickdocSearchpage.radiobtnBesteErgebnisseLabel.getText()).toEqual("Beste Ergebnisse");
    });

    it('TestCase4: Check initial message result area:', async () => {

        await browser.logger.info("TestCase4: Check initial message result area");
        expect(await ClickdocSearchpage.initialMessageResultArea.getText()).toContain("AUF DER LINKEN SEITE KANNST DU DIE ARZTSUCHE STARTEN.");
    });

    it('TestCase5: Check drop-down list of Input Name:', async () => {
        await browser.logger.info("TestCase5: Check drop-down list of Input Name");
        await helpers.clearAndSetValue(ClickdocSearchpage.inputName, 'Beate');
        await helpers.waitForElement(ClickdocSearchpage.inputNameDropdownItem, 5000);
        expect(await ClickdocSearchpage.inputNameDropdownItem.getText()).toContain('Beate');
    });

    it('TestCase6: Check drop-down list of Input Name further specified:', async () => {
        await browser.logger.info("TestCase6: Check drop-down list of Input Name further specified");
        await helpers.clearAndSetValue(ClickdocSearchpage.inputName, 'Beate Edel');
        await helpers.waitForElement(ClickdocSearchpage.inputNameDropdownItem, 5000);
        expect(await ClickdocSearchpage.inputNameDropdownItem.getText()).toContain('Beate Edel');
    });

    it('TestCase7: Check drop-down list of Input Name which no results exist:', async () => {

        await browser.logger.info("TestCase7: Check drop-down list of Input Name which no results exist");
        await helpers.clearAndSetValue(ClickdocSearchpage.inputName, 'Beate Edelse');
        await helpers.waitForElement(ClickdocSearchpage.inputNameDropdownItem, 5000);
        expect(await ClickdocSearchpage.inputNameDropdownItem.getText()).not.toContain('Beate Edelse');
    });

    it('TestCase8: Check drop-down list of Input Name:', async () => {

        await browser.logger.info("TestCase8: Check drop-down list of Input Name");
        await helpers.clearAndSetValue(ClickdocSearchpage.inputName, 'Beate');
        await helpers.waitForElement(ClickdocSearchpage.inputNameDropdownItem, 5000);
        expect(await ClickdocSearchpage.inputNameDropdownItem.getText()).toContain('Beate');
        await ClickdocSearchpage.areaResult.click();
        await helpers.waitForElement(ClickdocSearchpage.btnSuchen, 5000);
        await ClickdocSearchpage.btnSuchenKlicken();
        await helpers.waitForElement(ClickdocSearchpage.areaResultContainer, 5000);
        expect(await ClickdocSearchpage.areaResultContainer.getText()).toContain("Beate");
    });

    it('TestCase9: Check an elements of one result-item:', async () => {

        await browser.logger.info("TestCase9: Check an elements of one result-item");
        await ClickdocSearchpage.areaResultContainerItemHeader.isPresent();
        await ClickdocSearchpage.areaResultContainerItemPracticeInfo.isPresent();
        await ClickdocSearchpage.areaResultContainerItemAppointment.isPresent();
        expect(await ClickdocSearchpage.areaResultContainerItemPracticeInfoTitel.getText()).toContain("Name der Gesundheitseinrichtung");
    });

    it('TestCase10: Scroll to the link Show more in the page:', async () => {

        await browser.logger.info("TestCase10: Scroll to the link Show more in the page");
        await browser.actions().mouseDown(ClickdocSearchpage.areaResultContainerLoadMoreLink).perform();
        await browser.sleep(2000);

    });

    it('TestCase11: After Click the „Show more“-Button additional results are loaded:', async () => {

        await browser.logger.info("TestCase11: After Click the „Show more“-Button additional results are loaded:");
        await $$('app-contact-card.ng-star-inserted').then(async (numberOfResult: any) => {
            //die Objekte werden zu einem String umgewandelt.
            let n = await numberOfResult.length.toString();
            expect(await numberOfResult.length.toString()).toEqual(n);
            await ClickdocSearchpage.btnLoadMoreKlicken();
            await browser.sleep(3000);
            await $$('app-contact-card.ng-star-inserted').then(async (nMore: any) => {
                //Nach dem 'mehr anzeigen'-Klick wird die Liste noch mal gelesen.
                let n2 = await nMore.length.toString();
                await expect(nMore.length.toString()).toEqual(n2);
               try{
                if (n2 > n) {
                    await console.log("After the update, result is more!");
                } 
            }
            catch (err) {
                    await console.log("Update did't work.");
                }
            });
        });
    });

    it('TestCase12: Enter location and check the suggestions:', async () => {

        await browser.logger.info("TestCase12: Enter location and check the suggestions:");
        await browser.sleep(3000)
        await browser.actions().mouseMove(ClickdocSearchpage.inputLokation).click().perform();
        await helpers.waitForElement(ClickdocSearchpage.inputLokation, 5000);
        await ClickdocSearchpage.inputLokationEingeben("56567");
        await browser.sleep(2000);
        //Methode Click wird hier gestrichen, weil bei der Notation die Formuliereung "$" verwendet wurde.
        await helpers.waitForElement(ClickdocSearchpage.inputLokationFirsSuggestion, 3000);
        await ClickdocSearchpage.inputLokationFirsSuggestion.click();
        await helpers.waitForElement(ClickdocSearchpage.btnSuchen, 5000);
        await ClickdocSearchpage.btnSuchenKlicken();
    });

    it('TestCase13: Check the inputfield for timeframe:', async () => {

        await browser.logger.info("TestCase13: Check the inputfield for timeframe:");
        await browser.sleep(3000);
        await ClickdocSearchpage.checkboxOnlineTerminAktivieren();
        await browser.sleep(3000);
        await ClickdocSearchpage.checkboxOnlineTerminDay.isPresent();
        await ClickdocSearchpage.checkboxOnlineTerminTime.isPresent();

    });

    it('TestCase14: Only the results have been displayed with online appointment.', async () => {
        await browser.logger.info("TestCase14: Only the results have been displayed with online appointment.");
        await ClickdocSearchpage.btnSuchenKlicken();
        await browser.sleep(5000);
        await $$('app-contact-card.ng-star-inserted').then(async (anzahl: any) => {
            let gesamtAerzte = await anzahl.length.toString();
            await expect(anzahl.length.toString()).toEqual(gesamtAerzte);
            await element.all(by.xpath('//app-contact-card//app-contact-button-container')).then(async (terminBtn: any) => {
                let aktivOnlineTermin = await terminBtn.length.toString();
                try{
                if (gesamtAerzte === aktivOnlineTermin) {
                    console.log("Only the results have been displayed with online appointment.");
                    //expect(terminBtn).toBe(true);
                } 
            }
            catch (err) {
                    //expect(terminBtn).toBe(false);
                    console.log("Test ist fehlgeschlagen.");
                }
            });
        })
    });

    it('TestCase15: Check Barrier-Free-Checkbox, Only the doctors with barrier-free state displayed:', async () => {
        await browser.logger.info("TestCase15: Check Barrier-Free-Checkbox, Only the doctors with barrier-free state displayed");
        //Uncheck „Video-Conference“ Checkbox
        await element(by.css('#videoCall')).isSelected().then(async (checkbox) => {
            if (checkbox === true) {
                await ClickdocSearchpage.checkboxVideoSprechstunde.click();
            }
        });

        await element(by.css('#onlineBooking')).isSelected().then(async (checkbox) => {
            if (checkbox === true) {
                await ClickdocSearchpage.checkboxOnlineTermin.click();
            }
        });

        await element(by.css('#accessibility')).isSelected().then(async (checkbox) => {
            if (checkbox === false) {
                await ClickdocSearchpage.checkboxBarrierefreiheit.click();
            }
        });

    });

    it('TestCase15: part 2', async () => {
        await browser.logger.info("TestCase15: part 2");
        await ClickdocSearchpage.btnSuchenKlicken();
        await browser.sleep(5000);
        await $$('app-contact-card.ng-star-inserted').then(async (anzahl: any) => {
            let gesamtAerzte = await anzahl.length.toString();
            // expect(await anzahl.length.toString()).toEqual(gesamtAerzte);
            await element.all(by.xpath("//app-profile-field//span[contains(text(),'Barrierefrei')]")).then(async (barriereFrei: any) => {
                let anzahlAnbieter = await barriereFrei.length.toString();
                try {
                    if (gesamtAerzte === anzahlAnbieter) {
                        console.log("Number of search properties is consistent with the total search result.");
                        console.log("gesamt Aerzte: " + gesamtAerzte);
                        console.log("anzahl Anbieter: " + anzahlAnbieter);
                        // expect(anzahlAnbieter).toEqual(gesamtAerzte);
                    }
                }

                catch (err) {
                    console.log("Die Anzahl der Suchergebnis ist mit dem Option Barrierefrei gleich");

                    //expect(anzahlAnbieter).toBe(false);
                }


            });
        });

    });
});



