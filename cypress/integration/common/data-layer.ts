import { When, Then } from "cypress-cucumber-preprocessor/steps"
import { exists } from "fs"

const icons = new Map([
  ["health covid", "ic-nrw-health-covid"],
  ["covid protected", "ic-nrw-covid-protected"],
  ["covid road change", "ic-nrw-covid-road-change"],
  ["covid school street", "ic-nrw-covid-school-street"],
  ["covid testing station", "ic-nrw-covid-testing-station"],
  ["vaccination centre", "ic-nrw-vaccination-centre"],
  ["live incident", "ic-head-warning"],
  ["incident", "ic-nrw-li-incident"],
  ["accident", "ic-nrw-li-accident"],
  ["congestion", "ic-nrw-li-congestion"],
  ["health emergency", "ic-nrw-health-emergency"],
  ["road closure", "ic-nrw-li-roadclosure"],
  ["lane closure", "ic-nrw-li-laneclosure"],
  ["closed hgv", "ic-nrw-li-closedhgv"],
  ["infrastructure", "ic-nrw-li-infrastructure"],
  ["road closure and diversion", "ic-head-closures"],
  ["road closure", "ic-nrw-rcd-roadclosure"],
  ["diversion route", "ic-nrw-rcd-diversionroute"],
  ["hgv diversion route", "ic-nrw-rcd-hgvdiversionroute"],
  ["temporary oneway", "ic-nrw-rcd-temporaryoneway"],
  ["bridge closure", "ic-nrw-tr-bridgeclosure"],
  ["traffic restrictions", "ic-head-restrictions"],
  ["contraflow", "ic-nrw-rcd-contraflow"],
  ["lane closure", "ic-nrw-rcd-laneclosure"],
  ["footway closure", "ic-nrw-rcd-footwayclosure"],
  ["temporary speed limit", "ic-nrw-tr-temporaryspeedlimit"],
  ["weight restriction", "ic-nrw-tr-weightrestriction"],
  ["weight restriction suspension", "ic-nrw-tr-weightrestrictionsuspension"],
  ["clear way", "ic-nrw-tr-clearway"],
  ["tow away zone", "ic-nrw-tr-towawayzone"],
  ["temporary parking restriction", "ic-nrw-tr-temporaryparkingrestriction"],
  ["parking restriction suspension", "ic-nrw-tr-parkingrestrictionsuspension"],
  ["bus way suspension", "ic-nrw-tr-buswaysuspension"],
  ["gritting in progress", "ic-nrw-tr-gritting"],
  ["advisory preferred access route", "ic-nrw-tr-advisoryaccessroute"],
  ["road closure crossing", "ic-nrw-tr-closurecrossing"],
  ["road ahead closed", "ic-nrw-tr-roadaheadclosed"],
  ["no vehicle access", "ic-nrw-tr-novehicleaccess"],
  ["no right turn", "ic-nrw-tr-norightturn"],
  ["no left turn", "ic-nrw-tr-noleftturn"],
  ["no u-turn", "ic-nrw-tr-nouturn"],
  ["emergency access route", "ic-nrw-emergency-access-route"],
  ["access only", "ic-nrw-tr-access-only"],
  ["cycle lane", "ic-nrw-tr-cycle-lane"],
  ["pedestrian zone", "ic-nrw-tr-pedestrian-zone"],
  ["widened footpath", "ic-nrw-tr-widened-footpath"],
  ["one way suspension", "ic-nrw-tr-widened-footpath"],
  ["one way reversal", "ic-nrw-tr-reversaloneway"],
  ["two way traffic signal", "ic-nrw-tr-twowaysignals"],
  ["multiway traffic signal", "ic-nrw-tr-multiwaysignals"],
  ["stop and go", "ic-nrw-tr-stopandgo"],
  ["give and take", "ic-nrw-tr-stopandgo"],
  ["priority signs", "ic-nrw-tr-prioritysigns"],
  ["convoy working", "ic-nrw-tr-prioritysigns"],
  ["works stop", "ic-nrw-tr-worksstop"],
  ["road works", "ic-head-roadworks"],
  ["weather", "ic-head-weather"],
  ["flood", "ic-nrw-li-flood"],
  ["landslip", "ic-nrw-li-landslip"],
  ["weather incident", "ic-nrw-li-weatherincident"],
  ["public events", "ic-head-public-events"],
  ["cycling", "ic-nrw-pe-cycling"],
  ["football", "ic-nrw-pe-football"],
  ["horse racing", "ic-nrw-pe-horse"],
  ["motor sport event", "ic-nrw-pe-motor"],
  ["rugby", "ic-nrw-pe-rugby"],
  ["running", "ic-nrw-pe-running"],
  ["sport event", "ic-nrw-pe-sport"],
  ["carnival", "ic-nrw-pe-carnival"],
  ["polling station", "ic-nrw-pe-polling"],
  ["agricultural show", "ic-nrw-pe-agricultural"],
  ["air show", "ic-nrw-pe-air"],
  ["rememberance parade", "ic-nrw-pe-remembrance"],
  ["chrismas event", "ic-nrw-pe-christmas"],
  ["entertainment event", "ic-nrw-pe-entertainment"],
  ["festival", "ic-nrw-pe-festival"],
  ["filming", "ic-nrw-pe-filming"],
  ["market", "ic-nrw-pe-market"],
  ["cruise ship", "ic-nrw-pe-cruise"],
  ["funeral", "ic-nrw-pe-funeral"],
  ["other", "ic-nrw-pe-other"],
  ["", ""],
  ["Bus stop", "ic-nrw-pt-busstops"],
  ["Train station", "ic-nrw-pt-trainstops"],
  ["Tube station", "ic-nrw-pt-tubestations"],
  ["Highway Authorities", "ic-nrw-oi-ha"],
  ["District Authorities", "ic-nrw-oi-da"],
  ["Parishes", "ic-nrw-oi-pb"],
  ["Wards and UA Electoral divisions", "ic-nrw-oi-wards"],
  ["Bridges and restrictions", "ic-nrw-oi-bridges"],
  ["Traffic signals", "ic-nrw-oi-sig"],
  ["Forward Planning roadworks", "ic-nrw-oi-fw"],
  ["Restrictions: S58s & S85s", "ic-nrw-oi-section58"],
  ["Lane Rental Scheme network", "ic-nrw-oi-lr"],
  ["Priority Routes", "ic-nrw-oi-epr"],
  ["driver information", "ic-head-info"],
  ["traffic information signs", "ic-nrw-ti-trafficinformationsigns"],
  ["traffic cameras", "ic-nrw-ti-trafficcameras"],
  ["car parks", "ic-nrw-ti-carparks"],
  ["winter gritting routes", "ic-nrw-oi-winter"],
  ["public transport", "ic-head-transport"],
  ["bus stop", "ic-nrw-pt-busstops"],
  ["train station", "ic-nrw-pt-trainstops"],
  ["tube station", "ic-nrw-pt-tubestations"],
  ["operational info", "ic-head-settings"],
  ["Level Crossings", "ic-nrw-levelcrossing"],
  ["Commonwealth games", "ic-head-birmingham-2022"],
  ["NSG", "ic-nrw-oi-nsg"],
  ["NSG (Special designation)", "ic-nrw-oi-nsg"],
  ["NSG (Road status)", "ic-nrw-oi-nsg"],
  ["NSG (Reinstatement)", "ic-nrw-oi-nsg"],
  ["NSG (Permit streets)", "ic-nrw-oi-nsg"],
  ["Road", "map-roads"],
  ["Satellite", "map-satellite"],
  ["Terrain", "map-terrain"],
  ["OpenStreetMap", "map-ost"],
])

When("I click on the data layer icon", () => {
  cy.intercept("GET", "/services/slides?lang=*").as("network")
  cy.wait("@network")
  cy.get(".ons-icons-layers").click({ force: true })
})

When("I click the {string} option on the list", (optionListName) => {
  cy.get(".ons-zoom-popover").contains(optionListName).click({ force: true })
})

Then("the {string} option is {string} on the layers-menu", (optionListName, displayed) => {
  let is_element_exist = "not.exist"

  displayed == "displayed" ? (is_element_exist = "exist") : (is_element_exist = "not.exist")
  cy.get(".ons-layer-name > .row > .col")
    .contains(optionListName)
    .should(is_element_exist, { force: true })
})

Then ("the Live traffic is displayed", () => {
  cy.get(".ons-live-traffic-cong").should("exist")
})


Then("the {string} layername is {string} on the layers-menu", (optionListName, displayed) => {
  let is_element_exist = "not.exist"

  displayed == "displayed" ? (is_element_exist = "exist") : (is_element_exist = "not.exist")
  cy.get(".ons-layer-name").contains(optionListName).should(is_element_exist, { force: true })
})

Then("the {string} icon is {string} on the layers-menu", (icon, displayed) => {
  let is_element_exist = "not.exist"
  const icon_name = "." + icons.get(icon)

  displayed == "displayed" ? (is_element_exist = "exist") : (is_element_exist = "not.exist")
  cy.get(icon_name).should(is_element_exist, { force: true })
})

Then("the {string} trigger is {string} on the layers-menu", (optionListName, displayed) => {
  let is_element_exist = "not.exist"

  displayed == "displayed" ? (is_element_exist = "exist") : (is_element_exist = "not.exist")
  cy.get('label.row.no-gutters.ons-layer.active[for="' + optionListName + '"] ').should(
    is_element_exist,
    {
      force: true,
    },
  )
})

Then("the {string} base map trigger is {string} on the layers-menu", (optionListName, displayed) => {
  let is_element_exist = "not.exist"

  displayed == "displayed" ? (is_element_exist = "exist") : (is_element_exist = "not.exist")
  cy.get('label.row.no-gutters.ons-base-map-option[for="' + optionListName + '"] ').should(
    is_element_exist,
    {
      force: true,
    },
  )
})

Then("the {string} option is {string} on the layers-menu", (optionListName, displayed) => {
  let is_element_exist = "not.exist"

  displayed == "displayed" ? (is_element_exist = "exist") : (is_element_exist = "not.exist")
  cy.get(".ons-layer-name > .row > .col")
    .contains(optionListName)
    .should(is_element_exist, { force: true })
})

When("I Click on {string} option, {string}", (optionListName , position) => {
  cy.get(".ons-base-map > div > section > div > div > label:nth-child("+position+") > div:nth-child(3) > div > span").click({ force: true })
})

When("Click on the data layer", () => {
  cy.get(".ons-icons-layers").click({ force: true })
})

Then("the login window popsUp", (optionListName, displayed) => {
  cy.get(".ons-feature-availability-container")
        .should("exist", { force: true })
  cy.get("#on-sign-in").click({ force: true })
  cy.wait(1000)
})

Then("The Map displays {string} layout, {string}", (optionListName, id) => {
  cy.get("#map-canvas > div > div > div:nth-child(2) > div:nth-child(1) > div:nth-child(5) > div > div:nth-child("+id+") > div:nth-child(2) > img")
      .invoke('attr', 'src').should('contain',optionListName)
})

Then("Map must displays {string} layout", (optionListName) => {
  cy.get("#map-canvas > div > div > div:nth-child(2) > div:nth-child(1) > div:nth-child(5) > div > div:nth-child(1) > img")
      .invoke('attr', 'src').should('contain',optionListName)
})

Then("Map displays {string} layout on screen", (optionListName) => {
  cy.get("#map-canvas > div > div > div:nth-child(2) > div:nth-child(1) > div:nth-child(5) > div > div:nth-child(1) > div > img")
      .invoke('attr', 'src').should('contain',optionListName)
})

Then ("I click on Covid-19 Tongle All option", () => {
  cy.get("#on-layers-menu-group-41 > div > div > button").click({ force: true })
})

Then ("No Covid-19 options enable" , () => {
  cy.get("#on-layers-menu-group-41 > div > label:nth-child(2)").should("exist",{ force: true })
  //#on-layers-menu-group-41 > div > label:nth-child(2)
})

Then ("All Covid-19 options enable" , () => {
  cy.get("#on-layers-menu-group-41 > div > label.row.no-gutters.ons-layer.active").should("exist",{ force: true })
})

Then ("The question mark icon is {string}" , (displayed) => {
  let is_element_exist = "not.exist"

  displayed == "displayed" ? (is_element_exist = "exist") : (is_element_exist = "not.exist")
  cy.get("#on-layers-menu-group-24 > div > label > div.col.ons-layer-name > div > div.col-auto > button > i")
    .should(is_element_exist, { force: true })
})

Then ("I click on question mark icon" , () => {
  cy.get("#on-layers-menu-group-24 > div > label > div.col.ons-layer-name > div > div.col-auto > button > i")
    .click({ force: true })
})

Then ("I click on question mark icon" , () => {
  cy.get("#on-layers-menu-group-24 > div > label > div.col.ons-layer-name > div > div.col-auto > button > i")
    .click({ force: true })
})

Then("The {string} layer is {string}", (optionListName, displayed) => {
  let is_element_exist = "not.exist"

  displayed == "displayed" ? (is_element_exist = "exist") : (is_element_exist = "not.exist")
  cy.get("div.col.ons-legend-text")
    .contains(optionListName)
    .should(is_element_exist, { force: true })
})

Then ("I tongle the Car park" ,() => {
  cy.get("#on-layers-menu-group-18 > div > label:nth-child(6) > div:nth-child(3) > div > span")
    .click({ force: true })
})

When("I type in the search box the location {string}", (location) => {
  cy.get(".ons-tt-input").clear({ force: true })
  cy.get("#on-layer-controls > header > div.ons-panel-close.col-auto > i").click({ force: true })
  cy.get(".ons-tt-input").type(location,{ force: true })
  cy.wait(2000)
  cy.get(".ons-tt-input").click({ force: true })
})

When("I select {string} from the dropdown list", (location) => {
  cy.wait(3000)
  cy.get('.ons-tt-menu').find('.list-group-item').contains(location).click({ force: true })
  cy.wait(1000)
})

When("I disable all layers", () => {
  cy.get(`.ons-layer-switch-checkbox:checked`).click({ multiple: true, force: true })
})

When("I enable the {string} geoserver layer", (layerName) => {
  cy.intercept("**/geoserver/**").as("tiles")
  cy.get(`#${layerName}.ons-layer-switch-checkbox:not(:checked)`).click({ force: true })
  cy.wait("@tiles")
  cy.wait(1000)
})

Then("the callout shows the Car park name", () => {
  cy.get('#map-canvas > div > div > div:nth-child(2) > div:nth-child(3) > div > div:nth-child(4) > div.infoBox > div > div > header > h1').should('not.be.empty')

})

Then("the callout shows the location", () => {
  cy.get('#map-canvas > div > div > div:nth-child(2) > div:nth-child(3) > div > div:nth-child(4) > div.infoBox > div > div > div > div > div:nth-child(1) > table > tbody > tr:nth-child(1) > td.rwCallout_label').should('not.be.empty')
  cy.get('#map-canvas > div > div > div:nth-child(2) > div:nth-child(3) > div > div:nth-child(4) > div.infoBox > div > div > div > div > div:nth-child(1) > table > tbody > tr:nth-child(1) > td.rwCallout_info').should('not.be.empty')
})

Then("the callout shows the Available spaces", () => {
  cy.get('#map-canvas > div > div > div:nth-child(2) > div:nth-child(3) > div > div:nth-child(4) > div.infoBox > div > div > div > div > div:nth-child(1) > table > tbody > tr:nth-child(2) > td.rwCallout_label').should('not.be.empty')
  cy.get('#map-canvas > div > div > div:nth-child(2) > div:nth-child(3) > div > div:nth-child(4) > div.infoBox > div > div > div > div > div:nth-child(1) > table > tbody > tr:nth-child(2) > td.rwCallout_info').should('not.be.empty')
})

Then("the callout shows the Total capacity", () => {
  cy.get('#map-canvas > div > div > div:nth-child(2) > div:nth-child(3) > div > div:nth-child(4) > div.infoBox > div > div > div > div > div:nth-child(1) > table > tbody > tr:nth-child(2) > td.rwCallout_label').should('not.be.empty')
  cy.get('#map-canvas > div > div > div:nth-child(2) > div:nth-child(3) > div > div:nth-child(4) > div.infoBox > div > div > div > div > div:nth-child(1) > table > tbody > tr:nth-child(2) > td.rwCallout_info').should('not.be.empty')
})

Then("the callout shows the Status", () => {
  cy.get('#map-canvas > div > div > div:nth-child(2) > div:nth-child(3) > div > div:nth-child(4) > div.infoBox > div > div > div > div > div:nth-child(1) > table > tbody > tr:nth-child(3) > td.rwCallout_label').should('not.be.empty')
  cy.get('#map-canvas > div > div > div:nth-child(2) > div:nth-child(3) > div > div:nth-child(4) > div.infoBox > div > div > div > div > div:nth-child(1) > table > tbody > tr:nth-child(3) > td.rwCallout_info').should('not.be.empty')
})

Then("the callout shows the Click Here link", () => {
  cy.get('#map-canvas > div > div > div:nth-child(2) > div:nth-child(3) > div > div:nth-child(4) > div.infoBox > div > div > div > div > div:nth-child(2) > a').should('not.be.empty')
})

Then("the callout shows the Last updated", () => {
  cy.get('#map-canvas > div > div > div:nth-child(2) > div:nth-child(3) > div > div:nth-child(4) > div.infoBox > div > div > div > div > div.rwCallout_innerScroll.rwCallout_updateTime > span').should('not.be.empty')
})

Then("I click on Click Here inside the callout", () => {
  cy.get('#map-canvas > div > div > div:nth-child(2) > div:nth-child(3) > div > div:nth-child(4) > div.infoBox > div > div > div > div > div:nth-child(2) > a')
    .invoke('attr', 'href','//www.cambridgeshire.gov.uk')

  cy.get('#map-canvas > div > div > div:nth-child(2) > div:nth-child(3) > div > div:nth-child(4) > div.infoBox > div > div > div > div > div:nth-child(2) > a')
    .invoke('removeAttr', 'target').click({ force: true });
})

Then("I go to the website of Cambridge Council County.", () => {
  cy.url().should('eq', 'https://www.cambridgeshire.gov.uk/')
})

Then("I Close the callout", () => {
  cy.get("#map-canvas > div > div > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(4) > div.infoBox > div > div > header > span").click({ force: true });
})

Then("I Click on Layers", () => {
  cy.get(".ons-icons-layers").click({ force: true })
})

Then("I enable the {string} layer", (layerName) => {
  cy.get(`#${layerName}.ons-layer-switch-checkbox:not(:checked)`).click({ force: true })
  cy.wait(1000)
})

Then("the callout bus title is displayed", () => {
  cy.get('#map-canvas > div > div > div:nth-child(2) > div:nth-child(3) > div > div:nth-child(4) > div.infoBox > div > div > header > h1').should('not.be.empty')
})
Then("the callout bus shows has the close cross", () => {
  cy.get('#map-canvas > div > div > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(4) > div.infoBox > div > div > header > span').should("exist", { force: true })
})
Then("the callout bus shows the location", () => {
  cy.get('#map-canvas > div > div > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(4) > div.infoBox > div > div > header > p > span').should('not.be.empty')

})
Then("the callout bus has the Live Departures", () => {
  cy.get('#map-canvas > div > div > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(4) > div.infoBox > div > div > div > div > div > h2').should('not.be.empty')

})
Then("the callout bus has {string} Column, {string}", (colname,position) => {
  cy.get('#map-canvas > div > div > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(4) > div.infoBox > div > div > div > div > div > table.rwCallout_table.timetable > tbody > tr:nth-child(1) > th:nth-child('+position+')')
    .should('not.be.empty')

    cy.get('#map-canvas > div > div > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(4) > div.infoBox > div > div > div > div > div > table.rwCallout_table.timetable > tbody > tr:nth-child(1) > th:nth-child('+position+')')
    .should('have.text',colname)

})
