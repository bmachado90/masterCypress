import { Then, When } from "cypress-cucumber-preprocessor/steps"


Then("I should see the user menu", () => {
  cy.get("#on-user-menu", { timeout: 30000 }).should("be.visible")
})

Then("Sign in should not happen", () => {
  cy.get("@signin").should("be.null")
})

Then("Sign in should fail", () => {
  cy.get("@signin").its("response.statusCode").should("eq", 401)
})

Then("should show error {string}", (message) => {
  cy.get(".invalid-feedback").should("contain.text", message)
})
