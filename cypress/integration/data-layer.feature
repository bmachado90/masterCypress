Feature: Data Layer Default Trigger

  User can toggle any data layers on or off

Background: Open Data Layer
    Given I'm in the "Home" page
    And I'm not signed in
    When I click on the data layer icon


  Scenario: Default Toogle For  COVID_ROAD_CHANGE_LIVE
    And I click the "Covid-19 SafeStart restrictions" option on the list
    Then the "Covid-19 protected route" option is "displayed" on the layers-menu
    And the "COVID_ROAD_CHANGE_LIVE" trigger is "displayed" on the layers-menu

 Scenario: Default Toogle For  COVID_SCHOOL_STREET_LIVE
    And I click the "Covid-19 SafeStart restrictions" option on the list
    Then the "Covid-19 protected route" option is "displayed" on the layers-menu
    And the "COVID_SCHOOL_STREET_LIVE" trigger is "displayed" on the layers-menu


  Scenario: Default Toogle For  Covid-19 data layer
    And I click the "Covid-19 SafeStart restrictions" option on the list
    Then the "Covid-19 protected route" option is "displayed" on the layers-menu
    And the "COVID_TESTING_STATION_LIVE" trigger is "displayed" on the layers-menu


  Scenario: Default Toogle For  COVID_VACCINATION_CENTRE_LIVE
    And I click the "Covid-19 SafeStart restrictions" option on the list
    Then the "Covid-19 protected route" option is "displayed" on the layers-menu
    And the "COVID_VACCINATION_CENTRE_LIVE" trigger is "displayed" on the layers-menu

  Scenario: Default Toogle For  COVID_PROTECTED_ROUTE_LIVE
    And I click the "Covid-19 SafeStart restrictions" option on the list
    Then the "Covid-19 protected route" option is "displayed" on the layers-menu
    And the "COVID_PROTECTED_ROUTE_LIVE" trigger is "displayed" on the layers-menu


  Scenario: Default Toogle For  COVID_ROAD_CHANGE_LIVE
    And I click the "Covid-19 SafeStart restrictions" option on the list
    Then the "Covid-19 protected route" option is "displayed" on the layers-menu
    And the "COVID_ROAD_CHANGE_LIVE" trigger is "displayed" on the layers-menu

 Scenario: Default Toogle For  COVID_SCHOOL_STREET_LIVE
    And I click the "Covid-19 SafeStart restrictions" option on the list
    Then the "Covid-19 protected route" option is "displayed" on the layers-menu
    And the "COVID_SCHOOL_STREET_LIVE" trigger is "displayed" on the layers-menu


  Scenario: Default Toogle For  Covid-19 data layer
    And I click the "Covid-19 SafeStart restrictions" option on the list
    Then the "Covid-19 protected route" option is "displayed" on the layers-menu
    And the "COVID_TESTING_STATION_LIVE" trigger is "displayed" on the layers-menu


  Scenario: Default Toogle For COVID_VACCINATION_CENTRE_LIVE
    And I click the "Covid-19 SafeStart restrictions" option on the list
    Then the "Covid-19 protected route" option is "displayed" on the layers-menu
    And the "COVID_VACCINATION_CENTRE_LIVE" trigger is "displayed" on the layers-menu

Scenario: Default Toogle For Incident Turn On
    And I click the "Live incidents" option on the list
    Then the "Incident" option is "displayed" on the layers-menu
    And the "INCIDENTS_LIVE_INCIDENT" trigger is "displayed" on the layers-menu

  Scenario: Default Toogle For Accident Turn On
    And I click the "Live incidents" option on the list
    Then the "Accident" option is "displayed" on the layers-menu
    And the "INCIDENTS_LIVE_ACCIDENT" trigger is "displayed" on the layers-menu

  Scenario: Default Toogle For Traffic congestion Turn On
    And I click the "Live incidents" option on the list
    Then the "Traffic congestion" option is "displayed" on the layers-menu
    And the "INCIDENTS_LIVE_TRAFFIC_CONGESTION" trigger is "displayed" on the layers-menu

  Scenario: Default Toogle For Health emergency Turn On
    And I click the "Live incidents" option on the list
    Then the "Health emergency" option is "displayed" on the layers-menu
    And the "INCIDENTS_LIVE_HEALTH_EMERGENCY" trigger is "displayed" on the layers-menu

  Scenario: Default Toogle For Life Traffic
    And I click the "Live traffic" option on the list
    Then the Live traffic is displayed

  Scenario: Default Toogle For TM_LAYER_ROADCLOSURE_LIVE
    And I click the "Road closures and diversions" option on the list
    Then the "Road closure" option is "displayed" on the layers-menu
    And the "TM_LAYER_ROADCLOSURE_LIVE" trigger is "displayed" on the layers-menu

  Scenario: Default Toogle For Diversion route
    And I click the "Road closures and diversions" option on the list
   Then the "Diversion route" option is "displayed" on the layers-menu
    And the "TM_LAYER_DIVERSIONROUTE_LIVE" trigger is "displayed" on the layers-menu

  Scenario: Default Toogle For HGV Diversion route
      And I click the "Road closures and diversions" option on the list
  Then the "HGV Diversion route" option is "displayed" on the layers-menu
    And the "TM_LAYER_HGVDIVERSIONROUTE_LIVE" trigger is "displayed" on the layers-menu


  Scenario: Default Toogle For HGV Diversion route
        And I click the "Road closures and diversions" option on the list
Then the "HGV Diversion route" option is "displayed" on the layers-menu
    And the "TM_LAYER_HGVDIVERSIONROUTE_LIVE" trigger is "displayed" on the layers-menu

  Scenario: Default Toogle For Temporary one-way
    And I click the "Road closures and diversions" option on the list
    Then the "Temporary one-way" option is "displayed" on the layers-menu
    And the "TM_LAYER_TEMPORARYONEWAY_LIVE" trigger is "displayed" on the layers-menu

  Scenario: Default Toogle For Bridge closure
    And I click the "Road closures and diversions" option on the list
    Then the "Bridge closure" option is "displayed" on the layers-menu
    And the "TM_LAYER_BRIDGECLOSURE_LIVE" trigger is "displayed" on the layers-menu


# ========== Traffic restrictions =============

  Scenario: Default Toogle For Contraflow
    And I click the "Traffic restrictions" option on the list
    Then the "Contraflow" option is "displayed" on the layers-menu
    And the "TM_LAYER_CONTRAFLOW_LIVE" trigger is "displayed" on the layers-menu

  Scenario: Default Toogle For Lane closure
    And I click the "Traffic restrictions" option on the list
    Then the "Lane closure" option is "displayed" on the layers-menu
    And the "TM_LAYER_LANECLOSURE_LIVE" trigger is "displayed" on the layers-menu

  Scenario: Default Toogle For Footway closure
    And I click the "Traffic restrictions" option on the list
    Then the "Footway closure" option is "displayed" on the layers-menu
    And the "TM_LAYER_FOOTWAYCLOSURE_LIVE" trigger is "displayed" on the layers-menu

  Scenario: Default Toogle For Temporary speed limit
    And I click the "Traffic restrictions" option on the list
    Then the "Temporary speed limit" option is "displayed" on the layers-menu
    And the "TM_LAYER_TEMPORARYSPEEDLIMIT_LIVE" trigger is "displayed" on the layers-menu

  Scenario: Default Toogle For Weight restriction
    And I click the "Traffic restrictions" option on the list
    Then the "Weight restriction" option is "displayed" on the layers-menu
    And the "TM_LAYER_WEIGHTRESTRICTION_LIVE" trigger is "displayed" on the layers-menu

  Scenario: Default Toogle For Suspension of weight restriction
    And I click the "Traffic restrictions" option on the list
    Then the "Suspension of weight restriction" option is "displayed" on the layers-menu
    And the "TM_LAYER_SUSPENSIONWEIGHTRESTRICTION_LIVE" trigger is "displayed" on the layers-menu

  Scenario: Default Toogle For Clearway / no stopping
    And I click the "Traffic restrictions" option on the list
    Then the "Clearway / no stopping" option is "displayed" on the layers-menu
    And the "TM_LAYER_CLEARWAY_LIVE" trigger is "displayed" on the layers-menu

  Scenario: Default Toogle For Tow away zone
    And I click the "Traffic restrictions" option on the list
    Then the "Tow away zone" option is "displayed" on the layers-menu
    And the "TM_LAYER_TOWAWAYZONE_LIVE" trigger is "displayed" on the layers-menu

  Scenario: Default Toogle For Temporary parking restriction
    And I click the "Traffic restrictions" option on the list
    Then the "Temporary parking restriction" option is "displayed" on the layers-menu
    And the "TM_LAYER_TEMPPARKINGRESTRICTION_LIVE" trigger is "displayed" on the layers-menu

  Scenario: Default Toogle For Suspension of parking restriction
    And I click the "Traffic restrictions" option on the list
    Then the "Suspension of parking restriction" option is "displayed" on the layers-menu
    And the "TM_LAYER_SUSPENSIONPARKINGRESTRICTION_LIVE" trigger is "displayed" on the layers-menu

  Scenario: Default Toogle For Suspension of busway
    And I click the "Traffic restrictions" option on the list
    Then the "Suspension of busway" option is "displayed" on the layers-menu
    And the "TM_LAYER_SUSPENSION_BUSWAY_LIVE" trigger is "displayed" on the layers-menu

  Scenario: Default Toogle For Gritting in progress
    And I click the "Traffic restrictions" option on the list
    Then the "Gritting in progress" option is "displayed" on the layers-menu
    And the "TM_LAYER_GRITTING_LIVE" trigger is "displayed" on the layers-menu

  Scenario: Default Toogle For Advisory / preferred access route
    And I click the "Traffic restrictions" option on the list
    Then the "Advisory / preferred access route" option is "displayed" on the layers-menu
    And the "TM_LAYER_PREFERRED_ACCESS_V7_LIVE" trigger is "displayed" on the layers-menu

  Scenario: Default Toogle For Road closure crossing
    And I click the "Traffic restrictions" option on the list
    Then the "Road closure crossing" option is "displayed" on the layers-menu
    And the "TM_LAYER_CLOSURE_CROSSING_LIVE" trigger is "displayed" on the layers-menu

  Scenario: Default Toogle For Road ahead close
    And I click the "Traffic restrictions" option on the list
    #Then the "Road ahead close" option is "displayed" on the layers-menu
    Then the "Road" option is "displayed" on the layers-menu
    And the "TM_LAYER_ROADAHEADCLOSED_LIVE" trigger is "displayed" on the layers-menu

  Scenario: Default Toogle For No vehicle access
    And I click the "Traffic restrictions" option on the list
    Then the "No vehicle access" option is "displayed" on the layers-menu
    And the "TM_LAYER_NOVEHICLEACCESS_LIVE" trigger is "displayed" on the layers-menu

  Scenario: Default Toogle For No right turn
    And I click the "Traffic restrictions" option on the list
    Then the "No right turn" option is "displayed" on the layers-menu
    And the "TM_LAYER_NORIGHTTURN_LIVE" trigger is "displayed" on the layers-menu

  Scenario: Default Toogle For No left turn
    And I click the "Traffic restrictions" option on the list
    Then the "No left turn" option is "displayed" on the layers-menu
    And the "TM_LAYER_NOLEFTTURN_LIVE" trigger is "displayed" on the layers-menu

  Scenario: Default Toogle For No U-turn
    And I click the "Traffic restrictions" option on the list
    Then the "No U-turn" option is "displayed" on the layers-menu
    And the "TM_LAYER_NOUTURN_LIVE" trigger is "displayed" on the layers-menu

  Scenario: Default Toogle For Emergency access route
    And I click the "Traffic restrictions" option on the list
    Then the "Emergency access route" option is "displayed" on the layers-menu
    And the "TM_LAYER_EMERGENCY_ACCESS_ROUTE_LIVE" trigger is "displayed" on the layers-menu

  Scenario: Default Toogle For Access only
    And I click the "Traffic restrictions" option on the list
    Then the "Access only" option is "displayed" on the layers-menu
    And the "TM_LAYER_ACCESS_ONLY_LIVE" trigger is "displayed" on the layers-menu

  Scenario: Default Toogle For Cycle lane
    And I click the "Traffic restrictions" option on the list
    Then the "Cycle lane" option is "displayed" on the layers-menu
    And the "TM_LAYER_CYCLE_LANE_LIVE" trigger is "displayed" on the layers-menu

  Scenario: Default Toogle For Pedestrian zone
    And I click the "Traffic restrictions" option on the list
    Then the "Pedestrian zone" option is "displayed" on the layers-menu
    And the "TM_LAYER_PEDESTRIAN_ZONE_LIVE" trigger is "displayed" on the layers-menu

  Scenario: Default Toogle For Widened footpath
    And I click the "Traffic restrictions" option on the list
    Then the "Widened footpath" option is "displayed" on the layers-menu
    And the "TM_LAYER_WIDENED_FOOTPATH_LIVE" trigger is "displayed" on the layers-menu

  Scenario: Default Toogle For Suspension of one-way
    And I click the "Traffic restrictions" option on the list
    Then the "Suspension of one-way" option is "displayed" on the layers-menu
    And the "TM_LAYER_SUSPENSIONONEWAY_LIVE" trigger is "displayed" on the layers-menu

  Scenario: Default Toogle For Reversal of one-way
    And I click the "Traffic restrictions" option on the list
    Then the "Reversal of one-way" option is "displayed" on the layers-menu
    And the "TM_LAYER_REVERSALONEWAY_LIVE" trigger is "displayed" on the layers-menu

  Scenario: Default Toogle For Two-way traffic signals
    And I click the "Traffic restrictions" option on the list
    Then the "Two-way traffic signals" option is "displayed" on the layers-menu
    And the "TM_LAYER_TWOWAYSIGNALS_LIVE" trigger is "displayed" on the layers-menu

  Scenario: Default Toogle For Multi-way traffic signals
    And I click the "Traffic restrictions" option on the list
    Then the "Multi-way traffic signals" option is "displayed" on the layers-menu
    And the "TM_LAYER_MULTIWAYSIGNALS_LIVE" trigger is "displayed" on the layers-menu

  Scenario: Default Toogle For Stop and go
    And I click the "Traffic restrictions" option on the list
    Then the "Stop and go" option is "displayed" on the layers-menu
    And the "TM_LAYER_STOPANDGO_LIVE" trigger is "displayed" on the layers-menu

  Scenario: Default Toogle For Give and take
    And I click the "Traffic restrictions" option on the list
    Then the "Give and take" option is "displayed" on the layers-menu
    And the "TM_LAYER_GIVEANDTAKE_LIVE" trigger is "displayed" on the layers-menu

  Scenario: Default Toogle For Priority signs
    And I click the "Traffic restrictions" option on the list
    Then the "Priority signs" option is "displayed" on the layers-menu
    And the "TM_LAYER_PRIORITYSIGNS_LIVE" trigger is "displayed" on the layers-menu

  Scenario: Default Toogle For Convoy working
    And I click the "Traffic restrictions" option on the list
    Then the "Convoy working" option is "displayed" on the layers-menu
    And the "TM_LAYER_CONVOYWORKING_LIVE" trigger is "displayed" on the layers-menu

  Scenario: Default Toogle For Works stop
    And I click the "Traffic restrictions" option on the list
    Then the "Works stop" option is "displayed" on the layers-menu
    And the "TM_LAYER_WORKSSTOP_LIVE" trigger is "displayed" on the layers-menu






# =========== Roadworks ================

  Scenario: Default Toogle For Roadworks
    And I click the "Roadworks" option on the list
    Then the "Roadworks" option is "displayed" on the layers-menu
    And the "ROADWORKS_CURRENT" trigger is "displayed" on the layers-menu




# =========== Weather ================

  Scenario: Default Toogle For Flood
    And I click the "Weather" option on the list
    Then the "Flood" option is "displayed" on the layers-menu
    And the "INCIDENTS_LIVE_FLOOD" trigger is "not displayed" on the layers-menu

  Scenario: Default Toogle For Landslip
    And I click the "Weather" option on the list
    Then the "Landslip" option is "displayed" on the layers-menu
    And the "INCIDENTS_LIVE_LANDSLIP" trigger is "not displayed" on the layers-menu

  Scenario: Default Toogle For Weather incident
    And I click the "Weather" option on the list
    Then the "Weather incident" option is "displayed" on the layers-menu
    And the "INCIDENTS_LIVE_WEATHER" trigger is "not displayed" on the layers-menu






# =========== Public events ================

  Scenario: Default Toogle For Cycling
    And I click the "Public events" option on the list
    Then the "Cycling" option is "displayed" on the layers-menu
    And the "TM_LAYER_ENTITY_CYCLING_LIVE" trigger is "displayed" on the layers-menu

  Scenario: Default Toogle For Football
    And I click the "Public events" option on the list
    Then the "Football" option is "displayed" on the layers-menu
    And the "TM_LAYER_ENTITY_FOOTBALL_LIVE" trigger is "displayed" on the layers-menu

  Scenario: Default Toogle For Horse racing
    And I click the "Public events" option on the list
    Then the "Horse racing" option is "displayed" on the layers-menu
    And the "TM_LAYER_ENTITY_HORSE_RACING_LIVE" trigger is "displayed" on the layers-menu

  Scenario: Default Toogle For Motor sport event
    And I click the "Public events" option on the list
    Then the "Motor sport event" option is "displayed" on the layers-menu
    And the "TM_LAYER_ENTITY_MOTOR_SPORT_EVENT_LIVE" trigger is "displayed" on the layers-menu

  Scenario: Default Toogle For Rugby
    And I click the "Public events" option on the list
    Then the "Rugby" option is "displayed" on the layers-menu
    And the "TM_LAYER_ENTITY_RUGBY_LIVE" trigger is "displayed" on the layers-menu

  Scenario: Default Toogle For Running
    And I click the "Public events" option on the list
    Then the "Running" option is "displayed" on the layers-menu
    And the "TM_LAYER_ENTITY_RUNNING_LIVE" trigger is "displayed" on the layers-menu

  Scenario: Default Toogle For Sport event
    And I click the "Public events" option on the list
    Then the "Sport event" option is "displayed" on the layers-menu
    And the "TM_LAYER_ENTITY_SPORT_EVENT_LIVE" trigger is "displayed" on the layers-menu

  Scenario: Default Toogle For Carnival / parade / street party
    And I click the "Public events" option on the list
    Then the "Carnival / parade / street party" option is "displayed" on the layers-menu
    And the "TM_LAYER_ENTITY_CARNIVAL_PARADE_STREET_LIVE" trigger is "displayed" on the layers-menu

  Scenario: Default Toogle For Polling station
    And I click the "Public events" option on the list
    Then the "Polling station" option is "displayed" on the layers-menu
    And the "TM_LAYER_ENTITY_POLLING_STATION_LIVE" trigger is "displayed" on the layers-menu

  Scenario: Default Toogle For Agricultural show
    And I click the "Public events" option on the list
    Then the "Agricultural show" option is "displayed" on the layers-menu
    And the "TM_LAYER_ENTITY_AGRICULTURAL_SHOW_LIVE" trigger is "displayed" on the layers-menu

  Scenario: Default Toogle For Air show
    And I click the "Public events" option on the list
    Then the "Air show" option is "displayed" on the layers-menu
    And the "TM_LAYER_ENTITY_AIR_SHOW_LIVE" trigger is "displayed" on the layers-menu

  Scenario: Default Toogle For Remembrance parade
    And I click the "Public events" option on the list
    Then the "Remembrance parade" option is "displayed" on the layers-menu
    And the "TM_LAYER_ENTITY_REMEMBRANCE_PARADE_LIVE" trigger is "displayed" on the layers-menu

  Scenario: Default Toogle For Christmas event
    And I click the "Public events" option on the list
    Then the "Christmas event" option is "displayed" on the layers-menu
    And the "TM_LAYER_ENTITY_CHRISTMAS_EVENT_LIVE" trigger is "displayed" on the layers-menu

  Scenario: Default Toogle For Entertainment event
    And I click the "Public events" option on the list
    Then the "Entertainment event" option is "displayed" on the layers-menu
    And the "TM_LAYER_ENTITY_ENTERTAINMENT_EVENT_LIVE" trigger is "displayed" on the layers-menu

  Scenario: Default Toogle For Festival
    And I click the "Public events" option on the list
    Then the "Festival" option is "displayed" on the layers-menu
    And the "TM_LAYER_ENTITY_FESTIVAL_LIVE" trigger is "displayed" on the layers-menu

  Scenario: Default Toogle For Filming
    And I click the "Public events" option on the list
    Then the "Filming" option is "displayed" on the layers-menu
    And the "TM_LAYER_ENTITY_FILMING_LIVE" trigger is "displayed" on the layers-menu

  Scenario: Default Toogle For Market
    And I click the "Public events" option on the list
    Then the "Market" option is "displayed" on the layers-menu
    And the "TM_LAYER_ENTITY_MARKET_LIVE" trigger is "displayed" on the layers-menu

  Scenario: Default Toogle For Cruise ship
    And I click the "Public events" option on the list
    Then the "Cruise ship" option is "displayed" on the layers-menu
    And the "TM_LAYER_ENTITY_CRUISE_SHIP_LIVE" trigger is "displayed" on the layers-menu

  Scenario: Default Toogle For Funeral
    And I click the "Public events" option on the list
    Then the "Funeral" option is "displayed" on the layers-menu
    And the "TM_LAYER_ENTITY_FUNERAL_LIVE" trigger is "displayed" on the layers-menu

  Scenario: Default Toogle For Other
    And I click the "Public events" option on the list
    Then the "Other" option is "displayed" on the layers-menu
    And the "TM_LAYER_ENTITY_OTHER_PUBLIC_EVENTS_LIVE" trigger is "displayed" on the layers-menu



# =========== Driver information ================

  Scenario: Default Toogle For Traffic information signs
    And I click the "Driver information" option on the list
    Then the "Traffic information signs" option is "displayed" on the layers-menu
    And the "UTMC_R_VMS" trigger is "not displayed" on the layers-menu

  Scenario: Default Toogle For Traffic cameras
    And I click the "Driver information" option on the list
    Then the "Traffic cameras" option is "displayed" on the layers-menu
    And the "UTMC_R_CCTV_CAMERAS" trigger is "not displayed" on the layers-menu

  Scenario: Default Toogle For Car parks
    And I click the "Driver information" option on the list
    Then the "Car parks" option is "displayed" on the layers-menu
    And the "UTMC_R_CAR_PARKS" trigger is "not displayed" on the layers-menu

  Scenario: Default Toogle For Winter gritting routes
    And I click the "Driver information" option on the list
    Then the "Winter gritting routes" option is "displayed" on the layers-menu
    And the "SALTING_V7_WGS84_PUBLIC" trigger is "not displayed" on the layers-menu




# =========== Public transport ================

  Scenario: Default Toogle For Bus stop
    And I click the "Public transport" option on the list
    Then the "Bus stop" option is "displayed" on the layers-menu
    And the "BUS_STOPS_PLACR" trigger is "not displayed" on the layers-menu

  Scenario: Default Toogle For Train station
    And I click the "Public transport" option on the list
    Then the "Train station" option is "displayed" on the layers-menu
    And the "TRAIN_STATIONS_PLACR" trigger is "not displayed" on the layers-menu

  Scenario: Default Toogle For Tube station
    And I click the "Public transport" option on the list
    Then the "Tube station" option is "displayed" on the layers-menu
    And the "TUBE_STATIONS_PLACR" trigger is "not displayed" on the layers-menu





# =========== Operational info ================

  Scenario: Default Toogle For Highway Authorities
    And I click the "Operational info" option on the list
    Then the "Highway Authorities" layername is "displayed" on the layers-menu
    And the "LA_Boundary_v7_grp" trigger is "not displayed" on the layers-menu

  Scenario: Default Toogle For District Authorities
    And I click the "Operational info" option on the list
    Then the "District Authorities" layername is "displayed" on the layers-menu
    And the "District_Boundary_v7_grp" trigger is "not displayed" on the layers-menu

  Scenario: Default Toogle For District Authorities
    And I click the "Operational info" option on the list
    Then the "District Authorities" layername is "displayed" on the layers-menu
    And the "District_Boundary_v7_grp" trigger is "not displayed" on the layers-menu

# =========== Operational info => Boundary Layer ================
#TODO


# =========== Operational info => Others ================

  Scenario: Default Toogle For Bridges and restrictions
    And I click the "Operational info" option on the list
    #And I click the "Other" option on the list
    Then the "Bridges and restrictions" option is "displayed" on the layers-menu
    And the "BRIDGE_RESTRICTIONS_V7_PUBLIC" trigger is "not displayed" on the layers-menu

  Scenario: Default Toogle For Traffic signals
    And I click the "Operational info" option on the list
   # And I click the "Other" option on the list
    Then the "Traffic signals" option is "displayed" on the layers-menu
    And the "TRAFFICLIGHTS_V7" trigger is "not displayed" on the layers-menu

  Scenario: Default Toogle For Forward Planning roadworks
     And I click the "Operational info" option on the list
   # And I click the "Other" option on the list
    Then the "Forward Planning roadworks" option is "displayed" on the layers-menu
    And the "FORWARD_PLANNING_WGS84_PUBLIC" trigger is "not displayed" on the layers-menu

  Scenario: Default Toogle For Restrictions: S58s & S85s
    And I click the "Operational info" option on the list
    #And I click the "Other" option on the list
    Then the "Restrictions: S58s & S85s" option is "displayed" on the layers-menu
    And the "RESTRICTIONS_WGS84_PUBLIC" trigger is "not displayed" on the layers-menu

  Scenario: Default Toogle For Lane Rental Scheme network
    And I click the "Operational info" option on the list
   # And I click the "Other" option on the list
    Then the "Lane Rental Scheme network" option is "displayed" on the layers-menu
    And the "NSG_STREET_KENT_LRS_WGS84" trigger is "not displayed" on the layers-menu

  Scenario: Default Toogle For Priority Routes
     And I click the "Operational info" option on the list
  # And I click the "Other" option on the list
    Then the "Priority Routes" option is "displayed" on the layers-menu
    And the "ESSEX_V7_PROPRITY_ROUTES_PUBLIC" trigger is "not displayed" on the layers-menu
