interface Venda {
  id: number
  produto: string
  preco: number
  quantidade: number
  metodoPagamento: string
}

interface Pessoa {
  nome: string
  vendas: Venda[]
}

const pessoas: Pessoa[] = [
  {
    nome: 'Ana',
    vendas: [
      { id: 1, produto: 'Teclado', preco: 25.5, quantidade: 2, metodoPagamento: 'MB WAY' },
      { id: 2, produto: 'Rato', preco: 12.99, quantidade: 3, metodoPagamento: 'Cartão' },
      { id: 3, produto: 'Monitor', preco: 149.9, quantidade: 1, metodoPagamento: 'Dinheiro' },
    ],
  },
  {
    nome: 'Bruno',
    vendas: [
      { id: 4, produto: 'Teclado', preco: 25.5, quantidade: 1, metodoPagamento: 'MB WAY' },
      { id: 5, produto: 'Auscultadores', preco: 39.9, quantidade: 2, metodoPagamento: 'Cartão' },
      { id: 6, produto: 'Rato', preco: 12.99, quantidade: 4, metodoPagamento: 'MB WAY' },
      { id: 7, produto: 'Monitor', preco: 149.9, quantidade: 1, metodoPagamento: 'Cartão' },
      { id: 8, produto: 'Teclado', preco: 25.5, quantidade: 3, metodoPagamento: 'Dinheiro' },
    ],
  },
  {
    nome: 'Carla',
    vendas: [
      { id: 9, produto: 'Webcam', preco: 59.0, quantidade: 2, metodoPagamento: 'Cartão' },
      { id: 10, produto: 'Rato', preco: 12.99, quantidade: 1, metodoPagamento: 'Dinheiro' },
    ],
  },
]



// 1. Total de uma venda.
function calcularTotalVenda(venda: Venda): number {

}



// 2. Mostrar as pessoas disponíveis, numeradas a partir de 1.
function mostrarPessoas(pessoas: Pessoa[]): void {

}



// 3. Valor de cada venda.
function obterValoresDasVendas(vendas: Venda[]): number[] {

}



// 4. Faturação total: soma de todos os valores das vendas.
function calcularFaturacao(vendas: Venda[]): number {

}



// 5. Número de vendas, soma e média de cada método de pagamento.
function analisarMetodosPagamento(vendas: Venda[]): void {

}



// 6. Resumo: o produto de cada venda e o seu total.
function mostrarVendas(vendas: Venda[]): void {

}






// Imprimir resultados


// Escolher a pessoa a analisar (número 2 do menu, índice 1 do array).
const escolha = 2
const pessoaEscolhida = pessoas[escolha - 1]


// Função 1: total de uma venda (a primeira venda da pessoa escolhida).
console.log('\n--- 1. Total de uma venda ---')
console.log(`${calcularTotalVenda(pessoaEscolhida.vendas[0]).toFixed(2)} €`)


// Função 2: pessoas disponíveis, numeradas a partir de 1.
console.log('\n--- 2. Pessoas disponíveis ---')
mostrarPessoas(pessoas)


// Função 3: valor de cada venda, num number[].
console.log('\n--- 3. Valor de cada venda ---')
console.log(obterValoresDasVendas(pessoaEscolhida.vendas))


// Função 4: faturação total, mais o número de vendas e a média por venda.
console.log('\n--- 4. Faturação total ---')
const faturacao = calcularFaturacao(pessoaEscolhida.vendas)
const numeroVendas = pessoaEscolhida.vendas.length
console.log(`Número de vendas: ${numeroVendas}`)
console.log(`Faturação total: ${faturacao.toFixed(2)} €`)
console.log(`Média por venda: ${(faturacao / numeroVendas).toFixed(2)} €`)


// Função 5: número de vendas, soma e média por método de pagamento.
console.log('\n--- 5. Métodos de pagamento ---')
analisarMetodosPagamento(pessoaEscolhida.vendas)


// Função 6: resumo de cada produto e o seu total.
console.log('\n--- 6. Resumo por produto ---')
mostrarVendas(pessoaEscolhida.vendas)




/*
--- 1. Total de uma venda ---
25.50 €

--- 2. Pessoas disponíveis ---
1 - Ana
2 - Bruno
3 - Carla

--- 3. Valor de cada venda ---
[ 25.5, 79.8, 51.96, 149.9, 76.5 ]

--- 4. Faturação total ---
Número de vendas: 5
Faturação total: 383.66 €
Média por venda: 76.73 €

--- 5. Métodos de pagamento ---

Por método de pagamento:
  MB WAY: 2 vendas, soma 77.46 €, média 38.73 €
  Cartão: 2 vendas, soma 229.70 €, média 114.85 €
  Dinheiro: 1 vendas, soma 76.50 €, média 76.50 €

--- 6. Resumo por produto ---

Resumo por produto:
  Teclado → 25.50 €
  Auscultadores → 79.80 €
  Rato → 51.96 €
  Monitor → 149.90 €
  Teclado → 76.50 €
*/