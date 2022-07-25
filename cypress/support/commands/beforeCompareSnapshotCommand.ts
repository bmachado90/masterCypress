export function beforeCompareSnapshotCommand(): void {
  const ignoredElementsQuerySelector = "#map-canvas"

  Cypress.Commands.overwrite("compareSnapshot", (originalFn, ...args) => {
    return cy
      .get("body")
      .then(($app) => {
        Cypress.$.each($app.find(ignoredElementsQuerySelector), (index, elmToHide) => {
          const elm = Cypress.$(elmToHide)

          elm.attr("old-visibility", elm.css("visibility"))
          elm.css("visibility", "hidden")
        })

        return new Cypress.Promise((resolve) => {
          setTimeout(() => resolve(), 1000)
        })
      })
      .then(() => {
        return originalFn(...args)
      })
      .then((result) => {
        return cy
          .get("body")
          .then(($app) => {
            Cypress.$.each($app.find(ignoredElementsQuerySelector), (index, elmToHide) => {
              const elm = Cypress.$(elmToHide)
              const oldVisibility: string = elm.attr("old-visibility") || "auto"

              elm.css("visibility", oldVisibility)
            })
          })
          .then(() => result)
      })
  })
}
