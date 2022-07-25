Feature: Traffic Management

Background:
  Given I'm in the "Sign in" page
   When I input "DuffyS" credentials and sign in
    And I should be in the "TM" page
    And I should be signed in as "DuffyS"

Scenario:  C1096 -A user can create a plan with current/future dates
  When I click on Create a New Plan
    Then the Step 1 page is visible
      And I fill step 1 info
      And I Set the start and end date in the future
       And I add an item on step2
       And i Check to share icons
       And I Save the plan
       And I Publish the plan
     Then i click on Share link
       And i click on Home
        And i search the plan
        And i delete the plan

Scenario:  C26 - User can create a new group
  When I click on Create a New Group
    Then group page is visible
      And I fill group page info
      And I click in the search item text box to type
      And I type in the search box a location "Mellor, Blackburn"
      And I select item "Mellor, Blackburn" from the dropdown list
      And I set the map's zoom level to 19
      And Pan over an area where TM Plans don't exist.
      And I clean the search box a location
      And I type in the search box a location "129017892"
      And I select item "Works ref: undefined" from the dropdown list
      And Pan over an area whete TM Plans exist
      And I Select the TM Plan to add to the group.
      And I Click on the ellipsis within the TM Plan.
      And I Save the Group
    Then i click on Document Button
      And i edit document info
      And I Save the Group
    #Then i remove the document
    #  And I Save the Group
    Then i Create a new email alert
      And i fill the email
      And I Save the Group
      And i click on Home
    Then I search a Plan
      And i add the plan to the group

# Scenario:  C5083 - End a TM Plan through the plan's list
#    When I search for a Plan
#     Then I End the plan "3"
#       And I click on Desmiss
#       And I End the plan "3"
#       And i Define the close date and confirm
#     Then i search for Expired plans
#       And i click on the plan expired
#       And i click on Home
#     Then I search for a new Plan
#       And I End the plan "4"
#       And I confirm End plan now
#     Then i search for Expired plans
#       And the plan is present

  Scenario: C28 - User can create new TM Plan with point location (step 1)
   When I click on Create a New Plan
    Then the Step 1 page is visible
      And I fill step 1 complete info with plan name "C28"
      And I check categoryList
      And i choose expand impact
      And I plot location
      And i check that "Remove location" button is visible
      And i Change the Category Marker to a Streetwork category.
      And i enter a description
      And I Mouseover Link to works
      #And I Select Link to works and choose a reference
      And I Add an Enforcement pattern.
      And I Add the Plan to an existing Group.
      And I Click on the group ellipsis.
      And I Save the current plan
      And i click on Home
      And I find the Plan "C28"


  Scenario: C4360 - Incidents
   When I click on Create a New Plan
    Then i create a standard "Incident" category plan with name "C4360" and Zoom level 21
      And I Save the current plan
      And i click on Home

  Scenario: C4361 - Weather
   When I click on Create a New Plan
   Then I click in the search item text box to type
      And I type in the search box a location "London"
      And I select item "London" from the dropdown list
    Then i create a standard "Flood" category plan with name "C4361" and Zoom level 21
      And I Save the current plan
      And i click on Home

  Scenario: C4044 - User can create an emergency closure
    When I click on Create a New Plan
    Then I click in the search item text box to type
      And I type in the search box a location "Avro Way"
      And I select item "Avro Way" from the dropdown list
    Then i create a standard "Streetworks" category plan with name "C4361" and Zoom level 21
      And I select this an emergency option
      And I nagivate to Step 2
      And I add an "Road closure" in step2 "31"
      And I fill road closure info
      And i navigate to step3
      And I Publish the plan
      And I tick Is Covid-19 related.
      And I Save the current plan
      And i click on Home

  Scenario: C24 - User can Publish TM Plan to one.network (Step 3)
     When I click on Create a New Plan
     Then I click in the search item text box to type
      And I type in the search box a location "Stratford-upon-Avon"
      And I select item "Stratford-upon-Avon" from the dropdown list
    Then i create a standard "Streetworks" category plan with name "C24" and Zoom level 21
      And I click on step3 tab
      And I Tick on Publish
      And I go to Step 1 and change the dates for "01/06/2023"
      And I click on step3 tab
      And I Tick Custom on The Publish option
      And I go to Step 1 and change the dates for "22/06/2022"
      And I click on step3 tab
      And I check the Publish
      And I go to Step 1 and change the dates for "23/06/2022"
      And I click on step3 tab
      And I choose Publish and Custom value "1"
      And I choose Publish and Custom value "8"
      And I Save the current plan
      And I click on step3 tab
      And I choose Publish and Custom value "500"
      And I choose Publish and Custom value "/(««'"
      And I choose Publish and Custom value "ABC"
      And I Tick on Publish
      And I Tick on Publish
      And I Save the current plan

  Scenario: C300 - Change the end date of a plan with an enforcement pattern that has today's date
     When I click on Create a New Plan
      And I type in the search box a location "Milton Keynes"
      And I select item "Milton Keynes" from the dropdown list
    Then i create a standard "Streetworks" category plan with name "C300" and Zoom level 21
      And I choose Expected impact as "Delays possible"
      And I Add an Enforcement pattern.
      And I Save the current plan
      And I Change the end date of the plan for "28/05/2023"
      And I Save the current plan
      And I click on step3 tab
      And I Tick on Publish
      And I Save the current plan

  Scenario: C23 -User can search and edit TM Plans
    When I click on Search
      And I Click on the arrow of the Search box and then close item
      And I click on Main Filters and close it
      And I click on Date filters and close it
      And I search plan by username "duffys"
      And I download csv file
      And I reset the search
    Then I search plan by planId "129017892"
      And I click on the plan
      And i click on Home
      And I click on Search
      And I Click on the ellipsis.
      And I reset the search
    Then I search by Search By UserName and Incident and Current
      And I reset the search
      And I search by Search By UserName and Streetwork and Current
      And I reset the search
      And I search by Search By UserName and Public Event and Current
      And I reset the search
      And I search by Search By UserName and Read only categories and Planned plans
      And I reset the search
      And I search by Search By Plan name and Streetworks and Planned plans
      And I reset the search
      And I Mouseover the link icon
      And I click on the ellipsis and on "View".
      And i click on Home
      And I click on Search
      And I search by Search By UserName and Deleted and Expired
      And I click on the ellipsis of an Expired plan and then on View
      And i click on Home
      And I click on Search
      And I reset the search

  Scenario: C497 - User can delete a Group
    When i create a standard group with name "Automatic Group"
      And i click on Home
      Then I click on Search
        And i choose Group option
        And I input "duffys" search username
        And I click on Group Search
        And I Click on group ellipsis
      Then I click on Delete Group
        #And I click on Cancel
      #Then I click on Delete Group
        And I click on Confirm
      Then i click on Home
        And I click on Search
        And I reset the Group search
        And i choose Group option
        And I tick Expired group search
        And i enter a deleted group

  Scenario: C1860 - Searching for works ref via data picker
   When I click in the search item text box to type
    Then I type in the search box a location "FM05908827428"
      And I select item "FM05908827428" from the dropdown list
      And the callout should open
    Then I click in the search item text box to type
      And I type in the search box a location "C8001HERT-HH-344"
      And I select item "C8001HERT-HH-344" from the dropdown list
      And the callout should open
    Then I click in the search item text box to type
      And I type in the search box a location "FM301BR6401000271390"
      And I select item "FM301BR6401000271390" from the dropdown list
      And the callout should open

