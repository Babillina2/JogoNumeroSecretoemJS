let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;
function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}
function exibirMensagensIniciais(){
exibirTextoNaTela('h1', 'Jogo do No Secreto');
exibirTextoNaTela('p', 'Digite um número entre 1 e 10:');
}
exibirMensagensIniciais(); 

function verificarChute(){
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto){ 
        let qdtTentativa = tentativas > 1 ? 'Tentativas' : 'Tentativa';
        let mensagemTentativa = `Você descobriu o número secreto em ${tentativas} ${qdtTentativa}`;
        exibirTextoNaTela('p', mensagemTentativa);
        document.getElementById('reiniciar').removeAttribute('disabled')
      
    } else {
        if (chute > numeroSecreto) {
        exibirTextoNaTela('p', 'O número secreto é menor'); 
        } else {
        exibirTextoNaTela('p', 'O número secreto é maior'); 
        }
     tentativas++;
     limparCampo();
    }
}


function gerarNumeroAleatorio() { 
    return parseInt((Math.random() * 10) + 1);  // Gera um número aleatório entre 1 e 10
}

function limparCampo() {
    document.querySelector('input').value = '';
}

function novoJogo() {
   numeroSecreto = gerarNumeroAleatorio();
   limparCampo();
   tentativas = 1
   exibirMensagensIniciais(); 
   document.getElementById('reiniciar').setAttribute('disabled', 'true');
};