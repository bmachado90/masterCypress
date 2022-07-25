import { When, Then } from "cypress-cucumber-preprocessor/steps"

When("I click the date search option {string} on the list", (dateOption) => {
  cy.get('[data-value="' + dateOption + '"]').click({ force: true })
})

Then ("I click on Calendar button",() => {
  cy.get('.ons-mdi-calendar-blank').click({ force: true })
})

Then ("the time button is {string}", (option) => {
  cy.get(".ons-datepicker-time-"+option+"").should("exist",{ force: true })
})

Then ("I close the Calendar", () => {
  cy.get('#ons-dates > div > div.ons-datepicker > div > div:nth-child(1) > div.col-2 > i').click({ force: true })
})

Then ("I choose a specific hour", () => {
  cy.get('#ons-datepicker-start > div > ul > li.picker-switch.accordion-toggle > table > tbody > tr > td > a.ons-datepicker-time-enabled > span').click({ force: true })
  cy.wait(1000)
  cy.get('#ons-datepicker-start > div > ul > li.collapse.show > div > div.timepicker-picker > table > tr:nth-child(1) > td:nth-child(1) > a > span').click({ force: true })
  cy.wait(1000)
  cy.get('#ons-datepicker-end > div > ul > li.collapse.show > div > div.timepicker-picker > table > tr:nth-child(3) > td:nth-child(1) > a > span').click({ force: true })
  cy.get('#ons-dates > div > div.ons-datepicker > div > div:nth-child(1) > div.col-2 > i').click({ force: true })
})

Then ("I choose a specific Start Date", () => {
  cy.get('#ons-datepicker-start > div > ul > li.collapse.show > div > div.datepicker-days > table > tbody > tr:nth-child(5) > td:nth-child(1)').click({ force: true })
})

Then ("I choose a specific End Date", () => {
  cy.get('#ons-datepicker-end > div > ul > li.collapse.show > div > div.datepicker-days > table > thead > tr:nth-child(1) > th.next > span').click({ force: true })
  cy.wait(1000)
  cy.get('#ons-datepicker-end > div > ul > li.collapse.show > div > div.datepicker-days > table > tbody > tr:nth-child(3) > td:nth-child(1)').click({ force: true })
})

Then ("It shows message {string}", (message) => {
  cy.get('#ons-datepicker-start > div > ul > li.picker-switch.accordion-toggle > table > tbody > tr > td > a.ons-datepicker-time-disabled')
    .invoke('attr', 'title').should('eq',message)
})

When("Click on the search box to select dates", () => {
  cy.get("#ons-quick-picker").click({ force: true })
})
