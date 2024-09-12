
function perguntarIdade() {

    const anoNascimento = Number(prompt('Qual o ano de nascimento?')); 

    const anoAtual = 2024;
    const idade = anoAtual - anoNascimento;

    // se idade for maior que 17
    if(idade > 17) {
        // remover a classe escondido da div

        // Etapa 1: Pegar o elemento que quero alterar
        const painel = document.querySelector('.selecionar-jogo');
        // Etapa 2: remover classe escondido
        painel.classList.remove('escondido')
    } else { // senão
        // Etapa 1 - pegar o elemento HTML e guardar em uma variável
        const paragrafo = document.querySelector('.aviso');
        // Etapa 2 - Trocar o valor do texto da tag <p>
      
        // Template String
        paragrafo.innerHTML = `O uso deste site não é permitido para pessoas com ${idade} anos`
        paragrafo.classList.add('vermelho')
       
    }
}




//Só uso o let/const uma vez, se precisar declarar novamente a variavel, posso dizer somente o nome da variável 

 // const nascimentoInteiro = parseInt(anoNascimento) // parseInt converte string em numeros inteiros
 
//const nascimentoNumero = Number(anoNascimento); // Number também converte string em número (qualquer tipo, inteiro ou decimais). Sempre que precisar fazer uma conta de soma, preciso converter a string em Number.

 // idade > 17 --> alert('Você pode jogar!')
    // idade === 17 --> alert('Você ainda NÃO pode jogar!, mas ta quase!')
    // idade < 17 --> alert('Você NÃO pode jogar!')

// Maior >
// Menor <
// Maior ou igual >= Menor ou igual <=
// Igualdade == (não é muito usado)
// Diferente != (não é muito usado)
// Igualdade (Valor e Tipo) ====
// Diferente (Valor e Tipo) !==