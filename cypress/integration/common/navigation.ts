import { Given, Then } from "cypress-cucumber-preprocessor/steps"
import { WaitStrategy, Page, getPageByName, getPageByPath } from "./pages"

function waitForPageToLoad(page: Page): Cypress.Chainable<Cypress.AUTWindow> {
  return cy.wrap(
    new Promise<Cypress.AUTWindow>((resolve) => {
      const queue: Array<WaitStrategy> = page.waitStrategies.slice()

      function nextWait(): void {
        if (queue.length > 0) {
          const waitStrategy = queue.shift()

          switch (waitStrategy) {
            case WaitStrategy.PRELOADER:
              cy.get("#on-preloader", { timeout: 15000 }).should("exist")
              cy.get("#on-preloader", { timeout: 30000 }).should("not.exist")
              break
            case WaitStrategy.ELEMENT_IS_FOCUSED:
              if (!page.waitForElement) {
                throw "You need to specify a selector"
              }

              cy.get(page.waitForElement).should("be.focused")
              break
            case WaitStrategy.SHORT_WAIT:
              // eslint-disable-next-line cypress/no-unnecessary-waiting
              cy.wait(500)
              break
            case WaitStrategy.NONE:
              break
          }

          nextWait()
        } else {
          cy.window().then(resolve)
        }
      }

      nextWait()
    }),
  )
}

export function getCurrentPage(): Cypress.Chainable<Page> {
  return cy.url().then((url) => getPageByPath(url))
}

export function waitForCurrentPageToLoad(): Cypress.Chainable<Cypress.AUTWindow> {
  return getCurrentPage().then((page) => waitForPageToLoad(page))
}

export function navigateToPageByName(pageName: string): Cypress.Chainable<Cypress.AUTWindow> {
  return navigateToPage(getPageByName(pageName))
}

export function navigateToPageByPath(path: string): Cypress.Chainable<Cypress.AUTWindow> {
  return navigateToPage(getPageByPath(path))
}

export function navigateToPage(page: Page): Cypress.Chainable<Cypress.AUTWindow> {
  cy.visit(page.paths[0])
  return waitForPageToLoad(page)
}

Given("I'm in the {string} page", (pageName) => {
  cy.intercept("GET", "/services/slides?lang=*").as("network")

  navigateToPageByName(pageName)
})

Then("I should be in the {string} page", (pageName) => {
  const page = getPageByName(pageName)
  const paths = page.paths.map((p) => Cypress.config().baseUrl + p)

  cy.url({ timeout: 15000 }).should("be.oneOf", paths)

  waitForPageToLoad(page)
})
