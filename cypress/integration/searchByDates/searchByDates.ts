/* eslint-disable @typescript-eslint/no-empty-function */
import { When, Then } from "cypress-cucumber-preprocessor/steps"

When("I click on the search box to select dates", () => {
  cy.get("#ons-quick-picker").click({ force: true })
})

When("I click the date search {string} option on the list", (dateOption) => {
  cy.get('[data-value="' + dateOption + '"]').click({ force: true })
})

When("I click in the search item text box to type", () => {
  cy.get(".ons-tt-input").click({ force: true })
})

When("the first result is {string}", (dateOption) => {
  //
})

When("a dropdown list of possible locations is displayed", (option) => {})

When("the list includes the search item", (option) => {})

When("I select item {string} from the dropdown list", (location) => {
  cy.wait(3000)
  cy.get('.ons-tt-menu').find('.list-group-item').contains(location).click({ force: true })
  cy.wait(1000)
})

When("{string} is displayed on the dropdown list", (location) => {
  cy.contains(location)
})

Then("the {string} button is {string} on the map", (text, displayed) => {
  let is_element_exist = "not.exist"

  displayed == "displayed" ? (is_element_exist = "exist") : (is_element_exist = "not.exist")
  cy.get("#on-sign-in" + text + '"] ').should(is_element_exist, {
    force: true,
  })
})

Then("the signin window is {string} on the map", (displayed) => {
  let is_element_exist = "not.exist"

  displayed == "displayed" ? (is_element_exist = "exist") : (is_element_exist = "not.exist")
  cy.get(".ons-feature-sign-in").should(is_element_exist, {
    force: true,
  })
})

When("I type in the search box a location {string}", (location) => {
  //cy.get(".ons-tt-input").clear()
  cy.get(".ons-tt-input").type(location,{ force: true })
  cy.wait(2000)
  cy.get(".ons-tt-input").click({ force: true })
})

When("the location {string} is {string} on the list", (text, displayed) => {
  let is_element_exist = "not.exist"

  displayed == "displayed" ? (is_element_exist = "exist") : (is_element_exist = "not.exist")
  cy.get(
    '[style="z-index: 3; position: absolute; height: 100%; width: 100%; padding: 0px; border-width: 0px; margin: 0px; left: 0px; top: 0px; touch-action: pan-x pan-y;"]',
  ).contains
  cy.get(text).scrollIntoView().should(is_element_exist, {
    force: true,
  })
})


