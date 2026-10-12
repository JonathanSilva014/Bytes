// Vai calcular e mostrar informações sobre um prazo.

// o que deves fazer:

// 1. criar today(8 julho 2026) e deadline(15 julho 2026) com Date.UTC
// 2. Calcular os dias que faltam com getTime() e Math.floor.
// 3. imprime se deadline é posterior a todayt(comparação com getTime())
// 4. Criar extended, uma cópia de deadline, e soma-lhe 7 dias com setUTCDate.
// 5. imprime deadline e extended em portugues com Intl.DateTimeFormat.
// 6. confirma que deadline não mudou e que new Date("nada") é inválida.

const msPerDay = 24 * 60 * 60 * 1000
const dateFormat = new Intl.DateTimeFormat("pt-PT", {
    dateStyle: "long",
    timeZone: "UTC"
})
    export {};

const today: Date = new Date(Date.UTC(2026, 6, 8));
const deadline: Date = new Date(Date.UTC(2026, 6, 15));

console.log(Math.floor((deadline.getTime() - today.getTime()) / msPerDay))
console.log(deadline.getTime() > today.getTime())

const extended = new Date(deadline.getTime())
extended.setUTCDate(extended.getUTCDate() + 7)

console.log(dateFormat.format(extended))
console.log(dateFormat.format(deadline))
console.log(Number.isNaN(new Date("Nada").getTime()))
