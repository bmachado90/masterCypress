import { Then, When } from "cypress-cucumber-preprocessor/steps"

function getGoogleMap(): Cypress.Chainable<google.maps.Map> {
  return cy.window().its("Elgin.map").should("not.be.null")
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

function isMarkerVisible(map: google.maps.Map, marker: google.maps.Marker): boolean {
  const markerPos = marker.getPosition()
  const mapBounds = map.getBounds()

  if (!mapBounds || !markerPos) {
    return false
  }

  return mapBounds.contains(markerPos)
}

function getVisibleMarkers(win: Cypress.ApplicationWindow): Array<google.maps.Marker> {
  const Elgin = win.Elgin

  if (!Elgin) {
    return []
  }

  const activeLayers = Elgin.App.Layers.getActiveLayers()
  const map = Elgin.map

  if (!map) {
    return []
  }

  return activeLayers
    .map((layerName) => Elgin.App.Features.getFeatures(layerName) || [])
    .reduce((acc, features: Array<Cypress.MapFeature>) => {
      features
        .filter((f): f is Cypress.MapFeatureWithMarker => f.gFeature !== undefined)
        .filter((f) => f.type === "Point")
        .filter((f) => isMarkerVisible(map, f.gFeature))
        .forEach((f) => acc.push(f.gFeature))

      return acc
    }, [] as Array<google.maps.Marker>)
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

Then("the map should be centered on {string}", (placeName) => {
  getGoogleMap()
    .invoke("getCenter")
    .invoke("toJSON")
    .should("not.be.null")
    .then((coords) => {
      cy.fixture("lonlat.json")
        .its(placeName)
        .then((placeCoords) => {
          expect(coords.lat).be.closeTo(placeCoords.latitude, 0.00001)
          expect(coords.lng).be.closeTo(placeCoords.longitude, 0.00001)

          cy.log("coordenadas LAT COORD" + coords.lat)
          cy.log("coordenadas LOG COORD" + coords.lng)

          cy.log("coordenadas LAT" + placeCoords.latitude)
          cy.log("coordenadas LOG" + placeCoords.longitude)
        })

    })
})

Then("after the Login the map should be centered on {string}", (placeName) => {
  getGoogleMap()
    .invoke("getCenter")
    .invoke("toJSON")
    .should("not.be.null")
    .then((coords) => {
      cy.log("AFTER THE LOGIN")
      cy.fixture("lonlat.json")
        .its(placeName)
        .then((placeCoords) => {
          expect(coords.lat).be.closeTo(placeCoords.latitude, 2.0000)
          expect(coords.lng).be.closeTo(placeCoords.longitude, 2.00000)

          cy.log("coordenadas LAT COORD" + coords.lat)
          cy.log("coordenadas LOG COORD" + coords.lng)

          cy.log("coordenadas LAT" + placeCoords.latitude)
          cy.log("coordenadas LOG" + placeCoords.longitude)
        })

    })
})


When("I pan the map to coordinate {float},{float}", (latitude, longitude) => {
  doAndWaitForMapEvent("center_changed", (map) => map.panTo({ lat: latitude, lng: longitude }))
})

When("I pan the map to address {string}", (address) => {
  cy.wait(2000)
  cy.fixture("lonlat.json")
    .its(address)
    .then((position) =>
      doAndWaitForMapEvent("center_changed", (map) =>
        map.panTo({ lat: position.latitude, lng: position.longitude }),
      ),
    )
})

When("I set the map's zoom level to {int}", (zoomLevel) => {
  doAndWaitForMapEvent("zoom_changed", (map) => map.setZoom(zoomLevel))
})

Then("the map should be visible", () => {
  getGoogleMap().invoke("getDiv").should("be.visible")
})

Then("the map's position should be {float},{float}", (latitude, longitude) => {
  getGoogleMap()
    .invoke("getCenter")
    .invoke("toJSON")
    .should("not.be.null")
    .then((coords) => {
      expect(coords.lat).be.closeTo(latitude, 0.00001)
      expect(coords.lng).be.closeTo(longitude, 0.00001)

    })
})

Then("the map's zoom level should be {int}", (zoomLevel) => {
  getGoogleMap().invoke("getZoom").should("eq", zoomLevel)
})

Then("there should be markers on the map", () => {
  cy.window().should((win) => expect(getVisibleMarkers(win)).to.not.be.empty)
})

Then("there should be no markers on the map", () => {
  cy.window().should((win) => expect(getVisibleMarkers(win)).to.be.empty)
})

Then("I click on the marker", () => {
  cy.get(
    '[style="cursor: pointer; position: absolute; top: -25px; left: 2px; width: 46px; height: 46px;"] > img',
  ).click({ force: true })
})

Then("I expand the marker", () => {
  cy.get(
    '[style="z-index: 3; position: absolute; height: 100%; width: 100%; padding: 0px; border-width: 0px; margin: 0px; left: 0px; top: 0px; touch-action: pan-x pan-y;"]',
  ).click({ force: true })
})

When("I position the map over a random marker", () => {
  // eslint-disable-next-line cypress/no-unnecessary-waiting
  cy.window()
    .then((win) => getVisibleMarkers(win))
    .then((markers) => markers[0])
    .then((marker) => marker.getPosition() as google.maps.LatLng)
    .then((position) => {
      doAndWaitForMapEvent("center_changed", (map) => {
        map.panTo(position.toJSON())
      }).then(() => {
        doAndWaitForMapEvent("center_changed", (map) => {
          map.panBy(0, -0.02)
        })
      })
    })
    .then(() => {
      doAndWaitForMapEvent("zoom_changed", (map) => map.setZoom(21)).wait(1000)
    })
})

When("I click the center of the map", () => {
  cy.wait(3000)
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

Then("the callout should open", () => {
  cy.get(".rwCallout_content",{ timeout: 30000 }).should("exist")
})

Then("the callout title is displayed", () => {
  cy.get(".rwCallout_header > h1").should("exist")
})

Then("the callout header details is displayed", () => {
  cy.get(".ons-callout-header-details").should("exist")
})

Then("the callout info is displayed", () => {
  cy.get("#info-road-users-name > .rwCallout_info").should("exist")
})

Then("the callout label details is displayed", () => {
  cy.get("#info-road-users-name > .rwCallout_label").should("exist")
})

Then("the callout info image is displayed", () => {
  cy.get(".rwCallout_info > img").should("exist")
})

Then("the callout Callout_icon is displayed", () => {
  cy.get(".rwCallout_icon").should("exist")
})

Then("the callout Callout_icon is displayed", () => {
  cy.get(".rwCallout_icon").should("exist")
})

Then("I visiit {string}", (url) => {
  cy.visit(url)
})

Then("abro o callout", () => {
  cy.get(".rwCallout_mainWrapper")
        .should("exist", { force: true })
  cy.wait(1000)
})


