const el = require('./elements').ELEMENTS;

class Home {
    acessarCategoria(category){
        cy.get(`a[title=${category}]`).last().click();
    }
    acessarCadastro(){
        cy.get(el.sign_in).click();
    }
}

export default new Home();