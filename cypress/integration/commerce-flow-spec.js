/// <reference types="Cypress"/>

import {homepage, categorypage,cadastropage, accountpage,criacadastropage} from '../support/pages'

// import {homepage, categorypage, cadastropage} from '../support/pages'

describe ('Fluxos do ecommerce', () => {
    

        /*Páginas de categorias = Page Objetcs
        Home
        -Acesso a uma categoria
        -Elementos de categorias
        Category
        -Validação 
        -Elemento Breadcrump
        
        Pagina
        -Ações > index.js
        -Elementos > elements.js
        */

        //Data Driven tests
        categorypage.CATEGORIES.forEach(category => {
            it.skip(`Acessar a categoria ${category}`, () => {
                // cy.get('#block_top_menu > ul > li:nth-child(3) > a').click();
                homepage.acessarCategoria(category);
                // cy.get('.breadcrumb').should('contain.text', 'T-shirts');
                categorypage.validarAcessoACategoria(category);
        });


        /*
        Acessar uma categoria
        Saber quais são essas categorias
        acessar de forma dinamica uma categoria
        validar de forma dinamica uma categoria
        */
    });


    it.skip('Realizar Login',() => {
        homepage.acessarCadastro();
        cadastropage.logar();
        accountpage.validarCadastroRealizadoComSucesso();
    });

    it('Criando conta', () => {
        homepage.acessarCadastro();
        cadastropage.fazerCadastro();
        criacadastropage.preencherFormulario();
    });
});