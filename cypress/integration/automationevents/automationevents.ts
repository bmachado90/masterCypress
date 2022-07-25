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


Then ("I click on the {string} icon {string}", (nome, numero) => {
  cy.get("#on-layer-controls > div > div > section.ons-layer-groups-container.ons-layer-menu-section > section:nth-child("+numero+") > div > div.row.no-gutters.ons-zoom-popover > div.col.ons-group-expand > div > div > a > div.col.ons-layer-group-name > i").click({force: true});
  cy.wait(500)
})

When("I click on the data layer icon", () => {
  cy.intercept("GET", "/services/slides?lang=*").as("network")
  cy.wait("@network")
  cy.get(".ons-icons-layers").click({ force: true })
})

Then("i visit {string}", (message) => {
  cy.visit(Cypress.config().baseUrl+message)
  cy.wait(5000)
})

Then("I get the callout poi info", (message) => {
    cy.get("#map-canvas > div > div > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(4) > div.infoBox > div > div > header > h1")
      .should("exist")

    cy.get("#map-canvas > div > div > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(4) > div.infoBox > div > div > header > h1")
      .should("not.be.empty")

      cy.get("#map-canvas > div > div > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(4) > div.infoBox > div > div > header > p")
      .should("exist")

    cy.get("#map-canvas > div > div > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(4) > div.infoBox > div > div > header > p")
      .should("not.be.empty")

      cy.get("#map-canvas > div > div > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(4) > div.infoBox > div > div > div > div > div > div.rwCallout_extra_content > a")
      .should("exist")

      cy.get("#map-canvas > div > div > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(4) > div.infoBox > div > div > div > div > div > div.rwCallout_section_info > table.rwCallout_table.rwCallout_logoTable > tbody > tr > td.rwCallout_label > a")
      .should("exist")

    cy.get("#map-canvas > div > div > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(4) > div.infoBox > div > div > div > div > div > div.rwCallout_section_info > table.rwCallout_table.rwCallout_logoTable > tbody > tr > td.rwCallout_label > a")
      .should("not.be.empty")

      cy.get("#info-road-users-traffic-restrictions > td.rwCallout_label")
      .should("exist")

    cy.get("#info-road-users-traffic-restrictions > td.rwCallout_label")
      .should("not.be.empty")

      cy.get("#info-road-users-name > td.rwCallout_label")
      .should("exist")

    cy.get("#info-road-users-name > td.rwCallout_label")
      .should("not.be.empty")

      cy.get("#map-canvas > div > div > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(4) > div.infoBox > div > div > div > div > div > div.rwCallout_section_info > table:nth-child(3) > tbody > tr:nth-child(3) > td.rwCallout_label")
      .should("exist")

    cy.get("#map-canvas > div > div > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(4) > div.infoBox > div > div > div > div > div > div.rwCallout_section_info > table:nth-child(3) > tbody > tr:nth-child(3) > td.rwCallout_label")
      .should("not.be.empty")

    cy.get("#map-canvas > div > div > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(4) > div > div > div > div > div > div > div.rwCallout_section_info > table:nth-child(9) > tbody > tr:nth-child(1) > td.rwCallout_label")
      .should("exist")

    cy.get("#map-canvas > div > div > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(4) > div > div > div > div > div > div > div.rwCallout_section_info > table:nth-child(9) > tbody > tr:nth-child(1) > td.rwCallout_info")
      .should("not.be.empty")

    cy.get("#map-canvas > div > div > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(4) > div > div > div > div > div > div > div.rwCallout_section_info > table:nth-child(9) > tbody > tr:nth-child(2) > td.rwCallout_label")
      .should("exist")

    cy.get("#map-canvas > div > div > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(4) > div > div > div > div > div > div > div.rwCallout_section_info > table:nth-child(9) > tbody > tr:nth-child(2) > td.rwCallout_info")
      .should("not.be.empty")

    cy.get("#map-canvas > div > div > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(4) > div > div > div > div > div > div > div.rwCallout_section_info > table:nth-child(9) > tbody > tr:nth-child(3) > td.rwCallout_label")
      .should("exist")

    cy.get("#map-canvas > div > div > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(4) > div > div > div > div > div > div > div.rwCallout_section_info > table:nth-child(9) > tbody > tr:nth-child(3) > td.rwCallout_info")
      .should("not.be.empty")
})

Then ("I click on the Points of interest layer icon {string}", (numero) => {
  cy.get("#on-layer-controls > div > div > section.ons-layer-groups-container.ons-layer-menu-section > section:nth-child("+numero+") > div > div.row.no-gutters.ons-zoom-popover > div.col-auto.ons-layer-group-icon.ons-layer-group-toggler > i").click({force: true});
  cy.wait(500)
})

Then("I add an {string} in step2 {string}", (value, num) => {
  cy.get("#step2 > div > section:nth-child(1) > div > div > button").should("exist")
  cy.get("#step2 > div > section:nth-child(1) > div > div > button").click({ force: true})
  cy.wait(500)
  cy.get("#itemTypeList > a:nth-child("+num+")").click({ force: true})
  cy.wait(500)
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

Then("I nagivate to Step 2", () => {
  cy.get("#go-next").eq(0).click({ force: true})
  cy.wait(1000)
})

//I insert a description "This is C57 test"

When("I insert step 2 description {string}", (message) => {
  cy.get("#step2-poi-additional-info").should("exist")
  cy.get("#step2-poi-additional-info").clear({ force: true })
  cy.get("#step2-poi-additional-info").click({ force: true })
  cy.get("#step2-poi-additional-info").type(message,{ force: true } )
  cy.wait(500)
})

Then("i navigate to step3", () => {
  cy.get("#step3-tab").click({ force: true})
  cy.wait(500)
})

Then ("I Publish the plan", () => {
  cy.get("#publish-checkbox").click({ force: true})
  cy.wait(500)
  cy.get("#on-tm-plan-save-btn > span").click({ force: true})
  cy.wait(1000)
})

Then("i click on Home", () => {
  cy.get("#homeButton").click({ force: true})
  cy.wait(1000)
})

Then("I add it to the plan", () => {
  cy.get("#on-right-panel > div > div.ons-panel-body > div:nth-child(2) > section:nth-child(4) > button").click({ force: true})
  cy.wait(1000)
})

//I choose diferente Dates
Then("I choose diferente Dates", () => {
  cy.get("#independent-dates").click({ force: true})
  cy.wait(500)
  cy.get(".pr-3 .input-group .datetimepicker-input").eq(0).clear({ force: true })
  cy.get(".pr-3 .input-group .datetimepicker-input").eq(0).type("25/05/2023",{ force: true })
  cy.wait(500)
  cy.get(".pr-3 .input-group .datetimepicker-input").eq(1).clear({ force: true })
  cy.get(".pr-3 .input-group .datetimepicker-input").eq(1).type("26/05/2023",{ force: true })
  cy.wait(500)
})

Then("I visit the following plan link {string}", (url) => {
  cy.get("#plan-base-id").should("exist")
  cy.get("#plan-base-id").should("not.be.empty")

  cy.get("#plan-base-id").then(($t) => {
    const t1 = $t.text();
    cy.visit(Cypress.config().baseUrl+url+t1)
    })
    cy.wait(5000)
})

Then ("I go to Traffic Management module",() => {
  cy.get("#on-modules-menu > div > div > a > i").click({force: true});
  cy.wait(500)
  cy.get("#on-modules-menu > div > div > div > a:nth-child(8)").click({force: true});
  cy.wait(3000)
})

Then("I search for the POI plan {string}", (planID) => {
  cy.get("#on-right-panel > div > div.ons-panel-body > div > section:nth-child(2) > div > a:nth-child(3)", { timeout: 10000 }).should("exist")
  cy.get("#on-right-panel > div > div.ons-panel-body > div > section:nth-child(2) > div > a:nth-child(3)").click({force: true});
  cy.wait(500)
  cy.get("#tm-search-input").clear({ force: true })
  cy.get("#tm-search-input").type(planID,{ force: true })
  cy.wait(500)
  cy.get("#on-tm-search-btn-group > div > div > div:nth-child(1) > button").click({ force: true})
  cy.wait(1000)
  cy.get("#results-container > li:nth-child(1) > div > div.col.on-tm-search-entry > p").should("exist")
  cy.get("#results-container > li:nth-child(1) > div > div.col.on-tm-search-entry > p").click({ force: true})
  cy.wait(1000)
})

Then ("I open a crated POI",() => {
  cy.get("#step2 > div > section:nth-child(2) > section > ul > li:nth-child(2) > div > div.col.worksref.truncate > a").should("exist")
  cy.get("#step2 > div > section:nth-child(2) > section > ul > li:nth-child(2) > div > div.col.worksref.truncate > a").click({force: true});
  cy.wait(500)
})

Then ("I disable the callout option",() => {
  cy.get("#step2-poi-callout-enabled").should("exist")
  cy.get("#step2-poi-callout-enabled").click({force: true});
  cy.wait(500)
})

//I insert plot location

Then ("I insert plot location",() => {
  cy.get("#draw-geom > div > button").eq(1).click({ force: true })
  cy.wait(500)
  cy.get("#step2-poi-draw-point").click({ force: true })
  cy.wait(500)
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
})

Then("I wait for the callout to open", () => {
  cy.get(".rwCallout_content", { timeout: 30000 }).should("exist")
})
