// Escreve topo: devolve a ultima ação sem a tirar da pilha. é o peek -- pop() não serve.

function topo(acoes: string[]): string | undefined {
    return acoes[acoes.length - 1]
}

const acoes: string[] = ["escreve titulo", "altere preço"]

console.log(topo(acoes), acoes.length) // => "alterar preço" 2