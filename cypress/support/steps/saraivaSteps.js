/* global then, when */

import SaraivaPage from "../pageobjects/saraivaPage";

const saraivaPage = new SaraivaPage();

Given ("que estou no site da saraiva", () => {
  saraivaPage.acessarSite()
})

And ("clico no menu da home page", () => {
  saraivaPage.clicarMenuHomePage()
})

And ("clico na opcao cadastre-se", () => {
  saraivaPage.clicarBotaoCadastese()
})

And ("clico na opcao entrar com cliente saraiva ou cadastre-se", () => {
  saraivaPage.clicarBtnModalCadastro()
})

And ("apos abrir o modal de login clico em cadastrar", () => {
  saraivaPage.clicarBtnCadastrar()
})

And ("preencho o formulario de cadastro", () => {
  saraivaPage.preencherFormularioDeCadastro()
})

And ("clico no botao finalizar cadastro", () => {
  saraivaPage.clicarBtnfinalizandoCadastro()
})

When ("vou validar a criacao do usuario e ser direcionado para a home page", () => {
  saraivaPage.validarCriacaoDeUsuario()
})