describe("User can see the initial render of the page", () => {
  beforeEach("visit the page", () => {
    cy.visit("/")
  });

  it("displays a menu with the app name", () => {
    cy.get("[data-cy=navbar-name]").should("contain", "Github Finder")
  })

  it("displays navbar icon", () => {
    cy.get("[data-cy=navbar-name]").within(() => {
      cy.get("[data-cy=nav-icon]").should("exist")
    })
  })

  it("displays a card with user info and a button", () => {
    cy.get("[data-cy=user-card]")
    .first()
    .find("[data-cy=user-img]").should("exist")
  })

  it("displays a card with user info and a button", () => {
    cy.get("[data-cy=user-card]")
    .first()
    .find("[data-cy=user-login]").should("contain", "mojombo")
  })

  it("displays a card with user info and a button", () => {
    cy.get("[data-cy=user-card]")
    .first()
    .find("[data-cy=user-btn]").should("contain", "More")
  })
})