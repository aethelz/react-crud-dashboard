describe('Items creates', () => {
  beforeEach(() => {
    cy.intercept('/*', { fixture: 'apiResponse.json' }).as('response');
    cy.visit('/');
  });

  it('creates items', () => {
    cy.wait('@response');
    cy.get('[data-cy=nameInput]').type('test5');
    cy.get('[data-cy=netInput]').type('1250');
    cy.get('[data-cy=addItem]').click();
    cy.get('[data-cy=itemContainer]').children().should('have.length', 5);
    cy.get('[data-cy=overviewSum]').should('contain', '7.251,14');
    cy.get('[data-cy=overviewAverage]').should('contain', '1.450,23');
    cy.get('[data-cy=overviewItemCount]').should('contain', '5');
  });
});
