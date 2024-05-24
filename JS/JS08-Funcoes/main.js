// Função
function soma(num1, num2, num3) {
    var num1 
    var num2 
    var num3
    return num1 + num2 + num3;
}
console.log(soma(2, 3, 6)) 

// Exercicio

function media(valor1, valor2, valor3, valor4,) {
    var valor1
    var valor2
    var valor3
    var valor4
    return (valor1 + valor2 + valor3 + valor4) / 4
}
console.log("Nota final: " + media(7, 8, 9, 10,))
console.clear()

const media2 = (valor1, valor2, valor3, valor4) => {
     return (valor1 + valor2 + valor3 + valor4) / 4
}
console.log(media2(4 , 7, 10, 8))
console.clear()

function onloadTela() {
    alert("Sua tela está carregada: Bem vindo")
    console.log("Recarregou a tela")
}
console.clear()

const clique = () => {
    alert("Bem-vindo você clicou no vírus")
    console.log("Você clicou no vírus")
}
