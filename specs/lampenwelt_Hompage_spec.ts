import { browser } from "protractor";
import { LampenweltHomepage } from "../pageObjects/LampenweltHomepage";

// The jasmine typings are brought in via DefinitelyTyped ambient typings.
describe('lampenwelt homepage testautomatisierung', function(){

  browser.waitForAngularEnabled(false);
  var lampenweltHomepage = new LampenweltHomepage();

  beforeEach(function () {
  });

  it('Seite aufrufen', function(){
    browser.manage().window().maximize();
    lampenweltHomepage.urlAufruf();
  } );

  it('Erste Navigationselement klicken:', function(){
    
    lampenweltHomepage.nav1.click();
    let nav1text = lampenweltHomepage.nav1.getText();
    console.log("das ist gettext " + nav1text);
  }); 

  /*it('Kapiteltitel pruefen', function () {
    const kati = lampenweltHomepage.kategorieTitel.getText();
    browser.sleep(3000);
    console.log(kati);

  });*/


  afterEach(function(){
    console.log("Test ist abgeschlossen!");
   
  });

});