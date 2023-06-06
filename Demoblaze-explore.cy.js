describe('template spec', () => {
  it('passes', () => {
       
  cy.visit('https://www.demoblaze.com/index.html')
  cy.viewport(1024, 768)
  .wait(2000);

  cy.get('#cartur').click();

  cy.get('.active > .nav-link').click();


  })
})
