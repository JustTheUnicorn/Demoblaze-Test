describe('template spec', () => {
  it('passes', () => {
    
    
  cy.visit('https://www.demoblaze.com/index.html')
  cy.viewport(1024, 768)
  .wait(2000);

  cy.get('#cartur').click();

  cy.get('.active > .nav-link').click()
  .wait(2000)
  cy.get('[onclick="byCat(\'phone\')"]').click();

  cy.get('.active > .nav-link').click()
  .wait(2000)
  cy.get('[onclick="byCat(\'notebook\')"]').click();

  cy.get('.carousel-control-next').click();

  cy.get('#fotcont > :nth-child(1)').contains('About Us').should('be.visible');

  cy.get('.col-sm-3').contains('Get in Touch').should('be.visible');

  })
})
