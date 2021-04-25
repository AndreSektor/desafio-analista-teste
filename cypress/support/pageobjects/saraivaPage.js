/// <reference types="Cypress" />
import faker from "faker-br";
import SaraivaElements from "../elements/saraivaElements";

const saraivaElements = new SaraivaElements();

class SaraivaPage {
  // // Acessa o site que será testado
  acessarSite() {
    cy.visit(Cypress.config("baseUrl"));
    Cypress.on(
        "uncaught:exception",
        (err, runnable) =>
          // returning false here prevents Cypress from failing the test
          false
    );
  }

  clicarMenuHomePage() {
    cy.get(saraivaElements.btnMenu()).should('be.visible')
    .click()
  }

  clicarBotaoCadastese() {
    cy.get(saraivaElements.btnCadastre()).should('be.visible')
    .click()
  }

  clicarBtnModalCadastro() {
    cy.get(saraivaElements.btnModalCadastrese()).should('be.visible')
    // Não foi possivel alternar a tela entao usei o visit para ser direcionado para tela de login 
    cy.visit('https://login.saraiva.com.br/');
  }

  clicarBtnCadastrar() {
    cy.get(saraivaElements.btnCadastrar()).should('be.visible')
    .click()
  }

  preencherFormularioDeCadastro() {
    cy.get(saraivaElements.campoNome()).should('be.visible')
    .type(faker.name.firstName())

    cy.get(saraivaElements.campoSobreNome()).should('be.visible')
    .type(faker.name.lastName())

    cy.get(saraivaElements.campoEmail()).should('be.visible')
    .type(faker.internet.email())

    var inputSenha = faker.random.number();
    cy.get(saraivaElements.campoSenha()).should('be.visible')
    .type("test" + inputSenha);

    cy.get(saraivaElements.campoComfirmaSenha()).should('be.visible')
    .type("test" + inputSenha);

    cy.get(saraivaElements.campoCpf()).should('be.visible')
    .type(faker.br.cpf())

    cy.get(saraivaElements.radioButonMasc()).should('be.visible')
    .click()

    cy.get(saraivaElements.campoDataNasc()).should('be.visible')
    .type('26/06/1991')

    cy.get(saraivaElements.campotelefone()).should('be.visible')
    .type('81981908190')

    cy.get(saraivaElements.campoCep()).should('be.visible')
    .type('52111110')

    cy.get(saraivaElements.selectPais()).should('be.visible')
    .click()

    cy.get(saraivaElements.campoNumero()).should('be.visible')
    .type('100')
  
    cy.get(saraivaElements.campoTelContato()).should('be.visible')
    .type('81987878787')
  }

  clicarBtnfinalizandoCadastro () {
    cy.get(saraivaElements.btnFinalizarCadastro()).should('be.visible')
    .click()
  }

  validarCriacaoDeUsuario () {
    cy.get(saraivaElements.textoCadastroConcluido()).should('contain.text', 'Usuário Cadastrado com sucesso')
    cy.get(saraivaElements.campoBuscaHomePage()).should('be.visible')
  }
}

export default SaraivaPage;