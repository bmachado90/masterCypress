import { Given, Then, When } from "cypress-cucumber-preprocessor/steps"
interface IsMobileCallback {
  (mobile: boolean): void
}

function getUserPassword(username: string): Cypress.Chainable<string> {
  cy.log("TESTE", username);
  return cy.fixture("users.json").its(username).its("password")
}

function checkIfIsMobile(cb: IsMobileCallback): void {
  cy.get(".ons-mobile-menu-toggle").then((menuToggle) => {
    cb(menuToggle.is(":visible"))
  })
}

function inputUserCredentialsAndWait(username: string): void {
  getUserPassword(username).then((password) => {
    inputCredentialsAndWait(username, password)
  })
}

function inputUserCredentials(username: string): void {
  getUserPassword(username).then((password) => {
    inputCredentialsNotClick(username, password)
  })
}

function inputCredentialsAndWait(username: string, password: string): void {
  inputCredentials(username, password)
  cy.wait("@signin")

}
function inputhcdCredentialsAndWait(username: string, password: string): void
{
  inputCredentials(username, password)
  cy.wait(6000)

}

function inputhcdUserCredentialsAndWait(username: string): void {
  getUserPassword(username).then((password) => {
    inputhcdCredentialsAndWait(username, password)
  })
}

function inputCredentials(username: string, password: string): void {
  cy.intercept("POST", Cypress.env("API_NEAREST_URL")).as("signin")

  cy.get("#j_username").clear()
  if (username) {
    cy.get("#j_username").type(username)
  }
  cy.get("#j_password").clear()
  if (password) {
    cy.get("#j_password").type(password)
  }
  cy.get("button[type=submit]").click()
}

function inputCredentialsNotClick(username: string, password: string): void {
  cy.intercept("POST", Cypress.env("API_NEAREST_URL")).as("signin")

  cy.get("#j_username").clear()
  if (username) {
    cy.get("#j_username").type(username)
  }
  cy.get("#j_password").clear()
  if (password) {
    cy.get("#j_password").type(password)
  }
}

When("I attempt to sign in with username {string} and no password", (username) => {
  inputCredentials(username, "")
})

When("I attempt to sign in with no username and password {string}", (password) => {
  inputCredentials("", password)
})

When("I attempt to sign in with username {string} and password {string}", (username,password) => {
  inputCredentials(username, password)
})

When("I attempt to sign in with no credentials", () => {
  inputCredentials("", "")
})

Then("I should be signed in as {string}", (username) => {
  cy.window()
    .should("have.deep.nested.property", "appsContext.user.username")
    .should("eq", username)
})

When("I attempt to sign in with username {string} and password {string}", (username, password) => {
  inputCredentialsAndWait(username, password)
})

Then("I should see the Sign in button", () => {
  checkIfIsMobile((mobile) => {
    if (mobile) {
      cy.get(".ons-mobile-menu-toggle").click()
      cy.get("#on-mobile-menu-container")
        .should("be.visible")
        .find('a[href="/accounts/#sign-in"]')
        .should("be.visible")
    } else {
      cy.get("#on-sign-in").should("be.visible")
    }
  })
})

When("I click the sign out button", () => {
  checkIfIsMobile((mobile) => {
    if (mobile) {
      cy.get("#userMenuButton").click()
      cy.get('.dropdown-menu[aria-labelledby="userMenuButton"]')
        .should("be.visible")
        .find(".dropdown-item")
        .contains("Sign out")
        .click()
    } else {
      cy.get("#userMenuButton").click()
      cy.get('.dropdown-menu[aria-labelledby="userMenuButton"]')
        .should("be.visible")
        .find(".dropdown-item")
        .contains("Sign out")
        .click()
    }
  })
})

When("I input {string} credentials and sign in", (username) => {
  inputUserCredentialsAndWait(username)
})

When("I insert {string} credentials but not sign in", (username) => {
  inputUserCredentials(username)
})

When("I input hcd {string} credentials and sign in", (username) => {
  inputhcdUserCredentialsAndWait(username)
})
Given("I'm not signed in", () => {
  cy.window().then((win) => {
    const currentUser = win.appsContext && win.appsContext.user && win.appsContext.user.username

    if (currentUser) {
      cy.clearCookies()
      cy.reload()
    }
  })
})

When("I click the Sign in button", () => {
  checkIfIsMobile((mobile) => {
    if (mobile) {
      cy.get(".ons-mobile-menu-toggle").click({ force: true })
      cy.get("#on-mobile-menu-container").should("be.visible").find('a[href="/accounts/#sign-in"]').click()
    } else {
      cy.get("#on-sign-in").click({ force: true })
    }
  })
})

When("The eye to toggle the visibility is present.", () => {
  cy.get(".ons-mdi-eye-off").should("be.visible")
})

When("I click the eye to toggle the visibility", () => {
  cy.get(".ons-mdi-eye-off").should("be.visible").click()
})

When("The password field is masked", () => {
  cy.get("#j_password").invoke('attr', 'type').should('eq','password')
})

When("The password field is visible.", () => {
  cy.get("#j_password").invoke('attr', 'type').should('eq','text')
})

When("the public page is visible.", () => {
  cy.wait(4000)
  cy.get(".pr-2.truncate > p").should("be.visible").contains("Public User")
})

When("the right panel button is visible", () => {
  cy.get(".ons-mdi-arrow-left").should("exist", { force: true })
})

When("I click on right panel button", () => {
  cy.get(".ons-mdi-arrow-left").should("exist").click({ force: true });
})

When("Expand the right hand panel and show the advertising slider.", () => {
  cy.get("div.carousel-item.active").should("exist").click({ force: true });
})

Given("I'm signed in as {string}", (username) => {
  cy.window().then((win) => {
    const currentUser = win.appsContext && win.appsContext.user && win.appsContext.user.username

    if (currentUser === username) {
      console.debug("Already logged in as " + currentUser)
      return
    } else if (currentUser) {
      cy.clearCookies()
    }

    getUserPassword(username).then((password) => {
      cy.request({
        method: "POST",
        url: Cypress.env("API_NEAREST_URL"),
        form: true,
        body: {
          j_username: username,
          j_password: password,
        },
      }).then((response) => {
        expect(response.status).to.eq(200)
        expect(response.body).to.have.property("redirectTo")

        cy.reload()
      })
    })
  })
})
