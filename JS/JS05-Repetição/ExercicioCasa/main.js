function calcularTabuada(numero) {
    for (var tabuada = 1; tabuada <= 10; tabuada++) {
        console.log(numero + " x " + tabuada + " = " + (numero * tabuada));
    }
}

const tabuadaDoDois = true;

if (tabuadaDoDois) {
    console.log("Tabuada do 2:");
    calcularTabuada(2);
} else {
    console.log("Tabuada do 3:");
    calcularTabuada(3);
}
