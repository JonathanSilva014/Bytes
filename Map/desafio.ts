interface Venda  {
    id: number;
    produto: string;
    preco: number;
    quantidade: number;
    metodoPagamento: string;
};

interface Pessoa  {
    nome: string;
    vendas: Venda[];
}

const pessoa: Pessoa[] = [
    {
        nome: "Jonathan",
        vendas: [
            {id: 1,produto: "Notebook",preco: 5000,quantidade: 1,metodoPagamento: "Visa"},
            {id: 2,produto: "Mouse",preco: 5,quantidade: 1,metodoPagamento: "MBWay"},
            {id: 3,produto: "Caneta",preco: 0.90,quantidade: 1,metodoPagamento: "MBWay"},
            {id: 4,produto: "Celular",preco: 150,quantidade: 1,metodoPagamento: "MBWay"},
            {id: 5,produto: "Teclado Mecânico",preco: 1,quantidade: 1,metodoPagamento: "MBWay"},
            {id: 6,produto: "TV",preco: 800,quantidade: 1,metodoPagamento: "MBWay"},
            {id: 7,produto: "AirFryer",preco: 59,quantidade: 1,metodoPagamento: "MBWay"}
        ]
    },
    {
        nome: "Jeniffer",
        vendas: [
            {id: 8,produto: "Mesa",preco: 150,quantidade: 1,metodoPagamento: "Mastercard"},
            {id: 9,produto: "Panela",preco: 150,quantidade: 2,metodoPagamento: "Mastercard"},
            {id: 10,produto: "Microondas",preco: 150,quantidade: 1,metodoPagamento: "Mastercard"},
        ]
    },
    {
        nome: "Arnaldo",
        vendas: [
            {id: 11,produto: "Teclado",preco: 35,quantidade: 1,metodoPagamento: "MBWay"},
            {id: 12,produto: "Teclado",preco: 35,quantidade: 1,metodoPagamento: "MBWay"},
            {id: 13,produto: "Teclado",preco: 35,quantidade: 1,metodoPagamento: "MBWay"}
        ]
    }
];

function calcularTotal(vendas: Venda): number {
   let resultado = vendas.preco * vendas.quantidade;

    console.log(resultado);

    return resultado;
}
    calcularTotal(pessoa[0].vendas[0]);

function pessoasDisponiveis() {
    console.log(1, pessoa[0].nome);
    console.log(2, pessoa[1].nome);
    console.log(3, pessoa[2].nome);

}
    pessoasDisponiveis();


function obterValoresDasVendas(vendas: Venda[]): number[] {
    const valores: number[] = vendas.map(venda => venda.preco * venda.quantidade);
    return valores;
}

console.log(obterValoresDasVendas(pessoa[1].vendas));

function calcularFaturacaoTotal(vendas: Venda[]): number{
    return(0);
}

function analisarMetodosDePagamentos(vendas: Venda[]): void{
    
}

function mostrarVendas(vendas: Venda[]): void {
    
}