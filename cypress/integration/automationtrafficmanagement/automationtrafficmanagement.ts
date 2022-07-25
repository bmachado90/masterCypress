import { Given, Then, When } from "cypress-cucumber-preprocessor/steps"

function getGoogleMap(): Cypress.Chainable<google.maps.Map> {
  return cy.window().its("Elgin.map").should("not.be.null")
}

function latLngToPoint(
  win: Cypress.ApplicationWindow,
  map: google.maps.Map,
  latLng: google.maps.LatLng,
): google.maps.Point {
  const projection = map.getProjection()
  const bounds = map.getBounds()

  if (!projection || !bounds) {
    throw "Couldn't get map metadata"
  }

  const worldPoint = projection.fromLatLngToPoint(latLng)
  const topRight = projection.fromLatLngToPoint(bounds.getNorthEast())
  const bottomLeft = projection.fromLatLngToPoint(bounds.getSouthWest())
  const scale = Math.pow(2, map.getZoom() || 1)

  if (!worldPoint || !topRight || !bottomLeft) {
    throw "Couldn't project points"
  }

  const p = new win.google.maps.Point(
    (worldPoint.x - bottomLeft.x) * scale,
    (worldPoint.y - topRight.y) * scale,
  )

  return p
}

function doAndWaitForMapEvent(
  event: string,
  callback: (map: google.maps.Map) => void,
): Cypress.Chainable<google.maps.Map> {
  return cy
    .window()
    .its("Elgin.map")
    .should("not.be.null")
    .then(
      (map) =>
        new Cypress.Promise<google.maps.Map>((resolve) => {
          const listener = map.addListener(event, () => {
            listener.remove()
            resolve(map)
          })

          callback(map)
        }),
    )
}


When("I fill step 1 info", () => {
  //Click on create new plan
  //Step1
      //Plan name
  cy.get("#plan-step1-name").clear({ force: true })
  cy.get("#plan-step1-name").click({ force: true })
  cy.get("#plan-step1-name").type('Automated TM test',{ force: true } )
      //Plot Location
  cy.get("#plot-type").click({ force: true })
  cy.wait(500)
  cy.get("#plotPointPlanLocation").click({ force: true })
  cy.wait(1000)
  //zoom
  doAndWaitForMapEvent("zoom_changed", (map) => map.setZoom(19))
  cy.wait(1000)
      //Click on the Map
  cy.window().then((win) => {
    getGoogleMap().then((map) => {
    const center = map.getCenter()
      if (!center) {
        throw "Couldn't get the map's center"
      }

      const p = latLngToPoint(win, map, center)
      cy.wrap(map.getDiv()).click(p.x, p.y)
    })
  })
      //Choose Category // cy.get('#my-state').select('MA')
  cy.get("#plan-step1-category").select('Incident')
      //Next button
  //cy.get("#go-next").click({ force: true })
})

Then("I click on Create a New Plan", () => {
  cy.get("#on-right-panel > div > div.ons-panel-body > div > section:nth-child(2) > div > a:nth-child(1)").click({ force: true })
  cy.wait(500)
})

Then("the Step 1 page is visible", () => {
  cy.get("#plan-step1-name").should("exist")
  cy.get("#step1-tab").should("exist")
  cy.wait(500)
  var t1
  cy.get("#step1-tab").should(($t) => {
    t1 = $t.text();
    expect(t1).equal("Step 1");
    })
})

//I Set the start and end date in the future

Then("I Set the start and end date in the future", () => {
  //Open start date hour
  cy.get(".pr-3 .input-group .datetimepicker-input").eq(0).clear({ force: true })
  cy.get(".pr-3 .input-group .datetimepicker-input").eq(0).type("25/05/2023",{ force: true })
  cy.wait(1000)
  //open the finishing date hour
  cy.get(".pr-3 .input-group .datetimepicker-input").eq(1).clear({ force: true })
  cy.get(".pr-3 .input-group .datetimepicker-input").eq(1).type("26/05/2023",{ force: true })
  cy.wait(1000)

  //Next button
  cy.get("#go-next").click({ force: true })
})


Then("I add an item on step2", () => {
  //Open start date hour
  cy.get("#dropdown-title").click({ force: true })
  cy.wait(500)
  //Add a Festival item
  cy.get("#itemTypeList > a:nth-child(7)").click({ force: true })
  cy.wait(500)

  //Plot Location
  cy.get("#step2-poi-plot-type").click({ force: true })
  cy.wait(500)
  cy.get("#step2-poi-draw-point").click({ force: true })

  //Click on the Map
  cy.window().then((win) => {
    getGoogleMap().then((map) => {
    const center = map.getCenter()
      if (!center) {
        throw "Couldn't get the map's center"
      }

      const p = latLngToPoint(win, map, center)
      cy.wrap(map.getDiv()).click(p.x, p.y)
    })
  })
  //Click on Add
  cy.get("#on-right-panel > div > div.ons-panel-body > div:nth-child(2) > section:nth-child(4) > button").click({ force: true })
})

Then("i Check to share icons", () => {
  cy.get("#share-section > div > a:nth-child(1)").should("exist")
  cy.get("#share-section > div > a:nth-child(1)").trigger('mouseover',{ force: true})
  var t1
  cy.get(".tooltip-inner").should(($t) => {
    t1 = $t.text();
    expect(t1).equal("Plan has not been saved yet.");
    })
  //cy.get(".tooltip-inner").invoke('attr', 'title').should('eq',"Plan has not been saved yet.")
})

Then ("I Save the plan", () => {
  cy.wait(500)
  cy.get(".show .col .btn-petroleum").click({ force: true})
  cy.wait(500)
  cy.get("#on-tm-plan-save-btn > span").click({ force: true})
})

//I Publish the plan
Then ("I Publish the plan", () => {
  cy.get(".show .col .btn-petroleum").click({ force: true})
  cy.wait(500)
  cy.get("#publish-checkbox").click({ force: true})
  cy.wait(1000)
  cy.get("#on-tm-plan-save-btn > span").click({ force: true})
  cy.wait(1000)
})

Then("i click on Share link", () => {
  cy.get("#share-section > div > a:nth-child(1)").should("exist")
  cy.get("#share-section > div > a:nth-child(1)").click({ force: true})
})

Then("i click on Home", () => {
  cy.get("#homeButton").click({ force: true})
  cy.wait(1000)
})


Then("i search the plan", () => {
  cy.get("#on-right-panel > div > div.ons-panel-body > div > section:nth-child(2) > div > a:nth-child(3)").click({ force: true})
  cy.wait(500)
  cy.get("#on-right-panel > div > div.ons-panel-body > div > section:nth-child(4) > div > div.form-group.mb-0 > div > div > button > i").click({ force: true})
  cy.wait(500)
  cy.get("#free_search-1").click({ force: true})
  cy.wait(1000)
  cy.get("#tm-search-input").clear({ force: true })
  cy.get("#tm-search-input").type("duffys",{ force: true })
  cy.wait(1000)
  cy.get("#on-tm-search-btn-group > div > div > div:nth-child(1) > button").click({ force: true})
  cy.wait(1000)

  var t1
  cy.get("#results-container > li:nth-child(1) > div > div.col.on-tm-search-entry > p").should(($t) => {
    t1 = $t.text();
    expect(t1).equal("Automated TM test");
    })

})

Then("i delete the plan", () => {
  cy.get("#results-container > li:nth-child(1) > div > div:nth-child(4) > div > button > i").click({ force: true})
  cy.wait(500)
  cy.get("#results-container > li:nth-child(1) > div > div:nth-child(4) > div > div > a.dropdown-item.on-tm-search-delete").should("exist")
  cy.get("#results-container > li:nth-child(1) > div > div:nth-child(4) > div > div > a.dropdown-item.on-tm-search-delete").click({ force: true})
  cy.wait(1000)
  //#on-modal-delete-plan-btn
  cy.get("#on-modal-delete-plan-btn").click({ force: true})
  cy.wait(1000)

  var t1
  cy.get("#results-container > li:nth-child(1) > div > div.col.on-tm-search-entry > p").should(($t) => {
    t1 = $t.text();
    expect(t1).to.not.equal("Automated TM test");
    })

})

Then("I click on Create a New Group", () => {
  cy.get("#on-right-panel > div > div.ons-panel-body > div > section:nth-child(2) > div > a:nth-child(2)").click({ force: true})
  cy.wait(500)
})

Then("group page is visible", () => {
  cy.get("#on-right-panel > div > div.ons-panel-body > div > section:nth-child(1) > div > header > h1").should('exist')
  var t1
  cy.get("#on-right-panel > div > div.ons-panel-body > div > section:nth-child(1) > div > header > h1").should(($t) => {
    t1 = $t.text();
    expect(t1).equal("Create new Group");
    })
})

Then("I fill group page info", () => {
  cy.get("#group-name").clear({ force: true })
  cy.get("#group-name").type("Autometed Group",{ force: true })
  cy.wait(1000)

  cy.get("#group-description").clear({ force: true })
  cy.get("#group-description").type("Autometed Group Description",{ force: true })
  cy.wait(1000)

    //Open start date hour
    cy.get(".pr-3 .input-group .datetimepicker-input").eq(0).clear({ force: true })
    cy.get(".pr-3 .input-group .datetimepicker-input").eq(0).type("26/05/2022",{ force: true })
    cy.wait(1000)
    //open the finishing date hour
    cy.get(".pr-3 .input-group .datetimepicker-input").eq(1).clear({ force: true })
    cy.get(".pr-3 .input-group .datetimepicker-input").eq(1).type("26/05/2023",{ force: true })
    cy.wait(1000)

})

Then("Pan over an area where TM Plans don't exist.", () => {
  cy.get("#add-to-group-section > div > div.alert.alert-warning.mt-3").should("exist")
  var t1
  cy.get("#add-to-group-section > div > div.alert.alert-warning.mt-3").should(($t) => {
    t1 = $t.text();
    expect(t1).equal("No Plans available in the current map area");
    })

})

Then("Pan over an area whete TM Plans exist", () => {
  cy.get("#on-tm-group-plan-add-btn").should("exist")
  var t1
  cy.get("#on-tm-group-plan-add-btn").should(($t) => {
    t1 = $t.text();
    expect(t1).equal(" Add plan to group ");
    })
})

Then("I Select the TM Plan to add to the group.", () => {
  cy.get("#on-tm-group-plan-add-btn").click({ force: true })
  cy.wait(500)
  cy.get("#add-to-group-section > div > div > div > a:nth-child(1)").click({ force: true })
  cy.get("#plans-container > div > li").should("exist")
  var t1
  cy.get("#plans-container > div > li > div > div.col.on-tm-search-entry > p").should(($t) => {
    t1 = $t.text();
    t1.trim.length !==0;
    })
})

Then("I Click on the ellipsis within the TM Plan.", () => {

  cy.get("#plans-container > div > li > div > div:nth-child(4) > div > button > i").should("exist")
  cy.get("#plans-container > div > li > div > div:nth-child(4) > div > button > i").click({ force: true })

  cy.get("#plans-container > div > li > div > div:nth-child(4) > div > div > a:nth-child(1)").should("exist")
  var t1,t2,t3,t4,t5
  cy.get("#plans-container > div > li > div > div:nth-child(4) > div > div > a:nth-child(1)").should(($t) => {
    t1 = $t.text();
    expect(t1).contain("View Plan");
    })
  cy.get("#plans-container > div > li > div > div:nth-child(4) > div > div > a.dropdown-item.on-tm-search-edit").should(($t) => {
    t2 = $t.text();
    expect(t2).contain("Edit Plan");
    })
  cy.get("#plans-container > div > li > div > div:nth-child(4) > div > div > a.dropdown-item.on-tm-search-plan-copy").should(($t) => {
    t3 = $t.text();
    expect(t3).contain("Copy Plan");
    })
  cy.get("#plans-container > div > li > div > div:nth-child(4) > div > div > a.dropdown-item.on-tm-search-end").should(($t) => {
    t4 = $t.text();
    expect(t4).contain("End Plan");
    })
  cy.get("#plans-container > div > li > div > div:nth-child(4) > div > div > a.dropdown-item.on-tm-search-delete").should(($t) => {
    t5 = $t.text();
    expect(t5).contain("Remove");
    })
  cy.get("#on-right-panel > div > div.ons-panel-body > div > section:nth-child(6) > div > h2").click({ force: true })
})

Then("I Save the Group", () => {
  cy.get("#save-button").click({ force: true })
  cy.wait(1000)
})

Then("i click on Document Button", () => {
  cy.get("#on-tm-group-create-doc").should("exist")
  cy.get("#on-tm-group-create-doc").click({ force: true })
  cy.wait(500)
  cy.get("#document-templates-list > a:nth-child(34)").click({ force: true })
  cy.wait(200)
})

Then("i edit document info", () => {
  cy.get("#modal-window > div > div > div.modal-header > h5").should("exist")
  var t1
  cy.get("#modal-window > div > div > div.modal-header > h5").should(($t) => {
    t1 = $t.text();
    expect(t1).contain("Create document");
    })
    //#on-tm-modal-doc-label
  cy.get("#on-tm-modal-doc-label").clear({ force: true })
  cy.get("#on-tm-modal-doc-label").type("Elgin test 1234",{ force: true })
  cy.wait(1000)
  cy.get("#on-modal-save-btn").click({ force: true })
  cy.wait(1000)
  cy.get("#on-right-panel > div > div.ons-panel-body > div > section:nth-child(7) > div > div.row.no-gutters.d-block > ul > li > div > div.col-auto.d-flex.flex-row-reverse > a.document-entry-preview")
    .should("exist")
  //  cy.get("#on-right-panel > div > div.ons-panel-body > div > section:nth-child(7) > div > div.row.no-gutters.d-block > ul > li > div > div.col-auto.d-flex.flex-row-reverse > a.document-entry-preview")
  //  .click({ force: true })
  cy.wait(500)
})

Then("i remove the document", () => {
  cy.get("#on-right-panel > div > div.ons-panel-body > div > section:nth-child(7) > div > div.row.no-gutters.d-block > ul > li > div > div.col-auto.d-flex.flex-row-reverse > a.document-entry-delete > i")
    .click(({ force: true }))

  cy.on('window:confirm', (t) => {
    expect(t).to.contains('Do you really want to remove the document?');
  })
  cy.wait(1000)
  cy.get("#on-right-panel > div > div.ons-panel-body > div > section:nth-child(8) > div > h2").click({ force: true })
})

Then("i Create a new email alert", () => {
  cy.get("#on-tm-group-create-email").should("exist")
  cy.get("#on-tm-group-create-email").click({ force: true })
  cy.wait(500)
  cy.get("#email-templates-list > a:nth-child(23)").click({ force: true })
  cy.wait(2000)
})

Then("i fill the email", () => {
  cy.get("#modal-window > div > div > div.modal-header > h5").should("exist")

  cy.get("#email-alert-label").clear({ force: true })
  cy.get("#email-alert-label").type("Elgin test 1234",{ force: true })
  cy.wait(500)

  cy.get("#email-alert-to-recipients-selectized").clear({ force: true })
  cy.get("#email-alert-to-recipients-selectized").type("bruno.machado@one.network",{ force: true }).type('{enter}')
  cy.wait(500)

  cy.get("#email-alert-subject").clear({ force: true })
  cy.get("#email-alert-subject").type("Automated Test",{ force: true })
  cy.wait(5000)

  cy.get("#on-modal-save-btn").click({ force: true })
  cy.wait(500)

})

Then("I search a Plan", () => {
  cy.get("#on-right-panel > div > div.ons-panel-body > div > section:nth-child(2) > div > a:nth-child(3)").click({ force: true})
  cy.wait(500)
  cy.get("#on-right-panel > div > div.ons-panel-body > div > section:nth-child(4) > div > div.form-group.mb-0 > div > div > button > i").click({ force: true})
  cy.wait(500)
  cy.get("#free_search-1").click({ force: true})
  cy.wait(1000)
  cy.get("#tm-search-input").clear({ force: true })
  cy.get("#tm-search-input").type("duffys",{ force: true })
  cy.wait(1000)
  cy.get("#on-tm-search-btn-group > div > div > div:nth-child(1) > button").click({ force: true})
  cy.wait(1000)
  cy.get("#results-container > li:nth-child(2) > div > div.col.on-tm-search-entry > p").should("exist")
  cy.get("#results-container > li:nth-child(2) > div > div.col.on-tm-search-entry > p").click({ force: true})
  cy.wait(2000)

})
Then("i add the plan to the group", () => {
  cy.get("#add-to-plan-section > div > div > a").should("exist")
  cy.get("#add-to-plan-section > div > div > a").click({ force: true})
  cy.wait(500)
  cy.get("#add-to-plan-section > div > div > div > a:nth-child(1)").click({ force: true})
  cy.wait(1000)
  cy.get("#groups-container > ul > li > div > div.col.on-tm-search-entry > p").should("exist")
  var t1
  cy.get("#groups-container > ul > li > div > div.col.on-tm-search-entry > p").should(($t) => {
    t1 = $t.text();
    expect(t1).contain("Autometed Group");
    })

})

When("I click in the search item text box to type", () => {
  cy.get(".ons-tt-input").click({ force: true })
})

When("I select item {string} from the dropdown list", (location) => {
  cy.wait(3000)
  cy.get('.ons-tt-menu').find('.list-group-item').contains(location).click({ force: true })
  cy.wait(1000)
})

When("I set the map's zoom level to {int}", (zoomLevel) => {
  doAndWaitForMapEvent("zoom_changed", (map) => map.setZoom(zoomLevel))
})

When("I type in the search box a location {string}", (location) => {
  cy.wait(500)
  cy.get(".ons-tt-input").clear({ force: true })
  cy.get(".ons-tt-input").type(location,{ force: true })
  cy.wait(2000)
  cy.get(".ons-tt-input").click({ force: true })
})

When("I clean the search box a location", (location) => {
  cy.get(".ons-tt-input").clear({ force: true })
  cy.wait(500)
})

When("I click on a plan", () => {
  cy.get("#results-container > li:nth-child(1) > div > div.col.on-tm-search-entry > p").should("exist")
  cy.get("#results-container > li:nth-child(1) > div > div.col.on-tm-search-entry > p").click({ force: true})
})


When("I End the plan {string}", (numero) => {

  cy.get("#results-container > li:nth-child(1) > div > div:nth-child("+numero+") > div > button > i").click({ force: true })
  cy.wait(500)
  cy.get("#results-container > li:nth-child(1) > div > div:nth-child("+numero+") > div > div > a.dropdown-item.on-tm-search-end").click({ force: true })
  cy.wait(500)
})


When("I click on Desmiss", () => {
  cy.get("#modal-window > div > div > div.modal-header > h5").should("exist")
  var t1
  cy.get("#modal-window > div > div > div.modal-header > h5").should(($t) => {
    t1 = $t.text();
    expect(t1).contain("End Plan");
    })
  cy.get("#on-modal-discard-btn").click({ force: true})
  cy.wait(500)

})

When("I confirm End plan now", () => {
  cy.get("#modal-window > div > div > div.modal-header > h5").should("exist")
  var t1
  cy.get("#modal-window > div > div > div.modal-header > h5").should(($t) => {
    t1 = $t.text();
    expect(t1).contain("End Plan");
    })
  cy.get("#on-modal-confirm-btn").click({ force: true})
  cy.wait(500)

})

When("I search for a new Plan", () => {
  cy.get("#on-right-panel > div > div.ons-panel-body > div > section:nth-child(2) > div > a:nth-child(3)").click({ force: true})
  cy.wait(500)
  cy.get("#on-right-panel > div > div.ons-panel-body > div > section:nth-child(4) > div > div.form-group.mb-0 > div > div > button > i").click({ force: true})
  cy.wait(500)
  cy.get("#free_search-1").click({ force: true})
  cy.wait(1000)
  cy.get("#tm-search-input").clear({ force: true })
  cy.get("#tm-search-input").type("duffys",{ force: true })
  cy.wait(5000)

  cy.get("#on-right-panel > div > div.ons-panel-body > div > section:nth-child(6) > header > button").click({ force: true })
  cy.wait(500)
  cy.get("#date_state-2").click({ force: true })
  cy.get("#date_state-3").click({ force: true })
  cy.wait(500)
  cy.get("#date_state-1").click({ force: true })
  cy.wait(500)
  cy.get("#on-tm-search-btn-group > div > div > div:nth-child(1) > button").click({ force: true })
  cy.wait(5000)
})

When("i Define the close date and confirm", () => {
  cy.get("#modal-window > div > div > div.modal-header > h5").should("exist")
  cy.get(".pr-3 .input-group .datetimepicker-input").eq(0).clear({ force: true })
  cy.get(".pr-3 .input-group .datetimepicker-input").eq(0).type("03/06/2022",{ force: true })
  cy.wait(1000)
  cy.get("#on-modal-confirm-btn").click({ force: true})
  cy.wait(500)

})

When("i search for Expired plans", () => {
  cy.get("#on-right-panel > div > div.ons-panel-body > div > section:nth-child(6) > header > button").click({ force: true })
  cy.wait(500)
  cy.get("#date_state-2").click({ force: true })
  cy.get("#date_state-3").click({ force: true })
  cy.wait(500)
  cy.get("#date_state-1").click({ force: true })
  cy.wait(500)
  cy.get("#on-tm-search-btn-group > div > div > div:nth-child(1) > button").click({ force: true })
  cy.wait(5000)
})

When("i click on the plan expired", () => {
  cy.get("#results-container > li:nth-child(1) > div > div.col.on-tm-search-entry > p").should("exist")
  cy.get("#results-container > li:nth-child(1) > div > div.col.on-tm-search-entry > p").click({ force: true })
})

When("the plan is present", () => {
  cy.get(".ons-tt-input").click({ force: true })
})

When("I search for a Plan", () => {
  cy.get("#on-right-panel > div > div.ons-panel-body > div > section:nth-child(2) > div > a:nth-child(3)").click({ force: true})
  cy.wait(500)
  cy.get("#on-right-panel > div > div.ons-panel-body > div > section:nth-child(4) > div > div.form-group.mb-0 > div > div > button > i").click({ force: true})
  cy.wait(500)
  cy.get("#free_search-1").click({ force: true})
  cy.wait(1000)
  cy.get("#tm-search-input").clear({ force: true })
  cy.get("#tm-search-input").type("duffys",{ force: true })
  cy.wait(1000)
  cy.get("#on-tm-search-btn-group > div > div > div:nth-child(1) > button").click({ force: true})
  cy.wait(1000)
})

When("I fill step 1 complete info with plan name {string}", (message) => {
  //Plan name
  cy.get("#plan-step1-name").clear({ force: true })
  cy.get("#plan-step1-name").click({ force: true })
  cy.get("#plan-step1-name").type(message,{ force: true } )
  cy.wait(500)
  //External ID
  cy.get("#plan-step1-external-id").clear({ force: true })
  cy.get("#plan-step1-external-id").click({ force: true })
  cy.get("#plan-step1-external-id").type('123456789',{ force: true } )
  cy.wait(500)
})

When("I check categoryList", () => {
  var t1
  cy.get("#plan-step1-category > optgroup:nth-child(2) > option:nth-child(1)").should(($t) => {
    t1 = $t.text();
    expect(t1).contain("Covid-19 protected route");
    })

  cy.get("#plan-step1-category > optgroup:nth-child(2) > option:nth-child(2)").should(($t) => {
    t1 = $t.text();
    expect(t1).contain("Covid-19 road change");
    })
    cy.get("#plan-step1-category > optgroup:nth-child(2) > option:nth-child(3)").should(($t) => {
    t1 = $t.text();
    expect(t1).contain("Covid-19 school street");
    })
    cy.get("#plan-step1-category > optgroup:nth-child(2) > option:nth-child(4)").should(($t) => {
    t1 = $t.text();
    expect(t1).contain("Covid-19 testing station");
    })
    cy.get("#plan-step1-category > optgroup:nth-child(2) > option:nth-child(5)").should(($t) => {
    t1 = $t.text();
    expect(t1).contain("Covid-19 vaccination centre");
    })

    cy.get("#plan-step1-category > optgroup:nth-child(3) > option:nth-child(1)").should(($t) => {
      t1 = $t.text();
      expect(t1).contain("Incident");
    })
    cy.get("#plan-step1-category > optgroup:nth-child(3) > option:nth-child(2)").should(($t) => {
      t1 = $t.text();
      expect(t1).contain("Accident");
    })
    cy.get("#plan-step1-category > optgroup:nth-child(3) > option:nth-child(3)").should(($t) => {
      t1 = $t.text();
      expect(t1).contain("Traffic congestion");
    })
    cy.get("#plan-step1-category > optgroup:nth-child(3) > option:nth-child(4)").should(($t) => {
      t1 = $t.text();
      expect(t1).contain("Health Emergency");
    })
    cy.get("#plan-step1-category > optgroup:nth-child(4) > option:nth-child(1)").should(($t) => {
      t1 = $t.text();
      expect(t1).contain("Flood");
    })
    cy.get("#plan-step1-category > optgroup:nth-child(4) > option:nth-child(2)").should(($t) => {
      t1 = $t.text();
      expect(t1).contain("Landslip");
    })
    cy.get("#plan-step1-category > optgroup:nth-child(4) > option:nth-child(3)").should(($t) => {
      t1 = $t.text();
      expect(t1).contain("Weather event");
    })

    cy.get("#plan-step1-category > optgroup:nth-child(5) > option:nth-child(1)").should(($t) => {
      t1 = $t.text();
      expect(t1).contain("Streetworks");
    })
    cy.get("#plan-step1-category > optgroup:nth-child(5) > option:nth-child(2)").should(($t) => {
      t1 = $t.text();
      expect(t1).contain("Skip");
    })
    cy.get("#plan-step1-category > optgroup:nth-child(5) > option:nth-child(3)").should(($t) => {
      t1 = $t.text();
      expect(t1).contain("Scaffolding");
    })
    cy.get("#plan-step1-category > optgroup:nth-child(5) > option:nth-child(4)").should(($t) => {
      t1 = $t.text();
      expect(t1).contain("Materials on highway");
    })
    cy.get("#plan-step1-category > optgroup:nth-child(5) > option:nth-child(5)").should(($t) => {
      t1 = $t.text();
      expect(t1).contain("Obstruction");
    })
    cy.get("#plan-step1-category > optgroup:nth-child(5) > option:nth-child(6)").should(($t) => {
      t1 = $t.text();
      expect(t1).contain("Development works");
    })
    cy.get("#plan-step1-category > optgroup:nth-child(5) > option:nth-child(7)").should(($t) => {
      t1 = $t.text();
      expect(t1).contain("Crane");
    })
    cy.get("#plan-step1-category > optgroup:nth-child(5) > option:nth-child(8)").should(($t) => {
      t1 = $t.text();
      expect(t1).contain("Hoarding");
    })
    cy.get("#plan-step1-category > optgroup:nth-child(5) > option:nth-child(9)").should(($t) => {
      t1 = $t.text();
      expect(t1).contain("Table & chairs");
    })
    cy.get("#plan-step1-category > optgroup:nth-child(5) > option:nth-child(10)").should(($t) => {
      t1 = $t.text();
      expect(t1).contain("Abnormal load");
    })
    cy.get("#plan-step1-category > optgroup:nth-child(5) > option:nth-child(11)").should(($t) => {
      t1 = $t.text();
      expect(t1).contain("Traffic survey equipment");
    })
    cy.get("#plan-step1-category > optgroup:nth-child(5) > option:nth-child(12)").should(($t) => {
      t1 = $t.text();
      expect(t1).contain("Minor routine maintenance");
    })

    cy.get("#plan-step1-category > optgroup:nth-child(6) > option:nth-child(1)").should(($t) => {
      t1 = $t.text();
      expect(t1).contain("Agricultural show");
    })
    cy.get("#plan-step1-category > optgroup:nth-child(6) > option:nth-child(2)").should(($t) => {
      t1 = $t.text();
      expect(t1).contain("Air show");
    })
    cy.get("#plan-step1-category > optgroup:nth-child(6) > option:nth-child(3)").should(($t) => {
      t1 = $t.text();
      expect(t1).contain("Carnival / Parade / Street party");
    })
    cy.get("#plan-step1-category > optgroup:nth-child(6) > option:nth-child(4)").should(($t) => {
      t1 = $t.text();
      expect(t1).contain("Christmas event");
    })
    cy.get("#plan-step1-category > optgroup:nth-child(6) > option:nth-child(5)").should(($t) => {
      t1 = $t.text();
      expect(t1).contain("Commonwealth Games");
    })
    cy.get("#plan-step1-category > optgroup:nth-child(6) > option:nth-child(6)").should(($t) => {
      t1 = $t.text();
      expect(t1).contain("Cruise ship");
    })
    cy.get("#plan-step1-category > optgroup:nth-child(6) > option:nth-child(7)").should(($t) => {
      t1 = $t.text();
      expect(t1).contain("Cycling");
    })
    cy.get("#plan-step1-category > optgroup:nth-child(6) > option:nth-child(8)").should(($t) => {
      t1 = $t.text();
      expect(t1).contain("Entertainment event");
    })
    cy.get("#plan-step1-category > optgroup:nth-child(6) > option:nth-child(9)").should(($t) => {
      t1 = $t.text();
      expect(t1).contain("Festival");
    })
    cy.get("#plan-step1-category > optgroup:nth-child(6) > option:nth-child(10)").should(($t) => {
      t1 = $t.text();
      expect(t1).contain("Filming");
    })
    cy.get("#plan-step1-category > optgroup:nth-child(6) > option:nth-child(11)").should(($t) => {
      t1 = $t.text();
      expect(t1).contain("Football");
    })
    cy.get("#plan-step1-category > optgroup:nth-child(6) > option:nth-child(12)").should(($t) => {
      t1 = $t.text();
      expect(t1).contain("Funeral");
    })
    cy.get("#plan-step1-category > optgroup:nth-child(6) > option:nth-child(13)").should(($t) => {
      t1 = $t.text();
      expect(t1).contain("Horse racing");
    })
    cy.get("#plan-step1-category > optgroup:nth-child(6) > option:nth-child(14)").should(($t) => {
      t1 = $t.text();
      expect(t1).contain("Market");
    })
    cy.get("#plan-step1-category > optgroup:nth-child(6) > option:nth-child(15)").should(($t) => {
      t1 = $t.text();
      expect(t1).contain("Motor sport event");
    })
    cy.get("#plan-step1-category > optgroup:nth-child(6) > option:nth-child(16)").should(($t) => {
      t1 = $t.text();
      expect(t1).contain("Polling station");
    })
    cy.get("#plan-step1-category > optgroup:nth-child(6) > option:nth-child(17)").should(($t) => {
      t1 = $t.text();
      expect(t1).contain("Queen's Jubilee");
    })
    cy.get("#plan-step1-category > optgroup:nth-child(6) > option:nth-child(18)").should(($t) => {
      t1 = $t.text();
      expect(t1).contain("Remembrance parade");
    })
    cy.get("#plan-step1-category > optgroup:nth-child(6) > option:nth-child(19)").should(($t) => {
      t1 = $t.text();
      expect(t1).contain("Rugby");
    })
    cy.get("#plan-step1-category > optgroup:nth-child(6) > option:nth-child(20)").should(($t) => {
      t1 = $t.text();
      expect(t1).contain("Running");
    })
    cy.get("#plan-step1-category > optgroup:nth-child(6) > option:nth-child(21)").should(($t) => {
      t1 = $t.text();
      expect(t1).contain("Sport event");
    })
    cy.get("#plan-step1-category > optgroup:nth-child(6) > option:nth-child(22)").should(($t) => {
      t1 = $t.text();
      expect(t1).contain("Other");
    })

  cy.get("#plan-step1-category").select('Incident')
  cy.wait(500)
})

When("i choose expand impact", () => {
  cy.get("#plan-step1-impact").should("exist")
  var t1
  cy.get("#step1 > div > div:nth-child(1) > div > div:nth-child(7) > label").should(($t) => {
    t1 = $t.text();
    expect(t1).contain("Expected impact");
    })

  cy.get("#plan-step1-impact").select('Delays possible',{ force: true })
  cy.wait(500)
})

When("I plot location", () => {
  //Plot Location
  cy.get("#plot-type").click({ force: true })
  cy.wait(500)
  cy.get("#plotPointPlanLocation").click({ force: true })
  cy.wait(1000)
  //zoom
  doAndWaitForMapEvent("zoom_changed", (map) => map.setZoom(18))
  cy.wait(1000)
      //Click on the Map
  cy.window().then((win) => {
    getGoogleMap().then((map) => {
    const center = map.getCenter()
      if (!center) {
        throw "Couldn't get the map's center"
      }

      const p = latLngToPoint(win, map, center)
      cy.wrap(map.getDiv()).click(p.x, p.y)
    })
  })
})

When("i check that {string} button is visible", (message) => {
  cy.get("#clear-location").should("exist")
  var t2
  cy.get("#clear-location").should(($t) => {
    t2 = $t.text();
    expect(t2).contain(message);
  })
})

When("i Change the Category Marker to a Streetwork category.", () => {
  cy.get("#plan-step1-category").select('Streetworks')
  cy.wait(500)
})

When("i enter a description", () => {
    //Plan name
    cy.get("#plan-step1-description").clear({ force: true })
    cy.get("#plan-step1-description").click({ force: true })
    cy.get("#plan-step1-description").type('C26 Description',{ force: true } )
    cy.wait(500)
})

When("I Mouseover Link to works", () => {
  cy.get("#step1-responsability-section > div > div.form-check.mt-2 > label").trigger('mouseover',{ force: true})
  cy.wait(2000)
})

When("I Select Link to works and choose a reference", () => {
  doAndWaitForMapEvent("zoom_changed", (map) => map.setZoom(15))
  cy.get("#step1-assoc-eton-checkbox").click({ force: true })
  cy.wait(2000)
  cy.get("#reference-select").select('LV88818001016-01',{ force: true})
  cy.wait(500)
})

When("I Add the Plan to an existing Group.", () => {
  cy.get("#add-to-plan-section > div > div > a").should("exist")
  cy.get("#add-to-plan-section > div > div > a").click({ force: true})
  cy.wait(500)
  cy.get("#add-to-plan-section > div > div > div > a:nth-child(3)").click({ force: true})
  cy.wait(1000)
})

When("I Click on the ellipsis.", () => {
  cy.get("#results-container > li > div > div:nth-child(4) > div > button").should("exist")
  cy.get("#results-container > li > div > div:nth-child(4) > div > button").click({ force: true })

  var t3
  cy.get("#results-container > li > div > div:nth-child(4) > div > div > a:nth-child(1)").should(($t) => {
    t3 = $t.text();
    expect(t3).contain("View Plan");
  })
  cy.get("#results-container > li > div > div:nth-child(4) > div > div > a:nth-child(2)").should(($t) => {
    t3 = $t.text();
    expect(t3).contain("Edit Plan");
  })
  cy.get("#results-container > li > div > div:nth-child(4) > div > div > a:nth-child(3)").should(($t) => {
    t3 = $t.text();
    expect(t3).contain("Copy Plan");
  })
  cy.get("#results-container > li > div > div:nth-child(4) > div > div > a:nth-child(4)").should(($t) => {
    t3 = $t.text();
    expect(t3).contain("End Plan");
  })
  cy.get("#results-container > li > div > div:nth-child(4) > div > div > a:nth-child(5)").should(($t) => {
    t3 = $t.text();
    expect(t3).contain("Delete Plan");
  })
})

When("I Add an Enforcement pattern.", () => {
  cy.get("#create-btn").should("exist")
  cy.get("#create-btn").click({ force: true})
  cy.wait(1000)
  cy.get("#modal-window > div > div > div.modal-header > h5").should("exist")
  var t3
  cy.get("#modal-window > div > div > div.modal-header > h5").should(($t) => {
    t3 = $t.text();
    expect(t3).contain("Add enforcement pattern");
  })
  cy.get("#efweekday1").click({ force: true})
  cy.wait(500)
  cy.get("#efweekday2").click({ force: true})
  cy.wait(500)
  cy.get("#efweekday4").click({ force: true})
  cy.wait(500)
  cy.get("#efweekday8").click({ force: true})
  cy.wait(500)
  cy.get("#efweekday16").click({ force: true})
  cy.wait(500)
  cy.get("#efweekday32").click({ force: true})
  cy.wait(500)
  cy.get("#efweekday64").click({ force: true})
  cy.wait(500)
  cy.get("#modal-window > div > div > div.modal-footer > div > div.col-6.d-flex.flex-row-reverse > button.btn.btn-success").click({ force: true})
  cy.wait(500)
  cy.get("#on-tm-step1-ef > div > ul > li > div").should("exist")
})


When("I find the Plan {string}", (message) => {
  cy.get("#on-right-panel > div > div.ons-panel-body > div > section:nth-child(2) > div > a:nth-child(3)").should("exist")
  cy.get("#on-right-panel > div > div.ons-panel-body > div > section:nth-child(2) > div > a:nth-child(3)").click({ force: true})
  cy.wait(500)
  cy.get("#on-right-panel > div > div.ons-panel-body > div > section:nth-child(4) > div > div.form-group.mb-0 > div > div > button > i").click({ force: true})
  cy.wait(500)
  cy.get("#free_search-2").click({ force: true})
  cy.wait(500)
  cy.get("#tm-search-input").clear({ force: true })
  cy.get("#tm-search-input").type(message,{ force: true })
  cy.get("#on-tm-search-btn-group > div > div > div:nth-child(1) > button").click({ force: true})
  cy.wait(1000)

  var t1
  cy.get("#results-container > li:nth-child(1) > div > div.col.on-tm-search-entry > p").should(($t) => {
    t1 = $t.text();
    expect(t1).equal(message);
    })

})

When("I Save the current plan", () => {
  cy.get("#on-tm-plan-save-btn").should("exist")
  cy.get("#on-tm-plan-save-btn").click({ force: true})
  cy.wait(2000)
})


When("i create a standard {string} category plan with name {string} and Zoom level {int}", (incident,name,zoom) => {
  cy.get("#plan-step1-name").clear({ force: true })
  cy.get("#plan-step1-name").click({ force: true })
  cy.get("#plan-step1-name").type(name,{ force: true } )
  cy.wait(500)
  cy.get("#plan-step1-category").select(incident)

  //Plot Location
  cy.get("#plot-type").click({ force: true })
  cy.wait(500)
  cy.get("#plotPointPlanLocation").click({ force: true })
  cy.wait(1000)
  //zoom
  doAndWaitForMapEvent("zoom_changed", (map) => map.setZoom(zoom))
  cy.wait(2000)
      //Click on the Map
  cy.window().then((win) => {
    getGoogleMap().then((map) => {
    const center = map.getCenter()
      if (!center) {
        throw "Couldn't get the map's center"
      }

      const p = latLngToPoint(win, map, center)
      cy.wrap(map.getDiv()).click(p.x, p.y)
    })
  })
})

Then("I select this an emergency option", () => {
  cy.get("#step1-is-emergency-checkbox").should("exist")
  cy.get("#step1-is-emergency-checkbox").click({ force: true})
  cy.wait(500)
})

Then("I nagivate to Step 2", () => {
  cy.get("#go-next").eq(0).click({ force: true})
  cy.wait(1000)
})

Then("I add an {string} in step2 {string}", (value, num) => {
  cy.get("#step2 > div > section:nth-child(1) > div > div > button").should("exist")
  cy.get("#step2 > div > section:nth-child(1) > div > div > button").click({ force: true})
  cy.wait(500)
  cy.get("#itemTypeList > a:nth-child("+num+")").click({ force: true})
  cy.wait(500)
})

Then("I fill road closure info", () => {
  cy.get("#on-right-panel > div > div.ons-panel-body > div:nth-child(2) > section:nth-child(1) > div > header > div:nth-child(1) > h1").should("exist")

  var t1
  cy.get("#on-right-panel > div > div.ons-panel-body > div:nth-child(2) > section:nth-child(1) > div > header > div:nth-child(1) > h1").should(($t) => {
    t1 = $t.text();
    expect(t1).equal("Add Road closure");
    })

    //Plot Location
  cy.wait(500)
  cy.get("#plot-regular-text").click({ force: true })
  cy.wait(500)
  //zoom
  doAndWaitForMapEvent("zoom_changed", (map) => map.setZoom(19))
  cy.wait(2000)
      //Click on the Map
  cy.window().then((win) => {
    getGoogleMap().then((map) => {
    const center = map.getCenter()
      if (!center) {
        throw "Couldn't get the map's center"
      }

      const p = latLngToPoint(win, map, center)
      cy.wrap(map.getDiv()).click(p.x, p.y)
    })
  })

  cy.wait(1000)
  //zoom
  doAndWaitForMapEvent("zoom_changed", (map) => map.setZoom(19))
  cy.wait(2000)
      //Click on the Map
  cy.window().then((win) => {
    getGoogleMap().then((map) => {
    map.panBy(100,100)
    cy.wait(500)
    const center = map.getCenter()
      if (!center) {
        throw "Couldn't get the map's center"
      }

      const p = latLngToPoint(win, map, center)
      cy.wrap(map.getDiv()).click(p.x, p.y)
    })
  })

  cy.wait(1000)
  cy.get("#on-right-panel > div > div.ons-panel-body > div:nth-child(2) > section:nth-child(2) > div > div > div:nth-child(2) > button").should("exist")
  cy.get("#on-right-panel > div > div.ons-panel-body > div:nth-child(2) > section:nth-child(2) > div > div > div:nth-child(2) > button")
    .click({ force: true})
  cy.wait(2000)
})


Then("i navigate to step3", () => {
  cy.get("#go-next").eq(0).click({ force: true})
  cy.wait(1000)
})

Then("I tick Is Covid-19 related.", () => {
  cy.wait(1000)
  cy.get("#step1-tab").should("exist")
  cy.get("#step1-tab").click({ force: true})
  cy.wait(500)
  cy.get("#step1-is-covid-checkbox").click({ force: true})
  cy.wait(500)
})

Then("I click on step3 tab", () => {
  cy.get("#step3-tab").click({ force: true})
  cy.wait(1000)
})

Then("I Tick on Publish", () => {
  cy.wait(500)
  cy.get("#publish-checkbox").should("exist")
  cy.get("#publish-checkbox").click({ force: true})
  cy.wait(1000)
})

Then("I go to Step 1 and change the dates for {string}", (date) => {
  cy.get("#step1-tab").click({ force: true})
  cy.wait(1000)
  cy.get(".pr-3 .input-group .datetimepicker-input").eq(0).clear({ force: true })
  cy.get(".pr-3 .input-group .datetimepicker-input").eq(0).type(date,{ force: true })
  cy.wait(1000)
})

Then("I Tick Custom on The Publish option", () => {
  cy.get("#publish-checkbox").should("exist")
  cy.get("#publish-checkbox").click({ force: true})
  cy.wait(500)
  cy.get("#publish-custom").should("exist")
  cy.get('#publish-custom').should('not.have.attr', 'disabled', 'disabled')
})

Then("I choose Publish and Custom value {string}", (value) => {
  cy.get("#publish-checkbox").should("exist")
  cy.wait(500)
  cy.get("#publish-custom").should("exist")
  cy.get("#publish-custom").click({ force: true})
  cy.get('#plan-step3-custom-publish').should('exist')
  cy.get("#plan-step3-custom-publish").clear({ force: true })
  cy.get("#plan-step3-custom-publish").type(value,{ force: true })
  cy.wait(1000)
})

Then("I check the Publish", () => {
  cy.get("#publish-checkbox").should("exist")
  //cy.get("#publish-checkbox").click({ force: true})
  cy.get('#publish-custom').should('have.attr', 'disabled', 'disabled')
  cy.get('#publish-default').should('have.attr', 'disabled', 'disabled')
  cy.wait(1000)
})

Then("I choose Expected impact as {string}", (message) => {
  cy.get("#plan-step1-impact").should("exist")
  var t1
  cy.get("#step1 > div > div:nth-child(1) > div > div:nth-child(7) > label").should(($t) => {
    t1 = $t.text();
    expect(t1).contain("Expected impact");
    })

  cy.get("#plan-step1-impact").select(message,{ force: true })
  cy.wait(500)

})

Then("I Change the end date of the plan for {string}", (date) => {
  cy.get(".pr-3 .input-group .datetimepicker-input").eq(1).clear({ force: true })
  cy.get(".pr-3 .input-group .datetimepicker-input").eq(1).type(date,{ force: true })
  cy.wait(1000)
})

Then("I reset the search", () => {
  cy.get("#on-tm-search-btn-group > div > div > div:nth-child(2) > button").should("exist")
  cy.get("#on-tm-search-btn-group > div > div > div:nth-child(2) > button").click({ force: true })
  cy.wait(1000)
})

Then("I click on Search", () => {
  cy.get("#on-right-panel > div > div.ons-panel-body > div > section:nth-child(2) > div > a:nth-child(3)").should("exist")
  cy.get("#on-right-panel > div > div.ons-panel-body > div > section:nth-child(2) > div > a:nth-child(3)").click({ force: true })
  cy.wait(500)
})

Then("I Click on the arrow of the Search box and then close item", () => {
  cy.get("#on-right-panel > div > div.ons-panel-body > div > section:nth-child(4) > div > div.form-group.mb-0 > div > div > button").should("exist")
  cy.get("#on-right-panel > div > div.ons-panel-body > div > section:nth-child(4) > div > div.form-group.mb-0 > div > div > button").click({ force: true })
  cy.wait(500)
  cy.get("#ons-tm-search-types > div > div > p").should("exist")

  var t1
  cy.get("#ons-tm-search-types > div > div > p").should(($t) => {
    t1 = $t.text();
    expect(t1).equal("Search for");
  })
  cy.get("#ons-tm-search-types > div > div > div:nth-child(2) > label").should(($t) => {
    t1 = $t.text();
    expect(t1).equal(" User name ");
  })
  cy.get("#ons-tm-search-types > div > div > div:nth-child(3) > label").should(($t) => {
    t1 = $t.text();
    expect(t1).equal(" Plan name ");
  })
  cy.get("#ons-tm-search-types > div > div > div:nth-child(4) > label").should(($t) => {
    t1 = $t.text();
    expect(t1).equal(" Reference ");
  })
  cy.get("#ons-tm-search-types > div > div > div:nth-child(5) > label").should(($t) => {
    t1 = $t.text();
    expect(t1).equal(" Plan ID ");
  })
  cy.get("#on-right-panel > div > div.ons-panel-body > div > section:nth-child(4) > div > div.form-group.mb-0 > div > div > button").click({ force: true })
  cy.wait(500)
})

Then("I click on Main Filters and close it", () => {
  cy.get("#on-right-panel > div > div.ons-panel-body > div > section:nth-child(5) > header > button").should("exist")
  cy.get("#on-right-panel > div > div.ons-panel-body > div > section:nth-child(5) > header > button").click({ force: true })
  cy.wait(500)
  cy.get("#main-filters > div:nth-child(1) > div > div > p").should("exist")

  var t1
  cy.get("#main-filters > div:nth-child(1) > div > div > p").should(($t) => {
    t1 = $t.text();
    expect(t1).equal("Category");
  })

  cy.get("#main-filters > div:nth-child(1) > div > div > div:nth-child(2) > label").should(($t) => {
    t1 = $t.text();
    expect(t1).equal(" Covid-19 restrictions ");
  })
  cy.get("#main-filters > div:nth-child(1) > div > div > div:nth-child(3) > label").should(($t) => {
    t1 = $t.text();
    expect(t1).equal(" Incident ");
  })
  cy.get("#main-filters > div:nth-child(1) > div > div > div:nth-child(4) > label").should(($t) => {
    t1 = $t.text();
    expect(t1).equal(" Weather ");
  })
  cy.get("#main-filters > div:nth-child(1) > div > div > div:nth-child(5) > label").should(($t) => {
    t1 = $t.text();
    expect(t1).equal(" Streetworks / Licence ");
  })
  cy.get("#main-filters > div:nth-child(1) > div > div > div:nth-child(6) > label").should(($t) => {
    t1 = $t.text();
    expect(t1).equal(" Public event ");
  })
  cy.get("#main-filters > div:nth-child(1) > div > div > div:nth-child(7) > label").should(($t) => {
    t1 = $t.text();
    expect(t1).equal(" Read only categories ");
  })

  cy.get("#main-filters > div:nth-child(2) > div > div > p").should(($t) => {
    t1 = $t.text();
    expect(t1).equal("Visibility");
  })

  cy.get("#main-filters > div:nth-child(2) > div > div > div > label").should(($t) => {
    t1 = $t.text();
    expect(t1).equal(" Within visible map area ");
  })
  cy.get("#main-filters > div:nth-child(3) > div > div > p").should(($t) => {
    t1 = $t.text();
    expect(t1).equal("Deleted");
  })
  cy.get("#main-filters > div:nth-child(3) > div > div > div > label").should(($t) => {
    t1 = $t.text();
    expect(t1).equal(" Deleted / Cancelled ");
  })
  cy.get("#on-right-panel > div > div.ons-panel-body > div > section:nth-child(5) > header > button").click({ force: true })
  cy.wait(500)
})

Then("I click on Date filters and close it", () => {
  cy.get("#on-right-panel > div > div.ons-panel-body > div > section:nth-child(6) > header > button").should("exist")
  cy.get("#on-right-panel > div > div.ons-panel-body > div > section:nth-child(6) > header > button").click({ force: true })
  cy.wait(500)
  cy.get("#ons-tm-search-types > div > div > p").should("exist")

  var t1
  cy.get("#date-filters > div > div > div > p").should(($t) => {
    t1 = $t.text();
    expect(t1).equal("State");
  })
  cy.get("#date-filters > div > div > div > div:nth-child(2) > label").should(($t) => {
    t1 = $t.text();
    expect(t1).equal(" Current ");
  })
  cy.get("#date-filters > div > div > div > div:nth-child(3) > label").should(($t) => {
    t1 = $t.text();
    expect(t1).equal(" Planned ");
  })
  cy.get("#date-filters > div > div > div > div:nth-child(4) > label").should(($t) => {
    t1 = $t.text();
    expect(t1).equal(" Expired ");
  })
  cy.get("#date-filters > div > div > div > div:nth-child(5) > label").should(($t) => {
    t1 = $t.text();
    expect(t1).equal(" Custom range ");
  })
  cy.get("#on-right-panel > div > div.ons-panel-body > div > section:nth-child(6) > header > button").click({ force: true })
  cy.wait(500)
})

Then("I search plan by username {string}", (search) => {
  cy.get("#on-right-panel > div > div.ons-panel-body > div > section:nth-child(4) > div > div.form-group.mb-0 > div > div > button > i").click({ force: true})
  cy.wait(500)
  cy.get("#free_search-1").click({ force: true})
  cy.wait(1000)
  cy.get("#tm-search-input").clear({ force: true })
  cy.get("#tm-search-input").type(search,{ force: true })
  cy.wait(500)
})

Then("I search plan by username {string}", (search) => {
  cy.get("#tm-search-input").clear({ force: true })
  cy.get("#tm-search-input").type(search,{ force: true })
  cy.wait(500)
  cy.get("#on-tm-search-btn-group > div > div > div:nth-child(1) > button").click({ force: true})
  cy.wait(1000)

})
Then("I download csv file", () => {
  cy.get("#search-results > section:nth-child(4) > a").should("exist")
  cy.get("#search-results > section:nth-child(4) > a").click({ force: true })
  cy.wait(500)
})

Then("I search plan by planId {string}", (search) => {
  cy.get("#on-right-panel > div > div.ons-panel-body > div > section:nth-child(4) > div > div.form-group.mb-0 > div > div > button > i").click({ force: true})
  cy.wait(500)
  cy.get("#free_search-4").click({ force: true})
  cy.wait(1000)
  cy.get("#tm-search-input").clear({ force: true })
  cy.get("#tm-search-input").type(search,{ force: true })
  cy.wait(500)
})

Then("I click on the plan", () => {
  cy.get("#results-container > li > div > div.col.on-tm-search-entry > p").should("exist")
  cy.get("#results-container > li:nth-child(1) > div > div.col.on-tm-search-entry > p").click({ force: true })
  cy.wait(1000)
  cy.get("#on-right-panel > div > div.ons-panel-body > div > section:nth-child(3) > div > div > div:nth-child(2) > div").should("exist")
})

Then("I search by Search By UserName and Incident and Current", () => {
  cy.get("#on-right-panel > div > div.ons-panel-body > div > section:nth-child(4) > div > div.form-group.mb-0 > div > div > button > i").click({ force: true})
  cy.wait(500)
  cy.get("#free_search-1").click({ force: true})
  cy.wait(500)
  cy.get("#tm-search-input").clear({ force: true })
  cy.get("#tm-search-input").type("duffys",{ force: true })
  cy.wait(500)
  cy.get("#on-right-panel > div > div.ons-panel-body > div > section:nth-child(4) > div > div.form-group.mb-0 > div > div > button > i").click({ force: true})
  cy.wait(500)
  cy.get("#on-right-panel > div > div.ons-panel-body > div > section:nth-child(5) > header > button").click({ force: true})
  cy.wait(500)
  cy.get("#main-filters > div:nth-child(1) > div > div > div:nth-child(3) > label").click({ force: true})
  cy.wait(500)
  cy.get("#on-right-panel > div > div.ons-panel-body > div > section:nth-child(4) > div > div.form-group.mb-0 > div > div > button > i").click({ force: true})
  cy.wait(500)
  cy.get("#on-tm-search-btn-group > div > div > div:nth-child(1) > button").click({ force: true})
  cy.wait(2000)
})

Then("I search by Search By UserName and Streetwork and Current", () => {
  cy.get("#on-right-panel > div > div.ons-panel-body > div > section:nth-child(4) > div > div.form-group.mb-0 > div > div > button > i").click({ force: true})
  cy.wait(500)
  cy.get("#free_search-1").click({ force: true})
  cy.wait(500)
  cy.get("#tm-search-input").clear({ force: true })
  cy.get("#tm-search-input").type("duffys",{ force: true })
  cy.wait(500)
  cy.get("#on-right-panel > div > div.ons-panel-body > div > section:nth-child(4) > div > div.form-group.mb-0 > div > div > button > i").click({ force: true})
  cy.wait(500)
  cy.get("#on-right-panel > div > div.ons-panel-body > div > section:nth-child(5) > header > button").click({ force: true})
  cy.wait(500)
  cy.get("#main-filters > div:nth-child(1) > div > div > div:nth-child(5) > label").click({ force: true})
  cy.wait(500)
  cy.get("#on-right-panel > div > div.ons-panel-body > div > section:nth-child(4) > div > div.form-group.mb-0 > div > div > button > i").click({ force: true})
  cy.wait(500)
  cy.get("#on-tm-search-btn-group > div > div > div:nth-child(1) > button").click({ force: true})
  cy.wait(2000)
})

Then("I search by Search By UserName and Public Event and Current", () => {
  cy.get("#on-right-panel > div > div.ons-panel-body > div > section:nth-child(4) > div > div.form-group.mb-0 > div > div > button > i").click({ force: true})
  cy.wait(500)
  cy.get("#free_search-1").click({ force: true})
  cy.wait(500)
  cy.get("#tm-search-input").clear({ force: true })
  cy.get("#tm-search-input").type("duffys",{ force: true })
  cy.wait(500)
  cy.get("#on-right-panel > div > div.ons-panel-body > div > section:nth-child(4) > div > div.form-group.mb-0 > div > div > button > i").click({ force: true})
  cy.wait(500)
  cy.get("#on-right-panel > div > div.ons-panel-body > div > section:nth-child(5) > header > button").click({ force: true})
  cy.wait(500)
  cy.get("#main-filters > div:nth-child(1) > div > div > div:nth-child(6) > label").click({ force: true})
  cy.wait(500)
  cy.get("#on-right-panel > div > div.ons-panel-body > div > section:nth-child(4) > div > div.form-group.mb-0 > div > div > button > i").click({ force: true})
  cy.wait(500)
  cy.get("#on-tm-search-btn-group > div > div > div:nth-child(1) > button").click({ force: true})
  cy.wait(2000)
})

Then("I search by Search By UserName and Read only categories and Planned plans", () => {
  cy.get("#on-right-panel > div > div.ons-panel-body > div > section:nth-child(4) > div > div.form-group.mb-0 > div > div > button > i").click({ force: true})
  cy.wait(500)
  cy.get("#free_search-1").click({ force: true})
  cy.wait(500)
  cy.get("#tm-search-input").clear({ force: true })
  cy.get("#tm-search-input").type("duffys",{ force: true })
  cy.wait(500)
  cy.get("#on-right-panel > div > div.ons-panel-body > div > section:nth-child(4) > div > div.form-group.mb-0 > div > div > button > i").click({ force: true})
  cy.wait(500)
  cy.get("#on-right-panel > div > div.ons-panel-body > div > section:nth-child(5) > header > button").click({ force: true})
  cy.wait(500)
  cy.get("#main-filters > div:nth-child(1) > div > div > div:nth-child(7) > label").click({ force: true})
  cy.wait(500)
  cy.get("#on-right-panel > div > div.ons-panel-body > div > section:nth-child(4) > div > div.form-group.mb-0 > div > div > button > i").click({ force: true})
  cy.wait(500)
  cy.get("#on-tm-search-btn-group > div > div > div:nth-child(1) > button").click({ force: true})
  cy.wait(2000)
})

Then("I search by Search By Plan name and Streetworks and Planned plans", () => {
  cy.get("#on-right-panel > div > div.ons-panel-body > div > section:nth-child(4) > div > div.form-group.mb-0 > div > div > button > i").click({ force: true})
  cy.wait(500)
  cy.get("#free_search-2").click({ force: true})
  cy.wait(500)
  cy.get("#tm-search-input").clear({ force: true })
  cy.get("#tm-search-input").type("Test",{ force: true })
  cy.wait(500)
  cy.get("#on-right-panel > div > div.ons-panel-body > div > section:nth-child(4) > div > div.form-group.mb-0 > div > div > button > i").click({ force: true})
  cy.wait(500)
  cy.get("#on-right-panel > div > div.ons-panel-body > div > section:nth-child(5) > header > button").click({ force: true})
  cy.wait(500)
  cy.get("#main-filters > div:nth-child(1) > div > div > div:nth-child(5) > label").click({ force: true})
  cy.wait(500)
  cy.get("#on-right-panel > div > div.ons-panel-body > div > section:nth-child(4) > div > div.form-group.mb-0 > div > div > button > i").click({ force: true})
  cy.wait(500)
  cy.get("#on-tm-search-btn-group > div > div > div:nth-child(1) > button").click({ force: true})
  cy.wait(2000)
})

Then("I search by Search By UserName and Deleted and Expired", () => {
  cy.get("#on-right-panel > div > div.ons-panel-body > div > section:nth-child(4) > div > div.form-group.mb-0 > div > div > button > i").click({ force: true})
  cy.wait(500)
  cy.get("#free_search-1").click({ force: true})
  cy.wait(500)
  cy.get("#tm-search-input").clear({ force: true })
  cy.get("#tm-search-input").type("duffys",{ force: true })
  cy.wait(500)
  cy.get("#on-right-panel > div > div.ons-panel-body > div > section:nth-child(4) > div > div.form-group.mb-0 > div > div > button > i").click({ force: true})
  cy.wait(500)
  cy.get("#on-right-panel > div > div.ons-panel-body > div > section:nth-child(6) > header > button").click({ force: true})
  cy.wait(500)
  cy.get("#date_state-2").click({ force: true})
  cy.wait(500)
  cy.get("#date_state-3").click({ force: true})
  cy.wait(500)
  cy.get("#date_state-1").click({ force: true})
  cy.wait(500)
  cy.get("#on-right-panel > div > div.ons-panel-body > div > section:nth-child(6) > header > button").click({ force: true})
  cy.wait(500)
  cy.get("#on-tm-search-btn-group > div > div > div:nth-child(1) > button").click({ force: true})
  cy.wait(2000)
})

Then("I Mouseover the link icon", () => {
  cy.get("#results-container > li:nth-child(1) > div > div:nth-child(2) > a > i").should("exist")
  cy.get("#results-container > li:nth-child(1) > div > div:nth-child(2) > a > i").trigger('mouseover',{ force: true})
  cy.get("#results-container > li:nth-child(1) > div > div:nth-child(2) > a").invoke('attr', 'title').should('eq',"Open in Public Map")
  cy.wait(500)
})

Then("I click on the ellipsis and on {string}.", (message) => {
  cy.wait(500)
  cy.get("#results-container > li:nth-child(1) > div > div:nth-child(4) > div > button > i").should("exist")
  cy.get("#results-container > li:nth-child(1) > div > div:nth-child(4) > div > button > i").click({ force: true})
  cy.get("#results-container > li:nth-child(1) > div > div:nth-child(4) > div > div > a:nth-child(1)").should("exist")
  cy.get("#results-container > li:nth-child(1) > div > div:nth-child(4) > div > div > a:nth-child(1)").click({ force: true})
  cy.wait(1000)
})

Then("I click on the ellipsis of an Expired plan and then on View", () => {
  cy.wait(500)
  cy.get("#results-container > li:nth-child(1) > div > div:nth-child(3) > div > button > i").should("exist")
  cy.get("#results-container > li:nth-child(1) > div > div:nth-child(3) > div > button > i").click({ force: true})
  cy.get("#results-container > li:nth-child(1) > div > div:nth-child(3) > div > div > a:nth-child(1)").should("exist")
  cy.get("#results-container > li:nth-child(1) > div > div:nth-child(3) > div > div > a:nth-child(1)").click({ force: true})
  cy.wait(1000)
})

Then("i choose Group option", () => {
  cy.get("#on-tm-search-group").should("exist")
  cy.get("#on-tm-search-group").click({ force: true})
  cy.wait(500)
})

Then("I Click on group ellipsis", () => {
  cy.get("#results-container > li:nth-child(1) > div > div.col-auto > div > button > i").should("exist")
  cy.get("#results-container > li:nth-child(1) > div > div.col-auto > div > button > i").click({ force: true})
  cy.wait(500)
  var t1
  cy.get("#results-container > li:nth-child(1) > div > div.col-auto > div > div > a:nth-child(1)").should(($t) => {
    t1 = $t.text();
    expect(t1).equal("View");
  })
  cy.get("#results-container > li:nth-child(1) > div > div.col-auto > div > div > a:nth-child(2)").should(($t) => {
    t1 = $t.text();
    expect(t1).equal("Edit");
  })
  cy.get("#results-container > li:nth-child(1) > div > div.col-auto > div > div > a:nth-child(3)").should(($t) => {
    t1 = $t.text();
    expect(t1).equal("Delete");
  })
})

Then("I Click on the group ellipsis.", () => {
  cy.get("#groups-container > ul > li > div > div.col-auto > div > button > i").should("exist")
  cy.get("#groups-container > ul > li > div > div.col-auto > div > button > i").click({ force: true})
  cy.wait(500)
  var t1
  cy.get("#groups-container > ul > li > div > div.col-auto > div > div > a:nth-child(1)").should(($t) => {
    t1 = $t.text();
    expect(t1).equal("View");
  })
  cy.get("#groups-container > ul > li > div > div.col-auto > div > div > a:nth-child(2)").should(($t) => {
    t1 = $t.text();
    expect(t1).equal("Edit");
  })
  cy.get("#groups-container > ul > li > div > div.col-auto > div > div > a:nth-child(3)").should(($t) => {
    t1 = $t.text();
    expect(t1).equal("Remove");
  })
})


Then("I click on Delete Group", () => {
  cy.wait(500)
  cy.get("#results-container > li:nth-child(1) > div > div.col-auto > div > div > a:nth-child(3)").should("exist")
  cy.get("#results-container > li:nth-child(1) > div > div.col-auto > div > div > a:nth-child(3)").click({ force: true})
  cy.wait(500)
})

Then("I click on Cancel", () => {
  cy.on('window:confirm', (t) => {
    expect(t).to.contains('You are about to permanently delete the Group');
    return false
  })
  cy.wait(1000)
})

Then("I click on Confirm", () => {
  cy.on('window:confirm', (t) => {
    expect(t).to.contains('You are about to permanently delete the Group');
  })
  cy.wait(1000)
})

Then("I tick Expired group search", () => {
  cy.get("#on-right-panel > div > div.ons-panel-body > div > section:nth-child(5) > header > button").should("exist")
  cy.get("#on-right-panel > div > div.ons-panel-body > div > section:nth-child(5) > header > button").click({ force: true})
  cy.wait(500)
  cy.get("#date_state-2").click({ force: true})
  cy.wait(500)
  cy.get("#date_state-3").click({ force: true})
  cy.wait(500)
  cy.get("#date_state-1").click({ force: true})
  cy.wait(500)
  cy.get("#on-right-panel > div > div.ons-panel-body > div > section:nth-child(5) > header > button").click({ force: true})
  cy.wait(500)
  cy.get("#on-tm-search-btn-group > div > div > div:nth-child(1) > button").click({ force: true})
  cy.wait(1000)
})

Then("i enter a deleted group", () => {
  cy.get("#results-container > li:nth-child(1) > div > div.col.on-tm-search-entry > p").should("exist")
  cy.get("#results-container > li:nth-child(1) > div > div.col.on-tm-search-entry > p").click({ force: true})
  cy.wait(1000)
})

Then("i create a standard group with name {string}", (name) => {
  cy.get("#on-right-panel > div > div.ons-panel-body > div > section:nth-child(2) > div > a:nth-child(2)").should("exist")
  cy.get("#on-right-panel > div > div.ons-panel-body > div > section:nth-child(2) > div > a:nth-child(2)").click({ force: true})
  cy.wait(1000)
  cy.get("#group-name").clear({ force: true })
  cy.get("#group-name").click({ force: true })
  cy.get("#group-name").type(name,{ force: true } )
  cy.wait(500)
  cy.get("#save-button").click({ force: true })
  cy.wait(500)
})

Then("I click on Group Search", () => {
  cy.get("#on-tm-search-btn-group > div > div > div:nth-child(1) > button").should("exist")
  cy.get("#on-tm-search-btn-group > div > div > div:nth-child(1) > button").click({ force: true })
  cy.wait(500)
})

Then("I reset the Group search", () => {
  cy.get("#on-tm-search-btn-group > div > div > div:nth-child(2) > button").should("exist")
  cy.get("#on-tm-search-btn-group > div > div > div:nth-child(2) > button").click({ force: true })
  cy.wait(500)
})

Then("I input {string} search username", (username) => {
  cy.get("#tm-search-input").clear({ force: true })
  cy.get("#tm-search-input").click({ force: true })
  cy.get("#tm-search-input").type(username,{ force: true } )
  cy.wait(500)
})
