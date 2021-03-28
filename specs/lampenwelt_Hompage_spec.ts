import { browser, protractor, ProtractorBrowser } from "protractor";
import { LampenweltHomepage } from "../pageObjects/LampenweltHomepage";

// The jasmine typings are brought in via DefinitelyTyped ambient typings.
describe('lampenwelt homepage', function(){
  browser.waitForAngularEnabled(false);
  let lampenweltHomepage = new LampenweltHomepage();
  beforeEach(function () {
    
   
  });

  it('Seite aufrufen', function(){
    browser.manage().window().maximize();
    lampenweltHomepage.urlAufruf();
  } );

  it('Erste Navigationselement klicken:', function(){
    
    lampenweltHomepage.nav1.click();
    let nav1text = lampenweltHomepage.nav1.getText();
    console.log(nav1text);
    //const kati = lampenweltHomepage.kategorieTitel.getText();
    //console.log(kati);
    
    //Screenshot nach dem Test erstellen
    /**/
  }); 
  
  it('Kapiteltitel pruefen', function(){
    const kati = lampenweltHomepage.kategorieTitel.getText();

  });


  afterEach(function(){
    console.log("Test ist abgeschlossen!");
   
  });

});