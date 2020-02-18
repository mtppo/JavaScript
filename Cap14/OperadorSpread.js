// Uso do operado spread

var argumentos = [1,2,3];
console.log(argumentos[0], argumentos[1], argumentos[2]);

console.log.apply(console,argumentos);

const argumentos2 = [1,2,3];
console.log(...argumentos2);

// Utilizando função concat
const listCasa1 = ['leite'];
const listCasa2 = ['pao'];

const listaCompras = listCasa1.concat(listCasa2);
console.log(listaCompras);
console.log(listaCompras.length);

// Utilizando o spread
console.log('Utilizando o spread...');
console.log(listaCompras);
[
    'leite', 'arroz', 'feijao',
    'pao', 'frutas'
]

// Adicionando itens a um array

// Operador spread em chamadas de função
function soma(a,b){
    console.log(a + b);
}

soma(1,2);

var numeros = [1,2];
soma(...numeros);