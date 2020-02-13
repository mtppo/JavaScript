var nomes = ['Maria','Jose','Joaquim'];

// forma com uso de função anônima function(nome){...}
nomes.forEach(function(nome){
    console.log(nome);
});

console.log("\nOutra forma");

// Função não sendo anônima
function imprimeNomes(nome){
    console.log(nome);
}

nomes.forEach(imprimeNomes);

// Alterando valores de array
console.log("\nAlterando valores dentro do array");

var canais = ["Globo", "SBT", "Band", "Record"];
canais.forEach(function(canal){
    canais.push("RedeTV"); // este item será ignorado
    console.log(canal);
})

console.log(canais);

console.log("\nUsando MAP");

var numeros = [1,2,3];
var dobro = [];

for(var i = 0; i < numeros.length; i++){
    dobro.push(numeros[i] * 2);
}

console.log(numeros);
console.log(dobro);

console.log("\n usando o MAP");
var dobro2 = numeros.map(function(numero){
    return numero * 2
});

console.log(dobro2);

console.log("\nUsando Filter");

var alunos = [
    {nome:'Joao', idade:30},
    {nome:'Jose', idade:31},
    {nome:'Maria', idade:32}
]

var alunosMaiores = alunos.filter(function(aluno){
    return aluno.idade > 30;
});

console.log(alunosMaiores);

// Uso do find
var alunos2 = [
    {nome: 'joao'},
    {nome: 'jose'},
    {nome: 'maria'}
]

// forma convencional
var aluno;
for (var index = 0; index < alunos2.length; index++) {
    if(alunos2[index].nome === 'jose')
    {
        aluno = alunos2[index];
    }
}

console.log(aluno);

console.log('\nUtilizando o Find');

// utilizando a função find
var aluno2 = alunos2.find(function(aluno) {
    return aluno.nome === 'jose';
});

console.log(aluno2);

console.log("\nUso do Every");
// Utilizando o Every (retorna valor boleano, se todos os elementos respeitam a condição)
var todosAlunosMaioresNovos = alunos.every(function(alunoNovo) {
    return alunoNovo.idade > 30;
})

console.log(todosAlunosMaioresNovos);

// Uso do some
var malas = [12, 22, 31, 30];
var haMalasAcimaPeso = malas.some(function(mala) {
   return mala > 30; 
});

console.log(haMalasAcimaPeso);

// Utitilizando a função Reduce
// condensa (soma), todos os elementos do array
var totais = [12, 3.90, -12];

var soma = 0;
var somaDosTotais = totais.reduce(function(soma, valor) {
    return soma + valor;
}, 0);

console.log(somaDosTotais);

