import { Given, Then, When } from "cypress-cucumber-preprocessor/steps"

Then("the Responsibility for these works is {string}", (name) => {
  cy.get("#map-canvas > div > div > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(4) > div.infoBox > div > div > div > div > div.rwCallout_innerScroll > div.rwCallout_section_info > h2:nth-child(1)")
    .should("not.be.empty")
  var t1
  cy.get("#map-canvas > div > div > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(4) > div.infoBox > div > div > div > div > div.rwCallout_innerScroll > div.rwCallout_section_info > table.rwCallout_table.rwCallout_logoTable > tbody > tr > td.rwCallout_label > a")
    .should(($d) => {
    t1 = $d.text();
    expect(t1).equal(name);
    })
})

Then("the callout body has info", () => {
  cy.get("#map-canvas > div > div > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(4) > div.infoBox > div > div > div > div > div.rwCallout_innerScroll > div.rwCallout_section_info > h2:nth-child(3)")
    .should("not.be.empty")
  //
  cy.get("#map-canvas > div > div > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(4) > div.infoBox > div > div > div > div > div.rwCallout_innerScroll > div.rwCallout_section_info > table:nth-child(4) > tbody > tr:nth-child(1) > td.rwCallout_label")
  .should("not.be.empty")

  cy.get("#map-canvas > div > div > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(4) > div.infoBox > div > div > div > div > div.rwCallout_innerScroll > div.rwCallout_section_info > table:nth-child(4) > tbody > tr:nth-child(1) > td.rwCallout_info")
  .should("not.be.empty")
  //
  cy.get("#map-canvas > div > div > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(4) > div.infoBox > div > div > div > div > div.rwCallout_innerScroll > div.rwCallout_section_info > table:nth-child(4) > tbody > tr:nth-child(2) > td.rwCallout_label")
  .should("not.be.empty")

  cy.get("#map-canvas > div > div > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(4) > div.infoBox > div > div > div > div > div.rwCallout_innerScroll > div.rwCallout_section_info > table:nth-child(4) > tbody > tr:nth-child(2) > td:nth-child(2)")
  .should("not.be.empty")

  //
  cy.get("#map-canvas > div > div > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(4) > div.infoBox > div > div > div > div > div.rwCallout_innerScroll > div.rwCallout_section_info > table:nth-child(4) > tbody > tr:nth-child(3) > td.rwCallout_label")
  .should("not.be.empty")

  cy.get("#map-canvas > div > div > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(4) > div.infoBox > div > div > div > div > div.rwCallout_innerScroll > div.rwCallout_section_info > table:nth-child(4) > tbody > tr:nth-child(3) > td.rwCallout_info")
  .should("not.be.empty")

  //
  cy.get("#map-canvas > div > div > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(4) > div.infoBox > div > div > div > div > div.rwCallout_innerScroll > div.rwCallout_section_info > h2:nth-child(5)")
  .should("not.be.empty")

  //
  cy.get("#map-canvas > div > div > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(4) > div.infoBox > div > div > div > div > div.rwCallout_innerScroll > div.rwCallout_section_info > div:nth-child(6) > div > p:nth-child(2)")
  .should("not.be.empty")

  //
  cy.get("#map-canvas > div > div > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(4) > div.infoBox > div > div > div > div > div.rwCallout_innerScroll > div.rwCallout_section_info > div:nth-child(6) > div > p:nth-child(4)")
  .should("not.be.empty")

  //Permit Conditions
  cy.get("#map-canvas > div > div > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(4) > div.infoBox > div > div > div > div > div.rwCallout_innerScroll > div.rwCallout_section_info > h2:nth-child(7)")
  .should("not.be.empty")

  //
  cy.get("#map-canvas > div > div > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(4) > div.infoBox > div > div > div > div > div.rwCallout_innerScroll > div.rwCallout_section_info > div:nth-child(8) > div > ul > li:nth-child(3)")
  .should("not.be.empty")
})

Then("the callout body has Orgs info", () => {
  cy.get("#map-canvas > div > div > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(4) > div.infoBox > div > div > div > div > div.rwCallout_innerScroll > div.rwCallout_section_info > h2:nth-child(3)")
    .should("not.be.empty")

  //
  cy.get("#map-canvas > div > div > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(4) > div.infoBox > div > div > div > div > div.rwCallout_innerScroll > div.rwCallout_section_info > table:nth-child(4) > tbody > tr:nth-child(1) > td.rwCallout_label")
  .should("not.be.empty")

  cy.get("#map-canvas > div > div > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(4) > div.infoBox > div > div > div > div > div.rwCallout_innerScroll > div.rwCallout_section_info > table:nth-child(4) > tbody > tr:nth-child(1) > td.rwCallout_info")
  .should("not.be.empty")
  //
  cy.get("#map-canvas > div > div > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(4) > div.infoBox > div > div > div > div > div.rwCallout_innerScroll > div.rwCallout_section_info > table:nth-child(4) > tbody > tr:nth-child(2) > td.rwCallout_label")
  .should("not.be.empty")

  cy.get("#map-canvas > div > div > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(4) > div.infoBox > div > div > div > div > div.rwCallout_innerScroll > div.rwCallout_section_info > table:nth-child(4) > tbody > tr:nth-child(2) > td:nth-child(2)")
  .should("not.be.empty")

  //
  cy.get("#map-canvas > div > div > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(4) > div.infoBox > div > div > div > div > div.rwCallout_innerScroll > div.rwCallout_section_info > table:nth-child(4) > tbody > tr:nth-child(3) > td.rwCallout_label")
  .should("not.be.empty")

  cy.get("#map-canvas > div > div > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(4) > div.infoBox > div > div > div > div > div.rwCallout_innerScroll > div.rwCallout_section_info > table:nth-child(4) > tbody > tr:nth-child(3) > td.rwCallout_info")
  .should("not.be.empty")

  //Permit Conditions section not available
  cy.get("#map-canvas > div > div > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(4) > div.infoBox > div > div > div > div > div.rwCallout_innerScroll > div.rwCallout_section_info > h2:nth-child(7)")
  .should("not.exist")
})

Then("the callout body has Lancashire info", () => {
  cy.get("#map-canvas > div > div > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(4) > div.infoBox > div > div > div > div > div.rwCallout_innerScroll > div.rwCallout_section_info > h2:nth-child(3)")
    .should("not.be.empty")

  //
  cy.get("#map-canvas > div > div > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(4) > div.infoBox > div > div > div > div > div.rwCallout_innerScroll > div.rwCallout_section_info > table:nth-child(4) > tbody > tr:nth-child(1) > td.rwCallout_label")
  .should("not.be.empty")

  cy.get("#map-canvas > div > div > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(4) > div.infoBox > div > div > div > div > div.rwCallout_innerScroll > div.rwCallout_section_info > table:nth-child(4) > tbody > tr:nth-child(1) > td.rwCallout_info")
  .should("not.be.empty")
  //
  cy.get("#map-canvas > div > div > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(4) > div.infoBox > div > div > div > div > div.rwCallout_innerScroll > div.rwCallout_section_info > table:nth-child(4) > tbody > tr:nth-child(2) > td.rwCallout_label")
  .should("not.be.empty")

  cy.get("#map-canvas > div > div > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(4) > div.infoBox > div > div > div > div > div.rwCallout_innerScroll > div.rwCallout_section_info > table:nth-child(4) > tbody > tr:nth-child(2) > td:nth-child(2)")
  .should("not.be.empty")

  //
  cy.get("#map-canvas > div > div > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(4) > div.infoBox > div > div > div > div > div.rwCallout_innerScroll > div.rwCallout_section_info > table:nth-child(4) > tbody > tr:nth-child(3) > td.rwCallout_label")
  .should("not.be.empty")

  cy.get("#map-canvas > div > div > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(4) > div.infoBox > div > div > div > div > div.rwCallout_innerScroll > div.rwCallout_section_info > table:nth-child(4) > tbody > tr:nth-child(3) > td.rwCallout_info")
  .should("not.be.empty")

  //Permit Conditions section not available
  cy.get("#map-canvas > div > div > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(4) > div.infoBox > div > div > div > div > div.rwCallout_innerScroll > div.rwCallout_section_info > h2:nth-child(7)")
  .should("not.be.empty")

  var t1
  cy.get("#map-canvas > div > div > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(4) > div.infoBox > div > div > div > div > div.rwCallout_innerScroll > div.rwCallout_section_info > h2:nth-child(7)")
    .should(($d) => {
    t1 = $d.text();
    expect(t1).to.not.equal("Permit Conditions");
    })
})

Then("I Click on Alerts", () => {
  cy.get("#on-user-menu > div > div > div > div.col-auto > ul > li > div > a:nth-child(4)").click({ force: true })
  cy.wait(3000)
  cy.url().should('eq', Cypress.config().baseUrl+'/alerts')
})

When("I click on user menu", () => {
  cy.get("#userMenuButton > .ons-mdi").click({ force: true })

})

Then("The Alerts menu appears", () => {
  cy.get("#form-email-alerts > div:nth-child(2) > input").should("exist")
  cy.get("#form-email-alerts > div:nth-child(3) > select").should("exist")
  cy.get("#form-email-alerts > div:nth-child(4) > select").should("exist")
  cy.get("#form-email-alerts > div:nth-child(7) > div > div:nth-child(2) > input").should("exist")
  cy.get("#form-email-alerts > div.form-actions.mt-3 > div > div:nth-child(2) > button").should("exist")

})

Then("I click on Set Alarm", () => {
  cy.get("#form-email-alerts > div.form-actions.mt-3 > div > div:nth-child(2) > button").click({ force: true })
  cy.wait(1000)
})

Then("I enter a description {string}", (message) => {
  cy.get("#form-email-alerts > div:nth-child(2) > input").clear({ force: true })
  cy.get("#form-email-alerts > div:nth-child(2) > input").type(message,{ force: true })
  cy.wait(1000)

})

Then("I select Who are you option", () => {
  cy.get("#form-email-alerts > div:nth-child(3) > select").select('Member of the public',{ force: true })
  cy.wait(1000)

})

Then("I choose Get Alerts on", () => {
  cy.get("#form-email-alerts > div:nth-child(4) > select").select('search',{ force: true })
  cy.wait(1000)
  cy.get("#form-email-alerts > div:nth-child(4) > div.alerts-search-description").should("exist")
  var t1,t2
  cy.get("#form-email-alerts > div:nth-child(4) > div.alerts-search-description")
    .should(($d) => {
    t1 = $d.text();
    expect(t1).contain(" Your current search is: ");
    })
  cy.get("#form-email-alerts > div:nth-child(4) > div.alerts-search-description > span")
  .should(($d) => {
  t2 = $d.text();
  expect(t2).contain("KC050L-OLDL-00004060_UL1");
  })

})

Then("I Select Weekly alert frequency", () => {
  cy.get("#form-email-alerts > div:nth-child(7) > div > div:nth-child(2) > input").click({ force: true })
  cy.wait(1000)
})

Then("the status of this work is {string}", (name) => {
  cy.get("#map-canvas > div > div > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(4) > div.infoBox > div > div > div > div > div.rwCallout_innerScroll > div.rwCallout_section_info > table.rwCallout_table.mb-2 > tbody > tr:nth-child(5) > td.rwCallout_info")
    .should("not.be.empty")
  var t1
  cy.get("#map-canvas > div > div > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(4) > div.infoBox > div > div > div > div > div.rwCallout_innerScroll > div.rwCallout_section_info > table.rwCallout_table.mb-2 > tbody > tr:nth-child(5) > td.rwCallout_info")
    .should(($d) => {
    t1 = $d.text();
    expect(t1).equal(name);
    })
})

Then("I click on the search box to select dates", () => {
  cy.get("#ons-quick-picker").click({ force: true })
})

When("I click the date search {string} option on the list", (dateOption) => {
  cy.get('[data-value="' + dateOption + '"]').click({ force: true })
})

Then("I visit the url {string}", (message) => {
  cy.visit(Cypress.config().baseUrl+message)
})

Then("the date picker is updated with historical date range", () => {
  cy.get("#ons-quick-picker").should("not.be.empty")
  var t1
  cy.get("#ons-quick-picker")
    .should(($d) => {
    t1 = $d.text();
    expect(t1).contain("1 Jul 2021");
    })
  })

  Then("the callout shouldn not be visible", () => {
    cy.wait(2000)
    cy.get(".rwCallout_content").should("not.exist")
  })

  Then("I change the date search to July 2021", () => {
    cy.get(".ons-mdi-calendar-blank").click({ force: true })
    cy.get("#ons-datepicker-start > div > ul > li.collapse.show > div > div.datepicker-days > table > thead > tr:nth-child(1) > th.picker-switch").click({ force: true })
    cy.get("#ons-datepicker-start > div > ul > li.collapse.show > div > div.datepicker-years > table > tbody > tr > td > span:nth-child(3)").click({ force: true })
    cy.get("#ons-datepicker-start > div > ul > li.collapse.show > div > div.datepicker-months > table > tbody > tr > td > span:nth-child(7)").click({ force: true })
    cy.get("#ons-datepicker-start > div > ul > li.collapse.show > div > div.datepicker-days > table > tbody > tr:nth-child(1) > td:nth-child(4)").click({ force: true })
    cy.wait(1000)
  })

  Then("I wait for the page to open", () => {
    cy.wait(4000)
  })

  Then("the url callout should open", () => {
    cy.get(".rwCallout_roundAllCorners",{ timeout: 30000 }).should("exist")
  })


