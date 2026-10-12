//Array de numeros: number []
// se for array de String, seria string[], ou seja , tipo + [] "colchetes"

const score: number[] = [10, 20, 30, 40, 50];

let maximo = Math.max(...score);
let minimo = Math.min(...score);

console.log(maximo);
console.log(minimo);    

