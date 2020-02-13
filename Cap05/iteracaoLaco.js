var numeros = [1,2,3,4,5];

for (let numero of numeros){
    console.log(numero);
}

var perfilDoFacebook = [
    {    
        nome: 'Marcio',
    idade: 40    
    }
]

for(var dado of perfilDoFacebook){
    console.log(dado);
}

var perfilDoFacebook2 = {
    nome: 'Marcio',
    idade: 40
}

for(var propriedade in perfilDoFacebook2)
{
    var info = perfilDoFacebook2[propriedade];
    console.log(info);
}

var numeros2 = [1,2,3,4,5];

console.log('\nUtilizando break');

// Uso do Break e Continue
for(var num of numeros2)
{
    if(num > 3){
        break;
    }
    console.log(num);
}

console.log('\nUtilizando o continue');
for(var num of numeros2)
{
    if(num === 2){
        continue;
    }
    console.log(num);
}