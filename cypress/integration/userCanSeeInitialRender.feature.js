describe("User can see the initial render of the page", () => {
  beforeEach("visit the page", () => {
    cy.visit("/")
  });

  it("displays a header with name", () => {
    cy.get("h1").should("contain", "Yoo John Doe")
  })
})