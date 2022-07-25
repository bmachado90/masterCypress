Feature: User Management

User Management and permissions

Background:
Given I'm in the "Sign in" page
When I input "DuffyS" credentials and sign in
And I should be in the "TM" page
And I should be signed in as "DuffyS"
And I click on user menu
And I click on user management

Scenario: C480-User management smoke test
 And I search for "bruno.machado@one.network"
 And I click on selected user
 And I assign to him Traffic Management Admin.
 And I click on Save button
 And I assign to him Traffic Management Publish.
 And I click on Save button
And I Logout
And I'm in the "Sign in" page
Then I input "Bruno_Machado" credentials and sign in
  And I should be in the "TM" page
  And I create a new Plan
  And I Logout
  And I'm in the "Sign in" page
Then I input "DuffyS" credentials and sign in
  And I should be in the "TM" page
  And I click on user menu
  And I click on user management
  And I search for "bruno.machado@one.network"
  And I click on selected user
  And I assign to him Content Management Advanced.
  And I click on Save button
  And I Logout
  And I'm in the "Sign in" page
Then I input "Bruno_Machado" credentials and sign in
  And I should be in the "TM" page
  And The user has access to Content Management.
  And I should be in the "CM" page
  And I Logout
  And I'm in the "Sign in" page
Then I input "DuffyS" credentials and sign in
  And I should be in the "TM" page
  And I click on user menu
  And I click on user management
  And I search for "bruno.machado@one.network"
  And I click on selected user
  And I assign to him Events KML Upload and Standard User.
  And I click on Save button
  And I Logout
  And I'm in the "Sign in" page
Then I input "Bruno_Machado" credentials and sign in
  And I should be in the "TM" page
  And A New KML Plan is created.
  And I Logout
  And I'm in the "Sign in" page
Then I input "DuffyS" credentials and sign in
And I should be in the "TM" page
And I click on user menu
And I click on user management
And I search for "bruno.machado@one.network"
And I click on selected user
And I unassign to him Events KML Upload.
And I click on Save button
And I Logout
And I'm in the "Sign in" page
Then I input "Bruno_Machado" credentials and sign in
  And I should be in the "TM" page
  And No KLM option visible


Scenario: C777-A user is able to filter the account status
And I Cick on the Filters
And I click on Actives
And I click on Pending
And I click on orderBy Name
Then I Cick on the Filters
  And I Un-tick Active and Pending.
  And I click on Inactives , Actives and Pending
  And i Un-tick all filters.
Then I Cick on the Filters
  And I click on Historical Map.
  And I Un-tick Historical Map.
  And I click on Traffic Management.
  And I Un-tick Traffic Management.
  And I click on None
  And I Un-tick on None

Scenario: C888 - Create New User and Discard
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

Scenario: C763 - Update a user and cancel
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

Scenario: C760-User management smoke test
And I search for "bruno.machado@one.network"
And I click on selected user
And The information is displayed
