// Objetos
let pessoa = {
    corDosOlhos: "verde",
    altura: 1.70,
    corCabelo: "Preto",
    nome: "Caio",
    sobrenome: "Maciel",
    hobbie: ["Futebol", "LOL", "Tocar guitarra"],
    // criar outro objeto
    endereço: {
        rua: "João Medeiro",
        numero: 234,
        cidade: "São Paulo",
        estado: "SP"
    }
}
console.log(pessoa)
console.log(pessoa.nome) //retornar apenas uma propiedade
console.log(pessoa.hobbie)
console.log(pessoa.hobbie[1]) // para retornar dentro do hobbie
console.log(pessoa.endereço)
console.log(pessoa.endereço.estado)
console.clear()

let tarefa = [
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
console.log(tarefa)
console.log(tarefa[1])//aparece o objeto inteiro
console.log(tarefa[1].nomeTarefa)//aparece uma só propriedade
console.clear()

let recebeJson = JSON.stringify(pessoa)
console.log(recebeJson)


var JSONITO = '{ "corDosOlhos": "verde", "altura": 1.7, "corCabelo": "Preto", "nome": "Caio", "sobrenome": "Maciel", "hobbie": ["Futebol", "LOL", "Tocar guitarra"], "endereço": { "rua": "João Medeiro", "numero": 234, "cidade": "São Paulo", "estado": "SP" } }'
console.log(JSONITO) // tem que colocar entre aspasa simples para modificar
console.log(JSON.parse(JSONITO))