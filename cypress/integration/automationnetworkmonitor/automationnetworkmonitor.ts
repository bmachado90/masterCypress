import { Given, Then, When } from "cypress-cucumber-preprocessor/steps"

When ("I click on the data layers button", () =>
{
  cy.get("#on-layer-controls > button > i").click({ force: true})
})


Then ("I click on Reset button", () =>
{
  cy.get("#on-layer-controls > header > div.ons-panel-reset.col-auto > p").click({ force: true})
  cy.get("#on-layer-controls > header > div.ons-panel-close.col-auto > i").click({ force: true})
})

Then ("I Click on Wazze button", () =>
{
  cy.get("#on-realtime-toggle > div.ons-waze-toggle.ons-portal-togglers").click({ force: true})
  cy.wait(1000)
})

Then ("I click on TomTom button", () =>
{
  cy.get("#on-realtime-toggle > div.ons-tomtom-toggle.ons-portal-togglers").click({ force: true})
  cy.wait(1000)
})


Then ("I wait for markes to appear", () =>
{
  cy.wait(4000)
})


Then("the callout shows the Incident name", () => {
  cy.get('#map-canvas > div > div > div:nth-child(2) > div:nth-child(3) > div > div:nth-child(4) > div.infoBox > div > div > header > h1').should('not.be.empty')
})

Then ("The {string} name is present in the callout", (message) => {
  var t1
  cy.get("#map-canvas > div > div > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(4) > div.infoBox > div > div > header > h1").should(($d) => {
    t1 = $d.text();
    expect(t1).equal(message);
    })
})

Then("the callout header has data", () => {
  cy.get('#map-canvas > div > div > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(4) > div.infoBox > div > div > header > p:nth-child(4) > span')
    .should('not.be.empty')
  cy.get('#map-canvas > div > div > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(4) > div.infoBox > div > div > header > p:nth-child(5) > span')
    .should('not.be.empty')
})

Then("the callout body has data", () => {
  cy.get('#map-canvas > div > div > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(4) > div.infoBox > div > div > div > div > div > div.rwCallout_section_info_tomtom > h1')
    .should('not.be.empty')

  //Affected road lenght
  cy.get('#map-canvas > div > div > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(4) > div.infoBox > div > div > div > div > div > div.rwCallout_section_info_tomtom > h2:nth-child(2)')
    .should('not.be.empty')

  cy.get('#map-canvas > div > div > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(4) > div.infoBox > div > div > div > div > div > div.rwCallout_section_info_tomtom > p:nth-child(3)')
    .should('not.be.empty')

  //Traffic Delay
  cy.get('#map-canvas > div > div > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(4) > div.infoBox > div > div > div > div > div > div.rwCallout_section_info_tomtom > h2:nth-child(4)')
    .should('not.be.empty')

  cy.get('#map-canvas > div > div > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(4) > div.infoBox > div > div > div > div > div > div.rwCallout_section_info_tomtom > p:nth-child(5)')
    .should('not.be.empty')

    //Traffic Disruption
  cy.get('#map-canvas > div > div > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(4) > div.infoBox > div > div > div > div > div > div.rwCallout_section_info_tomtom > h2:nth-child(6)')
  .should('not.be.empty')

  cy.get('#map-canvas > div > div > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(4) > div.infoBox > div > div > div > div > div > div.rwCallout_section_info_tomtom > p:nth-child(7)')
  .should('not.be.empty')

  //Description
  cy.get('#map-canvas > div > div > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(4) > div.infoBox > div > div > div > div > div > div.rwCallout_section_info_tomtom > p:nth-child(8)')
    .should('not.be.empty')

  cy.get('#map-canvas > div > div > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(4) > div.infoBox > div > div > div > div > div > div.rwCallout_section_info_tomtom > p:nth-child(9)')
    .should('not.be.empty')

    //Time elapsed since last update
  cy.get('#map-canvas > div > div > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(4) > div.infoBox > div > div > div > div > div > div.rwCallout_section_info_tomtom > h2:nth-child(11)')
  .should('not.be.empty')

  cy.get('#map-canvas > div > div > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(4) > div.infoBox > div > div > div > div > div > div.rwCallout_section_info_tomtom > h2:nth-child(12)')
  .should('not.be.empty')

  //Data provided by Waze
  cy.get('#map-canvas > div > div > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(4) > div.infoBox > div > div > div > div > div > div.rwCallout_section_logo_tomtom > p:nth-child(3)')
  .should('not.be.empty')

})

Then("I refresh the page", () => {
  cy.reload()
  cy.wait(400)
})

Then ("Mouseover Waze toggle and get the message {string}.", (message) =>
{
  cy.get("#on-realtime-toggle > div.ons-waze-toggle.ons-portal-togglers").trigger('mouseover',{ force: true})
  cy.get("#on-realtime-toggle > div.ons-waze-toggle.ons-portal-togglers").invoke('attr', 'title').should('eq',message)
  cy.wait(1000)
})

Then ("Mouseover TomTom toggle and get the message {string}.", (message) =>
{
  cy.get("#on-realtime-toggle > div.ons-tomtom-toggle.ons-portal-togglers").trigger('mouseover',{ force: true})
  cy.get("#on-realtime-toggle > div.ons-tomtom-toggle.ons-portal-togglers").invoke('attr', 'title').should('eq',message)
  cy.wait(1000)
})

Then ("I click on tomtom Info button", () =>
{
  cy.get("#map-canvas > div > div > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(4) > div.infoBox > div > div > div > div > div > div.rwCallout_section_info_tomtom > span")
    .should('not.be.empty')
  cy.wait(1000)
})

Then ("I click on Info button", () =>
{
  cy.get("#map-canvas > div > div > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(4) > div.infoBox > div > div > div > div > div > div.rwCallout_section_info_tomtom > span")
    .should('not.be.empty')
  cy.wait(1000)
})

Then("the callout tomtom title is displayed", () => {
  cy.get('#map-canvas > div > div > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(4) > div.infoBox > div > div > header > h1')
    .should('not.be.empty')
  cy.get('#map-canvas > div > div > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(4) > div.infoBox > div > div > header > p:nth-child(4) > span')
    .should('not.be.empty')
  cy.get('#map-canvas > div > div > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(4) > div.infoBox > div > div > header > p:nth-child(5) > span')
    .should('not.be.empty')
})

Then("I Close the callout", () => {
  cy.get("#map-canvas > div > div > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(4) > div.infoBox > div > div > header > span").click({ force: true });
})

Then ("I click on the {string} icon {string}", (nome, numero) => {
  cy.get("#on-layer-controls > div > div > section.ons-layer-groups-container.ons-layer-menu-section > section:nth-child("+numero+") > div > div.row.no-gutters.ons-zoom-popover > div.col-auto.ons-layer-group-icon.ons-layer-group-toggler > i").click({force: true});
  cy.get("#on-layer-controls > div > div > section.ons-layer-groups-container.ons-layer-menu-section > section:nth-child("+numero+") > div > div.row.no-gutters.ons-zoom-popover > div.col.ons-group-expand > div > div > a > div.col-auto > i").click({force: true});
  cy.wait(1000)
})

Then("I click on the first callout", () => {
  cy.wait(1000)
  cy.get("#map-canvas > div > div > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(4) > div.infoBox > div > div > div > div > div > table > tbody > tr:nth-child(1)").click({ force: true });

})

Then("I close the multiple callout", () => {
  cy.wait(1000)
  cy.get("#map-canvas > div > div > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(4) > div.infoBox > div > div > header > span").click({ force: true });

})
