describe('E2E Test', () => {
    it('Visits the app', () => {
      cy.visit('http://localhost:3000'); // Base URL
      cy.contains('Tech Thoughts'); // Adjust based on your app's content
    });
  });