describe("My first test", () => {
  it('visits a kitchen sink', () => {
      cy.visit('https://example.cypress.io')
      cy.contains('type').click()
      cy.url().should('include',"/commands/actions")

      cy.get('.action-email')
        .type('fake@email')
        .should('have.value', 'fake@email')
      })
})