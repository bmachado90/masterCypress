Feature: User Management

User Management and permissions

Background:
Given I'm in the "Sign in" page
When I input "DuffyS" credentials and sign in
And I should be in the "TM" page
And I should be signed in as "DuffyS"
And I click on user menu
And I click on user management

Scenario: Active user unable to change email from user management panel
And I select any active user and open
Then email field is blocked
And I close user information panel

Scenario: Inactive user unable to change email from user management panel
And I select any inactive user and open
Then email field is blocked
And I close user information panel

Scenario: Pending user unable to change email from user management panel
And I select any pending user and open
Then email field is blocked
And I close user information panel

Scenario: Create New User and Discard
Then user management page is displayed
When I click on Add button
Then the form opens up
When I fill in First Name
And I fill in Last Name
And I fill in email
And I select user role
And I click on discard button
Then the form should be closed
When I click on Add button
Then the form should be empty

Scenario: Active user unable to change email from user management panel
And I select any active user and open
Then email field is blocked
And I close user information panel

Scenario: Inactive user unable to change email from user management panel
And I select any inactive user and open
Then email field is blocked
And I close user information panel

Scenario: Pending user unable to change email from user management panel
And I select any pending user and open
Then email field is blocked
And I close user information panel

#running scenarios below could remove business users account. Tests should only run in non-prod environment
#Scenario:  Deactive Account
#And I click Action dropdown to select deactivate
#And I click deactivate account
#And I click confirm
#And I click save to save the changes
#Then a notification is displayed
#And I click to close user information panel

#Scenario:  Activate Account
#And I click account is active to activate users account
#And I click save to save the changes
#Then a notification is displayed
#And I click to close user information panel


#Scenario: Add a role to active user
#When I click active user
#And I select user role
#And I click save to save the changes
#Then a notification is displayed
#Then the form should be closed

#Scenario:  Remove a role
#And I click to remove a role
#And I click save to save the changes
#Then a notification is displayed
#Then the form should be closed

#Scenario:  Rename a user
#When I fill in First Name
#And I fill in Last Name
#And I click to add another a role
#And I click save to save the changes
#Then a notification is displayed
#And I click to close user information panel




