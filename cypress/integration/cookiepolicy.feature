
Feature: GDPR Notice Container

  The user can interact with the cookie policy
  and accept recommendation setting


Background: Cookie Container displayed
 Given I'm not signed in
 And the cookie container is "displayed"
 Then the cookie preference button is "displayed"
 And the accept recommended settings is "displayed"

Scenario: Cookie Preference Text
 When I click on the cookie preferences button
 And the privacy cookies is displayed in a new tab
 Then text "Privacy and Cookies Policy" is displayed on the page

Scenario: Accept Recommended settings Text
 When I click on the accept recommended settings
 Then the cookie container is cleared and "not displayed"


 Scenario: Save Cookie Preferences
 When I click on the cookie preferences button
 And the privacy cookies is displayed in a new tab
 Then text "Privacy and Cookies Policy" is displayed on the page
 And Essential cookies is turned off by default
 And the user preferences is turned on by default
 And the Analytics & Statistics cookies is turned on by default
 And the Save Cookie Preferences button is turned off by default
 When I turn off Analytics & Statistics cookies
 Then the Save Cookies Preference button is enabled
 When I click on Save Cookies Preference button
 Then my cookies preferences are saved
 Given I'm in the "Sign in" page
 When I input "DuffyS" credentials and sign in
 Then I should be in the "TM" page
 And I should be signed in as "DuffyS"
 Then the cookie container is cleared and "not displayed"

 Scenario: Privacy and Cookie Policy - Data Layer
 Given I'm in the "Home" page
 And I'm not signed in
 When I click on the data layer icon
 And I click on legal information
 Then text "Website Terms of Use" is displayed on the page
 And I can navigate to privacy and cookie policy from the page


Scenario: C830 - Cookie Preferences
 Given I'm not signed in
 And the cookie container is "displayed"
 Then the cookie preference button is "displayed"
 And the accept recommended settings is "displayed"
 Then I click on the cookie preferences button
  And the privacy cookies is displayed in a new tab
  Then text "Privacy and Cookies Policy" is displayed on the page
  And Essential cookies is turned off by default
  And the user preferences is turned on by default
  And the Analytics & Statistics cookies is turned on by default
  And the Save Cookie Preferences button is turned off by default
 Then I Deselect User preferences
  And The Save Cookie Preferences button is enabled
 Then I click on Save Cookies Preference button
  And The message is displayed
 Then I refresh the page
  And I Deselect Analytics & Statistics cookies
 Then I click on Save Cookies Preference button
  And The message is displayed
 Then I refresh the page
  And I Tick User preferences and Analytics & Statistics cookies
 Then I click on Save Cookies Preference button
  And The message is displayed
  And I refresh the page

Scenario: C25 - Privacy and Cookies Policy [signed-in user]
  Given I'm in the "Sign in" page
  When I input "DuffyS" credentials and sign in
  Then I should be in the "TM" page
    And I should be signed in as "DuffyS"
  When I click on the data layer button
    And I click on legal information
  Then text "Website Terms of Use" is displayed on the page
    And I can navigate to privacy and cookie policy from the page


