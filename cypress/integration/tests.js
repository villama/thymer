context("Testing thymer", () => {
  beforeEach(() => {
    cy.visit("/")
    cy.server({
      whitelist: xhr => {
        return true
      }
    })
  })

  it("App loads succesfully", () => {
    cy.contains("thymer")
  })

  it("After 0 seconds, timer is full", function() {
    cy.get("[name=timeLeft]").then(startValue => {
      cy.get("[name=timer-button]").click()
      cy.get("[name=timer-button]").click()
      cy.get("[name=timeLeft]").then(endValue => {
        expect(startValue.text()).to.equal(endValue.text())
      })
    })
  })

  it("After 0.3 seconds, timer is 0.3 seconds less", function() {
    cy.get("[name=timeLeft]").then(val => {
      const start = parseFloat(val.text())
      cy.get("[name=timer-button]").click()
      cy.wait(300)
      cy.get("[name=timer-button]").click()
      cy.get("[name=timeLeft]").then(val => {
        const end = parseFloat(val.text())

        const diff = start - end
        expect(diff).to.be.closeTo(0.3, 0.001)
      })
    })
  })

  it("After 2.1 seconds, timer is 2.1 seconds less", function() {
    cy.get("[name=timeLeft]").then(val => {
      const start = parseFloat(val.text())
      cy.get("[name=timer-button]").click()
      cy.wait(2100)
      cy.get("[name=timer-button]").click()
      cy.get("[name=timeLeft]").then(val => {
        const end = parseFloat(val.text())

        const diff = start - end
        expect(diff).to.be.closeTo(2.1, 0.001)
      })
    })
  })

  it("After 7.9 seconds, timer is 7.9 seconds less", function() {
    cy.get("[name=timeLeft]").then(val => {
      const start = parseFloat(val.text())
      cy.get("[name=timer-button]").click()
      cy.wait(7900)
      cy.get("[name=timer-button]").click()
      cy.get("[name=timeLeft]").then(val => {
        const end = parseFloat(val.text())

        const diff = start - end
        expect(diff).to.be.closeTo(7.9, 0.001)
      })
    })
  })
})
