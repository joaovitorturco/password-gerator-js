import carregarGerador from "./gerador/gerador.js";
import carregarTestador from "./testador/testador.js";

const btnGerar = document.getElementById("gerador") // botão que vai chamar o gerador de senhas
const btnTestar = document.getElementById("testador")   // botão que vai chamar o testador de senhas

// quando a página for carregada ou quando o botão de gerar for clicado, vai carregar o gerador de senhas
btnGerar.addEventListener("click", () => {
    carregarGerador()
});

btnGerar.addEventListener("click", () => {
    carregarGerador()
})

// quando o botão de testar for clicado, vai carregar o testador de senhas
window.addEventListener("load", () => {
    carregarTestador()
});

