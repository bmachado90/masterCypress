Feature: Base Map option

  User switch witch base map he pretends

Background: Open Data Layer
    Given I'm in the "Home" page
    And I'm not signed in
    When I click on the data layer icon


  Scenario: Base Map Road
    Then the "Road" option is "displayed" on the layers-menu
     And the "Road" icon is "displayed" on the layers-menu
     And the "ons-map-type-road" base map trigger is "displayed" on the layers-menu

  Scenario: Base Map Satellite
    Then the "Satellite" option is "not displayed" on the layers-menu
     And the "Satellite" icon is "displayed" on the layers-menu
     And the "ons-map-type-satellite" base map trigger is "displayed" on the layers-menu

  Scenario: Base Map Terrain
    Then the "Terrain" option is "not displayed" on the layers-menu
     And the "Terrain" icon is "displayed" on the layers-menu
     And the "ons-map-type-terrain" base map trigger is "displayed" on the layers-menu


  Scenario: Base Map OpenStreetMap
    Then the "OpenStreetMap" option is "not displayed" on the layers-menu
     And the "OpenStreetMap" icon is "displayed" on the layers-menu
     And the "ons-map-type-osm" base map trigger is "displayed" on the layers-menu

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



