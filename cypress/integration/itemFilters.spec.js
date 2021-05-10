describe('Items filters', () => {
  beforeEach(() => {
    cy.intercept('/*', { fixture: 'apiResponse.json' }).as('response');
    cy.visit('/');
  });

  it('filters items', () => {
    cy.wait('@response');
    cy.get('[data-cy=itemContainer]').children().should('have.length', 4);
    cy.get('[data-cy=star2]').click();
    cy.get('[data-cy=filterFavorites]').click();
    cy.get('[data-cy=itemContainer]').children().should('have.length', 1);
  });
});
