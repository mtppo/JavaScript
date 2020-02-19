// Exercicios do Capt16

// Modelando com classes
// function Carro(modelo, chassi, qdtPortas){
//     this.modelo = modelo;
//     this.chassi = chassi;
//     this.qdtPortas = qdtPortas;
// }

// const prototipo = new Carro('prototipo', '1290381209', 2);
// console.log(prototipo.modelo);
// console.log(prototipo.chassi);
// console.log(prototipo.qdtPortas);

// function Carro(modelo){
//     this.modelo = modelo;
// }

// Uso do prototype para adicionar propriedade na classe
// Carro.prototype.ligar = function(){
//     console.log("vrum vrum");
// }

// const prototipo2 = new Carro('prot.2','123789456',2);
// prototipo2.ligar();

class Carro{
    constructor(modelo, chassi, qtdPortas){
        this.modelo = modelo;
        this.chassi = chassi;
        this.qtdPortas = qtdPortas;
    }

    ligar(){
        console.log("carro ligado");
    }
}

const basico = new Carro('Básico', '123123', 2);

console.log(basico.modelo);
console.log(basico.chassi);
console.log(basico.qtdPortas);

basico.ligar();

// estendendo classes
class Sonix extends Carro{
    abrirTetoSolar(){
        console.log('abrindo teto solar');
    }
}

const carroSonix = new Sonix('LTZ', '3214123', 5);
console.log(carroSonix.modelo);
console.log(carroSonix.chassi);
console.log(carroSonix.qtdPortas);
carroSonix.abrirTetoSolar();

// Declaração por meio de expressoes
const Classe = class Nome {
    getClassName(){
        return Nome.name;
    }
};

class Casa {
    static abrirPorta(){
        console.log('abrindo porta');
    }
}

Casa.abrirPorta();

// ATRIBUTOS PRIVADOS COM WEAKMAP
const propriedades = new WeakMap();

class VideoGame {
    constructor(nome, controles, saida, midia){
        propriedades.set(this, {
            nome, controles, saida, midia
        });
    }

    recuperarPropriedade(propriedade){
        return propriedades.get(this)[propriedade];
    }
}

const caixas360 = new VideoGame('caixa360', 4, 'hdmi', 'dvd');
console.log(caixas360.recuperarPropriedade('nome'));

// Ultimas considerações

