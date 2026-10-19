// Escreve ultimo: segue os next até ao fim e devolve o valor do ultimo nó.
// Sem JSON, sem reverse -- é um ciclo.

type ListNode = { value: number; next: ListNode | null }

function ultimo(inicio: ListNode | null): number {
    let atual = inicio
    
    while (atual !== null && atual.next !== null) {
        atual = atual.next
    }
    if (atual == null){
        throw new Error("A lista esta Vazia.")
    }
    return atual.value
}

const lista: ListNode = { value: 10, next: { value: 20, next: { value: 30, next: null}}}

console.log(ultimo(lista)) // => 30 

