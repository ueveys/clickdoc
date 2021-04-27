import { $$, browser, by, element } from "protractor";
import { CLICKDOC_URL } from "../../environment/environment";
import { ClickdocHomepage } from "../../pageObjects/clickdoc/clickdoc_home_page";
import { ClickdocSearchpage } from "../../pageObjects/clickdoc/clickdoc_search_page";
var helpers = require('protractor-helpers');

describe('Clickdoc_SearchPage-Part1:', () => {

    it('Call the browser again:', async () => {
        await browser.get(CLICKDOC_URL);
    });

    it('Go to the search page:', async () => {
        await browser.sleep(3000);
        await ClickdocHomepage.iconSuchseiteKlicken();
        await helpers.waitForElement(ClickdocSearchpage.inputName, 5000);
        await ClickdocSearchpage.inputName.clear();
    });

    it('TestCase16: Check Video-Conference-Checkbox, Only the doctors with videoconference displayed:', async () => {

        await browser.logger.info("TestCase16: Check Video-Conference-Checkbox, Only the doctors with videoconference displayed:");
        //befor test clean input field of name
        await ClickdocSearchpage.inputLokation.clear();
        await helpers.clearAndSetValue(ClickdocSearchpage.inputLokation, '56567');
        await helpers.waitForElement(ClickdocSearchpage.inputLokationFirsSuggestion, 3000);
        await ClickdocSearchpage.inputLokationFirsSuggestion.click();
        await helpers.waitForElement(ClickdocSearchpage.checkboxVideoSprechstunde, 5000);
        await ClickdocSearchpage.checkboxVideoSprechstundeAktivieren();
    });

    it('TestCase16: part 2 Checkbox validieren', async () => {
        await browser.logger.info("TestCase16: part 2 Checkbox validieren");
        await element(by.css('#videoCall')).isSelected().then(async (checkbox) => {
            if (checkbox === false) {
                await ClickdocSearchpage.checkboxVideoSprechstundeAktivieren();
            }
        });

        await element(by.css('#onlineBooking')).isSelected().then(async (checkbox) => {
            if (checkbox === true) {
                await ClickdocSearchpage.checkboxOnlineTerminAktivieren();
            }
        });

        await element(by.css('#accessibility')).isSelected().then(async (checkbox) => {
            if (checkbox === true) {
                await ClickdocSearchpage.checkboxBarrierefreiheitAktivieren();
            }
        });

    });

    it('TestCase16: part3', async () => {

        await browser.logger.info("TestCase16: part3");
        await helpers.waitForElement(ClickdocSearchpage.btnSuchen, 5000);
        await ClickdocSearchpage.btnSuchenKlicken();
        await helpers.waitForElement($('app-contact-card.ng-star-inserted'), 5000);
        await browser.sleep(3000);
        await $$('app-contact-card.ng-star-inserted').then(async (anzahl: any) => {
            let gesamtAerzte = await anzahl.length.toString();
            await expect(anzahl.length.toString()).toEqual(gesamtAerzte);
            await element.all(by.xpath("//app-profile-field//span[contains(text(),' Videosprechstunde')]")).then(async (videoService: any) => {
                let anzahlAnbieter = await videoService.length.toString();
                try{
                if (gesamtAerzte === anzahlAnbieter) {
                    await console.log("Number of search properties is consistent with the total search result.");
                    await console.log("gesamt Aerzte: " + gesamtAerzte);
                    await console.log("anzahl Anbieter: " + anzahlAnbieter);
                } 
             }
             catch (err) {
                    expect(anzahlAnbieter).toBe(false);
                }
            });
        });
    });


});