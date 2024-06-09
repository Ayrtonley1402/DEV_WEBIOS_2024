// Primero Botão
const criaImagem = () =>{
    document.body.style.backgroundColor = "#262525"
    let imgs = document.createElement("img") ;
    imgs.src = '/JS/JS12-DOM-Parte2/ExercícioCasa/download (6).jpg'
    document.body.appendChild(imgs)
}

// Segundo Botão
const criaNome = () =>{
    let nome = prompt('Informe seu nome abaixo')
if(nome){
    document.getElementById("B_2")
    let nome1 = document.createElement('h1')
    nome1.innerText = "Olá " +  nome + "!" + " Bem-vindo(a) à nossa academia!"
    document.body.appendChild(nome1)
    nome1.style.color = 'pink'
}
}

// Terceiro Botão
const criaTabuada = () =>{
    let numero  = prompt('Digite um número')
numero = Number(numero)
if(isNaN(numero)){
    alert("Cooque um número não uma letra")
}
else{
    let tabuada = "";
    for (let i = 1; i <= 10; i++){
        tabuada += `${numero} x ${i} = ${numero * i}\n`
    }
    document.getElementById("B_3")
    let numero2 = document.createElement('h1')
    numero2.innerText = tabuada
    document.body.appendChild(numero2)
    numero2.style.color = "wheat"
}
}
