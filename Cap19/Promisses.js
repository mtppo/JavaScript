// Promisses, auxilio em operações assincronas
function Assincrona(arg1, callback){
    callback();
}

function callback(){
    console.log("Teste de callback");
}

let promise = new Promise((resolve, reject) => {
    let resultado = true;
    if(resultado){
        resolve("deu tudo certo!");
    }
    else{
        reject("deu tudo errado!");
    }
});

// promise.then((data) => console.log(`resultado positivo: ${data}`));
// promise.catch((data) => console.log(`resultado negativo: ${data}`));

promise
    .then((data) => {
        console.log(`resultado positivo: ${data}`); 
        return data;
    })
    .then((data) => console.log(`resultado positivo 2: ${data}`))
    .catch((data) => console.log(`resultado negativo: ${data}`));

// Lidando com erros inesperados

