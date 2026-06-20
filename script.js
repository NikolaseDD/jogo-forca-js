const palavra = "CASAS";

function mostrarPalavra(letraDigitada = "") {

    let resultado = "";

    for (let letra of palavra) {

        if (letra === letraDigitada) {
            resultado += letra + " ";
        } else {
            resultado += "_ ";
        }

    }

    document.getElementById("palavra").textContent = resultado;
}

function chutar() {

    const letra =
        document
        .getElementById("letra")
        .value
        .toUpperCase();

    mostrarPalavra(letra);
}

mostrarPalavra();