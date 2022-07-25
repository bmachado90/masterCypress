import { Given, Then, When } from "cypress-cucumber-preprocessor/steps"

Then("the Clash & Coordination module is presented.", () => {


  cy.get("#on-right-panel > div > div.ons-panel-body > div > section:nth-child(1) > header > h1").should('exist',{force: true})
  cy.get("#ba-dropdown-button > span").should('exist',{force: true})
  cy.get("#on-right-panel > div > div.ons-panel-body > div > section:nth-child(2) > div > div > h2").should('exist',{force: true})

  cy.get("#on-right-panel > div > div.ons-panel-body > div > section:nth-child(2) > div > div > div:nth-child(2) > label").should('exist',{force: true})
  var d1,d2,d3,d4,d5,d6,d7,d8,d9,d10,d11,d12
  var t1,t2
  cy.get("#on-right-panel > div > div.ons-panel-body > div > section:nth-child(2) > div > div > div:nth-child(2) > label").should(($d) => {
    d1 = $d.text();
    expect(d1).equal(" Highway Authority ");
    })
  cy.get("#on-right-panel > div > div.ons-panel-body > div > section:nth-child(2) > div > div > div:nth-child(3) > label").should(($d) => {
    d2 = $d.text();
    expect(d2).equal(" Electricity ");
    })
    cy.get("#on-right-panel > div > div.ons-panel-body > div > section:nth-child(2) > div > div > div:nth-child(4) > label").should(($d) => {
      d3 = $d.text();
      expect(d3).equal(" Gas ");
      })
    cy.get("#on-right-panel > div > div.ons-panel-body > div > section:nth-child(2) > div > div > div:nth-child(5) > label").should(($d) => {
      d4 = $d.text();
      expect(d4).equal(" Water ");
      })
    cy.get("#on-right-panel > div > div.ons-panel-body > div > section:nth-child(2) > div > div > div:nth-child(6) > label").should(($d) => {
      d5 = $d.text();
      expect(d5).equal(" Telecommunications ");
      })
    cy.get("#on-right-panel > div > div.ons-panel-body > div > section:nth-child(2) > div > div > div:nth-child(7) > label").should(($d) => {
      d6 = $d.text();
      expect(d6).equal(" Rail ");
      })
    cy.get("#on-right-panel > div > div.ons-panel-body > div > section:nth-child(2) > div > div > div:nth-child(8) > label").should(($d) => {
      d7 = $d.text();
      expect(d7).equal(" Tram / Tube ");
      })
    cy.get("#on-right-panel > div > div.ons-panel-body > div > section:nth-child(2) > div > div > div:nth-child(9) > label").should(($d) => {
      d8 = $d.text();
      expect(d8).equal(" Petroleum transmission ");
      })
    cy.get("#on-right-panel > div > div.ons-panel-body > div > section:nth-child(2) > div > div > div:nth-child(10) > label").should(($d) => {
      d9 = $d.text();
      expect(d9).equal(" Other ");
      })
    cy.get("#on-right-panel > div > div.ons-panel-body > div > section:nth-child(2) > div > div > div:nth-child(11) > label").should(($d) => {
      d10 = $d.text();
      expect(d10).equal(" National infrastructure ");
      })
    cy.get("#on-right-panel > div > div.ons-panel-body > div > section:nth-child(2) > div > div > div:nth-child(12) > label").should(($d) => {
      d11 = $d.text();
      expect(d11).equal(" Highway Authority Contractor ");
      })
    cy.get("#on-right-panel > div > div.ons-panel-body > div > section:nth-child(2) > div > div > div:nth-child(13) > label").should(($d) => {
      d12 = $d.text();
      expect(d12).equal(" Filter by visible ");
      })
  cy.get("#on-right-panel > div > div.ons-panel-body > div > section:nth-child(3) > div > p > span.clash-list-message").should('exist',{force: true})

  cy.get("#on-right-panel > div > div.ons-panel-body > div > section:nth-child(3) > div > p > span.clash-list-message").should(($t) => {
    t1 = $t.text();
    expect(t1).equal("Clashes with works starting in this period: ");
    })

  cy.get("#on-right-panel > div > div.ons-panel-body > div > section:nth-child(3) > div > button").should('exist',{force: true})
  cy.get("#on-right-panel > div > div.ons-panel-body > div > section:nth-child(3) > div > button").should(($t) => {
    t2 = $t.text();
    expect(t2).equal("  Load more results ");
    })

})

Then ("I Expand clash calendar dropdown.",() => {
  cy.get("#ba-dropdown-button > span").click({force: true});
  cy.wait(500)
})


Then ("the dropdown opens",() => {
  cy.get("#ba-dropdown > div > div > div").should('exist',{force: true})
  var t1,t2,t3

  cy.get("#ba-dropdown > div > div > div").should('exist')
  cy.get("#ba-dropdown > div > div > div > a:nth-child(2)").should(($t) => {
    t2 = $t.text();
    expect(t2).equal("Next 7 days");
    })
  cy.get("#ba-dropdown > div > div > div > a:nth-child(3)").should(($t) => {
    t1 = $t.text();
    expect(t1).equal("Next 15 days");
    })
  cy.get("#ba-dropdown > div > div > div > a:nth-child(4)").should(($t) => {
    t3 = $t.text();
    expect(t3).equal("Next 30 days");
    })

  cy.get("#ba-dropdown > div > div > div > h6:nth-child(6)").should('exist',{force: true})

})

Then ("I Select a day from Clash Detected on option.",() => {
  cy.get("#ba-dropdown > div > div > div > a:nth-child(7)").click({force: true});
  cy.wait(2000)
})

Then ("A list is returned",() => {
  cy.get("#on-right-panel > div > div.ons-panel-body > div > section:nth-child(3) > div > div.clash-list-container").should('exist',{force: true})
  cy.wait(1000)
})

//I enter a clash
Then ("I enter a clash",() => {
  cy.get("#on-right-panel > div > div.ons-panel-body > div > section:nth-child(3) > div > div.clash-list-container > ul > li:nth-child(1) > a").click({force: true});
  cy.wait(500)
})

Then ("the clash information is displayed",() => {
  cy.get("#back-btn > i").should('exist')
  cy.get("#clash-list > p:nth-child(1)").should('exist',{force: true})
  var t1,t2,t3,t4,t5,t6,t7
  cy.get("#clash-work > li > div.detail > ul > li:nth-child(2) > p.label.mb-0").should(($t) => {
    t3 = $t.text();
    expect(t3).equal("Works Promoter");
    })

  cy.get("#clash-work > li > div.detail > ul > li:nth-child(1) > p.date.mb-0").should('exist',{force: true})
  cy.get("#clash-work > li > div.header").should('exist')

  cy.get("#clash-work > li > div.detail > ul > li:nth-child(3) > p.label.mb-0").should('exist',{force: true})
  cy.get("#clash-work > li > div.detail > ul > li:nth-child(3) > p.label.mb-0").should(($t) => {
    t2 = $t.text();
    expect(t2).equal("Highway authority");
    })

  cy.get("#clash-work > li > div.detail > ul > li:nth-child(4) > p.label.mb-0").should(($t) => {
    t7 = $t.text();
    expect(t7).equal("Description");
    })


  //cy.get("#clash-work > li > div.detail > ul > li:nth-child(5) > p.label.mb-0").should('exist',{force: true})
  //cy.get("#clash-work > li > div.detail > ul > li:nth-child(5) > p.label.mb-0").should(($t) => {
  //  t1 = $t.text();
  //  expect(t1).equal("Traffic lights, etc");
  //  })

  cy.get("#clash-work > li > div.detail > ul > li:nth-child(5) > p.label.mb-0").should('exist',{force: true})
  cy.get("#clash-work > li > div.detail > ul > li:nth-child(5) > p.label.mb-0").should(($t) => {
    t4 = $t.text();
    expect(t4).equal("Status");
    })
  cy.get("#clash-work > li > div.detail > ul > li:nth-child(6) > p.label.mb-0").should('exist',{force: true})
  cy.get("#clash-work > li > div.detail > ul > li:nth-child(6) > p.label.mb-0").should(($t) => {
    t5 = $t.text();
    expect(t5).equal("Last updated on one.network");
    })


  cy.get("#clash-list > p:nth-child(3)").should('exist',{force: true})
  cy.get("#clash-list > p:nth-child(3)").should(($t) => {
    t6 = $t.text();
    expect(t6).equal("May clash with these assets:");
    })
})

Then ("I mouseover Actions",() => {
  cy.get("#clash-work > li > div.header > div.actions").trigger('mouseover',{ force: true});
  cy.get("#clash-work > li > div.header > div.actions > div").click({ force: true});

})

Then ("I mouseover color flags",() => {
  cy.get("#clash-flags > li.flag.green > span").trigger('mouseover',{ force: true})
  cy.get("#clash-flags > li.flag.green").invoke('attr', 'title').should('eq',"Flag this report as green")
  cy.wait(500)

  cy.get("#clash-flags > li.flag.amber > span").trigger('mouseover',{ force: true})
  cy.get("#clash-flags > li.flag.amber").invoke('attr', 'title').should('eq',"Flag this report as amber")
  cy.wait(500)

  cy.get("#clash-flags > li.flag.red > span").trigger('mouseover',{ force: true})
  cy.get("#clash-flags > li.flag.red").invoke('attr', 'title').should('eq',"Flag this report as red")
  cy.wait(500)
})

Then ("I select a green flags",() => {
  cy.get("#clash-flags > li.flag.green").click({ force: true});
  cy.wait(500)
})

Then ("I go back",() => {
  cy.get("#back-btn").click({ force: true});
  cy.wait(500)
})

Then ("I click on Open Clash",() => {
  cy.get("#map-canvas > div > div > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(4) > div.infoBox > div > div > div > div > div.rwCallout_innerScroll > div.rwCallout_extra_content > a").click({ force: true});
  cy.wait(500)
})

Then ("The clash menu appears",() => {
  cy.get("#clash-work > li > div.detail > ul > li:nth-child(2) > p.value > strong").click({ force: true});
  cy.wait(500)
  var t1
  cy.get("#clash-work > li > div.detail > ul > li:nth-child(2) > p.value > strong").should(($t) => {
    t1 = $t.text();
    t1.trim.length !==0;
    })
})

Then ("option Open Clash is not visible",() => {
  cy.get("#map-canvas > div > div > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(4) > div.infoBox > div > div > div > div > div.rwCallout_innerScroll > div.rwCallout_extra_content > a")
    .should('not.exist')
})

Then ("I click on the {string} icon {string}", (nome, numero) => {
  cy.get("#on-layer-controls > div > div > section.ons-layer-groups-container.ons-layer-menu-section > section:nth-child("+numero+") > div > div.row.no-gutters.ons-zoom-popover > div.col-auto.ons-layer-group-icon.ons-layer-group-toggler > i").click({force: true});
  cy.get("#on-layer-controls > div > div > section.ons-layer-groups-container.ons-layer-menu-section > section:nth-child("+numero+") > div > div.row.no-gutters.ons-zoom-popover > div.col.ons-group-expand > div > div > a > div.col-auto > i").click({force: true});
  cy.wait(1000)
})

When ("I click on the data layers button", () =>
{
  cy.get("#on-layer-controls > button > i").click({ force: true})
})
