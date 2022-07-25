export enum WaitStrategy {
  PRELOADER = 1,
  ELEMENT_IS_FOCUSED,
  SHORT_WAIT,
  NONE,
}

export interface Page {
  name: string
  paths: ReadonlyArray<string>
  waitStrategies: ReadonlyArray<WaitStrategy>
  waitForElement?: string
}

export const BLANK: Page = {
  name: "Blank page",
  paths: ["about:blank"],
  waitStrategies: [WaitStrategy.NONE],
} as const

export const HOME: Page = {
  name: "Home",
  paths: ["/"],
  waitStrategies: [WaitStrategy.PRELOADER],
} as const

export const SIGN_IN: Page = {
  name: "Sign in",
  paths: ["/accounts/#sign-in", "/accounts/#sign-in/%23sign-in"],
  waitStrategies: [WaitStrategy.ELEMENT_IS_FOCUSED],
  waitForElement: "#j_username",
} as const

export const TM: Page = {
  name: "TM",
  paths: ["/tm"],
  waitStrategies: [WaitStrategy.PRELOADER],
} as const

export const CM: Page = {
  name: "CM",
  paths: ["/cm"],
  waitStrategies: [WaitStrategy.PRELOADER],
} as const

export const CAC: Page = {
  name: "CAC",
  paths: ["/cac"],
  waitStrategies: [WaitStrategy.PRELOADER],
} as const

export const RM: Page = {
  name: "Route_manager",
  paths: ["/route-manager"],
  waitStrategies: [WaitStrategy.PRELOADER],
} as const

export const RP: Page = {
  name: "Report",
  paths: ["/report"],
  waitStrategies: [WaitStrategy.PRELOADER],
} as const

const ALL_PAGES: ReadonlyArray<Page> = [BLANK, HOME, SIGN_IN, TM, CM,CAC,RM,RP] as const

export function getPageByName(pageName: string): Page {
  const page = ALL_PAGES.find((p) => p.name.toLowerCase() == pageName.toLowerCase())

  if (!page) {
    throw "Unknown page name: " + pageName
  }

  return page
}

export function getPageByPath(path: string): Page {
  const relPath = path.toLowerCase().replace("" + Cypress.config().baseUrl, "")
  const page = ALL_PAGES.find((p) => p.paths.includes(relPath))

  if (!page) {
    throw "Unknown page path: " + path
  }

  return page
}
