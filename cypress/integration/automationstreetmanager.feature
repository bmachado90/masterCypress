Feature: Street Manager

Background:
Given I'm in the "Sign in" page

Scenario: C3637 - Subscriber Org user looking at Subscriber Org works (CM Customer)
  When I input "DuffyS" credentials and sign in
    Then I should be in the "TM" page
      And I should be signed in as "DuffyS"
    Then I type in the search box the location "FM05567169864"
      And I select "FM05567169864" from the dropdown list
      And the callout should open
      And the Responsibility for these works is "Hertfordshire County Council"
      And the callout body has info
    Then I type in the search box the location "MX04410171003"
      And I select "MX04410171003" from the dropdown list
      And the callout should open
      And the Responsibility for these works is "Affinity Water "
      And the callout body has info

Scenario: C3644 - Freemium Org user looking at Freemium Org works
  When I input "DuffyS" credentials and sign in
    Then I should be in the "TM" page
      And I should be signed in as "DuffyS"
    Then I type in the search box the location "KC003S000000002371"
      And I select "KC003S000000002371" from the dropdown list
      And the callout should open
      And the Responsibility for these works is "Oldham Metropolitan Borough Council"
      And the callout body has Orgs info

Scenario: C3651 - Open Data Org user looking at Utility / LA Open Data Org works
  When I input "DuffyS" credentials and sign in
    Then I should be in the "TM" page
      And I should be signed in as "DuffyS"
    Then I type in the search box the location "GM102S000000016105"
      And I select "GM102S000000016105" from the dropdown list
      And the callout should open
      And the Responsibility for these works is "Lancashire County Council"
      And the callout body has Lancashire info


Scenario: C3628 - Subscriber Org user looking at Subscriber Org works (non-CM Customer)
  When I input "DuffyS" credentials and sign in
    Then I should be in the "TM" page
      And I should be signed in as "DuffyS"
    Then I type in the search box the location "PJ011PSI3599"
      And I select "PJ011PSI3599" from the dropdown list
      And the callout should open
      And the Responsibility for these works is "West Sussex County Council"
      And the callout body has info
    Then I type in the search box the location "LP331S30008617"
      And I select "LP331S30008617" from the dropdown list
      And the callout should open
      And the Responsibility for these works is "Scottish and Southern Power Distribution"
      And the callout body has info

Scenario: C3624 - Freemium Org user looking at Freemium Org works
 When I input "DuffyS" credentials and sign in
    Then I should be in the "TM" page
      And I should be signed in as "DuffyS"
    Then I type in the search box the location "KC003S000000002367"
      And I select "KC003S000000002367" from the dropdown list
      And the callout should open
      And the Responsibility for these works is "Oldham Metropolitan Borough Council"
      And the callout body has Orgs info
    Then I type in the search box the location "AZ1191001161361"
      And I select "AZ1191001161361" from the dropdown list
      And the callout should open
      And the Responsibility for these works is "Cadent"
      And the callout body has info

  Scenario: C3620 - Open Data Org user looking at Utility Open Data Org works
   When I input "DuffyS" credentials and sign in
    Then I should be in the "TM" page
      And I should be signed in as "DuffyS"
    Then I type in the search box the location "HZ72100854193-1495740"
      And I select "HZ72100854193-1495740" from the dropdown list
      And the callout should open
      And the Responsibility for these works is "United Utilities Water"
      And the callout body has info

  Scenario: C3597 - Registered / Public User looking at Freemium Org works
    When I input "DuffyS" credentials and sign in
      And I should be in the "TM" page
      And I should be signed in as "DuffyS"
    Then I type in the search box the location "KC003S000000001718"
      And I select "KC003S000000001718" from the dropdown list
      And the callout should open
      And the Responsibility for these works is "Oldham Metropolitan Borough Council"
      And the callout body has Orgs info
      Then I click the sign out button
        And I should be in the "Home" page
        And I should see the Sign in button
        And I'm in the "Sign in" page
      Then I input "DuffyS" credentials and sign in
      And I should be in the "TM" page
      And I should be signed in as "DuffyS"
    Then I type in the search box the location "KC050L-OLDL-00003816_UL1"
      And I select "KC050L-OLDL-00003816_UL1" from the dropdown list
      And the callout should open
      And the Responsibility for these works is "Oldham Metropolitan Borough Council"
      And the callout body has Orgs info

  Scenario: C3824 - Email Alert (Weekly) for Public Users
    When I input "DuffyS" credentials and sign in
      And I should be in the "TM" page
      And I should be signed in as "DuffyS"
      And I click on user menu
      And I Click on Alerts
      And The Alerts menu appears
    Then I enter a description "This is my test"
      And I select Who are you option
      And I type in the search box the location "KC050L-OLDL-00004060_UL1"
      And I select "KC050L-OLDL-00004060_UL1" from the dropdown list
      And I choose Get Alerts on
      And I Select Weekly alert frequency
      And I click on Set Alarm

   Scenario: C4395 -Street manager Status - Work in progress
    When I input "DuffyS" credentials and sign in
      And I should be in the "TM" page
      And I should be signed in as "DuffyS"
    Then I type in the search box the location "LR01677000795"
      And I select "LR01677000795" from the dropdown list
      And the callout should open
      And the status of this work is "Work in progress"
    Then I type in the search box the location "KC050L-OLDL-00003816_UL1"
      And I select "KC050L-OLDL-00003816_UL1" from the dropdown list
      And the callout should open
      And the status of this work is "Work in progress"

   Scenario: C4396 - Street manager Status -  Work completed
    When I input "DuffyS" credentials and sign in
      And I should be in the "TM" page
      And I should be signed in as "DuffyS"
      And I click on the search box to select dates
      And I click the date search "lasttwoweeks" option on the list
    Then I type in the search box the location "GL006LM0001000003471"
      And I select "GL006LM0001000003471" from the dropdown list
      And the callout should open
      And the status of this work is "Work completed"
    Then I type in the search box the location "KC002S000000025362"
      And I select "KC002S000000025362" from the dropdown list
      And the callout should open
      And the status of this work is "Work completed"

Scenario: C4359 - Bug: CMCustom default rule is being displayed instead of original Works Description for Street Manager Public organisations
      Then I input "DuffyS" credentials and sign in
      And I should be in the "TM" page
      And I should be signed in as "DuffyS"
    Then I type in the search box the location "UB050S278MVKELLYDAVIDSON"
      And I select "UB050S278MVKELLYDAVIDSON" from the dropdown list
      And the callout should open
      And the Responsibility for these works is "Bedford Borough Council"
      And the callout body has info
    Then I click the sign out button
       And I should be in the "Home" page
    Then I visit the url "/?GB129089156"
      And the callout should open
      And the Responsibility for these works is "Bedford Borough Council"

Scenario: C4399 - Bug: Historical works permits not displaying SM works description
  Then I input "DuffyS" credentials and sign in
    And I should be in the "TM" page
    And I should be signed in as "DuffyS"
  Then I type in the search box the location "GB122887392"
    And I select "EP201EH2318347" from the dropdown list
    And the callout should open
    And the date picker is updated with historical date range
  Then I click on the search box to select dates
    And I click the date search "today" option on the list
    And the callout shouldn not be visible
  Then I change the date search to July 2021
  Then I visit the url "/?GB122887392"
      And I wait for the page to open
      And the url callout should open

