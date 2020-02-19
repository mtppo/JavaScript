
const array1 = [15,25,50,75,10];

//const found = array1.findIndex(element => element > 50);

var elemento = 50;
let previous;
let next;

array1.forEach(function(e, i){    
    if(e === elemento)
    {
        console.log(`Valo: ${e} do indice: ${i}`);
        previous = i - 1;
        next = i + 1;
    }
})


console.log(previous);
console.log(next);