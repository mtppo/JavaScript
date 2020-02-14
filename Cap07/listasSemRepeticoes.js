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


var musicas = new Set();
musicas.add('musica1');

for(var item of musicas)
{
    console.log(item);
}

var musicas2 = new Set(['musica1', 'musica2']);

musicas2.delete('musica1');

for(var item of musicas2)
{
    console.log(item);
}

musicas2.clear();

for(var item of musicas2)
{
    console.log(item);
}

var musica3 = new Set(['musica3']);

if(musica3.has('musica3'))
{
    musica3.add('musica4');
}

for(var item of musica3)
{
    console.log(item);
}

// WEAKSET (previne a coleta do garbage colector)
var musica1 = {
    titulo: 'O amor nãe tem rollback',
    autor: 'SQL'
}

console.log(musica1);


