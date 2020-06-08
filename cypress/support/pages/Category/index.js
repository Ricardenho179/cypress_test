const el = require('./elements').ELEMENTS;

class Category {
    CATEGORIES = [
        'T-shirts',
        'Dresses',
        'Women'
    ]

    validarAcessoACategoria(category){
        cy.get('.breadcrumb').should('contain.text', `${category}`);
    }
}

export default new Category();