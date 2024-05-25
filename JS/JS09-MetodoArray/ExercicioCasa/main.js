let numeros = [17, 43, 8, 4, 97, 56, 29]
numeros.forEach(trazInfo);
function trazInfo(numero){
     console.log(numero % 2 === 0 ? `${numero} é par` : `${numero} é impar`)
}

let numeros2 = [17, 43, 8, 4, 97, 56, 29, 3, 75, 34, 88, 82 , 61]
let min = 20
let max = 80
let filtragem = numeros2.filter(numero => numero >= min && numero <= max)
console.log(filtragem)
