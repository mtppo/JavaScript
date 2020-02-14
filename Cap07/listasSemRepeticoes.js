// SET (Lista de valores que nunca se duplicam)
var listaSet = new Set();

console.log(listaSet.add(1));
console.log(listaSet.add(2));
console.log(listaSet.add(2));
console.log(listaSet.add(3));

for(var item of listaSet)
{
    console.log(item);
}


var set = new Set([2,1,1]);
for(const valor of set){
    console.log(valor);
}