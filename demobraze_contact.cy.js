describe('template spec', () => {
  it('passes', () => {
    
    
  cy.visit('https://www.demoblaze.com/index.html')
  cy.viewport(1024, 768)
  .wait(2000);

  cy.get(':nth-child(2) > .nav-link').click();

  cy.get('#exampleModal > .modal-dialog > .modal-content > .modal-body > form > :nth-child(1) > .form-control-label')
  .contains('Contact Email:').should('be.visible');

  cy.get('#recipient-email').wait(2000)
  .type('testmail@email.com');

  cy.get('#exampleModal > .modal-dialog > .modal-content > .modal-body > form > :nth-child(2) > .form-control-label')
  .contains('Contact Name:').should('be.visible');

  cy.get('#recipient-name').type('name test');

  cy.get('#exampleModal > .modal-dialog > .modal-content > .modal-body > form > :nth-child(3) > .form-control-label')
  .contains('Message:').should('be.visible');
  
  cy.get('#message-text').type('i would like to test');

  cy.get('#exampleModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();

  })
})
