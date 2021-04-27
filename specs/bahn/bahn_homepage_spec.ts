import { browser } from "protractor";
import { BAHN_URL } from "../../environment/environment";
import { BahnHomepage } from "../../pageObjects/bahn/bahn_homepage";
var helpers = require('protractor-helpers');

describe('Bahn Reiseauskunft', async () => {
    
    beforeAll(async () => {
        await browser.logger.info("Bahn Webseite aufgerufen:");
        await browser.get(BAHN_URL);
    });

    beforeEach(async () => {
       
    });

    afterEach(async () => {
       
    });

    it('TestCase1: Formular ausfüllen: ', async () => {
     
        await BahnHomepage.inputFromSendkeys("Frankfurt");
        await browser.sleep(1000);
        await BahnHomepage.inputToSendkeys("Bingöl");
        await browser.sleep(1000);
        await BahnHomepage.inputDaySendkeys("12.12.2021");
        await browser.sleep(5000);
        await BahnHomepage.inputTimeSendkeys("13:00");     
        await browser.sleep(5000);

    });   

});



