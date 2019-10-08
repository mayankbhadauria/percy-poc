describe('Integration test with visual testing', function() {
  beforeEach(function() {
    cy.visit('localhost:4200');
  })

  it('should have cards', function() {
    cy.get('.card-container').should('exist');
    cy.percySnapshot('cards');
  })

  it('should have terminal commands', function() {
    cy.get('.terminal').should('exist');
    cy.percySnapshot('terminal');
  })

  it('On click', function() {
    cy.get('.card-container .card').should('exist');
    cy.percySnapshot('click action');
  })

});