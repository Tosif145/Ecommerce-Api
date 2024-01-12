// productForm.spec.js

describe('Product Form', () => {
  it('Should submit a product form', () => {
    // Visit the page with the product form
    cy.visit('/product-form');

    // Interact with form elements
    cy.get('#productName').type('Sample Product');
    cy.get('#productPrice').type('50');
    cy.get('#productDescription').type('A sample product description');

    // Submit the form
    cy.get('#submitBtn').click();

    // Assert that the form submission was successful
    cy.url().should('include', '/success'); // Assuming a success page is shown

    // Assert any other conditions based on your application's behavior
    // For example, you might check if the product is displayed on the page.
    cy.contains('Sample Product').should('exist');
    cy.contains('$50.00').should('exist');
  });
});
