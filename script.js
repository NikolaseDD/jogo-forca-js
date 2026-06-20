const palavra = "CASAS";

let exibicao = "";

for(let i = 0; i < palavra.length; i++){
    exibicao += "_ ";
}

document.getElementById("palavra").textContent = exibicao;