context("Testing timer", () => {
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
      cy.get("[name=timer-button]")
        .click()
        .then(() => {
          cy.get("[name=timer-button]")
            .click()
            .then(() => {
              cy.get("[name=timeLeft]").then(endValue => {
                expect(startValue.text()).to.equal(endValue.text())
              })
            })
        })
    })
  })

  it("After 1.1 seconds, timer is 1.1 seconds less", function() {
    cy.get("[name=timeLeft]").then(val => {
      const startValue = parseFloat(val.text())
      cy.get("[name=timer-button]")
        .click()
        .then(() => {
          const startTime = Date.now()
          cy.wait(1100)
          cy.get("[name=timer-button]")
            .click()
            .then(() => {
              const endTime = Date.now()
              cy.get("[name=timeLeft]").then(val => {
                const endValue = parseFloat(val.text())

                const valueDiff = startValue - endValue
                const timeDiff = (endTime - startTime) / 1000.0
                expect(valueDiff).to.be.closeTo(timeDiff - 0.05, 0.1)
              })
            })
        })
    })
  })

  it("After 2.1 seconds, timer is 2.1 seconds less", function() {
    cy.get("[name=timeLeft]").then(val => {
      const startValue = parseFloat(val.text())
      cy.get("[name=timer-button]")
        .click()
        .then(() => {
          const startTime = Date.now()
          cy.wait(2100)
          cy.get("[name=timer-button]")
            .click()
            .then(() => {
              const endTime = Date.now()
              cy.get("[name=timeLeft]").then(val => {
                const endValue = parseFloat(val.text())

                const valueDiff = startValue - endValue
                const timeDiff = (endTime - startTime) / 1000.0
                expect(valueDiff).to.be.closeTo(timeDiff - 0.05, 0.1)
              })
            })
        })
    })
  })

  it("After 20 seconds, timer is 20 seconds less", function() {
    cy.get("[name=timeLeft]").then(val => {
      const startValue = parseFloat(val.text())
      cy.get("[name=timer-button]")
        .click()
        .then(() => {
          const startTime = Date.now()
          cy.wait(20000)
          cy.get("[name=timer-button]")
            .click()
            .then(() => {
              const endTime = Date.now()
              cy.get("[name=timeLeft]").then(val => {
                const endValue = parseFloat(val.text())

                const valueDiff = startValue - endValue
                const timeDiff = (endTime - startTime) / 1000.0
                expect(valueDiff).to.be.closeTo(timeDiff - 0.05, 0.1)
              })
            })
        })
    })
  })
})
