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
    
    // Klicken auf Navigationsbereich
    lampenweltHomepage.nav1.click();

    var nav1text = lampenweltHomepage.nav1.getText().then(function(textNavi){
      console.log("Navigationstitel ist "+ textNavi);
    });

    lampenweltHomepage.kateTitel.getText().then(function(kapitelText){
      console.log("Kategorietitel ist " + kapitelText);
      expect(lampenweltHomepage.nav1.getText()).toEqual(kapitelText);
    });

    
  }); 

  afterEach(function(){
    console.log("Test ist abgeschlossen!");
   
  });

});