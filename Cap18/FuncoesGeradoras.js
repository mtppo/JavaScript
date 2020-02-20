function* percorrerLinha477(){
    console.log('Passei pela rua 1');
    yield 'Fim da linha';
}

percorrerLinha477();

const linha = percorrerLinha477();
linha.next();
const parada = linha.next();
console.log(parada);

function* percorrerLinha4772(){
    console.log('Passei pela rua 1');
    yield 'Parada 1';
    console.log('Passei pela rua 2');
    yield 'Parada 2';
    console.log('Passei pela rua 3');
    yield 'Parada 3';
    console.log('Passei pela rua 4');
    yield 'Fim da linha';
}


const linha2 = percorrerLinha4772();
let next = linha2.next();    console.log(next);
next = linha2.next();        console.log(next);
next = linha2.next();        console.log(next);
next = linha2.next();        console.log(next);
next = linha2.next();        console.log(next);



