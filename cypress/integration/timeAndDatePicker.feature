Feature: Time and Data Pickers
  Users can validate time picker controls

  Background: Anonymous user opens the Home page

    Given I'm not signed in
    When I click the Sign in button
      Then I should be in the "Sign in" page
    When I input "DuffyS" credentials and sign in
      Then I should be in the "TM" page

    Scenario: C10- Time and date picker Smoke test
    When Click on the search box to select dates
     And I click the date search option "twoweeks" on the list
     Then I click on Calendar button
      And the time button is "disabled"
      And I close the Calendar
    Then Click on the search box to select dates
      And I click the date search option "today" on the list
      And I click on Calendar button
      And the time button is "enabled"
      And I close the Calendar
    Then  Click on the search box to select dates
      And I click the date search option "threemonths" on the list
      And I click on Calendar button
      And the time button is "disabled"
      And I close the Calendar
    Then  Click on the search box to select dates
      And I click the date search option "twelvemonths" on the list
      And I click on Calendar button
      And the time button is "disabled"
      And I close the Calendar
    Then  Click on the search box to select dates
      And I click the date search option "today" on the list
      And I click on Calendar button
      And the time button is "enabled"
      And I choose a specific hour
      And I close the Calendar
    Then  Click on the search box to select dates
      And I click the date search option "today" on the list
      And I click on Calendar button
      And the time button is "enabled"
      And I choose a specific Start Date
      And I choose a specific End Date
      And I close the Calendar
    Then  Click on the search box to select dates
      And I click the date search option "twoweeks" on the list
      And I click on Calendar button
      And the time button is "disabled"
      And It shows message "You cannot select time when selecting more than one day"
      And I close the Calendar
    Then  Click on the search box to select dates
      And I click the date search option "twelvemonths" on the list
      And I click on Calendar button
      And the time button is "disabled"
      And It shows message "You cannot select time when selecting more than one day"
      And I close the Calendar
    Then  Click on the search box to select dates
      And I click the date search option "threemonths" on the list
      And I click on Calendar button
      And the time button is "disabled"
      And It shows message "You cannot select time when selecting more than one day"
      And I close the Calendar


