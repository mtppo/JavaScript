// Exemplo de uso de metaprogramação
// Acessar uma propriedade
// Configurar uma propriedade
// Enumerar propriedades
// Deletar propriedades
// Verificar existência de uma propriedades

// Artigos:
//https://www.linuxjournal.com/article/9604


class Usuario{
    constructor(login, senha){
        this.login = login;
        this.senha = senha;
    }
}

const usuario = new Usuario('SuperJS', '123');

console.log(usuario.login);
console.log(usuario.senha);

const proxy = new Proxy(usuario, {
    get(alvo, propriedade){
        console.log(`${propriedade} foi solicitada!`);
        return alvo[propriedade];
    }
});

console.log(proxy.login);
console.log(proxy.senha);

const validador = {
    set(alvo, propriedade, valor){
        if(propriedade === 'idade'){
            if(!Number.isInteger(valor)){
                throw new TypeError('A idade não é um número!');
            }
        }

        alvo[propriedade] = valor;
    }
}

const usuario2 = new Proxy({}, validador);
usuario2.idade = 40;

console.log(usuario2.idade);

// Desativando um proxy
// const {proxy, revoke} = Proxy.revocable(alvo, handler);

// const {proxy2, revoke} = Proxy.revocable({}, {});
// proxy2.teste = 'teste';

// console.log(proxy2.teste);
