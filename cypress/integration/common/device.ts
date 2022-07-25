import { Given } from "cypress-cucumber-preprocessor/steps"

Given("I'm using a mobile device", () => {
  cy.viewport("iphone-x")
})

Given("I'm using a tablet", () => {
  cy.viewport("ipad-mini")
})

Given("I'm using a desktop", () => {
  // nothing to do, as this is the default
})
