class contaBancaria{
    constructor(nome, idade, salario, sexo, agencia, conta, numeroConta){
        this.nome = nome
        this.idade = idade
        this.salario = salario
        this.sexo = sexo
        this.agencia = agencia
        this.conta = conta
        this.numeroConta = numeroConta
    }
    contaPoupanca(){
         const taxa = 1.5 / 100
         this.salario -= this.salario * taxa
         return this.salario
    }
    contaCorrente(){
         const taxa = 3.6 / 100
         this.salario -= this.salario * taxa
         return this.salario
    }
    contaEstudante(conta3){
         const taxa = 1.2 / 100
         this.salario -=
         this.salario * taxa
         return this.salario
    }
}

let Aluno1 = new contaBancaria("Pedro", 26, 1.500, "Masculino", 22679, "Itau",  35467150)
let salarioAtual = new Date()
let recebeSalario = salarioAtual.getFullYear()
console.log(Aluno1)
console.log(Aluno1.contaPoupanca(recebeSalario))

let Aluno2 = new contaBancaria("Helena", 23, 2.385, "Feminino", 55469, "Bradesco", 44396548)
let salarioAtual2 = new Date()
let recebeSalario2 = salarioAtual2.getFullYear()
console.log(Aluno2)
console.log(Aluno2.contaCorrente(recebeSalario2))

let Aluno3 = new contaBancaria("Marley", 17, 10.980, "Feminino", 22768, "Nubank", 24140217)
let salarioAtual3 = new Date()
let recebeSalario3 = salarioAtual3.getFullYear()
console.log(Aluno3)
console.log(Aluno3.contaEstudante(recebeSalario3))
