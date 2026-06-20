const palavra = "CASAS";

let chutes = [];
let erros = 0;

function atualizarTela() {

    let resultado = "";

    for (let letra of palavra) {

        if (chutes.includes(letra)) {
            resultado += letra + " ";
        } else {
            resultado += "_ ";
        }

    }

    document.getElementById("palavra").textContent = resultado;

    document.getElementById("digitadas").textContent =
        chutes.join(" ");

    document.getElementById("erros").textContent =
        erros;
}

function chutar() {

    let letra =
        document
        .getElementById("letra")
        .value
        .toUpperCase();

    if (
        letra &&
        !chutes.includes(letra)
    ) {

        chutes.push(letra);

        if (!palavra.includes(letra)) {
            erros++;
        }

    }

    atualizarTela();

    document.getElementById("letra").value = "";
}

atualizarTela();