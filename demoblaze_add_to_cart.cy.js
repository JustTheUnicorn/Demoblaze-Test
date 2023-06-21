describe('template spec', () => {
  it('passes', () => {
    
    
  cy.visit('https://www.demoblaze.com/index.html')
  cy.viewport(1024, 768)
  .wait(2000);

  cy.get(':nth-child(6) > .card > .card-block > .card-title > .hrefch')
  .contains('Sony xperia z5').should('be.visible')
  .click();

  cy.get('.col-sm-12 > .btn').click();

  cy.get('#cartur').click();

  })
})
