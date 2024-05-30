//Class
// Objetos tem duas coisas: Propriedades = Características e Metodos = Funcionalidades
class Carro{
    constructor(nome, ano){ //Molde de um objeto
         this.nome = nome
         this.ano = ano
         // propriedades
         // Isso
         // variavel nome/propriedade sempre pertecem a isso; isso o que?    Pertecem a classe que você acabou de criar
    }
    // Funcionalidade para saber quantos anos o carro tem; ano atual - ano da criação
     anoCarro(anoAtual) {
        return anoAtual - this.ano
    }
}
// new: novo
// criar uma nova cópia da classe: instancie
let carro1 = new Carro("KWID", 2012)
let carro2 = new Carro("MOBI", 2015)
let carro3 = new Carro("HB20", 2019)
console.log(carro1)
console.log(carro2)
console.log(carro3)

let anoAtual = new Date() // precisa do new
let recebeAno = anoAtual.getFullYear()
console.log(anoAtual)
console.log(recebeAno)
console.log(carro1.anoCarro(recebeAno)) // ano= 2012 de lá de cima   recebeAno= q está recebendo o ano atual.getFullYear()