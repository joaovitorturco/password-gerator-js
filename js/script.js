import carregarGerador from "./gerador/gerador.js";
import carregarTestador from "./testador/testador.js";
const elemento = document.getElementById("conteudo");
const btnGerar = document.getElementById("gerador") // botão que vai chamar o gerador de senhas
const btnTestar = document.getElementById("testador")   // botão que vai chamar o testador de senhas

// quando a página for carregada ou quando o botão de gerar for clicado, vai carregar o gerador de senhas
window.addEventListener("load", () => {
    carregarTestador()
    btnTestar.classList.add("active")
});

btnGerar.addEventListener("click", () => {
    carregarGerador()
    btnTestar.classList.remove("active")
    btnGerar.classList.add("active")
})

// quando o botão de testar for clicado, vai carregar o testador de senhas
btnTestar.addEventListener("click", () => {
    carregarTestador()
    btnGerar.classList.remove("active")
    btnTestar.classList.add("active")
});

