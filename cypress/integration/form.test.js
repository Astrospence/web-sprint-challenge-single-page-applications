describe("Pizza App", () => {
    beforeEach(() => {
        cy.visit('localhost:3000/pizza');
    })

    const nameInput = () => cy.get('input[id=name-input]');
    const toppingsInput = () => cy.get('input[data-cy=toppings]');
    const submitButton = () => cy.get('button[id=order-button]');

    it('Check that name input works', () => {
        nameInput()
        .should('have.value', '')
        .type('Test Name')
        .should('have.value', 'Test Name');
    })

    it('Check that user can select multiple toppings', () => {
        toppingsInput()
            .should('not.be.checked')
            .check()
            .should('be.checked')
            .uncheck()
            .should('not.be.checked');
    })

    it('Check that user can submit order', () => {
        submitButton().should('be.disabled');
        nameInput().type('Test Name');
        toppingsInput().check();
        submitButton()
            .should('not.be.disabled')
            .click();
    })
})