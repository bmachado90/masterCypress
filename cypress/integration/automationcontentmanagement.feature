Feature: Content Management

Background:
  Given I'm in the "Sign in" page

  Scenario: C4- Menu and Permissions Smoke Test
   When I input "cm_only" credentials and sign in
    Then I should be in the "CM" page
      And I should be signed in as "cm_only"
      And I can only see enable Public Map and Content Manager
      And I Logout
      And I'm in the "Sign in" page
    Then I input "cm_user" credentials and sign in
      And I should be in the "CM" page
      And I should be signed in as "cm_user"
      And I go to Traffic Management module
      And I should be in the "TM" page
      And I go to Content Management module
      Then I should be in the "CM" page
      And I can see Content Management module page
    Then I click on Report
      And the Report buy module is displayed
      And i close it
