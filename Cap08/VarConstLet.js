var objeto = {};
var numero = 1;
var nome = 'Chaves';
var lista = [1,2,3];

const dataNascimento = '03/02/1980';
//dataNascimento = '03/02/1981'; // ao tentar reatribuir valor ira apresentar erro

console.log(dataNascimento);

const pessoa = {nome: 'joao'};
pessoa.idade = 12;

console.log(pessoa);

//Let é o novo var
let resultado = 0;
resultado = 2 + 3;
console.log(resultado);

var id = 1;
id = 2;

let id2 = 1;
//const id2 = 2;

console.log(id);
console.log(id2);

var mensagem = 'olá';
{
    var mensagem = 'adeus';
}
console.log(mensagem);

const arrayLet = [];
for(let i = 1; i < 5; i++) {
    arrayLet.push(function(){
        console.log(i);
    })    
}

arrayLet.forEach(function(funcao){
    funcao();
});

const arrayVar = [];
for(var i = 0; i < 5; i++){
    arrayVar.push(function(){
        console.log(1);
    })
}

// Legibilidade

// Hoisting
imprimirNome('Batata');

function imprimirNome(nome){
    console.log(nome);
}

// na declaração de uma variavel let ou const, 
// é atribuido um TDZ (Temporal Dead Zone)
