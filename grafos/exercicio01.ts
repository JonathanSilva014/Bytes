// Escreve vizinhos: recebe o grafo e um nó devolve a lista de nós a que ele liga. ese nó não existir no grafo?

type Graph = { [node: string]: string[] }

function vizinhos(graph: Graph, no: string): string[] {
    return graph[no] ?? []
}

const grafo: Graph = {A: ["B", "C"], B: ["A", "D"], C: ["A"], D: ["B"]}

console.log(vizinhos(grafo, "A")) // => ["B", "C"]

export {}