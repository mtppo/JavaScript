// Atribuindo valores padroes
function imprimeNomeCompleto(nome, sobrenome, nomeDoMeio = ""){
    let sobrenomeTratado = sobrenome || '';
    let nomeDoMeioTratado = nomeDoMeio || '';

    console.log(`${nome} ${sobrenomeTratado} ${nomeDoMeioTratado}`);
}

imprimeNomeCompleto('João', '', '');
imprimeNomeCompleto('Marcio', '', 'Tavares');

// valores Undefined
function multiplicaPor(valor, multiplicador = 2){
    return valor * multiplicador;
}

const valor = multiplicaPor(2,2);
console.log(valor);

// Referenciando outros valores padroes
function calculaPotencia(x = 2, y = x){
    console.log(Math.pow(x, y));
}

calculaPotencia();
calculaPotencia(2);
calculaPotencia(3,5);

// Utilizando funcoes como valores padroes
function facaAlgoMelhorTodosOsDias(nome, callback = z => {
    console.log(z);
}){
    callback(nome);
}

facaAlgoMelhorTodosOsDias('Marcio');

// Tornando parametros obrigatorios
inserirNaTela(objeto)