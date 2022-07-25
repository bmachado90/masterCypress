Feature: Reports
Background:
  Given I'm in the "Sign in" page
  When I input hcd "RRAppDemo" credentials and sign in
    Then I should be signed in as "RRAppDemo"
    And I must be able to see the Report Page

Scenario: C3087 - Search works by reference
  When I´m on the Report Page
    Then i Click on Advance Option
      And I input search for "NK106NWID451981B"
      And I Click on Search or Download
    Then I click on Location
      And Insert the org "Warrington"
      And I Click on Search or Download

Scenario: C4377 - Historical works with permission
  When I Check Data range Labels
    Then I choose From "20/05/2022"
      And I choose To "22/05/2022"
    Then I choose From "31/05/2022"
      And I choose To "30/05/2022"
    Then I choose From "01/01/2022"
      And I choose To "01/05/2022"
    Then I click on Location
      And Insert the org "Warrington"
      And I Click on Search or Download
