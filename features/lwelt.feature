Feature: Ich validier die Webseite vom clickdoc

Scenario: Webseite Addition testen

Given Ich geh auf "http://juliemr.github.io/protractor-demo/"
When Ich addiere zwei Zahlen "3" und "5"
Then Ergebnis wird angezeigt "8"

Scenario: Webseite Addition testen

Given Ich geh auf "http://juliemr.github.io/protractor-demo/"
When Ich addiere zwei Zahlen "2" und "7"
Then Ergebnis wird angezeigt "9"
