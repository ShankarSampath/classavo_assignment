# classavo_assignment

Basic Cypress tests using Page Object Model and JSON test data.

## What this covers
- Successful login -> join course -> dashboard (shows "Start Course")
- Invalid join (bad course code/password) shows an error
- "Start Course" is not visible before joining
- Edge case: login with unverified email blocks actions

## How to run
1. Update `cypress.config.js` baseUrl to your app URL.
2. Update selectors in `pageObjects` to match your app.
3. `npm i`
4. `npx cypress open` (GUI) or `npx cypress run` (headless).

## Notes
- Uses fixtures (`cypress/fixtures/*.json`) for users and course data.
- Keep it simple: no complex framework, only POM + JSON.
- I mainly work with Python/Pytest; this repo shows I'm learning Cypress with best practices.
