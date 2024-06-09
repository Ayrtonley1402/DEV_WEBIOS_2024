// getElementByid
// innerText > troca o texto
let primeiroTítulo = document.getElementById("primeiroTitulo")
primeiroTítulo.style.color = 'red'
primeiroTítulo.innerText = 'Amo Jesus'

let pegaClasse = document.getElementsByClassName("getClass")

for(i = 0; i < pegaClasse.length; i++){
    pegaClasse[i].style.color = 'blueviolet'
}
console.log(pegaClasse)
console.clear()

let byName = document.getElementsByName("filho") // pega o name
console.log(byName)

byName.forEach(funcao)
function funcao(byName){
    return byName.style.color = 'red'
}
console.clear()

let byTagName = document.getElementsByTagName("p") // pega a tag
for(c = 0; c < byTagName.length; c++){
    byTagName[c].style.color = 'white'
    byTagName[c].style.fontSize = '30px'
    byTagName[c].style.boxShadow = '10px 10px 10px black'
    byTagName[c].style.borderRadius = '100px'
    byTagName[c].style.padding = '15px'
    byTagName[c].style.textAlign = 'center'
    if(c % 2) byTagName[c].style.backgroundColor = 'black' // se a sobra do numero for impar sera cor de fundo wheat, se for par será black
    else byTagName[c].style.backgroundColor = 'wheat'
}

let removendo = document.getElementById('remove1')
removendo.remove() // pra remover um item
console.log(byTagName)

let recebeLista = document.getElementById('paiLista')
recebeLista.style.listStyle = 'circle'