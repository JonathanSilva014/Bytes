// Receber 3 notas em texto, uma delas invalida. queres um pequeno relatório.

// Oque fazer

// 1. Declarar first, second e third com Number("12"), Number("9") e Number("nove").
// 2. imprime Number.isFinite de cada uma.
// 3. imprime Math.max(first, second, third) e confirma que da NaN.)
// 4. imprime Math.max e Math.min só das duas notas válidas.
// 5. imprime a amplitude (maxima menos minima).
// imprime a média das duas válidas arrendondada com Math.round.

const first = Number("12");
const second = Number("9");
const third = Number("nove");

console.log(Number.isFinite(first))
console.log(Number.isFinite(second))
console.log(Number.isFinite(third))

console.log(Math.max(first, second, third))
console.log(Math.max(first, second))
console.log(Math.max(first, second))

console.log(Math.max(first, second) - Math.min(first, second))
console.log(Math.round((first + second) / 2))
