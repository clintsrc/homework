import Header from "../../client/src/components/Header/index";

describe("<Header />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Header />);
  });

  // TODO: the header includes a test that checks whether the component renders and a test that checks whether the content is correct.
  it("renders the header component with the proper content", () => {
    // mount the Header component
    cy.mount(<Header />);

    // TODO: verify that the h4 element contains the text 'Made with ❤️ by the Tech Thoughts team.'
    cy.get("h1").should("contain", "Tech Thoughts");
  });
});
