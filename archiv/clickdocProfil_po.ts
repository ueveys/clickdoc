import {browser, element, by, promise} from 'protractor';

export class CgmProfil {

    bereichGewicht = element(by.xpath("//div[@data-automation='Health value - Gewicht label']"));
    hinzufuegen = element(by.xpath("//span[@class='add-button-text']"));
    gewicht = element(by.xpath("//div[@class='cdk-overlay-container']//input[@data-automation='Weight creation - Value input']"));
    speichern = element(by.xpath("//button[@data-automation='Common mdo creation - Save button']"));

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


}