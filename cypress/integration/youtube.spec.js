/* ==== Test Created with Cypress Studio ==== */

it('youtest', function () {
  cy.task('log', 'Running youtube test!');
  [
    {
      name: 'philips juicer',
      url: 'https://www.youtube.com/watch?v=zNBOIqbwZkg'
    },
    {
      name: 'Egg Fried Rice ',
      url: 'https://www.youtube.com/watch?v=CemNc6f6q8g'
    },
    {
      name: 'Ragi Dosa with coconut chutney',
      url: 'https://www.youtube.com/watch?v=Zw1ayPh1nRA'
    },
    {
      name: 'Pondicherry 2022',
      url: 'https://www.youtube.com/watch?v=473SW-oDddk'
    },
    {
      name: 'Easy Quick Pineapple Grill',
      url: 'https://www.youtube.com/watch?v=YZQ-6DdZ_e8'
    },
    {
      name: 'Dosa pindi punugulu ',
      url: 'https://www.youtube.com/watch?v=waIZbwkMGqk'
    },
    {
      name: 'Peanut banana smoothie',
      url: 'https://www.youtube.com/watch?v=u86-tv5mvC0'
    },
    {
      name: 'Oats Strawberry cake',
      url: 'https://www.youtube.com/watch?v=1g2gpXmcPBg'
    },
    {
      name: 'Watermelon mocktail',
      url: 'https://www.youtube.com/watch?v=qgunsWGo6L0'
    },
    {
      name: 'Bottle Gourd Akki Roti',
      url: 'https://www.youtube.com/watch?v=P8iJWu697nE'
    },
    {
      name: 'Healthy Ragi Laddu',
      url: 'https://www.youtube.com/watch?v=vRjHUYbT-hI'
    },
    {
      name: 'Saggubiyyam upma',
      url: 'https://www.youtube.com/watch?v=qKl1DNvxtb4'
    },
    {
      name: 'Homemade Samosa',
      url: 'https://www.youtube.com/watch?v=Zk07h2JaSyg'
    },
    {
      name: 'Jucker farm',
      url: 'https://www.youtube.com/watch?v=s9LVzhV49s8'
    }
  ].forEach(video => cy.view(video));

});

// it('youtest', function () {
//   cy.task('log', 'Running youtube test!');
/* ==== Generated with Cypress Studio ==== */
//   cy.visit('https://www.youtube.com/channel/UCYENu_O0VXQ_a2YH88CKyAg');
//   cy.task('log', 'loaded page');
//   cy.get(':nth-child(6) > .tab-content').click()
//   cy.task('log', 'clicked on playlist tab');
//   cy.get(':nth-child(2) > h3.style-scope > #video-title').click();
//   // cy.get(':nth-child(2) > .yt-simple-endpoint > .style-grey-text > #button > .ytd-toggle-button-renderer').click();
//   cy.task('log', 'clicked on playlist item');
//  // cy.get('.ytp-mute-button').click();
//  // cy.task('log', 'clicked on mute');
// //   cy.get('.ytp-settings-button').click();
// //   cy.task('log', 'clicked on settings toggle in');
// //   cy.get(':nth-child(2) > .ytp-menuitem-content').click();
// //   cy.get(':nth-child(8) > .ytp-menuitem-label').click();
// //   cy.task('log', 'clicked on fast x2');
// //   cy.get('.ytp-settings-button').click();
// //   cy.task('log', 'clicked on settings toggle out');
//   cy.wait(40 * 60 * 1000)
//   cy.task('log', 'exiting youtube!')
//   cy.wait(1000)
/* ==== End Cypress Studio ==== */
// });

it('end test', function () {
  cy.task('log', 'test ends');
})
