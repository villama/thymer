context("Testing thymer", () => {
  beforeEach(() => {
    cy.server({
      whitelist: xhr => {
        return xhr.method === "GET"
      }
    })
    cy.visit("/")
  })

  it("App loads succesfully", () => {
    cy.contains("thymer")
  })
})
