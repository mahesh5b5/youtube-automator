/* ==== Test Created with Cypress Studio ==== */
it('youtest', function() {
  /* ==== Generated with Cypress Studio ==== */
  cy.visit('https://www.youtube.com/channel/UCYENu_O0VXQ_a2YH88CKyAg');
  cy.get(':nth-child(6) > .tab-content').click()
  cy.get(':nth-child(2) > h3.style-scope > #video-title').click();
  cy.get(':nth-child(2) > .yt-simple-endpoint > .style-grey-text > #button > .ytd-toggle-button-renderer').click();
  cy.get('.ytp-mute-button').click();
  cy.get('.ytp-settings-button').click();
  cy.get(':nth-child(2) > .ytp-menuitem-content').click();
  cy.get(':nth-child(8) > .ytp-menuitem-label').click();
  cy.pause(15 * 60 * 1000);
  cy.wait(15 * 60 * 1000);
  /* ==== End Cypress Studio ==== */
});