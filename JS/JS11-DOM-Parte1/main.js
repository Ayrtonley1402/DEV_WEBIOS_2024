// DOM
// Link com o arquivo HTML
// Acessar o DOM (document)

// document.body.style.backgroundColor = "darkblue"
document.title = "Times"

var time = prompt("Qual o nome do time")

if(time == "Sao Paulo"){ // se for
    alert("Você é gay")  // vai aparecer
    document.body.style.backgroundColor = "red"
    // createElement > serve para criar uma tag no HTML pelo Javascript
    let nomeTime = document.createElement('h1')
    nomeTime.innerHTML = "São Paulo - Rogério Ceni"  // innerHTML > Inserir uma informação no HTML
    document.body.appendChild(nomeTime)
}else if(time == "Corinthians"){
    alert("Você torce pro maior clube do mundo")
    document.body.style.backgroundColor = "black"
    let nomeTime = document.createElement('h1')
    nomeTime.innerHTML = "Corinthians - Cássio"
    document.body.appendChild(nomeTime)
    nomeTime.style.color = "white" // trocar a cor da letra - chama a variavel
}else if(time == "Palmeiras"){
    alert("Sem mundial")
    document.body.style.backgroundColor = "green"
    let nomeTime = document.createElement('h1')
    nomeTime.innerHTML = "Palmeiras - Marcos"
    document.body.appendChild(nomeTime)
}else{
    alert("Peixinho")
}

// window.confirm("Tu é corinthiano ?"); // Escolher algo
var teste= prompt("Escreve aí") // abre uma caixa de escrita 
console.log(teste) // para guardar uma informação