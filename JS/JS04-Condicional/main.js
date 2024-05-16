//IF
// Se os alunos estiverem com  blusa e o crachá emtão todos recebem 10
var todosdeCracha = true 

if(todosdeCracha == true){
     console.log("Todos recebem 10 em JS")
}else{
     console.log("Todos recebem 0 em JS")
}

var numero1 = 15
var numero2 = 17

numero1 > numero2 ? console.log("Número1 é maior") :console.log("Número2 é menor")//? verdadeiro e : falso (if - elfe)

// if(numero1 > numero2){
//     console.log("numero1 é maior que numero2")
// }
// else{
//     console.log("numero1 é menor que numero2")
// }

var mes = "Junho"

if(mes == "JANEIRO"){
    console.log("É verão")
}else if(mes == "JUNHO"){
    console.log("É outono")
}else if(mes == "Outubro"){                      // se não for nenhuma dessa duas de cima : É inverno
    console.log("É primavera")
}else{
    console.log("É inverno")
}

switch(mes){

    case "JANEIRO":
    console.log("É verão")
    break;

    case "Junho":
        console.log("É outono")
    break;    

    case "Outubro":
    console.log("É primavera") 
    break;

    default:
    console.log("É inverno")
    break;
}