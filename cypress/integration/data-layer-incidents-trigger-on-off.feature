Feature: Incident Trigger ON/OFF
  User can toggle any data layers on or off

  Scenario: Incident Trigger ON/OFF
    Given I'm in the "Home" page
    And I'm not signed in
    When I click on the data layer icon
    And I click the "Live incidents" option on the list
    # And the "Incidents" option is set to "Off"
    # Then the "INCIDENTS_LIVE_INCIDENT" trigger is shown as "Off" on the layers-menu

  Scenario: Accident Trigger ON/OFF
    Given I'm in the "Home" page
    And I'm not signed in
    When I click on the data layer icon
    And I click the "Live incidents" option on the list
    # Then the "Accident" option is set to "Off"
    # And the "INCIDENTS_LIVE_ACCIDENT" trigger is shown as "Off" on the layers-menu

  Scenario: Traffic congestion Trigger ON/OFF
    Given I'm in the "Home" page
    And I'm not signed in
    When I click on the data layer icon
    And I click the "Live incidents" option on the list
    # And the "Traffic congestion" option is set to "Off"
    # And the "INCIDENTS_LIVE_TRAFFIC_CONGESTION" trigger is shown as "Off" on the layers-menu

  Scenario: C2754 - Disabling and Enabling Covid-19 SafeStart restrictions
    Given I'm in the "Home" page
     And I'm not signed in
      When I click on the data layer icon
      And I click the "Live incidents" option on the list
      Then I click the "Covid-19 SafeStart restrictions" option on the list
        And the "Covid-19 protected route" option is "displayed" on the layers-menu
        And the "COVID_TESTING_STATION_LIVE" trigger is "displayed" on the layers-menu
      Then I click on Covid-19 Tongle All option
        And No Covid-19 options enable
      Then I click on Covid-19 Tongle All option
        And All Covid-19 options enable

  Scenario: C4398 - Data Layers: Roadworks
    Given I'm in the "Home" page
     And I'm not signed in
      When I click on the data layer icon
       Then I click the "Roadworks" option on the list
        And the "Roadworks" option is "displayed" on the layers-menu
        And the "ROADWORKS_CURRENT" trigger is "displayed" on the layers-menu
        And The question mark icon is "displayed"
      Then I click on question mark icon
        And The "Local authority" layer is "displayed"
        And The "Highways England" layer is "displayed"
        And The "HS2" layer is "displayed"
        And The "Electricity" layer is "displayed"
        And The "Gas" layer is "displayed"
        And The "Network" layer is "displayed"
        And The "Tram" layer is "displayed"
        And The "Water" layer is "displayed"
        And The "Minor routine maintenance" layer is "displayed"
        And The "Works no info" layer is "displayed"
        And The "Road closure" layer is "displayed"
        And The "Lane closure" layer is "displayed"
        And The "Traffic lights" layer is "displayed"
        And The "Stop go boards" layer is "displayed"
        And The "Give and take" layer is "displayed"
        And The "Priority" layer is "displayed"
        And The "Contraflow" layer is "displayed"
        And The "Covid-19 related" layer is "displayed"
        And The "Emergency" layer is "displayed"
        And The "Skip" layer is "displayed"
        And The "Scaffolding" layer is "displayed"
        And The "Materials on highway" layer is "displayed"
        And The "Crane" layer is "displayed"
        And The "Hoarding" layer is "displayed"
        And The "Tables & Chairs" layer is "displayed"
        And The "Abnormal load" layer is "displayed"
        And The "Traffic survey equipment" layer is "displayed"
        And The "Compound" layer is "displayed"
        And The "Other" layer is "displayed"

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





