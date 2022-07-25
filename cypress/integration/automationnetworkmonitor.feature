Feature: Network Monitor

Background:
Given I'm in the "Sign in" page
When I input "DuffyS" credentials and sign in
Then I should be in the "TM" page
And I should be signed in as "DuffyS"

Scenario: C995- A user is able to see Waze data clicking on Waze network button
  When I click on the data layers button
  And I click on Reset button
    Then I Click on Wazze button
    And I pan the map to coordinate 51.787013,-1.377572
    And I set the map's zoom level to 19
    And I wait for markes to appear
    And I click the center of the map
    And the callout should open
    Then the callout title is displayed
      And the callout shows the Incident name
      And The "Queuing traffic" name is present in the callout
      And the callout header has data
      And the callout body has data

Scenario: C53 -Network Monitor toggle to view real-time (TomTom and Waze)
   When I click on the data layers button
    And I click on Reset button
    Then Mouseover Waze toggle and get the message "Enable Network Monitor to view real-time traffic disruptions".
      And Mouseover TomTom toggle and get the message "Enable Network Monitor to view real-time traffic disruptions".
    Then I click on TomTom button
      And Mouseover TomTom toggle and get the message "Displaying disruptions validated by TomTom live traffic data".
      And I click on TomTom button
      And I refresh the page
    Then I Click on Wazze button
      And Mouseover Waze toggle and get the message "Displaying disruptions validated by Waze live traffic data".
      And I Click on Wazze button
      And I refresh the page

Scenario: C98 - A user is able to see live incidents, as well as open and close the callouts
   When I click on the data layers button
    And I click on Reset button
    Then I Click on Wazze button
      And I pan the map to coordinate 51.787013,-1.377572
      And I set the map's zoom level to 19
      And I wait for markes to appear
      And I click the center of the map
      And the callout should open
      And the callout title is displayed
      And I click on Info button
      And I Close the callout
      And I Click on Wazze button
    Then I click on TomTom button
    And I pan the map to coordinate 51.7371631,-1.1687583
      And I set the map's zoom level to 12
      And I wait for markes to appear
      And I click the center of the map
      And the callout should open
      And the callout tomtom title is displayed
      And I click on tomtom Info button
      And I Close the callout
      And I Click on Wazze button
     Then I pan the map to coordinate 51.787013,-1.377572
      And I set the map's zoom level to 19
      And I wait for markes to appear
      And I click the center of the map
      And the callout should open
      And I set the map's zoom level to 4
      And I set the map's zoom level to 5

Scenario: C473 - A user is able to see roadworks, as well as open and close the callouts
 When I click on the data layers button
    And I click on Reset button
    And I disable all layers
    And I click on the "Roadworks" icon "6"
  Then I click on TomTom button
     And I pan the map to coordinate 51.5187912,-0.0796308
      And I set the map's zoom level to 12
      And I wait for markes to appear
      And I click the center of the map
      And the callout should open
      And I click on the first callout
      And I click on Info button
      And I Close the callout
    Then I click on TomTom button
     And I pan the map to coordinate 51.7427903,-1.2270885
      And I set the map's zoom level to 13
      And I wait for markes to appear
      And I click the center of the map
      And the callout should open
      And I close the multiple callout
    Then I click on the data layers button
      And I click on Reset button


