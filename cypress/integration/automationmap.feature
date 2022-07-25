Feature: Works on the map

  The user can works plotted on the map and interact with the markers to get details of each work.

  Background:
  Given I'm in the "Home" page
    And I'm not signed in

  Scenario: C108 - Info Smoke Test
  When I click on the data layer icon
  And I see the 'Legal Information' label
  Then I click on the Legal Information Label
    And the new tab contains Legal Information
    And I click on Website Terms of Use
    And I see Website Terms of Use page
    And I click on Master Terms and Conditions
    And I see the Master terms and Conditions page
    And I click on Third Party Content and Services
    And I see the Third Party Content and Services page
    And I click on Privacy and Cookies Policy
    And I see the Privacy and Cookies Policy page
    And I click on User preferences and Analytics & Statistics cookies.
    And I save the Cookie Preferences.
  Then I refresh the page
    And I click on User preferences and Analytics & Statistics cookies.
    And I save the Cookie Preferences.
  Then I refresh the page
    And I click on Fair Usage Policy
    And I see the Fair Usage Policy page
    And I click on Copyright Policy
    And I see the Copyright Policy page

  Scenario: C114 - Icons Smoke Test
  When I'm in the "Sign in" page
    Then I input "DuffyS" credentials and sign in
      And I should be in the "TM" page
      And I should be signed in as "DuffyS"
    Then I click on the data layer icon
      And I unselect open layers except Incidents
    Then I click on the "Live traffic" icon "3"
      And the Live traffic is displayed
      And I Collapse Incidents and Live traffic.
    Then I click on the "Road closures and diversions" icon "4"
      And I click on question mark "22"
      And I Collapse "Road closures and diversions" "4"
    Then I click on the "Traffic restrictions" icon "5"
      And I click on Traffic restrictions question mark
      And I Collapse "Traffic restrictions" "5"
    Then I click on the "Roadworks" icon "6"
      And I Collapse "Roadworks" "6"
    Then I click on the "Public Events" icon "8"
      And I Collapse "Public Envents" "8"
    Then I click on the "Driver Information" icon "9"
      And I Collapse "Driver Information" "9"
    Then I click on the "Public transport" icon "10"
      And I Collapse "Public transport" "10"
    Then I click on the "Operational info" icon "11"

  Scenario: C4530 - Open roadworks callouts from BT
    When I'm in the "Sign in" page
    Then I input "DuffyS" credentials and sign in
      And I should be in the "TM" page
      And I should be signed in as "DuffyS"
    Then I click in the search item text box to type
      And I type in the search box a location "HF023S00000021"
      And I select item "HF023S00000021" from the dropdown list
      And the callout should open
    Then Click in Organisation name
      And Click in Organisation logo
    Then I Add "?showlinks=true" on base Url
    Then I click in the search item text box to type
      And I type in the search box a location "HF023S00000021"
      And I select item "HF023S00000021" from the dropdown list
      And the callout should open
      And the deeplink is present
    Then i click on deeplink
      And the callout should open
      And Organisation Logo is present

  Scenario: C115 - Data layers: Base map smoke test
    When I Click on "Satellite" option, "2"
      Then the login window popsUp
    When I input "DuffyS" credentials and sign in
      Then I should be in the "TM" page
    When Click on the data layer
      Then the "Satellite" option is "not displayed" on the layers-menu
    When I Click on "Satellite" option, "2"
      Then The Map displays "Satellite" layout, "2"
    When I Click on "Terrain" option, "3"
      Then Map must displays "Terrain" layout
    When I Click on "OpenStreetMap" option, "4"
      Then Map displays "openstreetmap" layout on screen

    Scenario: C13 - Data layers Smoke Test
     When I click on the data layer icon
      Then the " Covid-19 SafeStart restrictions " label is visible
        And the " Live incidents " label is visible
        And the " Live traffic " label is visible
        And the " Road closures and diversions " label is visible
        And the " Traffic restrictions " label is visible
        And the " Roadworks " label is visible
        And the " Weather " label is visible
        And the " Public events " label is visible
        And the " Driver information " label is visible
        And the " Public transport " label is visible
        And the " Operational info " label is visible
        And the "Road" option is "displayed" on the layers-menu
        And the "Satellite" option is visible on the layers-menu "2"
        And the "Terrain" option is visible on the layers-menu "3"
        And the "OpenStreetMap" option is visible on the layers-menu "4"
        And The version number is displayed and it matches 'Version: e2.17.0'
        And I see the 'Legal Information' label
      Then I click on the Legal Information Label
        And I go back in the browser
      Then  I click on the "Live traffic" icon "3"
        And the login window popsUp
      Then I input "DuffyS" credentials and sign in
        And I should be in the "TM" page
        And Click on the data layer
      Then I click on the "Live traffic" icon "3"
        And I click on the "Public transport" icon "10"
      Then i click on reset
        And I Collapse "Public transport" "10"
        And I see Public Transport options
      Then I Select Bus stop and Train station and Tube station.
        And I Collapse "Public transport" "10"

  Scenario: C5286 - Data layers: Driver Info smoke test
    Given I click on the data layer icon
    And the " Driver information " label is visible
    Then I Collapse "Driver Information" "9"
      And I can see Driver Information options

  Scenario: C5288 - Data layers: Public Events
    Given I click on the data layer icon
    And the " Public events " label is visible
    Then I Collapse "Public events" "8"
      And I can see Public Events options

  Scenario: C2754 - Data layers: Disabling and Enabling Covid-19 SafeStart restrictions
    Given I click on the data layer icon
    And the " Covid-19 SafeStart restrictions " label is visible
    Then I click on the "Covid-19 SafeStart restrictions" icon "1"
    Then I Collapse "Covid-19 SafeStart restrictions" "1"
      And I can see Covid-19 SafeStart restrictions options

  Scenario: C4398 - Data Layers: Roadworks
    Given I click on the data layer icon
    And the " Roadworks " label is visible
    Then I Collapse "Roadworks" "6"
      And I can see Roadworks options

  Scenario: C465- Data layers: Car parks
    Given I'm in the "Home" page
     And I'm not signed in
      When I click on the data layer icon
       Then I click the "Driver information" option on the list
       Then the "Traffic information signs" option is "displayed" on the layers-menu
        And the "UTMC_R_VMS" trigger is "not displayed" on the layers-menu
         And I type in the search box the location "Cambridge"
         And I select "Cambridge" from the dropdown list
       Then I disable all layers
        And I pan the map to coordinate 52.209197998046875,0.11925604194402695
        And I set the map's zoom level to 19
        And I enable the "UTMC_R_CAR_PARKS" geoserver layer
        And I click the center of the map
        And the callout should open
       Then the callout title is displayed
        And the callout shows the Car park name
        And the callout shows the location
        And the callout shows the Available spaces
        And the callout shows the Total capacity
        And the callout shows the Status
        And the callout shows the Click Here link
        And the callout shows the Last updated
        #Then I click on Click Here inside the callout
        #And I go to the website of Cambridge Council County.
        #And I Close the tab
        And I Close the callout
      Then I'm in the "Sign in" page
      When I input "DuffyS" credentials and sign in
        Then I should be in the "TM" page
        And I should be signed in as "DuffyS"
        And I Click on Layers
        And I disable all layers
        And I enable the "UTMC_R_CAR_PARKS" geoserver layer
        And I type in the search box the location "37821470"
        And I select "37821470" from the dropdown list

  Scenario: C1446 - Data layers: Bus stop
    Given I'm in the "Sign in" page
    When I input "DuffyS" credentials and sign in
      Then I should be in the "TM" page
        And I should be signed in as "DuffyS"
        And I type in the search box the location "Tower Hamlets"
        And I select "Tower Hamlets" from the dropdown list
      Then I Click on Layers
        And I disable all layers
        And I pan the map to coordinate 51.5885,-0.02032
        And I set the map's zoom level to 19
        And I click the "Public transport" option on the list
        And the "Bus stop" option is "displayed" on the layers-menu
        And the "BUS_STOPS_PLACR" trigger is "not displayed" on the layers-menu
        And I enable the "BUS_STOPS_PLACR" layer
        And I click the center of the map
        And the callout should open
        And the callout bus title is displayed
        And the callout bus shows has the close cross
        And the callout bus shows the location
        And the callout bus has the Live Departures
        And the callout bus has "Service" Column, "1"
        And the callout bus has "Destination" Column, "2"
        And the callout bus has "Due" Column, "3"
        And I Close the callout

  Scenario: C829 - A user is able to open TM entities callouts
    When I'm in the "Sign in" page
    Then I input "historic_search_user" credentials and sign in
    Then The Historic Search page is visible.
    Then I type in the search box the location "Oxford"
      And I select "Oxford" from the dropdown list
      When I disable all layers
      And I pan the map to coordinate 51.7591761,-1.2599776
      And I set the map's zoom level to 12
      And I click on the "Roadworks" icon "6"
      And there should be markers on the map
      And I position the map over a random marker
      And I click the center of the map
      And the callout should open
    Then I choose a date in the past

  Scenario: Search box and results (functionality)
      When I type in the search box the location " "
        And I type in the search box the location "a"
        And I clean the search input
        And I type in the search box the location "Ox"
        And I type in the search box the location "Oxf"
        And I clean the search input
        And I type in the search box the location "OxfOrD"
        And I select "Oxford" from the dropdown list
      Then I clean the search input
        And I type in the search box the location "123124561535"
        And I clean the search input
        And I type in the search box the location "()%&/)"
        And I clean the search input
      Then I type in the search box the location "Chelmsford"
        And I select "Chelmsford" from the dropdown list

  Scenario:  C3083 - Calendar smoke test
  When I'm in the "Sign in" page
  Then I input "DuffyS" credentials and sign in
    And I should be in the "TM" page
    And I should be signed in as "DuffyS"
  Then I click on Calendar
    And Select a new start and end date in the calendar.
     And I close the calendar
  Then I click on Calendar
    And I choose a Start Date
    And I choose an End Date into the next Month
    And In the start date, click in the month, between the two arrows.
    And I Choose a month and click on it.
    And In the end date, click again in the month, between the two arrows and click again over the year.
    And I close the calendar
  Then I click on Calendar
    And In the StartDate I choose a diferent year , month , day
    And I close the calendar
  Then I click on Calendar
    And I select 1 January 2013 in start date.
    And The error messages is displayed
    And I close the calendar
    And I click on Calendar
    And I Go forward ten years from the current date
    And The error messages is displayed
  Then Select a new start and end date in the calendar.
    And I close the calendar

  Scenario: C483 - A user has the ability to see its current location on map (Allow)
    When Click on the Location button
      And I allow to show Location
    Then Click on the Location button
      And Click on the Location button

  Scenario: C483 - A user has the ability to see its current location on map (Deny)
    When Click on the Location button
      And I deny to show Location


