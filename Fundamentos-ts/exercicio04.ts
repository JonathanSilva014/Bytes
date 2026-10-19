// Escreve ordenar a mão: comparava vizihnos e troca. Proibido usar .sort()

function ordernar(valores: number[]): number[] {
    const a = [...valores]

    for (let i = 0; i < a.length - 1; i++) 
        for (let j = 0; j < a.length - 1 - i; j++) 
        if (a[j] > a[j + 1])
            [a[j], a[j + 1]] = [a[j + 1], a[j]] 
    return a
}

console.log(ordernar([3, 1, 2])) // => [1, 2, 3]