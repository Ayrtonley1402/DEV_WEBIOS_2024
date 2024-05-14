var string = "Os alunos estão "
var string2 = "reprovados "
var string3 = "ou aprovados?"
console.log(string + string2 + string3) //Assim só vai concatenar o texto
var num1 = 4
var num2 = 5
var texto = 
console.log(`${string + string2 + string3 + (num1 +num2)}`)//Assim tem como fazer opracões matáticas, dentro do parentese
console.clear()

var texto1 = "IOS fez uma excurssão na TOTVS com três cabritinhos(alunos)"
console.log(texto1.charAt(14))
console.clear()

var texto2 = "IOS"
var texto3 = "Está chovendo hamburguer"
console.log(`Na variavel texto2 tem ${texto2.length} caracteres`)
console.log(`Na variavel texto3 tem ${texto3.length} caracteres`)
console.clear()

var texto4 = "tudo minusculo"
var texto5 = "TUDO MAIUSCULO"
console.log(`Maiusculo: ${texto4.toUpperCase()}`)
console.log(`Minusculo: ${texto5.toLowerCase()}`)
console.clear()

var str = "Mozilla"
console.log(str)
console.log(str.substring(5, 7))
console.log(str.substring(3))
console.clear()

var texto6 = "Olha a bbzinha"
console.log(texto6)
console.log(texto6.replace('bbzinha' ,'tolinha'))

var texto7 = "/             Olha a toilnha           /"
console.log(texto7)
console.log(texto7.trim())