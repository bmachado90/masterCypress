import { Given, Then, When } from "cypress-cucumber-preprocessor/steps"
import { xorBy } from "cypress/types/lodash"

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
  cy.get("#on-right-panel > div > div.ons-panel-body > div > section:nth-child(3) > div > a:nth-child(1)").click({ force: true })
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

When("I Save the plan", () => {
  cy.get("#on-tm-plan-save-btn").should("exist")
  cy.get("#on-tm-plan-save-btn").click({ force: true})
  cy.wait(2000)
})

Then("i navigate to step3", () => {
  cy.get("#step3-tab").click({ force: true})
  cy.wait(500)
})

Then("i click on Home", () => {
  cy.get("#homeButton").click({ force: true})
  cy.wait(1000)
})

When("I perform Logout", () => {
  cy.get("#userMenuButton > .ons-mdi").click({ force: true })
  cy.wait(500)
  cy.get('#on-user-menu > div > div > div > div.col-auto > ul > li > div > a:nth-child(9)').click({ force: true})
  cy.wait(3000)
})

Then("I Submit the plan to an HA", () => {
  cy.get("#submit-to-ha-activate").should("exist")
  cy.get("#submit-to-ha-activate").click({ force: true })
  cy.wait(500)
})

Then("I Confirm the submission", () => {
  cy.get("#step3-ttro-comment").should("exist")
  cy.get("#submit-to-ha").should("exist")

  cy.get("#step3-ttro-comment").clear({ force: true })
  cy.get("#step3-ttro-comment").type("Submit C4742 plan",{ force: true })
  cy.wait(500)
  cy.get("#submit-to-ha").click({ force: true })
  cy.wait(1000)

})

Then("The TTRO checkbox is locked", () => {
  cy.get('#ttro-application').should('have.attr', 'disabled', 'disabled')
  cy.wait(500)
})

Then("I click on Works Pending", () => {
  cy.get("#on-right-panel > div > div.ons-panel-body > div > section:nth-child(2) > div > ul > li:nth-child(1) > a").should("exist")
  cy.get("#on-right-panel > div > div.ons-panel-body > div > section:nth-child(2) > div > ul > li:nth-child(1) > a").click({ force: true })
  cy.wait(1000)
})

Then("Non-TTRO submitted plan are displayed", () => {
  cy.get('#results-container')
  .find('li').its('length').should('be.gt', 0)
  var t6
  cy.get("#results-container > li > div > div.col.on-tm-search-entry > div").should(($t) => {
    t6 = $t.text();
    expect(t6).equal("Pending");
  })
})


Then("I open the plan", () => {
  cy.get("#results-container > li > div > div.col.on-tm-search-entry > p").should("exist")
  cy.get("#results-container > li > div > div.col.on-tm-search-entry > p").click({ force: true })
  cy.wait(1000)
  cy.get("#accept-submission").should("exist")
  var t6
  cy.get("#accept-submission > span").should(($t) => {
    t6 = $t.text();
    expect(t6).equal("Accept");
  })

  cy.get("#on-right-panel > div > div.ons-panel-body > div > section.row.no-gutters.ons-plan-metadata > div > p:nth-child(5) > span.badge.badge-warning").should(($t) => {
    t6 = $t.text();
    expect(t6).equal(" Pending ");
  })
})

Then("I accept the plan", () => {
  cy.get("#approve-plan-submission").should("exist")
  cy.get("#approve-plan-submission").click({ force: true })
  cy.wait(1000)
})


Then("The plan has status {string}", (message) => {
  var t6
  cy.get("#on-right-panel > div > div.ons-panel-body > div > section.row.no-gutters.ons-plan-metadata > div > p:nth-child(5) > span.badge.badge-success").should(($t) => {
  t6 = $t.text();
  expect(t6).contain(message);
  })

  cy.get('#ttro-application').should('have.attr', 'disabled', 'disabled')
  cy.wait(500)

})

Then("i look at the dashboard", () => {
  cy.wait(500)
  var t6
  cy.get("#stats_val_4").should(($t) => {
    t6 = $t.text();
    expect(t6).contain("1");
    })
})
