/* eslint @typescript-eslint/no-var-requires: "off" */
// cypress/plugins/index.ts
/// <reference types="cypress" />

const compareSnapshotCommand = require("cypress-visual-regression/dist/command")
import { beforeCompareSnapshotCommand } from "./commands/beforeCompareSnapshotCommand"

compareSnapshotCommand()

// to hide elements before taking the screenshot
beforeCompareSnapshotCommand()
