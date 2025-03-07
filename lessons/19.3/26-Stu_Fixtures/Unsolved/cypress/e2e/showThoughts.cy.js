describe("Tech Thoughts Website via Fixtures", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");

    // TODO: Add an intercept that will replace the GET request by targeting the fixtures rather than making a full API request.
    cy.intercept("GET", "/api/thought", { fixture: "thoughts.json" }).as(
      "getThoughts"
    );
  });

  it("should display different fixture thoughts on the homepage", () => {
    // TODO: Add tests to check if the users from the fixtures are visible
    // Wait for the GET request to be intercepted and ensure thoughts are loaded
    cy.wait("@getThoughts");

    // Load the fixture and check for each thought and author
    cy.fixture("thoughts.json").then((thoughts) => {
      thoughts.forEach((thought) => {
        // Check if the thought text and author are visible on the page
        cy.contains(thought.thoughtText).should("be.visible");
        cy.contains(thought.thoughtAuthor).should("be.visible");
      });
    });
  });
});
