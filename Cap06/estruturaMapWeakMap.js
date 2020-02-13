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
