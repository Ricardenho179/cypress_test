const el = require('./elements').ELEMENTS;

class MinhaConta {
    validarCadastroRealizadoComSucesso(){
        cy.get(el.account).should('have.text','Treinamento CWI');
    }
}

export default new MinhaConta();