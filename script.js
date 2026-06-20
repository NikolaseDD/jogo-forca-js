const palavra = "CASAS";

let chutes = [];

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
    }

    atualizarTela();

    document.getElementById("letra").value = "";
}

atualizarTela();