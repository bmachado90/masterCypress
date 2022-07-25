Feature: Route Manager-Clashes

Background:
  Given I'm in the "Sign in" page
   When I input hcd "hcd_user" credentials and sign in
    Then I should be signed in as "hcd_user"
      And I go to the Route Manager Page
      And I must be able to see the Route Manager Page

Scenario: C2637 - Export clashes as a CSV file
    When I Click on Route Manager option
      And I choose Clashes
    Then I click on Export to csv.
    Then I Insert some values on the search "JU40000006070-FP"
      And I click on a Clashe
      And I Go Back
      And I click on Export to csv.

Scenario: C5254 - Search clashes by Clash ID
    When I Click on Route Manager option
      And I choose Clashes
    Then I click on one clashes
      And I Go Back
    Then I Insert some values on the search "446078"
      And I click on a Clashe
      And I Go Back
    Then I Insert some values on the search "JU40000006070-FP"
      And I click on a Clashe
      And I Go Back

Scenario: C3412 - Create a Clash alert
    When I Click on Route Manager option
      And I choose Alerts
    Then I click on Create Alerts
      And I insert alert name "Automated Alert"
      And I select the alert frequency.
      And I select Select the Clash severity.
      And I Set the Clash date range.
      And I Save the alert

Scenario: C2978 - Clash list and Clash detail screen smoke test
  When I click on Total Clashes widget
    Then I go to the Clashes pages
      And I click on question mark page
      And A new modal opens
      And I close the modal
      And I click on Load More button
    Then I filter for My Works
      And I click on one clash
      And I set the map's zoom level to 19
      And I set the map's zoom level to 15
      And I click in Go back
    Then I click on another Clash
       And I can see the data
       And I Mouseover left and right arrows on top of clashes
       And I Navigate beetween clashes
       And I click on Create Traffic Management Plan button
       And I exit the TM page
       And I click in Go back
     Then I Insert some values on the search "LN0780461606F3-02"
       And The clash appears on the list

  Scenario: C3220 - Create new Clash
   When I click on Routes widget
    And I go to the Routes pages
    Then I click in the search item text box to type
      And I type in the search box a location "Dixon Street, Warrington, WA1"
      And I select item "Dixon Street, Warrington, WA1" from the dropdown list
    Then I click on Add Route And Bus option
      And The page is visible
      And I insert the name "Automated QA"
      And i click on Plot Route
      And I set the map's zoom level to 19
      And I draw the route on the map
      And I insert a description "Automated QA description"
      And I Save the bus route
      And I return to the route list
    Then I click in the search item text box to type
      And I type in the search box a location "Dixon Street, Warrington, WA1"
      And I select item "Dixon Street, Warrington, WA1" from the dropdown list
    Then I click on Add Route And Strategic route
      And The page is visible
      And I insert the name "Automated QA Strategic"
      And i click on Plot Route
      And I set the map's zoom level to 19
      And I draw the route on the map
      And I insert a description "Automated QA Strategic description"
      And I Save the bus route
      And I return to the route list
    Then I click in the search item text box to type
      And I type in the search box a location "Dixon Street, Warrington, WA1"
      And I select item "Dixon Street, Warrington, WA1" from the dropdown list
    Then I click on Add Route And Lary route
      And The page is visible
      And I insert the name "Automated QA Lary"
      And i click on Plot Route
      And I set the map's zoom level to 19
      And I draw the route on the map
      And I insert a description "Automated QA Lary description"
      And I Save the bus route
      And I return to the route list
    Then I go to Traffic Management module
      And the Traffic Management page is displayed
     Then I click in the search item text box to type
      And I type in the search box a location "Dixon Street, Warrington, WA1"
      And I select item "Dixon Street, Warrington, WA1" from the dropdown list
    Then I click on Create a New Plan.
      And i create a standard "Incident" category plan with name "C3220" and Zoom level 20
      And I Save the current plan
      And i navigate to step3
      And I Publish the plan
    Then I go to the Route Manager Page
      And I must be able to see the Route Manager Page
    Then I click on Total Clashes widget
      And I go to the Clashes pages
    Then I Insert some values on the search "Automated"
      And The clash appears on the list



