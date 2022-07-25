Feature: Clash and Coordenation

Background:
  Given I'm in the "Sign in" page
  When I input "ba_user" credentials and sign in
    Then I should be in the "CAC" page
      And I should be signed in as "ba_user"

Scenario: C4755 - Clash & Coordination smoke test
  Then the Clash & Coordination module is presented.
  Then I Expand clash calendar dropdown.
    And the dropdown opens
  Then I Select a day from Clash Detected on option.
    And A list is returned
  Then I enter a clash
    And the clash information is displayed
    And I mouseover Actions
    And I mouseover color flags
    And I select a green flags
    And I go back
   Then I type in the search box the location "ZE4103159-WR-50-01"
    And I select "ZE4103159-WR-50-01" from the dropdown list
    And the callout should open
   Then I click on Open Clash
    And The clash menu appears
   Then I click on the data layers button
    And I click on the "Assets" icon "2"
  Then I type in the search box the location "GD01414320165"
    And I select "GD01414320165" from the dropdown list
    And the callout should open
    And option Open Clash is not visible





