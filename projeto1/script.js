
function perguntarIdade() {


    const anoNascimento = Numer(prompt('Qual o ano de nascimento?')); 
    alert("Você nasceu em " + anoNascimento);

    const anoAtual = 2024;
    const idade = anoAtual - anoNascimento;

    alert(idade + " anos");

}


/* Só uso o let/const uma vez, se precisar declarar novamente a variavel, posso dizer somente o nome da variável */

 // const nascimentoInteiro = parseInt(anoNascimento) // parseInt converte string em numeros inteiros
   //const nascimentoNumero = Number(anoNascimento); // Number também converte string em número (qualquer tipo, inteiro ou decimais). Sempre que precisar fazer uma conta de soma, preciso converter a string em Number.