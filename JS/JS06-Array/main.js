var numeros = [-2, 40, 16, 111, 33, 64]
console.log(numeros)
console.log(numeros[3])
console.clear()

var pessoas = ["Iraldina", "Alessandro", "Marley", "Kelly", "Alex", "Vitor", "Jesus", "Rosana"]

console.log(pessoas[3], pessoas[7])
console.clear()

var bidi =[
    ["Banana", "Melancia", "Uva"], //linha 0
    ["Laranja", true, 1], //linha 1
    //depois a coluna
    [null, "Uva", -350, 4566] //linha 2
]
console.log(bidi)
console.clear()

var itens = [
    ["Pipoca", "Arroz", "feijão", "batata"],
    ["molho de tomate", "alface", "leite em pó", "detergente"],
    ["leite de coco", "candida", "maçã", "vinagre"],
    ["bolacha", "azeite", "limão", "shampoo"]
]
console.log(` ${itens[0][2]} \n ${itens[1][3]} \n ${itens[2][2]}\n ${itens[3][3]}`)
console.clear()
let moeda = ["Real", "Euro", "Coroa", "Dolar"]

console.log(moeda)
moeda[3] = "Yen"
console.log(moeda)
console.clear()

let numArray = [2, 4, 6, 8, 10]
console.log(numArray)
var mudanca = numArray.toString()
console.log(mudanca)
console.clear()

var teste1 = [5, 10, 15, 20, 25, 30]
console.log(teste1)
var mudanca2 = teste1.join(" EU ")//muda o separador
console.log("Com o Join")
console.log(mudanca2)
var mudanca3 = teste1.toString()
console.log("Com o toString")
console.log(mudanca3)
console.clear()

let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(array.length)
console.clear()

let utilizapop = ["Pollyana", "André", "Felippe", "Lucas Nathan", "Esther", "Lude Milla"]
console.log("sem o pop: " + utilizapop)
var mudanca4 = utilizapop.pop()//retira o ultimo item
console.log("depois do pop: " + utilizapop)//ocorre depois de ter feito a mudança 
console.log("O nome retirado: " + mudanca4)
var mudanca5 = utilizapop.push("Saraiva")//coloca um nome a mais
console.log(mudanca5)
console.log(utilizapop)
console.clear()

var nomes = ["Audi", "Celta", "Uno", "Mercedez", "HB20"]
console.log(nomes)
var mudanca6 = nomes.shift()
console.log(mudanca6)
console.log(nomes)
console.clear()

var inicio = [true, 34, "Mano", "Sou lindo", "JS"]
console.log(inicio)
var mudanca7 = inicio.unshift("Mh bbzinha é tolinha")
console.log(mudanca7)
console.log(inicio)
console.clear()

delete inicio[2]
console.log(inicio)