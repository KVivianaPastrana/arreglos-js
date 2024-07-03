let matriz = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let numerosPares = [];
let numerosImpares = [];

let contarPares = 0;
let contarImpares = 0;

for (let i = 0; i < matriz.length; i++) {
    if (matriz[i] % 2 === 0) {
        numerosPares[contarPares++] = matriz[i];
    } else {
        numerosImpares[contarImpares++] = matriz[i];
    }
}

console.log("Numeros del 1 al 10:", matriz);
console.log("Números pares:", numerosPares);
console.log("Números impares:", numerosImpares);

