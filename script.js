const palavra = "CASAS";

let chutes = [];
let erros = 0;
let jogoFinalizado = false;

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

    verificarFimDeJogo();
}

function verificarFimDeJogo() {

    let venceu = true;

    for (let letra of palavra) {

        if (!chutes.includes(letra)) {
            venceu = false;
        }

    }

    if (venceu) {

        document.getElementById("mensagem").textContent =
            "🎉 Você venceu!";

        jogoFinalizado = true;

        return;
    }

    if (erros >= 6) {

        document.getElementById("mensagem").textContent =
            "💀 Você perdeu! A palavra era: " + palavra;

        jogoFinalizado = true;
    }
}

function chutar() {

    if (jogoFinalizado) {
        return;
    }

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