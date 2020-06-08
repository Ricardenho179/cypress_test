/// <reference types="cypress" />


describe('Usuário', () =>{
    it('Deve conseguir pesquisar algo no google', () => {
        cy.visit('https://www.google.com/');

        cy.get('#tsf > div:nth-child(2) > div.A8SBwf > div.RNNXgb > div > div.a4bIc > input').
        type('Jocielli azambuja faebook');


        cy.server();

        cy.route('GET', '/domainless/read?igu=1').as('getApiHGoogle');

        cy.get('#tsf > div:nth-child(2) > div.A8SBwf > div.FPdoLc.tfB0Bf > center > input.gNO89b').
        click();

        cy.wait('@getApiHGoogle').then((xhr) => {
            // deu certo sem o .bg.eq...
            expect(xhr.status).eq(200);
        })

        // routing 

        // Start do server cy.server é sua dependencia para usar o routing

        // criar rota com cy.route

        // atribuir a um alias

        // esperar a rota com cy.wait

      
    });

    it('deve realizar um login no sistema', () => {

    });

});