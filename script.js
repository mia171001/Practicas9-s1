for (let i = 2; i <= 100; i += 2) {
    if (i % 2 === 0) {
        console.log("Los numeros pares son: ", i); // Imprime solo números pares
    }
}

for (let i = 1; i <= 100; i += 2) {
    if (i % 2 === 1) {
        console.log("Los numeros impares son: ", i); // Imprime solo números pares
    }
}

let additionTotal = 0;

for (let i = 1; i <= 100; i++) {
    additionTotal += i;
}

console.log("La suma de los numeros del 1 al 100 es:", additionTotal)