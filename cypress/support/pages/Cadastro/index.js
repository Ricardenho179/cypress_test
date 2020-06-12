const el = require('./elements').ELEMENTS;

class Cadastro {
    logar(){
        cy.get(el.email).type('treinamentocwiweb@mail.com');

        cy.get(el.senha).type('treinamento');

        cy.get(el.sign_in).click();

    }
    fazerCadastro(){
        //email dinamico
        var faker = require('faker');
        var randomEmail = faker.internet.email();
        cy.get(el.cria_email).type(`${randomEmail}`);
        cy.get(el.envia_email_criado).click();

    }
}


export default new Cadastro();