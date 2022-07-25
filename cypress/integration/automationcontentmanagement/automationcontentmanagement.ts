import { Given, Then, When } from "cypress-cucumber-preprocessor/steps"

Then ("I can only see enable Public Map and Content Manager",() => {
  cy.get("#on-modules-menu > div > div > a > i").click({force: true});
  cy.wait(500)
  cy.get("#on-modules-menu > div > div > div > a:nth-child(1)").should('exist')

  var t1,t2
  cy.get("#on-modules-menu > div > div > div > a:nth-child(1)").should(($t) => {
    t2 = $t.text();
    expect(t2).equal("Public Map");
    })

  cy.get("#on-modules-menu > div > div > div > a.dropdown-item.active").invoke('attr', 'class').should('eq',"dropdown-item active")
  cy.get("#on-modules-menu > div > div > div > a.dropdown-item.active").should(($t) => {
    t1 = $t.text();
    expect(t1).equal("Content Management");
    })

  cy.get("#on-modules-menu > div > div > div > a:nth-child(3)").invoke('attr', 'class').should('eq',"dropdown-item disabled")
  cy.get("#on-modules-menu > div > div > div > a:nth-child(5)").invoke('attr', 'class').should('eq',"dropdown-item disabled")
  cy.get("#on-modules-menu > div > div > div > a:nth-child(6)").invoke('attr', 'class').should('eq',"dropdown-item disabled")
  cy.get("#on-modules-menu > div > div > div > a:nth-child(7)").invoke('attr', 'class').should('eq',"dropdown-item disabled")
  cy.get("#on-modules-menu > div > div > div > a:nth-child(8)").invoke('attr', 'class').should('eq',"dropdown-item disabled")
  cy.get("#on-modules-menu > div > div > div > a:nth-child(9)").invoke('attr', 'class').should('eq',"dropdown-item disabled")

})

Then ("I go to Traffic Management module",() => {
  cy.get("#on-modules-menu > div > div > a > i").click({force: true});
  cy.wait(500)
  cy.get("#on-modules-menu > div > div > div > a:nth-child(8)").click({force: true});
  cy.wait(3000)
})

Then ("I go to Content Management module",() => {
  cy.get("#on-modules-menu > div > div > a > i").click({force: true});
  cy.wait(500)
  cy.get("#on-modules-menu > div > div > div > a:nth-child(4)").click({force: true});
  cy.wait(3000)
})


Then ("I click on Report",() => {
  cy.get("#on-modules-menu > div > div > a > i").click({force: true});
  cy.wait(500)
  cy.get("#on-modules-menu > div > div > div > a:nth-child(5)").click({force: true});
  cy.wait(500)
})

Then ("the Report buy module is displayed",() => {
  cy.get("#on-top-bar > div.ons-buy-modules > div:nth-child(2) > div > div:nth-child(3)").should('exist')
  cy.wait(500)
})


Then ("i close it",() => {
  cy.get("#on-top-bar > div.ons-buy-modules > div:nth-child(1) > div > span > i").click({force: true});
})

Then ("I can see Content Management module page",() => {
  cy.get("#on-right-panel > div > div.ons-panel-body > div > section.row.no-gutters.pb-4 > div > a:nth-child(1)").should('exist');
  cy.get("#on-right-panel > div > div.ons-panel-body > div > section.row.no-gutters.pb-4 > div > a:nth-child(2)").should('exist');
  cy.get("#on-right-panel > div > div.ons-panel-body > div > section.row.no-gutters.pb-4 > div > a:nth-child(3)").should('exist');
  cy.get("#on-right-panel > div > div.ons-panel-body > div > section:nth-child(3) > div > a:nth-child(1)").should('exist');
  cy.get("#on-right-panel > div > div.ons-panel-body > div > section:nth-child(3) > div > a:nth-child(2)").should('exist');
  cy.get("#on-right-panel > div > div.ons-panel-body > div > section:nth-child(3) > div > a:nth-child(3)").should('exist');

  var t1,t2,t3,t4,t5,t6
  cy.get("#on-right-panel > div > div.ons-panel-body > div > section.row.no-gutters.pb-4 > div > a:nth-child(1)").should(($t) => {
    t1 = $t.text();
    expect(t1).equal(" Individual content ");
    })

  cy.get("#on-right-panel > div > div.ons-panel-body > div > section.row.no-gutters.pb-4 > div > a:nth-child(2)").should(($t) => {
    t2 = $t.text();
    expect(t2).equal(" Default content ");
    })
  cy.get("#on-right-panel > div > div.ons-panel-body > div > section.row.no-gutters.pb-4 > div > a:nth-child(3)").should(($t) => {
    t3 = $t.text();
    expect(t3).equal(" Works categories ");
    })

  cy.get("#on-right-panel > div > div.ons-panel-body > div > section:nth-child(3) > div > a:nth-child(1)").should(($t) => {
    t4 = $t.text();
    expect(t4).equal(" Website usage report ");
    })
  cy.get("#on-right-panel > div > div.ons-panel-body > div > section:nth-child(3) > div > a:nth-child(2)").should(($t) => {
    t5 = $t.text();
    expect(t5).equal(" Sentiment analysis report ");
  })

  cy.get("#on-right-panel > div > div.ons-panel-body > div > section:nth-child(3) > div > a:nth-child(3)").should(($t) => {
    t6 = $t.text();
    expect(t6).equal(" News widget ");
    })
})

When("I Logout", () => {
  cy.get("#userMenuButton > .ons-mdi").click({ force: true })
  cy.get('[href="'+Cypress.config().baseUrl+'/logout"]').click({ force: true})
  cy.wait(3000)
})
