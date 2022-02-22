import testUrl from '../../config/testUrl';

describe('Homepage testing', () => {
  it('Visit Landing Homepage ', () => {
    cy.visit(testUrl);
  });

  it('Validate Page Routes on link click', () => {
    cy.get('[data-test-id="menCategory"]').click();
    cy.url().should('include', '/products/men');
    cy.go('back');

    cy.get('[data-test-id="womenCategory"]').click();
    cy.url().should('include', '/products/women');
    cy.go('back');

    cy.get('[data-test-id="kidsCategory"]').click();
    cy.url().should('include', '/products/kids');
    cy.go('back');

    cy.get('[data-test-id="footwearCategory"]').click();
    cy.url().should('include', '/products/footwear');
    cy.go('back');

    cy.get('[data-test-id="wishlist"]').click();
    cy.url().should('include', '/wishlist');
    cy.go('back');

    cy.get('[data-test-id="cart"]').click();
    cy.url().should('include', '/cart');
    cy.go('back');
  });
});