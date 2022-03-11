/* ==== Test Created with Cypress Studio ==== */
it('youtest', function () {
  cy.task('log', 'Running youtube test!');
  /* ==== Generated with Cypress Studio ==== */
  cy.visit('https://www.youtube.com/channel/UCYENu_O0VXQ_a2YH88CKyAg');
  cy.task('log', 'loaded page');
  cy.get(':nth-child(6) > .tab-content').click()
  cy.task('log', 'clicked on playlist tab');
  cy.get(':nth-child(2) > h3.style-scope > #video-title').click();
  // cy.get(':nth-child(2) > .yt-simple-endpoint > .style-grey-text > #button > .ytd-toggle-button-renderer').click();
  cy.task('log', 'clicked on playlist item');
  cy.get('.ytp-mute-button').click();
  cy.task('log', 'clicked on mute');
  cy.get('.ytp-settings-button').click();
  cy.task('log', 'clicked on settings toggle in');
  cy.get(':nth-child(2) > .ytp-menuitem-content').click();
  cy.get(':nth-child(8) > .ytp-menuitem-label').click();
  cy.task('log', 'clicked on fast x2');
  cy.get('.ytp-settings-button').click();
  cy.task('log', 'clicked on settings toggle out');
  cy.wait(30 * 60 * 1000)
  cy.task('log', 'exiting youtube!')
  cy.wait(1000)
  /* ==== End Cypress Studio ==== */
});

it('end test', function () {
  cy.task('log','test ends');
})
