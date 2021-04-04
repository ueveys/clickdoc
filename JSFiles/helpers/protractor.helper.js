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
exports.ProtractorHelper = void 0;
const protractor_1 = require("protractor");
class ProtractorHelper {
    static getPageUrl() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield protractor_1.browser.getCurrentUrl();
        });
    }
    static getPageTitle() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield protractor_1.browser.getTitle();
        });
    }
    static setDropDownValueTo(selector, name) {
        return __awaiter(this, void 0, void 0, function* () {
            const EC = protractor_1.protractor.ExpectedConditions;
            const desiredOption = protractor_1.element(protractor_1.by.cssContainingText('mat-option', name));
            yield protractor_1.browser.wait(EC.elementToBeClickable(selector), 5000, 'Selector is not clickable');
            yield selector.click();
            yield protractor_1.browser.executeScript('arguments[0].scrollIntoView(true)', desiredOption);
            yield desiredOption.click();
        });
    }
    static fillTextAreaTo(textarea, value) {
        return __awaiter(this, void 0, void 0, function* () {
            yield textarea.clear();
            yield textarea.sendKeys(value);
        });
    }
    static isItemPresentInTable(name) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield protractor_1.$$(`[data-qa*="${name}"]`).count();
        });
    }
}
exports.ProtractorHelper = ProtractorHelper;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvdHJhY3Rvci5oZWxwZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9oZWxwZXJzL3Byb3RyYWN0b3IuaGVscGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLDJDQUFnRztBQUdoRyxNQUFhLGdCQUFnQjtJQUV6QixNQUFNLENBQU8sVUFBVTs7WUFDbkIsT0FBTyxNQUFNLG9CQUFPLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDekMsQ0FBQztLQUFBO0lBRUQsTUFBTSxDQUFPLFlBQVk7O1lBQ3JCLE9BQU8sTUFBTSxvQkFBTyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ3BDLENBQUM7S0FBQTtJQUVELE1BQU0sQ0FBTyxrQkFBa0IsQ0FBQyxRQUF1QixFQUFFLElBQVk7O1lBQ2pFLE1BQU0sRUFBRSxHQUFHLHVCQUFVLENBQUMsa0JBQWtCLENBQUM7WUFDekMsTUFBTSxhQUFhLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsaUJBQWlCLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7WUFFeEUsTUFBTSxvQkFBTyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsb0JBQW9CLENBQUMsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLDJCQUEyQixDQUFDLENBQUM7WUFDekYsTUFBTSxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDdkIsTUFBTSxvQkFBTyxDQUFDLGFBQWEsQ0FBQyxtQ0FBbUMsRUFBRSxhQUFhLENBQUMsQ0FBQztZQUNoRixNQUFNLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNoQyxDQUFDO0tBQUE7SUFFRCxNQUFNLENBQU8sY0FBYyxDQUFDLFFBQW9CLEVBQUUsS0FBYTs7WUFDM0QsTUFBTSxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDdkIsTUFBTSxRQUFRLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ25DLENBQUM7S0FBQTtJQUVELE1BQU0sQ0FBTyxvQkFBb0IsQ0FBQyxJQUFZOztZQUMxQyxPQUFPLE1BQU0sZUFBRSxDQUFDLGNBQWMsSUFBSSxJQUFJLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNwRCxDQUFDO0tBQUE7Q0FFSjtBQTdCRCw0Q0E2QkMifQ==