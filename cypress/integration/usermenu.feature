Feature: User Menu

Modules that the user has access to is available for selection.

Background:
Given I'm in the "Sign in" page

Scenario: Sign in Menu
When I input "DuffyS" credentials and sign in
Then I should be in the "TM" page
And I should be signed in as "DuffyS"
Then my account is "displayed" in the menu
When I click on user menu
Then change password is "displayed" in the menu
And alert is "displayed" in the menu
And user management is "displayed" in the menu
And sign out is "displayed" in the menu

Scenario: Account Settings - modules available
When I input "DuffyS" credentials and sign in
Then I should be in the "TM" page
And I should be signed in as "DuffyS"
Then my account is "displayed" in the menu
When I click on user menu
When I click on My Account
Then the account settings fields should be active
And the discard button should be enabled
And the save button should be enabled
When I click on the Select default Module
Then the Reports module is displayed
And the Route Monitor module is displayed
And the Traffic Management module is displayed

Scenario: Account Settings - Route Manager
When I input hcd "hcd_user" credentials and sign in
Then I should be signed in as "hcd_user"
Then the Route Manager module is displayed
And the Public Map module is displayed
And the Traffic Management module is displayed on the modules list
And the Cash and Coordination module is displayed
And the Route Monitor module is not enabled
And the Report module is not enabled
And the Content Management module is not enabled
And the Works Planning module is not enabled

Scenario: Password Management
When I input "DuffyS" credentials and sign in
Then I should be in the "TM" page
And I should be signed in as "DuffyS"
Then my account is "displayed" in the menu
When I click on user menu
And I click on Change Password
And I can enter email address
Then the request email button is enabled

Scenario: Account Settings - Route Manager
 When I input hcd "hcd_user" credentials and sign in
 Then I should be signed in as "hcd_user"
 Then the Route Manager module is displayed
 And the Public Map module is displayed
And the Traffic Management module is displayed on the modules list
 And the Cash and Coordination module is displayed
 And the Route Monitor module is not enabled
 And the Report module is not enabled
 And the Content Management module is not enabled
 And the Works Planning module is not enabled


 Scenario: Password Management
 When I input "DuffyS" credentials and sign in
 Then I should be in the "TM" page
 And I should be signed in as "DuffyS"
 Then my account is "displayed" in the menu
 When I click on user menu
 And I click on Change Password
 And I can enter email address
 Then the request email button is enabled

 Scenario: User Alert
 When I input "DuffyS" credentials and sign in
 Then I should be in the "TM" page
 And I should be signed in as "DuffyS"
 Then my account is "displayed" in the menu
 When I click on user menu
 Then I click on Alerts
 And I can view email settings
 And the public events is checked
 And the roadworks is checked
 And the frequency option daily is checked
 And the frequency option weekly is unchecked
 Then the frequency option monthlies is unchecked
 Then Reset button is available
 Then Set alert button is available
