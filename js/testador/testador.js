export default function carregarTestador() {
    conteudo.innerHTML = `
    <div class="card text-white p-5">
      <div>
        <h5 class="card-title text-white fw-bold">
          PassW tester
        </h5>
        <div class="my-3">
          <input type="text" class="form-control" aria-label="Text input with segmented dropdown button" placeholder="Senha" id="senha">
        </div>
      </div>
        <div class="forca-senha">

            <div class="d-flex justify-content-between mb-2">
                <strong>Força da senha</strong>
                <strong id="nivelForca">Não avaliada</strong>
            </div>

            <div class="d-flex gap-2 mb-2" id="barrasForca">
                <div class="barra"></div>
                <div class="barra"></div>
                <div class="barra"></div>
                <div class="barra"></div>
            </div>
        </div>

    </div>
    `;
    limparCSS();
    carregarCSS();

    analisarSenha();
}

function limparCSS() {
  const css = document.querySelector("#cssPagina");

  if (css) {
    css.remove();
  }
}

function carregarCSS() {
    const css = document.createElement("link");

    css.id = "cssPagina";
    css.rel = "stylesheet";
    css.href = "../style/testador/testador.css";

    document.head.appendChild(css);

}

function analisarSenha() {
    const input = document.getElementById("senha");
    input.addEventListener("input", () => {
        const senha = input.value;
        let pontuacao = 0;

        if (senha.length >= 8) pontuacao++;
        if (/[A-Z]/.test(senha)) pontuacao++;
        if (/[0-9]/.test(senha)) pontuacao++;
        if (/[^A-Za-z0-9]/.test(senha)) pontuacao++;

        atualizarForca(pontuacao);
    });
}

function atualizarForca(pontuacao) {

    const barras = document.querySelectorAll(".barra");
    const nivel = document.getElementById("nivelForca");

    const cores = [
        "#ef4444",
        "#f97316",
        "#eab308",
        "#22c55e"
    ];

    const niveis = [
        "Fraca",
        "Razoável",
        "Moderada",
        "Forte"
    ];

    barras.forEach((barra, index) => {
        barra.style.backgroundColor =
            index < pontuacao ? cores[pontuacao - 1] : "#344054";
    });

    nivel.textContent = niveis[pontuacao - 1] || "Não avaliada";
}
