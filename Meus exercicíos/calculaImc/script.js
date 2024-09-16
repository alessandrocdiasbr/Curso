function calculaImc(peso, altura) {

    let peso = document.querySelector('#peso');
    let altura = document.querySelector('#altura')

    const imc = peso / (altura * altura);
    return imc.toFixed(2);
    console.log(imc)
}

calculaImc();

