import { $, $$, browser, by, element, ElementFinder, protractor, WebElement } from 'protractor';
import { BASE_URL } from '../environment/environment';

export class ProtractorHelper {

    static async getPageUrl() {
        return await browser.getCurrentUrl();
    }

    static async getPageTitle() {
        return await browser.getTitle();
    }

    static async setDropDownValueTo(selector: ElementFinder, name: string) {
        const EC = protractor.ExpectedConditions;
        const desiredOption = element(by.cssContainingText('mat-option', name));

        await browser.wait(EC.elementToBeClickable(selector), 5000, 'Selector is not clickable');
        await selector.click();
        await browser.executeScript('arguments[0].scrollIntoView(true)', desiredOption);
        await desiredOption.click();
    }

    static async fillTextAreaTo(textarea: WebElement, value: string) {
        await textarea.clear();
        await textarea.sendKeys(value);
    }

    static async isItemPresentInTable(name: string) {
        return await $$(`[data-qa*="${name}"]`).count();
    }
 
}