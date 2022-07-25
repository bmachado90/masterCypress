import { When, Then } from "cypress-cucumber-preprocessor/steps"


Then("The version number is displayed and it matches {string}", (versionNumber) => {
  cy.get(".no-gutters > .col > .row > .col-6 > .m-0").invoke('text').then((text) => {
    expect(text.trim()).equal(versionNumber);
  });

})

Then("I see the {string} label", (label, displayed) => {
  let is_element_exist = "not.exist"

  displayed == "displayed" ? (is_element_exist = "exist") : (is_element_exist = "not.exist")
  cy.get(".no-gutters > .col > .row > .col-6")
    .contains(label)
    .should(is_element_exist, { force: true })
})

Then("I click on the Legal Information Label", () => {
  cy.get('#on-layer-controls > div > div > footer > div > div > div.col-6.text-right > a').invoke('removeAttr', 'target')
  cy.get("#on-layer-controls > div > div > footer > div > div > div.col-6.text-right > a").click({force: true});
})

Then("the new tab contains Legal Information", () => {
  cy.url().should('include', Cypress.config().baseUrl+'/legal?lang=en-GB');

})

Then("I Close the tab", () => {
  cy.go('back');

})
