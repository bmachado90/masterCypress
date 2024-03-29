// TODO remove after https://github.com/mjhea0/cypress-visual-regression/pull/87 is merged

declare global {
  namespace Cypress {
    interface Chainable {
      compareSnapshot(name: string): void
      compareSnapshot(name: string, errorThreshold?: number): void
      compareSnapshot(name: string, options?: Partial<Cypress.ScreenshotDefaultsOptions>): void
    }
  }
}

export default function compareSnapshotCommand(
  options?: Partial<Cypress.ScreenshotDefaultsOptions>,
): void
