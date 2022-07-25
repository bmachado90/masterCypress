# README

This repository stores the end-to-end regression tests for the one.network product.

It uses modern languages, tools, and libraries that are well-known in the testing world:

- [TypeScript](https://www.typescriptlang.org/): All the power of JavaScript, with the safety of types
- [Cypress](https://www.cypress.io/): End-to-end testing platform
- [Cucumber](https://cucumber.io/): To write tests based on the expected behaviour of the platform

This repository encourages [Behaviour-Driven Development (BDD)](https://cucumber.io/docs/bdd/), supported by [Cucumber](https://cucumber.io/docs/guides/overview/).

This means that all the tests are written as features documents, using a special syntax called [Gherkin](https://cucumber.io/docs/guides/overview/#what-is-gherkin).
Despite the scary name, it's actually pretty easy, and it allows us to bridge the gap between business people (Product, QA) and technical people.

Cucumber reads the feature documents, searches for the [Step Definition](https://cucumber.io/docs/guides/overview/#what-are-step-definitions) of each step, and builds a Cypress test execution on-the-fly based on these.

The basic workflow is:

1. Testers, product owners and developers write and maintain feature documents in English, using the Gherkin syntax, matching the acceptance criteria of user stories
    - New feature documents can reuse existing steps, or introduce new ones
2. Developers implement Step Definitions in TypeScript
    - This is the code that acts as glue between each step and cypress
    - Each step definition is unique and independent - it cannot depend on order of execution or any other steps
3. When implementing new Step Definitions, the developer may need to change the way a step is phrased, to make it more explicit and unique
    - Which should be done in collaboration with the person that wrote the feature document

We believe this is a workflow that allows everyone on the team to collaborate and contribute to a rich and useful suite of tests.

## Development environment

[Visual Studio Code](https://code.visualstudio.com/) is the recommended code editor, because:

- It's free;
- Available in Windows, Linux and macOS;
- Supports TypeScript;
- Great extensions for Cypress and Cucumber;
- This project already includes all the configurations for a productive environment.

IntelliJ WebStorm, or IDEA Ultimate, are also good choices, but are paid, so you're on your own!

### Visual Studio Code

Start by downloading and installing Visual Studio Code in your machine.

Then install the following extensions:

- [Cucumber (Gherkin) Full Support](https://marketplace.visualstudio.com/items?itemName=alexkrechik.cucumberautocomplete)
- [Cypress Fixture-IntelliSense](https://marketplace.visualstudio.com/items?itemName=JosefBiehler.cypress-fixture-intellisense)
- [npm](https://marketplace.visualstudio.com/items?itemName=eg2.vscode-npm-script)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)

## Using npm

If you are using a system where the Bash shell is available (Linux, Mac, WSL), then use the included `./nvmw` script to ensure you are running the project with a supported node.js version.
It's easy to use, just prepend it to every `npm` command, like so:

```shell
./nvmw npm install
./nvmw npm run cypress:open
```

If you're on Windows, you should use [nvm-windows](https://github.com/coreybutler/nvm-windows), a node version manager:

1. Check the file `.nvmrc` for the node version that this project uses.
2. Install that node version using `nvm install <NODE_VERSION>`
3. Force Windows to use that version by running `nvm use <NODE_VERSION>` in the terminal window where you'll be running the project.

## Running the tests

Start by running `npm install`:

    npm install

Then you can open the Cypress Test Runner to execute the tests, and see them running:

    npm run cypress:open

You can also run the tests in headless mode:

    npm test

This repository also contains a `Jenkinsfile`, so tests will run in [Jenkins](https://ci.elgintech.com/job/one-network%20(Github)/job/end2endtests-cypress/job/master/). See the file to learn exactly what is being executed.

## Writing new tests

Feature documents must go into the `cypress/integration` folder, with the `.feature` extension. The plugins in VS Code should provide syntax highlighting and step completion, making the writing of such documents easier.

Step definitions that are meant to be used by any feature, must go into the `cypress/integration/common/` folder, with the `.ts` (TypeScript) extension.

Step definitions that are specific to one feature (`name_of_the_feature.feature`), must go into the `cypress/integration/{name_of_the_feature}/` folder, with the `.ts` (TypeScript) extension.

You can open the Cypress Test Runner (`npm run cypress:open`) to see the tests being executed every time you save a feature document.

You can tag the feature you're working on with `@focus`, and [Cucumber will execute only that feature](https://github.com/TheBrainFamily/cypress-cucumber-preprocessor#smart-tagging).
