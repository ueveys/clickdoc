"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LampenweltHomepage = void 0;
const protractor_1 = require("protractor");
class LampenweltHomepage {
    constructor() {
        this.nav1 = protractor_1.element(protractor_1.by.xpath("//li[@class='level0 nav-2 parent' and position()=1]/*/span"));
        //aussenleuchten = browser.driver.findElement(by.xpath("//li[@class='level0 nav-2 parent' and position()=2]"));
        //smartHome = browser.driver.findElement(by.xpath("//li[@class='level0 nav-2 parent' and position()=3]"));
        this.kateTitel = protractor_1.element(protractor_1.by.xpath("//h1[@class='category-title__headline']"));
    }
    urlAufruf() {
        protractor_1.browser.get('https://www.lampenwelt.de/');
    }
}
exports.LampenweltHomepage = LampenweltHomepage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTGFtcGVud2VsdEhvbWVwYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vcGFnZU9iamVjdHMvTGFtcGVud2VsdEhvbWVwYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDJDQUFnRDtBQUVoRCxNQUFhLGtCQUFrQjtJQUEvQjtRQUNFLFNBQUksR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsNERBQTRELENBQUMsQ0FBQyxDQUFDO1FBQ3ZGLCtHQUErRztRQUMvRywwR0FBMEc7UUFFMUcsY0FBUyxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyx5Q0FBeUMsQ0FBQyxDQUFDLENBQUM7SUFNM0UsQ0FBQztJQUpDLFNBQVM7UUFDUCxvQkFBTyxDQUFDLEdBQUcsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO0lBQzVDLENBQUM7Q0FFRjtBQVhELGdEQVdDIn0=