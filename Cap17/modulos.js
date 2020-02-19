// Trabalhando com modularização
// Commonjs x AMD

const PI = 3.14;

function comprimento(raio){
    return 2 * PI * raio;
}

function area(raio){
    return PI * (raio * raio);
}

export default comprimento;
export {area, PI}

// Modulos são singletons
// Modulos podem importar de outros modulos
// a importação de modulos sao hoisted
