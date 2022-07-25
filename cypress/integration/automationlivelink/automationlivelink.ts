import { Given, Then, When } from "cypress-cucumber-preprocessor/steps"

Then ("I´m on Live Link web dashboard",() => {
  cy.get("#on-right-panel > div > div.ons-panel-body > div > section.ons-livelink-dashboard > section > div > h2").should("exist")
  var t6
  cy.get("#on-right-panel > div > div.ons-panel-body > div > section.ons-livelink-dashboard > section > div > h2").should(($t) => {
    t6 = $t.text();
    expect(t6).equal("Live Link Closures");
  })
})

Then ("I can see the promoters and Filter",() => {
  cy.get("#promoters-list > button").should("exist")
  var t6
  cy.get("#promoters-list > button").should(($t) => {
    t6 = $t.text();
    expect(t6).equal(" Promoter ");
  })

  cy.get("#filters-list > button").should("exist")
  var t6
  cy.get("#filters-list > button").should(($t) => {
    t6 = $t.text();
    expect(t6).equal(" Filters ");
  })
})

Then ("I can see Closures on the list",() => {
  cy.get('#on-right-panel > div > div.ons-panel-body > div > section.ons-livelink-dashboard > section > div > div.closures.my-1 > ul').should("exist")
  cy.get('#on-right-panel > div > div.ons-panel-body > div > section.ons-livelink-dashboard > section > div > div.closures.my-1 > ul')
    .find('li').its('length').should('be.gt', 0)
})

Then ("I filter by promoter with no data {string} {string}",(org, id) => {
  cy.get("#promoters-list > button").click({ force: true});
  cy.wait(500)
  cy.get("#promoter-"+id+"").click({ force: true});
  cy.wait(500)
  cy.get("#on-right-panel > div > div.ons-panel-body > div > section.ons-livelink-dashboard > section > div > div.closures.my-1 > ul > div").should("exist")
  var t6
  cy.get("#on-right-panel > div > div.ons-panel-body > div > section.ons-livelink-dashboard > section > div > div.closures.my-1 > ul > div").should(($t) => {
    t6 = $t.text();
    expect(t6).equal("No closures available.");
  })
  cy.get("#promoters-list > button").click({ force: true});
  cy.wait(500)
  cy.get("#promoter-0").click({ force: true});
  cy.wait(500)

})

Then ("I filter by promoter {string} {string}",(org, id) => {
  cy.get("#promoters-list > button").click({ force: true});
  cy.wait(500)
  cy.get("#promoter-"+id+"").click({ force: true});
  cy.wait(500)
  cy.get("#promoters-list > button").click({ force: true});
  cy.wait(500)
  cy.get("#promoter-0").click({ force: true});
  cy.wait(500)

})

Then ("i click on one closure",() => {
  cy.get(".ongoing.emergency.road-closure > div").should("exist")
  cy.get(".ongoing.emergency.road-closure > div").eq(0).click({ force: true});
})

Then ("I Can see information",() => {
  cy.get("#on-right-panel > div > div.ons-panel-body > div > section.row.no-gutters.align-items-center.closure-header > div.col.text-center.closure-name.ellipsis > p.m-0.road-closure")
    .should("exist")
  var t6
  cy.get("#on-right-panel > div > div.ons-panel-body > div > section.row.no-gutters.align-items-center.closure-header > div.col.text-center.closure-name.ellipsis > p.m-0.road-closure").should(($t) => {
    t6 = $t.text();
    expect(t6).equal("Road Closure");
  })

  cy.get("#on-right-panel > div > div.ons-panel-body > div > section:nth-child(3) > div > ul > li > div:nth-child(1) > div.col-10.pl-3 > div:nth-child(1) > div:nth-child(1) > div").should(($t) => {
    t6 = $t.text();
    expect(t6).equal("Ongoing");
  })
  cy.get("#on-right-panel > div > div.ons-panel-body > div > section:nth-child(3) > div > ul > li > div:nth-child(1) > div.col-10.pl-3 > div:nth-child(2) > div:nth-child(1) > div.closure-street").should(($t) => {
    t6 = $t.text();
    expect(t6).equal("Unknown road");
  })
  cy.get("#on-right-panel > div > div.ons-panel-body > div > section:nth-child(4) > div > h2").should(($t) => {
    t6 = $t.text();
    expect(t6).contain("Schedule");
  })
  cy.get("#on-right-panel > div > div.ons-panel-body > div > section:nth-child(4) > div > div > p:nth-child(1) > span:nth-child(1)").should(($t) => {
    t6 = $t.text();
    expect(t6).equal("Planned start date");
  })
  cy.get("#on-right-panel > div > div.ons-panel-body > div > section:nth-child(4) > div > div > p:nth-child(1) > span.section-label.float-right").should(($t) => {
    t6 = $t.text();
    expect(t6).equal("Planned end date");
  })

  cy.get("#on-right-panel > div > div.ons-panel-body > div > section:nth-child(4) > div > h2 > a > i").should("exist")

  cy.get("#on-right-panel > div > div.ons-panel-body > div > section.row.no-gutters.align-items-center.closure-header > div.col-auto.open-closure-in-tm > a").should("exist")
  cy.get("#on-right-panel > div > div.ons-panel-body > div > section.row.no-gutters.align-items-center.closure-header > div.col-auto.open-closure-in-tm > a")
    .invoke('attr', 'title').should('eq',"Open in Traffic Management")

    cy.get("#on-right-panel > div > div.ons-panel-body > div > section:nth-child(6) > div > div:nth-child(2) > div > button").should("exist")
    cy.get("#on-right-panel > div > div.ons-panel-body > div > section:nth-child(6) > div > div:nth-child(2) > div > button").should(($t) => {
      t6 = $t.text();
      expect(t6).contains("Open road");
    })
})

Then ("i Click on pencil to show dates",() => {
  cy.get("#on-right-panel > div > div.ons-panel-body > div > section:nth-child(4) > div > h2 > a > i").click({ force: true});
  cy.wait(500)

  cy.get("#on-right-panel > div > div.ons-panel-body > div > section.row.no-gutters.dates-container > div > div.row.pt-3 > div:nth-child(1) > button").should("exist")
  cy.get("#on-right-panel > div > div.ons-panel-body > div > section.row.no-gutters.dates-container > div > div.row.pt-3 > div:nth-child(2) > button").should("exist")
})

Then ("i go back to dashboard",() => {
  cy.get("#on-right-panel > div > div.ons-panel-body > div > section.row.no-gutters.align-items-center.closure-header > div:nth-child(1) > a > i").click({ force: true});
  cy.wait(1000)
})

Then ("i choose a closed closure",() => {
  cy.get(".expired.emergency.road-closure").eq(0).should("exist")
  cy.get(".expired.emergency.road-closure > div").eq(0).click({ force: true});

})

Then ("I Can see Expired information",() => {
  var t6
  cy.get("#on-right-panel > div > div.ons-panel-body > div > section.row.no-gutters.align-items-center.closure-header > div.col.text-center.closure-name.ellipsis > p.m-0.road-closure").should(($t) => {
    t6 = $t.text();
    expect(t6).equal("Road Closure");
  })

  cy.get("#on-right-panel > div > div.ons-panel-body > div > section:nth-child(3) > div > ul > li > div:nth-child(1) > div.col-10.pl-3 > div:nth-child(1) > div:nth-child(1) > div").should(($t) => {
    t6 = $t.text();
    expect(t6).equal("Expired");
  })

  cy.get("#on-right-panel > div > div.ons-panel-body > div > section:nth-child(4) > div > h2").should(($t) => {
    t6 = $t.text();
    expect(t6).contain("Schedule");
  })
  cy.get("#on-right-panel > div > div.ons-panel-body > div > section:nth-child(4) > div > div > p:nth-child(1) > span:nth-child(1)").should(($t) => {
    t6 = $t.text();
    expect(t6).equal("Planned start date");
  })
  cy.get("#on-right-panel > div > div.ons-panel-body > div > section:nth-child(4) > div > div > p:nth-child(1) > span.section-label.float-right").should(($t) => {
    t6 = $t.text();
    expect(t6).equal("Planned end date");
  })

})

Then ("I click on open in TM",() => {
  cy.get("#on-right-panel > div > div.ons-panel-body > div > section.row.no-gutters.align-items-center.closure-header > div.col-auto.open-closure-in-tm > a")
    .click({ force: true});
  cy.wait(1000)
  cy.get("#on-right-panel > div > div.ons-panel-body > div:nth-child(2) > section:nth-child(1) > div > header > div:nth-child(1) > small").should("exist")
  cy.url().should('include',Cypress.config().baseUrl+'/tm#tm/plan/edit/');
})

Then ("I click on Filters",() => {
  cy.get("#filters-list > button")
    .click({ force: true});
  cy.wait(1000)
  cy.get("#relevant").should("exist")
  cy.get("#ongoing").should("exist")
  cy.get("#upcoming").should("exist")
  cy.get("#expired").should("exist")

})

Then ("I clear all the Filters",() => {
  cy.get("#ongoing").click({ force: true});
  cy.get("#upcoming").click({ force: true});
  cy.get("#expired").click({ force: true});
  cy.wait(1000)

})

Then ("I select {string}",(option) => {
  cy.get("#"+option+"").click({ force: true});
  cy.get("#on-right-panel > div > div.ons-panel-body > div > section.ons-livelink-dashboard > section > div > h2")
  cy.get("#filters-list > button")
  .click({ force: true});
  cy.wait(1000)

})

Then ("I deslect Ongoing",() => {
  cy.wait(1000)
  cy.get("#filters-list > button")
  .click({ force: true});
  cy.get("#ongoing").click({ force: true});
  cy.get("#filters-list > button")
  .click({ force: true});
  cy.wait(1000)
})

Then ("I deslect Expired",() => {
  cy.wait(1000)
  cy.get("#filters-list > button")
  .click({ force: true});
  cy.get("#expired").click({ force: true});
  cy.get("#filters-list > button")
  .click({ force: true});
  cy.wait(1000)
})

Then ("I deslect Upcoming",() => {
  cy.wait(1000)
  cy.get("#filters-list > button")
  .click({ force: true});
  cy.get("#upcoming").click({ force: true});
  cy.get("#filters-list > button")
  .click({ force: true});
  cy.wait(1000)
})


Then ("I Click on {string}",(message) => {
  cy.wait(1000)
  cy.get("#on-right-panel > div > div.ons-panel-body > div > section.ons-livelink-dashboard > section > div > button").should("exist")
  cy.get("#on-right-panel > div > div.ons-panel-body > div > section.ons-livelink-dashboard > section > div > button")
    .invoke('attr', 'title').should('eq',message)
  cy.get("#on-right-panel > div > div.ons-panel-body > div > section.ons-livelink-dashboard > section > div > button")
    .click({ force: true});
  cy.wait(1000)

})

Then ("I close the filters",() => {
  cy.get("#filters-list > button")
    .click({ force: true});
  cy.wait(1000)
})

Then ("I click on Live link Status Report",() => {
  cy.get("#on-right-panel > div > div.ons-panel-body > div > section:nth-child(2) > div > a:nth-child(4)").should("exist")
  var t6
  cy.get("#on-right-panel > div > div.ons-panel-body > div > section:nth-child(2) > div > a:nth-child(4)").should(($t) => {
    t6 = $t.text();
    expect(t6).contains("Live Link Status Report");
  })
  cy.get("#on-right-panel > div > div.ons-panel-body > div > section:nth-child(2) > div > a:nth-child(4)").click({ force: true});

})

Then ("I can see the information",() => {
  cy.get("#on-right-panel > div > div.ons-panel-body > div > section:nth-child(1) > div > header > h1").should("exist")
  var t6
  cy.get("#on-right-panel > div > div.ons-panel-body > div > section:nth-child(1) > div > header > h1").should(($t) => {
    t6 = $t.text();
    expect(t6).contains("Live Link Status Report");
  })

  cy.get("#on-right-panel > div > div.ons-panel-body > div > section:nth-child(2) > div:nth-child(1) > div > a").should("exist")
  var t6
  cy.get("#on-right-panel > div > div.ons-panel-body > div > section:nth-child(2) > div:nth-child(1) > div > a").should(($t) => {
    t6 = $t.text();
    expect(t6).contains("Home");
  })

  cy.get("#run-report").should("exist")
  var t6
  cy.get("#run-report").should(($t) => {
    t6 = $t.text();
    expect(t6).contains("Run report");
  })

  cy.get("#webReport > div:nth-child(1) > label").should("exist")
  var t6
  cy.get("#webReport > div:nth-child(1) > label").should(($t) => {
    t6 = $t.text();
    expect(t6).contains("Start date");
  })

  cy.get("#webReport > div:nth-child(2) > label").should("exist")
  var t6
  cy.get("#webReport > div:nth-child(2) > label").should(($t) => {
    t6 = $t.text();
    expect(t6).contains("End date");
  })

})

Then ("I click on Run Report",() => {
  cy.get("#run-report").click({ force: true});
})

Then ("I choose Start Date {string}",(date) => {
  cy.get("#startDate").clear({ force: true })
  cy.get("#startDate").type(date,{ force: true } )
  cy.wait(500)
})

Then ("I choose End Date {string}",(date) => {
  cy.get("#endDate").clear({ force: true })
  cy.get("#endDate").type(date,{ force: true } )
  cy.wait(500)
})
