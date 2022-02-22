/* eslint-disable no-undef */
/// <reference types="cypress" />
import testUrl from '../config/testUrl';

context('Search functionality', () => {
  beforeEach(() => {
    cy.visit(testUrl);
  });

  it('should show search page', () => {
    cy.get('.search__input input').type('bag').type('{enter}');
    cy.url().should('include', '/products/bag');
    // cy.get('h2').should('contain', 'Search results for "en"');
  });
});
