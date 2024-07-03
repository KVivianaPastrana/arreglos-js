let matricesCinco = [
    [5, 10, 15, 20, 25],
    [30, 35, 40, 45, 50],
    [55, 60, 65, 70, 75],
    [80, 85, 90, 95, 100],
    [105, 110, 115, 120, 125]
];
let matricesNueve = [
    [9, 18, 27, 36, 45],
    [54, 63, 72, 81, 90],
    [99, 108, 117, 126, 135],
    [144, 153, 162, 171, 180],
    [189, 198, 207, 216, 225]
];
let numerosParesCinco = [];
let numerosImparesCinco = [];
let numerosParesNueve = [];
let numerosImparesNueve = [];

for (let fila = 0; fila < matricesNueve.length; fila++) {
    for (let columna = 0; columna < matricesNueve[fila].length; columna++) {
        if (matricesNueve[fila][columna] % 2 === 0) {
            numerosParesNueve.push(matricesNueve[fila][columna]);
        } else {
            numerosImparesNueve.push(matricesNueve[fila][columna]);
        }
    }
}

for (let fila = 0; fila < matricesCinco.length; fila++) {
    for (let columna = 0; columna < matricesCinco[fila].length; columna++) {
        if (matricesCinco[fila][columna] % 2 === 0) {
            numerosParesCinco.push(matricesCinco[fila][columna]);
        } else {
            numerosImparesCinco.push(matricesCinco[fila][columna]);
        }
    }
}
/* esta funcion realiza una suma dependiendo de lo que se tome
el acumulador empieza desde 0, POR ESTA RAZON SE VE UN CERO EN LA LINEA DE CODIGO,
REDUCE= RECORRE TODA LA FUNCIONE
NUMERO = ES LO QUE CONTIENEEL ARRAY
LA PALABRA NUMEROS SE REEMPLAZA POR "numerosParesNueve" , etc*/ 
function sumarNumeros(numeros) {
    return numeros.reduce((acumulador, numero) => acumulador + numero, 0);
}

console.log("Números pares tabla del nueve:", numerosParesNueve);
console.log("Suma de números pares tabla del nueve:", sumarNumeros(numerosParesNueve));
console.log("Números impares tabla del nueve:", numerosImparesNueve);
console.log("Suma de números impares tabla del nueve:", sumarNumeros(numerosImparesNueve));
console.log("Números pares tabla del cinco:", numerosParesCinco);
console.log("Suma de números pares tabla del cinco:", sumarNumeros(numerosParesCinco));
console.log("Números impares tabla del cinco:", numerosImparesCinco);
console.log("Suma de números impares tabla del cinco:", sumarNumeros(numerosImparesCinco));
