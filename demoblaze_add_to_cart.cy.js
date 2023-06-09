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

  cy.get('#cartur').click()
  .wait(2000);

  cy.get('.col-lg-8')
  .contains('Pic').should('be.visible');

  cy.get('thead > tr > :nth-child(2)')
  .contains('Title').should('be.visible')

  cy.get('.success > :nth-child(2)')
  .contains('Sony xperia z5').should('be.visible');

  cy.get('thead > tr > :nth-child(3)')
  .contains('Price').should('be.visible');

  cy.get('.success > :nth-child(3)')
  .contains('320').should('be.visible');

  cy.get('#totalp')
  .contains('320').should('be.visible');

  cy.get('.active > .nav-link').click()
  .wait(2000);

  cy.get('[onclick="byCat(\'notebook\')"]').click()
  .wait(2000);

  cy.get(':nth-child(6) > .card > .card-block > .card-title > .hrefch')
  .contains('MacBook Pro').should('be.visible');

  cy.get(':nth-child(6) > .card > .card-block > .card-title > .hrefch').click();

  cy.get('.col-sm-12 > .btn').click();

  cy.get('#cartur').click()
  .wait(2000);

  cy.get('.col-lg-8')
  .contains('Pic').should('be.visible');

  cy.get('thead > tr > :nth-child(2)')
  .contains('Title').should('be.visible');

  cy.get('thead > tr > :nth-child(3)')
  .contains('Price').should('be.visible');

  cy.get('#totalp')
  .contains('1420').should('be.visible');

  cy.get('.col-lg-1 > .btn').click();

  cy.get('#name').type('test name');

  cy.get('#country').type('test country');

  cy.get('#city').type('test city');

  cy.get('#card').type('77777777777777');

  cy.get('#month').type('07/07/07');

  cy.get('#year').type('7007');

  cy.get('#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
  .wait(2000);

  cy.get('.sweet-alert > h2')
  .contains('Thank you for your purchase').should('be.visible');

  cy.get('.sweet-alert')
  .contains('Id')
  .should('be.visible');

  cy.get('.confirm').click();

  })
})
