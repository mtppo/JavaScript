// Capt 15

// Utilizacao de destrutores
const Usuario = {
    nome: 'Marcio',
    sobrenome: 'Tavares',
    senha: 'mtavares',
    email: 'marcio.tavares@gmail.com',
    profissao: 'Programador',
    github: 'https://github.com/mtppo'
}

const {email} = Usuario;
console.log(email);

const {github} = Usuario;
console.log(github);

// utilizando multiplos destrutores
const {nome, sobrenome, profissao} = Usuario;
console.log(nome, sobrenome);


// Rotulando propriedades
const Pessoa = {
    sobrenome: 'Alberto'
}

const {sobrenome:apelido} = Pessoa;
console.log(apelido);

// Desestruturamento de varios objetos
console.log('Desestruturamento de varios objetos');
const suco = {
    sabor: 'uva',
    quantidade: '500ml'
}

function descreveSuco({sabor, quantidade}){
    console.log(`Este suco é de sabor ${sabor} e possui ${quantidade}`);
}

descreveSuco(suco);

function recuperaDadosDaAPI(){

    // exemplo de retorno JSON
    const data = {
        temperatura: '37',
        umidade: '5ml'
    }

    return data
}

const {temperatura} = recuperaDadosDaAPI();
console.log(temperatura);

// Desestruturamento de arrays
const cores = ['azul', 'cinza', 'branco', 'preto'];

console.log(cores[0]);
console.log(cores[1]);

const contatos = [
    {nome: 'Alex', numero: '1234-5678'},
    {nome: 'Carla', numero: '4321-5678'},
    {nome: 'Basilio', numero: '9999-5678'}
];

const[,Carla] = contatos;

function mostraNumero({numero}){
    console.log(numero);
}

mostraNumero(Carla);
