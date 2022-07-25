/* eslint-disable @typescript-eslint/no-empty-function */
import { notDeepEqual } from "assert"
import { When, Then } from "cypress-cucumber-preprocessor/steps"

When("I click on user menu", () =>
 {

  cy.get("#userMenuButton > .ons-mdi").click({ force: true})

  })
  When("I click on User Alert", () =>
 {

  cy.get('[href="'+Cypress.config().baseUrl+'/alerts"]').click({ force: true})

  })
  When("I click on My Account",() =>
  {

    cy.get('[href="'+Cypress.config().baseUrl+'/account/#settings"]').click({ force: true})

  })

  Then("the account settings fields should be active",() =>
  {
    cy.get('#firstName').should('not.be.empty')
    cy.get('#lastName').should('not.be.empty')
    cy.get('#country-select').should('not.be.empty')
    cy.get('#tz-select').should('not.be.empty')
    cy.get('#app-select').should('not.be.empty')

  })
  Then("the discard button should be enabled",() =>
  {
    cy.get('#btn-discard').should('be.visible')
    cy.get('#btn-discard > .ons-mdi').should('be.visible')

  })
  Then("the save button should be enabled",() =>
  {

    cy.get(':nth-child(2) > .btn').should('be.visible')

  })

  Then("I can view email settings",() =>
  {

    cy.get('#form-email-alerts > :nth-child(1) > .form-control').should('not.be.empty')
    cy.wait(3000)
    cy.get(':nth-child(2) > .mt-1').contains('Description')
    cy.get(':nth-child(3) > .mt-1').contains('Who are you')
    cy.get(':nth-child(4) > .mt-1').contains('Get alerts on')
    cy.get(':nth-child(5) > .mt-2').contains('Get alerts for')
    cy.get(':nth-child(5) > .events> .traffic-impact >.mt-3').contains('Traffic impact')

  })

  Then("the public events is checked",() =>
  {

    cy.get('.events > :nth-child(1) > .form-check-input').should('be.checked')


  })
  Then("the roadworks is checked",() =>
  {
    cy.get('.events > :nth-child(2) > .form-check-input').should('be.checked')

  })

  Then("the frequency option daily is checked",() =>
  {
    cy.get('.d-flex > :nth-child(1) > .form-check-input').should('be.checked')

  })

  Then("the frequency option weekly is unchecked",() =>
  {
    cy.get('.d-flex > :nth-child(2) > .form-check-input').should('not.be.checked')

  })
  Then("the frequency option monthlies is unchecked",() =>
  {
    cy.get('.d-flex > :nth-child(3) > .form-check-input').should('not.be.checked')

  })
  Then("the Traffic impact slide is displayed",() =>
  {
    cy.wait(10000)
    cy.get('.alerts-severity-slider > :nth-child(1) > .ons-slider-input').should('be.visible')

  })
  Then("Reset button is available",() =>
  {
    cy.get('.form-actions > .row > :nth-child(1) > .btn').should('be.enabled')

  })
  Then("Set alert button is available",() =>
  {
    cy.get('.form-actions > .row > :nth-child(2) > .btn').should('be.enabled')

  })

  When("I click on Change Password",() =>
  {

    cy.get('[href="'+Cypress.config().baseUrl+'/account/#reset-password"]').click({ force: true})

  })

  When("I click on Alerts",() =>
  {

    cy.get('[href="'+Cypress.config().baseUrl+'/alerts"]').click({ force: true})

  })

  When("I click on the Select default Module",() =>
  {

    cy.get('#app-select').should('be.visible')


  })

Then("the Reports module is displayed",() =>
{
  cy.get('#app-select').select('Reports')
  cy.get('#app-select').should('have.value', 'RW_REPORT_APP')
})

Then("the Route Monitor module is displayed",() =>
{
  cy.get('#app-select').select('Route Monitor')
  cy.get('#app-select').should('have.value', 'ROUTE_MONITOR')

})
Then("the Traffic Management module is displayed",() =>
{

  cy.get('#app-select').select('Traffic Management')
  cy.get('#app-select').should('have.value', 'TM')



})

Then("the Traffic Management module is displayed on the modules list",() =>
{

  cy.get('[href="/tm"]').should('be.visible')

})


Then("the Route Manager page is displayed",() =>

{
  cy.get('.nav-link').contains('Route Manager')

})

Then("the Route Manager module is displayed",() =>

{

  cy.get('.ons-modules-menu > .ons-mdi').click()
  cy.wait(500)
  cy.get('.dropdown-menu > .active').should('be.visible')
  cy.wait(500)

})



Then("the Cash and Coordination module is displayed",() =>
{

  cy.get('[href="/cac"]').should('be.visible')

})

Then("the Cash and Coordination module is displayed",() =>
{

  cy.get('[href="/cac"]').should('be.visible')

})

Then("the Content Management module is not enabled",() =>
{


  cy.get('[href="/cm"]').should('not.be.enabled')
})
Then("the Content Management module is not enabled",() =>
{


  cy.get('[href="/cm"]').should('not.be.enabled')

})
Then("the Report module is not enabled",() =>
{


  cy.get('[href="/report"]').should('not.be.enabled')

})


Then("the Route Monitor module is not enabled",() =>
{

  cy.get('[href="/route-monitor"]').should('not.be.enabled')


})


Then("the Public Map module is displayed",() =>
{


  cy.get('[href="/public"]').should('be.visible')

})

Then("the Works Planning module is not enabled",() =>
{


  cy.get('[href="/pmap"]').should('not.be.enabled')

})



When("I can enter email address",() =>
  {

    cy.get('#j_email_address').click({ force: true})
    cy.get('#j_email_address').type("teste@one.network")

  })

  Then("the request email button is enabled",() =>
  {
    cy.get('#reset-btn').should('be.enabled')

  })


Then("my account is {string} in the menu",(displayed) =>
{
  let is_element_exist = "not.exist"
  displayed == "displayed" ? (is_element_exist = "exist") : (is_element_exist = "not.exist")
  cy.get('[href="'+Cypress.config().baseUrl+'/account/#settings"]').should(is_element_exist, {
    force: true})

})
Then("change password is {string} in the menu",(displayed) =>
{

  let is_element_exist = "not.exist"
  displayed == "displayed" ? (is_element_exist = "exist") : (is_element_exist = "not.exist")
  cy.get('[href="'+Cypress.config().baseUrl+'/account/#reset-password"]').should(is_element_exist, {
    force: true})

})
Then("alert is {string} in the menu",(displayed) =>
{

  let is_element_exist = "not.exist"
  displayed == "displayed" ? (is_element_exist = "exist") : (is_element_exist = "not.exist")
  cy.get('[href="'+Cypress.config().baseUrl+'/alerts"]').should(is_element_exist, {
    force: true})

})

Then("user management is {string} in the menu",(displayed) =>
{
  let is_element_exist = "not.exist"
  displayed == "displayed" ? (is_element_exist = "exist") : (is_element_exist = "not.exist")
  cy.get('[href="'+Cypress.config().baseUrl+'/user-management"]').should(is_element_exist, {
    force: true})

})
When("I click on user management",() =>
{
    cy.get('[href="'+Cypress.config().baseUrl+'/user-management"]').click()
})

When("a data table of names, emails last login,assigned modules and Account status are displayed",() =>
{
  cy.get('#data-container').should('not.be.empty')
})
Then("I can click to Add First name, Last name,Email and discard changes",() =>
{

  cy.get('.col-12 > .btn').click()
  cy.get('.detail-panel').click
  cy.get('#firstName').type('Testfirstname')
  cy.get('#lastName').type('Testlastname')
  cy.get('#email').type('Test@email')
  cy.get('#btn-discard > .ons-mdi').click({ force:true})

})
Then('the User information panel opens',() =>
{
  cy.get('#panel-container').should('be.visible')
})

Then("sign out is {string} in the menu",(displayed) =>
{
  let is_element_exist = "not.exist"
  displayed == "displayed" ? (is_element_exist = "exist") : (is_element_exist = "not.exist")
  cy.get('[href="'+Cypress.config().baseUrl+'/logout"]').should(is_element_exist, {
    force: true})

})

Then("{string} is {string} in the menu",(text, displayed) =>
{
  let is_element_exist = "not.exist"
  displayed == "displayed" ? (is_element_exist = "exist") : (is_element_exist = "not.exist")
  cy.get('[href="'+Cypress.config().baseUrl+'/logout"]').should(is_element_exist, {
    force: true ||
  cy.get('[href="'+Cypress.config().baseUrl+'/logout"]').click({ force: true})

})

When("I click on Change password",() =>

{
  cy.get('[href="'+Cypress.config().baseUrl+'/account/#reset-password"]').click({ force:true})

 })

 When("I click on Alerts",() =>

{
  cy.get('[href="'+Cypress.config().baseUrl+'/alerts"]').click({ force:true})

 })

 When("I click on User management",() =>

{
  cy.get('[href="'+Cypress.config().baseUrl+'/user-management"]').click({ force:true})

 })

 When("I click on Sign out",() =>

{
  cy.get('[href="'+Cypress.config().baseUrl+'logout"]').click({ force:true})

 })

 When("the account settings screen is displayed",() => {

 })


Then('I can discard the changes {string}',(displayed) =>
{

  let is_element_exist = "not.exist"
  displayed == "displayed" ? (is_element_exist = "exist") : (is_element_exist = "not.exist")
  cy.get('#btn-discard > .ons-mdi').should(is_element_exist, {
    force: true})
  cy.get('#btn-discard > .ons-mdi').should('be.enabled')
  cy.get('#btn-discard > .ons-mdi').click({ force:true})
})

When("feature steps", () => {
  cy.get("css").click({ force: true })
})

When("I select any active user and open", () => {
  cy.get(":nth-child(1) > #td-user-list-name").click({ force: true })
})

When("I select any inactive user and open", () => {
  cy.get(":nth-child(5) > #td-user-list-name").click({ force: true })
})

When("I select any pending user and open", () => {
  cy.get(":nth-child(11) > #td-user-list-email").click({ force: true })
})

Then("email field is blocked", () => {
  cy.get("#email").should("not.be.enabled")
})

When("I close user information panel", () =>
{
  cy.get(".detail-panel-dismiss > .ons-mdi").click({ force: true })
})
})
