Feature: Plane Share

Background:
  Given I'm in the "Sign in" page
   When I input "DemoNonLA" credentials and sign in
    Then I should be in the "TM" page
      And I should be signed in as "DemoNonLA"

Scenario: C4742 - Submit and Accept a non-TTRO plan
  When  I click in the search item text box to type
    And I type in the search box a location "Duke Street, Darlington, DL3"
    And I select item "Duke Street, Darlington, DL3" from the dropdown list
  Then I click on Create a New Plan.
    And i create a standard "Incident" category plan with name "C4742" and Zoom level 20
    And i navigate to step3
    And I Save the plan
  Then I Submit the plan to an HA
    And I Confirm the submission
    And i navigate to step3
    And The TTRO checkbox is locked
    And i click on Home
  Then I click on Works Pending
    And Non-TTRO submitted plan are displayed
    And I perform Logout
    And I'm in the "Sign in" page
  Then I input "ApproverDemo" credentials and sign in
    And I should be in the "TM" page
    And I should be signed in as "ApproverDemo"
  Then I click on Works Pending
    And I open the plan
    And i navigate to step3
    And I accept the plan
    And i navigate to step3
    And The plan has status "Accepted"
    And i click on Home
    And I perform Logout
    And I'm in the "Sign in" page
  Then I input "DemoNonLA" credentials and sign in
    And I should be in the "TM" page
    And I should be signed in as "DemoNonLA"
    And i look at the dashboard

