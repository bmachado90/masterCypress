Feature: Live Link

Background:
  Given I'm in the "Sign in" page
   When I input "DuffyS" credentials and sign in
    And I should be in the "TM" page
    And I should be signed in as "DuffyS"

Scenario: C4345 - Live Link web dashboard look and feel
    When I´m on Live Link web dashboard
      Then I can see the promoters and Filter
        And I can see Closures on the list
      Then I filter by promoter with no data "South East Water" "98"
      Then i click on one closure
        And I Can see information
        And i Click on pencil to show dates
        And i go back to dashboard
      Then i choose a closed closure
        And I Can see Expired information
        And I click on open in TM

Scenario: C4346 - Live Link dashboard filters
   When I´m on Live Link web dashboard
      Then I can see the promoters and Filter
        And I can see Closures on the list
      Then I filter by promoter "Roadworks Information" "2"
        And I click on Filters
        And I clear all the Filters
      Then I select "ongoing"
        And I deslect Ongoing
      Then I select "expired"
        And I deslect Expired
      Then I select "upcoming"
        And I deslect Upcoming
      Then I select "relevant"
        And I close the filters
      Then I Click on "Show all closures"

  Scenario: C37 - A user can run a Live Link Status Report
    When I click on Live link Status Report
      And I can see the information
      And I choose Start Date "30/05/2022"
      And I choose End Date "30/05/2022"
    Then I click on Run Report
      And I choose Start Date "01/01/2018"
      And I click on Run Report
      And I choose Start Date "01/10/1900"
      And I choose End Date "01/10/1900"


