/// <reference types="cypress"/>

describe('Projeto', () => {

    beforeEach(() => {

        cy.reload()
        cy.visit ('https://www.wcaquino.me/cypress/componentes.html')

    });


    it('algumas maneiras de encontrar um texto na tela e comfirmar que ele está ali', () => {

    cy.get('body')
        .should('contain', 'Cuidado')
    cy.get('span')
        .should('contain', 'Cuidado')
    cy.get('.facilAchar')
        .should('contain', 'Cuidado')
    cy.get('.facilAchar')
        .should('have.text', 'Cuidado onde clica, muitas armadilhas...')

    });

    it('algumas maneiras de interagir com links e comfirmar que foram ou não clicados', () => {

        cy.get('[href="#"]')
            .click()
        cy.get('#resultado')
            .should('have.text', 'Voltou!')

        cy.reload()
        
        cy.get('#resultado')
            .should('have.not.text', 'Voltou!')

        cy.contains('Voltar')
            .click()
        cy.get('#resultado')
            .should('have.text', 'Voltou!')
        
    });

    it('Interagindo com campos de texto', () => {

        cy.get('#formNome')
            .type('Jóse')
            .should('have.value', 'Jóse')

        cy.get('[data-cy="dataSobrenome"]')
            .type('Augusto')
            .should('have.value', 'Augusto')

        cy.get('#elementosForm\\:sugestoes')
            .type('aki deverevia haver um texto')
            .should('have.value', 'aki deverevia haver um texto')
        
    });

    it('Interagindo com Radio button', () => {

        cy.get('#formSexoFem')
            .click()
            .should('be.checked')
        cy.get('#formSexoMasc')
            .should('not.be.checked')
        
    });

    it('Interagindo com checkbox e marcando todos de uma só vez', () => {

        cy.get('[name=formComidaFavorita]')
            .click({multiple: true})

        cy.get('#formComidaFrango')
            .click()
            .should('not.be.checked')
        
    });

    it('Combo box', () => {

        cy.get('[data-test="dataEscolaridade"]')
            .select('Doutorado')
            .should('have.value', 'doutorado')
        
    });

    it('Combo múltiplo', () => {

        cy.get('[data-testid="dataEsportes"]')
            .select(['natacao', 'Corrida'])
            
        
    });


});

