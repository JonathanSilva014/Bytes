// Vais formatar um preço e uma data para o utilizador 

// oq que fazer

// 1. Criar priceFormat COM new Inil.NumberFormat ("pt-PT", {style: "currency", currency: "EUR"}).format(price)
// 2. Criar dateFormat COM new Intl.DateTimeFormat("pt-PT", {dateStyle: "full", timeStyle: "long"}).format(date)
// 3. Criar as funções formatPrice(Value: number): string e formatDate(date: Date): string
// 4. Faz console.log de formatPrice (19.9) e de formatDate com Date.UTC(2026, 0,15).

const priecFormat = new Intl.NumberFormat("pt-PT", {
    style: "currency", 
    currency: "EUR"
});

const dateFormat = new Intl.DateTimeFormat("pt-PT", {
    dateStyle: "long",
    timeZone: "UTC"
});

function formatPrice(value: number): string {
    return priecFormat.format(value);
}

function formatDate(date: Date): string {
    return dateFormat.format(date);
}

console.log(formatPrice(19.9));
console.log(formatDate(new Date(Date.UTC(2026, 0, 15))));