// Escreve transpor: troca linhas por colunas. Dica: percorre os indicis da linha 0

function transpor(matriz: number[][]): number[][] {
    return matriz[0].map((_,columIndex) =>
    matriz.map((row) => row[columIndex]))
}

console.log(transpor([[1, 2], [3, 4]])) // => [[1, 3], [2, 4]];