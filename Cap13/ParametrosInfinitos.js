// function monataQuerySelect(){
//     const tabela = arguments[0];
//     const wtdArgs = arguments.length;

//     let cols = '';
//     if(qtdArgs > 1){
//         for (let index = 1; index < array.length; index++) {
//             cols += `${arguments[index]},`;
//         }
//         cols = cols.substring(0, cols.length - 2);
//     }
//     else{
//         cols = '*';
//     }

//     return `SELECT ${cols} from ${tabela}`;
// }

function logarTodosArgumentos(){
    for(let i = 0; i <arguments.length; i++)
    {
        console.log(arguments[i]);
    }
}

logarTodosArgumentos(1,2,3,'Jose', false)

function somar(){
    let soma = 0;
    const qtd = arguments.length;

    for (let i = 0; i < qtd; i++) {
        soma += arguments[i];
    }

    return soma;
}


console.log(somar(1));
console.log('--------');
console.log(somar(1,2,3,4));
console.log('--------');


// Operador Rest
console.log('\nOperador REST');
function somar(...valores){
    let soma = 0;
    const qtd = valores.length;

    for (let i = 0; i < qtd; i++) {
        soma += valores[i];
    }

    return soma;
}


console.log(somar(1));
console.log('--------');
console.log(somar(1,2,3,4));
console.log('--------');

// function numerosELetras(...numeros, ...letras){
//     // corpo da função
// }

// function numerosELetras(...numerosELetras){
//     // corpo da função
// }

// Utilizando conjunto de parametros fixos
console.log('Parametros fixos...');
function somaTudoEMultiplicaPor(multiplicador, ...valores){
    return valores.reduce((soma, valor) => {
        return soma + (valor * multiplicador);
    }, 0);
}

console.log(somaTudoEMultiplicaPor(2,1,2,3))
console.log(somaTudoEMultiplicaPor(3,1,2,3))

// Criar um query selector
