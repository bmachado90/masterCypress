Feature: Base Map option

  User check if version is visible and legal information is present

Background: Open Data Layer
    Given I'm in the "Home" page
    And I'm not signed in
    When I click on the data layer icon

  Scenario: Check if version is present
    Then The version number is displayed and it matches 'Version: e2.17.0'

  Scenario: Click on Legal information
    And I see the 'Legal Information' label
    Then I click on the Legal Information Label
      And the new tab contains Legal Information
      And I Close the tab
