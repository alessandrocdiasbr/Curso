
let prato = "";
let bebida = "";
let sobremesa = "";

function selecionarPrato(prato) {
    const pratoSelecionado = document.querySelector(".pratos .selecionado");
    
    if(pratoSelecionado !== null) {
        pratoSelecionado.classList.remove("selecionado");
    }

    prato.classList.add("selecionado");
}

function selecionarBebida(bebida) {
    const bebidaSelecionada = document.querySelector(".bebidas .selecionado");

    if(bebidaSelecionada !== null) {
        bebidaSelecionada.classList.remove("selecionado");
    }

    bebida.classList.add("selecionado");
}

function selecionarSobremesa(sobremesa) {
    const sobremesaSelecionada = document.querySelector(".sobremesas .selecionado");

    if(sobremesaSelecionada !== null) {
        sobremesaSelecionada.classList.remove("selecionado");
    }

    sobremesa.classList.add("selecionado");
}