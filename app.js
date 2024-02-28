let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroSecreto();
let tentativas = 1;
console.log(numeroSecreto);
//let titulo = document.querySelector('h1');
//titulo.innerHTML = 'Jogo do número secreto';

//let paragrafo = document.querySelector('p');
//paragrafo.innerHTML = 'Escolha um número entre 1 e 10';
function exibirNumeroNaTela(tag,texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto,'Brazilian Portuguese Female',{rate : 1.2});
}
function ExibirMensagemDeAbertura(){
exibirNumeroNaTela('h1','Jogo do número secreto!');
exibirNumeroNaTela('p','Escolha um número entre 1 e 10');
}   

ExibirMensagemDeAbertura();

// Função que gera o número secreto.
function gerarNumeroSecreto(){
  //Declaração da variável numero escolhido
  //A função Math.radom gerará o número aleatorio
  //A função parseInt retonará a parte inteira
  let numeroEscolhido  = parseInt(Math.random()* numeroLimite + 1);
  let quantidadeDeNumeroNaLista = listaDeNumerosSorteados.length;
  
 //Limpando a lista[] caso atinja a quantidade máxima.
 if(listaDeNumerosSorteados == numeroLimite){
  listaDeNumerosSorteados = [];
 }


  //Função includes verifica se os números sorteados estão incluidas na Lista de numeros sorteados.
  if(listaDeNumerosSorteados.includes(numeroEscolhido)){
    // Se o número aleatorio estiver na lista 
    return gerarNumeroSecreto();

  }else{
    //A função push inclui o número escolhido no final da lista. 
    listaDeNumerosSorteados.push(numeroEscolhido);
    console.log(listaDeNumerosSorteados);
    return numeroEscolhido;
  }
}

function verificarChute(){
  let chute = document.querySelector('input').value;
  if(chute == numeroSecreto){
    quatidadeTentativas = tentativas > 1? 'tentativas': 'tentativa';
    mensagemTentativas = `Parabéns você descobriu o número secreto com ${tentativas} ${quatidadeTentativas}.`;
    exibirNumeroNaTela('h1','Acertou!!');
    exibirNumeroNaTela('p',mensagemTentativas);
    //Ativando o botão Novo ao acertar o número secreto
    // O get acessar o botão e remove desabilita.
    document.getElementById('reiniciar').removeAttribute('disabled');
    
  }else{
    if(chute > numeroSecreto){
      exibirNumeroNaTela('p','O número secreto é menor.');
    }else{
      exibirNumeroNaTela('p','O número secreto é maior.');
    }
    tentativas++;
    limparCampo();
  }
}

function limparCampo(){
  chute = document.querySelector('input');
  chute.value = '';
}
function reiniciarJogo(){
  numeroSecreto = gerarNumeroSecreto();
  limparCampo();
  tentativas = 1;
  ExibirMensagemDeAbertura();
  // Acessar o botão reiniciar com o. setAttribute e tornar o disabled verdadeiro, no caso desabilitar
  document.getElementById('reiniciar').setAttribute('disabled',true);

}


