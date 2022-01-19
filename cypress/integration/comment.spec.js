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
        cy.get('#number2').click();
        cy.get('#operator_add').click()
        cy.get('#number4').click();
        cy.get('#operator-divide').click()
        cy.get('#number2').click();
        cy.get('#operator-equals').click()
        cy.get('.display').should('contain', '3')  
    })
    it('should give expected output', () => {
        cy.get('#number4').click()
        cy.get('#decimal').click()
        cy.get('#number2').click()
        cy.get('#operator-equals').click()
        cy.get('.display').should('contain', '4.2')  
    })

    it('should divide by zero', () => {
      cy.get('#number4').click()
      cy.get('#operator-divide').click()
      cy.get('#number0').click()
      cy.get('#operator-equals').click()
      cy.get('.display').should('contain', 'cannot divide by zero')  
    })


  })