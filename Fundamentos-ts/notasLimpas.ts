// Escreve melhoresNotas : remove as notas negativas e ordena por ordem crescente. Dica filter e depois sort.

function melhoresNotas(notas: number[]): number[]{
    const validar = notas.filter((notas) => nota >= 0)
    console.log("info: ", validar)
    return [...validar].sort((a,b) => a - b)
}
console.log(melhoresNotas([12, -1, 18, 8])) // => [8, 12, 18]

export {}