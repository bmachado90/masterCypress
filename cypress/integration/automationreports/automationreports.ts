import { Given, Then, When } from "cypress-cucumber-preprocessor/steps"
import { eq } from "cypress/types/lodash"

Then ("I must be able to see the Report Page",() => {
  cy.url().should('eq', Cypress.config().baseUrl+'/report')
})

Then ("I´m on the Report Page",() => {
  cy.wait(1000)
  cy.get(".MuiTypography-root.MuiTypography-h2.css-1gflgsd",{ timeout: 30000 }).eq(0).should('exist',{force: true})
  var t6;
  cy.get(".MuiTypography-root.MuiTypography-h2.css-1gflgsd").eq(0).should(($t) => {
    t6 = $t.text();
    expect(t6).equal("Date range");
  })

  cy.get("#on-right-panel > div > div.ons-panel-body > div > div:nth-child(3) > div > div.MuiButtonBase-root.MuiAccordionSummary-root.Mui-expanded.css-1b73rtw > div.MuiAccordionSummary-content.Mui-expanded.css-1n11r91 > div > h2").should('exist',{force: true})
  var t6;
  cy.get("#on-right-panel > div > div.ons-panel-body > div > div:nth-child(3) > div > div.MuiButtonBase-root.MuiAccordionSummary-root.Mui-expanded.css-1b73rtw > div.MuiAccordionSummary-content.Mui-expanded.css-1n11r91 > div > h2").should(($t) => {
    t6 = $t.text();
    expect(t6).equal("Traffic impact");
  })

  cy.get("#on-right-panel > div > div.ons-panel-body > div > div:nth-child(4) > div > div.MuiButtonBase-root.MuiAccordionSummary-root.css-1b73rtw > div.MuiAccordionSummary-content.css-1n11r91 > div > h2").should('exist',{force: true})
  var t6;
  cy.get("#on-right-panel > div > div.ons-panel-body > div > div:nth-child(4) > div > div.MuiButtonBase-root.MuiAccordionSummary-root.css-1b73rtw > div.MuiAccordionSummary-content.css-1n11r91 > div > h2").should(($t) => {
    t6 = $t.text();
    expect(t6).equal("Works type");
  })

  cy.get("#on-right-panel > div > div.ons-panel-body > div > div:nth-child(5) > div > div.MuiButtonBase-root.MuiAccordionSummary-root.css-1b73rtw > div.MuiAccordionSummary-content.css-1n11r91 > div > h2").should('exist',{force: true})
  var t6;
  cy.get("#on-right-panel > div > div.ons-panel-body > div > div:nth-child(5) > div > div.MuiButtonBase-root.MuiAccordionSummary-root.css-1b73rtw > div.MuiAccordionSummary-content.css-1n11r91 > div > h2").should(($t) => {
    t6 = $t.text();
    expect(t6).equal("Traffic management");
  })

  cy.get("#on-right-panel > div > div.ons-panel-body > div > div:nth-child(6) > div > div.MuiButtonBase-root.MuiAccordionSummary-root.css-1b73rtw > div.MuiAccordionSummary-content.css-1n11r91 > div > h2").should('exist',{force: true})
  var t6;
  cy.get("#on-right-panel > div > div.ons-panel-body > div > div:nth-child(6) > div > div.MuiButtonBase-root.MuiAccordionSummary-root.css-1b73rtw > div.MuiAccordionSummary-content.css-1n11r91 > div > h2").should(($t) => {
    t6 = $t.text();
    expect(t6).equal("Works categories");
  })

  cy.get("#on-right-panel > div > div.ons-panel-body > div > div:nth-child(7) > div > div.MuiButtonBase-root.MuiAccordionSummary-root.css-1b73rtw > div.MuiAccordionSummary-content.css-1n11r91 > div > h2").should('exist',{force: true})
  var t6;
  cy.get("#on-right-panel > div > div.ons-panel-body > div > div:nth-child(7) > div > div.MuiButtonBase-root.MuiAccordionSummary-root.css-1b73rtw > div.MuiAccordionSummary-content.css-1n11r91 > div > h2").should(($t) => {
    t6 = $t.text();
    expect(t6).equal("Works promoter");
  })

  cy.get("#on-right-panel > div > div.ons-panel-body > div > div:nth-child(8) > div > div.MuiButtonBase-root.MuiAccordionSummary-root.css-1b73rtw > div.MuiAccordionSummary-content.css-1n11r91 > div > h2").should('exist',{force: true})
  var t6;
  cy.get("#on-right-panel > div > div.ons-panel-body > div > div:nth-child(8) > div > div.MuiButtonBase-root.MuiAccordionSummary-root.css-1b73rtw > div.MuiAccordionSummary-content.css-1n11r91 > div > h2").should(($t) => {
    t6 = $t.text();
    expect(t6).equal("Permanent changes");
  })

  cy.get("#on-right-panel > div > div.ons-panel-body > div > div:nth-child(9) > div > div.MuiButtonBase-root.MuiAccordionSummary-root.css-1b73rtw > div.MuiAccordionSummary-content.css-1n11r91 > div > h2").should('exist',{force: true})
  var t6;
  cy.get("#on-right-panel > div > div.ons-panel-body > div > div:nth-child(9) > div > div.MuiButtonBase-root.MuiAccordionSummary-root.css-1b73rtw > div.MuiAccordionSummary-content.css-1n11r91 > div > h2").should(($t) => {
    t6 = $t.text();
    expect(t6).equal("Location");
  })

  cy.get("#on-right-panel > div > div.ons-panel-body > div > div:nth-child(10) > div > div.MuiButtonBase-root.MuiAccordionSummary-root.css-1b73rtw > div.MuiAccordionSummary-content.css-1n11r91 > div > h2").should('exist',{force: true})
  var t6;
  cy.get("#on-right-panel > div > div.ons-panel-body > div > div:nth-child(10) > div > div.MuiButtonBase-root.MuiAccordionSummary-root.css-1b73rtw > div.MuiAccordionSummary-content.css-1n11r91 > div > h2").should(($t) => {
    t6 = $t.text();
    expect(t6).equal("Road");
  })

  cy.get("#on-right-panel > div > div.ons-panel-body > div > div:nth-child(11) > div > div.MuiButtonBase-root.MuiAccordionSummary-root.css-1b73rtw > div.MuiAccordionSummary-content.css-1n11r91 > div > h2").should('exist',{force: true})
  var t6;
  cy.get("#on-right-panel > div > div.ons-panel-body > div > div:nth-child(11) > div > div.MuiButtonBase-root.MuiAccordionSummary-root.css-1b73rtw > div.MuiAccordionSummary-content.css-1n11r91 > div > h2").should(($t) => {
    t6 = $t.text();
    expect(t6).equal("Advanced options");
  })

  cy.get("#on-right-panel > div > div.ons-panel-body > div > button").should('exist',{force: true})
  cy.get("#on-right-panel > div > div.ons-panel-body > div > button").invoke('attr', 'label').should('eq',"Search and download results")
})

Then ("i Click on Advance Option",() => {
  cy.get("#on-right-panel > div > div.ons-panel-body > div > div:nth-child(11) > div > div.MuiButtonBase-root.MuiAccordionSummary-root.css-1b73rtw > div.MuiAccordionSummary-content.css-1n11r91 > div > h2")
    .click({force: true})
  cy.wait(500)
})

Then ("I input search for {string}",(message) => {
  cy.wait(500)
  cy.get("#on-right-panel > div > div.ons-panel-body > div > div:nth-child(11) > div > div.MuiCollapse-root.MuiCollapse-vertical.MuiCollapse-entered.css-c4sutr > div > div > div > div > div > div:nth-child(1) > div > div > input").clear({ force: true })
  cy.get("#on-right-panel > div > div.ons-panel-body > div > div:nth-child(11) > div > div.MuiCollapse-root.MuiCollapse-vertical.MuiCollapse-entered.css-c4sutr > div > div > div > div > div > div:nth-child(1) > div > div > input").click({ force: true })
  cy.get("#on-right-panel > div > div.ons-panel-body > div > div:nth-child(11) > div > div.MuiCollapse-root.MuiCollapse-vertical.MuiCollapse-entered.css-c4sutr > div > div > div > div > div > div:nth-child(1) > div > div > input").type(message,{ force: true } )
  cy.wait(500)
})

Then ("I Click on Search or Download",() => {
  cy.get("#on-right-panel > div > div.ons-panel-body > div > button").click({force: true})
  cy.wait(1000)
})

Then ("I click on Location",() => {
  cy.get("#on-right-panel > div > div.ons-panel-body > div > div:nth-child(9) > div > div.MuiButtonBase-root.MuiAccordionSummary-root.css-1b73rtw > div.MuiAccordionSummary-content.css-1n11r91 > div > h2").click({force: true})
  cy.wait(500)
})

Then ("Insert the org {string}",(message) => {
  cy.get("#on-right-panel > div > div.ons-panel-body > div > div:nth-child(9) > div > div.MuiCollapse-root.MuiCollapse-vertical.MuiCollapse-entered.css-c4sutr > div > div > div > div > div.MuiOutlinedInput-root.MuiInputBase-root.MuiInputBase-colorSecondary.MuiInputBase-fullWidth.MuiInputBase-sizeSmall.css-qar1wz > div").click({force: true})
  cy.wait(1000)
  cy.get("#menu- > div.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation1.MuiMenu-paper.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation8.MuiPopover-paper.css-1lpkgth > ul > li:nth-child(195) > div > span").click({force: true})
  cy.wait(1000)
  cy.get("#on-right-panel > div > div.ons-panel-body > div > div:nth-child(9) > div > div.MuiCollapse-root.MuiCollapse-vertical.MuiCollapse-entered.css-c4sutr > div > div > div > div > div.MuiFormGroup-root.css-1oo16em > label:nth-child(1) > span.MuiTypography-root.MuiTypography-body1.MuiFormControlLabel-label.css-upxj2j").click({force: true})
  cy.wait(500)
  var t6
  cy.get("#on-right-panel > div > div.ons-panel-body > div > div:nth-child(9) > div > div.MuiCollapse-root.MuiCollapse-vertical.MuiCollapse-entered.css-c4sutr > div > div > div > div > div.MuiOutlinedInput-root.MuiInputBase-root.MuiInputBase-colorSecondary.MuiInputBase-fullWidth.MuiInputBase-sizeSmall.css-qar1wz")
        .should(($t) => {
    t6 = $t.text();
    expect(t6).contain(message);
  })
})

Then ("I Check Data range Labels",() => {
  cy.wait(500)
  cy.get(".MuiTypography-root.MuiTypography-h2.css-1gflgsd",{ timeout: 30000 }).eq(0).should('exist',{force: true})
  var t6;
  cy.get(".MuiTypography-root.MuiTypography-h2.css-1gflgsd").eq(0).should(($t) => {
    t6 = $t.text();
    expect(t6).equal("Date range");
  })

  cy.get("#on-right-panel > div > div.ons-panel-body > div > div:nth-child(2) > div > div.MuiCollapse-root.MuiCollapse-vertical.MuiCollapse-entered.css-c4sutr > div > div > div > div > div > form > div > div.col-6.pr-2.form-group.m-0 > label").should(($t) => {
    t6 = $t.text();
    expect(t6).equal("From");
  })

  cy.get("#on-right-panel > div > div.ons-panel-body > div > div:nth-child(2) > div > div.MuiCollapse-root.MuiCollapse-vertical.MuiCollapse-entered.css-c4sutr > div > div > div > div > div > form > div > div.col-6.pl-2.form-group.m-0 > label").should(($t) => {
    t6 = $t.text();
    expect(t6).equal("To");
  })
})

Then ("I choose From {string}",(dates) => {
  cy.get("#startDate").eq(0).clear({ force: true })
    cy.get("#startDate").eq(0).type(dates,{ force: true })
    cy.wait(1000)
})

Then ("I choose To {string}",(dates) => {
  cy.get("#endDate").eq(0).clear({ force: true })
    cy.get("#endDate").eq(0).type(dates,{ force: true })
    cy.wait(1000)
})
