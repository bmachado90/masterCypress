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

Then("i fill the create route email", () => {
  cy.get("#modal-window > div > div > div.modal-header > h5").should("exist")

  cy.get("#email-alert-label").clear({ force: true })
  cy.get("#email-alert-label").type("Elgin test 1234",{ force: true })
  cy.wait(500)

  cy.get("#email-alert-to-recipients-selectized").clear({ force: true })
  cy.get("#email-alert-to-recipients-selectized").type("bruno.machado@one.network",{ force: true }).type('{enter}')
  cy.wait(500)

  cy.get("#email-alert-subject").clear({ force: true })
  cy.get("#email-alert-subject").type("Automated Test",{ force: true })
  cy.wait(2000)

  cy.get("#on-modal-save-btn").click({ force: true })
  cy.wait(500)

})

Then ("I must be able to see the Route Manager Page",() => {
  cy.url().should('eq', Cypress.config().baseUrl+'/route-manager')
  cy.get("#dropdownMenuButton > span", { timeout: 30000 }).should("exist")
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

Then("I choose Routes", () => {
  cy.get("#on-right-panel > div > div.ons-panel-body > header > div > div > div > a:nth-child(3)").should("exist")
  cy.get("#on-right-panel > div > div.ons-panel-body > header > div > div > div > a:nth-child(3)").click({force: true})
  cy.wait(1000)
  cy.url().should('eq', Cypress.config().baseUrl+'/route-manager#/routes')
})

Then("I choose Bus Stops", () => {
  cy.get("#on-right-panel > div > div.ons-panel-body > header > div > div > div > a:nth-child(4)").should("exist")
  cy.get("#on-right-panel > div > div.ons-panel-body > header > div > div > div > a:nth-child(4)").click({force: true})
  cy.wait(1000)
  cy.url().should('eq', Cypress.config().baseUrl+'/route-manager#/bus-stops')
})

Then("I choose Dashboard", () => {
  cy.get("#on-right-panel > div > div.ons-panel-body > header > div > div > div > a:nth-child(1)").should("exist")
  cy.get("#on-right-panel > div > div.ons-panel-body > header > div > div > div > a:nth-child(1)").click({force: true})
  cy.wait(1000)
  cy.url().should('eq', Cypress.config().baseUrl+'/route-manager#dashboard')
})

Then("I choose Seetings", () => {
  cy.get("#on-right-panel > div > div.ons-panel-body > header > div > div > div > a:nth-child(9)").should("exist")
  cy.get("#on-right-panel > div > div.ons-panel-body > header > div > div > div > a:nth-child(9)").click({force: true})
  cy.wait(1000)
  cy.url().should('eq', Cypress.config().baseUrl+'/route-manager#/settings')
})

Then("I mouseover all the option", () => {
  cy.get("#on-right-panel > div > div.ons-panel-body > header > div > div > div > a:nth-child(1)").trigger('mouseover',{ force: true})
  cy.wait(500)
  cy.get("#on-right-panel > div > div.ons-panel-body > header > div > div > div > a:nth-child(3)").trigger('mouseover',{ force: true})
  cy.wait(500)
  cy.get("#on-right-panel > div > div.ons-panel-body > header > div > div > div > a:nth-child(4)").trigger('mouseover',{ force: true})
  cy.wait(500)
  cy.get("#on-right-panel > div > div.ons-panel-body > header > div > div > div > a:nth-child(5)").trigger('mouseover',{ force: true})
  cy.wait(500)
  cy.get("#on-right-panel > div > div.ons-panel-body > header > div > div > div > a:nth-child(7)").trigger('mouseover',{ force: true})
  cy.wait(500)
  cy.get("#on-right-panel > div > div.ons-panel-body > header > div > div > div > a:nth-child(9)").trigger('mouseover',{ force: true})
  cy.wait(500)
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


Then("I input {string} in the route search", (message) => {
  cy.get("#rm-search").should("exist")
  cy.wait(500)
  cy.get("#rm-search").clear({ force: true })
  cy.get("#rm-search").click({ force: true })
  cy.get("#rm-search").type(message,{ force: true } )
  cy.wait(1000)

})

Then("i open an test route", () => {
  cy.get("#on-right-panel > div > div.ons-panel-body > section > div:nth-child(3) > div > div > ul > li:nth-child(15) > a > div.row.no-gutters.align-items-center > div.col-7.p-0")
    .should("exist")
  cy.get("#on-right-panel > div > div.ons-panel-body > section > div:nth-child(3) > div > div > ul > li:nth-child(15) > a > div.row.no-gutters.align-items-center > div.col-7.p-0")
    .click({ force: true })
  cy.wait(500)
})

Then("i click on Documents and Alerts", () => {
  cy.get("#documents-tab").should("exist")
  cy.get("#documents-tab").click({ force: true })
  cy.wait(500)
})

Then("I click on Create Email", () => {
  cy.get("#documents > section:nth-child(2) > div > div.form-group > div > div > a").should("exist")
  cy.get("#documents > section:nth-child(2) > div > div.form-group > div > div > a").click({ force: true })
  cy.wait(500)
  cy.get("#email-templates-list > a:nth-child(23)").click({ force: true })
  cy.wait(2000)
})

Then("I Go back on the Seetings page", () => {
  cy.get("#on-right-panel > div > div.ons-panel-body > div > div > div > div > a").should("exist")
  cy.get("#on-right-panel > div > div.ons-panel-body > div > div > div > div > a").click({ force: true })
  cy.wait(500)
  cy.url().should('eq', Cypress.config().baseUrl+'/route-manager#')
})

Then("I click on Routes Widget", () => {
  cy.get("#on-right-panel > div > div.ons-panel-body > div > section > div > div.ons-big-widget-container.on-routes-big-widget.mt-3 > div > div.col-md-8.ons-right-section > div.ons-chart > a")
  .should("exist")
  cy.wait(500)
  cy.get("#on-right-panel > div > div.ons-panel-body > div > section > div > div.ons-big-widget-container.on-routes-big-widget.mt-3 > div > div.col-md-8.ons-right-section > div.ons-chart > a")
  .click({ force: true })
  cy.wait(1000)
})

Then("All the routes are present", () => {
  cy.get('#on-right-panel > div > div.ons-panel-body > section > div:nth-child(3) > div > div > ul')
    .find('li').its('length').should('be.gt', 0)
})

Then("I click on a WECA route", () => {
  cy.get('#on-right-panel > div > div.ons-panel-body > section > div:nth-child(3) > div > div > ul > li:nth-child(2) > a').should("exist")
  cy.get("#on-right-panel > div > div.ons-panel-body > section > div:nth-child(3) > div > div > ul > li:nth-child(2) > a").click({ force: true })
  cy.wait(500)
})

Then("I can see route info in the callout", () => {
  cy.get("#map-canvas > div > div > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(4) > div.infoBox > div > div > div > header > h1").should("not.be.empty")

  var t6
  cy.get("#map-canvas > div > div > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(4) > div.infoBox > div > div > div > header > h1").should(($t) => {
    t6 = $t.text();
    expect(t6).contains("Bus Route");
  })

  cy.get("#map-canvas > div > div > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(4) > div.infoBox > div > div > div > div > div > div > div > table.rwCallout_table.rwCallout_logoTable > tbody > tr > td.rwCallout_label").should(($t) => {
    t6 = $t.text();
    expect(t6).contains("West of England Combined Authority");
  })

  cy.get("#map-canvas > div > div > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(4) > div.infoBox > div > div > div > div > div > div > div > h2:nth-child(2)").should(($t) => {
    t6 = $t.text();
    expect(t6).contains("Route details");
  })

  cy.get("#map-canvas > div > div > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(4) > div.infoBox > div > div > div > div > div > div > div > h2:nth-child(4)").should(($t) => {
    t6 = $t.text();
    expect(t6).contains("Information");
  })

  cy.get("#map-canvas > div > div > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(4) > div.infoBox > div > div > div > header > p:nth-child(4)").should("not.be.empty")
  cy.get("#map-canvas > div > div > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(4) > div.infoBox > div > div > div > header > p:nth-child(5)").should("not.be.empty")

  cy.get("#map-canvas > div > div > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(4) > div.infoBox > div > div > div > div > div > div > div > table:nth-child(3) > tbody > tr:nth-child(1) > td.rwCallout_info").should("not.be.empty")
  cy.get("#map-canvas > div > div > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(4) > div.infoBox > div > div > div > div > div > div > div > table:nth-child(3) > tbody > tr:nth-child(2) > td.rwCallout_info").should("not.be.empty")
  cy.get("#map-canvas > div > div > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(4) > div.infoBox > div > div > div > div > div > div > div > table:nth-child(3) > tbody > tr:nth-child(3) > td.rwCallout_info").should("not.be.empty")
  cy.get("#map-canvas > div > div > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(4) > div.infoBox > div > div > div > div > div > div > div > table:nth-child(5) > tbody > tr:nth-child(1) > td.rwCallout_info").should("not.be.empty")
  cy.get("#map-canvas > div > div > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(4) > div.infoBox > div > div > div > div > div > div > div > table:nth-child(5) > tbody > tr:nth-child(2) > td.rwCallout_info").should("not.be.empty")
  cy.get("#map-canvas > div > div > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(4) > div.infoBox > div > div > div > div > div > div > div > table:nth-child(5) > tbody > tr:nth-child(3) > td.rwCallout_info").should("not.be.empty")
  cy.get("#map-canvas > div > div > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(4) > div.infoBox > div > div > div > div > div > div > div > table:nth-child(5) > tbody > tr:nth-child(4) > td.rwCallout_info").should("not.be.empty")
  cy.get("#map-canvas > div > div > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(4) > div.infoBox > div > div > div > div > div > div > div > table:nth-child(5) > tbody > tr:nth-child(5) > td.rwCallout_info").should("not.be.empty")
  cy.get("#map-canvas > div > div > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(4) > div.infoBox > div > div > div > div > div > div > div > table:nth-child(5) > tbody > tr:nth-child(6) > td.rwCallout_info > a").should("not.be.empty")
  cy.get("#map-canvas > div > div > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(4) > div.infoBox > div > div > div > div > div > div > div > table:nth-child(6) > tbody > tr > td.rwCallout_info").should("not.be.empty")

  cy.get("#map-canvas > div > div > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(4) > div.infoBox > div > div > div > header > span.ons-rwCallout_button.closeCallout.ons-mdi.ons-mdi-close")
  .click({ force: true })
  cy.wait(500)
})

Then("i see the bus info in the callout", () => {
  cy.get("#map-canvas > div > div > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(4) > div.infoBox > div > div > div > header > h1").should("exist")
  cy.get("#map-canvas > div > div > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(4) > div.infoBox > div > div > div > header > h1").should('not.be.empty')

  cy.get("#map-canvas > div > div > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(4) > div.infoBox > div > div > div > header > p").should("exist")
  cy.get("#map-canvas > div > div > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(4) > div.infoBox > div > div > div > header > p").should('not.be.empty')

  cy.get("#map-canvas > div > div > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(4) > div.infoBox > div > div > div > div > div > div > div.rwCallout_extra_content > a").should("exist")
  var t6
  cy.get("#map-canvas > div > div > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(4) > div.infoBox > div > div > div > div > div > div > div.rwCallout_extra_content > a").should(($t) => {
    t6 = $t.text();
    expect(t6).equal("Open in Route Management");
  })

  cy.get("#map-canvas > div > div > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(4) > div.infoBox > div > div > div > div > div > div > div.rwCallout_section_info > h2:nth-child(4)").should("exist")
  var t6
  cy.get("#map-canvas > div > div > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(4) > div.infoBox > div > div > div > div > div > div > div.rwCallout_section_info > h2:nth-child(4)").should(($t) => {
    t6 = $t.text();
    expect(t6).equal("Information");
  })

  cy.get("#map-canvas > div > div > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(4) > div.infoBox > div > div > div > div > div > div > div.rwCallout_section_info > table:nth-child(3) > tbody > tr:nth-child(1) > td.rwCallout_info")
  .should("not.be.empty")

  cy.get("#map-canvas > div > div > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(4) > div.infoBox > div > div > div > div > div > div > div.rwCallout_section_info > table:nth-child(3) > tbody > tr:nth-child(2) > td.rwCallout_info")
  .should('not.be.empty')

  cy.get("#map-canvas > div > div > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(4) > div.infoBox > div > div > div > div > div > div > div.rwCallout_section_info > table:nth-child(5) > tbody > tr:nth-child(1) > td.rwCallout_info")
  .should('not.be.empty')

  cy.get("#map-canvas > div > div > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(4) > div.infoBox > div > div > div > div > div > div > div.rwCallout_section_info > table:nth-child(5) > tbody > tr:nth-child(2) > td.rwCallout_info")
  .should('not.be.empty')

  cy.get("#map-canvas > div > div > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(4) > div.infoBox > div > div > div > div > div > div > div.rwCallout_section_info > table:nth-child(6) > tbody > tr > td.rwCallout_info > time")
  .should('not.be.empty')

  cy.get("#map-canvas > div > div > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(4) > div.infoBox > div > div > div > div > div > div > div.rwCallout_section_info > table:nth-child(6) > tbody > tr > td.rwCallout_label").should(($t) => {
    t6 = $t.text();
    expect(t6).equal("Last updated on one.network:");
  })

  cy.get("#map-canvas > div > div > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(4) > div.infoBox > div > div > div > div > div > div > div.rwCallout_section_info > table:nth-child(3) > tbody > tr:nth-child(1) > td.rwCallout_label").should(($t) => {
    t6 = $t.text();
    expect(t6).equal("Name:");
  })

  cy.get("#map-canvas > div > div > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(4) > div.infoBox > div > div > div > div > div > div > div.rwCallout_section_info > table:nth-child(3) > tbody > tr:nth-child(2) > td.rwCallout_label").should(($t) => {
    t6 = $t.text();
    expect(t6).equal("Status:");
  })

  cy.get("#map-canvas > div > div > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(4) > div.infoBox > div > div > div > div > div > div > div.rwCallout_section_info > table:nth-child(5) > tbody > tr:nth-child(1) > td.rwCallout_label").should(($t) => {
    t6 = $t.text();
    expect(t6).equal("ATCO code:");
  })

  cy.get("#map-canvas > div > div > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(4) > div.infoBox > div > div > div > div > div > div > div.rwCallout_section_info > table:nth-child(5) > tbody > tr:nth-child(2) > td.rwCallout_label > span").should(($t) => {
    t6 = $t.text();
    expect(t6).contain("NaPTAN code:");
  })

})
Then("i mouseover NaPTAN code info", () => {
  cy.get("#map-canvas > div > div > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(4) > div.infoBox > div > div > div > div > div > div > div.rwCallout_section_info > table:nth-child(5) > tbody > tr:nth-child(2) > td.rwCallout_label > span").trigger('mouseover',{ force: true})
  cy.get("#map-canvas > div > div > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(4) > div.infoBox > div > div > div > div > div > div > div.rwCallout_section_info > table:nth-child(5) > tbody > tr:nth-child(2) > td.rwCallout_label > span")
  .invoke('attr', 'title').should('eq',"Also known as 'Bus Stop ID' or 'SMS code'")
})


Then("I mouse over question mark icon", () => {
  cy.get("#search-help").trigger('mouseover',{ force: true})
})

Then("It shows text {string}", (message) => {
  cy.get("#search-help")
  .invoke('attr', 'title').should('eq',message)
})

Then("i Click on question mark icon", () => {
  cy.get("#search-help").click({ force: true})
})

Then("A new window pop up", () => {
  cy.wait(500)
  cy.get("#modal-window > div > div").should("exist")
  var t6
  cy.get("#modal-window > div > div > div.modal-header > h5").should(($t) => {
    t6 = $t.text();
    expect(t6).contain("Help");
  })
  cy.get("#on-modal-discard-btn").should("exist")

})

Then("I close the modal", () => {
  cy.get("#on-modal-close").should("exist")
  cy.get("#on-modal-close").click({ force: true})
  cy.wait(1000)
})

Then("I click on Dismiss", () => {
  cy.get("#on-modal-discard-btn").should("exist")
  cy.get("#on-modal-discard-btn").click({ force: true})
  cy.wait(1000)
})

Then("I search for a bus stop {string}", (name) => {
  cy.get("#rm-search").should("exist")
  cy.wait(500)
  cy.get("#rm-search").clear({ force: true })
  cy.get("#rm-search").click({ force: true })
  cy.get("#rm-search").type(name,{ force: true } )
  cy.wait(1000)
})

Then("I clear the search field", () => {
  cy.get("#rm-search").clear({ force: true })
  cy.wait(100)
})

Then("I see tha Bus data", () => {
  cy.get("#header-card > div > div.col-11.mb-1 > div:nth-child(1) > div > a").should("exist")
  cy.get("#header-card > div > div.col-11.mb-1 > div:nth-child(1) > div > a").should("not.be.empty")

  cy.get("#header-card > div > div.col-11.mb-1 > div:nth-child(2) > div > p:nth-child(1)").should("exist")
  cy.get("#header-card > div > div.col-11.mb-1 > div:nth-child(2) > div > p:nth-child(1)").should("not.be.empty")

  cy.get("#header-card > div > div.col-11.mb-1 > div:nth-child(2) > div > p:nth-child(2)").should("exist")
  cy.get("#header-card > div > div.col-11.mb-1 > div:nth-child(2) > div > p:nth-child(2)").should("not.be.empty")

  cy.get("#bus-stop-discard").should("exist")
  cy.get("#bus-stop-discard").click({ force: true })
  cy.wait(500)
})

Then("No results were found", () => {
  cy.get("#on-right-panel > div > div.ons-panel-body > section > div:nth-child(3) > div > div > div.row.no-gutters.alert.alert-info.ons-empty-list").should("exist")
  var t6
  cy.get("#on-right-panel > div > div.ons-panel-body > section > div:nth-child(3) > div > div > div.row.no-gutters.alert.alert-info.ons-empty-list").should(($t) => {
    t6 = $t.text();
    expect(t6).contain("No Bus Stops found.");
  })

})

Then("I click on Bus Stop", () => {
  cy.get("#brm-item-list > li > a").should("exist")
  cy.get("#brm-item-list > li > a").click({ force: true })
  cy.wait(500)
})

Then("I see bus stop results", () => {
  cy.get('#brm-item-list')
  .find('li').its('length').should('be.gt', 0)
})

Then ("I go to the Route Manager Page",() => {
  cy.get("#on-modules-menu > div > div > a").click({force: true})
  cy.wait(500)
  cy.get('[href="/route-manager"]').should('be.visible')
  cy.get('[href="/route-manager"]').click({force: true})
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

When("I set the map's zoom level to {int}", (zoomLevel) => {
  doAndWaitForMapEvent("zoom_changed", (map) => map.setZoom(zoomLevel))
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

Then ("I search for bus route {string}",(message) => {
  cy.get("#rm-search").should("exist")
  cy.wait(500)
  cy.get("#rm-search").clear({ force: true })
  cy.get("#rm-search").click({ force: true })
  cy.get("#rm-search").type(message,{ force: true } )
  cy.wait(1000)
})


Then ("I click on the bus route",() => {
  cy.wait(1000)
  cy.get("#on-right-panel > div > div.ons-panel-body > section > div:nth-child(3) > div > div > ul > li > a", { timeout: 10000 }).should("exist")
  cy.get("#on-right-panel > div > div.ons-panel-body > section > div:nth-child(3) > div > div > ul > li > a").eq(0).click({ force: true })
  cy.wait(500)
})

Then ("I delete the route",() => {
  cy.get("#save-button-dropdown", { timeout: 10000 }).should("exist")
  cy.get("#save-button-dropdown").click({ force: true })
  cy.wait(500)
  cy.get("#on-rm-route-delete", { timeout: 10000 }).should("exist")
  cy.get("#on-rm-route-delete").click({ force: true })
  cy.wait(500)
  cy.on('window:confirm', (t) => {
    //expect(t).to.contains("You are about to delete this "+ message +" route. Are you sure?");
  })
  cy.wait(1000)
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

Then ("I Click on Back button",() => {
  cy.get("#brm-close").should("exist")
  cy.wait(500)
  cy.get("#brm-close").click(({force: true}))
  cy.wait(500)
  cy.on('window:confirm', (t) => {
    //expect(t).to.contains("You are about to delete this "+ message +" route. Are you sure?");
  })
  cy.wait(1000)
})

Then ("I click on Click Remove route button",() => {
  cy.get("#clear-location").should("exist")
  cy.wait(500)
  cy.get("#clear-location").click(({force: true}))
  cy.wait(500)
})

Then ("I mouseover Stops and Diversions and Documents and Alerts tabs",() => {
  cy.get("#items-tab").should("exist")
  cy.get("#items-tab").trigger('mouseover',{ force: true})
  cy.get("#items-tab").invoke('attr', 'title').should('eq',"Stops / Diversions can only be added after the route is actually saved.")
  cy.wait(500)
  cy.get("#documents-tab").should("exist")
  cy.get("#documents-tab").trigger('mouseover',{ force: true})
  cy.get("#documents-tab").invoke('attr', 'title').should('eq',"Documents / Alerts can only be added after the route is actually saved.")
  cy.wait(500)

})

Then ("I Untick This route is permanent",() => {
  cy.get("#permanentRoute").should("exist")
  cy.wait(500)
  cy.get("#permanentRoute").click(({force: true}))
  cy.wait(500)
})

Then ("I Manually define dates and time",() => {
  cy.get(".pr-3 .input-group .datetimepicker-input").eq(0).should("exist")
  cy.get(".pr-3 .input-group .datetimepicker-input").eq(0).clear({ force: true })
  cy.get(".pr-3 .input-group .datetimepicker-input").eq(0).type("25/06/2023",{ force: true })
  cy.wait(500)
  cy.get(".pr-3 .input-group .datetimepicker-input").eq(1).clear({ force: true })
  cy.get(".pr-3 .input-group .datetimepicker-input").eq(1).type("26/06/2023",{ force: true })
  cy.wait(500)
})

Then ("I click on Stops and Diversion button",() => {
  cy.get("#items-tab").should("exist")
  cy.get("#items-tab").click(({force: true}))
  cy.wait(500)
})

Then ("I click on Diversion button",() => {
  cy.get("#brm-add-diversion").should("exist")
  cy.get("#brm-add-diversion").click(({force: true}))
  cy.wait(500)
})

Then ("I Enter the diversion name {string}",(name) => {
  cy.get("#brm-item-name").should("exist")
  cy.get("#brm-item-name").clear({ force: true })
  cy.get("#brm-item-name").type(name,{ force: true })
  cy.wait(500)

})

Then ("I insert the diversion description {string}",(name) => {
  cy.get("#brm-item-description").should("exist")
  cy.get("#brm-item-description").clear({ force: true })
  cy.get("#brm-item-description").type(name,{ force: true })
  cy.wait(500)

})

Then ("i click on Plot Diversion",() => {
  cy.get("#on-right-panel > div > div.ons-panel-body > div:nth-child(3) > section:nth-child(5) > div > div:nth-child(2) > div:nth-child(1) > div > button").click(({force: true}))
  cy.wait(500)
  cy.get("#brm-item-draw-line").click(({force: true}))
  cy.wait(500)
})

Then ("I draw the diversion on the map",() => {
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
    doAndWaitForMapEvent("zoom_changed", (map) => map.setZoom(21))
    cy.wait(2000)
        //Click on the Map
    cy.window().then((win) => {
      getGoogleMap().then((map) => {
      map.panBy(-100,100)
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


Then ("I save the Diversion",() => {
  cy.get("#on-right-panel > div > div.ons-panel-body > div:nth-child(3) > section:nth-child(2) > div > div > div:nth-child(2) > button").should("exist")
  cy.wait(500)
  cy.get("#on-right-panel > div > div.ons-panel-body > div:nth-child(3) > section:nth-child(2) > div > div > div:nth-child(2) > button").click(({force: true}))
  cy.wait(500)
})

Then ("I choose Apply to all",() => {
  cy.get("#modal-window > div > div > div.modal-body.table-responsive > table > thead > tr > th > input").should("exist")
  cy.wait(500)
  cy.get("#modal-window > div > div > div.modal-body.table-responsive > table > thead > tr > th > input").click(({force: true}))
  cy.wait(500)
  cy.get("#on-modal-confirm-btn").click({force: true})
  cy.wait(1000)
})

Then ("I Reopen the diversion",() => {
  cy.get("#brm-item-list > a", { timeout: 10000 })
  cy.wait(1000)
  cy.get("#brm-item-list > a > div > div.col > p").click(({force: true}))
  cy.wait(500)
})

Then ("I Untick Apply all",() => {
  cy.get("#modal-window > div > div > div.modal-body.table-responsive > table > thead > tr > th > input").should("exist")
  cy.wait(500)
  cy.get("#modal-window > div > div > div.modal-body.table-responsive > table > thead > tr > th > input").click(({force: true}))
  cy.wait(500)
  cy.get("#on-modal-confirm-btn").click({force: true})
  cy.wait(1000)
})

Then ("I Tick Strategic",() => {
  cy.get("#modal-window > div > div > div.modal-body.table-responsive > table > tbody > tr:nth-child(2) > td.text-center.align-middle > input").should("exist")
  cy.wait(500)
  cy.get("#modal-window > div > div > div.modal-body.table-responsive > table > tbody > tr:nth-child(2) > td.text-center.align-middle > input").click(({force: true}))
  cy.wait(500)
})

Then ("I Tick Lary",() => {
  cy.get("#modal-window > div > div > div.modal-body.table-responsive > table > tbody > tr:nth-child(3) > td.text-center.align-middle > input").should("exist")
  cy.wait(500)
  cy.get("#modal-window > div > div > div.modal-body.table-responsive > table > tbody > tr:nth-child(3) > td.text-center.align-middle > input").click(({force: true}))
  cy.wait(500)
})

Then ("I untick Strategic",() => {
  cy.get("#modal-window > div > div > div.modal-body.table-responsive > table > tbody > tr:nth-child(2) > td.text-center.align-middle > input").should("exist")
  cy.wait(500)
  cy.get("#modal-window > div > div > div.modal-body.table-responsive > table > tbody > tr:nth-child(2) > td.text-center.align-middle > input").click(({force: true}))
  cy.wait(500)
})

Then ("I Dismiss",() => {
  cy.get("#on-modal-discard-btn").click({force: true})
  cy.wait(1000)
})

Then ("i click on Discard Button",() => {
  cy.get("#item-discard").should("exist")
  cy.get("#item-discard").click({force: true})
  cy.wait(500)
})

Then ("I can see only Diversion button",() => {
  cy.get("#brm-add-stop").should("not.exist")
  cy.get("#brm-add-diversion").should("exist")
  cy.wait(500)
})

Then ("I can see only both button",() => {
  cy.get("#brm-add-stop").should("exist")
  cy.get("#brm-add-diversion").should("exist")
  cy.wait(500)
})

Then ("I click on Add Bus Stops",() => {
  cy.get("#brm-add-stop").should("exist")
  cy.get("#brm-add-stop").click({force: true})
  cy.wait(500)
})

Then ("I insert a Bus Stop name {string}",(name) => {
  cy.get("#brm-item-name").should("exist")
  cy.get("#brm-item-name").clear({ force: true })
  cy.get("#brm-item-name").type(name,{ force: true })
  cy.wait(500)
})

Then ("I insert a valid dates {string} {string}",(startDate , endDate) => {
  cy.get(".pr-3 .input-group .datetimepicker-input").eq(0).should("exist")
  cy.get(".pr-3 .input-group .datetimepicker-input").eq(0).clear({ force: true })
  cy.get(".pr-3 .input-group .datetimepicker-input").eq(0).type(startDate,{ force: true })
  cy.wait(500)
  cy.get(".pr-3 .input-group .datetimepicker-input").eq(1).clear({ force: true })
  cy.get(".pr-3 .input-group .datetimepicker-input").eq(1).type(endDate,{ force: true })
  cy.wait(500)
})

Then ("I insert a valid enforcement pattern",() => {
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
  cy.wait(1000)
})

Then ("I click on bus Plot",() => {
  cy.get("#brm-item-draw-point").should("exist")
  cy.get("#brm-item-draw-point").click({force: true})
  cy.wait(500)
})

Then ("I insert a bus stop on the map",() => {
  cy.wait(2000)
      //Click on the Map
  cy.window().then((win) => {
    getGoogleMap().then((map) => {
    map.panBy(-100,100)
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

Then ("i insert a bus stop description {string}",(description) => {

  cy.get("#brm-item-description").should("exist")
  cy.get("#brm-item-description").clear({ force: true })
  cy.get("#brm-item-description").type(description,{ force: true })
  cy.wait(500)
})

Then ("I click on Remove Location",() => {
  cy.get("#brm-item-clear-geom").should("exist")
  cy.get("#brm-item-clear-geom").click({force: true})
  cy.wait(500)
})

Then ("i click on Find Location",() => {
  cy.get("#brm-item-find-geom").should("exist")
  cy.get("#brm-item-find-geom").click({force: true})
  cy.wait(500)
})

Then ("I save the bus Stop",() => {
  cy.get("#on-right-panel > div > div.ons-panel-body > div > section:nth-child(2) > div > div > div:nth-child(2) > button").should("exist")
  cy.get("#on-right-panel > div > div.ons-panel-body > div > section:nth-child(2) > div > div > div:nth-child(2) > button").click({force: true})
  cy.wait(4000)
})

Then ("I click on bus Stop callout",() => {
  cy.wait(2000)
      //Click on the Map
  cy.window().then((win) => {
    getGoogleMap().then((map) => {
    map.panBy(-200,200)
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

Then ("I click on the Bus ellipsis",() => {
  cy.get("#brm-item-list > a:nth-child(1) > div > div:nth-child(3) > button").should("exist")
  cy.get("#brm-item-list > a:nth-child(1) > div > div:nth-child(3) > button").click({force: true})
  cy.wait(500)
})


Then ("I click on Copy",() => {
  cy.get("#brm-item-list > a:nth-child(1) > div > div.col-auto.show > div > a.dropdown-item.copy-item").should("exist")
  cy.get("#brm-item-list > a:nth-child(1) > div > div.col-auto.show > div > a.dropdown-item.copy-item").click({force: true})
  cy.wait(1000)
})

Then ("I set the status to Closed",() => {
  cy.get("#on-right-panel > div > div.ons-panel-body > div > section:nth-child(3) > div > div").should("exist")
  cy.get("#on-right-panel > div > div.ons-panel-body > div > section:nth-child(3) > div > div > select").select('CLOSED',{force: true})
  cy.wait(500)
})

Then ("I search bus stop {string}",(name) => {
  cy.get("#rm-search").should("exist")
  cy.get("#rm-search").clear({ force: true })
  cy.get("#rm-search").type(name,{ force: true })
  cy.wait(3000)
  cy.get('#brm-item-list')
  .find('li').its('length').should('be.gt', 0)
})

Then ("I click on bus stop",() => {
  cy.get("#brm-item-list > li > a > div > div.col > p").should("exist")
  cy.get("#brm-item-list > li > a > div > div.col > p").eq(0).click({force: true})
  cy.wait(3000)
})

Then ("I click on Route tabs",() => {
  cy.get("#brm-stop-routes > div > div > li > a").should("exist")
  cy.get("#brm-stop-routes > div > div > li > a > div.row.no-gutters.align-items-center > div.col-7.p-0 > div.ons-rm-route-label").click({force: true})
  cy.wait(1000)
  cy.get("#header-card > div > div.col-11 > div:nth-child(2) > div > a").should("exist")
  cy.get("#header-card > div > div.col-11 > div:nth-child(2) > div > a").click({force: true})
  cy.wait(1000)
})

Then ("I click on Delete Bus stop",() => {
  cy.get("#brm-item-list > a:nth-child(1) > div > div:nth-child(3) > button").should("exist")
  cy.get("#brm-item-list > a:nth-child(1) > div > div:nth-child(3) > button").click({force: true})
  cy.wait(500)
  cy.get("#brm-item-list > a:nth-child(1) > div > div.col-auto.show > div > a.dropdown-item.delete-item").should("exist")
  cy.get("#brm-item-list > a:nth-child(1) > div > div.col-auto.show > div > a.dropdown-item.delete-item").click({force: true})
  cy.wait(1000)
})

Then ("I Cancel deletion",() => {
  cy.on('window:confirm', (t) => {
    return false
  })
})

Then ("I Confirm Deletion",() => {
  cy.on('window:confirm', (t) => {
  })
})

Then ("I click on Copy Diversion",() => {
  cy.get("#brm-item-list > a > div > div.col-auto.show > div > a.dropdown-item.copy-item").should("exist")
  cy.get("#brm-item-list > a > div > div.col-auto.show > div > a.dropdown-item.copy-item").click({force: true})
  cy.wait(1000)
})

Then ("I set the Diversion Status to Closed",() => {
  cy.get("#on-right-panel > div > div.ons-panel-body > div:nth-child(3) > section:nth-child(3) > div > div > select").should("exist")
  cy.get("#on-right-panel > div > div.ons-panel-body > div:nth-child(3) > section:nth-child(3) > div > div > select").select('C',{force: true} )
  cy.wait(500)
})

Then ("I insert a diversion description {string}",(name) => {
  cy.get("#brm-item-description").clear({ force: true })
  cy.get("#brm-item-description").click({ force: true })
  cy.get("#brm-item-description").type(name,{ force: true } )
  cy.wait(500)
})

Then ("I click on diversion ellipsis",() => {
  cy.get("#brm-item-list > a > div > div:nth-child(3) > button").should("exist")
  cy.get("#brm-item-list > a > div > div:nth-child(3) > button").should("exist").click({force: true})
  cy.wait(1000)
})

Then ("I select the Copy Diversion",() => {
  cy.get("#brm-item-list > a:nth-child(2) > div > div:nth-child(3) > button").should("exist")
  cy.get("#brm-item-list > a:nth-child(2) > div > div:nth-child(3) > button").should("exist").click({force: true})
  cy.wait(1000)
})

Then("I click in Go back", () => {
  cy.get("#brm-close").should("exist")
  cy.get("#brm-close").click({ force: true})
  cy.wait(2000)
})

Then("I choose Appply All", () => {
  cy.get("#modal-window > div > div > div.modal-body.table-responsive > table > thead > tr > th > input").should("exist")
  cy.get("#modal-window > div > div > div.modal-body.table-responsive > table > thead > tr > th > input").click({ force: true})
  cy.wait(500)
  cy.get("#on-modal-confirm-btn").should("exist")
  cy.get("#on-modal-confirm-btn").click({ force: true})
  cy.wait(1000)
})

Then("I choose option Diversion", () => {
  cy.get("#ons-rm-closure-candidate-list > li > div > input").should("exist")
  cy.get("#ons-rm-closure-candidate-list > li > div > input").click({ force: true})
  cy.wait(500)
})

Then("I save the Copy Diversion", () => {
  cy.get("#on-right-panel > div > div.ons-panel-body > div > section:nth-child(2) > div > div > div:nth-child(2) > button").should("exist")
  cy.wait(500)
  cy.get("#on-right-panel > div > div.ons-panel-body > div > section:nth-child(2) > div > div > div:nth-child(2) > button").click(({force: true}))
  cy.wait(1500)
  cy.get("#on-modal-confirm-btn").should("exist")
  cy.get("#on-modal-confirm-btn").click(({force: true}))
  cy.wait(2000)
})

Then ("I click on Delete diversion",() => {
  cy.wait(500)
  cy.get("#brm-item-list > a:nth-child(2) > div > div.col-auto.show > div > a.dropdown-item.delete-item").should("exist")
  cy.get("#brm-item-list > a:nth-child(2) > div > div.col-auto.show > div > a.dropdown-item.delete-item").click({force: true})
  cy.wait(1000)
})

Then ("I click on copy diversion ellipsis",() => {
  cy.get("#brm-item-list > a > div > div:nth-child(3) > button").should("exist")
  cy.get("#brm-item-list > a > div > div:nth-child(3) > button").should("exist").eq(1).click({force: true})
  cy.wait(1000)
})

Then ("I Cancel diversion deletion",() => {
  cy.wait(1000)
  cy.get("#on-modal-discard-btn").should("exist")
  cy.wait(500)
  cy.get("#on-modal-discard-btn").click({force: true})
  cy.wait(1000)
})

Then ("I Confirm diversion Deletion",() => {
  cy.wait(1000)
  cy.get("#on-modal-confirm-btn").should("exist")
  cy.wait(500)
  cy.get("#on-modal-confirm-btn").click({force: true})
  cy.wait(1000)
})
