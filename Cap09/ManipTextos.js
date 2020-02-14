// Concatencao de String
const login = 'ecmascript';
const dia = '13 de setembro';
const ano = 2016;

const mensagem = 'Olá, ' + login + '\nHoje é: ' + dia + ' de ' + ano;

console.log(mensagem);

// Old School
var nome = 'Diego';
//console.log('Bem-vindo, ' + nome)

// Modelo novo (Interpolação de String)
console.log(`Bem-vindo, ${nome}`);

const n1 = 1, n2 = 2;
console.log(`${n1} + ${n2} = ${n1 + n2}`);

// Exibir resultado por linhas utilizando crase '`'
console.log(`
    exibindo
    uma
    palavra
    por
    linha
`);

// utilizando em modal
const div =
`
    <div>
        <p>Exemplo do uso em elemento HTML</p>
    </div>
`
console.log(div);

// Template strings marcado

const horas = new Date().getHours();
const mensagem2 = `Boa tarde! são: ${horas}`;
console.log(mensagem2);

