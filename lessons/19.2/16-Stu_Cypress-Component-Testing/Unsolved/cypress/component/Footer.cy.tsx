import Footer from "../../client/src/components/Footer/index";

describe("<Footer />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Footer />);
  });

  // TODO: Uncomment the following test once test is implemented
  it("renders the footer component with the proper content", () => {
    // TODO: mount the Footer component
    cy.mount(<Footer />);

    // TODO: verify that the h4 element contains the text 'Made with ❤️ by the Tech Thoughts team.'
    cy.get("h4").should("contain", "Made with ❤️ by the Tech Thoughts team.");
  });
});
