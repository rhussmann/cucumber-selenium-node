# selenium-cucumber-example

Borrowed heavily from https://github.com/Matt-B/cucumber-js-selenium-webdriver-example

## Running
```
npm install
npm test
```

## Project Structure
### features/
This is where all the content exists. Gherkin files live in this folder, with
a `.featue` extension.

### features/step_definitions/
Contains the _glue_ used to convert Gherkin features into actual test cases.

### features/support/
Contains the `world.js` file, specific to `selenium-webdriver`. Sets up the
browser configuration. This would be a good place to configure the browser
being run.
