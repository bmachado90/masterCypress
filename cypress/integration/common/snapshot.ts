import { Then } from "cypress-cucumber-preprocessor/steps"

Then("it should look like snapshot {string}", (snapshotName) => {
  cy.compareSnapshot(snapshotName, 0.1)
})
