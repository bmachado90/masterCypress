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


Then ("I go to the Route Manager Page",() => {
  cy.get("#on-modules-menu > div > div > a").click({force: true})
  cy.wait(500)
  cy.get('[href="/route-manager"]').should('be.visible')
  cy.get('[href="/route-manager"]').click({force: true})
  cy.wait(1000)
})



Then ("I must be able to see the Route Manager Page",() => {
  cy.url().should('eq', Cypress.config().baseUrl+'/route-manager')
})

Then ("I Click on Route Manager option",() => {
  cy.get("#dropdownMenuButton > span").click({force: true});
  cy.wait(500)

  var t6
  cy.get("#dropdownMenuButton > span").should(($t) => {
    t6 = $t.text();
    expect(t6).equal(" Route Manager ");
  })

})


Then ("I choose Clashes",() => {
  cy.get("#on-right-panel > div > div.ons-panel-body > header > div > div > div > a:nth-child(5)").click({force: true});
  cy.wait(500)
  cy.get("#on-right-panel > div > div.ons-panel-body > header > div > div > div > a:nth-child(5)").click({force: true});
  cy.wait(500)
  var t6
  cy.get("#on-right-panel > div > div.ons-panel-body > div > section > div > div.row.no-gutters.mb-3.justify-content-between > div:nth-child(1) > h2").should(($t) => {
    t6 = $t.text();
    expect(t6).equal(" Clash List ");
  })

})

Then ("I click on Export to csv.",() => {
  cy.get("#on-right-panel > div > div.ons-panel-body > div > section > div > div.row.no-gutters.mb-3.justify-content-between > div:nth-child(2) > button").should("exist")
  cy.wait(500)
  cy.get("#on-right-panel > div > div.ons-panel-body > div > section > div > div.row.no-gutters.mb-3.justify-content-between > div:nth-child(2) > button").click({force: true});
  cy.wait(1000)
})

Then ("I Insert some values on the search {string}",(clash) => {
  cy.get("#rm-search").should("exist")
  cy.wait(500)
  cy.get("#rm-search").clear({ force: true })
  cy.get("#rm-search").click({ force: true })
  cy.get("#rm-search").type(clash,{ force: true } )
  cy.wait(1000)
})

Then ("I click on a Clashe",() => {
  cy.wait(1000)
  cy.get("#on-right-panel > div > div.ons-panel-body > div > section > div > div:nth-child(4) > div > ul > li > a > div > div.col").should("exist")
  cy.get("#on-right-panel > div > div.ons-panel-body > div > section > div > div:nth-child(4) > div > ul > li > a > div > div.col").click({force: true})
  cy.wait(500)
})

Then ("I Go Back",() => {
  cy.get("#on-right-panel > div > div.ons-panel-body > div > section > div > div.row.no-gutters.mb-3 > div:nth-child(1) > a").should("exist")
  cy.get("#on-right-panel > div > div.ons-panel-body > div > section > div > div.row.no-gutters.mb-3 > div:nth-child(1) > a").click({force: true})
  cy.wait(1000)
})

Then ("I click on one clashes",() => {
  cy.get("#on-right-panel > div > div.ons-panel-body > div > section > div > div:nth-child(4) > div > ul > li:nth-child(1) > a").should("exist")
  cy.get("  #on-right-panel > div > div.ons-panel-body > div > section > div > div:nth-child(4) > div > ul > li:nth-child(1) > a").click({force: true})
  cy.wait(1000)
})

Then ("I choose Alerts",() => {
  cy.get("#on-right-panel > div > div.ons-panel-body > header > div > div > div > a:nth-child(7)").should("exist")
  cy.get("#on-right-panel > div > div.ons-panel-body > header > div > div > div > a:nth-child(7)").click({force: true})
  cy.wait(1000)
  cy.url().should('eq', Cypress.config().baseUrl+'/route-manager#/alerts')

})

Then ("I click on Create Alerts",() => {
  cy.get("#on-right-panel > div > div.ons-panel-body > div > div.col-12.mb-3 > div > div:nth-child(1) > h2").should("exist")
  cy.get("#alertAddButton").should("exist")
  var t6
  cy.get("#alertAddButton").should(($t) => {
    t6 = $t.text();
    expect(t6).equal(" Create alert ");
  })
  cy.get("#alertAddButton").click({force: true})
  cy.wait(500)
  cy.get("#alert-back").should("exist")
  cy.get("#alert-save").should("exist")
})

Then ("I insert alert name {string}",(name) => {
  cy.get("#alert-name").clear({ force: true })
  cy.get("#alert-name").click({ force: true })
  cy.get("#alert-name").type(name,{ force: true } )
  cy.wait(500)
})

Then ("I select the alert frequency.",() => {
  cy.get("#alert-frequency-dropdown").select('Daily',{ force: true })
  cy.wait(500)
})

Then ("I select Select the Clash severity.",() => {
  cy.get("#clash-severity").should("exist")
  cy.get("#clash-severity").click({force: true})
  cy.wait(500)
  cy.get("#clash-severity-dropdown > div > div:nth-child(1) > div > div > label").click({force: true})
  cy.get("#clash-severity-dropdown > div > div:nth-child(3) > div > div > label").click({force: true})
  cy.get("#clash-severity-dropdown > div > div:nth-child(4) > div > div > label").click({force: true})
  cy.wait(500)
  cy.get("#clash-severity").click({force: true})
  cy.wait(500)
})

Then ("I Set the Clash date range.",() => {
  cy.get("#clash-detection-range-dropdown").select('Starting in the next 30 days',{ force: true })
  cy.wait(500)
})

Then ("I Save the alert",() => {
  cy.get("#alert-save").click({force: true})
  cy.wait(500)
})

Then ("I click on Total Clashes widget",() => {
  cy.get('#on-right-panel > div > div.ons-panel-body > div > section > div > div.ons-big-widget-container.on-clashes-big-widget > div > div.col-md-8.ons-right-section.ons-has-footer > div.ons-chart > a', { timeout: 10000 })
    .should('exist');
  cy.get("#on-right-panel > div > div.ons-panel-body > div > section > div > div.ons-big-widget-container.on-clashes-big-widget > div > div.col-md-8.ons-right-section.ons-has-footer > div.ons-chart > a")
    .should("exist")
  cy.get("#on-right-panel > div > div.ons-panel-body > div > section > div > div.ons-big-widget-container.on-clashes-big-widget > div > div.col-md-8.ons-right-section.ons-has-footer > div.ons-chart > a")
    .click({force: true})
  cy.wait(1000)
})

Then ("I go to the Clashes pages",() => {
  cy.url().should('eq', Cypress.config().baseUrl+'/route-manager#clashes/status:all;date:all;order:start;sort:desc')
  cy.wait(500)
  var t6
  cy.get("#on-right-panel > div > div.ons-panel-body > div > section > div > div.row.no-gutters.mb-3.justify-content-between > div:nth-child(1) > h2").should(($t) => {
    t6 = $t.text();
    expect(t6).equal(" Clash List ");
  })
})

Then ("I click on question mark page",() => {
  cy.get("#search-help").should("exist")
  cy.get("#search-help").click({force: true})
  cy.wait(500)
})

Then("I close the modal", () => {
  cy.get("#on-modal-close").should("exist")
  cy.get("#on-modal-close").click({ force: true})
  cy.wait(1000)
})

Then ("A new modal opens",() => {
  cy.wait(500)
  cy.get("#modal-window > div > div").should("exist")
  var t6
  cy.get("#modal-window > div > div > div.modal-header > h5").should(($t) => {
    t6 = $t.text();
    expect(t6).contain("Help");
  })
  cy.get("#on-modal-discard-btn").should("exist")
})

Then("I click on Load More button", () => {
  cy.get("#on-right-panel > div > div.ons-panel-body > div > section > div > div:nth-child(4) > div > button").should("exist")
  var t6
  cy.get("#on-right-panel > div > div.ons-panel-body > div > section > div > div:nth-child(4) > div > button").should(($t) => {
    t6 = $t.text();
    expect(t6).contain("Load more results");
  })
  cy.get("#on-right-panel > div > div.ons-panel-body > div > section > div > div:nth-child(4) > div > button").click({ force: true})
  cy.wait(1000)
})

Then ("I filter for My Works",() => {
  cy.get("#clash-filters").should("exist")
  cy.get("#clash-filters").click({ force: true})
  cy.wait(500)
  cy.get("#filters-dropdown > div > div:nth-child(32) > div > div > input").click({ force: true})
  cy.wait(1000)
  cy.get("#clash-filters").click({ force: true})
})

Then ("I click on one clash",() => {
  cy.get('#on-right-panel > div > div.ons-panel-body > div > section > div > div:nth-child(4) > div > ul')
  .find('li').its('length').should('be.gt', 0)
  cy.get("#on-right-panel > div > div.ons-panel-body > div > section > div > div:nth-child(4) > div > ul > li:nth-child(1) > a").click({ force: true})
  cy.wait(500)
})

Then("I click in Go back", () => {
  cy.get("#on-right-panel > div > div.ons-panel-body > div > section > div > div.row.no-gutters.mb-3 > div:nth-child(1) > a").should("exist")
  cy.get("#on-right-panel > div > div.ons-panel-body > div > section > div > div.row.no-gutters.mb-3 > div:nth-child(1) > a").click({ force: true})
  cy.get('#on-right-panel > div > div.ons-panel-body > div > section > div > div:nth-child(4) > div > ul > li:nth-child(1) > a', { timeout: 10000 })
  .should('exist');
})

Then ("I click on another Clash",() => {
  cy.get('#on-right-panel > div > div.ons-panel-body > div > section > div > div:nth-child(4) > div > ul > li:nth-child(1) > a', { timeout: 10000 })
    .should('exist');
  cy.get('#on-right-panel > div > div.ons-panel-body > div > section > div > div:nth-child(4) > div > ul')
    .find('li').its('length').should('be.gt', 0)
  cy.get("#on-right-panel > div > div.ons-panel-body > div > section > div > div:nth-child(4) > div > ul > li:nth-child(3) > a").click({ force: true})
  cy.wait(500)
})

Then ("I can see the data",() => {

  cy.get("#on-right-panel > div > div.ons-panel-body > div > section > div > div:nth-child(2) > div > div:nth-child(2) > ul > li.sortitem.list-group-item.clearfix.read > div > div.col > span.clash-date")
    .should("exist")
  cy.get("#on-right-panel > div > div.ons-panel-body > div > section > div > div:nth-child(2) > div > div:nth-child(2) > ul > li.sortitem.list-group-item.clearfix.read > div > div.col > span.clash-date")
    .should("not.be.empty")

  cy.get("#on-right-panel > div > div.ons-panel-body > div > section > div > div:nth-child(2) > div > div:nth-child(2) > ul > li.sortitem.list-group-item.clearfix.read > div > div.col > span.clash-label.read")
    .should("exist")
  cy.get("#on-right-panel > div > div.ons-panel-body > div > section > div > div:nth-child(2) > div > div:nth-child(2) > ul > li.sortitem.list-group-item.clearfix.read > div > div.col > span.clash-label.read")
    .should("not.be.empty")

  cy.get("#on-right-panel > div > div.ons-panel-body > div > section > div > div:nth-child(2) > div > div:nth-child(2) > ul > li.sortitem.list-group-item.clearfix.read > div > div.col > span.clash-reference")
    .should("exist")
  cy.get("#on-right-panel > div > div.ons-panel-body > div > section > div > div:nth-child(2) > div > div:nth-child(2) > ul > li.sortitem.list-group-item.clearfix.read > div > div.col > span.clash-reference")
    .should("not.be.empty")

  cy.get("#on-right-panel > div > div.ons-panel-body > div > section > div > div:nth-child(2) > div > div:nth-child(2) > ul > li.on-clash-severity.list-group-item.ons-clash-section > div > div.col > span.value")
    .should("exist")
  cy.get("#on-right-panel > div > div.ons-panel-body > div > section > div > div:nth-child(2) > div > div:nth-child(2) > ul > li.on-clash-severity.list-group-item.ons-clash-section > div > div.col > span.value")
    .should("not.be.empty")

  cy.get("#on-right-panel > div > div.ons-panel-body > div > section > div > div:nth-child(2) > div > div:nth-child(2) > ul > li.on-clash-responsability.list-group-item.ons-clash-section > div > div.col > span.value")
    .should("exist")
  cy.get("#on-right-panel > div > div.ons-panel-body > div > section > div > div:nth-child(2) > div > div:nth-child(2) > ul > li.on-clash-responsability.list-group-item.ons-clash-section > div > div.col > span.value")
    .should("not.be.empty")

  cy.get("#on-right-panel > div > div.ons-panel-body > div > section > div > div:nth-child(2) > div > div:nth-child(2) > ul > li.on-clash-data.list-group-item.ons-clash-section > div:nth-child(1) > div > span.value")
    .should("exist")
  cy.get("#on-right-panel > div > div.ons-panel-body > div > section > div > div:nth-child(2) > div > div:nth-child(2) > ul > li.on-clash-data.list-group-item.ons-clash-section > div:nth-child(1) > div > span.value")
    .should("not.be.empty")

  cy.get("#on-right-panel > div > div.ons-panel-body > div > section > div > div:nth-child(2) > div > div:nth-child(2) > ul > li.on-clash-data.list-group-item.ons-clash-section > div:nth-child(2) > div > span.value")
    .should("exist")
  cy.get("#on-right-panel > div > div.ons-panel-body > div > section > div > div:nth-child(2) > div > div:nth-child(2) > ul > li.on-clash-data.list-group-item.ons-clash-section > div:nth-child(2) > div > span.value")
    .should("not.be.empty")

  cy.get("#on-right-panel > div > div.ons-panel-body > div > section > div > div:nth-child(2) > div > div:nth-child(2) > ul > li.on-clash-data.list-group-item.ons-clash-section > div:nth-child(3) > div > span.value")
    .should("exist")
  cy.get("#on-right-panel > div > div.ons-panel-body > div > section > div > div:nth-child(2) > div > div:nth-child(2) > ul > li.on-clash-data.list-group-item.ons-clash-section > div:nth-child(3) > div > span.value")
    .should("not.be.empty")

  cy.get("#on-right-panel > div > div.ons-panel-body > div > section > div > div:nth-child(2) > div > div:nth-child(2) > ul > li.on-clash-responsability.list-group-item.ons-clash-section > div > div.col-auto > img")
    .should("exist")
  cy.get("#on-right-panel > div > div.ons-panel-body > div > section > div > div:nth-child(2) > div > div:nth-child(2) > ul > li.on-clash-responsability.list-group-item.ons-clash-section > div > div.col-auto > img")
    .invoke('attr', 'src').should("not.be.empty")

})

Then ("The clash appears on the list",() => {
  cy.get('#on-right-panel > div > div.ons-panel-body > div > section > div > div:nth-child(4) > div > ul > li:nth-child(1) > a', { timeout: 10000 })
  .should('exist');
  cy.get('#on-right-panel > div > div.ons-panel-body > div > section > div > div:nth-child(4) > div > ul')
  .find('li').its('length').should('be.gt', 0)
  cy.wait(500)
})

Then ("I Mouseover left and right arrows on top of clashes",() => {
  cy.get("#on-right-panel > div > div.ons-panel-body > div > section > div > div.row.no-gutters.mb-3 > div:nth-child(2) > a:nth-child(1)")
  .should("exist")

  cy.get("#on-right-panel > div > div.ons-panel-body > div > section > div > div.row.no-gutters.mb-3 > div:nth-child(2) > a:nth-child(1)")
  .invoke('attr', 'title').should('eq',"Go to next clash")

  cy.get("#on-right-panel > div > div.ons-panel-body > div > section > div > div.row.no-gutters.mb-3 > div:nth-child(2) > a:nth-child(2)")
  .should("exist")

  cy.get("#on-right-panel > div > div.ons-panel-body > div > section > div > div.row.no-gutters.mb-3 > div:nth-child(2) > a:nth-child(2)")
  .invoke('attr', 'title').should('eq',"Go to previous clash")
  cy.wait(500)
})

Then ("I Navigate beetween clashes",() => {
  cy.get("#on-right-panel > div > div.ons-panel-body > div > section > div > div.row.no-gutters.mb-3 > div:nth-child(2) > a:nth-child(1)")
  .click({ force: true})
  cy.wait(1000)

  cy.get("#on-right-panel > div > div.ons-panel-body > div > section > div > div.row.no-gutters.mb-3 > div:nth-child(2) > a:nth-child(2)")
  .click({ force: true})
  cy.wait(1000)
})

Then ("I click on Create Traffic Management Plan button",() => {
  cy.get("#on-right-panel > div > div.ons-panel-body > div > section > div > div:nth-child(2) > div > div:nth-child(2) > div.row.no-gutters.my-4 > div > button")
  .should("exist")

  cy.get("#on-right-panel > div > div.ons-panel-body > div > section > div > div:nth-child(2) > div > div:nth-child(2) > div.row.no-gutters.my-4 > div > button")
  .invoke('attr', 'title').should('eq',"Create Traffic Management Plan")

  cy.get("#on-right-panel > div > div.ons-panel-body > div > section > div > div:nth-child(2) > div > div:nth-child(2) > div.row.no-gutters.my-4 > div > button")
  .click({ force: true})

  cy.get('#step1 > div > div:nth-child(1) > div > h2', { timeout: 20000 })
    .should('exist');
})

Then ("I exit the TM page",() => {
  cy.get("#back-button").should("exist")
  cy.get("#back-button").click({ force: true})
  cy.wait(500)
  cy.on('window:confirm', (t) => {
    expect(t).to.contains('É possível que as alterações não tenham sido efetuadas.');
  })
  cy.get('#on-right-panel > div > div.ons-panel-body > div > section > div > div:nth-child(2) > div > div:nth-child(2) > ul > li.on-clash-responsability.list-group-item.ons-clash-section > div > div.col > span.label', { timeout: 20000 })
  .should('exist');
})

When("I click in the search item text box to type", () => {
  cy.get(".ons-tt-input").click({ force: true })
})

When("I type in the search box a location {string}", (location) => {
  cy.get(".ons-tt-input").clear({ force: true })
  cy.get(".ons-tt-input").type(location,{ force: true })
  cy.wait(2000)
  cy.get(".ons-tt-input").click({ force: true })
})

When("I select item {string} from the dropdown list", (location) => {
  cy.wait(3000)
  cy.get('.ons-tt-menu').find('.list-group-item').contains(location).click({ force: true })
  cy.wait(1000)
})

Then ("I click on Routes widget",() => {
  cy.get('#on-right-panel > div > div.ons-panel-body > div > section > div > div.ons-big-widget-container.on-routes-big-widget.mt-3 > div > div.col-md-8.ons-right-section > div.ons-chart > a', { timeout: 10000 })
    .should('exist');
  cy.wait(3000)
  cy.get("#on-right-panel > div > div.ons-panel-body > div > section > div > div.ons-big-widget-container.on-routes-big-widget.mt-3 > div > div.col-md-8.ons-right-section > div.ons-chart > a")
    .click({force: true})
  cy.wait(1000)
})

Then ("I go to the Routes pages",() => {
  cy.url().should('eq', Cypress.config().baseUrl+'/route-manager#/routes/impacted_routes:ALL')
  cy.wait(500)
  var t6
  cy.get("#on-right-panel > div > div.ons-panel-body > section > div.col-12.no-gutters.mb-3.mt-2 > div > div > div:nth-child(1) > h2").should(($t) => {
    t6 = $t.text();
    expect(t6).equal("Routes");
  })
})

Then ("I draw the route on the map",() => {
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

    cy.wait(1000)
    //zoom
    doAndWaitForMapEvent("zoom_changed", (map) => map.setZoom(19))
    cy.wait(2000)
        //Click on the Map
    cy.window().then((win) => {
      getGoogleMap().then((map) => {
      map.panBy(-100,500)
      cy.wait(500)
      const center = map.getCenter()
        if (!center) {
          throw "Couldn't get the map's center"
        }

        const p = latLngToPoint(win, map, center)
        cy.wrap(map.getDiv()).dblclick(p.x, p.y)
      })
    })
    cy.wait(2000)
})

Then ("I click on Add Route And Bus option",() => {
  cy.get("#routeMenuButton").should("exist")
  cy.wait(500)
  cy.get("#on-right-panel > div > div.ons-panel-body > section > div.col-12.no-gutters.mb-3.mt-2 > div > div > div.col-6.text-right > div > div > a:nth-child(1)").click(({force: true}))
  cy.wait(500)

})

Then ("The page is visible",() => {
  cy.get('#routeName', { timeout: 10000 })
  .should('exist');
})

Then ("I insert the name {string}",(message) => {
  cy.get("#routeName").clear({ force: true })
  cy.get("#routeName").click({ force: true })
  cy.get("#routeName").type(message,{ force: true } )
})

Then ("i click on Plot Route",() => {
  cy.get("#draw-geom > div > button").click({ force: true })
  cy.wait(500)
  cy.get("#plotLinePlanLocation").click({ force: true })
  cy.wait(500)
})

Then ("I insert a description {string}",(message) => {
  cy.get("#routeDescription").clear({ force: true })
  cy.get("#routeDescription").click({ force: true })
  cy.get("#routeDescription").type(message,{ force: true } )
  cy.wait(500)
})

Then ("I Save the bus route",() => {
  cy.wait(500)
  cy.get("#on-rm-save-btn").click({ force: true })
  cy.wait(1000)
})

Then ("I return to the route list",() => {
  cy.wait(500)
  cy.get("#brm-close").click({ force: true })
  cy.get('#on-right-panel > div > div.ons-panel-body > section > div:nth-child(3) > div > div > ul > li:nth-child(1)', { timeout: 10000 })
    .should('exist');
})

Then ("I click on Add Route And Strategic route",() => {
  cy.get("#routeMenuButton").should("exist")
  cy.wait(500)
  cy.get("#on-right-panel > div > div.ons-panel-body > section > div.col-12.no-gutters.mb-3.mt-2 > div > div > div.col-6.text-right > div > div > a:nth-child(2) > span").click(({force: true}))
  cy.wait(500)
})

Then ("I click on Add Route And Lary route",() => {
  cy.get("#routeMenuButton").should("exist")
  cy.wait(500)
  cy.get("#on-right-panel > div > div.ons-panel-body > section > div.col-12.no-gutters.mb-3.mt-2 > div > div > div.col-6.text-right > div > div > a:nth-child(3) > span").click(({force: true}))
  cy.wait(500)
})

Then ("I go to Traffic Management module",() => {
  cy.get("#on-modules-menu > div > div > a > i").click({force: true});
  cy.wait(500)
  cy.get("#on-modules-menu > div > div > div > a:nth-child(8)").click({force: true});
  cy.wait(3000)
})

//the Traffic Management page is displayed
Then ("the Traffic Management page is displayed",() => {
  cy.get('#on-right-panel > div > div.ons-panel-body > div > section:nth-child(2) > div > a:nth-child(1)', { timeout: 10000 })
    .should('exist');
})

Then("I click on Create a New Plan.", () => {
  cy.get("#on-right-panel > div > div.ons-panel-body > div > section:nth-child(2) > div > a:nth-child(1)").click({ force: true })
  cy.wait(500)
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

When("I Save the current plan", () => {
  cy.get("#on-tm-plan-save-btn").should("exist")
  cy.get("#on-tm-plan-save-btn").click({ force: true})
  cy.wait(2000)
})

//I Publish the plan
Then ("I Publish the plan", () => {
  cy.get("#publish-checkbox").click({ force: true})
  cy.wait(500)
  cy.get("#on-tm-plan-save-btn > span").click({ force: true})
  cy.wait(1000)
})

Then("i navigate to step3", () => {
  cy.get("#step3-tab").click({ force: true})
  cy.wait(500)
})
