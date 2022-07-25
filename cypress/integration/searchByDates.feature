Feature: Searching by Date

  The user can search by current date up to 12 months.

  Background: Anonymous user opens the Home page

    Given I'm not signed in
    And I'm in the "Home" page

    Scenario: Next Two weeks - City Search returns as first result
    When I click on the search box to select dates
    And I click the date search "twoweeks" option on the list
    And I click in the search item text box to type
    And I type in the search box a location "London"
    And I select item "London" from the dropdown list
    And I pan the map to address "London"
    Then the map should be centered on "London"

    Scenario: Next Three months - City Search returns as first result
    When I click on the search box to select dates
    And I click the date search "threemonths" option on the list
    And I click the Sign in button
    And I input "DuffyS" credentials and sign in
    Then I should be in the "TM" page
    And I should be signed in as "DuffyS"
    And I click the date search "threemonths" option on the list
    And I click in the search item text box to type
    And I type in the search box a location "London"
    When I select item "London" from the dropdown list
    Then after the Login the map should be centered on "London"

  Scenario: Today - City Search returns as first result
    When I click on the search box to select dates
    And I click the date search "today" option on the list
    And I click in the search item text box to type
    And I type in the search box a location "London"
    And "Londonderry Derry" is displayed on the dropdown list
    And "229 London Road, Stoke-on-Trent, ST4 5AA" is displayed on the dropdown list
    And "Londonthorpe and Harrowby Without Parish, Lincolnshire" is displayed on the dropdown list
    And "London Street, Leek, ST13" is displayed on the dropdown list
    And I select item "Londonderry Derry" from the dropdown list
    And I pan the map to address "Londonderry Derry"
    Then the map should be centered on "Londonderry Derry"

   Scenario: Today - Address Search returns as first result
    When I click on the search box to select dates
    And I click the date search "today" option on the list
    And I click in the search item text box to type
    And I type in the search box a location "20 Farringdon Street, Blackfriars, London, EC4A 4AB"
    And I select item "20 Farringdon Street, Blackfriars, London, EC4A 4AB" from the dropdown list
    And I pan the map to address "20 Farringdon Street, Blackfriars, London, EC4A 4AB"
    And the map should be centered on "20 Farringdon Street, Blackfriars, London, EC4A 4AB"

    Scenario: Today - Post code Search returns as first result
    When I click on the search box to select dates
    And I click the date search "today" option on the list
    And I click in the search item text box to type
    And I type in the search box a location "OX29 9PS"
    Then "Fordwells, Witney, OX29" is displayed on the dropdown list
    When I select item "Fordwells, Witney, OX29" from the dropdown list
    And I pan the map to address "Fordwells, Witney, OX29"
    Then the map should be centered on "Fordwells, Witney, OX29"

    Scenario: Autocomplete shows for search locations - First 3 numbers
    When I click on the search box to select dates
    And I click the date search "today" option on the list
    When I click in the search item text box to type
    And I type in the search box a location "LON"
    Then "Londonderry Derry" is displayed on the dropdown list
    And "Long Row" is displayed on the dropdown list
    And "Long Lane" is displayed on the dropdown list


Scenario: No results found for search locations - several numeric characters
    When I click on the search box to select dates
    And I click the date search "today" option on the list
    And I click in the search item text box to type
    And I type in the search box a location "3456238234"
    Then "No results found" is displayed on the dropdown list

  Scenario: No results found for search locations - several special characters
    When I click on the search box to select dates
    And I click the date search "today" option on the list
    And I click in the search item text box to type
    And I type in the search box a location "~ ! @ # $ % ^ & ` | :  ⁄ - +)"
    Then "No results found" is displayed on the dropdown list


  Scenario: No results found for search locations - several alphanumeric characters
    When I click on the search box to select dates
    And I click the date search "today" option on the list
    And I click in the search item text box to type
    And I type in the search box a location "ac23r4e"
    Then "No results found" is displayed on the dropdown list



  Scenario: No results found for search locations - several special characters
    When I click on the search box to select dates
    And I click the date search "today" option on the list
    And I click in the search item text box to type
    And I type in the search box a location "~ ! @ # \$ % ^ & ` | \ :  ⁄ - +)"
    Then "No results found" is displayed on the dropdown list

 Scenario: Next Two weeks search
    When I click on the search box to select dates
    And I click the date search "twoweeks" option on the list
    Then the signin window is "not displayed" on the map

   Scenario: Next Two weeks - Address Search returns as first result
    When I click on the search box to select dates
    And I click the date search "twoweeks" option on the list
    And I click in the search item text box to type
    And I type in the search box a location "20 Farringdon Street, Blackfriars, London, EC4A 4AB"
    And I select item "20 Farringdon Street, Blackfriars, London, EC4A 4AB" from the dropdown list
    And I pan the map to address "20 Farringdon Street, Blackfriars, London, EC4A 4AB"
    Then the map should be centered on "20 Farringdon Street, Blackfriars, London, EC4A 4AB"

    Scenario: Next Two weeks - Post code Search returns as first result
    When I click on the search box to select dates
    And I click the date search "twoweeks" option on the list
    And I click in the search item text box to type
    And I type in the search box a location "OX29 9PS"
    And the first result is "Fordwells, Witney, OX29"
    And I select item "Fordwells, Witney, OX29" from the dropdown list
    And I pan the map to address "Fordwells, Witney, OX29"
    Then the map should be centered on "Fordwells, Witney, OX29"

  Scenario: Next Three months search
    When I click on the search box to select dates
    And I click the date search "threemonths" option on the list
    And I click the Sign in button
    And I input "DuffyS" credentials and sign in
    Then I should be in the "TM" page
    And I should be signed in as "DuffyS"

    Scenario: Next Three months - Address Search returns as first result
    When I click on the search box to select dates
    And I click the date search "threemonths" option on the list
    And I click the Sign in button
    And I input "DuffyS" credentials and sign in
    Then I should be in the "TM" page
    And I should be signed in as "DuffyS"
    And I click the date search "threemonths" option on the list
    When I click in the search item text box to type
    And I type in the search box a location "20 Farringdon Street, Blackfriars, London, EC4A 4AB"
    And I select item "20 Farringdon Street, Blackfriars, London, EC4A 4AB" from the dropdown list
    And I pan the map to address "20 Farringdon Street, Blackfriars, London, EC4A 4AB"
   Then the map should be centered on "20 Farringdon Street, Blackfriars, London, EC4A 4AB"

    # Scenario: Next Three months - Post code Search returns as first result
    # When I click on the search box to select dates
    # And I click the date search "threemonths" option on the list
    # And I click the Sign in button
    # And I input "DuffyS" credentials and sign in
    # Then I should be in the "TM" page
    # And I should be signed in as "DuffyS"
    # When I click in the search item text box to type
    # And I type in the search box a location "OX29 9PS"
    # And the first result is "Fordwells, Witney, OX29"
    # And I select item "Fordwells, Witney, OX29" from the dropdown list
    # And I pan the map to address "Fordwells, Witney, OX29"
    # Then the map should be centered on "Fordwells, Witney, OX29"


  # Scenario: Next Twelve months search - City Search returns as first result
  #   When I click on the search box to select dates
  #   And I click the date search "twelvemonths" option on the list
  #   And I click the Sign in button
  #   And I input "DuffyS" credentials and sign in
  #   Then I should be in the "TM" page
  #   And I should be signed in as "DuffyS"

    Scenario: Next Three months - Address Search returns as first result
    When I click on the search box to select dates
    And I click the date search "threemonths" option on the list
    And I click the Sign in button
    And I input "DuffyS" credentials and sign in
    Then I should be in the "TM" page
    And I should be signed in as "DuffyS"
    When I click in the search item text box to type
    And I type in the search box a location "20 Farringdon Street, Blackfriars, London, EC4A 4AB"
    And I select item "20 Farringdon Street, Blackfriars, London, EC4A 4AB" from the dropdown list
    And I pan the map to address "20 Farringdon Street, Blackfriars, London, EC4A 4AB"
    Then the map should be centered on "20 Farringdon Street, Blackfriars, London, EC4A 4AB"

    # Scenario: Next Three months - Post code Search returns as first result
    # When I click on the search box to select dates
    # And I click the date search "threemonths" option on the list
    # And I click the Sign in button
    # And I input "DuffyS" credentials and sign in
    # Then I should be in the "TM" page
    # And I should be signed in as "DuffyS"
    # When I click in the search item text box to type
    # And I type in the search box a location "OX29 9PS"
    # And the first result is "Fordwells, Witney, OX29"
    # And I select item "Fordwells, Witney, OX29" from the dropdown list
    # And I pan the map to address "Fordwells, Witney, OX29"
    # Then the map should be centered on "Fordwells, Witney, OX29"
