Feature: Route Manager-Events

Background:
  Given I'm in the "Sign in" page
   When I input "events_user" credentials and sign in
    And I should be in the "TM" page
    And I should be signed in as "events_user"

Scenario: C111 - Bug: Items opened through Traffic restrictions does not activate POI layer
  When i visit "/?embedId=poi_trial&tm=GB129100939"
    Then the callout should open
      And I click on the data layer icon
      And I click on the Points of interest layer icon "2"
      And I get the callout poi info

Scenario: C57 - Creating Event Plans Smoke test
   When I click in the search item text box to type
      And I type in the search box a location "Hampton Drive, Great Sankey, Warrington, WA5 1JF"
      And I select item "Hampton Drive, Great Sankey, Warrington, WA5 1JF" from the dropdown list
    Then I click on Create a New Plan.
      And i create a standard "Filming" category plan with name "C57" and Zoom level 20
      And I nagivate to Step 2
      And I add an "Hospitality area" in step2 "9"
      And I insert step 2 description "www.google.pt"
      And I insert plot location
      And I add it to the plan
      And I add an "Festival site" in step2 "7"
      And I choose diferente Dates
      And I insert plot location
      And I add it to the plan
      And I Save the current plan
      And i navigate to step3
      And I Publish the plan
    Then I visit the following plan link "/?embedId=poi_trial&tm=GB"
      And I wait for the callout to open
      And the callout should open
      And I click on the data layer icon
      And I click on the Points of interest layer icon "2"
      And I get the callout poi info
      And I click on the Points of interest layer icon "2"
    Then I go to Traffic Management module
    Then I search for the POI plan "C57"
      And I nagivate to Step 2
      And I open a crated POI
      And I disable the callout option
      And I add it to the plan
      And I Save the current plan
