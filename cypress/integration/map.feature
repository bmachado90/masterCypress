Feature: Works on the map

  The user can works plotted on the map and interact with the markers to get details of each work.

  Background: Anonymous user opens the Home page

    Given I'm not signed in
    And I'm in the "Home" page

  Scenario: Map appears

    Then the map should be visible

  Scenario: I can pan the map and set the zoom level

    When I pan the map to coordinate 0.0,0.0
    And I set the map's zoom level to 21
    Then the map's position should be 0.0,0.0
    And the map's zoom level should be 21
    And there should be no markers on the map

  Scenario: I can see markers on the map

    When I pan the map to coordinate 51.50074024814782,-0.12462138540541917
    And I set the map's zoom level to 12
    Then there should be markers on the map

  Scenario: Marker Test
    When I pan the map to coordinate 51.50074024814782,-0.12462138540541917
    And I set the map's zoom level to 12
    And there should be markers on the map
    And I position the map over a random marker
    And I click the center of the map
    And the callout should open
    Then the callout title is displayed
    And the callout header details is displayed

  Scenario: Open Car Park callout
    When I click on the data layer icon
    And I click the "Driver information" option on the list
    Then the "Car parks" option is "displayed" on the layers-menu
    When I disable all layers
    And I pan the map to coordinate 51.449465049715684,-2.60214376
    And I set the map's zoom level to 19
    And I enable the "UTMC_R_CAR_PARKS" geoserver layer
    And I click the center of the map
    And the callout should open
    Then the callout title is displayed

  # Scenario: Test against address
  #   When I pan the map to address "7 Ashtree Close, Bromley, Orpington, BR6 7FH"
  #   Then the map should be centered on "7 Ashtree Close, Bromley, Orpington, BR6 7FH"
  #   And I set the map's zoom level to 20
  #   Then there should be markers on the map
