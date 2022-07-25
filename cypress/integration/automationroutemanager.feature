Feature: Route Manager-Clashes

Background:
  Given I'm in the "Sign in" page
    When I input hcd "hcd_user" credentials and sign in
    Then I should be signed in as "hcd_user"
      And I go to the Route Manager Page
      And I must be able to see the Route Manager Page


Scenario: C1457 - A user is able to create and send an email
    When I Click on Route Manager option
      And I choose Routes
    Then I input "test" in the route search
      And i open an test route
      And i click on Documents and Alerts
    Then I click on Create Email
      And i fill the create route email

Scenario: C1853 - Route Manager header active navigation in the right hand panel
  When I Click on Route Manager option
    And I choose Bus Stops
  Then I Click on Route Manager option
    And I mouseover all the option
    And I choose Dashboard
  Then I Click on Route Manager option
    And I choose Routes
  Then I Click on Route Manager option
    And I choose Clashes


Scenario: C3089 - Route Manager settings
  When I Click on Route Manager option
    And I choose Seetings
    And I Go back on the Seetings page
  Then I click on Routes Widget
    And All the routes are present


 Scenario: Bus routes callouts
   When I Click on Route Manager option
     And I choose Routes
     And I click on a WECA route
   Then I disable all layers
     And I type in the search box the location "Herbert Road, Bath, BA2 3PR"
     And I select "3 Herbert Road, Bath, BA2 3PP" from the dropdown list
     And I pan the map to coordinate 51.379458,-2.375815
     And I set the map's zoom level to 22
     And I click the center of the map
     And the callout should open
     And I can see route info in the callout
     And I type in the search box the location "Herbert Road, Bath, BA2 3PR"
     And I select "3 Herbert Road, Bath, BA2 3PP" from the dropdown list
     And I pan the map to coordinate 51.37595,-2.38249
     And I set the map's zoom level to 22
     And I click the center of the map
     And the callout should open
     And i see the bus info in the callout
     And i mouseover NaPTAN code info

Scenario: C4037 - Search field tooltip
  When I click on Routes Widget
    And All the routes are present
  Then I mouse over question mark icon
    And It shows text "Help"
  Then i Click on question mark icon
    And A new window pop up
    And I close the modal
     Then i Click on question mark icon
    And A new window pop up
    And I click on Dismiss
  Then I Click on Route Manager option
     And I choose Bus Stops
   Then I mouse over question mark icon
    And It shows text "Help"
  Then i Click on question mark icon
    And A new window pop up
    And I close the modal


Scenario: C4905 - Search Bus Stops
 When I Click on Route Manager option
     And I choose Bus Stops
   Then I mouse over question mark icon
    And It shows text "Help"
  Then i Click on question mark icon
    And A new window pop up
    And I close the modal
  Then I search for a bus stop "bthdwmj"
    And I clear the search field
  Then I search for a bus stop "bthjadt"
    And I click on Bus Stop
    And I see tha Bus data
  Then I search for a bus stop "2A"
    And I see bus stop results
  Then I search for a bus stop "QWERTY!"
    And No results were found

Scenario: C3041 - Create a Bus Route
   When I click on Routes widget
    And I go to the Routes pages
    Then I click in the search item text box to type
      And I type in the search box a location "Bold Street, Warrington, WA1"
      And I select item "Bold Street, Warrington, WA1" from the dropdown list
    Then I click on Add Route And Bus option
      And The page is visible
      And I insert the name "Automated C3041 ROUTE"
      And i click on Plot Route
      And I set the map's zoom level to 19
      And I draw the route on the map
      And I insert a description "Automated QA description"
      And I mouseover Stops and Diversions and Documents and Alerts tabs
      And I Untick This route is permanent
      And I Manually define dates and time
      And I click on Click Remove route button
      And i click on Plot Route
      And I set the map's zoom level to 19
      And I draw the route on the map
      And I Click on Back button
    Then I click on Add Route And Bus option
      And The page is visible
      And I insert the name "Automated C3041 ROUTE"
      And i click on Plot Route
      And I set the map's zoom level to 19
      And I draw the route on the map
      And I insert a description "Automated QA description"
      And I Save the bus route
      And I return to the route list
    Then I search for bus route "Automated C3041 ROUTE"
      And I click on the bus route
    Then I delete the route


Scenario: C3095 - Delete new and existing routes
   When I click on Routes widget
    And I go to the Routes pages
    Then I click in the search item text box to type
      And I type in the search box a location "Winmarleigh Street, Warrington, WA1"
      And I select item "Winmarleigh Street, Warrington, WA1" from the dropdown list
    Then I click on Add Route And Bus option
      And The page is visible
      And I insert the name "Automated DELETE ROUTE"
      And i click on Plot Route
      And I set the map's zoom level to 19
      And I draw the route on the map
      And I insert a description "Automated QA description"
      And I Save the bus route
      And I return to the route list
    Then I search for bus route "Automated DELETE ROUTE"
      And I click on the bus route
    Then I delete the route
    Then I click in the search item text box to type
      And I type in the search box a location "Winmarleigh Street, Warrington, WA1"
      And I select item "Winmarleigh Street, Warrington, WA1" from the dropdown list
    Then I click on Add Route And Strategic route
      And The page is visible
      And I insert the name "Automated Strategic DELETE ROUTE"
      And i click on Plot Route
      And I set the map's zoom level to 19
      And I draw the route on the map
      And I insert a description "Automated QA description"
      And I Save the bus route
      And I return to the route list
    Then I search for bus route "Automated Strategic DELETE ROUTE"
      And I click on the bus route
    Then I delete the route
    Then I click in the search item text box to type
      And I type in the search box a location "Winmarleigh Street, Warrington, WA1"
      And I select item "Winmarleigh Street, Warrington, WA1" from the dropdown list
    Then I click on Add Route And Lary route
      And The page is visible
      And I insert the name "Automated Lary DELETE ROUTE"
      And i click on Plot Route
      And I set the map's zoom level to 19
      And I draw the route on the map
      And I insert a description "Automated QA description"
      And I Save the bus route
      And I return to the route list
    Then I search for bus route "Automated Lary DELETE ROUTE"
      And I click on the bus route
    Then I delete the route

Scenario: C3227 - Create overlapped route with diversions
   When I click on Routes widget
    And I go to the Routes pages
    Then I click in the search item text box to type
      And I type in the search box a location "Lakeside Drive, Warrington, WA1"
      And I select item "Lakeside Drive, Warrington, WA1" from the dropdown list
    Then I click on Add Route And Bus option
      And The page is visible
      And I insert the name "Automated C3227 ROUTE"
      And i click on Plot Route
      And I set the map's zoom level to 19
      And I draw the route on the map
      And I insert a description "Automated QA description"
      And I Save the bus route
      And I return to the route list
    Then I click in the search item text box to type
      And I type in the search box a location "Lakeside Drive, Warrington, WA1"
      And I select item "Lakeside Drive, Warrington, WA1" from the dropdown list
    Then I click on Add Route And Strategic route
      And The page is visible
      And I insert the name "Automated C3227 Strategic ROUTE"
      And i click on Plot Route
      And I set the map's zoom level to 19
      And I draw the route on the map
      And I insert a description "Automated QA description"
      And I Save the bus route
      And I return to the route list
    Then I click in the search item text box to type
      And I type in the search box a location "Lakeside Drive, Warrington, WA1"
      And I select item "Lakeside Drive, Warrington, WA1" from the dropdown list
    Then I click on Add Route And Lary route
      And The page is visible
      And I insert the name "Automated C3227 Lary ROUTE"
      And i click on Plot Route
      And I set the map's zoom level to 19
      And I draw the route on the map
      And I insert a description "Automated QA description"
      And I Save the bus route
      And I return to the route list
    Then I search for bus route "Automated C3227 ROUTE"
      And I click on the bus route
      And I click on Stops and Diversion button
      And I click on Diversion button
    Then I Enter the diversion name "Bruno Diversion"
      And i click on Plot Diversion
      And I set the map's zoom level to 19
      And I draw the diversion on the map
      #And I choose the Diversion
      And I save the Diversion
      And I choose Apply to all
    Then I Reopen the diversion
      And I insert the diversion description "Automated New description"
      And I save the Diversion
      And I Untick Apply all
    Then I Reopen the diversion
      And I insert the diversion description "Automated Another description"
      And I save the Diversion
      And I Tick Strategic
      And I Tick Lary
      And I untick Strategic
      And I Dismiss
      And i click on Discard Button

@focus
Scenario: C3223 - Add | Edit | Delete a Bus Stop
 When I click on Routes widget
    And I go to the Routes pages
    Then I click in the search item text box to type
     And I type in the search box a location "Irwell Road, Warrington, WA4"
      And I select item "Irwell Road, Warrington, WA4" from the dropdown list
    Then I click on Add Route And Strategic route
      And The page is visible
      And I insert the name "Automated C3223 Strategic ROUTE"
      And i click on Plot Route
      And I set the map's zoom level to 19
      And I draw the route on the map
      And I insert a description "Automated QA description"
      And I Save the bus route
    Then I click on Stops and Diversion button
      And I can see only Diversion button
      And I delete the route
    Then I click on Add Route And Lary route
      And The page is visible
      And I insert the name "Automated C3223 Lary ROUTE"
      And i click on Plot Route
      And I set the map's zoom level to 19
      And I draw the route on the map
      And I insert a description "Automated QA description"
      And I Save the bus route
    Then I click on Stops and Diversion button
      And I can see only Diversion button
      And I delete the route
    Then I click in the search item text box to type
      And I type in the search box a location "Irwell Road, Warrington, WA4"
      And I select item "Irwell Road, Warrington, WA4" from the dropdown list
    Then I click on Add Route And Bus option
      And The page is visible
      And I insert the name "Automated C3223 Bus ROUTE"
      And i click on Plot Route
      And I set the map's zoom level to 19
      And I draw the route on the map
      And I insert a description "Automated QA description"
      And I Save the bus route
    Then I click on Stops and Diversion button
      And I can see only both button
    Then I click on Add Bus Stops
      And I insert a Bus Stop name "NEW Automated Bus Stop"
      And I insert a valid dates "10/06/2022" "15/06/2022"
      And I insert a valid enforcement pattern
      And I click on bus Plot
      And I set the map's zoom level to 19
      And I insert a bus stop on the map
      And i insert a bus stop description "NEW Automated Bus Stop Description"
    Then I click on Remove Location
      And I click on bus Plot
      And I set the map's zoom level to 19
      And I insert a bus stop on the map
      And i click on Find Location
      And I save the bus Stop
    #Then I click on bus Stop callout
    #  And the callout should open
    #  And I Close the callout
    Then I click on the Bus ellipsis
      And I click on Copy
      And I set the status to Closed
      And I save the bus Stop
     Then I Click on Route Manager option
      And I choose Bus Stops
      And I search bus stop "NEW Automated Bus Stop"
      And I click on bus stop
      And I insert a Bus Stop name "NEW Automated EDIT Bus Stop"
      And I save the bus Stop
      And I click on bus stop
    Then I click on Route tabs
      And I insert the name "Automated C3224 EDIT Bus ROUTE"
      And I Save the bus route
    Then I click on Stops and Diversion button
      And I click on Delete Bus stop
      And I Cancel deletion
      And I click on Delete Bus stop
      And I Confirm Deletion
    Then I click on Add Bus Stops
      And I insert a Bus Stop name "Bruno New Bus Stop"
      And I insert a valid dates "10/06/2021" "15/06/2021"
      And I click on bus Plot
      And I set the map's zoom level to 21
      And I insert a bus stop on the map
      And i insert a bus stop description "Bruno New Bus Stop Description"
      And I save the bus Stop

Scenario: C3224 - Add | Edit | Remove a Diversion
 When I click on Routes widget
    And I go to the Routes pages
    Then I click in the search item text box to type
     And I type in the search box a location "Silverdale Road, Warrington, WA4"
      And I select item "Silverdale Road, Warrington, WA4" from the dropdown list
    Then I click on Add Route And Bus option
      And The page is visible
      And I insert the name "Automated C3224 Bus ROUTE"
      And i click on Plot Route
      And I set the map's zoom level to 19
      And I draw the route on the map
      And I insert a description "Automated QA description"
      And I Save the bus route
    Then I click on Stops and Diversion button
      And I can see only both button
      And I click on Diversion button
    Then I Enter the diversion name "Bruno Diversion"
      And I insert a valid enforcement pattern
      And I insert a diversion description "Test Divertion"
      And i click on Plot Diversion
      And I set the map's zoom level to 19
      And I draw the diversion on the map
      And I click on Remove Location
      And i click on Plot Diversion
      And I set the map's zoom level to 19
      And I draw the diversion on the map
      And i click on Find Location
      And I save the Diversion
      And I click in Go back
    Then I click in the search item text box to type
     And I type in the search box a location "Silverdale Road, Warrington, WA4"
      And I select item "Silverdale Road, Warrington, WA4" from the dropdown list
    Then I click on Add Route And Strategic route
      And The page is visible
      And I insert the name "Automated C3224 Strategic ROUTE"
      And i click on Plot Route
      And I set the map's zoom level to 19
      And I draw the route on the map
      And I insert a description "Automated QA description"
      And I Save the bus route
     Then I click on Stops and Diversion button
      And I click on Diversion button
     Then I Enter the diversion name "Bruno Strategic Diversion"
      And I set the Diversion Status to Closed
      And I insert a valid enforcement pattern
      And I insert a diversion description "Test Divertion Strategic"
      And i click on Plot Diversion
      And I set the map's zoom level to 19
      And I draw the diversion on the map
      And I save the Diversion
      And I choose Appply All
    Then I click on diversion ellipsis
      And I click on Copy Diversion
      And I insert a valid dates "09/07/2022" "10/07/2022"
      And I choose option Diversion
      And I save the Copy Diversion
    Then I select the Copy Diversion
      And I click on Delete diversion
      And I Cancel diversion deletion
      And I select the Copy Diversion
      And I click on Delete diversion
      And I Confirm diversion Deletion
      And I click in Go back
    Then I click in the search item text box to type
     And I type in the search box a location "Silverdale Road, Warrington, WA4"
      And I select item "Silverdale Road, Warrington, WA4" from the dropdown list
    Then I click on Add Route And Lary route
      And The page is visible
      And I insert the name "Automated C3224 Lary ROUTE"
      And i click on Plot Route
      And I set the map's zoom level to 19
      And I draw the route on the map
      And I insert a description "Automated QA description"
      And I Save the bus route
    Then I click on Stops and Diversion button
      And I click on Diversion button
    Then I Enter the diversion name "Bruno Lary Diversion"
      And I insert a valid dates "09/06/2021" "09/07/2021"
      And I insert a diversion description "Test Divertion Lary"
      And i click on Plot Diversion
      And I set the map's zoom level to 19
      And I draw the diversion on the map
      And I save the Diversion
      And I choose Appply All





