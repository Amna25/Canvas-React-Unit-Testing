describe("Calculator", () => {
    beforeEach(() => {
      cy.visit("http://localhost:3000");
    })
  
    it('should have working number buttons', () => {
      cy.get('#number2').click();
      cy.get('.display').should('contain', '2')
    })
    it('should get runningtotal', () => {
        cy.get('#running-total').click()
        cy.get('#number2').click();
        cy.get('.display').should('contain', '2')
    })
    it('should display arithmatical operations', () => {
        cy.get('#operator-multiply').click()
        cy.get('#number2').click();
        cy.get('#number1').click();
        cy.get('.display').should('contain', '2')
    })
    it('should chain multiple operations', () => {
        cy.get('#operator-subtract').click()
        cy.get('#operator-multiply').click()
        cy.get('#number2').click();
        cy.get('#number4').click();
    })
    it('should give expected output', () => {
        cy.get('#decimal').click()
        cy.get('#operator-divide').click()
        cy.get('#number9').click();
        cy.get('#number4').click(); 
        cy.get('.display').should('contain', '2.25')  
    })


  })