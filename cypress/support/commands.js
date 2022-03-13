// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
Cypress.Commands.add("view", (video) => {
  function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
  const { name='', url='' } = video;
  const rndInt = randomIntFromInterval(30, 200);
  cy.task('log', 'loading new video');
  cy.visit(url);
  cy.wait(3500)
  cy.task('log', `video loaded => ${name} dutation: ${rndInt}`);
  cy.wait(rndInt * 1000)
  cy.task('log', 'exiting video!')
  cy.wait(1000)
 })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
