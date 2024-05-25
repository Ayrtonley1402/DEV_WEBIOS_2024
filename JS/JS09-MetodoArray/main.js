// Metódo forEatch
let frutas = ["Maçã", "Pera", "Melancia", "Açai", "Banana", "Kiwi"]

frutas.forEach(retornaInfo);
function retornaInfo(nomeFruta, indice){  // usando função
    console.log(`nomeFruta: ${nomeFruta}`)
    console.log(`Indice: ${indice}`)
}

frutas.forEach((nomeFruta, indice) =>{   // sem uso de função
    console.log(`nomeFruta: ${nomeFruta}`)
    console.log(`Indice: ${indice}`)
})

frutas.forEach((teste, indice) => console.log(teste, indice)) //maneira mais rápida
console.clear()

let tarefas = [
    {
        id: 1,
        isPronta: true,
        nomeTarefa: "Pular"
    },
    {
        id: 2,
        isPronta: false,
        nomeTarefa: "Lavar a louça"
    },
    {
        id: 3,
        isPronta: true,
        nomeTarefa: "Varrer a casa"
    }
]
// Arrow function
tarefas.forEach((tarefa) => console.log(tarefa.nomeTarefa)) //retronar só um objeto especifico
console.clear()

// Método Map
let numeros = [4, 9, 16, 25] // precisa fazer uma nova variavel
let novoArray = numeros.map(Math.sqrt) // sqrt é a pra calucular a raiz quadrada
console.log("Array antigo: " + numeros)
console.log("Novo Array: " + novoArray)

let mapText = tarefas.map((retornaText) => {
    console.log(retornaText.nomeTarefa)
})
console.clear()

// Método Filter
let numero2 = [3, 13, 24, 36, 47, 50, 21, 60, 78, 89] // Também precisa criar uma nova variavel
let filtro = numero2.filter(retornaFiltro)
function retornaFiltro(num){
    return num > 30
}
console.log(filtro)

let tarefaFiltro = tarefas.map((resultadoFiltro) =>{
    return resultadoFiltro.isPronta === false
})
console.log(tarefaFiltro)
console.clear()

// Método Find
let sapatos = [
    {marca: "Nike", quantidade: 3 },
    {marca: "Adidas", quantidade: 5},
    {marca: "Puma", quantidade: 7}
]

console.log(
    sapatos.find((retornaFind) => {
        return retornaFind.marca = "Puma"
    })
)
