// Escreve atender: tira da fila o primeiro pedido e dvolve-o. O array que sobra tem de ficar sem ele.

function atender(pedidos: string[]): string | undefined {
    return pedidos.shift()
}

const fila: string[] = ["pedido-1", "pedido-2", "pedido-3"]

console.log(atender(fila), fila.length) // => "pedidos-1 " 2