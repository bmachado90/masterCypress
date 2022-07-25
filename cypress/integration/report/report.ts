import { When } from "cypress-cucumber-preprocessor/steps"

function getUserPassword(username: string): Cypress.Chainable<string> {
  return cy.fixture("users.json").its(username).its("password")
}

function inputCredentials(username: string, password: string): void {
  cy.intercept("POST", Cypress.env("API_NEAREST_URL")).as("signin")

  cy.get("#j_username").clear()
  if (username) {
    cy.get("#j_username").type(username)
  }
  cy.get("#j_password").clear()
  if (password) {
    cy.get("#j_password").type(password)
  }
  cy.get("button[type=submit]").click()
}

function inputCredentialsAndWait(username: string, password: string): void {
  inputCredentials(username, password)
  cy.wait("@signin")
}
function inputUserCredentialsAndWait(username: string): void {
  getUserPassword(username).then((password) => {
    inputCredentialsAndWait(username, password)
  })
}

When("I input {string} credentials", (username) => {
  inputUserCredentialsAndWait(username)
})

When("I click on the module menu", () => {
  cy.get(".ons-modules-menu > .ons-mdi", { timeout: 15000 }).click()
})

When("I click on the {string} tab", (moduleName) => {
  cy.contains(moduleName).click()
})

When("I click the filter by distance from postcode option", () => {
  cy.get("#erwas-area-search-type-pc", { timeout: 15000 }).should("be.visizble")
})

