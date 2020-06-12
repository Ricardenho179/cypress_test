const el = require('./elements').ELEMENTS;

class CriacaoCadastro {
    preencherFormulario() {
        var faker = require('faker');
        var randomName = faker.name.firstName();
        var randomLastName = faker.name.lastName();
        var randomCompany = faker.company.companyName();
        var randomCity = faker.address.city();
        var randomState = faker.address.state();
        var randomZipCode = faker.address.zipCode();
        // var randomCountry = faker.address.country();
        var randomPhone = faker.phone.phoneNumberFormat();

        cy.get(el.sexoM).click();
        cy.get(el.nome).type(`${randomName}`);
        cy.get(el.nome_do_meio).type(`${randomLastName}`);
        cy.get(el.senha).type('senha@123');
        cy.get(el.nome_endereco).type(`${randomName}`);
        cy.get(el.nome_meio_endereco).type(`${randomLastName}`);
        cy.get(el.trabalho).type(`${randomCompany}`);
        cy.get(el.endereco).type('rua dos bobos, 7');
        cy.get(el.pais).select('United States');
        cy.get(el.cidade).type(`${randomCity}`);
        cy.get(el.estado).select(`${randomState}`);
        cy.get(el.codigo_postal).type(`${randomZipCode}`);
        cy.get(el.telefone).type(`${randomPhone}`)
        cy.get(el.alias).type('rua qualquer, 69');
        cy.get(el.registrar).click();

    }
    
}

export default new CriacaoCadastro();