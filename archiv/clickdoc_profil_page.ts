import {browser, element, by, promise} from 'protractor';

export class CgmProfil {

    bereichGewicht = element(by.xpath("//div[@data-automation='Health value - Gewicht label']"));
    hinzufuegen = element(by.xpath("//span[@class='add-button-text']"));
    gewicht = element(by.xpath("//div[@class='cdk-overlay-container']//input[@data-automation='Weight creation - Value input']"));
    speichern = element(by.xpath("//button[@data-automation='Common mdo creation - Save button']"));
    //gewichtSpeicherWert = element(by.xpath("//div[@class='health-entries-container']//div[@class='date-section-container ng-star-inserted' and position()=1]//div[@class='history-entry d-flex flex-column justify-content-center margin-left-right-16 history-entry-border-top ng-star-inserted']//div[@class='health-value-and-unit']//span[@class='value ng-star-inserted']"));



    bereichGewichtAuswaehlen(){
        this.bereichGewicht.click();
    }

    btnHinzufuegenKlicken(){
        this.hinzufuegen.click();
    }

    inputGewichtAngeben(zahl:string){
        this.gewicht.sendKeys(zahl);
    }

    eintragSpeichern(){
        this.speichern.click();
    }

    /*gewichtSpeicherWertLesen(){
        return this.gewichtSpeicherWert.getText();
    }*/

}