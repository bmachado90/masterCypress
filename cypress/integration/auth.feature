Feature: User Authentication

  Users can sign in to identify themselves in the platform.

  Background: Start as an anonymous user

    Given I'm not signed in

  Scenario: Sign in button is accessible from top bar

    Given I'm using a desktop
    When I click the Sign in button
    Then I should be in the "Sign in" page

  Scenario: Sign in button is accessible from side panel in mobile devices

    Given I'm using a mobile device
    When I click the Sign in button
    Then I should be in the "Sign in" page

  Scenario: C3048, C3050, C3051, C3052 - Sign in with invalid credentials

    Given I'm in the "Sign in" page
    When I attempt to sign in with no credentials
    Then Sign in should not happen
    And should show error "This field is required."
    When I attempt to sign in with username "DuffyS" and no password
    Then Sign in should not happen
    And should show error "This field is required."
    When I attempt to sign in with no username and password "Invalid password"
    Then Sign in should not happen
    And should show error "This field is required."
    When I attempt to sign in with username "invalid.email" and password "Invalid password"
    Then Sign in should fail
    And should show error "Sign in failed. Check your credentials and try again."

  Scenario: C3047, C3055 - Sign in with valid username and password and sign out
    Given I'm in the "Sign in" page
    When I input "DuffyS" credentials and sign in
    Then I should be in the "TM" page
    And I should be signed in as "DuffyS"
    And I should see the user menu
    When I click the sign out button
    Then I should be in the "Home" page
    And I should see the Sign in button

  Scenario: C3053 - Sign in password should be masked
    Given I'm in the "Sign in" page
    When I insert "DuffyS" credentials but not sign in
    Then The password field is masked
    And The eye to toggle the visibility is present.
    When I click the eye to toggle the visibility
    Then The password field is visible.

  Scenario: C3054 - Sign in handles case sensitive
    Given I'm in the "Sign in" page
    When I input "DuffySUpperCase" credentials and sign in
    Then should show error "Sign in failed. Check your credentials and try again."

  Scenario: C754	Sign in (public users)
    Given I'm in the "Sign in" page
    When I input "Public" credentials and sign in
    Then the public page is visible.
    And the right panel button is visible
    Then I click on right panel button
    And Expand the right hand panel and show the advertising slider.
    When I click the sign out button
    Then I should be in the "Home" page
