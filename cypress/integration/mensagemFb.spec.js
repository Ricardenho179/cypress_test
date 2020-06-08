/// <reference types="cypress" />


describe('Ricardo', () =>{
    it('Deve mandar um oi automatizado para o Rafael', () => {
        cy.visit('https://www.google.com/');

        cy.get('#tsf > div:nth-child(2) > div.A8SBwf > div.RNNXgb > div > div.a4bIc > input').
        type('faceebok')

        cy.get('#lga').click()

        cy.get('.FPdoLc > center > .gNO89b').click()

        cy.get('[href="https://pt-br.facebook.com/pages/Faceebok/386412888704"] > .LC20lb').click()
        

        
    });


});