/* eslint @typescript-eslint/no-var-requires: "off" */
// cypress/plugins/index.ts
/// <reference types="cypress" />

const browserify = require("@cypress/browserify-preprocessor")
const cucumber = require("cypress-cucumber-preprocessor").default
const resolve = require("resolve")
const getCompareSnapshotsPlugin = require("cypress-visual-regression/dist/plugin")

module.exports = (on: Cypress.PluginEvents, config: Cypress.PluginConfigOptions) => {
  if (!config.baseUrl) {
    throw "You need to specify the baseUrl"
  }

  config.env.API_NEAREST_URL = config.baseUrl.replace("//", "//api-nearest.")

  const options = {
    ...browserify.defaultOptions,
    typescript: resolve.sync("typescript", { baseDir: config.projectRoot }),
  }

  on('task', {
    log (message) {
      console.log(message)
      return null
    }
  })

  on("file:preprocessor", cucumber(options))

  getCompareSnapshotsPlugin(on, config)

  return config
}
