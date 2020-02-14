// Exemplos de criação do objetos
function Livro(titulo){
    this.titulo = titulo;
}

var livro = new Livro('The Wicther');
console.log(livro.titulo);

var livro = {
    titulo: 'Shadown Run',
    anoLancamento: 1998
}

console.log(livro.titulo);
console.log(livro.anoLancamento);

// Declaracao de propriedades
var nome = 'Maria';
var sobrenome = 'Madalena';

var pessoa = {
    nome: nome,
    sobrenome: sobrenome
}

console.log(pessoa.nome);
console.log(pessoa.sobrenome);

const pessoa2 = {
    nome,
    sobrenome,
    apresentacao(){
        console.log(`Olá! sou ${nome} ${sobrenome}`);
    }
};

pessoa2.apresentacao();

// Índices de propriedades computadas
const nomeMetodo = 'invocar';
const objeto = {
    [nomeMetodo](){
        console.log('executo método');
    }
}

objeto.nomeMetodo()