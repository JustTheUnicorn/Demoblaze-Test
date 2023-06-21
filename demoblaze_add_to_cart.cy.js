describe('template spec', () => {
  it('passes', () => {

  cy.visit('https://www.demoblaze.com/index.html')
  cy.viewport(1024, 768)
  .wait(2000);

  cy.get(':nth-child(6) > .card > .card-block > .card-title > .hrefch')
  .contains('Sony xperia z5').should('be.visible')
  .click();

  cy.get('.col-sm-12 > .btn').click()
  .wait(2000);

  cy.get('#cartur').click();

  cy.get('.active > .nav-link').click();

  cy.get('[onclick="byCat(\'notebook\')"]').click();

  cy.get(':nth-child(6) > .card > .card-block > .card-title > .hrefch')
  .contains('MacBook Pro').should('be.visible');

  })
})
