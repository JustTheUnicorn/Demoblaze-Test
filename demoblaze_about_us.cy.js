describe('template spec', () => {
  it('passes', () => {
    
    
  cy.visit('https://www.demoblaze.com/index.html')
  cy.viewport(1024, 768)
  .wait(2000);

  cy.get(':nth-child(3) > .nav-link').click();

  cy.get('#videoModalLabel')
  .contains('About us').should('be.visible');

  cy.get('#videoModal > .modal-dialog > .modal-content > .modal-header > .close > span')
  .should('be.visible');

  cy.get('#videoModal > .modal-dialog > .modal-content > .modal-footer > .btn')
  .should('be.visible');
  
  })
})
