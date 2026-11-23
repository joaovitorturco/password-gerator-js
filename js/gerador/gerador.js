// função que vai carregar o card, quando a pagina for carregada ou quando o botão for clicado




export default function carregarGerador() {
    conteudo.innerHTML = `
    <div class="card text-center text-white">
      <div class="card-header fw-bold" id="status">
        status
      </div>
      <div class="card-body">
        <h5 class="card-title text-white fw-bold">
          PassW Gerator
        </h5>
        <div class="input-group my-3">
          <input type="text" class="form-control" aria-label="Text input with segmented dropdown button" placeholder="Senha" id="senha" readonly>
          <button type="button" class="btn btn-outline-secondary" id="btnGerar">Criar</button>
          <button type="button" class="btn btn-outline-success" id="btnCopiar">Copiar</button>
        </div>
        <div class="checks text-white">
        <label><input type="checkbox" id="maiusculas" checked> Maiúsculas</label>
        <label><input type="checkbox" id="minusculas" checked> Minúsculas</label>
        <label><input type="checkbox" id="numeros" > Números</label>
        <label><input type="checkbox" id="simbolos" checked> Símbolos</label>
      </div>
      </div>
      <div class="card-footer">
        <input type="text"
        class="form-control"
        id="inputTamanho"
        placeholder="Tamanho da senha"
        inputmode="numeric"
        pattern="[0-9]*"
        value="10"
        >
      </div>
    </div>
    `;

    limparCSS();
    carregarCSS();
    iniciarGerador()
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
    css.href = "../style/gerador/gerador.css";

    document.head.appendChild(css);

}


// depois de injetar o conteúdo do card, ele vai iniciar a função que vai gerar a senha
function iniciarGerador() {
    const senhaInput = document.getElementById("senha")// input que vai aparecer a senha

    const btnGerar = document.getElementById("btnGerar")// botão que vai gerar a senha
    const btnCopiar = document.getElementById("btnCopiar")// botão que vai copiar a senha

    let statusMsg = document.getElementById("status")// card footer, onde ira aparecer a mensagem 

    const input = document.getElementById("inputTamanho")// Passa o tamanho da senha a ser feita

    // Verifica se tem letras dentro do input e substitui por espaço em branco
    input.addEventListener("input", () => {
        input.value = input.value.replace(/\D/g, "")
    })

    btnGerar.addEventListener("click", () => {
        const valorTamanho = input.value
        const tamanho = valorTamanho > 200
            ? (
                alert("Atenção: limite excedido de 200 caracteres!"),
                200
            ) : (
                valorTamanho
            )
        const maiusculas = document.getElementById("maiusculas").checked
        const minusculas = document.getElementById("minusculas").checked
        const numeros = document.getElementById("numeros").checked
        const simbolos = document.getElementById("simbolos").checked

        if (!maiusculas && !minusculas && !numeros && !simbolos) {
            alert("Selecione pelo menos uma opção!")
            return
        } else if (!valorTamanho || valorTamanho <= 0) {
            alert("Tamanho não definido!")
            return
        }
        else {
            const letrasMaiusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
            const letrasMinusculas = "abcdefghijklmnopqrstuvwxyz"
            const nums = "0123456789"
            const simb = "--!@#$%&*(){}"

            let caracteres = ''

            if (maiusculas) {
                caracteres += letrasMaiusculas
            }

            if (minusculas) {
                caracteres += letrasMinusculas
            }

            if (numeros) {
                caracteres += nums
            }

            if (simbolos) {
                caracteres += simb
            }

            let senha = ''

            // "Pega um caractere aleatório da string caracteres e adiciona na senha"
            for (let i = 0; i < tamanho; i++) {
                senha += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
            }

            // Math.random() - Gera um número aleatório entre 0 e 1, Ex: 0.37482
            // Math.random() * caracteres.length - Multiplica pelo tamanho da string
            // Math.floor() - Arredonda para baixo, Ex: 3.9 -> 3
            // caracteres.charAt(3) - pega o caracter naquela posição, Ex: "abcde" → posição 3 = "d"
            // senha += "d"
            // Vai repetir isso mais 9 vezes 


            console.log(senha.length)

            senhaInput.value = senha
        }

    })

    btnCopiar.addEventListener("click", () => {
        if (senhaInput.value !== "") {
            navigator.clipboard.writeText(senhaInput.value);
            statusMsg.innerHTML = "Senha copiada!"
            statusMsg.style.color = "rgb(1, 255, 1)"
        } else {
            statusMsg.innerHTML = "Gere uma senha primeiro!"
            statusMsg.style.color = "red"
        }
    })
}

