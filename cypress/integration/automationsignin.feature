Feature: User Menu

Modules that the user has access to is available for selection.

Background:
Given I'm in the "Sign in" page

Scenario: C3055 - Sign in (Authentication)
When I input "DuffyS" credentials and sign in
Then I should be in the "TM" page
And I should be signed in as "DuffyS"
Then my account is "displayed" in the menu
When I click on user menu
Then change password is "displayed" in the menu
And alert is "displayed" in the menu
And user management is "displayed" in the menu
And sign out is "displayed" in the menu
And I Logout
And I go back in the browser

Scenario: C754	Sign in (public users)
  Given I'm in the "Sign in" page
    When I input "Public" credentials and sign in
    Then the public page is visible.
    And the right panel button is visible
    Then I click on right panel button
    And Expand the right hand panel and show the advertising slider.
    When I click the sign out button
    Then I should be in the "Home" page

Scenario: C1011 -A user with a historical role is able to log in and log out
Given I'm in the "Sign in" page
    When I input "historic_search_user" credentials and sign in
    Then The Historic Search page is visible.
    When I click on Modules
    Then Only Public Map is visible
    And I Logout
    And I'm in the "Sign in" page
    When I attempt to sign in with username "invalid.email" and password "Invalid password"
    Then Sign in should fail
    And should show error "Sign in failed. Check your credentials and try again."
    And I input "historic_search_user" credentials and sign in
    And The Historic Search page is visible.
    And I Navigate to "/logout"
    Then The Apllications Logs out.

Scenario:C3064 - After properly sign in, sign out the application
  When I input "DuffyS" credentials and sign in
  Then I should be in the "TM" page
  And I should be signed in as "DuffyS"
  Then my account is "displayed" in the menu
  When I click on user menu
  And I Logout
  And The Apllications Logs out.

Scenario:C3070 - Open my account screen
When I input "DuffyS" credentials and sign in
  Then I should be in the "TM" page
  And I should be signed in as "DuffyS"
  Then my account is "displayed" in the menu
  When I click on user menu
  And I Click on My Account
  And I´m in My Account page
  And Values are filled

Scenario:C3057 - Sign up (registration)
  When I click on Sign up
    Then The signup pages is visible
    And I fill the fields
