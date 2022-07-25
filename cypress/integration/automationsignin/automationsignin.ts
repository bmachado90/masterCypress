import { Given, Then, When } from "cypress-cucumber-preprocessor/steps"

Then("user management is {string} in the menu",(displayed) =>
{
  let is_element_exist = "not.exist"
  displayed == "displayed" ? (is_element_exist = "exist") : (is_element_exist = "not.exist")
  cy.get('[href="'+Cypress.config().baseUrl+'/user-management"]').should(is_element_exist, {
    force: true})

})

Then("my account is {string} in the menu",(displayed) =>
{
  let is_element_exist = "not.exist"
  displayed == "displayed" ? (is_element_exist = "exist") : (is_element_exist = "not.exist")
  cy.get('[href="'+Cypress.config().baseUrl+'/account/#settings"]').should(is_element_exist, {
    force: true})

})

When("I click on user menu", () => {
  cy.get("#userMenuButton > .ons-mdi").click({ force: true })
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

Then("sign out is {string} in the menu",(displayed) =>
{
  let is_element_exist = "not.exist"
  displayed == "displayed" ? (is_element_exist = "exist") : (is_element_exist = "not.exist")
  cy.get('[href="'+Cypress.config().baseUrl+'/logout"]').should(is_element_exist, {
    force: true})

})

When("I Logout", () => {
  cy.get("#userMenuButton > .ons-mdi").click({ force: true })
  cy.get('[href="'+Cypress.config().baseUrl+'/logout"]').click({ force: true})
  cy.wait(3000)
})

When("I go back in the browser", () => {
  cy.go('back')
  cy.url().should('eq', Cypress.config().baseUrl+'/accounts#sign-in')
})

When("The Historic Search page is visible.", () => {
  cy.wait(4000)
  cy.get(".pr-2.truncate > p").should("be.visible").contains("Historic Search User")
})

When("I click on Modules", () => {
  cy.get("#on-modules-menu > div > div > a > i").click({ force: true})
})

When ("Only Public Map is visible", () => {
  cy.get("#on-modules-menu > div > div > div > a:nth-child(1)").should("exist")
  cy.get("#on-modules-menu > div > div > div > a:nth-child(1)").invoke('attr', 'class').should('eq', 'dropdown-item')
})

Then("I Navigate to {string}", (url) => {
  cy.visit(Cypress.config().baseUrl+url)
})

Then("The Apllications Logs out.", () => {
  cy.wait(3000)
  cy.get("#on-sign-in").should("be.visible")
})

Then("should show error {string}", (message) => {
  cy.get(".invalid-feedback").should("contain.text", message)
})

Then("Sign in should fail", () => {
  cy.get("@signin").its("response.statusCode").should("eq", 401)
})

When("I Click on My Account", () => {
  cy.get("#on-user-menu > div > div > div > div.col-auto > ul > li > div > a:nth-child(1)").click({ force: true})
  cy.wait(1000)
})

Then("I´m in My Account page", () => {
  cy.url().should('eq', Cypress.config().baseUrl+'/account/#settings')
})

Then("Values are filled", () => {
  //Name
  cy.get("#firstName").should("exist")
  cy.get("#firstName").invoke('attr', 'value').should('not.be.null')
  //Surname
  cy.get("#lastName").should("exist")
  cy.get("#lastName").invoke('attr', 'value').should('not.be.null')
  //email
  cy.get("#country-select").should("exist")
  cy.get("#country-select").invoke('attr', 'disable').should('not.be.null')
  //timezone
  cy.get("#tz-select").should("exist")
  cy.get("#tz-select").invoke('attr', 'class').should('eq', 'custom-select user-select')
  //discard button
  cy.get("#btn-discard").should("exist")
  //save button
  cy.get("#on-app-container > div > div > section > section:nth-child(6) > div > div > div > div > div:nth-child(2) > a").should("exist")
})

When("I click on Sign up", () => {
  cy.get("#on-app-container > div > div > div > section > form > p > a.float-right").click({ force: true })
})

Then("The signup pages is visible", () => {
  cy.wait(500)
  cy.url().should('eq', Cypress.config().baseUrl+'/accounts/#sign-up')
})

Then("I fill the fields", () => {
  //Name
  cy.get("#user-first-name").clear({ force: true })
  cy.get("#user-first-name").click({ force: true })
  cy.get("#user-first-name").type("My Test",{ force: true } )
  //Surname
  cy.get("#user-last-name").clear({ force: true })
  cy.get("#user-last-name").click({ force: true })
  cy.get("#user-last-name").type("Elgin",{ force: true } )
  //email
  cy.get("#user-email").clear({ force: true })
  cy.get("#user-email").click({ force: true })
  cy.get("#user-email").type("mytestelgin@one.network",{ force: true } )
  //password
  cy.get("#user-pass").clear({ force: true })
  cy.get("#user-pass").click({ force: true })
  cy.get("#user-pass").type("Netw0rk.Two",{ force: true } )
  //organisation type
  cy.get("#user-org-type").select('Other')
  //organisation
  cy.get("#user-org").clear({ force: true })
  cy.get("#user-org").click({ force: true })
  cy.get("#user-org").type("One.Network",{ force: true } )
  //T&C
  cy.get("#terms-condition").click({ force: true })
})

