const el = require('./elements').ELEMENTS;

class Home {
    acessarCategoria(category){
        cy.get(`a[title=${category}]`).last().click();
    }
    cadastrarUsuário(){
        cy.get('a[title="Log in to your customer account"]').click();
    }
}

export default new Home();