import testUrl from '../../config/testUrl';

describe('Cart testing', () => {
    it('should go to cart page', () => {
        cy.visit(`${testUrl}/cart`)
    });
    it('should take to cart page ,and remove element', () => {
           let currentLength = 0
        cy.get('[test-id="cart-badge"]').then($badge => {
            currentLength = Cypress.$($badge).text()
            cy.get('div[test-id="product-cart-card"] button[test-id="product-cart-card-remove"]').first().click()
            cy.get('div[test-id="product-cart-card"]').should('have.length', currentLength - 1)
        })
    });
})