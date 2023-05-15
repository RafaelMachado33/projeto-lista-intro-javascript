// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {

  let altura = Number(prompt(`Digite uma altura:`));
  let largura = Number(prompt(`Digite uma largura:`));

  let area = altura * largura;
  console.log(area);

}


// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui

  const anoAtual = Number(prompt("Digite o ano atual:"));
  const anoNascimento = Number(prompt("Digite o seu ano de nascimento:"));

  console.log(anoAtual - anoNascimento);

}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  let imc = peso / (altura * altura);

  return imc;

}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  let nome = prompt(`Qual é seu nome?`);
  let idade = Number(prompt(`Qual é sua idade?`));
  let email = prompt(`Qual é seu email?`);
  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  let cor1 = prompt(`Primeira cor favorita:`)
  let cor2 = prompt(`Segunda cor favorita:`)
  let cor3 = prompt(`Terceira cor favorita:`)

  let vetor = [cor1, cor2, cor3];
  console.log(vetor);

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  let frase = prompt(`Digite uma frase:`);
  let novaFrase = frase.toUpperCase();

  return novaFrase;

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {

  return custo / valorIngresso;

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {

  return ((string1.length) == (string2.length));

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  return (array[0]);

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  return (array[(array.length) - 1]);

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  let letra1 = array[0];
  let letra2 = array[array.length - 1];
  array.pop();  //removeu o última posição
  array.shift();//removeu primeira posição do vetor
  array.push(letra1);
  array.unshift(letra2);
  return array;



}


// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  return (string1.toLowerCase() == string2.toLowerCase());

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
  let anoAtual = Number(prompt(`Digite o ano atual:`));
  let anoNascimento = Number(prompt(`Digite o ano de nascimento:`));
  let anoCartIdent = Number(prompt(`Digite o ano da sua carteira de identidade foi emitida:`));

  if ((anoAtual - anoNascimento) <= 20) {
    if ((anoCartIdent - anoNascimento) % 5 == 0) {
      console.log(true);
    } else {
      console.log(false);
    }

  } else if ((anoAtual - anoNascimento) <= 50 && (anoAtual - anoNascimento) > 20) {
    if ((anoCartIdent - anoNascimento) % 10 == 0 || (anoCartIdent - anoNascimento) == 19 || (anoCartIdent - anoNascimento) == 29 || (anoCartIdent - anoNascimento) == 39) {
      console.log(true);
    } else {
      console.log(false);
    }
  } else if ((anoAtual - anoNascimento) > 50) {
    if ((anoCartIdent - anoNascimento) % 15 == 0 || (anoCartIdent - anoNascimento) == 16 || (anoCartIdent - anoNascimento) == 31 || (anoCartIdent - anoNascimento) == 46) {
      console.log(true);
    } else {
      console.log(false);
    }
  }
}

//console.log(checaRenovacaoRG());



// EXERCÍCIO 14
function checaAnoBissexto(ano) {

  if (ano % 400 == 0) {
    return true;
  } else if (ano % 100 == 0) {
    return false;
  } else if (ano % 4 == 0) {
    return true;
  }
  return false;

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
  let idade = prompt("Você tem mais de 18 anos?");
  let ensinoMed = prompt("Você tem ensino médio completo?");
  let horarioCurso = prompt("Você possui disponibilidade exclusiva durante os horários do curso?");

  console.log(idade == "sim" && ensinoMed == "sim" && horarioCurso == "sim");

}

