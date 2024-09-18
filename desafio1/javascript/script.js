
let prato = "";
let bebida = "";
let sobremesa = "";
let pratoEscolhido = "";
let bebidaEscolhida = "";
let sobremesaEscolhida = "";

function selecionarPrato(prato) {
    pratoEscolhido = prato.innerHTML;
    const pratoSelecionado = document.querySelector(".pratos .selecionado");
    
    if(pratoSelecionado !== null) {
        pratoSelecionado.classList.remove("selecionado");
    }

    prato.classList.add("selecionado");
}

function selecionarBebida(bebida) {
    bebidaEscolhida = bebida.innerHTML;
    const bebidaSelecionada = document.querySelector(".bebidas .selecionado");

    if(bebidaSelecionada !== null) {
        bebidaSelecionada.classList.remove("selecionado");
    }

    bebida.classList.add("selecionado");
}

function selecionarSobremesa(sobremesa) {
    sobremesaEscolhida = sobremesa.innerHTML;
    const sobremesaSelecionada = document.querySelector(".sobremesas .selecionado");

    if(sobremesaSelecionada !== null) {
        sobremesaSelecionada.classList.remove("selecionado");
    }

    sobremesa.classList.add("selecionado");
}


const selecao=document.querySelector(".prato .bebida .sobremesa")

selecao.addEventListener("click", (evt)=> {
    const el=evt.target
    el.classList.add("tudoescolhido")
})