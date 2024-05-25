let aluno = [
    {Nome: "Ana", Idade: 17, Nota: 8, Ano: "2°B"},
    {Nome: "Bruno", Idade: 16, Nota: 6, Ano: "2°C"},
    {Nome: "Verônica", Idade: 16, Nota: 9, Ano: "2°C"},
    {Nome: "Marta", Idade: 15, Nota: 5, Ano: "3°C"},
    {Nome: "Brenno", Idade: 19, Nota: 6, Ano: "3°C"},
    {Nome: "Maria", Idade: 14, Nota: 4, Ano: "1°F"}
]
console.log(aluno)
console.log(aluno[1])
console.log(`Nota da Maria: ${aluno[5].Nota}`)
let recebeJson = JSON.stringify(aluno)
console.log(recebeJson)