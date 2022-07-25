/* eslint-disable @typescript-eslint/no-empty-function */
import { When, Then } from "cypress-cucumber-preprocessor/steps"

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

When("I click on user menu", () => {
  cy.get("#userMenuButton > .ons-mdi").click({ force: true })
})

When("I click on user management", () => {
  cy.get("li > div > a:nth-child(5)").click({ force: true })
})

When("I search for {string}", (email) => {
  cy.get("#on-app-container > div > div > div > section:nth-child(2) > div > div > div.col-7.mt-sm-0.col-sm-4 > input").clear({ force: true })
  cy.get("#on-app-container > div > div > div > section:nth-child(2) > div > div > div.col-7.mt-sm-0.col-sm-4 > input").click({ force: true })
  cy.get("#on-app-container > div > div > div > section:nth-child(2) > div > div > div.col-7.mt-sm-0.col-sm-4 > input").type(email,{ force: true } )
})


When("I click on selected user", () => {
  cy.wait(2000)
  cy.get(":nth-child(1) > #td-user-list-name").click({ force: true })
})

When("I click on selected user", () => {
  cy.get(":nth-child(1) > #td-user-list-name").click({ force: true })
})

When("I assign to him Traffic Management Admin.", () => {
  cy.get("#TRAFFIC_MANAGEMENT_ADMIN").click({ force: true })
})

When("I click on Save button", () => {
  cy.get("#panel-container > div > div > div > div > div:nth-child(10) > div.col-6.elg-ta-r > a").click({ force: true })
  cy.wait(3000)
})

When("I assign to him Traffic Management Publish.", () => {
  cy.get("#TRAFFIC_MANAGEMENT_PUBLISH").click({ force: true })
})

When("I assign to him Content Management Advanced.", () => {
  cy.get("#CONTENT_MANAGEMENT_ADVANCED").click({ force: true })
})

When("I Logout", () => {
  cy.get("#userMenuButton > .ons-mdi").click({ force: true })
  cy.get('[href="'+Cypress.config().baseUrl+'/logout"]').click({ force: true})
  cy.wait(3000)
})

When("The user has access to Content Management.", () => {
  cy.get("#on-modules-menu > div > div > a > i").click({ force: true })
  cy.get("#on-modules-menu > div > div > div > a:nth-child(4)").click({ force: true })
})

When("I assign to him Events KML Upload and Standard User.", () => {
  cy.get("#EVENTS_KML_UPLOAD").click({ force: true })
  cy.get("#EVENTS_STANDARD_USER").click({ force: true })
})

When("I unassign to him Events KML Upload.", () => {
  cy.get("#EVENTS_KML_UPLOAD").click({ force: true })
})

When("No KLM option visible", () => {
  cy.get("#on-right-panel > div > div.ons-panel-body > div > section:nth-child(2) > div > a:nth-child(1)").click({ force: true })
  cy.wait(1000)
  cy.get("#plot-type").click({ force: true })
  cy.wait(500)
  cy.get("#upload-kml").should("not.exist")
  cy.get("#plotPointPlanLocation").click({ force: true })
})

When("I Cick on the Filters", () => {
  cy.get("#filtersDropdown").click({ force: true })
  //Active
  cy.get("#on-app-container > div > div > div > section:nth-child(2) > div > div > div.col-5.col-sm-auto.um-list-filters > div > div > div:nth-child(1) > div > label").should("exist")
  cy.get("#on-app-container > div > div > div > section:nth-child(2) > div > div > div.col-5.col-sm-auto.um-list-filters > div > div > div:nth-child(1) > div > label").contains('Active');
  //Pending
  cy.get("#on-app-container > div > div > div > section:nth-child(2) > div > div > div.col-5.col-sm-auto.um-list-filters > div > div > div:nth-child(2) > div > label").should("exist")
  cy.get("#on-app-container > div > div > div > section:nth-child(2) > div > div > div.col-5.col-sm-auto.um-list-filters > div > div > div:nth-child(2) > div > label").contains('Pending');
  //Inactive
  cy.get("#on-app-container > div > div > div > section:nth-child(2) > div > div > div.col-5.col-sm-auto.um-list-filters > div > div > div:nth-child(3) > div > label").should("exist")
  cy.get("#on-app-container > div > div > div > section:nth-child(2) > div > div > div.col-5.col-sm-auto.um-list-filters > div > div > div:nth-child(3) > div > label").contains('Inactive');
  //Clash
  cy.get("#on-app-container > div > div > div > section:nth-child(2) > div > div > div.col-5.col-sm-auto.um-list-filters > div > div > div:nth-child(5) > div > label").should("exist")
  //cy.get("#on-app-container > div > div > div > section:nth-child(2) > div > div > div.col-5.col-sm-auto.um-list-filters > div > div > div:nth-child(5) > div > label").contains('Clash & Coordination');
  cy.get("#on-app-container > div > div > div > section:nth-child(2) > div > div > div.col-5.col-sm-auto.um-list-filters > div > div > div:nth-child(5) > div > label").invoke('text')
  //Clash Alert
  cy.get("#on-app-container > div > div > div > section:nth-child(2) > div > div > div.col-5.col-sm-auto.um-list-filters > div > div > div:nth-child(6) > div > label").should("exist")
  cy.get("#on-app-container > div > div > div > section:nth-child(2) > div > div > div.col-5.col-sm-auto.um-list-filters > div > div > div:nth-child(6) > div > label").contains('Clash Alert');
  //Clashes API
  cy.get("#on-app-container > div > div > div > section:nth-child(2) > div > div > div.col-5.col-sm-auto.um-list-filters > div > div > div:nth-child(7) > div > label").should("exist")
  cy.get("#on-app-container > div > div > div > section:nth-child(2) > div > div > div.col-5.col-sm-auto.um-list-filters > div > div > div:nth-child(7) > div > label").contains('Clashes API');
  //Content Manager
  cy.get("#on-app-container > div > div > div > section:nth-child(2) > div > div > div.col-5.col-sm-auto.um-list-filters > div > div > div:nth-child(8) > div > label").should("exist")
  cy.get("#on-app-container > div > div > div > section:nth-child(2) > div > div > div.col-5.col-sm-auto.um-list-filters > div > div > div:nth-child(8) > div > label").contains('Content Management');
  //Historical Map
  cy.get("#on-app-container > div > div > div > section:nth-child(2) > div > div > div.col-5.col-sm-auto.um-list-filters > div > div > div:nth-child(9) > div > label").should("exist")
  cy.get("#on-app-container > div > div > div > section:nth-child(2) > div > div > div.col-5.col-sm-auto.um-list-filters > div > div > div:nth-child(9) > div > label").contains('Historical Map');
  //Live Link Api
  cy.get("#on-app-container > div > div > div > section:nth-child(2) > div > div > div.col-5.col-sm-auto.um-list-filters > div > div > div:nth-child(10) > div > label").should("exist")
  cy.get("#on-app-container > div > div > div > section:nth-child(2) > div > div > div.col-5.col-sm-auto.um-list-filters > div > div > div:nth-child(10) > div > label").contains('Live Link API');
  //NOI API
  cy.get("#on-app-container > div > div > div > section:nth-child(2) > div > div > div.col-5.col-sm-auto.um-list-filters > div > div > div:nth-child(11) > div > label").should("exist")
  cy.get("#on-app-container > div > div > div > section:nth-child(2) > div > div > div.col-5.col-sm-auto.um-list-filters > div > div > div:nth-child(11) > div > label").contains('NOI App');
  //Reports
  cy.get("#on-app-container > div > div > div > section:nth-child(2) > div > div > div.col-5.col-sm-auto.um-list-filters > div > div > div:nth-child(12) > div > label").should("exist")
  cy.get("#on-app-container > div > div > div > section:nth-child(2) > div > div > div.col-5.col-sm-auto.um-list-filters > div > div > div:nth-child(12) > div > label").contains('Reports');
  //Route clash
  cy.get("#on-app-container > div > div > div > section:nth-child(2) > div > div > div.col-5.col-sm-auto.um-list-filters > div > div > div:nth-child(13) > div > label").should("exist")
  cy.get("#on-app-container > div > div > div > section:nth-child(2) > div > div > div.col-5.col-sm-auto.um-list-filters > div > div > div:nth-child(13) > div > label").contains('Route Clash');
  //Route Manager
  cy.get("#on-app-container > div > div > div > section:nth-child(2) > div > div > div.col-5.col-sm-auto.um-list-filters > div > div > div:nth-child(14) > div > label").should("exist")
  cy.get("#on-app-container > div > div > div > section:nth-child(2) > div > div > div.col-5.col-sm-auto.um-list-filters > div > div > div:nth-child(14) > div > label").contains('Route Manager');
  //Route Monitor
  cy.get("#on-app-container > div > div > div > section:nth-child(2) > div > div > div.col-5.col-sm-auto.um-list-filters > div > div > div:nth-child(15) > div > label").should("exist")
  cy.get("#on-app-container > div > div > div > section:nth-child(2) > div > div > div.col-5.col-sm-auto.um-list-filters > div > div > div:nth-child(15) > div > label").contains('Route Monitor');
  //Traffic Insights
  cy.get("#on-app-container > div > div > div > section:nth-child(2) > div > div > div.col-5.col-sm-auto.um-list-filters > div > div > div:nth-child(16) > div > label").should("exist")
  cy.get("#on-app-container > div > div > div > section:nth-child(2) > div > div > div.col-5.col-sm-auto.um-list-filters > div > div > div:nth-child(16) > div > label").contains('Traffic Insights');
  //Traffic Management
  cy.get("#on-app-container > div > div > div > section:nth-child(2) > div > div > div.col-5.col-sm-auto.um-list-filters > div > div > div:nth-child(17) > div > label").should("exist")
  cy.get("#on-app-container > div > div > div > section:nth-child(2) > div > div > div.col-5.col-sm-auto.um-list-filters > div > div > div:nth-child(17) > div > label").contains('Traffic Management');
  //Traffic Replay
  cy.get("#on-app-container > div > div > div > section:nth-child(2) > div > div > div.col-5.col-sm-auto.um-list-filters > div > div > div:nth-child(18) > div > label").should("exist")
  cy.get("#on-app-container > div > div > div > section:nth-child(2) > div > div > div.col-5.col-sm-auto.um-list-filters > div > div > div:nth-child(18) > div > label").contains('Traffic Replay');
  //Works Planning
  cy.get("#on-app-container > div > div > div > section:nth-child(2) > div > div > div.col-5.col-sm-auto.um-list-filters > div > div > div:nth-child(19) > div > label").should("exist")
  cy.get("#on-app-container > div > div > div > section:nth-child(2) > div > div > div.col-5.col-sm-auto.um-list-filters > div > div > div:nth-child(19) > div > label").contains('Works Planning');
  //None
  cy.get("#on-app-container > div > div > div > section:nth-child(2) > div > div > div.col-5.col-sm-auto.um-list-filters > div > div > div:nth-child(20) > div > label").should("exist")
  cy.get("#on-app-container > div > div > div > section:nth-child(2) > div > div > div.col-5.col-sm-auto.um-list-filters > div > div > div:nth-child(20) > div > label").contains('None');
})

When("I click on Actives", () => {
  cy.get("#on-app-container > div > div > div > section:nth-child(2) > div > div > div.col-5.col-sm-auto.um-list-filters > div > div > div:nth-child(1) > div > label").click({ force: true })
})

When("I click on Pending", () => {
  cy.get("#on-app-container > div > div > div > section:nth-child(2) > div > div > div.col-5.col-sm-auto.um-list-filters > div > div > div:nth-child(2) > div > label").click({ force: true })
  cy.wait(500)
})

When("I click on orderBy Name", () => {
  cy.get("#filtersDropdown").click({ force: true })
  cy.get("#th-user-list-name").click({ force: true })
  cy.wait(500)
})

When("I Un-tick Active and Pending.", () => {
  cy.get("#on-app-container > div > div > div > section:nth-child(2) > div > div > div.col-5.col-sm-auto.um-list-filters > div > div > div:nth-child(1) > div > label").click({ force: true })
  cy.get("#on-app-container > div > div > div > section:nth-child(2) > div > div > div.col-5.col-sm-auto.um-list-filters > div > div > div:nth-child(2) > div > label").click({ force: true })
})

When("I click on Inactives , Actives and Pending", () => {
  cy.get("#on-app-container > div > div > div > section:nth-child(2) > div > div > div.col-5.col-sm-auto.um-list-filters > div > div > div:nth-child(1) > div > label").click({ force: true })
  cy.get("#on-app-container > div > div > div > section:nth-child(2) > div > div > div.col-5.col-sm-auto.um-list-filters > div > div > div:nth-child(2) > div > label").click({ force: true })
  cy.get("#on-app-container > div > div > div > section:nth-child(2) > div > div > div.col-5.col-sm-auto.um-list-filters > div > div > div:nth-child(3) > div > label").click({ force: true })
})

When("i Un-tick all filters.", () => {
  cy.get("#on-app-container > div > div > div > section:nth-child(2) > div > div > div.col-5.col-sm-auto.um-list-filters > div > div > div:nth-child(1) > div > label").click({ force: true })
  cy.get("#on-app-container > div > div > div > section:nth-child(2) > div > div > div.col-5.col-sm-auto.um-list-filters > div > div > div:nth-child(2) > div > label").click({ force: true })
  cy.get("#on-app-container > div > div > div > section:nth-child(2) > div > div > div.col-5.col-sm-auto.um-list-filters > div > div > div:nth-child(3) > div > label").click({ force: true })
})

When("I click on Historical Map.", () => {
  cy.get("#on-app-container > div > div > div > section:nth-child(2) > div > div > div.col-5.col-sm-auto.um-list-filters > div > div > div:nth-child(9) > div > label").click({ force: true })
  cy.get("#filtersDropdown").click({ force: true })
  cy.wait(500)
})

When("I Un-tick Historical Map.", () => {
  cy.get("#filtersDropdown").click({ force: true })
  cy.get("#on-app-container > div > div > div > section:nth-child(2) > div > div > div.col-5.col-sm-auto.um-list-filters > div > div > div:nth-child(9) > div > label").click({ force: true })
})

When("I click on Traffic Management.", () => {
  cy.get("#on-app-container > div > div > div > section:nth-child(2) > div > div > div.col-5.col-sm-auto.um-list-filters > div > div > div:nth-child(17) > div > label").click({ force: true })
  cy.get("#filtersDropdown").click({ force: true })
  cy.wait(500)
})

When("I Un-tick Traffic Management.", () => {
  cy.get("#filtersDropdown").click({ force: true })
  cy.get("#on-app-container > div > div > div > section:nth-child(2) > div > div > div.col-5.col-sm-auto.um-list-filters > div > div > div:nth-child(17) > div > label").click({ force: true })
})

When("I click on None", () => {
  cy.get("#on-app-container > div > div > div > section:nth-child(2) > div > div > div.col-5.col-sm-auto.um-list-filters > div > div > div:nth-child(20) > div > label").click({ force: true })
  cy.get("#filtersDropdown").click({ force: true })
  cy.wait(500)
})

When("I Un-tick on None", () => {
  cy.get("#filtersDropdown").click({ force: true })
  cy.get("#on-app-container > div > div > div > section:nth-child(2) > div > div > div.col-5.col-sm-auto.um-list-filters > div > div > div:nth-child(20) > div > label").click({ force: true })
})

Then("user management page is displayed", () =>
{
	cy.url().should('eq', Cypress.config().baseUrl+'/user-management')
  cy.wait(2000)
})

When("I click on Add button", () =>
{
	cy.get(".btn-create-user").click({ force: true})
})

Then("the form opens up", () =>
{
  cy.get(".detail-panel-heading").should("have.text", "User information")
})

When("I fill in First Name", () =>
{
  cy.get("#firstName").click({ force: true })
  cy.get("#firstName").type("Dada")
})

When("I fill in Last Name", () =>
{
  cy.get("#lastName").click({ force: true })
  cy.get("#lastName").type("Lauren")
})

When("I fill in email", () =>
{
  cy.get('#email').click({ force: true })
  cy.get('#email').type("mymail@gmail.com")
})

When("I select user role", () =>
{
  cy.get("#USER_COMMUNITY_COMMUNITY_ADMIN").click()
  cy.get("#USER_COMMUNITY_COMMUNITY_ADMIN").should("be.checked")
})

When("I click on discard button", () =>
{
  cy.get("#btn-discard").click({ force: true })
})

Then("the form should be closed",() => {
  cy.get(".detail-panel-heading").should('not.exist');
})

Then("the form should be empty", () => {
  cy.get("#firstName").should("be.empty")
  cy.get("#lastName").should("be.empty")
  cy.get("#email").should("be.empty")
  cy.get("#USER_COMMUNITY_COMMUNITY_ADMIN").should("not.be.checked")
})

When("The information is displayed", () =>
{
  cy.get("#firstName").invoke('attr', 'value').should('not.be.null')
  cy.get("#lastName").invoke('attr', 'value').should('not.be.null')
  cy.get("#email").invoke('attr', 'value').should('not.be.null')
  cy.get("#account-status").invoke('attr', 'checked').should('exist')
  cy.get("#panel-container > div > div > div > div > div:nth-child(6) > div > label").invoke('attr', 'label').should('not.be.null')
  cy.get("#SYSADMIN_ACCESS_DEV").invoke('attr', 'checked').should('exist')

})


When("I create a new Plan", () => {
  //Click on create new plan
  cy.get("#on-right-panel > div > div.ons-panel-body > div > section:nth-child(2) > div > a:nth-child(1)").click({ force: true })
  cy.wait(1000)
  //Step1
      //Plan name
  cy.get("#plan-step1-name").clear({ force: true })
  cy.get("#plan-step1-name").click({ force: true })
  cy.get("#plan-step1-name").type('Bruno Test',{ force: true } )
      //Plot Location
  cy.get("#plot-type").click({ force: true })
  cy.wait(500)
  cy.get("#plotPointPlanLocation").click({ force: true })
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
      //Choose Category // cy.get('#my-state').select('MA')
  cy.get("#plan-step1-category").select('Incident')
      //Next button
  cy.get("#go-next").click({ force: true })
  //Step2
  cy.get("#go-next").click({ force: true })
      //Save Plan
  cy.get("#on-tm-plan-save-btn > i").click({ force: true })
  cy.wait(500)
  cy.get("#homeButton").click({ force: true })
})

When("A New KML Plan is created.", () => {
  //Click on create new plan
  cy.get("#on-right-panel > div > div.ons-panel-body > div > section:nth-child(2) > div > a:nth-child(1)").click({ force: true })
  cy.wait(1000)
  //Step1
      //Plan name
  cy.get("#plan-step1-name").clear({ force: true })
  cy.get("#plan-step1-name").click({ force: true })
  cy.get("#plan-step1-name").type('POI Bruno',{ force: true } )
      //Plot Location
  cy.get("#plot-type").click({ force: true })
  cy.wait(500)
  cy.get("#upload-kml").should("exist")
  cy.get("#plotPointPlanLocation").click({ force: true })
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
  cy.get("#go-next").click({ force: true })
  //Step2
  cy.get("#dropdown-title").click({ force: true })
  cy.get("#itemTypeList > a:nth-child(7)").click({ force: true })
  cy.wait(500)
  cy.get("#step2-poi-plot-type").click({ force: true })
  cy.wait(500)
  cy.get("#step2-poi-draw-point").click({ force: true })
    //click on the Map
    cy.window().then((windows) => {
      getGoogleMap().then((mapa) => {
      const centerPlot = mapa.getCenter()
        if (!centerPlot) {
          throw "Couldn't get the map's center"
        }

        const ponto = latLngToPoint(windows, mapa, centerPlot)
        cy.wrap(mapa.getDiv()).click(ponto.x, ponto.y)
      })
    })
  cy.get("#on-right-panel > div > div.ons-panel-body > div:nth-child(2) > section:nth-child(4) > button > span").click({ force: true })
  cy.wait(500)
  cy.get("#go-next").click({ force: true })
      //Save Plan
  cy.get("#on-tm-plan-save-btn > i").click({ force: true })
  cy.wait(500)
  cy.get("#homeButton").click({ force: true })
})
