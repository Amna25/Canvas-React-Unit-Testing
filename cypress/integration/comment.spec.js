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
        cy.get('#number9').click();
        cy.get('#operator_multiply').click()
        cy.get('#number9').click();
        cy.get('#operator-divide').click()
        cy.get('#number9').click();
        cy.get('#operator_add').click()
        cy.get('#number3').click();
        cy.get('#operator-substract').click()
        cy.get('#number4').click();
        cy.get('#decimal').click()
        cy.get('#number2').click()
        cy.get('#operator_add').click()
        cy.get('#number9').click();
        cy.get('#number8').click();
        cy.get('#number7').click();
        cy.get('#number5').click();
        cy.get('#number3').click();

        cy.get('#operator-equals').click()

        cy.get('.display').should('contain', '98760.8')

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