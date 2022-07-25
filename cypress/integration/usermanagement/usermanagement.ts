/* eslint-disable @typescript-eslint/no-empty-function */
import { When, Then } from "cypress-cucumber-preprocessor/steps"

When("I click user management", () =>
{
  cy.get(".dropdown-menu-right > a:nth-child(5)").click({ force: true});

})

Then("user management page is displayed", () =>
{
	cy.url().should('eq', Cypress.config().baseUrl+'/user-management')
  cy.wait(2000)
})

When("I click on Add button", () =>
{
	cy.get(".btn-create-user").click({ force: true})
})

Then("the form opens up", () =>
{
  cy.get(".detail-panel-heading").should("have.text", "User information")
})

When("I fill in First Name", () =>
{
  cy.get("#firstName").click({ force: true })
  cy.get("#firstName").type("Dada")
})

When("I fill in Last Name", () =>
{
  cy.get("#lastName").click({ force: true })
  cy.get("#lastName").type("Lauren")
})

When("I fill in email", () =>
{
  cy.get('#email').click({ force: true })
  cy.get('#email').type("mymail@gmail.com")
})

When("I select user role", () =>
{
  cy.get("#USER_COMMUNITY_COMMUNITY_ADMIN").click()
  cy.get("#USER_COMMUNITY_COMMUNITY_ADMIN").should("be.checked")
})

When("I click on discard button", () =>
{
  cy.get("#btn-discard").click({ force: true })
})

Then("the form should be closed",() => {
  cy.get(".detail-panel-heading").should('not.exist');
})

When("I click on Add button", () =>
{
  cy.get(".btn-create-user").click({ force: true })
})

When("I click on user menu", () => {
  cy.get("#userMenuButton > .ons-mdi").click({ force: true })
})

When("I click on user management", () => {
  cy.get("li > div > a:nth-child(5)").click({ force: true })
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

When("I close user information panel", () => {
  cy.get(".detail-panel-dismiss > .ons-mdi").click({ force: true })
})

Then("the form should be empty", () => {
  cy.get("#firstName").should("be.empty")
  cy.get("#lastName").should("be.empty")
  cy.get("#email").should("be.empty")
  cy.get("#USER_COMMUNITY_COMMUNITY_ADMIN").should("not.be.checked")
})

When("I click user management", () => {
  cy.get("[href='/user-management']").click({ force: true })
})

 When("I click active user", () => {
   cy.get(":nth-child(1) > #td-user-list-name").click({ force: true })
 })

 When("I click to add a role", () => {
  cy.get(":nth-child(12) > .col-12 > :nth-child(2) > .form-check > .form-check-label").click({ force: true })
})

When("I click save to save the changes", () => {
  cy.get(".elg-ta-r").click({ force: true })
})


When("I click to close user information panel", () => {
  cy.get(".detail-panel-dismiss > .ons-mdi ").click({ force: true })
})

When("I click to remove a role", () => {
  cy.get(":nth-child(12) > .col-12 > :nth-child(2) > .form-check > .form-check-label").click({ force: true })
})

When("I input firstname(string)", (firstName) => {
  cy.get(":nth-child(2) > .col-12 > .form-group > label").type(firstName)
})

When("I input lastname(string)", (lastName) => {
  cy.get("#lastName").type(lastName)
})

When("I click to add another a role", () => {
  cy.get(":nth-child(12) > .col-12 > :nth-child(2) > .form-check > .form-check-label").click({ force: true })
})

When("I click Action dropdown to select deactivate", () => {
  cy.get("#dropdownMenuButton").click({ force: true })
})

When("I click deactivate account", () => {
  cy.get(".disable-accounts > a").click({ force: true })
})

When("I click account is active to activate users account", () => {
  cy.get("#account-status").click({ force: true })
})

When("I click confirm", () => {
  cy.get("#confirm-button").click({ force: true })
})

Then("a notification is displayed", () => {
  cy.get("").should("exist")
})
