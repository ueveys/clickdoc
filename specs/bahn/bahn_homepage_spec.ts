import { browser } from "protractor";
import { BAHN_URL } from "../../environment/environment";
import { BahnHomepage } from "../../pageObjects/bahn/bahn_homepage";
var helpers = require('protractor-helpers');

describe('Clickdoc_Login-Part1:', async () => {
    
    beforeAll(async () => {
        await browser.logger.info("Clickdoc_Login-Part1 startet:");
        await browser.get(BAHN_URL);
        //await helpers.waitForElement(ClickdocHomepage.btnCookiesAkzep, 10000);
    });

    beforeEach(async () => {
       
    });

    afterEach(async () => {
       
    });

    it('TestCase1: Check all fields in popup login window: ', async () => {
     
        await BahnHomepage.inputFromSendkeys("Frankfurt");
        await browser.sleep(1000);
        await BahnHomepage.inputToSendkeys("Bingöl");
        await browser.sleep(1000);
        await BahnHomepage.inputDaySendkeys("12.12.2021");
        await browser.sleep(5000);
        await BahnHomepage.inputTimeSendkeys("13:00");
        //await helpers.clearAndSetValue(BahnHomepage.inputTime, "12:00");
        //await BahnHomepage.inputTimeSendkeys("12:00");
        await browser.sleep(5000);

    });   

});



