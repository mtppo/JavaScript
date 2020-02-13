var sociedadeAnel = ['Frod', 'Legolas', 'Aragorn', 'Gymlin']

var iteradorSA = sociedadeAnel[Symbol.iterator]();

// console.log(iteradorSA.next());
// console.log(iteradorSA.next());
// console.log(iteradorSA.next());
// console.log(iteradorSA.next());
// console.log(iteradorSA.next());

// Usando o while
var participantesSociedadeAnel = [
    {nome: 'Legolas', frase: 'You have my arrow...'}, 
    {nome: 'Aragorn', frase: 'You have my sword...'}, 
    {nome: 'Gymlin', frase: 'You have my axe...'}, 
    {nome: 'Frod', frase: 'You have my ring...'}, 
];

var itera = participantesSociedadeAnel[Symbol.iterator]();
var done = false;
var proximoNovo = itera.next();
do{
    var participante = proximoNovo.value;
    console.log(participante.nome + ' diz '+ participante.frase);   
    proximoNovo = itera.next();
}while(!proximoNovo.done);