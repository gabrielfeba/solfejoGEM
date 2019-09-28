const compassos = document.querySelectorAll(".compassos");
const bpm = document.querySelector("input[type='number']");
const iniciar = document.querySelector("section button");
const section = document.querySelector("section");
const animacaoDiv = document.querySelector("#animacao div");
const containerDoSolfejo = document.querySelector("body>.containerDasLinhas");
const linhaDesenho = document.querySelectorAll(".linhaDesenho");
const corpoDaPagina = document.querySelector("body");

iniciar.onclick = () => {
    let tipoDeCompasso = pegarTipoDeCompasso();
    desenharCompasso(tipoDeCompasso);
    comecarAnimacao(tipoDeCompasso);
}

corpoDaPagina.onkeypress = (event) => {
    if (event.code === "KeyF") voltarParaMenu();
}

// returna número 2 para compasso binário, 3 para compasso ternário e 4 para compasso quartenário.
function pegarTipoDeCompasso() {
    let tipoDeCompasso;
    for(let compasso in compassos) {
        if(compassos[compasso].checked) {
            tipoDeCompasso = Number(compasso) + 2;
        }
    }
    return tipoDeCompasso;
}

function desenharCompasso(tipoDeCompasso) {
    if(tipoDeCompasso === 4) {
        // desenho quartenário.
        linhaDesenho[1].style.transform = "rotate(90deg)";
        linhaDesenho[2].style.transform = "translate(-20vh, 20vh) rotate(-45deg)";
        linhaDesenho[2].style.height = "57vh";
        linhaDesenho[3].style.transform = "translate(20vh, -20vh) rotate(-45deg)";
        linhaDesenho[3].style.height = "57vh";
    } else if(tipoDeCompasso === 3) {
        // desenho ternário.
        linhaDesenho[2].style.transform = "translate(20vh, 20vh) rotate(45deg)";
        linhaDesenho[2].style.height = "57vh";
        linhaDesenho[3].style.transform = "translate(20vh, -20vh) rotate(-45deg)";
        linhaDesenho[3].style.height = "57vh";
    }
}

function comecarAnimacao(tipoDeCompasso) {
    let velocidadeDaBatida = (60/bpm.value) * tipoDeCompasso;
    // retira o display do menu.
    section.style.display = "none";
    // coloca div do solfejo.
    containerDoSolfejo.style.display = "flex";
    // adiciona animação com a velocidade da batida e o tipo de solfejo.
    animacaoDiv.style.animation = `2s levare ease-in, ${velocidadeDaBatida}s 2s compasso${tipoDeCompasso} linear infinite`;
}

function voltarParaMenu() {

    // coloca o display do menu.
    section.style.display = "flex";
    // retira o display do solfejo.
    containerDoSolfejo.style.display = "none";
    // remove animação.
    animacaoDiv.style.animation = "";
}