describe('My First Test', function() {
  it('Does not do much!', function() {
    expect(true).to.equal(true)
    cy.percySnapshot();
  })
})


describe('Integration test with visual testing', function() {
  it('Loads the homepage', function() {
    // Load the page or perform any other interactions with the app.
    cy.visit("http://localhost:4200/");

    // Take a snapshot for visual diffing
    cy.percySnapshot();
  });
});