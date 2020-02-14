var obj = {
    chave1 : 2,
    chave2 : 1,
    chave3 : 3
}

console.log(obj);

// Utilizando o MAP
var map = new Map();
function funcao(){};
var objeto = {};

map.set("String", "sou uma string");
map.set(objeto, "sou uma objeto");
map.set(funcao, "sou uma funcao");

console.log(map.get("String"));
console.log(map.get(objeto));
console.log(map.get(funcao));

console.log(map.has("String"));
console.log(map.has("abc"));

map.delete("String");
console.log(map.has("String"));
console.log(map.has(objeto));

// Limpando o map
map.clear();
console.log("tamanho: " + map.size);
console.log(map);

var mapa = new Map();
mapa.set('um', 1);
mapa.set('dois', 2);
mapa.set('tres', 3);

for(var item of mapa.keys()){
    console.log(item);
}

for(var item of mapa.values()){
    console.log(item);
}

for(var entrada of mapa.entries()){
    console.log(entrada);
}

// WEAKMAP (Coleção de chave-valor)
// var weakMap = new WeakMap();
// var elemento01 = window;
// var elemento02 = document.querySelector('body');

// weakMap.set(elemento01, 'sou o elemento1');
// weakMap.set(elemento02, 'sou o elemento2');

// console.log(weakMap.get(elemento01));
// console.log(weakMap.get(elemento02));

var weakMap = new WeakMap();
function funcao(){};
var objeto = {};

//weakMap.set("string", "isso é uma string");
weakMap.set(funcao, "isso é uma funcao");
weakMap.set(objeto, "isso é um objeto");

console.log(weakMap.get(funcao));
console.log(weakMap.get(objeto));

