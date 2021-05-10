describe('Items deletes', () => {
  beforeEach(() => {
    cy.intercept('/*', { fixture: 'apiResponse.json' }).as('response');
    cy.visit('/');
  });

  it('deletes items', () => {
    cy.wait('@response');
    cy.get('[data-cy=itemContainer]').children().should('have.length', 4);
    cy.get('[data-cy=deleteItemN1]').click();
    cy.get('[data-cy=itemContainer]').children().should('have.length', 3);
    cy.get('[data-cy=itemContainer]').should('not.contain', 'TestItem1');
    cy.get('[data-cy=itemContainer]').should('contain', 'TestItem2');
  });
});
