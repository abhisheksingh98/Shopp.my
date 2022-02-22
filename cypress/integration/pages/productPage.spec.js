import testUrl from '../../config/testUrl';

describe('Product Page testing', () => {
  it('Visit Product Page ', () => {
    cy.visit(`${testUrl}/products/men/NOVA%20Men%20USB%20Cordless%20Trimmer/13`);
  });

  it('Change size and quantity', () => {


    // Select value from size drop down and validate
    // cy.get('[data-test-id="sizeDropdown"]').select('M').should('have.value', 'M');

    // Increase Quantity and validate
    cy.get('[data-test-id="quantityIncrease"]').click();
    cy.get('[data-test-id="quantitySpan"]').should('have.value', '1');
  });
});