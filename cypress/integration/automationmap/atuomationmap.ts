import { When, Then } from "cypress-cucumber-preprocessor/steps"

Then("I see the {string} label", (label, displayed) => {
  let is_element_exist = "not.exist"

  displayed == "displayed" ? (is_element_exist = "exist") : (is_element_exist = "not.exist")
  cy.get(".no-gutters > .col > .row > .col-6")
    .contains(label)
    .should(is_element_exist, { force: true })
})

Then("I click on the Legal Information Label", () => {
  cy.get('#on-layer-controls > div > div > footer > div > div > div.col-6.text-right > a').invoke('removeAttr', 'target')
  cy.get("#on-layer-controls > div > div > footer > div > div > div.col-6.text-right > a").click({force: true});
})

Then("the new tab contains Legal Information", () => {
  cy.url().should('include', Cypress.config().baseUrl+'/legal?lang=en-GB');

})

Then("I click on Website Terms of Use", () => {
  cy.get("#info-menu > div > ul:nth-child(2) > li:nth-child(1) > a").click({force: true});
})

Then("I see Website Terms of Use page", () => {
  cy.url().should('include', Cypress.config().baseUrl+'/legal/terms-of-use?lang=en-GB');
})

Then("I click on Master Terms and Conditions", () => {
  cy.get("#info-menu > div > ul:nth-child(2) > li:nth-child(2) > a").click({force: true});
})

Then("I see the Master terms and Conditions page", () => {
  cy.url().should('include', Cypress.config().baseUrl+'/legal/master-terms-and-conditions?lang=en-GB');

})

Then("I click on Third Party Content and Services", () => {
  cy.get("#info-menu > div > ul:nth-child(2) > li:nth-child(3) > a").click({force: true});
})

Then("I see the Third Party Content and Services page", () => {
  cy.url().should('include', Cypress.config().baseUrl+'/legal/third-party-content-and-services?lang=en-GB');
})

Then("I click on Privacy and Cookies Policy", () => {
  cy.get("#info-menu > div > ul:nth-child(4) > li:nth-child(1) > a").click({force: true});
})

Then("I see the Privacy and Cookies Policy page", () => {
  cy.url().should('include', Cypress.config().baseUrl+'/legal/privacy-and-cookies-policy?lang=en-GB');
})

Then("I refresh the page", () => {
  cy.reload()
})

Then("I click on User preferences and Analytics & Statistics cookies.", () => {
  cy.get("#erw-privacy-functional-checkbox").click({force: true});
  cy.get("#erw-privacy-analytics-checkbox").click({force: true});
  cy.wait(500)
})

Then("I save the Cookie Preferences.", () => {
  cy.get("#erw-save-privacy-prefs").click({force: true});
  cy.wait(500)

})

Then("The User preferences and Analytics & Statistics cookies are un-ticked.", () => {
  cy.get("#erw-privacy-functional-checkbox").click({force: true});
  cy.get("#erw-privacy-analytics-checkbox").click({force: true});
  cy.get("#modalCookiesPrefSaved > div > div > div.modal-footer > button").click({force: true});
})

Then("I click on Privacy and Cookies Policy", () => {
  cy.get("#info-menu > div > ul:nth-child(4) > li:nth-child(1) > a").click({force: true});
})

Then("I see the Privacy and Cookies Policy page", () => {
  cy.url().should('include', Cypress.config().baseUrl+'/legal/privacy-and-cookies-policy?lang=en-GB');
})

Then("I click on Fair Usage Policy", () => {
  cy.get("#info-menu > div > ul:nth-child(4) > li:nth-child(2) > a").click({force: true});
})

Then("I see the Fair Usage Policy page", () => {
  cy.url().should('include',Cypress.config().baseUrl+'/legal/fair-usage-policy?lang=en-GB');
})

Then("I click on Copyright Policy", () => {
  cy.get("#info-menu > div > ul:nth-child(4) > li:nth-child(3) > a").click({force: true});
})

Then("I see the Copyright Policy page", () => {
  cy.url().should('include',Cypress.config().baseUrl+'/legal/copyright-policy?lang=en-GB');
})

Then("I unselect open layers except Incidents", () => {
  cy.get("#on-layer-controls > div > div > section.ons-layer-groups-container.ons-layer-menu-section > section:nth-child(4) > div > div.row.no-gutters.ons-zoom-popover > div.col-auto.ons-layer-group-icon.ons-layer-group-toggler > i").click({force: true});
  cy.get("#on-layer-controls > div > div > section.ons-layer-groups-container.ons-layer-menu-section > section:nth-child(5) > div > div.row.no-gutters.ons-zoom-popover > div.col-auto.ons-layer-group-icon.ons-layer-group-toggler > i").click({force: true});
  cy.get("#on-layer-controls > div > div > section.ons-layer-groups-container.ons-layer-menu-section > section:nth-child(6) > div > div.row.no-gutters.ons-zoom-popover > div.col-auto.ons-layer-group-icon.ons-layer-group-toggler > i").click({force: true});
  cy.get("#on-layer-controls > div > div > section.ons-layer-groups-container.ons-layer-menu-section > section:nth-child(1) > div > div.row.no-gutters.ons-zoom-popover > div.col-auto.ons-layer-group-icon.ons-layer-group-toggler > i").click({force: true});
  cy.get("#on-layer-controls > div > div > section.ons-layer-groups-container.ons-layer-menu-section > section:nth-child(8) > div > div.row.no-gutters.ons-zoom-popover > div.col-auto.ons-layer-group-icon.ons-layer-group-toggler > i").click({force: true});
})

Then("the callout header name equals to {string}", (name) => {
  var t1
  cy.get("#map-canvas > div > div > div:nth-child(2) > div:nth-child(3) > div > div:nth-child(4) > div > div > div > header > h1").should(($d) => {
    t1 = $d.text();
    expect(t1).equal(name);
    })
})

Then ("the Live traffic is displayed", () => {
  cy.get(".ons-live-traffic-cong").should("exist")
})

Then ("I Collapse Incidents and Live traffic.", () => {
  cy.get("#on-layer-controls > div > div > section.ons-layer-groups-container.ons-layer-menu-section > section:nth-child(3) > div > div.row.no-gutters.ons-zoom-popover > div.col.ons-group-expand > div > div > a > div.col-auto > i").click({force: true});
  cy.wait(1000)
})

Then ("I click on the {string} icon {string}", (nome, numero) => {
  cy.get("#on-layer-controls > div > div > section.ons-layer-groups-container.ons-layer-menu-section > section:nth-child("+numero+") > div > div.row.no-gutters.ons-zoom-popover > div.col-auto.ons-layer-group-icon.ons-layer-group-toggler > i").click({force: true});
  cy.get("#on-layer-controls > div > div > section.ons-layer-groups-container.ons-layer-menu-section > section:nth-child("+numero+") > div > div.row.no-gutters.ons-zoom-popover > div.col.ons-group-expand > div > div > a > div.col-auto > i").click({force: true});
  cy.wait(1000)
})

Then("I Collapse {string} {string}", (nome , numero) => {
  cy.get("#on-layer-controls > div > div > section.ons-layer-groups-container.ons-layer-menu-section > section:nth-child("+numero+") > div > div.row.no-gutters.ons-zoom-popover > div.col.ons-group-expand > div > div > a > div.col-auto > i").click({force: true});
  cy.wait(1000)
})

Then("I click on Traffic restrictions question mark", ()  => {
  cy.get("#on-layers-menu-group-23 > div > div.row.no-gutters.ons-layer > div > button > i").click({force: true});
  cy.wait(1000)

  var d1
  var d2
  var d3
  var d4
  cy.get("#ons-g-roadclosures > div:nth-child(1) > div.col.ons-legend-text").should(($d) => {
    d1 = $d.text();
    expect(d1).equal(" Active ");
    })

  cy.get("#ons-g-roadclosures > div:nth-child(2) > div.col.ons-legend-text").should(($d) => {
    d2 = $d.text();
    expect(d2).equal(" Inactive ");
  })

  cy.get("#ons-g-roadclosures > div:nth-child(3) > div.col.ons-legend-text").should(($d) => {
    d3 = $d.text();
    expect(d3).equal(" Live Link managed ");
  })

  cy.get("#ons-g-roadclosures > div:nth-child(4) > div.col.ons-legend-text").should(($d) => {
    d4 = $d.text();
    expect(d4).equal(" Emergency ");
  })

  cy.get("#on-layers-menu-group-23 > div > div.row.no-gutters.ons-layer > div > button > i").click({force: true});
})

Then("I click on question mark {string}", (numero)  => {
  cy.get("#on-layers-menu-group-"+numero+" > div > div.row.no-gutters.ons-layer > div > button > i").click({force: true});
  cy.wait(1000)

  var t1
  var t2
  var t3
  var t4
  cy.get("#ons-g-roadclosures > div:nth-child(1) > div.col.ons-legend-text").should(($d) => {
    t1 = $d.text();
    expect(t1).equal(" Active ");
    })

  cy.get("#ons-g-roadclosures > div:nth-child(2) > div.col.ons-legend-text").should(($d) => {
    t2 = $d.text();
    expect(t2).equal(" Inactive ");
  })

  cy.get("#ons-g-roadclosures > div:nth-child(3) > div.col.ons-legend-text").should(($d) => {
    t3 = $d.text();
    expect(t3).equal(" Live Link managed ");
  })

  cy.get("#ons-g-roadclosures > div:nth-child(4) > div.col.ons-legend-text").should(($d) => {
    t4 = $d.text();
    expect(t4).equal(" Emergency ");
  })

  cy.get("#on-layers-menu-group-"+numero+" > div > div.row.no-gutters.ons-layer > div > button > i").click({force: true});
})

When("I click in the search item text box to type", () => {
  cy.get(".ons-tt-input").click({ force: true })
})

When("I type in the search box a location {string}", (location) => {
  //cy.get(".ons-tt-input").clear()
  cy.get(".ons-tt-input").type(location,{ force: true })
  cy.wait(2000)
  cy.get(".ons-tt-input").click({ force: true })
})

When("I select item {string} from the dropdown list", (location) => {
  cy.wait(3000)
  cy.get('.ons-tt-menu').find('.list-group-item').contains(location).click({ force: true })
  cy.wait(1000)
})

Then("the callout should open", () => {
  cy.get(".rwCallout_content",{ timeout: 30000 }).should("exist")
})

Then("Click in Organisation name", () => {
  cy.get("#map-canvas > div > div > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(4) > div > div > div > div > div > div.rwCallout_innerScroll > div.rwCallout_section_info > table.rwCallout_table.rwCallout_logoTable > tbody > tr > td.rwCallout_label > a")
  .invoke('attr', 'href','http://www.bt.com"')
})

Then("The Organisation name page is displayed", () => {
  cy.url().should('eq', 'https://www.bt.com/')
})

Then("I go Back", () => {
  cy.go('back')
  cy.url().should('eq', Cypress.config().baseUrl+'/tm')
})

Then("Click in Organisation logo", () => {
  cy.get("#map-canvas > div > div > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(4) > div > div > div > div > div > div.rwCallout_innerScroll > div.rwCallout_section_info > table.rwCallout_table.rwCallout_logoTable > tbody > tr > td.rwCallout_info.rwCallout_logo > a")
  .invoke('attr', 'href','http://www.bt.com"')
})

Then("I Add {string} on base Url", (url) => {
 cy.visit(Cypress.config().baseUrl+"/tm"+url)
 cy.wait(5000)
})

Then("the deeplink is present", (url) => {
  cy.get("#map-canvas > div > div > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(4) > div > div > div > div > div > div.rwCallout_innerScroll > div.rwCallout_section_info > table:nth-child(24) > tbody > tr:nth-child(1) > td.rwCallout_label")
  .should("exist")
  cy.get("#map-canvas > div > div > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(4) > div > div > div > div > div > div.rwCallout_innerScroll > div.rwCallout_section_info > table:nth-child(24) > tbody > tr:nth-child(1) > td.rwCallout_info > a")
  .should("exist")
 })

 Then("i click on deeplink", (url) => {
  cy.get("#map-canvas > div > div > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(4) > div > div > div > div > div > div.rwCallout_innerScroll > div.rwCallout_section_info > table:nth-child(24) > tbody > tr:nth-child(1) > td.rwCallout_info > a")
    .invoke('removeAttr', 'target')

  cy.get("#map-canvas > div > div > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(4) > div > div > div > div > div > div.rwCallout_innerScroll > div.rwCallout_section_info > table:nth-child(24) > tbody > tr:nth-child(1) > td.rwCallout_info > a")
     .click({force: true});
  cy.wait(5000)
 })

 Then("Organisation Logo is present", (url) => {
  cy.get("#map-canvas > div > div > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(4) > div > div > div > div > div > div.rwCallout_innerScroll > div.rwCallout_section_info > table.rwCallout_table.rwCallout_logoTable > tbody > tr > td.rwCallout_info.rwCallout_logo > a")
  .invoke('attr', 'href','http://www.bt.com"')
 })

 Then("the {string} label is visible", (name) => {
    cy.get(".ons-zoom-popover").contains(name).should("exist")
  })

  Then("the {string} option is {string} on the layers-menu", (optionListName, displayed) => {
    let is_element_exist = "not.exist"

    displayed == "displayed" ? (is_element_exist = "exist") : (is_element_exist = "not.exist")
    cy.get(".ons-layer-name > .row > .col")
      .contains(optionListName)
      .should(is_element_exist, { force: true })
  })

  Then("the {string} option is visible on the layers-menu {string}", (name,numero) => {
    cy.get("#on-layer-controls > div > div > section.ons-base-map-group-container.ons-layer-menu-section.ons-base-map > div > section > div > div > label:nth-child("+numero+") > div.col.ons-layer-name").contains(name).should("exist")
  })

  Then("The version number is displayed and it matches {string}", (versionNumber) => {
    cy.get(".no-gutters > .col > .row > .col-6 > .m-0").invoke('text').then((text) => {
      expect(text.trim()).equal(versionNumber);
    });

  })

  When("I go back in the browser", () => {
    cy.go('back')
    cy.wait(2000)
  })

  Then("i click on reset", () => {
    cy.get("#on-layer-controls > header > div.ons-panel-reset.col-auto > p").click({force: true});
  })

  Then("I see Public Transport options", () => {
    cy.get("#on-layers-menu-group-14").should("exist");
    cy.wait(1000)

  var t1
  var t2
  var t3
  cy.get("#on-layers-menu-group-14 > div > label:nth-child(2) > div.col.ons-layer-name > div > div").should(($d) => {
    t1 = $d.text();
    expect(t1).equal(" Bus stop ");
    })
  cy.get("#on-layers-menu-group-14 > div > label:nth-child(3) > div.col.ons-layer-name > div > div").should(($d) => {
    t2 = $d.text();
    expect(t2).equal(" Train station ");
    })

  cy.get("#on-layers-menu-group-14 > div > label:nth-child(4) > div.col.ons-layer-name > div > div").should(($d) => {
    t3 = $d.text();
    expect(t3).equal(" Tube station ");
    })
  })

  Then("I Select Bus stop and Train station and Tube station.", () => {
    cy.get("#on-layer-controls > div > div > section.ons-layer-groups-container.ons-layer-menu-section > section:nth-child(10) > div > div.row.no-gutters.ons-zoom-popover > div.col.ons-group-expand > div > div > a > div.col.ons-layer-group-name")
    .click({force: true});
    cy.wait(1000)
    cy.get("#on-layers-menu-group-14 > div > label:nth-child(2) > div.col.ons-layer-name > div > div").click({force: true});
    cy.get("#on-layers-menu-group-14 > div > label:nth-child(3) > div.col.ons-layer-name > div > div").click({force: true});
    cy.get("#on-layers-menu-group-14 > div > label:nth-child(4) > div.col.ons-layer-name > div > div").click({force: true});
  })

  Then("I can see Driver Information options", () => {
    cy.get("#on-layers-menu-group-18").should("exist");
    cy.wait(1000)

  var t1
  var t2
  var t3
  var t4
  var t5
  cy.get("#on-layers-menu-group-18 > div > label:nth-child(2) > div.col.ons-layer-name > div > div").should(($d) => {
    t1 = $d.text();
    expect(t1).equal(" Car parks ");
    })
  cy.get("#on-layers-menu-group-18 > div > label:nth-child(3) > div.col.ons-layer-name > div > div").should(($d) => {
    t2 = $d.text();
    expect(t2).equal(" Electric vehicle charge points ");
    })

  cy.get("#on-layers-menu-group-18 > div > label:nth-child(4) > div.col.ons-layer-name > div > div").should(($d) => {
    t3 = $d.text();
    expect(t3).equal(" Traffic cameras     ");
    })

  cy.get("#on-layers-menu-group-18 > div > label:nth-child(6) > div.col.ons-layer-name > div > div").should(($d) => {
    t4 = $d.text();
    expect(t4).equal(" Traffic information signs     ");
    })

  cy.get("#on-layers-menu-group-18 > div > label:nth-child(8) > div.col.ons-layer-name > div > div").should(($d) => {
    t5 = $d.text();
    expect(t5).equal(" Winter gritting routes     ");
    })
  })

  Then("I can see Public Events options", () => {
    cy.get("#on-layers-menu-group-26").should("exist");
    cy.wait(1000)

  var t1, t2, t3,t4,t5,t6,t7,t8,t9,t10,t11,t12,t13,t14,t15,t16,t17,t18,t19,t20,t21,t22

  cy.get("#on-layers-menu-group-26 > div > label:nth-child(2) > div.col.ons-layer-name > div > div").should(($d) => {
    t1 = $d.text();
    expect(t1).equal(" Agricultural show ");
    })
  cy.get("#on-layers-menu-group-26 > div > label:nth-child(3) > div.col.ons-layer-name > div > div").should(($d) => {
    t2 = $d.text();
    expect(t2).equal(" Air show ");
    })

  cy.get("#on-layers-menu-group-26 > div > label:nth-child(4) > div.col.ons-layer-name > div > div").should(($d) => {
    t3 = $d.text();
    expect(t3).equal(" Carnival / parade / street party ");
    })

  cy.get("#on-layers-menu-group-26 > div > label:nth-child(5) > div.col.ons-layer-name > div > div").should(($d) => {
    t4 = $d.text();
    expect(t4).equal(" Christmas event ");
    })

  cy.get("#on-layers-menu-group-26 > div > label:nth-child(6) > div.col.ons-layer-name > div > div").should(($d) => {
    t5 = $d.text();
    expect(t5).equal(" Commonwealth Games ");
    })

  cy.get("#on-layers-menu-group-26 > div > label:nth-child(7) > div.col.ons-layer-name > div > div").should(($d) => {
    t6 = $d.text();
    expect(t6).equal(" Cruise ship ");
    })

  cy.get("#on-layers-menu-group-26 > div > label:nth-child(8) > div.col.ons-layer-name > div > div").should(($d) => {
    t7 = $d.text();
    expect(t7).equal(" Cycling ");
    })

  cy.get("#on-layers-menu-group-26 > div > label:nth-child(9) > div.col.ons-layer-name > div > div").should(($d) => {
    t8 = $d.text();
    expect(t8).equal(" Entertainment event ");
    })

  cy.get("#on-layers-menu-group-26 > div > label:nth-child(10) > div.col.ons-layer-name > div > div").should(($d) => {
    t9 = $d.text();
    expect(t9).equal(" Festival ");
    })

  cy.get("#on-layers-menu-group-26 > div > label:nth-child(11) > div.col.ons-layer-name > div > div").should(($d) => {
    t10= $d.text();
    expect(t10).equal(" Filming ");
    })

  cy.get("#on-layers-menu-group-26 > div > label:nth-child(12) > div.col.ons-layer-name > div > div").should(($d) => {
    t11 = $d.text();
    expect(t11).equal(" Football ");
    })

  cy.get("#on-layers-menu-group-26 > div > label:nth-child(13) > div.col.ons-layer-name > div > div").should(($d) => {
    t12 = $d.text();
    expect(t12).equal(" Funeral ");
    })

  cy.get("#on-layers-menu-group-26 > div > label:nth-child(14) > div.col.ons-layer-name > div > div").should(($d) => {
    t13 = $d.text();
    expect(t13).equal(" Horse racing ");
    })

  cy.get("#on-layers-menu-group-26 > div > label:nth-child(15) > div.col.ons-layer-name > div > div").should(($d) => {
    t14 = $d.text();
    expect(t14).equal(" Market ");
    })

  cy.get("#on-layers-menu-group-26 > div > label:nth-child(16) > div.col.ons-layer-name > div > div").should(($d) => {
    t15 = $d.text();
    expect(t15).equal(" Motor sport event ");
    })

  cy.get("#on-layers-menu-group-26 > div > label:nth-child(17) > div.col.ons-layer-name > div > div").should(($d) => {
    t16 = $d.text();
    expect(t16).equal(" Polling station ");
    })

  cy.get("#on-layers-menu-group-26 > div > label:nth-child(18) > div.col.ons-layer-name > div > div").should(($d) => {
    t17 = $d.text();
    expect(t17).equal(" Queen's Jubilee ");
    })

  cy.get("#on-layers-menu-group-26 > div > label:nth-child(19) > div.col.ons-layer-name > div > div").should(($d) => {
    t18 = $d.text();
    expect(t18).equal(" Remembrance parade ");
    })

  cy.get("#on-layers-menu-group-26 > div > label:nth-child(20) > div.col.ons-layer-name > div > div").should(($d) => {
    t19 = $d.text();
    expect(t19).equal(" Rugby ");
    })

  cy.get("#on-layers-menu-group-26 > div > label:nth-child(21) > div.col.ons-layer-name > div > div").should(($d) => {
    t20 = $d.text();
    expect(t20).equal(" Running ");
    })

  cy.get("#on-layers-menu-group-26 > div > label:nth-child(22) > div.col.ons-layer-name > div > div").should(($d) => {
    t21 = $d.text();
    expect(t21).equal(" Sport event ");
    })

  cy.get("#on-layers-menu-group-26 > div > label:nth-child(23) > div.col.ons-layer-name > div > div").should(($d) => {
    t22 = $d.text();
    expect(t22).equal(" Other ");
    })


  })

  Then("I can see Covid-19 SafeStart restrictions options", () => {
    cy.get("#on-layers-menu-group-41").should("exist");
    cy.wait(1000)

  var t1, t2, t3,t4,t5

  cy.get("#on-layers-menu-group-41 > div > label:nth-child(2) > div.col.ons-layer-name > div > div").should(($d) => {
    t1 = $d.text();
    expect(t1).equal(" Covid-19 protected route ");
    })
  cy.get("#on-layers-menu-group-41 > div > label:nth-child(3) > div.col.ons-layer-name > div > div").should(($d) => {
    t2 = $d.text();
    expect(t2).equal(" Covid-19 road change ");
    })

  cy.get("#on-layers-menu-group-41 > div > label:nth-child(4) > div.col.ons-layer-name > div > div").should(($d) => {
    t3 = $d.text();
    expect(t3).equal(" Covid-19 school street ");
    })

  cy.get("#on-layers-menu-group-41 > div > label:nth-child(5) > div.col.ons-layer-name > div > div").should(($d) => {
    t4 = $d.text();
    expect(t4).equal(" Covid-19 testing station ");
    })

  cy.get("#on-layers-menu-group-41 > div > label:nth-child(6) > div.col.ons-layer-name > div > div").should(($d) => {
    t5 = $d.text();
    expect(t5).equal(" Covid-19 vaccination centre ");
    })

  })

  Then("I can see Roadworks options", () => {
    cy.get("#on-layers-menu-group-24 > div > label > div.col.ons-layer-name > div > div.col-auto > button > i").click({force: true});
    cy.get("#on-layers-menu-group-24").should("exist");
    cy.wait(1000)

  var t1, t2, t3,t4,t5,t6,t7,t8,t9,t10,t11,t12,t13,t14,t15,t16,t17,t18,t19,t20,t21,t22,t23,t24,t25,t26,t27,t28,t29,t30

  cy.get("#ons-g-roadworks > div:nth-child(1) > div.col.ons-legend-text").should(($d) => {
    t1 = $d.text();
    expect(t1).equal(" Local authority ");
    })
  cy.get("#ons-g-roadworks > div:nth-child(2) > div.col.ons-legend-text").should(($d) => {
    t2 = $d.text();
    expect(t2).equal(" Highways England ");
    })

  cy.get("#ons-g-roadworks > div:nth-child(3) > div.col.ons-legend-text").should(($d) => {
    t3 = $d.text();
    expect(t3).equal(" HS2 ");
    })

  cy.get("#ons-g-roadworks > div:nth-child(4) > div.col.ons-legend-text").should(($d) => {
    t4 = $d.text();
    expect(t4).equal(" Electricity ");
    })

  cy.get("#ons-g-roadworks > div:nth-child(5) > div.col.ons-legend-text").should(($d) => {
    t5 = $d.text();
    expect(t5).equal(" Gas ");
    })

  cy.get("#ons-g-roadworks > div:nth-child(6) > div.col.ons-legend-text").should(($d) => {
    t6 = $d.text();
    expect(t6).equal(" Network rail ");
    })

  cy.get("#ons-g-roadworks > div:nth-child(7) > div.col.ons-legend-text").should(($d) => {
    t7 = $d.text();
    expect(t7).equal(" Tram ");
    })

  cy.get("#ons-g-roadworks > div:nth-child(8) > div.col.ons-legend-text").should(($d) => {
    t8 = $d.text();
    expect(t8).equal(" Water ");
    })

  cy.get("#ons-g-roadworks > div:nth-child(9) > div.col.ons-legend-text").should(($d) => {
    t9 = $d.text();
    expect(t9).equal(" Development works ");
    })

  cy.get("#ons-g-roadworks > div:nth-child(10) > div.col.ons-legend-text").should(($d) => {
    t10= $d.text();
    expect(t10).equal(" Minor routine maintenance ");
    })

  cy.get("#ons-g-roadworks > div:nth-child(11) > div.col.ons-legend-text").should(($d) => {
    t11 = $d.text();
    expect(t11).equal(" Works no info ");
    })

  cy.get("#ons-g-roadworks > div:nth-child(12) > div.col.ons-legend-text").should(($d) => {
    t12 = $d.text();
    expect(t12).equal(" Road closure ");
    })

  cy.get("#ons-g-roadworks > div:nth-child(13) > div.col.ons-legend-text").should(($d) => {
    t13 = $d.text();
    expect(t13).equal(" Lane closure ");
    })

  cy.get("#ons-g-roadworks > div:nth-child(14) > div.col.ons-legend-text").should(($d) => {
    t14 = $d.text();
    expect(t14).equal(" Traffic lights ");
    })

  cy.get("#ons-g-roadworks > div:nth-child(15) > div.col.ons-legend-text").should(($d) => {
    t15 = $d.text();
    expect(t15).equal(" Stop go boards ");
    })

  cy.get("#ons-g-roadworks > div:nth-child(16) > div.col.ons-legend-text").should(($d) => {
    t16 = $d.text();
    expect(t16).equal(" Give and take ");
    })

  cy.get("#ons-g-roadworks > div:nth-child(17) > div.col.ons-legend-text").should(($d) => {
    t17 = $d.text();
    expect(t17).equal(" Priority ");
    })

  cy.get("#ons-g-roadworks > div:nth-child(18) > div.col.ons-legend-text").should(($d) => {
    t18 = $d.text();
    expect(t18).equal(" Contraflow ");
    })

  cy.get("#ons-g-roadworks > div:nth-child(19) > div.col.ons-legend-text").should(($d) => {
    t19 = $d.text();
    expect(t19).equal(" Covid-19 related ");
    })

  cy.get("#ons-g-roadworks > div:nth-child(20) > div.col.ons-legend-text").should(($d) => {
    t20 = $d.text();
    expect(t20).equal(" Emergency ");
    })

  cy.get("#ons-g-roadworks > div:nth-child(21) > div.col.ons-legend-text").should(($d) => {
    t21 = $d.text();
    expect(t21).equal(" Skip ");
    })

  cy.get("#ons-g-roadworks > div:nth-child(22) > div.col.ons-legend-text").should(($d) => {
    t22 = $d.text();
    expect(t22).equal(" Scaffolding ");
    })

  cy.get("#ons-g-roadworks > div:nth-child(23) > div.col.ons-legend-text").should(($d) => {
    t23 = $d.text();
    expect(t23).equal(" Materials on highway ");
    })

  cy.get("#ons-g-roadworks > div:nth-child(24) > div.col.ons-legend-text").should(($d) => {

    t24 = $d.text();
    expect(t24).equal(" Crane ");
    })

  cy.get("#ons-g-roadworks > div:nth-child(25) > div.col.ons-legend-text").should(($d) => {
    t25 = $d.text();
    expect(t25).equal(" Hoarding ");
  })

  cy.get("#ons-g-roadworks > div:nth-child(26) > div.col.ons-legend-text").should(($d) => {
    t26 = $d.text();
    expect(t26).equal(" Tables & Chairs ");
  })

  cy.get("#ons-g-roadworks > div:nth-child(27) > div.col.ons-legend-text").should(($d) => {
    t27 = $d.text();
    expect(t27).equal(" Abnormal load ");
  })

  cy.get("#ons-g-roadworks > div:nth-child(28) > div.col.ons-legend-text").should(($d) => {
    t28 = $d.text();
    expect(t28).equal(" Traffic survey equipment ");
  })

  cy.get("#ons-g-roadworks > div:nth-child(29) > div.col.ons-legend-text").should(($d) => {
    t29 = $d.text();
    expect(t29).equal(" Compound ");
  })

  cy.get("#ons-g-roadworks > div:nth-child(30) > div.col.ons-legend-text").should(($d) => {
    t30 = $d.text();
    expect(t30).equal(" Other ");
  })

})

When("The Historic Search page is visible.", () => {
  cy.wait(4000)
  cy.get(".pr-2.truncate > p").should("be.visible").contains("Historic Search User")
})

When("I choose a date in the past", () => {
  cy.get("#ons-quick-picker").click({force: true});
  cy.wait(500)
})

When("I clean the search input", () => {
  cy.get(".ons-tt-input").clear({ force: true })
  cy.wait(500)
})

When("I click on Calendar", () => {
  cy.get(".ons-mdi-calendar-blank").click({ force: true })
})


When("Select a new start and end date in the calendar.", () => {
  cy.get("#ons-datepicker-start > div > ul > li.collapse.show > div > div.datepicker-days > table > tbody > tr:nth-child(2) > td:nth-child(1)").click({ force: true })
  cy.get("#ons-datepicker-end > div > ul > li.collapse.show > div > div.datepicker-days > table > tbody > tr:nth-child(6) > td:nth-child(2)").click({ force: true })
})

Then("I close the calendar", () => {
  cy.get("#ons-dates > div > div.ons-datepicker > div > div:nth-child(1) > div.col-2 > i").click({ force: true })
})


Then("I choose a Start Date", () => {
  cy.get("#ons-datepicker-start > div > ul > li.collapse.show > div > div.datepicker-days > table > tbody > tr:nth-child(2) > td:nth-child(1)").click({ force: true })
})

When("I choose an End Date into the next Month", () => {
  cy.get("#ons-datepicker-end > div > ul > li.collapse.show > div > div.datepicker-days > table > thead > tr:nth-child(1) > th.next > span").click({ force: true })
  cy.get("#ons-datepicker-end > div > ul > li.collapse.show > div > div.datepicker-days > table > tbody > tr:nth-child(5) > td:nth-child(4)").click({ force: true })
})

Then("In the start date, click in the month, between the two arrows.", () => {
  cy.get("#ons-datepicker-start > div > ul > li.collapse.show > div > div.datepicker-days > table > thead > tr:nth-child(1) > th.picker-switch").click({ force: true })
})

Then("I Choose a month and click on it.", () => {
  cy.get("#ons-datepicker-start > div > ul > li.collapse.show > div > div.datepicker-months > table > tbody > tr > td > span:nth-child(3)").click({ force: true })
  cy.wait(500)
  cy.get("#ons-datepicker-start > div > ul > li.collapse.show > div > div.datepicker-days > table > tbody > tr:nth-child(5) > td:nth-child(4)").click({ force: true })
})

Then("In the end date, click again in the month, between the two arrows and click again over the year.", () => {
  cy.get("#ons-datepicker-end > div > ul > li.collapse.show > div > div.datepicker-days > table > thead > tr:nth-child(1) > th.picker-switch").click({ force: true })
  cy.wait(500)
  cy.get("#ons-datepicker-end > div > ul > li.collapse.show > div > div.datepicker-months > table > thead > tr > th.picker-switch").click({ force: true })
})

Then("In the StartDate I choose a diferent year , month , day", () => {
  cy.get("#ons-datepicker-start > div > ul > li.collapse.show > div > div.datepicker-days > table > thead > tr:nth-child(1) > th.picker-switch").click({ force: true })
  cy.wait(500)
  cy.get("#ons-datepicker-start > div > ul > li.collapse.show > div > div.datepicker-months > table > thead > tr > th.picker-switch").click({ force: true })
  cy.wait(500)
  cy.get("#ons-datepicker-start > div > ul > li.collapse.show > div > div.datepicker-years > table > tbody > tr > td > span:nth-child(3)").click({ force: true })
  cy.wait(500)
  cy.get("#ons-datepicker-start > div > ul > li.collapse.show > div > div.datepicker-months > table > tbody > tr > td > span:nth-child(12)").click({ force: true })
  cy.wait(500)
  cy.get("#ons-datepicker-start > div > ul > li.collapse.show > div > div.datepicker-days > table > tbody > tr:nth-child(5) > td:nth-child(5)").click({ force: true })
  cy.wait(500)
})

Then("I select 1 January 2013 in start date.", () => {
  cy.reload()
  cy.wait(4000)
  cy.get(".ons-mdi-calendar-blank").click({ force: true })
  cy.wait(500)
  cy.get("#ons-datepicker-start > div > ul > li.collapse.show > div > div.datepicker-days > table > thead > tr:nth-child(1) > th.picker-switch").click({ force: true })
  cy.wait(500)
  cy.get("#ons-datepicker-start > div > ul > li.collapse.show > div > div.datepicker-months > table > thead > tr > th.picker-switch").click({ force: true })
  cy.wait(500)
  cy.get("#ons-datepicker-start > div > ul > li.collapse.show > div > div.datepicker-years > table > thead > tr > th.prev > span").click({ force: true })
  cy.wait(500)
  cy.get("#ons-datepicker-start > div > ul > li.collapse.show > div > div.datepicker-years > table > tbody > tr > td > span:nth-child(5)").click({ force: true })
  cy.wait(500)
  cy.get("#ons-datepicker-start > div > ul > li.collapse.show > div > div.datepicker-months > table > tbody > tr > td > span:nth-child(1)").click({ force: true })
  cy.wait(500)
  cy.get("#ons-datepicker-start > div > ul > li.collapse.show > div > div.datepicker-days > table > tbody > tr:nth-child(2) > td:nth-child(7)").click({ force: true })
  cy.wait(500)
})

Then ("The error messages is displayed", () => {
  var t1
  cy.get("#message-1 > div.toast-body").should(($d) => {
    t1 = $d.text();
    expect(t1).equal(" Date span cannot be greater than 5 years. ");
    })
})

Then("I Go forward ten years from the current date", () => {
  cy.reload()
  cy.wait(4000)
  cy.get(".ons-mdi-calendar-blank").click({ force: true })
  cy.wait(500)
  cy.get("#ons-datepicker-end > div > ul > li.collapse.show > div > div.datepicker-days > table > thead > tr:nth-child(1) > th.picker-switch").click({ force: true })
  cy.wait(500)
  cy.get("#ons-datepicker-end > div > ul > li.collapse.show > div > div.datepicker-months > table > thead > tr > th.picker-switch").click({ force: true })
  cy.wait(500)
  cy.get("#ons-datepicker-end > div > ul > li.collapse.show > div > div.datepicker-years > table > thead > tr > th.next > span").click({ force: true })
  cy.wait(500)
  cy.get("#ons-datepicker-end > div > ul > li.collapse.show > div > div.datepicker-years > table > tbody > tr > td > span:nth-child(4)").click({ force: true })
  cy.wait(500)
  cy.get("#ons-datepicker-end > div > ul > li.collapse.show > div > div.datepicker-months > table > tbody > tr > td > span:nth-child(5)").click({ force: true })
  cy.wait(500)
  cy.get("#ons-datepicker-end > div > ul > li.collapse.show > div > div.datepicker-days > table > tbody > tr:nth-child(4) > td:nth-child(4)").click({ force: true })
  cy.wait(500)
})

Then ("Click on the Location button", () => {
  cy.get("#ons-search > section > div:nth-child(3) > button").should("exist")
  cy.get("#ons-search > section > div:nth-child(3) > button").click({ force: true })
  cy.wait(500)
})

Then ("I allow to show Location", () => {
  cy.on('window:confirm', (t) => {
  })
  cy.wait(1000)
})

Then ("I deny to show Location", () => {
  cy.on('window:confirm', (t) => {
    return false
  })
  cy.wait(1000)
})

