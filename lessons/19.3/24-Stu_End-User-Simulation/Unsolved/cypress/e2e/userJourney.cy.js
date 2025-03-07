// TODO: Write a comment about what the purpose of this userJourney.cy.js is for.

/* A user journey is a step-by-step journey that a user takes through the application to reach their goal.
  It verifies that users can interact with the application as intended, ensuring a smooth user experience. */
describe("User Journey", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("A user can arrive at the home page where other's thoughts are displayed on the screen", () => {
    cy.visit("http://localhost:3000/");
  });

  it("A user can add text to the tech form and should add the content to the page", () => {
    // TODO: Write a comment about what this particular test case looks to accomplish.
    /* Test that when if a user enters text into the tech form then submits it that 
      the content is correctly added to the page and displays in the expected format. */
    cy.get("form div textarea").type("My thoughts about Cypress!");
    cy.get("form div").eq(1).children().eq(0).type("Paulie!");
    cy.get("form div").eq(2).children().eq(0).click();
    cy.get(".card .card-body").should(($el) => {
      const cards = $el.map((i, el) => {
        return Cypress.$(el).attr("card-body");
      });
      cards.each((i, cardNames) => {
        expect(cardNames).to("be.visible");
      });
    });
  });

  it("A user can click on the join discussion button and navigate to a Comments page", () => {
    // TODO: Write a comment about what this particular test case looks to accomplish.
    /* Test that when a user clicks on the "join discussion" button they are redirected to 
    the Comments page */
    cy.get(".card").eq(1).children().eq(2).click();
    cy.location("pathname").should("include", "/thoughts");
  });
});
