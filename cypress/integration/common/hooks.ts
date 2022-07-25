import { Before } from "cypress-cucumber-preprocessor/steps"
import { HOME } from "./pages"
import { navigateToPage } from "./navigation"

Before(() => {
  navigateToPage(HOME)
})
